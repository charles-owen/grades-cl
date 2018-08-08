<template>
  <div class="content">
    <div class="full">
      <membersfetcher>
        <template slot-scope="fetcher">
          <table class="small">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
            <tr v-for="user in fetcher.users">
              <td><router-link :to="link + user.member.id">{{user.userId}}</router-link></td>
              <td><router-link :to="link + user.member.id">{{user.name}}</router-link></td>
              <td>{{user.roleName()}}</td>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
    import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';

    export default {
        props: ['assigntag'],
        data: function() {
            return {
                link: Site.root + '/cl/console/grading/' + this.assigntag + '/'
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

        }
    }
</script>
