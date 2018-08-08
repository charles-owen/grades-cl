<template>
  <div class="cl-grade-history" v-if="history2.length > 0">
    <div v-if="history2.length > 1" class="cl-toggle">
      <p class="expander"><a>{{display(history2[0])}} / Expand for additional grading history</a></p>
      <div class="grades">
        <p v-for="h in history2">{{display(h)}}</p>
      </div>
    </div>
    <div v-else>
      <p>{{display(history2[0])}}</p>
    </div>
  </div>


</template>

<script>
  import {TimeFormatter} from 'site-cl/js/TimeFormatter';

  export default {
      props: ['history'],
      data: function() {
          return {
              history2: []
          }
      },
      watch: {
          history: function(to, fm) {
              this.history2 = this.history.slice().reverse();
          }
      },
      mounted() {
        if(this.history !== undefined) {
            this.history2 = this.history.slice().reverse();
        }
      },
      methods: {
          display(history) {
              const grader = this.$store.getters['course/staff'](history.grader);
              let str = TimeFormatter.absoluteUNIX(history.time, 'short') +
                      ' by ' +
                      grader.displayName();

              return str;
          }
      }
  }
</script>

<style lang="scss" scoped>

  div.cl-grade-history {
    max-width: 600px;
    margin: 1em 0;
  }
  p {
    font-style: italic;
    font-size: 0.85em;
  }

  p.expander {
    margin-bottom: 0;
  }
  div.grades {
    padding: 2px 0 2px 18px;
    background-color: #ddffdd;

    p {
      margin: 0;
      padding: 2px 0 0 0;
    }
  }
</style>
