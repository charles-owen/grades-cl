<?php
/** @file
 * Class that implements a grading category for grade overrides
 */

namespace CL\Grades;

use CL\Users\User;
use CL\Site\Site;

/**
 * Grading category for grade overrides
 */
class GradeOverride extends GradePart {
	
	/**
	 * Constructor
	 */
	public function __construct() {
		parent::__construct( 0, '_override', 'Grade Override');
	}


	/**
	 * Create the grading form for staff use
	 * @param User $grader User doing the grading
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array describing a grader
	 */
	public function createGrader(User $grader, User $user, array $grades) {
		$data = parent::createGrader($grader, $user, $grades);

		$grade = $grades[$this->tag];
		$points = $grade->points !== null ? $grade->points : '';
		$comment = htmlentities($grade->comment !== null ? $grade->comment : '');

		$data['html'] = <<<HTML
<div class="grader">
  <div class="comment">
  	<label>Comment
	  <textarea rows="6" class="comment" name="$this->tag-comment">$comment</textarea>
	</label>
	<p class="center notice">An override grade overrides the computed grade.<br>This is used to 
absolutely specify an assignment grade.</p>
  </div>
  <div class="points">
    <label>Points
    <input class="points" value="$points" type="number" name="$this->tag-points">
    </label>
  </div>
  <div class="points">
	<p>&nbsp;</p>
  </div>
</div>

HTML;

		return $data;
	}


	/**
	 * Post grades for a user
	 * @param Site $site Site object (for database access)
	 * @param User $grader User doing the grading
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @param array $post $_POST
	 * @param int $time Current time
	 */
	public function postGrader(Site $site, User $grader, User $user, array $grades, array $post, $time) {
		$grade = $grades[$this->tag];

		$keys = ["$this->tag-comment", "$this->tag-points"];
		$this->ensureKeys($post, $keys);

		$comment = trim($post["$this->tag-comment"]);
		if($comment === '') {
			$comment = null;
		}

		$points = trim(strip_tags($post["$this->tag-points"]));
		if($points === '') {
			$points = null;
		} else {
			$points = +$points;
		}

		if($grade->set($grader, $points, $comment, $time)) {
			$grades = new Grades($site->db);
			$grades->post($user, $grade);
		}
	}

	/**
	 * Create the grading presentation for students
	 * @param User $user User we are presenting
	 * @param array $grades Result from call to getUserGrades
	 * @return array of arrays, each describing a grader
	 */
	public function presentGrade(User $user, $grades) {
		$data = parent::presentGrade($user, $grades);

		$grade = $grades[$this->tag];
		if($grade->points === null) {
			return null;
		}

		$points = $grade->points !== null ? $grade->points : '';
		$comment = htmlentities($grade->comment !== null ? $grade->comment : '');

		$html = <<<HTML
<div class="grader">
  <div class="comment">
	<div class="label">Comment</div>
    <div class="comment">$comment</div>
    <p class="center notice">An override grade overrides the computed grade.<br>It is used to 
absolutely specify a specific assignment grade.</p>
  </div>
  <div class="points">
    <div class="label">Points</div>
    <div class="value">$points</div>
  </div>
  <div class="points">
	<p> </p>
  </div>
</div>
HTML;

		$data['html'] = $html;
		return $data;
	}

	/**
	 * Compute the grade for this assignment
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array with key 'points'
	 */
	public function computeGrade(User $user, array $grades) {
		$grade = $grades[$this->tag];
		if($grade->points !== null) {
			return ['override' => $grade->points];
		}

		return ['points'=>0];
	}

	
//	/** Create the part of the form for a manual grade entry */
//	public function grading_form(\User $user) {
//		$html = "<h2>Grading Override</h2>";
//
//		/*
//		 * What is the grade for this category?
//		 */
//		$points = $this->get_grade();
//		if($points === null) {
//			$points = '';
//		}
//
//		$html .= <<<TABLE
//<p class="center">An override grade overrides the computed grade. This is used to
//absolutely specify an assignment grade.</p>
//<table class="grading">
//<tr><th>Comment</th><th class="points">Points</th></tr>
//<tr><td><textarea rows="8" cols="60" id="$this->tag-comment" name="$this->tag-comment">$this->comment</textarea></td>
//<td><input class="points" value="$points" type="number" id="$this->tag-points" name="$this->tag-points"></td></tr>
//</table>
//TABLE;
//
//		return $html;
//	}
//
//	/** Grade presentation page for user */
//	public function graded_form() {
//		$points = $this->get_grade();
//
//		// Do not present if not indicated grade
//		if($points === null) {
//			return;
//		}
//
//		return <<<TABLE
//<h2>Grading Override</h2>
//<p class="center">An override grade overrides the computed grade. This is used to
//absolutely specify an assignment grade.</p>
//<table class="grading">
//<tr><th>Comment</th><th class="points">Points</th></tr>
//<tr><td><p>$this->comment</p></td>
//<td>$points</td></tr>
//</table>
//TABLE;
//
//	}
//
//
//
//	/** Handle POST from the part of a form for manual grade entry
//	 * \param $user User to post the grade for */
//	public function post_form(\User $user) {
//		// Get the data
//		$points = trim($_REQUEST["$this->tag-points"]);
//		$comment = $_REQUEST["$this->tag-comment"];
//
//		// Handle empty points
//		if($points === '') {
//			$points = null;
//		}
//
//		$this->set_grade($points);
//
//		$this->grading->post_grade($user, $this->tag, $points, $comment);
//	}
//
//	/** Clear the grade information */
//	public function clear_grade() {
//		parent::clear_grade();
//		$this->comment = '';
//	}
//
//
//	/** Load the grade information from the database row */
//	public function load_grade($row) {
//		parent::load_grade($row);
//
//		$points = $row['grade'];
//		$this->comment = $row['comment'];
//
//		if($points != "") {
//			$this->set_grade($points);
//		} else {
//			$this->set_grade(null);
//		}
//	}
}
