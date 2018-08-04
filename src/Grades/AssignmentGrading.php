<?php
/** @file
 * Class that manages assignment grading.
 */

namespace CL\Grades;



/**
 * Management of assignment grades
 *
 * An object of this type is attached to each Assignment object
 * and has a collection of objects derived from Grade that 
 * represent the grading components for the assignment.
 */
class AssignmentGrading {
	/**
	 * Constructor
	 */
	public function __construct() {
	}

	/**
	 * Property get magic method
	 * @param string $key Property name
	 * @return mixed
	 */
	public function __get($key) {
		switch($key) {
			case 'assignment':
				return $this->assignment;

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
	 * @param $key Property name
	 * @param $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {
			case 'assignment':
				$this->assignment = $value;
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
	 * Add a grade component
	 * @param Grade $grade Object derived from Grade
	 * @return Grade object passed in
	 */
	public function add(Grade $grade) { 
		$this->grades[] = $grade;
		return $grade;
	}


	/**
	 * Add a manual grading component to an assignment
	 * @param int $points Number of points allocated to this category
	 * @param string $tag Tag associated with this category
	 * @param string $name Name of the grade
	 * @return Grade object
	 */
	public function add_manual($points, $tag, $name) {
		return $this->add(new GradeManual($points, $tag, $name));
	}



//    /** Add a quizzes grading category
//     * @ param $points Number of points to allocate to all quizzes
//     * @ param $tags Array of tag  => points for the quizzes this category includes
//     * @ return GradeQuizzes object
//     */
//    public function add_quizzes($points, array $tags) {
//        return $this->add(new \Quiz\GradeQuizzes($this, $points, $tags));
//    }
//
//    /** Find and retrieve the GradeQuizzes object */
//    public function get_quizzes() {
//        foreach($this->assignmentgrades as $grade) {
//            if($grade instanceof \Quiz\GradeQuizzes) {
//                return $grade;
//            }
//        }
//
//        return null;
//    }
//
//    /** Add a quizzes grading category
//     *
//     * Only valid for Step assignments!
//     * Only 1 allowed
//     *
//     * @ param $points Number of points to allocate to all quizzes
//     * @return GradeQuizzes object
//     */
//	public function add_step_quizzes($points) {
//		return $this->add(new \Step\StepGradeQuizzes($this, $points));
//	}
//
//	/** Find and retrieve the StepGradeQuizzes object */
//	public function get_step_quizzes() {
//		foreach($this->assignmentgrades as $grade) {
//			if($grade instanceof \Step\StepGradeQuizzes) {
//				return $grade;
//			}
//		}
//
//		return null;
//	}

//	/** Add course Handbook grading to an assignment
//	 * @ param $multiplier Amount the deductions are multiplied by */
//	public function add_handbook($multiplier) {
//		return $this->add(new GradeHandbook($this, $multiplier));
//	}

	/**
	 * Add the override grading category
	 */
	public function add_override() {
		return $this->add(new GradeOverride());
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
//
//	/** Provide a grading form for staff use
//	 * @param \User $user User who is viewing the grading
//	 * @param \User $gradeUser User we are grading
//	 * @return HTML for grading form
//	 */
//	public function grading_form(\User $user, \User $gradeUser) {
//		/*
//		 * Load the grades from the database for this user/assignment
//		 */
//		$this->load_grades($gradeUser);
//
//		/*
//		 * Display the form for each grading category
//		 */
//		$html = '';
//		foreach($this->assignmentgrades as $grade) {
//			$html .= $grade->grading_form($gradeUser);
//		}
//
//		/*
//		 * Display any submissions
//		 */
//		$html .= $this->present_submissions($gradeUser, true);
//
//		return $html;
//	}
//
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
		if(count($this->grades) === 0) {
			$this->add_manual(100, 'manual', 'Grade');
		}
	}


//
//	/** The Grade objects array
//	 *
//	 * Mainly used for testing purposes only
//	 * @returns array of Grade objects */
//	public function get_grades_array() {return $this->assignmentgrades;}
//

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
			
	private $assignment;		        ///< Assignment the grades are for

	private $grades = array();	        ///< The Grade objects for the assignment
}
