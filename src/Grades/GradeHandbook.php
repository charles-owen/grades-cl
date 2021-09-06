<?php
/**
 * @file
 * Class that implements a grade for handbook deductions
 */

namespace CL\Grades;

use CL\Users\User;
use CL\Site\Site;
use CL\Course\Handbook;

/**
 * Grade for handbook deductions
 */
class GradeHandbook extends GradePart {

	/**
	 * Constructor
	 * @param int $multiplier Handbook deduction multiplier
	 * @param Handbook $handbook The Handbook object that defines the grading.
     * @param string $teaming Optional teaming this grade part is associated with
     */
	public function __construct($multiplier, Handbook $handbook, $teaming=null) {
		parent::__construct(0, '_handbook', $handbook->title, $teaming);

		$this->multiplier = $multiplier;
		$this->handbook = $handbook;
	}

	/**
	 * Create the grading status for staff use
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return string
	 */
	public function createStatus($memberId, array $grades) {
		return null;
	}


	/**
	 * Create the grading form for staff use
	 * @param Site $site The Site object
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array describing a grader
	 */
	public function createGrader(Site $site, User $user, array $grades) {
		$data = parent::createGrader($site, $user, $grades);

		$grade = $grades[$this->tag];

		$data['handbook'] = $this->handbook->data(true);
		$data['multiplier'] = $this->multiplier;
		$data['status'] = null;
		$data['html'] = '';
		$data['metadata'] = $grade->meta->get('handbook');
		return $data;
	}

	/**
	 * Create the grading presentation for students
	 * @param Site $site The Site object
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array of arrays, each describing a grader
	 */
	public function presentGrade(Site $site, User $user, array $grades) {
		$data = parent::presentGrade($site, $user, $grades);

		$grade = $grades[$this->tag];

		$data['handbook'] = $this->handbook->data(false);
		$data['multiplier'] = $this->multiplier;
		$data['status'] = null;
		$data['html'] = '';
		$data['metadata'] = $grade->meta->get('handbook');
		return $data;
	}


	/**
	 * Post grades for a user
	 * @param Site $site Site object (for database access)
	 * @param User $grader User doing the grading
	 * @param User $user User we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @param array $post $_POST
	 * @param int $time Current time
	 */
	public function postGrader(Site $site, User $grader, User $user, array $grades, array $post, $time) {
		$grade = $grades[$this->tag];

		$keys = [$this->tag];
		$this->ensureKeys($post, $keys);

		$data = json_decode($post[$this->tag], true);
		$wasData = $grade->meta->get('handbook');

		$grade->meta->setCategory('handbook', $data['metadata']);
		$points = $data['total'];

		if($grade->set($grader, $points, null, $time, $data['metadata'] !== $wasData)) {
			$grades = new Grades($site->db);
			$grades->post($user, $grade);
		}
	}

