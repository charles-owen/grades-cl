<?php
/** @file
 * View class for grading and viewing of grades
 *
 * Used by:
 *
 * assignmentgrader.php - Grading page for an individual user
 * assignmentgrade.php - Grade presentation for an individual user
 * gradingpost.php - Currently posts the grades. Need to factor out the Controller here...
 *
 */
 
namespace Assignments;

use \Course;
use \User;

/** This is a view for the grading pages.
 *
 * This class is used by the actual grading and the 
 * grade status pages. It is also used by the POST processing.
 * It manages grades for one user at a time.
 */
class GradingView extends \View {
	/**
     * Constructor
	 *
	 * This is used for both staff and user pages. For staff
	 * usage such as the grading and grade posting pages, $user
	 * and $assignment are null. For user pages, the User and Assignment object
	 * are passed to the function.
	 *
	 *  $user
	 *  $gradeUser
	 *  $assignment Assignment object if providing grades to a user.
     *
	 * @param Course $course The Course object
	 * @param User $user The viewing user
	 */
	public function __construct(Course $course, User $user, &$get) {
		parent::__construct($course, $user, $get);

	}

	/**
	 * Set the view for grade presentation to a user
	 * @param \User $gradeUser The user we are presenting grades for
	 * @param $request The $_REQUEST object
	 * @return bool true if successful
	 */
	public function set_grade_presenter(\User $gradeUser, $request) {

		// Student view, we display for a single user
		$this->gradeUser = $gradeUser;

		if (!$this->set_assignment($request)) {
			return false;
		}

		$assignmentname = $this->assignment->get_name();
		$username = $this->gradeUser->get_displayname();
		$this->set_title("$assignmentname Grade for $username");

		return true;
	}

	/**
	 * Set the view for grading a user
	 * @param $request Either $_GET or $_POST, depending on the page
	 * @return bool true if successful
	 */
	public function set_grading($request)
	{
		// Staff view!
		if (!$this->user->at_least(\User::GRADER)) {
			return false;
		}

		/*
          * Get request data
          */
		$id = $request['id'];
		$users = new \Users($this->course);
		$this->gradeUser = $users->get_user($id);
		if ($this->gradeUser === null) {
			return false;
		}

		$id = $this->gradeUser->id;

		if (!$this->set_assignment($request)) {
			return false;
		}

		$assignmentname = $this->assignment->get_name();
		$userId = $this->gradeUser->userid;
		$assignTag = $this->assignment->tag;
		$username = $this->gradeUser->get_displayname();
		$pid = $this->gradeUser->pid;
		$this->set_title("Grading $assignmentname for $username/$userId/$pid");
        $this->ready = "new CourseLib.Grader('#form', $id, '$assignTag');";

		/*
		 * Some grade types have aux views associated with
		 * them. This finds any of them and installs them.
		 */
		foreach($this->assignment->get_grading()->get_grades_array() as $grade) {
			$aux = $grade->get_view_aux();
			if($aux !== null) {
				$this->add_aux($aux);
			}
		}

		return true;
	}

	private function set_assignment($request) {
		if(!isset($request['tag'])) {
			return false;
		}

		$this->tag = $request['tag'];
		$this->assignment = $this->gradeUser->get_assignment($this->tag);
		if($this->assignment === null) {
			return false;
		}

		$this->assignment->load();
		$this->grading = $this->assignment->get_grading();

		return true;
	}


	
	/**
	 * Display a grading form
	 *
	 * This is the form presented for entering grades by staff
	 */
	public function grading_form() {
		$id = $this->gradeUser->id;
		$email = $this->gradeUser->email;
		$due = '';
		if(!$this->assignment->after_due($this->gradeUser, time())) {
			$date = date("g:ia D n/j/Y", $this->assignment->get_due($this->gradeUser));
			$due = '<p class="center red">** Not due until ' . $date . ' **</p>';
		}

		list($prev, $next) = $this->prev_next_html($this->gradeUser);
		$roleMsg = '';
		if($this->gradeUser->role !== \User::STUDENT) {
			$roles = \User::get_roles();
			$roleMsg = '<p class="shoutout grn">User is a ' . $roles[$this->gradeUser->role]['name'] . '</p>';
		}

		$html = <<<FORM
<div class="grading grade-box">
<form id="form" name="form" method="post">
<input id="tag" name="tag" type="hidden" value="$this->tag" />
<input id="id" name="id" type="hidden" value="$id" />
<p class="center">
$prev
<input type="submit" name="submit" id="submit" value="Submit Grades">&nbsp;&nbsp;&nbsp;
<input type="button" name="submit_exit" class="submitexit" value="Submit Grades and Exit">&nbsp;&nbsp;&nbsp;
<a href="mailto:$email">email student</a>
$next
</p>$due$roleMsg
FORM;
		$html .= '<div class="formbody">';

		$html .= $this->grading_form_body();

		$html .= <<<FORM
</div>
<p class="center" id="page-bottom">
$prev
<input type="submit" name="submit" id="submitbottom" value="Submit Grades">&nbsp;&nbsp;&nbsp;
<input type="button" name="submit_exit" class="submitexit" value="Submit Grades and Exit">
$next
</p>
</form>
FORM;

		$html .= $this->grading->reviewing_form($this->user, $this->gradeUser);

		$html .= '</div>';
		return $html;
	}
	
