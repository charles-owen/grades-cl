<template>
  <div class="content cl-grades">
    <div class="full">
      <submissions-links :assignment="assignment"></submissions-links>
      <members-fetcher>
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
              <td><router-link :to="root + link + user.member.id">{{user.userId}}</router-link></td>
              <td><router-link :to="root + link + user.member.id">{{user.name}}</router-link></td>
              <td class="role">{{user.roleName()}}</td>
              <td v-for="part in parts" class="right">{{partGrade(user, part)}}</td>
              <td v-if="grades !== null" class="right">{{grade(user)}}</td>
            </tr>
            <tr class="divider">
              <td colspan="2" class="center"><em>counts</em></td>
              <td class="center">{{fetcher.users.length}}</td>
              <td v-for="part in parts" class="right">{{partCount(fetcher.users, part)}}</td>
              <td v-if="grades !== null" class="right">{{gradesCount(fetcher.users)}}</td>
            </tr>
            <tr>
              <td colspan="2" class="center"><em>averages</em></td>
              <td class="center">&nbsp;</td>
              <td v-for="part in parts" class="right">{{partAverage(fetcher.users, part)}}</td>
              <td v-if="grades !== null" class="right">{{gradeAverage(fetcher.users)}}</td>
            </tr>
          </table>
        </template>
      </members-fetcher>
      <bulk-upload v-if="parts.length > 0 && ta" :assigntag="assigntag" :parts="parts"></bulk-upload>
    </div>
  </div>
</template>

<script>
  import GradeBulkUploadComponent from './GradeBulkUploadComponent.vue';

  const SubmissionsLinksVue = Site.SubmissionsLinksVue;
  const MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
  const ConsoleComponentBase = Site.ConsoleComponentBase;
  const Member = Site.Member;

  /**
   * The assignment grading page for the course.
   * /cl/console/grading/:assigntag
   * @constructor GradingAssignmentVue
   */
  export default {
    extends: ConsoleComponentBase,
    props: ['assigntag'],
    data: function () {
      return {
        link: '/cl/console/grading/' + this.assigntag + '/',
        grades: null,
        parts: [],
        fetched: false,
        assignment: null,
        ta: false
      }
    },
    components: {
      'membersFetcher': MembersFetcherComponentVue,
      'submissionsLinks': SubmissionsLinksVue,
      'bulk-upload': GradeBulkUploadComponent
    },
    mounted() {
      const member = this.$store.state.user.user.member;
      let query = {
        semester: member.semester,
        section: member.section
      };

      this.ta = this.user.atLeast(Member.TA);
      this.section = this.$store.getters['course/section'](member.semester, member.section);
      this.assignment = this.section.getAssignment(this.assigntag);

      this.$parent.setTitle(': ' + this.assignment.shortname + ' Grading');

      this.$site.api.get('/api/grade/grades/' + this.assigntag, {})
              .then((response) => {
                if (!response.hasError()) {
                  this.grades = response.getData('grades').attributes;
                  this.parts = response.getData('grade-parts').attributes;
                } else {
                  this.$site.toast(this, response);
                }

              })
              .catch((error) => {
                this.$site.toast(this, error);
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
      },
      partCount(users, part) {
        let cnt = 0;
        for (let user of users) {
          if (this.partGrade(user, part) !== '') {
            cnt++;
          }
        }

        return cnt;
      },
      gradesCount(users) {
        let cnt = 0;
        for (let user of users) {
          if (this.grade(user) !== '') {
            cnt++;
          }
        }

        return cnt;
      },
      partAverage(users, part) {
        let cnt = 0;
        let total = 0;
        for (let user of users) {
          let grade = this.partGrade(user, part);
          if (grade !== '') {
            cnt++;
            total += grade;
          }
        }

        if (cnt === 0) {
          return '';
        }

        return Math.round(total / cnt * 10) / 10;
      },
      gradeAverage(users) {
        let cnt = 0;
        let total = 0;
        for (let user of users) {
          let grade = this.grade(user);
          if (grade !== '') {
            cnt++;
            total += grade;
          }
        }

        if (cnt === 0) {
          return '';
        }

        return Math.round(total / cnt * 10) / 10;
      }
    }
  }
</script>
