<template>
  <div class="content">
    <div >
    <h2>Grades Summary</h2>
      <ul>
        <li>All Students</li>
        <li>All Students Grade Links</li>
      </ul>
      <div v-for="category in section.assignments.categories">
        <h2>{{category.name}}</h2>
        <ul>
          <li v-if="category.assignments.length === 0"><em>Pending...</em></li>
          <li v-for="assignment in category.assignments" :key="assignment.tag">
            <router-link :to="gradingLink + assignment.tag">{{assignment.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                section: null,
                gradingLink: Site.root + '/cl/console/grading/',

        }
        },
        created() {
            this.$parent.setTitle(': Assignment Grading');

            let user = this.$store.state.user.user;
            let member = user.member;

            this.section = this.$store.getters['course/section'](member.semester, member.section);
        },
        methods: {

        }
    }

</script>

<style lang="scss" scoped>
  span.links {

    font-size: 0.85em;
  }
</style>