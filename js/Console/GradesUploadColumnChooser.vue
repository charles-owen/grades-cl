<template>
    <div id="cl-column-chooser-component">
      <p v-if="hasTeaming">
        <input type="radio" @change="onLoadByChange()" id="cl-load-by-member" v-model="loadBy" value="member" checked>
      <label for="cl-load-by-member">Load by member</label></p>
      <div v-if="loadBy === 'member'">
        <p>Member identifier column:
          <select v-model="memberIdColumn.id">
            <option v-for="column in columns">{{column}}</option>
          </select></p>

        <p>Member identifier can be an email address or user ID.</p>
      </div>
      <p v-if="hasTeaming">
        <input type="radio" @change="onLoadByChange()" id="cl-load-by-team" v-model="loadBy" value="team">
      <label for="cl-load-by-team">Load by team</label>
      </p>
      <div v-if="loadBy === 'team'">
        <p>Team identifier column:
          <select v-model="teamIdColumn.id">
            <option v-for="column in columns">{{column}}</option>
          </select></p>

        <p>Team identifiers are the team names.</p>
      </div>

        <p class="center">Select column for each grade item</p>
        <div class="cl-parts">
            <template v-for="(part, index) in parts" v-if="loadBy === 'member' || part.teaming !== undefined">
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
      teamIdColumn: {},
      columnSelect: [],
      mapping: {},
      commentMapping: {},
      hasTeaming: false,
      loadBy: 'member'
    }
  },
  methods: {
    onLoadByChange() {
      if(this.loadBy === 'team') {
        // Ensure all teamings are the same
        for (const part of this.parts) {
          if (part.teaming !== undefined && part.teaming !== this.teamIdColumn.teaming) {
            this.$site.toast(this, "All teamings must the same for grade upload")
            this.loadBy = 'member'
          }
        }
      }

      this.memberIdColumn.active = this.loadBy === 'member'
      this.teamIdColumn.active = this.loadBy === 'team'
    }
  },
  mounted() {
    // Determine if there is any teaming for any grade parts
    this.hasTeaming = false;
    this.loadBy = 'member';

    this.teamIdColumn = this.$parent.teamColumn
    this.teamIdColumn.active = false;

    // Determine if the grades have any teamings
    for (const part of this.parts) {
      if (part.teaming !== undefined) {
        this.hasTeaming = true;
        this.teamIdColumn.teaming = part.teaming;
      }
    }

    // See if there is an email column
    this.memberIdColumn = this.$parent.idColumn;
    this.memberIdColumn.id = this.columns[0];
    this.memberIdColumn.active = true;

    for (let column of this.columns) {
      if (column.toLowerCase().indexOf('email') >= 0) {
        this.memberIdColumn.id = column;
        break;
      }
    }


    if (this.hasTeaming) {
      // See if there is a team column
      this.teamIdColumn.id = this.columns[0];

      for (let column of this.columns) {
        if (column.toLowerCase().indexOf('team') >= 0) {
          this.teamIdColumn.id = column;
          break;
        }
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