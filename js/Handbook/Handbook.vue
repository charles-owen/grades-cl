<template>
  <div>
    <table class="cl-handbook">
      <tr><th>Category<br>Multiplier: {{item.multiplier}}</th><th>Deduction<br>0 to max</th></tr>
      <tr v-for="category in item.handbook.categories">
        <td>
          <template v-if="category.rubric !== undefined">
            <div class="cl-toggle cl-single-space"><span><a>{{category.name}}</a></span>
              <div class="cl-rubricblock"><div v-html="category.rubric"></div></div>
            </div>
          </template>
          <template v-else>{{category.name}}</template>
        </td>
        <td class="center">
          <template v-if="!readonly">
            <input v-for="deduct in (category.deduct+1)" v-model="metadata[category.tag]" :value="deduct-1" type="radio" @change="compute">
          </template>
          <span v-else>{{deduction(metadata[category.tag])}}</span>
        </td>
      </tr>
      <tr>
        <td>
          <input v-if="!readonly" type="text" v-model="metadata['_manual_text']">
          <span v-else>{{metadata['_manual_text']}}</span>
        </td>
        <td class="center">
        <template v-if="!readonly">
          <input v-for="deduct in 5" v-model="metadata['_manual']" :value="deduct-1" type="radio" @change="compute">
        </template>
        <span v-else>{{deduction(metadata['_manual'])}}</span>
      </td></tr>
      <tr class="cl-internal"><th>Comment</th><th>Deduction</th></tr>
      <tr><td>
        <textarea v-if="!readonly" rows="3" v-model="metadata['_comment']"></textarea>
        <div class="comment" v-else>{{metadata['_comment']}}</div>
      </td><td class="cl-deduct">{{total}}</td></tr>
    </table>
  </div>
</template>

<script>
	/**
   * Handbook editor/viewing Vue component
   *
   * Use by both the student grade presentation page and the
   * assignment grading page.
   * @constructor HandbookVue
   */
  export default {
		props: {
			item: {default: {}},
			readonly: {default: false}
		},
    emit: ['handbook-data'],
		watch: {
			item: function (value) {
				this.take();
			}
		},
		data: function () {
			return {
				metadata: {},
				total: 0
			}
		},
		mounted() {
			this.take();
		},
		methods: {
			take() {
				this.metadata = {};
				for (let category of this.item.handbook.categories) {
					let catPoints = this.item.metadata[category.tag];
					if (catPoints === undefined) {
						catPoints = 0;
					}

          this.metadata[category.tag] = catPoints
				}

				let catPoints = this.item.metadata['_manual'];
				if (catPoints === undefined) {
					catPoints = 0;
				}

        this.metadata['_manual'] = catPoints

				let manualText = this.item.metadata['_manual_text'];
				if (manualText === undefined) {
					manualText = '';
				}

        this.metadata['_manual_text'] = manualText

				let comment = this.item.metadata['_comment'];
				if (comment === undefined) {
					comment = '';
				}

        this.metadata['_comment'] = comment

				this.compute();
			},
			compute() {
				let total = -this.metadata['_manual'];
				for (let category of this.item.handbook.categories) {
					total -= this.metadata[category.tag];
				}

				total += this.item.handbook.free;
				if (total > 0) {
					total = 0;
				}
				total *= this.item.multiplier;
				this.total = total;

				this.$emit('handbook-data', {'metadata': this.metadata, 'total': this.total});
			},
			deduction(deduct) {
				if (deduct === 0) {
					return '';
				} else {
					return -deduct;
				}
			}
		}
	}
</script>