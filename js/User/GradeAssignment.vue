<!--
@file
The assignment grading page for presentation for a user
/cl/grade/:assignment
-->

<template>
  <div class="content cl-grader">
    <div class="full">
      <div class="cl-autoback"></div>
      <p class="title">{{json.assignment.name}}</p>
      <div v-for="item in json.grades">
        <h2>{{item.name}}</h2>
        <div v-if="item.handbook === undefined"v-html="item.html"></div>
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
  import UserVueBase from 'users-cl/js/Vue/UserVueBase.vue';
  import HandbookComponent from '../Handbook/Handbook.vue';

  export default {
      'extends': UserVueBase,
      props: ['json'],
      data: function() {
      	return {
        }
      },
      components: {
          gradeHistory: GradeHistoryComponent,
          handbook: HandbookComponent
      },
      mounted() {
          this.$parent.setTitle(':  ' + this.json.assignment.shortName + ' Grade for ' + this.user.displayName());

          const menu = [
              {name: 'Grades', click: () => {
                  window.location = Site.root = '/cl/grades';
              }}
          ];

          this.$parent.setMenu(menu);
      }
  }
</script>