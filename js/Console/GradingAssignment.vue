<!--
@file
The assignment grading page for the course.
/cl/console/grading/:assigntag
-->

<template>
  <div class="content cl-grades">
    <div class="full">
      <membersfetcher>
        <template slot-scope="fetcher">
          <table v-if="grades !== null" class="small">
            <tr class="vertical">
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
              <th v-for="part in parts" class="small"><div>{{part.name}}</div></th>
              <th v-if="grades !== null" class="small"><div>Grade</div></th>
            </tr>
            <tr v-for="user in fetcher.users" :class="user.role() !== 'T' ? 'ignore' : ''">
              <td><router-link :to="link + user.member.id">{{user.userId}}</router-link></td>
              <td><router-link :to="link + user.member.id">{{user.name}}</router-link></td>
              <td class="role">{{user.roleName()}}</td>
              <td v-for="part in parts">{{partGrade(user, part)}}</td>
              <td v-if="grades !== null">{{grade(user)}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
	import ConsoleComponentBase from 'console-cl/js/ConsoleComponentBase.vue';
	import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';

	export default {
		extends: ConsoleComponentBase,
		props: ['assigntag'],
		data: function () {
			return {
				link: Site.root + '/cl/console/grading/' + this.assigntag + '/',
				grades: null,
				parts: [],
        fetched: false
			}
		},
		components: {
			'membersfetcher': MembersFetcherComponent
		},
		mounted() {
			const member = this.$store.state.user.user.member;
			let query = {
				semester: member.semester,
				section: member.section
			};

			this.section = this.$store.getters['course/section'](member.semester, member.section);
			this.assignment = this.section.getAssignment(this.assigntag);

			this.$parent.setTitle(': ' + this.assignment.shortname + ' Grading');

			Site.api.get('/api/grade/grades/' + this.assigntag, {})
				.then((response) => {
					if (!response.hasError()) {
						this.grades = response.getData('grades').attributes;
						this.parts = response.getData('grade-parts').attributes;
					} else {
						Site.toast(this, response);
					}

				})
				.catch((error) => {
					Site.toast(this, error);
				});

		},
		methods: {
			partGrade(user, part) {
				const userGrades = this.grades[user.member.id];
				if (userGrades === undefined) {
					return '';
				}

				const partStatus = userGrades.grades[part.tag];
				if (partStatus === undefined) {
					return '';
				}

				return partStatus;
			},
			grade(user) {
				const userGrades = this.grades[user.member.id];
				if (userGrades === undefined) {
					return '';
				}

				return userGrades.grade !== null ? userGrades.grade : '';
			}
		}
	}
</script>
