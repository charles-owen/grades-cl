<?php
/**
 * @file
 * Class that implements a comment that can be added to grading pages.
 */

namespace CL\Grades;

use CL\Grades\GradePart;
use CL\Site\Site;
use CL\Users\User;


/**
 * Class that implements a comment that can be added to grading pages.
 */
class GradeComment extends GradePart {

	/**
	 * Constructor
	 * \param $points The maximum possible points for this category
	 * \param $name A category name for display
	 */
	public function __construct($name) {
		parent::__construct(0, null);
		$this->__set("name", $name);


	}


	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {


			default:
				return parent::__get($property);
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'grader':
				$this->grader = $value;
				break;

			case 'present':
				$this->present = $value;
				break;

			default:
				parent::__set($property, $value);
				break;
		}
	}


	/**
	 * Create the grading form for staff use
	 * @param Site $site The Site object
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array describing a grader
	 */
	public function createGrader(Site $site, User $user, array $grades) {
		$data = parent::createGrader($site, $user, $grades);

		$data['status'] = 0;

		$grader = $this->grader;
		if($grader !== null and is_callable($grader)) {
			$html = $grader($site, $user);
			if($html !== null) {
				$data['html'] = $html;
			}
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
		$data = parent::presentGrade($site, $user, $grades);

		$present = $this->present;
		if($present !== null and is_callable($present)) {
			$html = $present($site, $user);
			if($html !== null) {
				$data['html'] = $html;
			}
		}

		return $data;
	}


	/**
	 * Compute the grade for this assignment
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array with keys 'points' and optionally 'override'
	 */
	public function computeGrade($memberId, array $grades) {
		return ['points'=>0];
	}

	private $grader = null;
	private $present = null;
}
