<template>
  <div>
    <h2>{{rubric.name}}</h2>

    <form method="post" @submit.prevent="submit()">
      <div class="cl-rubricblock cl-show" v-html="rubric.show"></div>
     <!--  <textarea ref="editor" v-model="rubric.rubric" spellcheck="false" @keydown="changed()"></textarea> -->
      <div ref="editor"></div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
    import {Member} from 'course-cl/js/Members/Member';
    import {Sanitize} from 'site-cl/js/Util/Sanitize';
    import {Editor} from 'site-cl/js/UI/Editor';

  export default {
      props: ['assigntag', 'rubric'],
      created() {
      },
      mounted() {
          const element = this.$refs['editor'];
          this.editor = new Editor(element, {
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
              if(this.timer !== null) {
                  clearTimeout(this.timer);
                  this.timer = null;
              }

              this.timer = setTimeout(() => {
                  this.timer = null;
                  this.rubric.show = Sanitize.sanitize(this.editor.textarea.value);
              }, 100);
          },
          submit() {
              Site.api.post('/api/grade/rubrics/' + this.assigntag + '/' + this.rubric.tag , {
                  rubric: this.rubric.show
              })
                  .then((response) => {
                      if (!response.hasError()) {
                          Site.toast(this, 'Rubric successfully saved');
                      } else {
                          Site.toast(this, response);
                      }

                  })
                  .catch((error) => {
                      Site.toast(this, error);
                  });

          }
      }
  }

</script>