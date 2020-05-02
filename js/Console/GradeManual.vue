<template>
    <div class="cl-grade">
        <div class="comment">
            <label>Comment <a @click.prevent="compute()">compute</a>
                <textarea v-model="item.manual.comment" rows="6" class="comment" :name="item.tag + '-comment'"></textarea>
            </label>
        </div>
        <div class="points">
            <label>Points
                <input class="points" v-model="item.manual.points" type="number" :id="item.tag + '-points'" :name="item.tag + '-points'">
            </label>
        </div>
        <div class="points">
            <div class="label">Available</div>
            <div class="value"><a @click.prevent="fillInPoints()" :data-id="item.tag + '-points'" title="Click to fill in points">{{item.manual.available}}</a></div>
        </div>
    </div>
</template>

<script>

    /**
     * Manual grade entry form.
     * @constructor GradeManualVue
     */
    export default {
        props: ['item'],
        mounted() {
        },
        methods: {
            fillInPoints() {
                this.item.manual.points = this.item.manual.available;
            },
            compute() {
                const lines = this.item.manual.comment.split(/\r?\n/);

                let pos = 0;
                let neg = 0;
                for(let line of lines) {
                    const tokens = line.match(/^\s*([+-]?)([1-9][0-9]*)([^0-9]|$)/);
                    if(tokens !== null) {
                        if(tokens[1] === '-') {
                            neg -= +tokens[2];
                        } else {
                            pos += +tokens[2];
                        }
                    }
                }

                /*
                 * If we only have negative values, that is subtracted from
                 * the available points. If we only have positive values, they
                 * are added to make up the points. If we have both, the values
                 * are all added together to make up the total points.
                 */
                if(neg !== 0) {
                    if(pos === 0) {
                        this.item.manual.points = this.item.manual.available + neg;
                    } else {
                        this.item.manual.points = pos + neg;
                    }
                } else {
                    if(pos === 0) {
                        this.item.manual.points = this.item.manual.available;
                    } else {
                        this.item.manual.points = pos;
                    }
                }
            }
        }

    }

</script>
