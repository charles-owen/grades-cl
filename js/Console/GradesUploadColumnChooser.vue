<template>
    <div id="cl-column-chooser-component">
        <p>Member identifier column:
        <select v-model="memberIdColumn.id">
            <option v-for="column in columns">{{column}}</option>
        </select></p>

        <p>Member identifier can be an email address or user ID.</p>

        <p>Select column for each grade item:</p>
        <div class="cl-parts">
            <div v-for="(part, index) in parts">
                <div>{{part.name}}:</div>
                <div>
                    <select v-model="mapping[part.tag]">
                        <option v-for="column in columnSelect">{{column}}</option>
                    </select>
                </div>
            </div>
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
                mapping: {}
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

            for (let part of this.parts) {
                this.mapping[part.tag] = '*none*';
            }
        }
    }

</script>

<style lang="scss" scoped>
div#cl-column-chooser-component {
    padding: 1em;

    div.cl-parts {
        display: table;
        margin: auto;

        >div {
            display: table-row;

            >div:first-child {
                padding-right: 1em;
            }

            >div {
                display: table-cell;
            }
        }

    }
}
</style>