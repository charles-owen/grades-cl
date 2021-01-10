<template>
  <div class="content cl-grader">
    <div class="full">
      <div v-if="grade !== null">
        <p><span v-html="json.before"></span></p>
        <p v-if="json.dispute !== null" class="center">Please direct all grading issues to <span v-html="json.dispute"></span></p>

        <table>
          <tr>
            <th>Assignment</th><th>&nbsp;</th><th>Grade</th><th>&nbsp;</th><th>Grade</th>
          </tr>

          <template v-for="category in grade.categories">
            <tr class="cl-category">
              <td colspan="3">{{category.name}}</td><td>{{category.points}}%</td><td>{{category.grade}}</td>
            </tr>

            <tr class="cl-assignment" v-for="assignment in category.assignments" :key="assignment.tag" v-if="assignment.points > 0">
              <td><a :href="root + '/cl/grade/' + assignment.tag">{{assignment.name}}</a></td>
              <td>{{Math.round(assignment.points * 10) / 10}}%</td><td>{{assignment.grade}}</td><td colspan="2">&nbsp;</td>
            </tr>
          </template>

        </table>
        <p class="center">Click on each assignment for more grading detail</p>
        <p class="center">Computed Grade: {{grade.grade}} out of {{grade.available}} available points{{per}}</p>
        <p><span v-html="json.after"></span></p>

      </div>

    </div>
  </div>
</template>

<script>
    const UserVueBase = Site.UserVueBase;

    /**
     * The course grading page for presentation of all grades for a user
     *
     * /cl/grades
     * @constructor GradesVue
     */

    export default {
        'extends': UserVueBase,
        props: ['json'],
        data: function() {
            return {
                grade: null,
                per: ''
            }
        },
        mounted() {
            this.setTitle('Grades for ' + this.user.displayName());

            //  this.setTitle(': Grades ');

            this.grade = this.json;
            if(this.grade.available > 0) {
                this.per = ' (' + (this.grade.grade / this.grade.available * 100).toFixed(1) + '%)';
            }
        },
        methods: {
        }
    }
</script>
