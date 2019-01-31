<template>
  <div class="content">
    <div class="full">
      <members-fetcher>
        <template slot-scope="fetcher">
          <table class="small">
            <tr>
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
            <tr v-for="user in fetcher.users" :class="user.role() !== 'T' ? 'ignore' : ''">
              <td><router-link :to="root + '/cl/console/grades/' + user.member.id">{{user.userId}}</router-link></td>
              <td><router-link :to="root + '/cl/console/grades/' + user.member.id">{{user.name}}</router-link></td>
              <td>{{user.roleName()}}</td>
            </tr>
          </table>
        </template>
      </members-fetcher>

    </div>
  </div>
</template>

<script>
	const MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
	const ConsoleComponentBase = Site.ConsoleComponentBase;

	/**
	 * All student grade links
	 * /cl/console/grades/links
	 * @constructor GradesLinksVue
	 */
	export default {
		'extends': ConsoleComponentBase,
		data: function () {
			return {
				grades: null,
				parts: []
			}
		},
		components: {
			'membersFetcher': MembersFetcherComponentVue
		},
		mounted() {
			this.$parent.setTitle(': Grades');
		}
	}
</script>
