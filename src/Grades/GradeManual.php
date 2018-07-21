<?php
/** @file
 * Class that implements a grade for manual grading
 */

namespace CL\Grades;

/**
 * Manually entered grades
 */
class GradeManual extends Grade {

	/** Constructor
	 * @param $grading The Assignment Grading object this is a member of
	 * \param $points The maximum possible points for this category
	 * \param $tag The category tag
	 * \param $name A category name for display */
	public function __construct($points, $tag, $name) {
		parent::__construct($points, $tag);
		$this->__set("name", $name);
	}

	/** Optional category rubric as HTML code or NULL if none */
	public function get_rubric() {
		return $this->rubric;
	}

	/** \copydoc get_rubric() */
	public function set_rubric($rubric) {
		$this->rubric = $rubric;
	}

	/** Magic method to simplify setting the rubric for this category
	 * @param $name The property name supplied ('rubric")
	 * @param $value The value to set
	 */
	public function __set($name, $value) {
		if ($name == 'rubric') {
			$this->rubric = $value;
		} else {
			parent::_set($name, $value);
		}
	}

	/** Category display name */
	public function get_name() {
		return $this->_get("name");
	}

	/** Create the part of the form for a manual grade entry */
	public function grading_form(\User $user) {
		$html = parent::grading_form($user);
        $html .= '<div class="grade">';

		if ($this->rubric != null) {
			$html .= '<div class="rubric">' .
                \Toggle::begin("Expand to see rubric", "p") .
                $this->rubric .
                \Toggle::end() .
                '</div>';
		}

		$points = $this->get_grade();
		if ($points === null) {
			$points = '';
		}

		$html .= <<<TABLE
<table class="grading">
<tr><th>Comment</th>
<th class="points">Points</th>
<th class="points">Available</th></tr>
<tr><td><textarea rows="8" cols="60" class="comment" id="$this->tag-comment" name="$this->tag-comment">$this->comment</textarea></td>
<td><input class="points" value="$points" type="number" id="$this->tag-points" name="$this->tag-points"></td>
<td>$this->points</td></tr>
</table>
</div>
TABLE;

		return $html;
	}

	/** Display the grade to a user */
	public function graded_form() {
		$name = $this->_get("name");
		$html = "<h2>$name</h2>";

		$points = $this->get_grade();
		if ($points === null) {
			$points = '';
		}

		$comment = str_replace("\n", "<br>", $this->comment);

		$html .= <<<TABLE
<table class="grading">
<tr><th>Comment</th><th class="points">Points</th><th class="points">Available</th></tr>
<tr><td><div class="comment">$comment</div></td>
<td class="center">$points</td>
<td class="center">$this->points</td></tr>
</table>
TABLE;

		return $html;
	}

	/** Clear the grade information */
	public function clear_grade() {
		parent::clear_grade();
		$this->comment = '';
	}


	/** Load the grade information from the database row */
	public function load_grade($row) {
		parent::load_grade($row);

		$points = $row['grade'];
		$this->comment = $row['comment'];

		if ($points != "") {
			$this->set_grade($points);
		} else {
			$this->set_grade(null);
		}
	}


	/** Handle POST from the part of a form for manual grade entry */
	public function post_form(\User $user) {
		// Get the data
		$points = strip_tags(trim($_POST["$this->tag-points"]));
        $c = $_POST["$this->tag-comment"];
		$comment = htmlentities($c);

		// Handle empty points
		if ($points === '') {
			$points = null;
		}

		$this->set_grade($points);

		$this->grading->post_grade($user, $this->tag, $points, $comment);
	}

	private $rubric = null;    // Optional grading rubric
	private $comment = '';    // Comment associated with the grade
}
