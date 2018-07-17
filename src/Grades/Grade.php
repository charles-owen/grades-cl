<?php
/** @file
 * Base class for a grade for assignments 
 */

namespace CL\Grades;

/**
 * Base class for an assignment grade.
 * 
 * Derived classes will specialize this for specific categories
 */
abstract class Grade {
	/// Metadata key for the grading history
	const HISTORY = 'history';

	/// Metadata key for the grade data
	const DATA = 'data';

	/** Constructor 
	 * @param int $points Number of points allocated to this grade.
	 * @param string $tag Tag that identifies this grade within the category.
	 */
	public function __construct($points, $tag) {
		$this->points = $points;
		$this->tag = $tag;
	}

	/**
	 * Get properties for this component
	 * @param string $key Name of the property
	 * @returns Set value
	 */
	public function _get($key) {
		switch($key) {
			case 'name':
				return $this->name;

			case 'points':
				return $this->points;

			case 'tag':
				return $this->tag;

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
	 * Set properties for this component
	 * @param $key Name of the property
	 * @param $value Value to set
	 */
	public function _set($key, $value) {
		switch($key) {
			case 'name':
				$this->name = $value;
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
	 * Present the grading form for staff use.
	 * @param $user User we are grading
	 * @return string HTML
	 */
	public function grading_form(\User $user) {
		$html = '';
		if($this->name !== null) {
			$html .= "<h2>$this->name</h2>";
		}

		if($this->extra !== null) {
			$html .= $this->extra->present($user);
		}

		return $html;
	}
	
	/** Present the grading form for user information purposes */
	abstract public function graded_form();
	
	/** Handle POST data from the grading form for this grading category 
	 * @param $user User we are grading */
	abstract public function post_form(\User $user);
	
	/** The computed or entered grade for this category.
	 *
	 * Must be called after grading_form(), graded_form(), or post_form()
	 * since those functions set the grade after reading it from the 
	 * database or getting it from POST data. */
	public function get_grade() {return $this->grade;}
	
	/** Set the grade for this category. 
	 * @param $grade Grade to set */
	protected function set_grade($grade) { $this->grade = $grade; }
	
	/** Load the grade information from the database row */
	public function load_grade($row) {}
	
	/** Clear the grade information */
	public function clear_grade() {
		$this->grade = null;
	}

	
	/** If true, this is an override grade */
	public function is_override() {return false;}

	/** Optional auxiliary view associated with a grade */
	public function get_view_aux() {return null;}

	private $name = null;    // Name of the grading category
	protected $points;	///< Number of points for this category
	protected $tag;		///< Grading category tag
	private $grade = null;	// Computed or supplied grade

}
