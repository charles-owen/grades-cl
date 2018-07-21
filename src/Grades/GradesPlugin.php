<?php
/**
 * @file
 * Plugin class for the Grades/Gradebook Subsystem
 */

namespace CL\Grades;

use CL\Site\Site;
use CL\Site\System\Server;


/**
 * Plugin class for the Grades/Gradebook Subsystem
 */
class GradesPlugin extends \CL\Site\Components\Plugin {
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
	public function install(Site $site)
	{
		$site->addPreStartup(function (Site $site, Server $server, $time) {
			return $this->preStartup($site, $server, $time);
		});
	}

	/**
	 * Called before we start up.
	 * @param Site $site
	 * @param Server $server
	 * @param int $time Current time
	 * @return null|string redirect page.
	 */
	public function preStartup(Site $site, Server $server, $time)
	{
		// Ensure tables exist
		// TODO: Ensure grading tables exist

		$site->course->addAssignmentExtender(new GradingAssignmentExtender());
	}

}