<template>
  <div class="content cl-grader">
    <div class="full">
      <div class="cl-autoback"></div>
      <p class="cl-title">{{json.assignment.name}}</p>
      <p v-if="json.dispute !== null" class="cl-dispute">Please direct all grading issues to <span v-html="json.dispute"></span></p>
      <div v-for="item in grades">
        <h2>{{item.name}}</h2>
        <div v-if="item.handbook === undefined" v-html="item.html"></div>
        <handbook v-else :item="item" readonly="true"></handbook>
       <grade-history :history="item.history"></grade-history>
      </div>
      <div class="grade">
        <p v-if="json.grade !== null">Computed Grade: {{json.grade}}</p>
        <template v-else>
          <p>Grade Not Available</p>
          <p class="center small notice">Grades are not available until all parts of the assignment have been graded.</p>
        </template>
      </div>
      <div class="cl-autoback"></div>
    </div>
  </div>
</template>

<script>
	import GradeHistoryComponent from '../Util/GradeHistoryComponent.vue';
	import HandbookVue from '../Handbook/Handbook.vue';

	const UserVueBase = Site.UserVueBase;

	/**
	 * The assignment grading page for presentation for a user
	 *
	 * /cl/grade/:assignment
	 * @constructor GradeAssignmentVue
	 */
	export default {
		'extends': UserVueBase,
		props: ['json'],
		components: {
			gradeHistory: GradeHistoryComponent,
			handbook: HandbookVue
		},
    computed: {
      grades() {
        return this.json.grades.filter((item) => {
          return item.html !== undefined
        })
      }
    },
		mounted() {
			this.$root.setTitle(':  ' + this.json.assignment.shortName + ' Grade for ' + this.user.displayName());

			const menu = [
				{
					name: 'Grades', click: () => {
						window.location = this.$site.root + '/cl/grades';
					}
				}
			];

			this.$parent.setMenu(menu);
		}
	}
</script>