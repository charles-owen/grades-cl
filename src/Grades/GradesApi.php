<?php
/**
 * @file
 * API Resource for /api/grade
 */
namespace CL\Grades;

use CL\Site\Api\JsonAPI;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Course\Member;
use CL\Course\Members;


/**
 * API Resource for /api/grade
 */
class GradesApi extends \CL\Users\Api\Resource {
	/**
	 * GradesApi constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch the API routing.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $params Parameters from the router
	 * @param array $properties Properties extracted from the route
	 * @param int $time Current time
	 * @return JsonAPI response
	 * @throws APIException If an error occurs.
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {
		$user = $this->isUser($site, Member::STUDENT);

		if(count($params) < 1) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		switch($params[0]) {
			// /api/grade/all
			case 'all':
				return $this->all($site, $user, $server, $params, $time);

			// /api/grade/grader/:assigntag/:memberid
			case 'grader':
				return $this->grader($site, $user, $server, $params, $time);

			// /api/grade/grades/:assigntag
			case 'grades':
				return $this->grades($site, $user, $server, $params);

			// /api/grade/grade/:memberid
			case 'grade':
				return $this->grade($site, $user, $server, $params, $time);

			// /api/grade/tables
			case 'tables':
				return $this->tables($site, $server, new GradesTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	private function all(Site $site, User $grader, Server $server, array $params, $time) {
		$this->atLeast($grader, Member::GRADER);

		$semester = $grader->member->semester;
		$sectionId = $grader->member->sectionId;

		$section = $site->course->get_section($semester, $sectionId);
		if($section === null) {
			throw new APIException("Course section does not exist");
		}

		$data = [];

		//
		// Get all members of this section
		//
		$membersTable = new Members($site->db);
		$members = $membersTable->query(['semester'=>$semester, 'section'=>$sectionId]);
		foreach($members as $user) {
			//
			// Loop over the categories, asking each for a grade
			//
			$grades = [];
			$total = 0;
			$available = 0;
			foreach($section->assignments->categories as $category) {
				$categoryGrades = $category->grading->computeGrade($user, $time);
				$total += $categoryGrades['points'] * 0.01 * $categoryGrades['grade'];
				$available += $categoryGrades['points'] * 0.01 * $categoryGrades['available'];
				$grades[$category->tag] = $categoryGrades;
			}

			$data[$user->member->id] = [
				'member'=>$user->member->id,
				'categories' => $grades,
				'grade' => $total,
				'available'=>$available
			];
		}

		$json = new JsonAPI();
		$json->addData('grades-all', 0, $data);
		return $json;

	}

	/**
	 * Compute and return course grade
	 *
	 * /api/grade/grade/:memberid
	 *
	 * @param Site $site
	 * @param User $user
	 * @param Server $server
	 * @param array $params
	 * @param $time
	 * @return JsonAPI
	 * @throws APIException
	 */
	private function grade(Site $site, User $user, Server $server, array $params, $time) {
		$this->atLeast($user,Member::GRADER);

		if(count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$memberId = +$params[1];
		$members = new Members($site->db);
		$user = $members->getAsUser($memberId);
		if($user === null) {
			throw new APIException("Course member does not exist");
		}

		$member = $user->member;
		$section = $site->course->get_section($member->semester, $member->sectionId);
		if($section === null) {
			throw new APIException("Course section does not exist");
		}

		//
		// Loop over the categories, asking each for a grade
		//
		$grades = [];
		$total = 0;
		$available = 0;
		foreach($section->assignments->categories as $category) {
			$categoryGrades = $category->grading->computeGrade($user, $time);
			$total += $categoryGrades['points'] * 0.01 * $categoryGrades['grade'];
			$available += $categoryGrades['points'] * 0.01 * $categoryGrades['available'];
			$grades[] = $categoryGrades;
		}

		$data = [
			'categories' => $grades,
			'grade' => $total,
			'available'=>$available
		];

		$json = new JsonAPI();
		$json->addData('grade', 0, $data);
		return $json;
	}

	/**
	 * /api/grade/grades/:assigntag
	 *
	 * Get all grades for an assignment. This is for presentation
	 * of grades to staff for all students.
	 *
	 * @param Site $site The Site object
	 * @param User $user User we are returning grade for
	 * @param Server $server The Server object
	 * @param array $params Parameters from the router
	 * @return JsonAPI
	 * @throws APIException
	 */
	private function grades(Site $site, User $user, Server $server, array $params) {
		$this->atLeast($user,Member::GRADER);

		if(count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$assignTag = $params[1];
		$member = $user->member;
		$section = $site->course->get_section($member->semester, $member->sectionId);
		if($section === null) {
			throw new APIException("Course section does not exist");
		}

		$assignment = $section->get_assignment($assignTag);
		if($assignment === null) {
			throw new APIException("Assignment does not exist");
		}

		$assignment->load();
		$grading = $assignment->grading;
		$parts = [];
		foreach($grading->parts as $part) {
			$parts[] = ['tag'=>$part->tag,
				'name'=>$part->name,
				'points'=>$part->points];
		}


		// Get all existing grade data in raw form
		$grades = $grading->getAllGrades();

		$json = new JsonAPI();
		$json->addData('grades', 0, $grades);
		$json->addData('grade-parts', 0, $parts);
		return $json;
	}

	/**
	 * /api/grade/grader/:assigntag/:memberid
	 *
	 * Create the grading form for this assignment/member (GET)
	 * and post grades for assignment/member (POST)
	 *
	 * @param Site $site
	 * @param User $grader
	 * @param Server $server
	 * @param array $params
	 * @param $time
	 * @return JsonAPI
	 * @throws APIException
	 */
	private function grader(Site $site, User $grader, Server $server, array $params, $time) {
		$this->atLeast($grader,Member::GRADER);

		if(count($params) < 3) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$assignTag = $params[1];
		$memberId = +$params[2];
		$members = new Members($site->db);
		$user = $members->getAsUser($memberId);
		if($user === null) {
			throw new APIException("Course member does not exist");
		}

		$member = $user->member;
		$section = $site->course->get_section($member->semester, $member->sectionId);
		if($section === null) {
			throw new APIException("Course section does not exist");
		}


		$assignment = $section->get_assignment($assignTag);
		if($assignment === null) {
			throw new APIException("Assignment does not exist");
		}

		$assignment->load();
		$grading = $assignment->grading;

		// Get all existing grade data
		$grades = $grading->getUserGrades($user);

		if($server->server['REQUEST_METHOD'] === 'POST') {
			$post = $server->post;
			$grading->postGraders($grader, $user, $grades, $server->post, $time);
		}

		//
		// Construct data to return to runtime
		//
		$data = [];

		// Determine if assignment is due, yet?
		if(!$assignment->after_due($user, $time)) {
			$data['due'] = $assignment->get_due($user);
		}

		$data['graders'] = $grading->createGraders($grader, $user, $grades);

		$data['grade'] = $grading->computeGrade($user, $grades);

		$json = new JsonAPI();
		$json->addData('grader', $memberId, $data);
		return $json;
	}


}