<template>
  <div>
    <h2>{{rubric.name}}</h2>

    <form method="post" @submit.prevent="submit()">
      <div class="cl-rubricblock cl-show" v-html="rubric.show"></div>
      <div ref="editor"></div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
	/**
   * Editor for a single Rubric
   * Component in /cl/console/rubric/:assigntag
   * @constructor RubricEditorVue
   */
  export default {
		props: ['assigntag', 'rubric'],
		mounted() {
			const element = this.$refs['editor'];
			this.editor = new this.$site.Editor(element, {
				value: this.rubric.rubric,
				tab: true,
				autoIndent: true
			});

			this.editor.textarea.addEventListener('keydown', () => {
				this.changed();
			})
		},
		methods: {
			changed() {
				if (this.timer !== null) {
					clearTimeout(this.timer);
					this.timer = null;
				}

				this.timer = setTimeout(() => {
					this.timer = null;
					this.rubric.show = this.$site.Sanitize.sanitize(this.editor.textarea.value);
				}, 100);
			},
			submit() {
				this.$site.api.post('/api/grade/rubrics/' + this.assigntag + '/' + this.rubric.tag, {
					rubric: this.rubric.show
				})
					.then((response) => {
						if (!response.hasError()) {
							this.$site.toast(this, 'Rubric successfully saved');
						} else {
							this.$site.toast(this, response);
						}

					})
					.catch((error) => {
						this.$site.toast(this, error);
					});

			}
		}
	}

</script>