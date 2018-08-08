<?php
/** @file
 * View class for grading an assignment.
 *
 * Presents the list of students for the assignment and provides
 * the grades.
 */

namespace Assignments;

/** View class for grading an assignment.
 *
 * Presents the list of students for the assignment and provides
 * the grades. Used by assignmentgrading.php
 */
class GradingAssignmentView extends \Manage\ManageView {

    /** Constructor
     *
     * Obtains the current status from the session
     * or selects the default if none indicated
     * @param \Course $course Course object
     * @param \User $user User we are viewing
     * @param $get The $_GET supervariable
     * @param $session The $_SESSION supervariable
     */
    public function __construct(\Course $course, \User $user, $get, &$session) {
        parent::__construct($course, $user, $get, $session);

        $root = $course->get_root();

        if(!isset($get['tag'])) {
            $this->set_redirect("$root/lib/grading.php");
            return;
        }

        $tag = strip_tags($get['tag']);
        $section = $this->get_section();
        $assignment = $section->get_assignment($tag);
        if($assignment === null) {
            $this->redirect = "$root/lib/grading.php";
            return;
        }

        $assignment->load();
        $this->assignment = $assignment;

        $name = $assignment->get_name();
        $sectionnum = $section->get_id();
        $this->set_title("Grading Section $sectionnum $name");
    }

	/**
	 * Present the student list page
	 * @return string HTML
	 */
	public function present() {
	    $backto = \Backto::to("Back to Grading", "grading.php");
		$html = $backto;

		$url = "assignmentgrader.php";
		$tag = $this->assignment->get_tag();

		$html .= $this->section_selector(array("tag" => $tag));

		$html .= <<<HTML
<div class="left"><table>
<caption>Select a student to grade</caption>
<tr><th>Id</th><th>Student</th><th>Grade</th></tr>
HTML;

		$grading = $this->assignment->get_grading();
        $section = $this->get_section();

		$grades = $grading->get_grades($section->semester, $section->id);
		$cnt = 0;
		$gradedcnt = 0;
		$roles = \User::get_roles();

		foreach($grades as $grade) {

			if($this->studentsOnly && $grade['role'] !== \User::STUDENT) {
				continue;
			}

			$id = $grade['id'];
			$user = $grade['user'];
			$name = $grade['name'];
			$g = $grade['grade'];
			if($g === null) {
				$g = "&nbsp;";
			} else {
			    $gradedcnt++;
            }

			$url = "assignmentgrader.php?tag=$tag&id=$id";

			$stuType = '';
			if($grade['role'] !== \User::STUDENT) {
				$stuType = ' <em class="small grn">' . $roles[$grade['role']]['name'] . '</em>';
			}

			$html .= <<<LINE
	<tr><td><a href="$url">$user</a></td><td><a href="$url">$name</a>$stuType</td><td>$g</td></tr>
LINE;

			$cnt++;
		}

		$html .= <<<HTML

</table></div>
<p class="center"><em>There are $cnt users. $gradedcnt grades have been posted.</em></p>
HTML;

		// Add any additional analysis links
		$html .= $this->present_analysis();
		$html .= $this->present_bulk_download();
        $html .= $backto;

		return $html;
	}

	/**
	 * Create any additional required links for analysis
	 * @return string HTML
	 */
	private function present_analysis() {
		$html = '';
		
		$submissions = $this->assignment->get_grading()->get_submissions();
		foreach($submissions as $submission) {
			foreach($submission->get_analysis() as $analysis) {
				$html .= $analysis->get_link();
			}
		}
		
		return $html;
	}

    /**
     * Create any additional bulk-download links
     * @return string HTML
     */
	private function present_bulk_download() {
	    $html = '';

	    $sectionTag = $this->get_section()->get_id();

        $submissions = $this->assignment->get_grading()->get_submissions();
        foreach($submissions as $submission) {
            $html .= $submission->get_bulk_download_link($this->user, ['section'=>$sectionTag]);
        }

	    return $html;
    }

	private $assignment = null;
}
