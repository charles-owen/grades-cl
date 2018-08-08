<?php
/**
 * @file
 * Represents a single grade value in the system.
 */

namespace CL\Grades;

use CL\Site\MetaData;
use CL\Site\MetaDataOwner;
use CL\Site\Site;
use CL\Users\User;

/**
 * Represents a single grade value in the system.
 *
 * Objects of this type correspond to a single row in the grade table (Grades class)
 *
 * @cond
 * @property string assignTag
 * @property string comment
 * @property int grade
 * @property string gradeTag
 * @property MetaData meta
 * @property MetaData metaData
 * @endcond
 */
class Grade implements MetaDataOwner {
	/// Metadata key for the grading history
	const HISTORY = 'history';

	/**
	 * Grade constructor.
	 * @param string $assignTag Assignment tag
	 * @param string $gradeTag Grade tag
	 * @param array $row Database table row
	 */
	public function __construct($assignTag, $gradeTag, $row = null) {
		$this->assignTag = $assignTag;
		$this->gradeTag = $gradeTag;

		if($row !== null) {
			$this->comment = $row['comment'];
			$this->points = $row['points'] !== null ? +$row['points'] : null;
			if(!empty($row['metadata'])) {
				$this->metaData = new MetaData($this, $row['metadata']);
			}
		}

		if($this->metaData === null) {
			$this->metaData = new MetaData($this);
		}
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * assignTag | string | Assignment tag
	 * comment | string | Grading comment
	 * grade | int | Grade value or null if none
	 * gradeTag | string | Grade tag
	 * meta | MetaData | Meta-data for this grade (short version)
	 * metaData | MetaData | Meta-data for this grade
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'assignTag':
				return $this->assignTag;

			case 'comment':
				return $this->comment;

			case 'points':
				return $this->points;

			case 'tag':
			case 'gradeTag':
				return $this->gradeTag;

			case 'metaData':
			case 'meta':
				return $this->metaData;

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
	 * Set the grade for a user.
	 *
	 * This records the history of grade changes if the grade or comment is changed.
	 *
	 * @param User $grader User doing the grading
	 * @param int $grade New grade value
	 * @param string $comment Comment associated with the grade (can be null)
	 * @param int $time	Timestamp for the grade
	 * @return true if the grade has changed
	 */
	public function set(User $grader, $grade, $comment, $time) {
		if($grade === $this->points && $comment === $this->comment) {
			return false;
		}

		$history = $this->metaData->get('public', Grade::HISTORY, []);
		$history[] = ['grader'=>$grader->member->id,
			'fm-grade'=>$this->points, 'fm-comment'=>$this->comment,
			'to-grade'=>$grade, 'to-comment'=>$comment,
			'time'=>$time];
		$this->metaData->set('public', Grade::HISTORY, $history);

		$this->points = $grade;
		$this->comment = $comment;
		return true;
	}

	/**
	 * Get all grade history
	 * @return array of history items
	 */
	public function getHistory() {
		return $this->metaData->get('public', Grade::HISTORY, []);
	}

	/**
	 * Write the meta-data for this user.
	 * @param Site $site Site object so we can access tables.
	 * @throws \Exception This feature is not supported for the Grade class.
	 */
	public function writeMetaData(Site $site) {
		throw new \Exception('Not supported');
	}

	private $assignTag;
	private $gradeTag;
	private $points = null;
	private $comment = null;
	private $metaData = null;
}