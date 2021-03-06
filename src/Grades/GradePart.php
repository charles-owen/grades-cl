<?php
/** @file
 * Base class for a part of a grade for assignments
 */

namespace CL\Grades;

use CL\Site\Site;
use CL\Site\Api\APIException;
use CL\Users\User;

/**
 * Base class for a part of a grade for assignments
 *
 * A grade part is the definition of one part of a grade for an assignment. For example,
 * an assignment might have a quiz grade and two manual grades.
 * 
 * Derived classes will specialize this for specific categories
 *
 * @cond
 * @property string name
 * @property int points
 * @property string tag
 * @property boolean useRubric
 * @property AssignmentGrading grading
 * @property string teaming
 * @endcond
 */
abstract class GradePart {

	/// Metadata key for the grade data
	const DATA = 'data';

	/** Constructor 
	 * @param int $points Number of points allocated to this grade.
	 * @param string $tag Tag that identifies this grade within the category.
	 * @param string $name Name of the grade item.
     * @param string $teaming Optional teaming this grade part is associated with
	 */
	public function __construct($points, $tag, $name = null, $teaming = null) {
		$this->points = $points;
		$this->tag = $tag;
		$this->name = $name;
		$this->teaming = $teaming;
	}


	/**
	 * Get properties for this component
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * name | string | Name of the grading item (can be null)
	 * points | int | Points assigned to this grading item
	 * tag | string | Tag that identifies this grading item
	 * useRubric | boolean | Can a rubric be defined for this part? false for the base class, override in derived classes
	 * grading | AssignmentGrading | AssignmentGrading object that owns this grade part
	 *
	 * @param string $property Name of the property
	 * @return mixed Set value
	 */
	public function __get($property) {
		switch($property) {
			case 'name':
				return $this->name;

			case 'points':
				return $this->points;

			case 'tag':
				return $this->tag;

			case 'useRubric':
				return false;

			case 'grading':
				return $this->grading;

            case 'teaming':
                return $this->teaming;

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
	 * Set properties for this component
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * name | string | Name of the grading item (can be null)
	 *
	 * @param string $property Name of the property
	 * @param mixed $value Value to set
	 * grading | AssignmentGrading | AssignmentGrading object that owns this grade part
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'name':
				$this->name = $value;
				break;

			case 'grading':
				$this->grading = $value;
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
	 * Create a Grade object for this grading part.
	 *
	 * May be overridden by custom grading object, which may
	 * return null if grade does not come from the Grade table.
	 *
	 * @param $assignTag
	 * @return Grade
	 */
	public function createGrade($assignTag) {
		return new Grade($assignTag, $this->tag);
	}

	/**
	 * Create the grading status for staff use
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return string
	 */
	public function createStatus($memberId, array $grades) {
		return '';
	}

	/**
	 * Create the grading form for staff use
	 * @param Site $site The Site object
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array describing a grader
	 */
	public function createGrader(Site $site, User $user, array $grades) {

		$data = [
			'tag'=>$this->tag,
			'name'=>$this->name,
			'points'=>$this->points,
			'html'=>''
		];

		if($this->teaming !== null) {
		    $data['teaming'] = $this->teaming;
        }

        $grade = $grades[$this->tag];
        if($grade !== null) {
            $data['history'] = $grade->getHistory();
        }

		return $data;
	}

	/**
	 * Create the grading presentation for students
	 * @param Site $site The Site object
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array of arrays, each describing a grader
	 */
	public function presentGrade(Site $site, User $user, array $grades) {
		$data = [
			'tag'=>$this->tag,
			'name'=>$this->name,
			'points'=>$this->points
		];

        if($this->teaming !== null) {
            $data['teaming'] = $this->teaming;
        }

		$grade = $grades[$this->tag];
		if($grade !== null) {
			$data['history'] = $grade->getHistory();
		}

		return $data;
	}

	/**
	 * Post grades for a user
	 *
	 * Override in specific grade part types
	 *
	 * @param Site $site Site object (for database access)
	 * @param User $grader User doing the grading
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @param array $post $_POST
	 * @param int $time Current time
	 */
	public function postGrader(Site $site, User $grader, User $user, array $grades, array $post, $time) {
	}

	/**
	 * Compute the grade for this assignment
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array with keys 'points' and optionally 'override'
	 */
	public abstract function computeGrade($memberId, array $grades);


	/**
	 * Ensure all required keys are present
	 * @param array $list List to check (usually $_POST)
	 * @param array $required Array of keys (as values)
	 * @throws APIException If key is missing
	 */
	protected function ensureKeys($list, $required) {
		foreach($required as $require) {
			if(!isset($list[$require])) {
				throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
			}
		}
	}

	private $grading = null;    // AssignmentGrading owner of this grade part
	private   $name;            // Name of the grade item
	protected $points;	        // int Number of points for this part of the grade
	protected $tag;		        // The grade item tag
    private $teaming;           // Any teaming associated with this grade part
}
