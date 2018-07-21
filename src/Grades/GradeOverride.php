<?php
/** @file
 * Class that implements a grading category for grade overrides
 */

namespace CL\Grades;

/**
 * Grading category for grade overrides
 */
class GradeOverride extends Grade {
	
	/**
	 * Constructor
	 */
	public function __construct() {
		parent::__construct( 0, '_override', 'Grade Override');
	}

	
	/** Create the part of the form for a manual grade entry */
	public function grading_form(\User $user) {
		$html = "<h2>Grading Override</h2>";
		
		/*
		 * What is the grade for this category?
		 */
		$points = $this->get_grade();
		if($points === null) {
			$points = '';
		}
		
		$html .= <<<TABLE
<p class="center">An override grade overrides the computed grade. This is used to 
absolutely specify an assignment grade.</p>
<table class="grading">
<tr><th>Comment</th><th class="points">Points</th></tr>
<tr><td><textarea rows="8" cols="60" id="$this->tag-comment" name="$this->tag-comment">$this->comment</textarea></td>
<td><input class="points" value="$points" type="number" id="$this->tag-points" name="$this->tag-points"></td></tr>
</table>
TABLE;

		return $html;
	}
	
	/** Grade presentation page for user */
	public function graded_form() {
		$points = $this->get_grade();
		
		// Do not present if not indicated grade
		if($points === null) {
			return;
		}
		
		return <<<TABLE
<h2>Grading Override</h2>		
<p class="center">An override grade overrides the computed grade. This is used to 
absolutely specify an assignment grade.</p>
<table class="grading">
<tr><th>Comment</th><th class="points">Points</th></tr>
<tr><td><p>$this->comment</p></td>
<td>$points</td></tr>
</table>
TABLE;

	}
	

	
	/** Handle POST from the part of a form for manual grade entry 
	 * \param $user User to post the grade for */
	public function post_form(\User $user) {
		// Get the data
		$points = trim($_REQUEST["$this->tag-points"]);
		$comment = $_REQUEST["$this->tag-comment"];
		
		// Handle empty points
		if($points === '') {
			$points = null;
		}
		
		$this->set_grade($points);
		
		$this->grading->post_grade($user, $this->tag, $points, $comment);
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

		if($points != "") {
			$this->set_grade($points);
		} else {
			$this->set_grade(null);
		}
	}

	/** This is an override grade */
	public function is_override() {return true;}
	
	private $comment = '';
}
