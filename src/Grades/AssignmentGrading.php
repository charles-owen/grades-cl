<?php
/** @file
 * Class that manages assignment grading.
 */

namespace CL\Grades;

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
	 * Constructor
	 */
	public function __construct() {
	}

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
	 * @param User $grader User doing the grading
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array of arrays, each describing a grader
	 * @return array of rubrics
	 */
	public function createGraders(User $grader, User $user, $grades, $rubrics) {
		$graders = [];

		/*
		 * Create the HTML form for each grade part
		 */
		foreach($this->gradeParts as $gradeItem) {
			$data = $gradeItem->createGrader($user->member->id, $grades);
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
		$presented = [];

		foreach($this->gradeParts as $gradeItem) {
			$grading = $gradeItem->presentGrade($user->member->id, $grades);
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
			if(!empty($grade['override'])) {
				$override = $grade['override'];
			} else {
				// If any of the returned values for points is
				// null, we are not able to yet compute a grade.
				$points = $grade['points'];
				if($total !== null && $points !== null) {
					$total += $points;
				} else {
					$total = null;
				}
			}
		}

		if($override !== null) {
			return $override;
		}

		return $total !== null ? round($total, 1) : null;
	}


//
//	/** \brief Clear all points for all grading categories
//	 *
//	 * This is used prior to loading grades for a given user
//	 */
//	public function clear_grades() {
//		foreach($this->assignmentgrades as $grade) {
//			$grade->clear_grade();
//		}
//	}
//
//	/** \brief Total points for all grading categories */
//	public function get_points() {
//		$points = 0;
//		foreach($this->assignmentgrades as $grade) {
//			$points += $grade->get_points();
//		}
//
//		return $points;
//	}
//
//	/** Load the grades for this assignment from the database
//	 * @param $user The user to load grades for */
//	public function load_grades(\User $user=null) {
//		$this->ensure_category();
//
//
//
//		if($user === null) {
//			$user = get_user();
//		}
//
//		// Clear any existing grades data
//		$this->clear_grades();
//
//		/*
//		 * Get all grading information for this user/assignment
//		 * and put into an array.
//		 */
//		$rows = $this->grades->get_user_grades($user->get_id(),
//					$this->assignment->get_tag());
//
//		$grades = array();
//		foreach($rows as $row) {
//			$grades[$row['gradetag']] = $row;
//		}
//
//		foreach($this->assignmentgrades as $grade) {
//			if(isset($grades[$grade->get_tag()])) {
//				$grade->load_grade($grades[$grade->get_tag()]);
//			}
//		}
//	}


//	/**
//	 * Present the reviewing form for this assignment if peer review is active
//	 * @param \User $user User viewing the form
//	 * @param \User $gradeUser User being graded
//	 * @return string HTML
//	 */
//	public function reviewing_form(\User $user, \User $gradeUser) {
//		$html = '';
//
//		if($this->assignment->get_reviewing() === null) {
//			return $html;
//		}
//
//		/*
//		 * Display any peer reviews
//		 */
//		$html .= $this->present_reviews($user, $gradeUser);
//
//		/*
//		 * Display any peer reviewing
//		 */
//		$html .= $this->present_reviewing($user, $gradeUser);
//
//		$reviewForm = new \Review\ReviewForm($this->assignment->get_course());
//		$reviewForm->set_staff_review($this->assignment, $gradeUser,
//			$this->recentSubmissions);
//		$html .= $reviewForm->present_review_form();
//
//		return $html;
//	}
//
//	/** Provide a form that presents grades to a user
//	 * @returns HTML for grade presentation form
//	 */
//	public function graded_form(\User $user) {
//
//		/*
//		 * Load the grades from the database for this user/assignment
//		 */
//		$this->load_grades($user);
//
//		/*
//		 * Display the form for each grade component
//		 */
//		$html = '';
//		foreach($this->assignmentgrades as $grade) {
//			$html .= $grade->graded_form();
//		}
//
//		/*
//		 * Display any submissions
//		 */
//		$html .= $this->present_submissions($user);
//
//		/*
//		 * Display any peer reviews
//		 */
//		$html .= $this->present_reviews($user, $user);
//
//		return $html;
//	}
//
//	/**
//	 * Present all user submissions
//	 * @param $user User to present for
//	 * @param $staffview True if for the staff views
//	 * @returns HTML for the presentation
//	 */
//	private function present_submissions(\User $user, $staffview=false) {
//		// Collect of the IDs for the recent submissions
//		$subs = array();
//		$html = '';
//		foreach($this->submissions as $submission) {
//			if(!$staffview && !$submission->is_user_displayed()) {
//				continue;
//			}
//
//			$name = $submission->get_name();
//			$html .= "<h2>Submission: $name</h2>";
//
//			$html .= $submission->present_submits($user, $staffview);
//			if($submission->get_recent() !== null) {
//				$subs[] = $submission->get_recent();
//			}
//		}
//
//		$this->recentSubmissions = $subs;
//		return $html;
//	}
//
//
//	private function present_reviews(\User $user, \User $gradeUser) {
//		$html = '';
//
//		$reviewing = $this->assignment->get_reviewing();
//		if($reviewing !== null) {
//			$html .= '<p class="reviewsappear">Reviews of this assignment appear here.</p>';
//
//			$view = $reviewing->create_view();
//			$html .= $view->present_reviews($user, $gradeUser);
//		}
//
//		return $html;
//	}
//
//	/** Present all reviewing done by a user
//	 * @param $user User to present for.
//	 * @returns HTML */
//	private function present_reviewing(\User $user, \User $gradeUser) {
//		$html = '';
//
//		/*
//		 * Display any peer reviews done by this user
//		 */
//		$reviewing = $this->assignment->get_reviewing();
//		if($reviewing !== null) {
//			$html .= '<p class="reviewsappear">Reviews completed by this user appear here.</p>';
//
//			$view = $reviewing->create_view();
//			$html .= $view->present_reviewing($user, $gradeUser);
//		}
//
//		return $html;
//	}
//
//
//	/** \brief Handle reading the post data from the grading form and
//	 * converting to database entries.
//	 *
//	 * This is called from the POST handling page for the grading form.
//	 * @param $user The user we are posting a grade for */
//	public function post_form(\User $user) {
//
//		/*
//		 * Let the classes each handle the post data
//		 */
//		foreach($this->assignmentgrades as $grade) {
//			$grade->post_form($user);
//		}
//	}
//
//	/** Add a grade to the database table: grade
//	 * @param $user The user we are posting for
//	 * @param $tag The grade tag
//	 * @param $grade Grade to post, can be null
//	 * @param $comment Comment with grade
//	 */
//	public function post_grade(\User $user, $tag, $grade, $comment) {
//		$this->grades->post_grade($user->get_id(),
//			$this->assignment->get_tag(), $tag,
//			$grade, $comment);
//	}
//
//
//	/** \brief Compute the assignment grade
//	 *
//	 * This function result is only valid after at all to
//	 * grading_form() or post_form()
//	 * @returns Grade if computed or null otherwise
//	 */
//	public function get_grade() {
//		$grade = 0;			// To sum into
//		$anynull = false;	// Any grade categories not supplied?
//		$overridegrade = 0;	// Any override grade
//		$anyoverride = false;	// Any override grade provided?
//
//		foreach($this->assignmentgrades as $category) {
//			/* echo "<p>" . $category->get_name() . " " .
//				($category->has_grade() ? "yes" : "no" . " ") .
//				$category->get_grade() . "</p>"; */
//			$catgrade = $category->get_grade();
//			//echo $category->get_tag() . " $catgrade\n";
//
//			//$cattag = $category->get_tag();
//			//echo "<p>$cattag $catgrade</p>";
//			if($catgrade !== null) {
//				if($category->is_override()) {
//					$overridegrade = $catgrade;
//					$anyoverride = true;
//				} else {
//					$grade += $catgrade; // * $category->get_points() * 0.01;
//				}
//			} else {
//				if(!$category->is_override()) {
//					$anynull = true;
//				}
//			}
//		}
//
//		if($anyoverride != null) {
//			return $overridegrade;
//		} else {
//			if($anynull) {
//				return null;
//			} else {
//				return $grade;
//			}
//		}
//	}
//
//
//
//
//
//
//	/** Get grades with options from the database
//	 *
//	 * @param $semester Optional semester selection argument
//	 * @param $sectionId Optional section selection argument
//	 * @returns array containing the grades.
//	 * The array is indexed by the grade tag. Each location
//	 * contains an array with keys: id, role, user, name, grade
//	 */
//	public function get_grades($semester = null, $sectionId = null) {
//		$this->ensure_category();
//
//		$rows = $this->grades->get_grades($this->assignment->get_tag(), $semester, $sectionId);
//
//		$result = array();
//
//		$currentid = null;
//		$currentuser = null;
//		$currentname = null;
//		$currentrole = null;
//		$grades = array();
//
//		foreach($rows as $row) {
//			$id = $row['id'];
//
//			if($id !== $currentid) {
//				// We have a new user
//				// End the old one
//				if($currentid !== null) {
//					$this->process_grades($currentid, $currentuser, $currentname, $currentrole, $grades, $result);
//				}
//
//				// Start over
//				$currentid = $id;
//				$currentuser = $row['user'];
//				$currentname = $row['name'];
//				$currentrole = $row['role'];
//				$grades = array();
//
//			}
//
//			// Save for this user
//			$grades[$row['gradetag']] = $row;
//		}
//
//		if($currentid !== null) {
//			$this->process_grades($currentid, $currentuser, $currentname, $currentrole, $grades, $result);
//		}
//
//
//		return $result;
//	}
//
//	private function process_grades($id, $userid, $name, $role, $grades, &$result) {
//		$this->clear_grades();
//
//		foreach($this->assignmentgrades as $grade) {
//			if(isset($grades[$grade->get_tag()])) {
//				$grade->load_grade($grades[$grade->get_tag()]);
//			}
//		}
//
//		$grade = $this->get_grade();
//		$result[] = array('id' => $id,
//			'user' => $userid,
//			'name' => $name,
//			'role' => $role,
//			'grade' => $grade);
//
//		$this->clear_grades();
//	}

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