<template>
  <div class="content cl-grader">
    <div class="full">
      <memberfetcher v-on:fetched="fetched" :id="memberid" :faillink="gradingLink">
        <template slot-scope="fetcher">
          <prev-next :user="fetcher.user"></prev-next>
          <div v-if="fetcher.user !== null">

          <form ref="form" method="post" @submit.prevent="submit">
            <p :class="fetcher.user.role() === 'T' ? 'cl-role' : 'cl-role cl-role-staff'">
            {{fetcher.user.roleName()}}: {{fetcher.user.name}} {{fetcher.user.role()}}
              <a class="small" :href="'mailto:'+fetcher.user.email"><em>email {{fetcher.user.roleName().toLowerCase()}}</em></a>
            </p>
            <p class="cl-due" v-if="due !== null">Assignment due {{time(due)}} </p>
          <div v-for="item in graders">
            <h2>{{item.name}}</h2>
            <div v-html="item.html"></div>
            <grade-history :history="item.history"></grade-history>
          </div>
            <div class="grade">
              <p v-if="grade !== null">Computed Grade: {{grade}}</p>
              <template v-else>
                <p>Grade Not Available</p>
                <p class="center small notice">Grades are not available until all parts of the assignment have been graded.</p>
              </template>
            </div>
          </form>

          </div>
        </template>
      </memberfetcher>

    </div>
  </div>
</template>

<script>
  // TODO: Indication of the assignment due date

    import PrevNextMemberVue from 'course-cl/js/Console/Members/PrevNextMember.vue';
    import BackToVue from 'site-cl/js/UI/BackTo.vue';
    import MemberFetcherComponent from 'course-cl/js/Console/Members/MemberFetcherComponent.vue';
    import GradeHistoryComponent from '../Util/GradeHistoryComponent.vue';
    import {TimeFormatter} from 'site-cl/js/TimeFormatter';

    export default {
        props: ['assigntag', 'memberid'],
        data: function() {
            return {
                gradingLink: '/cl/console/grading/' + this.assigntag,
                assignment: null,
                graders: [],
                grade: null,
                due: null
            }
        },
        components: {
            memberfetcher: MemberFetcherComponent,
            prevNext: PrevNextMemberVue,
            backto: BackToVue,
            gradeHistory: GradeHistoryComponent
        },
        mounted() {
            this.$parent.setTitle(': Grading');
            this.components1 = [];
            this.components1.push(Console.components.addNav2Link(this, 'Submit', 2, () => {
                this.submit();
            }));

            this.components1.push(Console.components.addNav2Link(this, 'Submit and Exit', 3, () => {
                this.submit(true);
            }));


            this.components1.push(Console.components.addNav2Link(this, 'Exit', 4, () => {
                this.$router.push(Site.root + '/cl/console/grading/' + this.assigntag);
            }));

            console.log(this.components1);
        },
        beforeDestroy() {
            console.log(this.components1);
            Console.components.removeNav2(this, this.components1);
        },
        methods: {
            fetched(user) {
                let section = user.member.getSection(this.$store);
                this.assignment = user.member.getAssignment(this.$store, this.assigntag);
                this.$parent.setTitle(': ' + user.name + ' ' + this.assignment.shortname + ' Grading');

                Site.api.get(`/api/grade/grader/${this.assigntag}/${this.memberid}`, {})
                    .then((response) => {
                        if (!response.hasError()) {
                            this.take(response);
                        } else {
                            Site.toast(this, response);
                        }

                    })
                    .catch((error) => {
                        Site.toast(this, error);
                    });
            },
            submit(exit) {
                const form = this.$refs['form'];
                const formData = new FormData(form);

                Site.api.post(`/api/grade/grader/${this.assigntag}/${this.memberid}`, formData)
                    .then((response) => {
                        if (!response.hasError()) {
                            this.take(response);

                            if(exit) {
                                this.$router.push(Site.root + '/cl/console/grading/' + this.assigntag);
                            }
                        } else {
                            Site.toast(this, response);
                        }

                    })
                    .catch((error) => {
                        Site.toast(this, error);
                    });
            },
            take(response) {
                const grader = response.getData('grader');
                this.due = grader.attributes.due;
                this.graders = grader.attributes.graders;
                this.grade = grader.attributes.grade;
                this.$forceUpdate();
            },
            time(t) {
                return TimeFormatter.absoluteUNIX(t, 'short');
            }
        }
    }
</script>
