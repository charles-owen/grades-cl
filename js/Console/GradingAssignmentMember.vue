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
                <em class="small">{{fetcher.user.userId}}</em>
                <button class="cl-grader-button" @click.prevent="email(fetcher.user)">
                  email {{fetcher.user.roleName().toLowerCase()}}</button>
                <router-link class="cl-grader-button" tag="button" :to="root + '/cl/console/grades/' + fetcher.user.member.id">student grades</router-link>
              </p>
              <p class="cl-due" v-if="due !== null">Assignment due {{time(due)}} </p>
            <div class="cl-grader-item" v-for="item in graders">
              <h2>{{item.name}}</h2>
              <template v-if="item.rubric !== undefined">
                <div class="cl-toggle"><p class="cl-rubric-expand"><a>Expand for rubric</a></p>
                  <div class="cl-rubricblock cl-clickable"><div v-html="item.rubric"></div></div>
                </div>
              </template>
              <div v-if="item.handbook === undefined" v-html="item.html"></div>
              <handbook v-else :item="item" v-on:handbook-data="handbookData"></handbook>
              <grade-history :history="item.history"></grade-history>
            </div>
            <submissions :user="fetcher.user" :assigntag="assigntag"></submissions>
            <component v-if="reviewing !== null" :is="reviewing" :assigntag="assigntag" :user="fetcher.user"></component>
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
	/**
	 * /cl/console/grading/:assignment/:memberid
	 * Assignment grading page for a course member
	 */
	import ConsoleComponentBase from 'console-cl/js/ConsoleComponentBase.vue';
	import PrevNextMemberVue from 'course-cl/js/Console/Members/PrevNextMember.vue';
	import MemberFetcherComponent from 'course-cl/js/Console/Members/MemberFetcherComponent.vue';
	import GradeHistoryComponent from '../Util/GradeHistoryComponent.vue';
	import SubmissionsAssignmentMemberComponent from 'course-cl/js/Console/SubmissionsAssignmentMemberComponent.vue';
	import HandbookComponent from '../Handbook/Handbook.vue';

	export default {
		'extends': ConsoleComponentBase,
		props: ['assigntag', 'memberid'],
		data: function () {
			return {
				gradingLink: '/cl/console/grading/' + this.assigntag,
				assignment: null,
				graders: [],
				grade: null,
				due: null,
				handbookResult: null,
        reviewing: null
			}
		},
		components: {
			memberfetcher: MemberFetcherComponent,
			prevNext: PrevNextMemberVue,
			gradeHistory: GradeHistoryComponent,
			submissions: SubmissionsAssignmentMemberComponent,
			handbook: HandbookComponent
		},
		mounted() {
			this.setTitle(': Grading');
			this.addNav2('Submit', 2, () => {
				this.submit();
			});

			this.addNav2('Submit and Exit', 3, () => {
				this.submit(true);
			});

			this.addNav2Link('Exit', 4, '/cl/console/grading/' + this.assigntag);
		},
		methods: {
			fetched(user) {
				let section = user.member.getSection(this.$store);
				this.assignment = user.member.getAssignment(this.$store, this.assigntag);
				this.setTitle(': ' + user.name + ' ' + this.assignment.shortname + ' Grading');
		    if(this.assignment.review === true) {
		    	this.reviewing = this.$site.console.Review.reviewsbyfor;
	      }

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
				if (this.handbookResult !== null) {
					formData.append('_handbook', JSON.stringify(this.handbookResult));
				}

				Site.api.post(`/api/grade/grader/${this.assigntag}/${this.memberid}`, formData)
					.then((response) => {
						if (!response.hasError()) {
							this.take(response);

							if (exit) {
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
				this.due = grader.attributes.due !== undefined ? grader.attributes.due : null;
				this.graders = grader.attributes.graders;
				this.grade = grader.attributes.grade;

				this.$forceUpdate();
				this.$nextTick(() => {
			    this.installAvailableClickers();
					this.installRubricClickers();
			    this.$site.message('cl-grades-grader-installed');
				});


			},
      /// Install clicker for available that will autofill the points
      installAvailableClickers() {
        let clickables = document.querySelectorAll('div.cl-grader div.grader a.available-clicker');
        for(const element of clickables) {
          element.addEventListener('click', () => {
            document.getElementById(element.dataset.id).value = element.innerText;
          });
        }
      },
      /// Install clickers for Rubric items that will autofill them.
      installRubricClickers() {
				const selectors = ['div.cl-clickable li.item', 'div.cl-clickable ul.items li', 'div.cl-clickable p.item'];
				for(const selector of selectors) {
          const clickables = document.querySelectorAll(selector);
          for (let element of clickables) {
          	if(element.dataset.clickable === undefined) {
	            element.addEventListener('click', () => {
		            this.addContent(element);
	            });
	            element.setAttribute('data-clickable', 'yes');
            }
          }
        }
      },
      /// Add rubric content to the element comment textarea
			addContent(element) {
				const content = element.textContent;

				// Work up until we find the cl-grader-item div
				element = element.parentNode;
				while (element !== null) {
					if (element.classList.contains('cl-grader-item')) {
						break;
					}

					element = element.parentNode;
				}

				if (element === null) {
					return;
				}

				// Find a textarea inside this
				for (let textarea of element.querySelectorAll('textarea')) {
					textarea.value = textarea.value + content + "\n";
				}
			},
			time(t) {
				return this.$site.TimeFormatter.absoluteUNIX(t, 'short');
			},
			email(user) {
				window.location = 'mailto:' + user.email;
			},
			handbookData(data) {
				this.handbookResult = data;
			}
		}
	}
</script>
