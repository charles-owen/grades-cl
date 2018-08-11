<?php
/** @file
 * Class for the rubric table
 */


namespace CL\Grades;

use CL\Tables\Table;
use CL\Users\User;


/** The grade table.
 *
 * This class represents the grades table that stores the 
 * assignment grades. */
class Rubrics extends Table {

	/**
	 * Grades constructor.
	 * @param \CL\Tables\Config $config Database configuration object
	 */
	function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, "rubric");
	}

	/**
	 * SQL create table command
	 *
	 * Function to create an SQL create table command
	 * for the grades table
	 * @returns string SQL
	 */
	public function createSQL() {
		$query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  semester  char(4) NOT NULL, 
  section   char(3) NOT NULL, 
  assigntag varchar(30) NOT NULL, 
  gradetag  varchar(30) NOT NULL, 
  rubric    mediumtext, 
  PRIMARY KEY (semester, 
  section, 
  assigntag, 
  gradetag), 
  INDEX (assigntag));
SQL;

		return $query;
	}

	/**
	 * Get all rubrics for an assignment.
	 * @param $semester
	 * @param $sectionId
	 * @param $assignTag
	 * @return array
	 */
	public function get($semester, $sectionId, $assignTag) {
		$sql = <<<SQL
select *
from $this->tablename
where semester=? and section=? and assigntag=?
SQL;

		$pdo = $this->pdo;
		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$semester, $sectionId, $assignTag]);
			$ret = [];
			foreach($stmt->fetchAll(\PDO::FETCH_ASSOC) as $row) {
				$ret[$row['gradetag']] = $row['rubric'];
			}

			return $ret;
		} catch(\PDOException $e) {
			return [];
		}
	}

	/**
	 * Put a rubric in the rubric table
	 * @param User $user User we are posting for
	 * @param Grade $grade Grade we are posting
	 * @return bool true if successful
	 */
	public function post($semester, $sectionId, $assignTag, $gradeTag, $rubric) {
		$sql = <<<SQL
replace into $this->tablename(semester, section, assigntag, gradetag, rubric) 
values(?, ?, ?, ?, ?)
SQL;

		$pdo = $this->pdo;
		try {
			$stmt = $pdo->prepare($sql);
			return $stmt->execute([$semester, $sectionId, $assignTag, $gradeTag, $rubric]);
		} catch(\PDOException $e) {
			return false;
		}
	}
}
