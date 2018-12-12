<?php
/** @file
 * Class that implements a grade for manual grading
 */

namespace CL\Grades;

use CL\Users\User;
use CL\Site\Site;

/**
 * Manually entered grades
 *
 * @cond
 * @property bool useRubric
 * @endcond
 */
class GradeManual extends GradePart {

	/**
	 * Constructor
	 * \param $points The maximum possible points for this category
	 * \param $tag The category tag
	 * \param $name A category name for display
	 */
	public function __construct($points, $tag, $name) {
		parent::__construct($points, $tag);
		$this->__set("name", $name);
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * useRubric | boolean | True if this grade type uses the rubric system.
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'useRubric':
				return true;

			default:
				return parent::__get($property);
		}
	}

	/**
	 * Create the grading status for staff use
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return string
	 */
	public function createStatus($memberId, array $grades) {
		if(isset($grades[$this->tag])) {
			$grade = $grades[$this->tag];
			if($grade->points !== null) {
				return $grade->points;
			}
		}

		return null;
	}

	/**
	 * Create the grading form for staff use
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array describing a grader
	 */
	public function createGrader($memberId, array $grades) {
		$data = parent::createGrader($memberId, $grades);

		$grade = $grades[$this->tag];
		$points = $grade->points !== null ? $grade->points : '';
		$data['status'] = $points;
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
    <input class="points" value="$points" type="number" id="$this->tag-points" name="$this->tag-points">
    </label>
  </div>
  <div class="points">
    <div class="label">Available</div>
    <div class="value"><a class="available-clicker" data-id="$this->tag-points" title="Click to fill in points">$this->points</a></div>
  </div>
</div>
HTML;

		$data['html'] = $html;
		return $data;
	}

	/**
	 * Create the grading presentation for students
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array of arrays, each describing a grader
	 */
	public function presentGrade($memberId, array $grades) {
		$data = parent::presentGrade($memberId, $grades);

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
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array with keys 'points' and optionally 'override'
	 */
	public function computeGrade($memberId, array $grades) {
		if(isset($grades[$this->tag])) {
			$grade = $grades[$this->tag];
			return ['points'=>$grade->points];
		}

		return ['points'=>null];
	}
}
