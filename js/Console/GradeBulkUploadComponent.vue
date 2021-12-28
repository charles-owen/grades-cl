<template>
  <div class="cl-bulk-upload">
    <h2 id="bulk">Bulk grade uploading</h2>
    <p>This option accepts files in CSV format as produced by CrowdMark and other systems. </p>

    <form class="full" @submit.prevent="bulkUpload()" method="post" enctype="multipart/form-data">
      <fieldset>
        <legend>Bulk Upload File</legend>
        <div>
          <div>File to upload: </div>
          <div>
            <p><input name="bulkfile" type="file" @change="bulkFiles = $event.target.files"></p>
            <p><input type="submit" value="Press"> to upload the file!</p>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
  import GradesUploadColumnChooserComponent from './GradesUploadColumnChooser.vue';

  export default {
    props: ['assigntag', 'parts'],
    data: function () {
      return {
        bulkFiles: null
      }
    },
    methods: {
      bulkUpload: function () {
        const site = this.$site;

        if (this.bulkFiles === null || this.bulkFiles.length < 1) {
          return;
        }

        let file = this.bulkFiles[0];
        let reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (e) => {
          const member = this.$store.state.user.user.member;

          // Data we will send to the server
          let data = {
            file: e.target.result,
            semester: member.semester,
            section: member.section,
            mapping: '',
            commentMapping: ''
          }

          //
          // Read the first line of the CSV file to get the fields
          //
          const re = /^.*$/m;
          const match = e.target.result.match(re);
          if (match === null) {
            new site.Dialog.MessageBox('Invalid File', 'File does not contain grade data.',
                    site.Dialog.MessageBox.OK, () => {
                    });
            return;
          }

          const columns = match[0].split(',');
          const parts = this.parts;
          let mapping = {};
          let commentMapping = {};
          let idColumn = {active: true};
          let teamColumn = {active: false}

          new site.Dialog({
            title: 'Column Selection',
            content: '<div id="cl-column-chooser"></div>',
            addClass: 'cl-column-chooser-dlg',
            buttons: [
              {
                contents: 'Upload',
                focus: true,
                click: (dialog) => {
                  dialog.close();

                  let any = false;
                  for (let part of parts) {
                    if (mapping[part.tag] !== '*none*') {
                      any = true;
                      break;
                    }
                  }

                  if (!any) {
                    site.toast(this, "No columns selected to upload");
                    return;
                  }

                  data.mapping = JSON.stringify(mapping);
                  data.commentMapping = JSON.stringify(commentMapping);
                  if(idColumn.active) {
                    data.idcolumn = idColumn.id;
                  } else if(teamColumn.active) {
                    data.teamcolumn = teamColumn.id
                    data.teaming = teamColumn.teaming
                  }

                  site.api.post('/api/grade/bulk/upload/' + this.assigntag, data)
                          .then((response) => {
                            if (!response.hasError()) {

                              let results = response.getData('results');

                              site.toast(this, '' + results.attributes.grades + " grades successfully uploaded for " +
                                results.attributes.users + ' users');
                              setTimeout(() => {
                                window.history.go();
                              }, 1000);

                            } else {
                              console.log(response);
                              site.toast(this, response);
                            }

                          })
                          .catch((error) => {
                            console.log(error);
                            site.toast(this, error);
                          });

                }
              },
              {
                contents: 'Cancel',
                focus: true,
                click: (dialog) => {
                  dialog.close();

                }
              }
            ]


          });

          // Create a Vue inside the dialog box
          new site.Vue({
            el: '#cl-column-chooser',
            data: function () {
              return {
                parts: parts,
                columns: columns,
                mapping: mapping,
                commentMapping: commentMapping,
                idColumn: idColumn,
                teamColumn: teamColumn
              }
            },
            template: `<chooser :parts="parts" :columns="columns"></chooser>`,
            components: {
              'chooser': GradesUploadColumnChooserComponent
            }
          })

        };

        reader.onerror = function (e) {
          site.toast(this, "Error reading file");
        };

        reader.onabort = function (e) {
          site.toast(this, "File read aborted");
        };

        // Read in the file
        reader.readAsText(file);
      }
    }
  }
</script>

// Notice: Not scoped!
<style lang="scss">
  div.cl-bulk-upload {
    form {
      margin-bottom: 1em;
    }

    fieldset {

      > div {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        > div {
          padding-right: 1em;

          p {
            margin: 0 0 0.5em 0;
          }

          p:last-child {
            margin: 0;

            input {
              width: 6.5em;
            }
          }
        }
      }
    }
  }

  div.cl-bulk-upload-dlg {
    width: 400px;

  }
</style>