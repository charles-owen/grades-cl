<!--
@file
All student grade links
/cl/console/grades/links
-->

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
            <tr v-for="user in fetcher.users" :class="user.role() !== 'T' ? 'ignore' : ''">
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

    const ConsoleComponentBase = Site.ConsoleComponentBase;

    export default {
        'extends': ConsoleComponentBase,
        data: function() {
            return {
                link: Site.root + '/cl/console/grades/',
                grades: null,
                parts: []
            }
        },
        components: {
            'membersfetcher': MembersFetcherComponent
        },
        mounted() {
            this.$parent.setTitle(': Grades');
        },
        methods: {
        }
    }
</script>
