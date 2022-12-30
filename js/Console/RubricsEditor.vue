<template>
  <div class="content cl-grader">
    <div class="cl-toggle"><p><a>Expand for instructions on creating rubrics.</a></p>
    <div class="cl-toggleblock">
      <p>Rubrics are entered as HTML. A common format is to
        create lists using &lt;ul&gt; and &lt;li&gt; tags.</p>
      <p>Contents of an &lt;li&gt; or &lt;p&gt; tag can be make
        clickable so they automatically appear in the comment
        window by adding the class 'item'. All &lt;li&gt; children
        of a &lt;ul&gt; can be made clickable by adding the
        class 'items':</p>
      <pre class="code">
&lt;ul&gt;
   &lt;li class="item"&gt;This item will be clickable&lt;/li&gt;
   &lt;li&gt;This item will not be clickable&lt;/li&gt;
&lt;/ul&gt;

&lt;p class="item"&gt;And this will be clickable&lt;/p&gt;

&lt;ul class="items"&gt;
   &lt;li&gt;All of these items will be clickable&lt;/li&gt;
   &lt;li&gt;This one, too!&lt;/li&gt;
&lt;/ul&gt;
      </pre>
    </div>
    </div>
    <div v-for="rubric in rubrics" class="cl-rubric">
      <rubric-editor :assigntag="assigntag" :rubric="rubric"></rubric-editor>
    </div>
  </div>
</template>

<script>
	import RubricEditorVue from './RubricEditor.vue';

	const ConsoleComponentBase = Site.ConsoleComponentBase;
	const Member = Site.Member;

	/**
	 * Editor page for all rubrics for an assignment
	 * /cl/console/rubric/:assigntag
	 * @constructor RubricsEditorVue
	 */
	export default {
		'extends': ConsoleComponentBase,
		props: ['assigntag'],
		data: function () {
			return {
				ta: Member.TA,
				rubrics: []
			}
		},
		components: {
			rubricEditor: RubricEditorVue
		},
		created() {
			this.$root.setTitle(': Assignment Grading');
			this.timer = null;

			let user = this.$store.state.user.user;
			let member = user.member;

			this.section = this.$store.getters['course/section'](member.semester, member.section);
			this.assignment = this.section.getAssignment(this.assigntag);

			this.$root.setTitle(': ' + this.assignment.shortname + ' Rubrics');

			this.$site.api.get('/api/grade/rubrics/' + this.assignment.tag, {})
				.then((response) => {
					if (!response.hasError()) {
						this.rubrics = response.getData('rubrics').attributes;
						for (let rubric of this.rubrics) {
              rubric['show'] = rubric.rubric
						}
					} else {
						this.$site.toast(this, response);
					}

				})
				.catch((error) => {
					this.$site.toast(this, error);
				});
		}
	}

</script>
