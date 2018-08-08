<?php
/**
 * @file
 * View class for the main grading management page.
 *
 * /lib/grading/grading.php
 */

namespace Assignments;

/**
 * View class for the main grading management page.
 *
 * /lib/grading/grading.php
 */
class GradingManageView extends \Manage\ManageView {

	/** Constructor
	 * @param Course $course Course object
	 * @param User $user The User object
	 * @param $get The $_GET supervariable
	 * @param $session The $_SESSION supervariable
	 */
	public function __construct(\Course $course, \User $user, &$get, &$session) {
		parent::__construct($course, $user, $get, $session);

		$this->set_title("Grading Section " . $this->section_id());
	}
	
	public function present() {
		$html = $this->backto_console() .
			$this->section_selector(null, false) .
			$this->grades_summary() .
			$this->assignments() .
			$this->backto_console();
		
		return $html;
	}

	/**
	 * The Grades Summary section
	 */
	private function grades_summary() {
		return <<<HTML
<h2>Grades Summary</h2>
<ul>
<li><a href="gradessummary.php">All Students</a></li>
<li><a href="gradeslinks.php">All Students Grade Links</a></li>
</ul>
HTML;
	}

	/**
	 * Present the assignment categories
	 * @return string HTML
	 */
	private function assignments() {
		$html = "";

		$assignments = $this->get_section()->get_assignments();

		foreach($assignments->get_categories() as $category) {
			$name = $category->get_name();
			$html .= "<h2>$name</h2>\n<ul>";

			/*
			 * List assignments for the categories 
			 */
			foreach($category->get_assignments() as $assignment) {
				$assignment->load();
				$name = $assignment->get_name();
				$tag = urlencode($assignment->get_tag());
				$html .= "<li><a href=\"assignmentgrading.php?tag=$tag\">$name</a></li>";
			}

			$html .= "</ul>";
		}

		return $html;
	}
}