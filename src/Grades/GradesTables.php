<?php
/**
 * Table maker for the Grades subsystem tables
 */

namespace CL\Grades;

use CL\Tables\Config;

/**
 * Table maker for the Grades subsystem tables
 */
class GradesTables extends \CL\Tables\TableMaker {

	/**
	 * Table maker for the Grades subsystem tables
	 * @param Config $config Database configuration object
	 */
	public function __construct(Config $config) {
		parent::__construct($config);

		$this->add(new Grades($config));
		$this->add(new Rubrics($config));
	}
}
