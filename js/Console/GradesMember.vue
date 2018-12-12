<template>
  <div class="content cl-grader">
    <div class="full">
      <memberfetcher v-on:fetched="fetched" :id="memberid" :faillink="root + '/cl/console/grades/links'">
        <template slot-scope="fetcher">
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
                  <td><router-link :to="`${root}/cl/console/grading/${assignment.tag}/${fetcher.user.member.id}`">{{assignment.name}}</router-link></td><td>{{assignment.points}}%</td><td>{{assignment.grade}}</td><td colspan="2">&nbsp;</td>
                </tr>
              </template>

            </table>
            <p class="center">Click on each assignment for more grading detail</p>
            <p class="center">Computed Grade: {{grade.grade}} out of {{grade.available}} available points{{per}}</p>
          </div>
        </template>
      </memberfetcher>

    </div>
  </div>
</template>

<script>
    import ConsoleComponentBase from 'console-cl/js/ConsoleComponentBase.vue';
    import PrevNextMemberVue from 'course-cl/js/Console/Members/PrevNextMember.vue';
    import MemberFetcherComponent from 'course-cl/js/Console/Members/MemberFetcherComponent.vue';

    export default {
        extends: ConsoleComponentBase,
        props: ['memberid'],
        data: function() {
            return {
                course: this.$store.state.course.course,
                section: null,
                grade: null,
                per: ''
            }
        },
        components: {
            memberfetcher: MemberFetcherComponent,
            prevNext: PrevNextMemberVue,
        },
        mounted() {
            this.setTitle(': Grade');
//            this.addNav2('Submit', 2, () => {
//                this.submit();
//            });
//
//            this.addNav2('Submit and Exit', 3, () => {
//                this.submit(true);
//            });
//
//            this.addNav2Link('Exit', 4, '/cl/console/grading/' + this.assigntag);
        },
        methods: {
            fetched(user) {
                this.section = user.member.getSection(this.$store);
                this.setTitle(': ' + user.name + ' Grades');

                Site.api.get(`/api/grade/grade/${this.memberid}`, {})
                    .then((response) => {
                        if (!response.hasError()) {
                            this.grade = response.getData('grade').attributes;
                            if(this.grade.available > 0) {
                                this.per = '(' + (this.grade.grade / this.grade.available * 100).toFixed(1) + '%)';
                            }
                        } else {
                            Site.toast(this, response);
                        }

                    })
                    .catch((error) => {
                        Site.toast(this, error);
                    });
            }
        }
    }
</script>
