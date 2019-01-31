<?php
/**
 * @file
 * View class for downloading all rubrics.
 */

namespace CL\Grades;

use CL\Site\Site;
use CL\Course\View;
use CL\Site\System\Server;
use CL\Course\Member;
use CL\Course\Members;

/**
 * View class for downloading the content of files.
 */
class RubricsDownload extends View {
	/**
	 * FileDownload constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param int $time Current time
	 */
	public function __construct(Site $site, Server $server, $time) {
		parent::__construct($site, ['at-least'=>['grades-rubric-dumper', Member::TA]]);

		$this->server = $server;
		$this->time = $time;
	}

	/**
	 * Present the whole file including header configuration.
	 * @return string Downloaded file
	 */
	public function whole() {
		$filename = 'rubrics.txt';
		$server = $this->server;
		$server->header('Content-Type: text/csv');
		$server->header("Content-Transfer-Encoding: Binary");
		$server->header("Content-disposition: attachment; filename=\"" . $filename . "\"");

		$file = '';

		$rubricsTable = new Rubrics($this->site->db);

		$assignments = $this->section->assignments;
		foreach($assignments->categories as $category) {
			foreach($category->assignments as $assignment) {
				$assignment->load();
				$rubrics = $rubricsTable->get($this->user->member->semester,
					$this->user->member->sectionId,
					$assignment->tag);

				$grading = $assignment->grading;
				foreach($grading->parts as $part) {
					if(!$part->useRubric) {
						continue;
					}

					if(isset($rubrics[$part->tag])) {
						// We have a Rubric
						$file .= <<<FILE
----------------$category->tag---$assignment->tag---$part->tag---$category->name---$assignment->name---$part->name----------------

FILE;

						$file .= $rubrics[$part->tag];
						$file .= "\n";
					}

				}

			}

		}

		return $file;

//
//		/*
//		 * Create the table headings
//		 */
//		$headings = array('Id', 'Student');
//
//		$fp = fopen('php://output', 'w');
//

//
//		$headings[] = 'Total';
//		$headings[] = 'Grade';
//
//		fputcsv($fp, $headings);
//
//		//
//		// Get all members of this section
//		//
//		$membersTable = new Members($this->site->db);
//		$members = $membersTable->query(['semester'=>$this->section->semester,
//			'section'=>$this->section->id]);
//		foreach($members as $user) {
//			if($user->role !== Member::STUDENT) {
//				continue;
//			}
//
//			$row = [$user->userId, $user->name];
//
//			//
//			// Loop over the categories, asking each for a grade
//			//
//			$total = 0;
//			$available = 0;
//			foreach($this->section->assignments->categories as $category) {
//				$categoryGrades = $category->grading->computeGrade($user, $this->time);
//				$total += $categoryGrades['points'] * 0.01 * $categoryGrades['grade'];
//				$available += $categoryGrades['points'] * 0.01 * $categoryGrades['available'];
//
//				foreach($categoryGrades['assignments'] as $assignmentGrade) {
//					$row[] = $assignmentGrade['grade'];
//				}
//
//				$row[] = $categoryGrades['grade'];
//			}
//
//			$total = round($total, 1);
//			$row[] = $total;
//
//			$row[] = $this->section->grading->toGrade($total);
//
//			fputcsv($fp, $row);
//		}
//
//		fclose($fp);
		return '';
	}

	private $server;
	private $time;
}