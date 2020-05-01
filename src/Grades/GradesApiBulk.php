<?php
/**
 * @file
 * API resource for reading grades from a file
 */

namespace CL\Grades;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Course\Members;
use CL\Course\Member;

/**
 * API resource for reading grades in bulk from a file
 * Path: /api/grade/bulk/upload/:assigntag
 */
class GradesApiBulk extends \CL\Users\Api\Resource {
	/**
	 * ApiMembersBulk constructor
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch to this component from the router.
	 * @param Site $site The Site configuration object
	 * @param Server $server The Server object
	 * @param array $params Parameters after the path, should be empty
	 * @param array $properties Properties from the path, should be empty
	 * @param int $time Time stamp
	 * @return JsonAPI Result
	 * @throws APIException On error
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {
		$user = $this->isUser($site);

        if(count($params) < 1) {
            throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
        }

        switch($params[0]) {
            case 'upload':
                return $this->upload($site, $user, $server, $params, $time);
        }

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	private function upload(Site $site, User $user, Server $server, $params, $time) {
        if(count($params) < 2) {
            throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
        }

		$this->atLeast($user, Member::TA);

		$post = $server->post;
		$this->ensure($post, ['file', 'semester', 'section', 'mapping', 'commentMapping']);

		$file = $post['file'];
		$semesterId = trim(strip_tags($post['semester']));
		$sectionId = trim(strip_tags($post['section']));
		$idColumn = trim(strip_tags($post['idcolumn']));
        $mapping = json_decode($post['mapping'], true);
        $commentMapping = json_decode($post['commentMapping'], true);
        $assignTag = $params[1];


        //
		// Does the requested section exist?
		//
		$course = $site->course;
		$section = $course->get_section($semesterId, $sectionId);
		if($section === null) {
			throw new APIException("Section is invalid");
		}

		$rows = preg_split("/\r\n|\n|\r/", $file);
		$csv = [];
		$header = str_getcsv($rows[0]);
		for($i=1;  $i<count($rows); $i++) {
		    $data = str_getcsv($rows[$i]);
		    if(count($header) == count($data)) {
                $csv[] = array_combine($header, $data);
            }
        }

		$members = new Members($site->db);
        $grades = new Grades($site->db);
        $gradesCnt = 0;
        $usersCnt = 0;

        foreach($csv as $row) {
            // What is the ID from the data?
            if(!isset($row[$idColumn])) {
                continue;
            }

            // Find the member
            $id = trim(strip_tags($row[$idColumn]));
            if(strpos($id, '@')) {
                // This is an email address
                $recipient = $members->query(['email' => $id, 'semester'=>$semesterId, 'sectionId'=>$sectionId]);
            } else {
                // Assume this is an ID
                $recipient = $members->query(['userUser' => $id, 'semester'=>$semesterId, 'sectionId'=>$sectionId]);
            }

            if(count($recipient) < 1) {
                // User was not found
                continue;
            }

            $recipient = $recipient[0];
            $usersCnt++;

            foreach($mapping as $gradeTag => $column) {
                if(!isset($row[$column])) {
                    continue;
                }

                $points = intval(round($row[$column]));
                $grade = $grades->get($recipient, $assignTag, $gradeTag);

                $comment = '';
                if(isset($commentMapping[$gradeTag]) && isset($row[$commentMapping[$gradeTag]])) {
                    $comment = $row[$commentMapping[$gradeTag]];
                    $comment = str_replace("\\n", "\n", $comment);
                }

                $grade->set($user, $points, $comment, $time);
                $grades->post($recipient, $grade);

                $gradesCnt++;
            }
        }

		$json = new JsonAPI();
		$json->addData('results', 0, ['users'=>$usersCnt, 'grades'=>$gradesCnt]);

   	    return $json;
	}
}