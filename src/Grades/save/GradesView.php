<?php
/** @file
 * View class for viewing multiple grades at one time.
 */

namespace Assignments;

/** View class for viewing multiple grades at one time.
 *
 * This class manages grades for multiple assignments at one time.
 * It is used for the student view of the current grade and for
 * staff pages that view course grades. This includes the grades summary
 * pages.
 */
class GradesView extends \Manage\ManageView {
	/** @brief Constructor
	 *
	 * Obtains the current status from the session
	 * or selects the default if none indicated
	 * @param Course|\Course $course Course object
	 * @param \User $user User we are viewing
	 * @param $get The $_GET supervariable
	 * @param $session The $_SESSION supervariable
	 */
    public function __construct(\Course $course, \User $user, &$get, &$session) {
		parent::__construct($course, $user, $get, $session);

		$this->set_title('Grades for ' . $user->get_displayname());
	}
	
	/** @brief Present the grades for one user 
	 * @param $user User to present grades for
	 * @param $staffview True if this is a view for staff rather than users 
	 * @returns HTML for the presentation (table) */
	public function present_grades(\User $user, $staffview=false) {	
		
		$html = <<<TABLE
<table>
<tr>
<th>Assignment</th>
<th></th>
<th>Grade</th>
<th></th>
<th>Grade</th></tr>
TABLE;

		$section = $user->get_section();
		$sectionnum = $section->get_id();
		$id = $user->get_id();
		
		$assignments = $section->get_assignments();
	
		$total = 0;
		foreach($assignments->get_categories() as $category) {
			$name = $category->get_name();
			$percent = $category->get_percent();
			$grade = $category->compute_grade($user);
            $gradeR = round($grade, 1);
			$html .= <<<GRADE
	<tr><td class="grouphead" colspan="3">$name</td><td><em>$percent%</em></td><td class="catgrade">$gradeR</td></tr>
GRADE;
			
			$total += $percent * 0.01 * $grade;
					
			foreach($category->get_assignments() as $assignment) {
				$name = $assignment->get_name();
				$percent = round($assignment->get_percent(), 1);
				$tag = $assignment->get_tag();
				
				$grade = $assignment->get_grading()->get_grade();
				if($grade === null) {
					$grade = '&nbsp;';
				} else {
					$grade = round($grade, 1);
				}
				
				$html .= "<tr><td class=\"indent\">";
				if($staffview) {
					$url = "assignmentgrader.php?tag=$tag&id=$id";
					$returl = "lib/grading/grader.php?id=$id";
					$username = $user->get_name();
					$html .= \Backto::link($name, $url, "Grades for $username", $returl);
				} else {
					$html .= \Backto::link($name, "assignmentgrade.php?tag=$tag", "Grades", "lib/grading/grades.php");
				}
				$html .= "</td><td>$percent%</td><td>$grade</td><td colspan=\"2\"></td></tr>";
			}
		}
		
		$html .= '</table>';
	
		$total = round($total, 2);
		
		$html .= <<<NA
<p class="center">Click on each assignment for more grading detail.</p>
<p class="grade">Computed Grade: $total</p>
NA;

		return $html;
	}
	
