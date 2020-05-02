<template>
  <div class="content cl-grader">
    <div class="full">
      <member-fetcher v-on:fetched="fetched" :id="memberid" :faillink="gradingLink">
        <template slot-scope="fetcher">
          <prev-next :user="fetcher.user"></prev-next>
          <div v-if="fetcher.user !== null">

            <form ref="form" method="post" @submit.prevent="submit">
              <p :class="fetcher.user.role() === 'T' ? 'cl-role' : 'cl-role cl-role-staff'">
                {{fetcher.user.roleName()}}: {{fetcher.user.name}} {{fetcher.user.role()}}
                <em class="small">{{fetcher.user.userId}}</em>
                <button class="cl-grader-button" @click.prevent="email(fetcher.user)">
                  email {{fetcher.user.roleName().toLowerCase()}}
                </button>
                <router-link class="cl-grader-button" tag="button" :to="root + '/cl/console/grades/' + fetcher.user.member.id">student grades
                </router-link>
              </p>
              <p class="cl-due" v-if="due !== null">Assignment due {{time(due)}} </p>

              <!-- Grading items -->
              <div v-for="item in graders" :class="'cl-grader-item' + (item.locked ? ' cl-grader-item-locked' : '')"  :data-tag="item.tag">
                <h2><span class="cl-grader-item-lock"><a @click.prevent="lock(item)" title="Lock/Unlock"><img :src="root + (item.locked ? '/cl/img/lock-on.png' : '/cl/img/lock-off.png')" alt="Unlocked"></a></span>
                {{item.name}}<a v-if="item.teaming !== undefined" class="cl-extra-link" @click.prevent="teamDistribute(item)">Team Distribute</a></h2>
                <template v-if="item.rubric !== undefined">
                  <div class="cl-toggle"><p class="cl-rubric-expand"><a>Expand for rubric</a></p>
                    <div class="cl-rubricblock cl-clickable">
                      <div v-html="item.rubric"></div>
                    </div>
                  </div>
                </template>
                <grade-manual v-if="item.manual !== undefined" :item="item"></grade-manual>
                <div v-if="item.html !== undefined" v-html="item.html"></div>
                <handbook v-if="item.handbook !== undefined" :item="item" v-on:handbook-data="handbookData"></handbook>
                <grade-history :history="item.history"></grade-history>
              </div>

              <!-- Submissions -->
              <submissions :user="fetcher.user" :assigntag="assigntag"></submissions>
              <component v-if="reviewing !== null" :is="reviewing" :assigntag="assigntag" :user="fetcher.user"></component>
              <div class="grade">
                <p v-if="grade !== null">Computed Grade: {{grade}}</p>
                <template v-else>
                  <p>Grade Not Available</p>
                  <p class="center small notice">Grades are not available until all parts of the assignment have been
                    graded.</p>
                </template>
              </div>
            </form>

          </div>
        </template>
      </member-fetcher>

    </div>
  </div>
</template>

<script>
	import GradeHistoryComponentVue from '../Util/GradeHistoryComponent.vue';
	import HandbookVue from '../Handbook/Handbook.vue';
	import GradeManualVue from './GradeManual.vue';

	const ConsoleComponentBase = Site.ConsoleComponentBase;
	const PrevNextMemberVue = Site.PrevNextMemberVue;
	const MemberFetcherComponentVue = Site.MemberFetcherComponentVue;
	const SubmissionsAssignmentMemberComponentVue = Site.SubmissionsAssignmentMemberComponentVue;

	/**
	 * /cl/console/grading/:assignment/:memberid
	 * Assignment grading page for a course member
   * @constructor GradingAssignmentMemberVue
	 */
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
			memberFetcher: MemberFetcherComponentVue,
			prevNext: PrevNextMemberVue,
			gradeHistory: GradeHistoryComponentVue,
			submissions: SubmissionsAssignmentMemberComponentVue,
			handbook: HandbookVue,
          gradeManual: GradeManualVue
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
				if (this.assignment.review === true) {
					this.reviewing = this.$site.console.Review.reviewsbyfor;
				}

				this.$site.api.get(`/api/grade/grader/${this.assigntag}/${this.memberid}`, {})
					.then((response) => {
						if (!response.hasError()) {
							this.take(response);
						} else {
							this.$site.toast(this, response);
						}

					})
					.catch((error) => {
						this.$site.toast(this, error);
					});


			},
			submit(exit, callback) {
				const form = this.$refs['form'];
				const formData = new FormData(form);
				if (this.handbookResult !== null) {
					formData.append('_handbook', JSON.stringify(this.handbookResult));
				}

				this.$site.api.post(`/api/grade/grader/${this.assigntag}/${this.memberid}`, formData)
					.then((response) => {
						if (!response.hasError()) {
							this.take(response);

							if (exit) {
								this.$router.push(this.$site.root + '/cl/console/grading/' + this.assigntag);
							}

							if(callback !== undefined) {
							  callback();
                            }
						} else {
							this.$site.toast(this, response);
						}

					})
					.catch((error) => {
						this.$site.toast(this, error);
					});
			},
            /**
             * Distribute grade item to all members of a team.
             * @param item
             */
            teamDistribute(item) {
			    this.submit(false, () => {
			      const data = {
                      teaming: item.teaming,
                      gradeTag: item.tag
                  };

                  this.$site.api.post(`/api/team/distribute/${this.assigntag}/${this.memberid}`, data)
                          .then((response) => {
                            if (!response.hasError()) {


                            } else {
                              this.$site.toast(this, response);
                            }

                          })
                          .catch((error) => {
                            this.$site.toast(this, error);
                          });
                });

            },
			take(response) {
                // Is there an existing locked grader?
                let locked = null;
                for(let i=0; i<this.graders.length; i++) {
                  if(this.graders[i].locked) {
                    locked = i;
                    break;
                  }
                }

				const grader = response.getData('grader');
				this.due = grader.attributes.due !== undefined ? grader.attributes.due : null;

                for(const grader of grader.attributes.graders) {
                  grader.locked = false;
                }

				this.graders = grader.attributes.graders;
				this.grade = grader.attributes.grade;

				if(locked !== null) {
				    this.graders[locked].locked = true;
                }

				this.$forceUpdate();
				this.$nextTick(() => {
					this.installRubricClickers();
					this.$site.message('cl-grades-grader-installed');
				});


			},
            lock(item) {
              if(item.locked) {
                item.locked = false;
              } else {
                for(const grader of this.graders) {
                  grader.locked = false;
                }

                item.locked = true;
              }
            },
			/// Install clickers for Rubric items that will autofill them.
			installRubricClickers() {
				const selectors = ['div.cl-clickable li.item', 'div.cl-clickable ul.items li', 'div.cl-clickable p.item'];
				for (const selector of selectors) {
					const clickables = document.querySelectorAll(selector);
					for (let element of clickables) {
						if (element.dataset.clickable === undefined) {
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

				// Find the item this does with
				const tag = element.dataset.tag;
                for(let item of this.graders) {
                  if(item.tag === tag) {
                    if(item.manual !== undefined) {
                      if(item.manual.comment.length > 0 && item.manual.comment.match(/\n$/) === null) {
                        item.manual.comment += "\n";
                      }
                      item.manual.comment += content;
                    }
                    break;
                  }
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
