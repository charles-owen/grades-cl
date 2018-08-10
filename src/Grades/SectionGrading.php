<?php
/**
 * @file
 * Class that manages section grading
 */

namespace CL\Grades;

/**
 * Management of section grades
 *
 * An object of this type is attached to each Section object
 */
class SectionGrading {
	public function __construct() {
		// Standard grading scale
		$this->scale[] = array(89.5, "4.0");
		$this->scale[] = array(84.5, "3.5");
		$this->scale[] = array(79.5, "3.0");
		$this->scale[] = array(74.5, "2.5");
		$this->scale[] = array(69.5, "2.0");
		$this->scale[] = array(64.5, "1.5");
		$this->scale[] = array(59.5, "1.0");
		$this->scale[] = array(0, "0.0");
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
			case 'section':
				return $this->section;

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
			case 'section':
				$this->section = $value;
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
	 * Convert a percentage to a grade based on the
	 * set section grading scale.
	 * @param float $score Score (0 to 100)
	 */
	public function toGrade($score) {
		foreach($this->scale as $scale) {
			if($score >= $scale[0]) {
				return $scale[1];
			}
		}

		$last = end($this->scale);
		return $last[1];
	}

	private $section = null;    // Section object for this grading component
	private $scale = array();	// Grading scale, pairs like (90, 4.0)
}