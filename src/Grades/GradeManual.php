<?php
/** @file
 * Class that implements a grade for manual grading
 */

namespace CL\Grades;

use CL\Users\User;
use CL\Site\Site;

/**
 * Manually entered grades
 */
class GradeManual extends GradePart {

	/** Constructor
	 * \param $points The maximum possible points for this category
	 * \param $tag The category tag
	 * \param $name A category name for display */
	public function __construct($points, $tag, $name) {
		parent::__construct($points, $tag);
		$this->__set("name", $name);
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

		$html = <<<HTML
<div class="grader">
  <div class="comment">
  	<label>Comment
	  <textarea rows="6" class="comment" name="$this->tag-comment">$comment</textarea>
	</label>
  </div>
  <div class="points">
    <label>Points
    <input class="points" value="$points" type="number" name="$this->tag-points">
    </label>
  </div>
  <div class="points">
    <div class="label">Available</div>
    <div class="value">$this->points</div>
  </div>
</div>
HTML;

		$data['html'] = $html;
		return $data;
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
		$points = $grade->points !== null ? $grade->points : '<span class="not">Not Yet<br>Graded</span>';
		$comment = htmlentities($grade->comment !== null ? $grade->comment : '');

		$html = <<<HTML
<div class="grader">
  <div class="comment">
	<div class="label">Comment</div>
    <div class="comment">$comment</div>
  </div>
  <div class="points">
    <div class="label">Points</div>
    <div class="value">$points</div>
  </div>
  <div class="points">
    <div class="label">Available</div>
    <div class="value">$this->points</div>
  </div>
</div>
HTML;

		$data['html'] = $html;
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
	 * Compute the grade for this assignment
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array with key 'points'
	 */
	public function computeGrade(User $user, array $grades) {
		$grade = $grades[$this->tag];
		return ['points'=>$grade->points];
	}


//	/** Create the part of the form for a manual grade entry */
//	public function grading_form(\User $user) {
//		$html = parent::grading_form($user);
//        $html .= '<div class="grade">';
//
//		if ($this->rubric != null) {
//			$html .= '<div class="rubric">' .
//                \Toggle::begin("Expand to see rubric", "p") .
//                $this->rubric .
//                \Toggle::end() .
//                '</div>';
//		}
//
//		$points = $this->get_grade();
//		if ($points === null) {
//			$points = '';
//		}
//
//		$html .= <<<TABLE
//<table class="grading">
//<tr><th>Comment</th>
//<th class="points">Points</th>
//<th class="points">Available</th></tr>
//<tr><td><textarea rows="8" cols="60" class="comment" id="$this->tag-comment" name="$this->tag-comment">$this->comment</textarea></td>
//<td><input class="points" value="$points" type="number" id="$this->tag-points" name="$this->tag-points"></td>
//<td>$this->points</td></tr>
//</table>
//</div>
//TABLE;
//
//		return $html;
//	}
//
//	/** Display the grade to a user */
//	public function graded_form() {
//		$name = $this->_get("name");
//		$html = "<h2>$name</h2>";
//
//		$points = $this->get_grade();
//		if ($points === null) {
//			$points = '';
//		}
//
//		$comment = str_replace("\n", "<br>", $this->comment);
//
//		$html .= <<<TABLE
//<table class="grading">
//<tr><th>Comment</th><th class="points">Points</th><th class="points">Available</th></tr>
//<tr><td><div class="comment">$comment</div></td>
//<td class="center">$points</td>
//<td class="center">$this->points</td></tr>
//</table>
//TABLE;
//
//		return $html;
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
//		if ($points != "") {
//			$this->set_grade($points);
//		} else {
//			$this->set_grade(null);
//		}
//	}
//
//
//	/** Handle POST from the part of a form for manual grade entry */
//	public function post_form(\User $user) {
//		// Get the data
//		$points = strip_tags(trim($_POST["$this->tag-points"]));
//        $c = $_POST["$this->tag-comment"];
//		$comment = htmlentities($c);
//
//		// Handle empty points
//		if ($points === '') {
//			$points = null;
//		}
//
//		$this->set_grade($points);
//
//		$this->grading->post_grade($user, $this->tag, $points, $comment);
//	}

}