	/**
	 * Compute the grade for this assignment
	 * @param int $memberId Member we are grading
	 * @param array $grades Result from call to getUserGrades
	 * @return array with keys 'points' and optionally 'override'
	 */
	public function computeGrade($memberId, array $grades) {
		if(!isset($grades[$this->tag])) {
			return [
				'points'=> 0
			];
		}

		$grade = $grades[$this->tag];
		return [
			'points'=> $grade->points !== null ? $grade->points : 0
		];
	}



//	/**
//	 * Create the part of the form for a manual grade entry
//	 * Does not upcall base class due to different presentation format.
//	 */
//	public function grading_form(\User $user) {
//		return $this->form(false);
//	}
//
//	/** Create the student view of the handbook */
//	public function graded_form() {
//		return $this->form(true);
//	}
//
//
//
//	private function form($studentview) {
//		$title = $this->handbook->title;
//		$free = $this->handbook->free;
//
//		$html = "<h2>$title</h2>";
//
//		$html .= <<<TABLE
//<table class="grading">
//<tr><th class="category">Category<br />Multiplier: $this->multiplier</th><th>Deduction
//TABLE;
//		if($studentview) {
//			$html .= '</th></tr>';
//		} else {
//			$html .= '<br />0 to max</th></tr>';
//		}
//
//		/*
//		 * Handbook category deductions
//		 */
//		$any = false;
//		foreach($this->handbook->categories() as $category) {
//			$name = $category->get_name();
//			$tag = $category->get_tag();
//			$deduct = $category->get_deduct();
//			$rubric = $category->get_rubric();
//			$pts = isset($this->categorypts[$tag]) ? $this->categorypts[$tag] : 0;
//			if($pts == 0 && $studentview) {
//				continue;
//			}
//
//			$any = true;
//			$html .= '<tr>';
//
//			$html .= '<td>';
//			if($rubric === null || $studentview) {
//				$html .= $name;
//			} else {
//				$html .= \Toggle::begin($name, "div");
//				$html .= $rubric;
//				$html .= \Toggle::end();
//			}
//			$html .= '</td>';
//
//
//			$html .= '<td>';
//
//			if($studentview) {
//				$html .= $pts;
//			} else {
//				for($i=0;  $i<=$deduct; $i++) {
//					$d = -$i;
//					$checked = $d == $pts ? ' checked="yes"' : '';
//					$html .= <<<RADIO
//	<input type="radio" name="handbook-$tag" value="$i" id="handbook-$tag-$i"$checked onclick="javascript:handbook_calc()">
//RADIO;
//				}
//			}
//
//			$html .= '</td>';
//
//			$html .= '</tr>';
//		}
//
//		if(!$any) {
//			$html .= '<tr><td>No deduction categories indicated</td><td>&nbsp;</td></tr>';
//		}
//
//		/*
//		 * Other deductions
//		 */
//		if($studentview) {
//			if($this->otherpts != 0) {
//				$html .= "<tr><td>$this->other</td><td>$this->otherpts</td></td></tr>";
//			}
//
//		} else {
//			$html .= <<<OTHER
//<tr><td><input type="text" name="handbook-other-text" id="handbook-other-text" size="50" value="$this->other"></td><td>
//OTHER;
//			for($i=0;  $i<=4; $i++) {
//				$d = -$i;
//				$checked = $d == $this->otherpts ? ' checked="yes"' : '';
//				$html .= <<<RADIO
//<input type="radio" name="handbook-other" value="$i" id="handbook-other-$i"$checked onclick="javascript:handbook_calc()">
//RADIO;
//			}
//			$html .= "</td></tr>";
//		}
//
//		$points = $this->get_grade();
//
//		/*
//		 * Final row: Comment and total deduction
//		 */
//		if($studentview) {
//			$html .= <<<TABLE
//<tr><th>Comment</th><th>Deduction</th></tr>
//<tr><td>$this->comment</td>
//<td class="points" id="handbook-deduction">$points</td></tr>
//TABLE;
//		} else {
//			$html .= <<<TABLE
//<tr><th>Comment</th><th>Deduction</th></tr>
//<tr><td><textarea rows="4" cols="60" id="$this->tag-comment" name="$this->tag-comment">$this->comment</textarea></td>
//<td class="points" id="handbook-deduction">$points</td></tr>
//TABLE;
//		}
//
//		$html .= '</table>';
//
//		if(!$studentview) {
//		// Javascript to keep the deduction valid
//			$html .= <<<JS
//<script>
//function handbook_calc() {
//	var points = 0;
//
//JS;
//			foreach($this->handbook->categories() as $category) {
//				$tag = $category->get_tag();
//				$html .= <<<JS
//	points += -$('input:radio[name="handbook-$tag"]:checked').val();
//
//JS;
//			}
//
//			$html .= <<<JS
//	points += -$('input:radio[name="handbook-other"]:checked').val();
//	// Free points
//	if(points <= -$free) {
//		points+=$free;
//	}
//	$("#handbook-deduction").text(points*$this->multiplier);
//}
//JS;
//			$html .= '</script>';
//		}
//
//		return $html;
//	}
//
//	/** Handle POST from the part of a form for manual grade entry
//	 * \param $user User we are posting for */
//	public function post_form(\User $user) {
//		$points = 0;
//
//		$xml = new \XMLWriter();
//		$xml->openMemory();
//		$xml->startDocument('1.0', 'UTF-8');
//
//		$xml->startElement('handbook');
//
//		/*
//         * Get category deductions
//         */
//		foreach($this->handbook->categories() as $category) {
//			$tag = $category->get_tag();
//            $formid = "handbook-$tag";
//			$pts=-$_REQUEST[$formid];
//			$xml->startElement('cat');
//			$xml->writeAttribute('tag', $tag);
//			$xml->writeAttribute('pts', $pts);
//			$xml->endElement();
//
//			$points += $pts;
//		}
//
//		/*
//		 * Any "other" deduction
//		 */
//		$othercat = $_REQUEST['handbook-other-text'];
//		$pts = -$_REQUEST['handbook-other'];
//		$xml->startElement('other');
//		$xml->writeAttribute('other', $othercat);
//		$xml->writeAttribute('pts', $pts);
//		$xml->endElement();
//
//		$points += $pts;
//
//		/*
//		 * Any free points
//		 */
//		$points += $this->handbook->free;
//		if($points > 0) {
//			$points = 0;
//		}
//
//        /*
//         * Apply multiplier
//         */
//		$points *= $this->multiplier;
//
//		/*
//		 * Any 'comment'
//		 */
//		$comment = $_REQUEST['handbook-comment'];
//		$xml->startElement('comment');
//		$xml->text($comment);
//		$xml->endElement();
//
//		$xml->endElement();
//
//		$xml->endDocument();
//
//		/*
//		 * Add grade to stepgrade table
//		 */
//        $this->set_grade($points);
//
//		$this->grading->post_grade($user, $this->tag, $points, $xml->outputMemory(TRUE));
//	}
//
//
//	/** Clear the grade information */
//	public function clear_grade() {
//		parent::clear_grade();
//		$this->comment = '';
//		$this->comment = '';
//		$this->categorypts = array();
//		$this->other = "";
//		$this->otherpts = 0;
//	}
//
//
//	/** Load the grade information from the database row
//	 * @param $row Database row to load from */
//	public function load_grade($row) {
//		parent::load_grade($row);
//
//		$points = 0;
//
//		/*
//		 * Get the XML
//		 */
//		$xmlstr = $row['comment'];
//		if($xmlstr !== '') {
//			$xml = new \XMLReader();
//			$xml->xml($xmlstr);
//
//			while($xml->read()) {
//				if($xml->nodeType==\XMLReader::ELEMENT && $xml->name == 'handbook'){
//					while($xml->read()) {
//						if($xml->nodeType==\XMLReader::ELEMENT){
//							if($xml->name == 'cat') {
//								$tag = $xml->getAttribute('tag');
//								$pts = $xml->getAttribute('pts');
//								if($tag != null) {
//									$this->categorypts[$tag] = $pts;
//									$points += $pts;
//								}
//
//							} else if($xml->name == 'other') {
//								$this->other = $xml->getAttribute('other');
//								$this->otherpts = $xml->getAttribute('pts');
//								$points += $this->otherpts;
//							} else if($xml->name == 'comment') {
//								$xml->read();	// Skip to text
//								$this->comment = $xml->value;
//							}
//
//						}
//					}
//				}
//			}
//
//			$xml->close();
//		}
//
//		/*
//		 * Any free points
//		 */
//		$points += $this->handbook->free;
//		if($points > 0) {
//		    $points = 0;
//        }
//
//		/*
//		 * Apply multiplier
//		 */
//		$points *= $this->multiplier;
//
//		$this->set_grade($points);
//	}
//
//	private $comment = '';
//	private $categorypts = array();
//	private $other = "";
//	private $otherpts = 0;

	private $handbook;
	private $multiplier;
}
