<?php
/** @file
 * Class that manages assignment grading.
 */

namespace CL\Grades;

use CL\Site\Site;
use CL\Users\User;

/**
 * Management of assignment grades
 *
 * An object of this type is attached to each Assignment object
 * and has a collection of objects derived from Grade that 
 * represent the grading components for the assignment.
 *
 * @cond
 * @property \CL\Course\Assignment assignment
 * @property array parts
 * @property number points
 * @endcond
 */
class AssignmentGrading {
	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * assignment | Assignment | The assignment these grades are for
	 * parts | array | Array of GradePart objects for this assignment
	 * points | float | Points to assign to this assignment. 0 means divide equally.
	 *
	 * @param string $property Property name
	 * @return mixed Property value
	 */
	public function __get($property) {
		switch($property) {
			case 'assignment':
				return $this->assignment;

			case 'parts':
				return $this->gradeParts;

			case 'points':
				return $this->points;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * assignment | Assignment | The assignment these grades are for
	 * points | int | Points to assign to this assignment. 0 means divide equally.
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'assignment':
				$this->assignment = $value;
				break;

			case 'points':
				$this->points = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}

	}
		
	/**
	 * Add a grade componentvp,[iy
	 * @param GradePart $grade Object derived from Grade
	 * @return GradePart object passed in
	 */
	public function add(GradePart $grade) {
		$this->gradeParts[] = $grade;
		$grade->grading = $this;
		return $grade;
	}


	/**
	 * Add a manual grading component to an assignment
	 * @param int $points Number of points allocated to this category
	 * @param string $tag Tag associated with this category
	 * @param string $name Name of the grade
	 * @return GradePart object
	 */
	public function add_manual($points, $tag, $name) {
		return $this->add(new GradeManual($points, $tag, $name));
	}


	/**
	 * Add a comment grading component to an assignment
	 * @param string $name Name of the grade
	 * @return GradePart object
	 */
	public function add_comment($name) {
		return $this->add(new GradeComment($name));
	}


	/**
	 * Add course Handbook grading to an assignment
	 * @param int $multiplier Amount the deductions are multiplied by
	 * @return GradePart object
	 */
	public function add_handbook($multiplier) {
		$handbook = $this->assignment->section->handbook;
		return $this->add(new GradeHandbook($multiplier, $handbook));
	}

	/**
	 * Add the override grading category
	 */
	public function add_override() {
		return $this->add(new GradeOverride());
	}

	/**
	 * Get all Grade objects for all users for this assignment.
	 * @return array with key member id.
	 */
	public function getAllGrades() {
		$section = $this->assignment->section;
		$semester = $section->semester;
		$sectionId = $section->id;

		// Get the raw grade data
		$gradesTable = new Grades($this->assignment->site->db);
		$rawGrades = $gradesTable->getAssignmentGrades($semester, $sectionId, $this->assignment->tag);

		// Compute it for the user
		$grades = [];

		foreach($rawGrades as $memberId => $rawMemberGrades) {
			$grades[$memberId] = [];

			$memberGrades = [];

			foreach($this->gradeParts as $gradeItem) {
				$status = $gradeItem->createStatus($memberId, $rawGrades[$memberId]);
				if($status !== null) {
					$memberGrades[$gradeItem->tag] = $status;
				}
			}

			$grade = $this->computeGrade($memberId, $rawGrades[$memberId]);

			$grades[$memberId] = [
				'grades'=>$memberGrades,
				'grade'=>$grade
			];


		}

		return $grades;
	}

	/**
	 * Get all existing Grade objects for a user for this assignment.
	 * @param User $user User we are getting the grades for.
	 * @return array of Grade objects with key gradeTag
	 */
	public function getUserGrades(User $user) {
		$gradesTable = new Grades($this->assignment->site->db);
		$grades = $gradesTable->getUserGrades($user, $this->assignment->tag);

		// This function only returns grades that exist
		// in the database. For any grade item that does not
		// exist, ask the grade item to create a new grade
		// object.
		foreach($this->gradeParts as $gradePart) {
			if(empty($grades[$gradePart->tag])) {
				$grade = $gradePart->createGrade($this->assignment->tag);
				// If the grade does not come from the grade table, the
				// function returns null.
				if($grade !== null) {
					$grades[$grade->tag] = $grade;
				}
			}
		}

		return $grades;
	}

