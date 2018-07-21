<?php
/**
 * @file
 * Grading for a category. Attaches to the category object.
 */

namespace CL\Grades;

/**
 * Grading for a category. Attaches to the category object.
 */
class CategoryGrading {

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

//	/**
//	 * Compute the grade for this category
//	 */
//	public function computeGrade(\User $user) {
//		/*
//		 * First, we need to ensure we have a percentage
//		 * assigned to every assignment. We total what we
//		 * are given and divide the remainder among all
//		 * assignments that have a zero percentage
//		 */
//		$total = 0;
//		$zeros = array();
//		foreach($this->assignments as $assignment) {
//			$assignment->load($user);
//			$p = $assignment->get_percent();
//			if($p == 0) {
//				$zeros[] = $assignment;
//			}
//
//			$total += $p;
//		}
//
//		if(count($zeros) > 0 && $total < 100) {
//			$p1 = (100.0 - $total) / count($zeros);
//			foreach($zeros as $zero) {
//				$zero->set_percent($p1);
//			}
//		}
//
//		/*
//		 * Now collect up the grades for every assignment in the category
//		 */
//		$grades = array();
//		foreach($this->assignments as $assignment) {
//			$percent = $assignment->get_percent();
//			$grading = $assignment->get_grading();
//			$grading->load_grades($user);
//			$grade = $grading->get_grade();
//			if($grade === null) {
//				$grade = 0;
//			}
//
//			$grades[] = array($grade, $percent);
//		}
//
//		if($this->droplowest != 0) {
//			uasort($grades, function($a, $b) {
//				if($a[0] == $b[0]) {
//					return 0;
//				}
//
//				return ($a[0] < $b[0]) ? 1 : -1;
//			});
//
//			for($i=0; $i<$this->droplowest; $i++) {
//				array_pop($grades);
//			}
//		}
//
//		/*
//		 * And total them
//		 */
//		$percent = 0;
//		$total = 0;
//		foreach($grades as $grade) {
//			$percent += $grade[1] * 0.01;
//			$total += $grade[1] * 0.01 * $grade[0];
//		}
//
//		// Correct for any dropped assignments (missing percentages)
//		if($percent != 0) {
//			$total /= $percent;
//		}
//
//		return $total;
//	}



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