	/**
	 * Present the grades summary for a section
	 * @param $section Section to present for 
	 * @returns HTML for the presentation */
	public function present_grades_summary(\Section $section) {
		$html = <<<HTML
</div>
<div class="scroll">
<table class="small">
<tr class="small vertical"><th>Id</th><th class="width20em">Student</th>
HTML;

		/*
		 * Create the table headings 
		 */
		$assignments = $section->get_assignments();
		foreach($assignments->get_categories() as $category) {
			foreach($category->get_assignments() as $assignment) {
				$html .= '<th><div>' . $assignment->get_shortname() . '</div></th>';
			}
			
			$html .= '<th><div>' . $category->get_name() . '</div></th>';
		}
		
		$html .= '<th><div>Total</div></th><th><div>Grade</div></th>';
		
		/*
		 * Create the table rows 
		 */
		$selected = $section->get_id();
		$users = new \Users($this->course);
		foreach($users->get_users($section, "name") as $user) {
			if($this->studentsOnly && $user->get_role() !== \User::STUDENT) {
				continue;
			}

			$thislink = $this->course->get_libroot() . "/grading/gradessummary.php";
			$gradinglink = 'grader.php?id=' . $user->get_id();
			$userid = $user->get_userid();
			$name = $user->get_name();

			$gradingId = \Backto::link($userid, $gradinglink, $this->get_title(), $thislink);
			$gradingName = \Backto::link($name, $gradinglink, $this->get_title(), $thislink);

		
			$html .= <<<ROW
<tr>
<td>$gradingId</td>
<td>$gradingName</td>
ROW;

			$total = 0;
			foreach($assignments->get_categories() as $category) {
				$name = $category->get_name();
				$percent = $category->get_percent();
				$catgrade = $category->compute_grade($user);
					
				$total += $percent * 0.01 * $catgrade;
							
				foreach($category->get_assignments() as $assignment) {
					$name = $assignment->get_name();
					$percent = round($assignment->get_percent(), 1);
					$tag = $assignment->get_tag();
					
					$grade = $assignment->get_grading()->get_grade();
					if($grade === null) {
						$grade = '&nbsp;';
					} else {
						$grade = round($grade, 1);
					}
					
					$html .= <<<GRADE
<td>$grade</td>
GRADE;
				}

                $catgradeR = round($catgrade, 1);
				$html .= <<<GRADE
<td><em>$catgradeR</em></td>
GRADE;
			}

			$total = round($total, 1);
			$grade = $section->to_grade($total);
			$html .= <<<GRADE
<td>$total</td><td>$grade</td>
GRADE;

			$html .= '</tr>';
		}
		
		$html .= '</tr></table></div><div class="content">';
		
		return $html;
	}

	/**
	 * Present the grade links for all students for a section
	 * @param $section Section to present for
	 * @returns HTML for the presentation */
	public function present_grades_links(\Section $section) {
		$html = <<<HTML
<table>
<tr><th>Id</th><th>Student</th></tr>
HTML;

		/*
		 * Create the table rows 
		 */
		$selected = $section->get_id();
		$users = new \Users($this->course);
		foreach($users->get_users($section, "name") as $user) {
			if($this->studentsOnly && $user->get_role() !== \User::STUDENT) {
				continue;
			}

			$thislink = $this->course->get_libroot() . "/grading/gradeslinks.php";
			$gradinglink = 'grader.php?id=' . $user->get_id();
			$userid = $user->get_userid();
			$name = $user->get_name();

			$gradingId = \Backto::link($userid, $gradinglink, $this->get_title(), $thislink);
			$gradingName = \Backto::link($name, $gradinglink, $this->get_title(), $thislink);


			$html .= <<<ROW
<tr><td>$gradingId</td><td>$gradingName</td></tr>
ROW;
		}

		$html .= '</table>';

		return $html;
	}
	
	/** @brief Create a CSV file with the grades summary
	 * @param $section Section to create the summary for
	 * @param $fp File handle to write the CSV to */
	public function csv_grades_summary(\Section $section, $fp) {

		/*
		 * Create the table headings 
		 */
		$headings = array('Id', 'Student');
		
		$assignments = $section->get_assignments();
		foreach($assignments->get_categories() as $category) {
			foreach($category->get_assignments() as $assignment) {
				$headings[] = $assignment->get_name();
			}
			
			$headings[] = $category->get_name();
		}
		
		$headings[] = 'Total';
		$headings[] = 'Grade';
	
		fputcsv($fp, $headings);
		
		/*
		 * Create the table rows 
		 */
		$selected = $section->get_id();
		$users = new \Users($this->course);
		foreach($users->get_users($section, "name") as $user) {
			if($this->studentsOnly && $user->get_role() !== \User::STUDENT) {
				continue;
			}
			
			
			$userid = $user->get_userid();
			$name = $user->get_name();
			$row = array($userid, $name);

			$total = 0;
			foreach($assignments->get_categories() as $category) {
				$name = $category->get_name();
				$percent = $category->get_percent();
				$catgrade = $category->compute_grade($user);
					
				$total += $percent * 0.01 * $catgrade;
							
				foreach($category->get_assignments() as $assignment) {
					$name = $assignment->get_name();
					$percent = round($assignment->get_percent(), 1);
					$tag = $assignment->get_tag();
					
					$grade = $assignment->get_grading()->get_grade();
					if($grade === null) {
						$row[] = 0;
					} else {
						$row[] = round($grade, 1);
					}
				}
				
				$row[] = $catgrade;
			}
			
			$total = round($total, 1);
			$grade = $section->to_grade($total);
			$row[] = $total;
			$row[] = $grade;
			
			fputcsv($fp, $row);
		}
		
	}
}
