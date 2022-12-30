<template>
  <div class="content cl-grader">
    <div class="full">
      <member-fetcher v-on:fetched="fetched" :id="memberid" :faillink="root + '/cl/console/grades/links'">
        <template v-slot="fetcher">
          <prev-next :user="fetcher.user"></prev-next>
          <div v-if="fetcher.user !== null && grade !== null">
            <table>
              <tr>
                <th>Assignment</th><th>&nbsp;</th><th>Grade</th><th>&nbsp;</th><th>Grade</th>
              </tr>

              <template v-for="category in grade.categories">
                <tr class="cl-category">
                  <td colspan="3">{{category.name}}</td><td>{{category.points}}%</td><td>{{category.grade}}</td>
                </tr>

                <tr class="cl-assignment" v-for="assignment in category.assignments" :key="assignment.tag">
                  <td><router-link :to="`${root}/cl/console/grading/${assignment.tag}/${fetcher.user.member.id}`">{{assignment.name}}</router-link></td><td>{{Math.round(assignment.points * 10) / 10}}%</td><td>{{assignment.grade}}</td><td colspan="2">&nbsp;</td>
                </tr>
              </template>

            </table>
            <p class="center">Click on each assignment for more grading detail</p>
            <p class="center">Computed Grade: {{grade.grade}} out of {{grade.available}} available points{{per}}</p>
          </div>
        </template>
      </member-fetcher>

    </div>
  </div>
</template>

<script>
	const PrevNextMemberVue = Site.PrevNextMemberVue;
	const MemberFetcherComponentVue = Site.MemberFetcherComponentVue;
	const ConsoleComponentBase = Site.ConsoleComponentBase;

	/**
	 * Console grades presentation for a member
	 * /cl/console/grades/:num
	 * @constructor GradesMemberVue
	 */
	export default {
		extends: ConsoleComponentBase,
		props: ['memberid'],
		data: function () {
			return {
				course: this.$store.state.course.course,
				section: null,
				grade: null,
				per: ''
			}
		},
		components: {
			memberFetcher: MemberFetcherComponentVue,
			prevNext: PrevNextMemberVue,
		},
		mounted() {
			this.setTitle(': Grade');
		},
		methods: {
			fetched(user) {
				this.section = user.member.getSection(this.$store);
				this.setTitle(': ' + user.name + ' Grades');

				this.$site.api.get(`/api/grade/grade/${this.memberid}`, {})
					.then((response) => {
						if (!response.hasError()) {
							this.grade = response.getData('grade').attributes;
							if (this.grade.available > 0) {
								this.per = '(' + (this.grade.grade / this.grade.available * 100).toFixed(1) + '%)';
							}
						} else {
							this.$site.toast(this, response);
						}

					})
					.catch((error) => {
						this.$site.toast(this, error);
					});
			}
		}
	}
</script>
