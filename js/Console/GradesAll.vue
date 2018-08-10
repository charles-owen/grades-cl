<!--
@file
All student grades
/cl/console/grades/all
-->

<template>
  <div class="content">
    <div class="full">
      <membersfetcher>
        <template slot-scope="fetcher">
          <table class="small">
            <tr class="vertical">
              <th>User</th>
              <th>Name</th>
              <th>Role</th>
              <template v-for="category in section.assignments.categories">
                <template v-for="assignment in category.assignments">
                  <th><div class="small">{{assignment.shortname}}</div></th>
                </template>
                <th><div class="small category">{{category.name}}</div></th>
              </template>
            </tr>
            <tr v-for="user in fetcher.users" :class="user.role() !== 'T' ? 'ignore' : ''">
              <td><router-link :to="link + user.member.id">{{user.userId}}</router-link></td>
              <td><router-link :to="link + user.member.id">{{user.name}}</router-link></td>
              <td>{{user.roleName()}}</td>
              <template v-for="category in section.assignments.categories">
                <template v-for="assignment in category.assignments">
                  <td>{{assignmentGrade(user, category, assignment)}}</td>
                </template>
                <td>{{categoryGrade(user, category)}}</td>
              </template>
            </tr>
          </table>
        </template>
      </membersfetcher>

    </div>
  </div>
</template>

<script>
    import ConsoleComponentBase from 'console-cl/js/ConsoleComponentBase.vue';
    import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';

    export default {
        'extends': ConsoleComponentBase,
        data: function() {
            return {
                link: Site.root + '/cl/console/grades/',
                section: null,
                grades: null,
            }
        },
        components: {
            'membersfetcher': MembersFetcherComponent
        },
        created() {
            let user = this.$store.state.user.user;
            let member = user.member;
            this.section = this.$store.getters['course/section'](member.semester, member.section);
            console.log(this.section);
        },
        mounted() {
            this.$parent.setTitle(': Grades');




            Site.api.get('/api/grade/all', {})
                .then((response) => {
                    if (!response.hasError()) {
                        this.grades = response.getData('grades-all').attributes;
                    } else {
                        Site.toast(this, response);
                    }

                })
                .catch((error) => {
                    Site.toast(this, error);
                });

        },
        methods: {
            assignmentGrade(user, category, assignment) {
                if(this.grades === null) {
                    return '?';
                }

                let userGrades = this.grades[user.member.id];
                let assignmentGrades = userGrades.categories[category.tag].assignments;
                for(let assignmentGrade of assignmentGrades) {
                    if(assignmentGrade.tag === assignment.tag) {
                        return assignmentGrade.grade;
                    }
                }

                return '';
            },
            categoryGrade(user, category) {
                if(this.grades === null) {
                    return '?';
                }

                let userGrades = this.grades[user.member.id];
                let categoryGrade = userGrades.categories[category.tag];
                return categoryGrade.grade;
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import '~site-cl/sass/modules/colors';

td {
  min-width: 30px;
}

  div.category {
    color: $secondb;
  }
</style>