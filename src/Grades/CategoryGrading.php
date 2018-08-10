<?php
/**
 * @file
 * Grading for a category. Attaches to the category object.
 */

namespace CL\Grades;

use CL\Users\User;

/**
 * Grading for a category. Attaches to the category object.
 */
class CategoryGrading {

	/**
	 * Return the category data in a form suitable for sending
	 * to the client.
	 *
	 * @return array with keys 'name' and 'points'
	 */
	public function data() {
		return [
			'points'=>$this->points
		];
	}

	/**
	 * Property get magic method
	 * @param string $key Property name
	 * @return mixed
	 */
	public function __get($key) {
		switch($key) {
			case 'category':
				return $this->category;

			case 'dropLowest':
				return $this->dropLowest;

			case 'points':
				return $this->points;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 * @param string $key Property name
	 * @param string $value Value to set
	 */
	public function __set($key, $value)
	{
		switch ($key) {
			case 'category':
				$this->category = $value;
				break;

			case 'dropLowest':
				$this->dropLowest = $value;
				break;

			case 'points':
				$this->points = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	/**
	 * Compute the grade for this category
	 */
	public function computeGrade(User $user, $time) {
		/*
		 * First, we need to ensure we have a percentage
		 * assigned to every assignment. We total what we
		 * are given and divide the remainder among all
		 * assignments that have a zero percentage
		 */
		$assignments = $this->category->assignments;
		$total = 0;
		$zeros = array();
		foreach($assignments as $assignment) {
			$assignment->load($user);
			$p = $assignment->grading->points;
			if($p == 0) {
				$zeros[] = $assignment;
			}

			$total += $p;
		}

		if(count($zeros) > 0 && $total < 100) {
			$p1 = (100.0 - $total) / count($zeros);
			foreach($zeros as $zero) {
				$zero->grading->points = $p1;
			}
		}


		/*
		 * Now collect up the grades for every assignment in the category
		 */
		$grades = [];
		$indices = [];
		foreach($assignments as $assignment) {
			$grade = [];

			$grading = $assignment->grading;

			$grade['name'] = $assignment->name;
			$grade['tag'] = $assignment->tag;
			$grade['points'] = round($grading->points, 1);

			$grade['closed'] = $assignment->after_due($user, $time);

			$rawGrades = $grading->getUserGrades($user);
			$grading->presentGrades($user, $rawGrades);
			$computedGrade = $grading->computeGrade($user, $rawGrades);
			$grade['grade'] = $computedGrade;
			$grade['applied'] = $computedGrade !== null ? $computedGrade : 0;

			$indicies[] = count($grades);
			$grades[] = $grade;
		}

		if($this->dropLowest != 0) {
			uasort($indicies, function($a, $b) use($grades) {
				return $grades[$a]['applied'] - $grades[$b]['applied'];
			});

			for($i=0; $i<$this->droplowest; $i++) {
				$grades[$indicies[$i]]['drop'] = true;
			}
		}

		/*
		 * And total them
		 */
		$points = 0;
		$total = 0;
		$available = 0;
		foreach($grades as $grade) {
			if(isset($grade['drop'])) {
				continue;
			}

			$points += $grade['points'] * 0.01;
			$total += $grade['points'] * 0.01 * $grade['applied'];

			// The points from an assignment are considered to
			// be available when it has been graded.
			if($grade['grade'] !== null) {
				if($grade['closed'] || $grade['grade'] > 0) {
					$available += $grade['points'];
				}
			}
		}

		// Correct for any dropped assignments (missing percentages)
		if($points != 0) {
			$total /= $points;
		}

		$data = [
			'name'=>$this->category->name,
			'points'=>$this->points,
			'assignments'=>$grades,
			'grade'=>$total,
			'available'=>$available];

		return $data;
	}



	/**
	 * Magic function to disable displaying the section
	 * @return array Properties to dump
	 */
	public function __debugInfo()
	{
		$properties = get_object_vars($this);
		unset($properties['category']);
		return $properties;
	}

	private $dropLowest = 0;
	private $points = 0;        ///< Points assigned to the category
	private $category = null;   ///< AssignmentCategory object
}