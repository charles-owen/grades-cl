<template>
  <div class="content cl-grader">
    <div class="full">
      <p class="title">{{json.assignment.name}}</p>
      <div v-for="item in json.grades">
        <h2>{{item.name}}</h2>
        <div v-html="item.html"></div>
        <grade-history :history="item.history"></grade-history>
      </div>
      <div class="grade">
        <p v-if="json.grade !== null">Computed Grade: {{json.grade}}</p>
        <template v-else>
          <p>Grade Not Available</p>
          <p class="center small notice">Grades are not available until all parts of the assignment have been graded.</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
    import GradeHistoryComponent from './Util/GradeHistoryComponent.vue';

  export default {
      props: ['json'],
      components: {
          gradeHistory: GradeHistoryComponent
      },
      mounted() {
          this.$parent.setTitle(':  ' + this.json.assignment.shortName + ' Grade');

      }
  }
</script>