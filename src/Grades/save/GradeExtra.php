<?php
/**
 * @file
 * Extra information that can be attached to a Grade element
 * to support passing information to the grading page
 * or computing information on that page.
 */

namespace Assignments;

/**
 * Extra information that can be attached to a Grade element
 * to support passing information to the grading page
 * or computing information on that page.
 *
 * This is an abstract base class for any added components.
 */
abstract class GradeExtra {

	abstract function present(\User $user);
}