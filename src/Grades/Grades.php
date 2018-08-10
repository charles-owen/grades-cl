<?php
/** @file
 * Class for the grade table
 */


namespace CL\Grades;

use CL\Tables\Table;
use CL\Users\User;
use CL\Site\MetaData;
use CL\Course\Members;
use CL\Course\Member;
use CL\Users\Users;

/** The grade table.
 *
 * This class represents the grades table that stores the 
 * assignment grades. */
class Grades extends Table {

	/**
	 * Grades constructor.
	 * @param \CL\Tables\Config $config Database configuration object
	 */
	function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, "grade");
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
  memberid  int(11) NOT NULL, 
  assigntag varchar(30) NOT NULL, 
  gradetag  varchar(30) NOT NULL, 
  points    int(11), 
  comment   mediumtext, 
  metadata  mediumtext, 
  PRIMARY KEY (memberid, 
  assigntag, 
  gradetag));
);
SQL;

		return $query;
	}

	/**
	 * Get a grade for user/assignment/gradetag.
	 * @param User $user User we are getting the grade for, must have a course membership.
	 * @param string $assignTag Assignment tag
	 * @param string $gradeTag Grade tag
	 * @return Grade object
	 */
	public function get(User $user, $assignTag, $gradeTag) {
		$sql = <<<SQL
select points, comment, metadata
from $this->tablename
where memberid=? and assigntag=? and gradetag=?
SQL;

		$pdo = $this->pdo;
		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$user->member->id, $assignTag, $gradeTag]);
			$row = $stmt->fetch(\PDO::FETCH_ASSOC);
			if($row) {
				return new Grade($assignTag, $gradeTag, $row);
			} else {
				return new Grade($assignTag, $gradeTag);
			}
		} catch(\PDOException $e) {
			return new Grade($assignTag, $gradeTag);
		}
	}

	/**
	 * Post a grade in the grade table.
	 * @param User $user User we are posting for
	 * @param Grade $grade Grade we are posting
	 * @return bool true if successful
	 */
	public function post(User $user, Grade $grade) {
		$sql = <<<SQL
replace into $this->tablename(memberid, assigntag, gradetag, points, comment, metadata) 
values(?, ?, ?, ?, ?, ?)
SQL;

		$pdo = $this->pdo;
		try {
			$stmt = $pdo->prepare($sql);
			return $stmt->execute([$user->member->id, $grade->assignTag, $grade->gradeTag,
				$grade->points, $grade->comment, $grade->meta->json()]);
		} catch(\PDOException $e) {
			return false;
		}
	}

	public function getAssignmentGrades($semester, $sectionId, $assignTag) {
		$membersTable = new Members($this->config);

		$sql = <<<SQL
select member.id as memberid, grade.points as points, grade.gradetag as gradetag, grade.comment as comment, grade.metadata as metadata
from $this->tablename grade
join $membersTable->tablename member
on member.id = grade.memberid
where member.semester=? and member.section=? and assigntag=?
SQL;

		$pdo = $this->pdo;
		// echo $this->sub_sql($sql, [$semester, $sectionId, $assignTag]);
		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$semester, $sectionId, $assignTag]);
			$ret = [];
			foreach($stmt->fetchAll(\PDO::FETCH_ASSOC) as $row) {
				$memberId = $row['memberid'];
				if(!isset($ret[$memberId])) {
					$ret[$memberId] = [];
				}

				$ret[$memberId][$row['gradetag']] = new Grade($assignTag, $row['gradetag'], $row);
			}

			return $ret;
		} catch(\PDOException $e) {
			return [];
		}
	}

	/**
	 * Get all grades for a user/assignment.
	 * @param User $user User we are getting the grade for, must have a course membership.
	 * @param string $assignTag Assignment tag
	 * @return array of Grade objects with key gradeTag
	 */
	public function getUserGrades(User $user, $assignTag) {
		$sql = <<<SQL
select points, gradetag, comment, metadata
from $this->tablename
where memberid=? and assigntag=?
SQL;

		$pdo = $this->pdo;
		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$user->member->id, $assignTag]);
			$ret = [];
			foreach($stmt->fetchAll(\PDO::FETCH_ASSOC) as $row) {
				$ret[$row['gradetag']] = new Grade($assignTag, $row['gradetag'], $row);
			}

			return $ret;
		} catch(\PDOException $e) {
			return [];
		}
	}

	/**
	 * Get member grades with options
	 *
	 * @param array $params Parameters for the search query.
	 * @return array of arrays, each with keys 'member' and 'grade'
	 */
	public function query($params = []) {
		$membersTable = new Members($this->config);

		$where = new \CL\Tables\TableWhere($this);

		if(isset($params['memberId'])) {
			$where->append('member.id=?', $params['memberId'], \PDO::PARAM_INT);
		}

		if(isset($params['userId'])) {
			$where->append('member.userid=?', $params['userId']);
		}

		if(isset($params['semester'])) {
			$where->append('member.semester=?', $params['semester']);
		}

		if(isset($params['section'])) {
			$where->append('member.section=?', $params['section']);
		}

		if(isset($params['assignTag'])) {
			$where->append('grade.assigntag=?', $params['assignTag']);
		}

		if(isset($params['gradeTag'])) {
			$where->append('grade.gradetag=?', $params['gradeTag']);
		}

		$sql = <<<SQL
select member.id as member_id, member.userid as member_userid, member.semester as member_semester,
member.section as member_section, member.role as member_role, member.created as member_created,
grade.assigntag as assigntag, grade.gradetag as gradetag, grade.points as points, grade.comment as comment, 
grade.metadata as metadata
from $membersTable->tablename member
join $this->tablename grade
on member.id = grade.memberid
$where->where
order by member.id, assigntag, gradetag 
SQL;

		if(isset($params['limit'])) {
			$sql .= "\nlimit ?";
			$where->append(null, intval($params['limit']), \PDO::PARAM_INT);
		}

		if(isset($params['offset'])) {
			$sql .= "\noffset ?";
			$where->append(null, intval($params['offset']), \PDO::PARAM_INT);
		}

		//echo $where->sub_sql($sql);
		$result = $where->execute($sql);
		$ret = [];
		foreach($result->fetchAll(\PDO::FETCH_ASSOC) as $row) {
			$member = new Member($row);
			$grade = new Grade($row['assigntag'], $row['gradetag'], $row);

			$ret[] = ['member'=>$member, 'grade'=>$grade];
		}

		return $ret;
	}
	
}
