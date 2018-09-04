<!--
@file
The main grading page
/cl/console/grading
-->

<template>
  <div class="content cl-grader">
    <div class="full">
    <h2>Grades Summary</h2>
      <ul>
        <li><router-link :to="root + '/cl/console/grades/all'">All Students</router-link></li>
        <li><router-link :to="root + '/cl/console/grades/links'">All Students Grade Links</router-link></li>
        <li v-if="downloadPermission"><a :href="root + '/cl/grades/csv'">Download Student Grades</a></li>
      </ul>
      <div v-for="category in section.assignments.categories">
        <h2>{{category.name}}</h2>
        <ul>
          <li v-if="category.assignments.length === 0"><em>Pending...</em></li>
          <li v-for="assignment in category.assignments" :key="assignment.tag">
            <router-link :to="gradingLink + assignment.tag">{{assignment.name}}</router-link>
            <router-link class="link-button" v-if="user.atLeast(ta)" :to="root + '/cl/console/rubric/' + assignment.tag">rubrics</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {Member} from 'course-cl/js/Members/Member';
  import ConsoleComponentBase from 'console-cl/js/ConsoleComponentBase.vue';

    export default {
        'extends': ConsoleComponentBase,
        data: function() {
            return {
                section: null,
                gradingLink: this.$site.root + '/cl/console/grading/',
                ta: Member.TA,

                downloadPermission: false   // Permission to download grades?
          }
        },
        computed: {

        },
        created() {
            this.$parent.setTitle(': Assignment Grading');

            let user = this.$store.state.user.user;
            let member = user.member;

	          this.downloadPermission = user.atLeast(this.$site.permissions.atLeast('grades-download', Member.TA));

            this.section = this.$store.getters['course/section'](member.semester, member.section);
        },
        methods: {

        }
    }

</script>
