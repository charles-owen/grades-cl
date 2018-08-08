<?php
/**
 * @file
 * Student view of an assignment grade
 * /cl/grade/:assigntag
 */

namespace CL\Grades;

use CL\Site\Site;
use CL\Course\View;
use CL\Site\System\Server;
use CL\Course\Member;

/**
 * The personal calendar view for the site.
 */
class GradeView extends View {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 */
	public function __construct(Site $site, Server $server, array $properties) {
		parent::__construct($site, ['at-least'=>Member::STUDENT]);

		$assignTag = strip_tags($properties['assigntag']);

		$assignment = $this->section->get_assignment($assignTag);
		if($assignment === null) {
			$server->redirect($site->root . '/');
		}

		$assignment->load();

		$grading = $assignment->grading;

		// Get all existing grade data
		$grades = $grading->getUserGrades($this->user);

		//
		// Construct data to send to client
		//
		$data = [];

		// Determine if assignment is due, yet?
		if(!$assignment->after_due($this->user, time())) {
			$data['due'] = $assignment->get_due($this->user);
		}

		$data['grades'] = $grading->presentGrades($this->user, $grades);
		$data['grade'] = $grading->computeGrade($this->user, $grades);
		$data['assignment'] = [
			'name'=> $assignment->name,
			'shortName'=>$assignment->shortName
		];

		$this->setTitle('Grade View');
		$this->addJS('grades');
		$this->addStaff();
		$this->addCLS('cl-grade-assignment', json_encode($data));
	}
}