<?php
/**
 * @file
 * View class for downloading the content of files.
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
class GradesCsvDownload extends View {
	/**
	 * FileDownload constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param int $time Current time
	 */
	public function __construct(Site $site, Server $server, $time) {
		parent::__construct($site, ['atLeast'=>Member::TA]);

		$this->server = $server;
		$this->time = $time;
	}

	/**
	 * Present the whole file including header configuration.
	 * @return string Downloaded file
	 */
	public function whole() {
		$filename = 'grades.csv';
		$server = $this->server;
		$server->header('Content-Type: text/csv');
		$server->header("Content-Transfer-Encoding: Binary");
		$server->header("Content-disposition: attachment; filename=\"" . $filename . "\"");

		/*
		 * Create the table headings
		 */
		$headings = array('Id', 'Student');

		$fp = fopen('php://output', 'w');

		$assignments = $this->section->assignments;
		foreach($assignments->categories as $category) {
			foreach($category->assignments as $assignment) {
				$headings[] = $assignment->name;
			}

			$headings[] = $category->name;
		}

		$headings[] = 'Total';
		$headings[] = 'Grade';

		fputcsv($fp, $headings);

		//
		// Get all members of this section
		//
		$membersTable = new Members($this->site->db);
		$members = $membersTable->query(['semester'=>$this->section->semester,
			'section'=>$this->section->id]);
		foreach($members as $user) {
			if($user->role !== Member::STUDENT) {
				continue;
			}

			$row = [$user->userId, $user->name];

			//
			// Loop over the categories, asking each for a grade
			//
			$total = 0;
			$available = 0;
			foreach($this->section->assignments->categories as $category) {
				$categoryGrades = $category->grading->computeGrade($user, $this->time);
				$total += $categoryGrades['points'] * 0.01 * $categoryGrades['grade'];
				$available += $categoryGrades['points'] * 0.01 * $categoryGrades['available'];

				foreach($categoryGrades['assignments'] as $assignmentGrade) {
					$row[] = $assignmentGrade['grade'];
				}

				$row[] = $categoryGrades['grade'];
			}

			$row[] = $total;

			$row[] = $this->section->grading->toGrade($total);

			fputcsv($fp, $row);
		}

//		/*
//		 * Create the table rows
//		 */
//		$selected = $section->get_id();
//		$users = new \Users($this->course);
//		foreach($users->get_users($section, "name") as $user) {
//			if($this->studentsOnly && $user->get_role() !== \User::STUDENT) {
//				continue;
//			}
//
//
//			$userid = $user->get_userid();
//			$name = $user->get_name();
//			$row = array($userid, $name);
//
//			$total = 0;
//			foreach($assignments->get_categories() as $category) {
//				$name = $category->get_name();
//				$percent = $category->get_percent();
//				$catgrade = $category->compute_grade($user);
//
//				$total += $percent * 0.01 * $catgrade;
//
//				foreach($category->get_assignments() as $assignment) {
//					$name = $assignment->get_name();
//					$percent = round($assignment->get_percent(), 1);
//					$tag = $assignment->get_tag();
//
//					$grade = $assignment->get_grading()->get_grade();
//					if($grade === null) {
//						$row[] = 0;
//					} else {
//						$row[] = round($grade, 1);
//					}
//				}
//
//				$row[] = $catgrade;
//			}
//
//			$total = round($total, 1);
//			$grade = $section->to_grade($total);
//			$row[] = $total;
//			$row[] = $grade;
//
//			fputcsv($fp, $row);
//		}

		fclose($fp);


		return '';
	}

	private $server;
	private $time;
}