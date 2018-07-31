<?php
/** @file
 * Class for the grade table
 */
 
namespace CL\Grades;

use CL\Users\User;
use CL\Site\MetaData;
use CL\Course\Members;
use CL\Course\Member;
use CL\Users\Users;

/** The grade table.
 *
 * This class represents the grades table that stores the 
 * assignment grades. */
class Grades extends \CL\Tables\Table {

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
	 * @returns SQL
	 */
	public function createSQL() {
		$query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  memberid  int(11) NOT NULL, 
  assigntag varchar(30) NOT NULL, 
  gradetag  varchar(30) NOT NULL, 
  grade     int(11), 
  metadata  mediumtext, 
  PRIMARY KEY (memberid, 
  assigntag, 
  gradetag));
SQL;

		return $query;
	}

	/**
	 * Get a grade for user/assignment/gradetag.
	 * @param User $user User we are getting the grade for, must have a course membership.
	 * @param string $assignTag Assignment tag
	 * @param string $gradeTag Grade tag
	 * @return array with the keys 'grade' and 'metadata'
	 */
	public function get(User $user, $assignTag, $gradeTag) {
		$sql = <<<SQL
select grade, metadata
from $this->tablename
where memberid=? and assigntag=? and gradetag=?
SQL;

		$pdo = $this->pdo;
		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$user->member->id, $assignTag, $gradeTag]);
			$row = $stmt->fetch(\PDO::FETCH_ASSOC);
			if($row) {
				return ['grade'=>$row['grade'], 'metadata'=>new MetaData(null, $row['metadata'])];
			} else {
				return ['grade'=>null, 'metadata'=>new MetaData()];
			}
		} catch(\PDOException $e) {
			return ['grade'=>null, 'metadata'=>new MetaData()];
		}
	}

	/**
	 * Insert a record into the grades table
	 *
	 * The data associated with the grade goes into meta-data and can
	 * be strings as in comments or arrays for more complex data.
	 *
	 * @param User $user The user we are grading, must have a course membership
	 * @param User $grader The grader, can be null is grade is automatic.
	 * @param string $assignTag The assignment tag
	 * @param string $gradeTag The grade tag
	 * @param null|int $grade Grade to post. Can be null.
	 * @param mixed $data Data to associated with the grade.
	 * @param int $time Current time
	 * @return true if successful
	 */
	public function post(User $user, User $grader=null, $assignTag, $gradeTag, $grade, $data, $time) {
		// Get any existing grade
		$existing = $this->get($user, $assignTag, $gradeTag);
		$meta = $existing['metadata'];

		// Set the comment
		$meta->set('public', Grade::DATA, $data);

		// Add the grading history
		$history = $meta->get('public', Grade::HISTORY, []);
		if($grader !== null) {
			$history[] = ['grader'=>$grader->member->id, 'time'=>$time];
		} else {
			$history[] = ['grader'=>null, 'time'=>$time];
		}
		$meta->set('public', Grade::HISTORY, $history);

		$sql = <<<SQL
replace into $this->tablename(memberid, assigntag, gradetag, grade, metadata) 
values(?, ?, ?, ?, ?)
SQL;

		$pdo = $this->pdo;
		try {
			$stmt = $pdo->prepare($sql);
			return $stmt->execute([$user->member->id, $assignTag, $gradeTag, $grade, $meta->json()]);
		} catch(\PDOException $e) {
			return false;
		}

		return true;
	}


	/**
	 * Get all grades for a user/assignment.
	 * @param User $user User we are getting the grade for, must have a course membership.
	 * @param $assignTag Assignment tag
	 * @return array with the keys 'gradetag', 'grade' and 'metadata'
	 */
	public function getUserGrades(User $user, $assignTag) {
		$sql = <<<SQL
select grade, gradetag, metadata
from $this->tablename
where memberid=? and assigntag=?
SQL;

		$pdo = $this->pdo;
		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$user->member->id, $assignTag]);
			$ret = [];
			foreach($stmt->fetchAll(\PDO::FETCH_ASSOC) as $row) {
				$ret[] = ['gradetag'=>$row['gradetag'],
					'grade'=>$row['grade'],
					'metadata'=>new MetaData(null, $row['metadata'])];
			}

			return $ret;
		} catch(\PDOException $e) {
			return ['grade'=>null, 'metadata'=>new MetaData()];
		}
	}

	/**
	 * Get members with options
	 *
	 * Notice: Does not load the user metadata by default. Add 'metadata'=>true to the parameter to
	 * also load metadata.
	 */
	public function query($params = []) {
		$membersTable = new Members($this->config);
		$usersTable = new Users($this->config);

		$where = new \CL\Tables\TableWhere($this);

		if(isset($params['memberId'])) {
			$where->append('member.id=?', $params['memberId'], \PDO::PARAM_INT);
		}

		if(isset($params['userId'])) {
			$where->append('user.id=?', $params['userId']);
		}

		if(isset($params['email'])) {
			$where->append('user.email=?', $params['email']);
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

		$meta = isset($params['metadata']) && $params['metadata'] ?
			', user.metadata as user_metadata, member.metadata as member_metadata' : '';

		$sql = <<<SQL
select user.id as user_id, user.user as user_user, user.email as user_email,
user.name as user_name, user.role as user_role, user.created as user_created, 
member.id as member_id, member.userid as member_userid, member.semester as member_semester,
member.section as member_section, member.role as member_role, member.created as member_created$meta,
grade.assigntag as assigntag, grade.gradetag as gradetag, grade.grade as grade, grade.metadata as metadata
from $membersTable->tablename member
join $usersTable->tablename user
on member.userid = user.id
join $this->tablename grade
on member.id = grade.memberid
$where->where
order by `name`, user.id
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
			$user = new User($row);
			$member = new Member($row);
			$user->member = $member;

			$ret[] = ['user'=>$user,
				'assigntag'=>$row['assigntag'],
				'gradetag'=>$row['gradetag'],
				'grade'=>$row['grade'],
				'metadata'=>new MetaData(null, $row['metadata'])];
		}

		return $ret;
	}
	
}
