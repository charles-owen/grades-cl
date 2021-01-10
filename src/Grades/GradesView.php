<?php
/**
 * @file
 * Student view of all of their grades
 * /cl/grades
 */

namespace CL\Grades;

use CL\Site\Site;
use CL\Course\View;
use CL\Site\System\Server;
use CL\Course\Member;

/**
 * Student view of an assignment grade
 */
class GradesView extends View {
	/**
	 * GradesView constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param int $time Current time
	 */
	public function __construct(Site $site, Server $server, $time) {
		parent::__construct($site, ['at-least'=>Member::STUDENT]);

        $this->decorApply('grades.decor.php');

		//
		// Loop over the categories, asking each for a grade
		//
		$grades = [];
		$total = 0;
		$available = 0;
		foreach($this->section->assignments->categories as $category) {
			$categoryGrades = $category->grading->computeGrade($this->user, $time);
			$total += $categoryGrades['points'] * 0.01 * $categoryGrades['grade'];
			$available += $categoryGrades['points'] * 0.01 * $categoryGrades['available'];
			$grades[] = $categoryGrades;
		}

		$data = [
			'categories' => $grades,
			'grade' => round($total, 1),
			'available'=>round($available, 1),
            'dispute'=>$this->section->assignments->gradeDispute,
            'before'=>$this->before,
            'after'=>$this->after
		];

		$this->setTitle('Grades for ' . $this->user->displayName);
		$this->addJS('grades');
		$this->addCLS('cl-grades', json_encode($data));
     }
}