<?php
/**
 * @file
 * Plugin class for the Grades/Gradebook Subsystem
 */

namespace CL\Grades;

use CL\Console\ConsoleView;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Course\AssignmentCategory;
use CL\Course\Assignment;
use CL\Site\Router;
use CL\Course\Section;

/**
 * Plugin class for the Grades/Gradebook Subsystem
 */
class GradesPlugin extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'grades';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['course'];}

	/**
	 * Install the plugin
	 * @param Site $site The Site configuration object
	 */
	public function install(Site $site) {
	}


	/**
	 * AssignmentCategory and Assignment are extended with
	 * the grading components.
	 * @param Site $site The site configuration component
	 */
	public function ensureTables(Site $site) {
		$maker = new GradesTables($site->db);
		$maker->create(false);
	}

	/**
	 * Amend existing object
	 * The Router is amended with routes for the login page
	 * and for the user API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {
		if($object instanceof Router) {
			$router = $object;

			$router->addRoute(['grade', ':assigntag'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new GradeView($site, $server, $properties);
				return $view->vue();
			});

			$router->addRoute(['grades'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new GradesView($site, $server, $time);
				return $view->vue();
			});

			$router->addRoute(['grades', 'csv'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new GradesCsvDownload($site, $server, $time);
				return $view->whole();
			});

			$router->addRoute(['api', 'grade', '*'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$resource = new GradesApi();
				return $resource->apiDispatch($site, $server, $params, $properties, $time);
			});
		} else if($object instanceof Section) {
			$object->grading = new SectionGrading();
		} else if($object instanceof Assignment) {
			$object->grading = new AssignmentGrading();
		} else if($object instanceof AssignmentCategory) {
			$object->grading = new CategoryGrading();
		} else if($object instanceof ConsoleView) {
			$object->addJS('grades');
		}
	}
}