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
			case 'grader':
				return $this->grader($site, $user, $server, $params, $time);

			case 'tables':
				return $this->tables($site, $server, new GradesTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
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



//	private function status(Site $site, Server $server, array $params, $time) {
//		$user = $this->isUser($site, Member::STUDENT);
//
//

//
//		$sectionStatus = new SectionStatus($site->db);
//
//		$post = $server->post;
//		if(!Server::ensureKeys($post, ['status']) || !$sectionStatus->validStatus($post['status'])) {
//			throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
//		}
//
//		$status = $post['status'];

//		$assignTag = $params[1];
//		$sectionTag = $params[2];

//		$stepSection = $assignment->get_section($sectionTag);
//		if($stepSection === null) {
//			throw new APIException("Assignment section does not exist");
//		}
//
//		$sectionStatus->set($user, $assignTag, $sectionTag, $status, $time);
//
//		return new JsonAPI();
//	}

}