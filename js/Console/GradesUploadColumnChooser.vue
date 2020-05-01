<template>
    <div id="cl-column-chooser-component">
        <p>Member identifier column:
        <select v-model="memberIdColumn.id">
            <option v-for="column in columns">{{column}}</option>
        </select></p>

        <p>Member identifier can be an email address or user ID.</p>

        <p class="center">Select column for each grade item</p>
        <div class="cl-parts">
            <template v-for="(part, index) in parts">
                <div>
                    <div>{{part.name}}:</div>
                    <div>
                        <select v-model="mapping[part.tag]">
                            <option v-for="column in columnSelect">{{column}}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="cl-comment">comment:</div>
                    <div>
                        <select v-model="commentMapping[part.tag]">
                            <option v-for="column in columnSelect">{{column}}</option>
                        </select>
                    </div>
                </div>
            </template>

        </div>
    </div>
</template>

<script>
    /**
     * Choose the CSV columns for each grade component we are going to upload.
     *
     * @constructor GradesUploadColumnChooserComponent
     */
    export default {
        props: ['parts', 'columns'],
        data: function () {
            return {
                memberIdColumn: {},
                columnSelect: [],
                mapping: {},
                commentMapping: {}
            }
        },
        methods: {},
        mounted() {
            // See if there is an email column
            this.memberIdColumn = this.$parent.idColumn;
            this.memberIdColumn.id = this.columns[0];

            for (let column of this.columns) {
                if (column.toLowerCase().indexOf('email') >= 0) {
                    this.memberIdColumn.id = column;
                    break;
                }
            }

            this.columnSelect = ['*none*'].concat(this.columns);
            this.mapping = this.$parent.mapping;
            this.commentMapping = this.$parent.commentMapping;

            // Set initially empty
            for (let part of this.parts) {
                this.mapping[part.tag] = '*none*';
                this.commentMapping[part.tag] = '*none*';
            }
        }
    }

</script>

<style lang="scss" scoped>
div#cl-column-chooser-component {
    padding: 1em;
    p {
        text-align: left;
    }

    div.cl-parts {
        display: table;
        margin: auto;

        >div {
            display: table-row;

            >div:first-child {
                padding-right: 1em;
                text-align: right;
            }

            >div {
                display: table-cell;
                height: 2em;
            }
        }

        div.cl-comment {
            font-style: italic;
            font-size: 0.85em;
        }

    }
}
</style>