	/**
	 * Create the grading forms for staff use
	 * @param Site $site Site object
	 * @param User $grader User doing the grading
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @param array $rubrics Rubrics for this grade, from the rubrics table.
	 * @return array of arrays, each describing a grade
	 */
	public function createGraders(Site $site, User $grader, User $user, $grades, $rubrics) {
		$graders = [];

		/*
		 * Create the HTML form for each grade part
		 */
		foreach($this->gradeParts as $gradeItem) {
			$data = $gradeItem->createGrader($site, $user, $grades);
			if(isset($rubrics[$gradeItem->tag])) {
				$data['rubric'] = $rubrics[$gradeItem->tag];
			}

			$graders[] = $data;
		}

		return $graders;
	}


	/**
	 * Create the grading presentation for students
	 * @param User $user User we are presenting
	 * @param array $grades Result from call to getUserGrades
	 * @return array of arrays, each describing a grader
	 */
	public function presentGrades(User $user, $grades) {
		$site = $this->assignment->site;
		$presented = [];

		foreach($this->gradeParts as $gradeItem) {
			$grading = $gradeItem->presentGrade($site, $user, $grades);
			if($grading !== null) {
				// Some grade parts may be skipped.
				// For example, an override grade only appears if used.
				$presented[] = $grading;
			}
		}

		return $presented;
	}

	/**
	 * Post grades for a user
	 * @param User $grader User doing the grading
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @param array $post $_POST
	 * @param int $time Current time
	 */
	public function postGraders(User $grader, User $user, array $grades, array $post, $time) {
		$site = $this->assignment->site;
		foreach($this->gradeParts as $gradePart) {
			$gradePart->postGrader($site, $grader, $user, $grades, $post, $time);
		}
	}

	/**
	 * Compute the grade for this assignment
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return int Computed grade
	 */
	public function computeGrade($memberId, array $grades) {
		$total = 0;
		$override = null;

		foreach($this->gradeParts as $gradePart) {
			$grade = $gradePart->computeGrade($memberId, $grades);
			if(isset($grade['override'])) {
				$override = $grade['override'];
			} else {
				// If any of the returned values for points is
				// null, we are not able to yet compute a grade.
				//
				// The test for existence of the point array element
				// is protection against errors in GradePart derived components.
				if(array_key_exists('points', $grade)) {
					$points = $grade['points'];
					if($total !== null && $points !== null) {
						$total += $points;
					} else {
						$total = null;
					}
				}

			}
		}

		if($override !== null) {
			return $override;
		}

		return $total !== null ? round($total, 1) : null;
	}


	/**
	 * If the user does not provide a grading category, this adds a manual one
	 */
	private function ensure_category() {
		/*
		 * Ensure there is at least one manual grading category
		 */
		if(count($this->gradeParts) === 0) {
			$this->add_manual(100, 'manual', 'Grade');
		}
	}

	/**
	 * __call() is triggered when invoking inaccessible methods in an object context.
	 * @param string $name Name of non-existent function
	 * @param array $arguments Arguments to the function call
	 * @return mixed Extension result
	 */
	public function __call($name, $arguments)
	{
		if (isset($this->extensions[$name])) {
			return $this->extensions[$name]($this, $arguments);
		} else {
			$trace = debug_backtrace();
			trigger_error(
				'Fatal error: Call to undefined method CL\Grading\AssignmentGrading::' .
				$name . '() in ' . $trace[0]['file'] .
				' on line ' . $trace[0]['line'],
				E_USER_NOTICE);
		}
	}

	/**
	 * Extend this class by adding a new function.
	 * This is used by the Step system to add "add_step"
	 * to the assignment category.
	 * @param string $name Name of the function
	 * @param \Closure $closure Closure to call.
	 */
	public function extend($name, $closure)
	{
		$this->extensions[$name] = $closure;
	}

	/**
	 * Magic function to disable displaying the section
	 * @return array Properties to dump
	 */
	public function __debugInfo()
	{
		$properties = get_object_vars($this);
		unset($properties['assignment']);
		return $properties;
	}

	/* @var  \CL\Course\Assignment */
	private $assignment;		    // Assignment the grades are for

	private $gradeParts = array();	// The GradePart objects for the assignment

	private $points = 0;            // Optional points for this assignment, 0=divide equally
	private $extensions = [];       // Extensions to this object
}
