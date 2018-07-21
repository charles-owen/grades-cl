<?php
/**
 * @file
 * Factory class that creates assignment components.
 */

namespace CL\Grades;

use CL\Course\Assignment;
use CL\Course\Assignments\AssignmentCategory;
use CL\Course\Assignments\IAssignmentExtender;

/**
 * Factory class that creates assignment components.
 *
 * The base class assignment components do not include support
 * for grading. This class is overridden by the grading subsystem
 * to add the grading components.
 */
class GradingAssignmentExtender implements IAssignmentExtender {
	/**
	 * Extend an assignment category.
	 * @param AssignmentCategory $category
	 */
	function extendAssignmentCategory(AssignmentCategory $category) {
		$category->grading = new CategoryGrading();
	}

	/**
	 * Extend an assignment.
	 * @param Assignment $assignment
	 */
	function extendAssignment(Assignment $assignment) {
		$assignment->grading = new AssignmentGrading();
	}
}