	/** The body of the grading form, less the wrapping form */
	public function grading_form_body() {
		$html = $this->grading->grading_form($this->user, $this->gradeUser);
        $html .= $this->present_filesystem();

        $grade = $this->grading->get_grade();
		if($grade !== null) {
			$html .= "<p class=\"grade\">Computed Grade: $grade</p>";
		} else {
			$html .= <<<NA
<p class="grade">Computed Grade: not available</p>
<p class="center">All normal categories or the override category must be completed 
in order to compute a grade.</p>
NA;
		}

		return $html;
	}

	/**
	 * Get HTML for prev and next links
	 * @param $id ID of student we want prev/next for
	 * @return array ($prevHTML, $nextHTML)
	 */
	private function prev_next_html(\User $user) {
		list($prev, $next) = $this->prev_next($user);

		$libroot = $this->course->get_libroot();

		if($prev !== null) {
			$prevHTML = <<<HTML
<a href="$libroot/grading/assignmentgrader.php?tag=$this->tag&id=$prev">
<img src="$libroot/images/previcon.png" title="Previous Student"></a>&nbsp;&nbsp;&nbsp;
HTML;
		} else {
			$prevHTML = '';
		}

		if($next !== null) {
			$nextHTML = <<<HTML
&nbsp;&nbsp;&nbsp;
<a href="$libroot/grading/assignmentgrader.php?tag=$this->tag&id=$next">
<img src="$libroot/images/nexticon.png" title="Next Student">
</a>
HTML;
		} else {
			$nextHTML = '';
		}

		return array($prevHTML, $nextHTML);
	}

    /**
     * Get the ID for the previous and next user relative to a grading user.
     * @param \User $user User we are relative to
     * @return array [previousId, nextId]
     */
	private function prev_next(\User $user) {
	    $id = $user->id;
		$users = new \Users($this->course);
		$prev = null;
		$curr = null;
		$next = null;
		foreach($users->get_users($user->section, "name") as $user) {
			if ($user->get_role() !== \User::STUDENT) {
				continue;
			}

			$prev = $curr;
			$curr = $next;
			$next = $user->id;

			if($curr == $id) {
				break;
			}
		}

		if($next == $id) {
			$prev = $curr;
			$next = null;
		}

		return [$prev, $next];
	}

	public function present_filesystem() {
        $filesystem = new \FileSystem\FileSystem($this->course);
        $files = $filesystem->query(['user'=>$this->gradeUser, 'assigntag'=>$this->assignment->tag]);
        if(count($files) === 0) {
            return '';
        }

        $html = <<<HTML
<h2>File System</h2>
<table class="small">
<tr><th>File</th></tr>
HTML;

	    foreach($files as $file) {
	        $id = $file['id'];
	        $assigntag = $file['assign'];
	        $tag = $file['tag'];
	        $name = $file['name'];
	        $libroot = $this->course->libroot;
	        $html .= <<<HTML
<tr><td><a href="$libroot/manage/file-view.php?id=$id" target="_file">$tag/$name</td></tr>
HTML;

        }
//var_dump($files);

        $html .= <<<HTML
</table>
HTML;

	    return $html;
    }
	
	/** \brief Display the student graded status form 
	 * 
	 * This is the form presented to the users to view the current grades 
	 * @returns HTML for the grade presentation form
	 */
	public function graded_form() {

		$html = '<div class="grading grade-box">';
        
        if($this->course->get_gradedispute() !== null) {
        	$html .= '<p class="center">Please address all grading questions to ' . $this->course->get_gradedispute() .
            	'</p>';
        }
        
		$html .= $this->grading->graded_form($this->gradeUser);
		
		$grade = $this->grading->get_grade();
		if($grade !== null) {
			$html .= "<p class=\"grade\">Computed Grade: $grade</p>";
		} else {
			$html .= <<<NA
<p class="grade">Computed Grade: not available</p>
<p class="center">All normal categories or the override category must be completed 
in order to compute a grade.</p>
NA;
		}
		
		$html .= '</div>';
		
		return $html;
	}
	
	
	/** Handle reading the post data and
	 * converting to database entries 
	 *
	 * This page is called by the POST data handling script.
     * @param array $post $_POST
	 */
	public function post_form(array $post) {
		$this->grading->post_form($this->gradeUser);
	}
	
	/** Name of the user being graded or viewing their own grades */
	public function get_username() { return $this->gradeUser->get_displayname(); }
	
	/** The assignment name */
	public function get_assignmentname() { return $this->assignment->get_name(); }
	
	/** The assignment gradebook tag */
	public function get_tag() {return $this->tag;}
	
	/** The section we are grading */
	public function get_sectionnum() {return $this->sectionnum;}
	
	/** The URL for the grading page for this assignment */
	public function get_gradingurl() {
		return get_libroot() . "/grading/assignmentgrading.php?tag=$this->tag&section=$this->sectionnum";
	}
	
	private $sectionnum = null;	// Section we are working on
	private $tag = null;		// Grading item tag
	private $gradeUser = null;		// User object for the user we are grading
	private $assignment;		// Course assignment object
	private $grading;			// Grading object for this assignment
}
