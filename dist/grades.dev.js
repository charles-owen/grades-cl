/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesUploadColumnChooser_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['assigntag', 'parts'],
  data: function data() {
    return {
      bulkFiles: null
    };
  },
  methods: {
    bulkUpload: function bulkUpload() {
      var _this = this;

      var site = this.$site;

      if (this.bulkFiles === null || this.bulkFiles.length < 1) {
        return;
      }

      var file = this.bulkFiles[0];
      var reader = new FileReader(); // Closure to capture the file information.

      reader.onload = function (e) {
        var member = _this.$store.state.user.user.member; // Data we will send to the server

        var data = {
          file: e.target.result,
          semester: member.semester,
          section: member.section,
          mapping: '',
          commentMapping: '',
          idcolumn: ''
        }; //
        // Read the first line of the CSV file to get the fields
        //

        var re = /^.*$/m;
        var match = e.target.result.match(re);

        if (match === null) {
          new site.Dialog.MessageBox('Invalid File', 'File does not contain grade data.', site.Dialog.MessageBox.OK, function () {});
          return;
        }

        var columns = match[0].split(',');
        var parts = _this.parts;
        var mapping = {};
        var commentMapping = {};
        var idColumn = {};
        new site.Dialog({
          title: 'Column Selection',
          content: '<div id="cl-column-chooser"></div>',
          addClass: 'cl-column-chooser-dlg',
          buttons: [{
            contents: 'Upload',
            focus: true,
            click: function click(dialog) {
              dialog.close();
              var any = false;

              var _iterator = _createForOfIteratorHelper(parts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var part = _step.value;

                  if (mapping[part.tag] !== '*none*') {
                    any = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!any) {
                site.toast(_this, "No columns selected to upload");
                return;
              }

              data.mapping = JSON.stringify(mapping);
              data.commentMapping = JSON.stringify(commentMapping);
              data.idcolumn = idColumn.id;
              site.api.post('/api/grade/bulk/upload/' + _this.assigntag, data).then(function (response) {
                if (!response.hasError()) {
                  var results = response.getData('results');
                  site.toast(_this, '' + results.attributes.grades + " grades successfully uploaded for " + results.attributes.users + ' users');
                  setTimeout(function () {
                    window.history.go();
                  }, 1000);
                } else {
                  console.log(response);
                  site.toast(_this, response);
                }
              })["catch"](function (error) {
                console.log(error);
                site.toast(_this, error);
              });
            }
          }, {
            contents: 'Cancel',
            focus: true,
            click: function click(dialog) {
              dialog.close();
            }
          }]
        }); // Create a Vue inside the dialog box

        new site.Vue({
          el: '#cl-column-chooser',
          data: function data() {
            return {
              parts: parts,
              columns: columns,
              mapping: mapping,
              commentMapping: commentMapping,
              idColumn: idColumn
            };
          },
          template: "<chooser :parts=\"parts\" :columns=\"columns\"></chooser>",
          components: {
            'chooser': _GradesUploadColumnChooser_vue__WEBPACK_IMPORTED_MODULE_0__.default
          }
        });
      };

      reader.onerror = function (e) {
        site.toast(this, "Error reading file");
      };

      reader.onabort = function (e) {
        site.toast(this, "File read aborted");
      }; // Read in the file


      reader.readAsText(file);
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Manual grade entry form.
 * @constructor GradeManualVue
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['item'],
  mounted: function mounted() {},
  methods: {
    fillInPoints: function fillInPoints() {
      this.item.manual.points = this.item.manual.available;
    },
    compute: function compute() {
      var lines = this.item.manual.comment.split(/\r?\n/);
      var pos = 0;
      var neg = 0;

      var _iterator = _createForOfIteratorHelper(lines),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var line = _step.value;
          var tokens = line.match(/^\s*([+-]?)([1-9][0-9]*)([^0-9]|$)/);

          if (tokens !== null) {
            if (tokens[1] === '-') {
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

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (neg !== 0) {
        if (pos === 0) {
          this.item.manual.points = this.item.manual.available + neg;
        } else {
          this.item.manual.points = pos + neg;
        }
      } else {
        if (pos === 0) {
          this.item.manual.points = this.item.manual.available;
        } else {
          this.item.manual.points = pos;
        }
      }
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * All grades for all members
 * /cl/console/grades/all
 * @constructor GradesAllVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': ConsoleComponentBase,
  data: function data() {
    return {
      section: null,
      grades: null
    };
  },
  components: {
    'membersFetcher': MembersFetcherComponentVue
  },
  created: function created() {
    var user = this.$store.state.user.user;
    var member = user.member;
    this.section = this.$store.getters['course/section'](member.semester, member.section);
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.setTitle(': Grades');
    this.$site.api.get('/api/grade/all', {}).then(function (response) {
      if (!response.hasError()) {
        _this.grades = response.getData('grades-all').attributes;
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    assignmentGrade: function assignmentGrade(user, category, assignment) {
      if (this.grades === null) {
        return '?';
      }

      var userGrades = this.grades[user.member.id];
      var assignmentGrades = userGrades.categories[category.tag].assignments;

      var _iterator = _createForOfIteratorHelper(assignmentGrades),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var assignmentGrade = _step.value;

          if (assignmentGrade.tag === assignment.tag) {
            return assignmentGrade.grade;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return '';
    },
    categoryGrade: function categoryGrade(user, category) {
      if (this.grades === null) {
        return '?';
      }

      var userGrades = this.grades[user.member.id];
      var categoryGrade = userGrades.categories[category.tag];
      return categoryGrade.grade;
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * All student grade links
 * /cl/console/grades/links
 * @constructor GradesLinksVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': ConsoleComponentBase,
  data: function data() {
    return {
      grades: null,
      parts: []
    };
  },
  components: {
    'membersFetcher': MembersFetcherComponentVue
  },
  mounted: function mounted() {
    this.$parent.setTitle(': Grades');
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var PrevNextMemberVue = Site.PrevNextMemberVue;
var MemberFetcherComponentVue = Site.MemberFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * Console grades presentation for a member
 * /cl/console/grades/:num
 * @constructor GradesMemberVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": ConsoleComponentBase,
  props: ['memberid'],
  data: function data() {
    return {
      course: this.$store.state.course.course,
      section: null,
      grade: null,
      per: ''
    };
  },
  components: {
    memberFetcher: MemberFetcherComponentVue,
    prevNext: PrevNextMemberVue
  },
  mounted: function mounted() {
    this.setTitle(': Grade');
  },
  methods: {
    fetched: function fetched(user) {
      var _this = this;

      this.section = user.member.getSection(this.$store);
      this.setTitle(': ' + user.name + ' Grades');
      this.$site.api.get("/api/grade/grade/".concat(this.memberid), {}).then(function (response) {
        if (!response.hasError()) {
          _this.grade = response.getData('grade').attributes;

          if (_this.grade.available > 0) {
            _this.per = '(' + (_this.grade.grade / _this.grade.available * 100).toFixed(1) + '%)';
          }
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Choose the CSV columns for each grade component we are going to upload.
 *
 * @constructor GradesUploadColumnChooserComponent
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['parts', 'columns'],
  data: function data() {
    return {
      memberIdColumn: {},
      columnSelect: [],
      mapping: {},
      commentMapping: {}
    };
  },
  methods: {},
  mounted: function mounted() {
    // See if there is an email column
    this.memberIdColumn = this.$parent.idColumn;
    this.memberIdColumn.id = this.columns[0];

    var _iterator = _createForOfIteratorHelper(this.columns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var column = _step.value;

        if (column.toLowerCase().indexOf('email') >= 0) {
          this.memberIdColumn.id = column;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.columnSelect = ['*none*'].concat(this.columns);
    this.mapping = this.$parent.mapping;
    this.commentMapping = this.$parent.commentMapping; // Set initially empty

    var _iterator2 = _createForOfIteratorHelper(this.parts),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var part = _step2.value;
        this.mapping[part.tag] = '*none*';
        this.commentMapping[part.tag] = '*none*';
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Member = Site.Member;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * The main grading page
 * /cl/console/grading
 * @constructor GradingVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': ConsoleComponentBase,
  data: function data() {
    return {
      section: null,
      gradingLink: this.$site.root + '/cl/console/grading/',
      ta: Member.TA,
      downloadPermission: false,
      // Permission to download grades?
      rubricDumperPermission: false // Permission to dump rubrics?

    };
  },
  computed: {},
  created: function created() {
    this.$parent.setTitle(': Assignment Grading');
    var user = this.$store.state.user.user;
    var member = user.member;
    this.downloadPermission = user.atLeast(this.$site.permissions.atLeast('grades-download', Member.TA));
    this.rubricDumperPermission = user.atLeast(this.$site.permissions.atLeast('grades-rubric-dumper', Member.TA));
    this.section = this.$store.getters['course/section'](member.semester, member.section);
  },
  methods: {}
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeBulkUploadComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var SubmissionsLinksVue = Site.SubmissionsLinksVue;
var MembersFetcherComponentVue = Site.MembersFetcherComponentVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
var Member = Site.Member;
/**
 * The assignment grading page for the course.
 * /cl/console/grading/:assigntag
 * @constructor GradingAssignmentVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": ConsoleComponentBase,
  props: ['assigntag'],
  data: function data() {
    return {
      link: '/cl/console/grading/' + this.assigntag + '/',
      grades: null,
      parts: [],
      fetched: false,
      assignment: null,
      ta: false
    };
  },
  components: {
    'membersFetcher': MembersFetcherComponentVue,
    'submissionsLinks': SubmissionsLinksVue,
    'bulk-upload': _GradeBulkUploadComponent_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    var _this = this;

    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.ta = this.user.atLeast(Member.TA);
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Grading');
    this.$site.api.get('/api/grade/grades/' + this.assigntag, {}).then(function (response) {
      if (!response.hasError()) {
        _this.grades = response.getData('grades').attributes;
        _this.parts = response.getData('grade-parts').attributes;
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    partGrade: function partGrade(user, part) {
      var userGrades = this.grades[user.member.id];

      if (userGrades === undefined) {
        return '';
      }

      var partStatus = userGrades.grades[part.tag];

      if (partStatus === undefined) {
        return '';
      }

      return partStatus;
    },
    grade: function grade(user) {
      var userGrades = this.grades[user.member.id];

      if (userGrades === undefined) {
        return '';
      }

      return userGrades.grade !== null ? userGrades.grade : '';
    },
    partCount: function partCount(users, part) {
      var cnt = 0;

      var _iterator = _createForOfIteratorHelper(users),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var user = _step.value;

          if (this.partGrade(user, part) !== '') {
            cnt++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return cnt;
    },
    gradesCount: function gradesCount(users) {
      var cnt = 0;

      var _iterator2 = _createForOfIteratorHelper(users),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var user = _step2.value;

          if (this.grade(user) !== '') {
            cnt++;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return cnt;
    },
    partAverage: function partAverage(users, part) {
      var cnt = 0;
      var total = 0;

      var _iterator3 = _createForOfIteratorHelper(users),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var user = _step3.value;
          var grade = this.partGrade(user, part);

          if (grade !== '') {
            cnt++;
            total += grade;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (cnt === 0) {
        return '';
      }

      return Math.round(total / cnt * 10) / 10;
    },
    gradeAverage: function gradeAverage(users) {
      var cnt = 0;
      var total = 0;

      var _iterator4 = _createForOfIteratorHelper(users),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var user = _step4.value;
          var grade = this.grade(user);

          if (grade !== '') {
            cnt++;
            total += grade;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (cnt === 0) {
        return '';
      }

      return Math.round(total / cnt * 10) / 10;
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/GradeHistoryComponent.vue */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue");
/* harmony import */ var _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handbook/Handbook.vue */ "./vendor/cl/grades/js/Handbook/Handbook.vue");
/* harmony import */ var _GradeManual_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeManual.vue */ "./vendor/cl/grades/js/Console/GradeManual.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ConsoleComponentBase = Site.ConsoleComponentBase;
var PrevNextMemberVue = Site.PrevNextMemberVue;
var MemberFetcherComponentVue = Site.MemberFetcherComponentVue;
var SubmissionsAssignmentMemberComponentVue = Site.SubmissionsAssignmentMemberComponentVue;
/**
 * /cl/console/grading/:assignment/:memberid
 * Assignment grading page for a course member
  * @constructor GradingAssignmentMemberVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': ConsoleComponentBase,
  props: ['assigntag', 'memberid'],
  data: function data() {
    return {
      gradingLink: '/cl/console/grading/' + this.assigntag,
      assignment: null,
      graders: [],
      grade: null,
      due: null,
      handbookResult: null,
      reviewing: null
    };
  },
  components: {
    memberFetcher: MemberFetcherComponentVue,
    prevNext: PrevNextMemberVue,
    gradeHistory: _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    submissions: SubmissionsAssignmentMemberComponentVue,
    handbook: _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    gradeManual: _GradeManual_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    var _this = this;

    this.setTitle(': Grading');
    this.addNav2('Submit', 2, function () {
      _this.submit();
    });
    this.addNav2('Submit and Exit', 3, function () {
      _this.submit(true);
    });
    this.addNav2Link('Exit', 4, '/cl/console/grading/' + this.assigntag);
  },
  methods: {
    fetched: function fetched(user) {
      var _this2 = this;

      var section = user.member.getSection(this.$store);
      this.assignment = user.member.getAssignment(this.$store, this.assigntag);
      this.setTitle(': ' + user.name + ' ' + this.assignment.shortname + ' Grading');

      if (this.assignment.review === true) {
        this.reviewing = this.$site.console.Review.reviewsbyfor;
      }

      this.$site.api.get("/api/grade/grader/".concat(this.assigntag, "/").concat(this.memberid), {}).then(function (response) {
        if (!response.hasError()) {
          _this2.take(response);
        } else {
          _this2.$site.toast(_this2, response);
        }
      })["catch"](function (error) {
        _this2.$site.toast(_this2, error);
      });
    },
    submit: function submit(exit, callback) {
      var _this3 = this;

      var form = this.$refs['form'];
      var formData = new FormData(form);

      if (this.handbookResult !== null) {
        formData.append('_handbook', JSON.stringify(this.handbookResult));
      }

      this.$site.api.post("/api/grade/grader/".concat(this.assigntag, "/").concat(this.memberid), formData).then(function (response) {
        if (!response.hasError()) {
          _this3.take(response);

          if (exit) {
            _this3.$router.push(_this3.$site.root + '/cl/console/grading/' + _this3.assigntag);
          }

          if (callback !== undefined) {
            callback();
          }
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        _this3.$site.toast(_this3, error);
      });
    },

    /**
     * Distribute grade item to all members of a team.
     * @param item
     */
    teamDistribute: function teamDistribute(item) {
      var _this4 = this;

      this.submit(false, function () {
        var data = {
          teaming: item.teaming,
          gradeTag: item.tag
        };

        _this4.$site.api.post("/api/team/distribute/".concat(_this4.assigntag, "/").concat(_this4.memberid), data).then(function (response) {
          if (!response.hasError()) {} else {
            _this4.$site.toast(_this4, response);
          }
        })["catch"](function (error) {
          _this4.$site.toast(_this4, error);
        });
      });
    },
    take: function take(response) {
      var _this5 = this;

      // Is there an existing locked grader?
      var locked = null;

      for (var i = 0; i < this.graders.length; i++) {
        if (this.graders[i].locked) {
          locked = i;
          break;
        }
      }

      var grader = response.getData('grader');
      this.due = grader.attributes.due !== undefined ? grader.attributes.due : null;

      var _iterator = _createForOfIteratorHelper(grader.attributes.graders),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _grader = _step.value;
          _grader.locked = false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.graders = grader.attributes.graders;
      this.grade = grader.attributes.grade;

      if (locked !== null) {
        this.graders[locked].locked = true;
      }

      this.$forceUpdate();
      this.$nextTick(function () {
        _this5.installRubricClickers();

        _this5.$site.message('cl-grades-grader-installed');
      });
    },
    lock: function lock(item) {
      if (item.locked) {
        item.locked = false;
      } else {
        var _iterator2 = _createForOfIteratorHelper(this.graders),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var grader = _step2.value;
            grader.locked = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        item.locked = true;
      }
    },
    /// Install clickers for Rubric items that will autofill them.
    installRubricClickers: function installRubricClickers() {
      var _this6 = this;

      var selectors = ['div.cl-clickable li.item', 'div.cl-clickable ul.items li', 'div.cl-clickable p.item'];

      for (var _i = 0, _selectors = selectors; _i < _selectors.length; _i++) {
        var selector = _selectors[_i];
        var clickables = document.querySelectorAll(selector);

        var _iterator3 = _createForOfIteratorHelper(clickables),
            _step3;

        try {
          var _loop = function _loop() {
            var element = _step3.value;

            if (element.dataset.clickable === undefined) {
              element.addEventListener('click', function () {
                _this6.addContent(element);
              });
              element.setAttribute('data-clickable', 'yes');
            }
          };

          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    },
    /// Add rubric content to the element comment textarea
    addContent: function addContent(element) {
      var content = element.textContent; // Work up until we find the cl-grader-item div

      element = element.parentNode;

      while (element !== null) {
        if (element.classList.contains('cl-grader-item')) {
          break;
        }

        element = element.parentNode;
      }

      if (element === null) {
        return;
      } // Find the item this does with


      var tag = element.dataset.tag;

      var _iterator4 = _createForOfIteratorHelper(this.graders),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;

          if (item.tag === tag) {
            if (item.manual !== undefined) {
              if (item.manual.comment.length > 0 && item.manual.comment.match(/\n$/) === null) {
                item.manual.comment += "\n";
              }

              item.manual.comment += content;
            }

            break;
          }
        } // Find a textarea inside this

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var _iterator5 = _createForOfIteratorHelper(element.querySelectorAll('textarea')),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var textarea = _step5.value;
          textarea.value = textarea.value + content + "\n";
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    },
    time: function time(t) {
      return this.$site.TimeFormatter.absoluteUNIX(t, 'short');
    },
    email: function email(user) {
      window.location = 'mailto:' + user.email;
    },
    handbookData: function handbookData(data) {
      this.handbookResult = data;
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//

/**
  * Editor for a single Rubric
  * Component in /cl/console/rubric/:assigntag
  * @constructor RubricEditorVue
  */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['assigntag', 'rubric'],
  mounted: function mounted() {
    var _this = this;

    var element = this.$refs['editor'];
    this.editor = new this.$site.Editor(element, {
      value: this.rubric.rubric,
      tab: true,
      autoIndent: true
    });
    this.editor.textarea.addEventListener('keydown', function () {
      _this.changed();
    });
  },
  methods: {
    changed: function changed() {
      var _this2 = this;

      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        _this2.timer = null;
        _this2.rubric.show = _this2.$site.Sanitize.sanitize(_this2.editor.textarea.value);
      }, 100);
    },
    submit: function submit() {
      var _this3 = this;

      this.$site.api.post('/api/grade/rubrics/' + this.assigntag + '/' + this.rubric.tag, {
        rubric: this.rubric.show
      }).then(function (response) {
        if (!response.hasError()) {
          _this3.$site.toast(_this3, 'Rubric successfully saved');
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        _this3.$site.toast(_this3, error);
      });
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RubricEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue */ "./vendor/cl/grades/js/Console/RubricEditor.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var ConsoleComponentBase = Site.ConsoleComponentBase;
var Member = Site.Member;
/**
 * Editor page for all rubrics for an assignment
 * /cl/console/rubric/:assigntag
 * @constructor RubricsEditorVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': ConsoleComponentBase,
  props: ['assigntag'],
  data: function data() {
    return {
      ta: Member.TA,
      rubrics: []
    };
  },
  components: {
    rubricEditor: _RubricEditor_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  created: function created() {
    var _this = this;

    this.$parent.setTitle(': Assignment Grading');
    this.timer = null;
    var user = this.$store.state.user.user;
    var member = user.member;
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Rubrics');
    this.$site.api.get('/api/grade/rubrics/' + this.assignment.tag, {}).then(function (response) {
      if (!response.hasError()) {
        _this.rubrics = response.getData('rubrics').attributes;

        var _iterator = _createForOfIteratorHelper(_this.rubrics),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var rubric = _step.value;

            _this.$set(rubric, 'show', rubric.rubric);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
  * Handbook editor/viewing Vue component
  *
  * Use by both the student grade presentation page and the
  * assignment grading page.
  * @constructor HandbookVue
  */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    item: {
      "default": {}
    },
    readonly: {
      "default": false
    }
  },
  watch: {
    item: function item(value) {
      this.take();
    }
  },
  data: function data() {
    return {
      metadata: {},
      total: 0
    };
  },
  mounted: function mounted() {
    this.take();
  },
  methods: {
    take: function take() {
      this.metadata = {};

      var _iterator = _createForOfIteratorHelper(this.item.handbook.categories),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var category = _step.value;
          var _catPoints = this.item.metadata[category.tag];

          if (_catPoints === undefined) {
            _catPoints = 0;
          }

          this.$set(this.metadata, category.tag, _catPoints);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var catPoints = this.item.metadata['_manual'];

      if (catPoints === undefined) {
        catPoints = 0;
      }

      this.$set(this.metadata, '_manual', catPoints);
      var manualText = this.item.metadata['_manual_text'];

      if (manualText === undefined) {
        manualText = '';
      }

      this.$set(this.metadata, '_manual_text', manualText);
      var comment = this.item.metadata['_comment'];

      if (comment === undefined) {
        comment = '';
      }

      this.$set(this.metadata, '_comment', comment);
      this.compute();
    },
    compute: function compute() {
      var total = -this.metadata['_manual'];

      var _iterator2 = _createForOfIteratorHelper(this.item.handbook.categories),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var category = _step2.value;
          total -= this.metadata[category.tag];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      total += this.item.handbook.free;

      if (total > 0) {
        total = 0;
      }

      total *= this.item.multiplier;
      this.total = total;
      this.$emit('handbook-data', {
        'metadata': this.metadata,
        'total': this.total
      });
    },
    deduction: function deduction(deduct) {
      if (deduct === 0) {
        return '';
      } else {
        return -deduct;
      }
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/GradeHistoryComponent.vue */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue");
/* harmony import */ var _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handbook/Handbook.vue */ "./vendor/cl/grades/js/Handbook/Handbook.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var UserVueBase = Site.UserVueBase;
/**
 * The assignment grading page for presentation for a user
 *
 * /cl/grade/:assignment
 * @constructor GradeAssignmentVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': UserVueBase,
  props: ['json'],
  components: {
    gradeHistory: _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    handbook: _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.setTitle(':  ' + this.json.assignment.shortName + ' Grade for ' + this.user.displayName());
    var menu = [{
      name: 'Grades',
      click: function click() {
        window.location = _this.$site.root + '/cl/grades';
      }
    }];
    this.$parent.setMenu(menu);
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var UserVueBase = Site.UserVueBase;
/**
 * The course grading page for presentation of all grades for a user
 *
 * /cl/grades
 * @constructor GradesVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'extends': UserVueBase,
  props: ['json'],
  data: function data() {
    return {
      grade: null,
      per: ''
    };
  },
  mounted: function mounted() {
    this.setTitle('Grades for ' + this.user.displayName()); //  this.setTitle(': Grades ');

    this.grade = this.json;

    if (this.grade.available > 0) {
      this.per = ' (' + (this.grade.grade / this.grade.available * 100).toFixed(1) + '%)';
    }
  },
  methods: {}
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['history'],
  data: function data() {
    return {
      history2: []
    };
  },
  watch: {
    history: function history(to, fm) {
      this.history2 = this.history.slice().reverse();
    }
  },
  mounted: function mounted() {
    if (this.history !== undefined) {
      this.history2 = this.history.slice().reverse();
    }
  },
  methods: {
    display: function display(history) {
      var grader = this.$store.getters['course/staff'](history.grader);
      var graderName = grader !== null ? grader.displayName() : "Invalid";
      var str = this.$site.TimeFormatter.absoluteUNIX(history.time, 'short') + ' by ' + graderName;
      return str;
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['menu'],
  data: function data() {
    return {
      homeLink: Site.root + '/'
    };
  }
});

/***/ }),

/***/ "./vendor/cl/grades/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/grades/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Grades": () => (/* binding */ Grades)
/* harmony export */ });
/* harmony import */ var _js_GradesFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/GradesFactory */ "./vendor/cl/grades/js/GradesFactory.js");
/* harmony import */ var _js_Console_GradesConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/GradesConsole */ "./vendor/cl/grades/js/Console/GradesConsole.js");
/* harmony import */ var _grades_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_grades.scss */ "./vendor/cl/grades/_grades.scss");



var Grades = _js_GradesFactory__WEBPACK_IMPORTED_MODULE_0__.GradesFactory.create(Site.Site);

if (Site.Site.console !== undefined) {
  _js_Console_GradesConsole__WEBPACK_IMPORTED_MODULE_1__.GradesConsole.install(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesConsole.js":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesConsole.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradesConsole": () => (/* binding */ GradesConsole)
/* harmony export */ });
/* harmony import */ var _Grading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue */ "./vendor/cl/grades/js/Console/Grading.vue");
/* harmony import */ var _GradingAssignment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignment.vue */ "./vendor/cl/grades/js/Console/GradingAssignment.vue");
/* harmony import */ var _GradingAssignmentMember_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradingAssignmentMember.vue */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue");
/* harmony import */ var _GradesLinks_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GradesLinks.vue */ "./vendor/cl/grades/js/Console/GradesLinks.vue");
/* harmony import */ var _GradesAll_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GradesAll.vue */ "./vendor/cl/grades/js/Console/GradesAll.vue");
/* harmony import */ var _GradesMember_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GradesMember.vue */ "./vendor/cl/grades/js/Console/GradesMember.vue");
/* harmony import */ var _RubricsEditor_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RubricsEditor.vue */ "./vendor/cl/grades/js/Console/RubricsEditor.vue");







var Member = Site.Member;
/**
 * The grades console component.
 *
 * Handles installations in the console system.
 * @constructor
 */

var GradesConsole = function GradesConsole() {};
/**
 * Install functionality into the console system.
 * @param Console
 */

GradesConsole.install = function (Console) {
  Console.components.addOption({
    atLeast: Member.GRADER,
    page: {
      atLeast: Member.GRADER,
      title: 'Grading',
      route: '/grading',
      order: 4,
      component: _Grading_vue__WEBPACK_IMPORTED_MODULE_0__.default
    }
  });
  Console.components.addRoutes([{
    route: '/grading/:assigntag',
    component: _GradingAssignment_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    props: true
  }, {
    route: '/grading/:assigntag/:memberid',
    component: _GradingAssignmentMember_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    props: true
  }, {
    route: '/rubric/:assigntag',
    component: _RubricsEditor_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    props: true
  }, {
    route: '/grades/links',
    component: _GradesLinks_vue__WEBPACK_IMPORTED_MODULE_3__.default
  }, {
    route: '/grades/all',
    component: _GradesAll_vue__WEBPACK_IMPORTED_MODULE_4__.default
  }, {
    route: '/grades/:memberid',
    component: _GradesMember_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    props: true
  }]);
  Console.tables.add({
    title: 'Grades',
    order: 40,
    api: '/api/grade/tables'
  });
};

/***/ }),

/***/ "./vendor/cl/grades/js/GradesFactory.js":
/*!**********************************************!*\
  !*** ./vendor/cl/grades/js/GradesFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradesFactory": () => (/* binding */ GradesFactory)
/* harmony export */ });
/* harmony import */ var site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVue */ "./vendor/cl/site/js/Vue/PageVue.js");
/* harmony import */ var _User_GradeAssignment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User/GradeAssignment.vue */ "./vendor/cl/grades/js/User/GradeAssignment.vue");
/* harmony import */ var _User_Grades_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User/Grades.vue */ "./vendor/cl/grades/js/User/Grades.vue");
/* harmony import */ var site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! site-cl/js/Vue/PageNav.vue */ "./vendor/cl/site/js/Vue/PageNav.vue");




var GradesFactory = function GradesFactory() {};

GradesFactory.create = function (site) {
  var Grades = function Grades() {};

  site.ready(function () {
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__.PageVue.create('div.cl-grade-assignment', 'Assignment Grade', _User_GradeAssignment_vue__WEBPACK_IMPORTED_MODULE_1__.default, site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__.default);
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__.PageVue.create('div.cl-grades', 'Grades', _User_Grades_vue__WEBPACK_IMPORTED_MODULE_2__.default, site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__.default);
  });
  return Grades;
};

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVue.js":
/*!******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVue.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageVue": () => (/* binding */ PageVue)
/* harmony export */ });
/**
 * Basic Vue-based site page starter
 *
 * How to use:
 * @code
 * site.ready(() => {
 *    PageVue.create('div.cl-grade-assignment', 'Assignment Grade', GradeAssignmentVue);
 *    PageVue.create('div.cl-grades', 'Grades', GradesVue);
 * });
 * @endcode
 *
 * @constructor PageVue
 */
var PageVue = function PageVue() {};
/**
 * Create a page in a given component, replacing the provided
 * selector. The selector is assumed to contain JSON data that is
 * then provided to the component in the json property.
 *
 * @param sel Selector for a div to replace with the view.
 * @param title Initial title to apply to the page
 * @param component Component to display (Vue)
 * @param nav Optional navigation component, like PageNav
 */

PageVue.create = function (sel, title, component, nav) {
  var element = document.querySelector(sel);

  if (element === null) {
    return;
  }

  var navtag = nav !== undefined ? '<page-nav :menu="menu"></page-nav>' : '';
  var template = "<div><site-header :title=\"title\">".concat(navtag, "</site-header>\n<page-vue :json=\"json\"></page-vue><site-footer></site-footer>\n</div>");
  var Header = Site.info.header.component();
  var Footer = Site.info.footer.component();
  var json = JSON.parse(element.textContent);
  var store = Site.store;
  var site = Site.Site;
  var components = {
    'site-header': Header,
    'site-footer': Footer,
    'page-vue': component
  };

  if (nav !== undefined) {
    components['page-nav'] = nav;
  }

  new Site.Vue({
    el: element,
    site: site,
    store: store,
    data: {
      title: title,
      json: json,
      menu: []
    },
    template: template,
    components: components,
    methods: {
      /**
       * Set the site title. This can be used from
       * the child Vue's using this.$parent.setTitle('')
       * @memberof PageVue
       * @instance
       * @param {string} title Title to set
       */
      setTitle: function setTitle(title) {
        this.title = title;
        document.title = Site.info.siteName + ' ' + title;
      },
      setMenu: function setMenu(menu) {
        this.menu = menu;
      },
      getMenu: function getMenu() {
        return this.menu;
      }
    }
  });
};

/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/grades/_grades.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/grades/_grades.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _site_img_yellowpad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site/img/yellowpad.png */ "./vendor/cl/site/img/yellowpad.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_site_img_yellowpad_png__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-grader div.cl-rubric div.cl-show, div.cl-grader table.cl-handbook div.comment, div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc;\n}\n\ndiv.cl-grades td.role {\n  white-space: nowrap;\n}\n\ndiv.cl-grader form {\n  position: relative;\n}\ndiv.cl-grader div.cl-grader-item {\n  position: relative;\n  background: white;\n  padding-bottom: 0.25em;\n}\ndiv.cl-grader div.cl-grader-item h2 {\n  margin-top: -0.25em;\n}\ndiv.cl-grader div.cl-grader-item-locked {\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky;\n  top: 50px;\n  z-index: 100;\n  background: #f8fff8;\n}\ndiv.cl-grader a.link-button {\n  display: inline-block;\n  font-size: 0.85em;\n  padding: 0 2px;\n}\ndiv.cl-grader p.cl-title {\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: bold;\n  margin: 1em 0 0 0;\n}\ndiv.cl-grader p.cl-dispute {\n  text-align: center;\n  margin: 0;\n}\ndiv.cl-grader p.cl-role {\n  text-align: center;\n}\ndiv.cl-grader p.cl-role-staff {\n  color: #c41425;\n}\ndiv.cl-grader p.cl-due {\n  text-align: center;\n  font-style: italic;\n  font-weight: normal;\n  color: #c41425;\n}\ndiv.cl-grader button.cl-grader-button {\n  font-style: italic;\n  font-size: 0.9em;\n  color: black;\n}\ndiv.cl-grader a.cl-extra-link {\n  display: block;\n  float: right;\n  font-size: 0.5em;\n  padding-top: 1em;\n}\ndiv.cl-grader tr.cl-category td {\n  text-align: right;\n}\ndiv.cl-grader tr.cl-category td:first-child {\n  text-align: left;\n}\ndiv.cl-grader tr.cl-assignment td {\n  text-align: right;\n}\ndiv.cl-grader tr.cl-assignment td:first-child {\n  text-align: left;\n  padding-left: 3em;\n}\ndiv.cl-grader div.cl-grade, div.cl-grader div.grader {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\ndiv.cl-grader div.cl-grade label, div.cl-grader div.cl-grade div.label, div.cl-grader div.grader label, div.cl-grader div.grader div.label {\n  font-style: italic;\n}\ndiv.cl-grader div.cl-grade label a, div.cl-grader div.cl-grade div.label a, div.cl-grader div.grader label a, div.cl-grader div.grader div.label a {\n  font-size: 0.85em;\n  text-decoration: none;\n  padding-left: 1em;\n}\ndiv.cl-grader div.cl-grade div.comment, div.cl-grader div.grader div.comment {\n  flex: 1 1 auto;\n  padding: 0 20px 0 0;\n}\ndiv.cl-grader div.cl-grade div.comment textarea, div.cl-grader div.grader div.comment textarea {\n  display: block;\n  width: 100%;\n}\ndiv.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {\n  white-space: pre-wrap;\n  background: #f0f0f0;\n  font-style: normal;\n  border: 1px solid #a9a9a9;\n  height: 120px;\n  overflow: auto;\n  padding: 2px;\n}\ndiv.cl-grader div.cl-grade div.points, div.cl-grader div.grader div.points {\n  flex: 0 0 auto;\n  width: 5em;\n  text-align: center;\n  padding: 45px 5px 0 0;\n}\ndiv.cl-grader div.cl-grade div.points input, div.cl-grader div.cl-grade div.points div.value, div.cl-grader div.grader div.points input, div.cl-grader div.grader div.points div.value {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n}\ndiv.cl-grader div.cl-grade div.points span.not, div.cl-grader div.grader div.points span.not {\n  font-size: 0.8em;\n  font-style: italic;\n}\ndiv.cl-grader div.cl-grade div.value, div.cl-grader div.grader div.value {\n  padding: 2px 1px;\n}\ndiv.cl-grader div.cl-grade div.value a, div.cl-grader div.grader div.value a {\n  text-decoration: none;\n  color: black;\n}\ndiv.cl-grader table.cl-handbook {\n  width: 90%;\n}\ndiv.cl-grader table.cl-handbook td:last-child, div.cl-grader table.cl-handbook th:last-child {\n  width: 1px;\n  white-space: nowrap;\n}\ndiv.cl-grader table.cl-handbook input[type=radio] {\n  display: inline-block;\n  padding: 0 2px;\n  margin: 0 2px;\n}\ndiv.cl-grader table.cl-handbook input[type=text] {\n  width: 100%;\n}\ndiv.cl-grader table.cl-handbook textarea {\n  width: 100%;\n}\ndiv.cl-grader table.cl-handbook td.cl-deduct {\n  text-align: center;\n  font-size: 1.5em;\n}\ndiv.cl-grader table.cl-handbook div.comment {\n  white-space: pre;\n  background: #f0f0f0;\n  font-style: normal;\n  border: 1px solid #a9a9a9;\n  height: 80px;\n  overflow: auto;\n  padding: 2px;\n  margin: 0.3em 0;\n}\ndiv.cl-grader p.cl-rubric-expand {\n  margin-bottom: 0.1em;\n}\ndiv.cl-grader div.cl-rubricblock {\n  background: #e8f7f3;\n  padding: 5px;\n  border: 1px #808080 solid;\n  word-wrap: normal;\n  font-size: 0.9em;\n}\ndiv.cl-grader div.cl-rubricblock p:first-child, div.cl-grader div.cl-rubricblock ul:first-child {\n  margin-top: 0;\n}\ndiv.cl-grader div.cl-rubricblock p:last-child, div.cl-grader div.cl-rubricblock ul:last-child {\n  margin-bottom: 0;\n}\ndiv.cl-grader div.cl-rubricblock li.item, div.cl-grader div.cl-rubricblock p.item, div.cl-grader div.cl-rubricblock ul.items li {\n  color: #900000;\n  cursor: pointer;\n}\ndiv.cl-grader div.cl-rubricblock li.item:hover, div.cl-grader div.cl-rubricblock p.item:hover, div.cl-grader div.cl-rubricblock ul.items li:hover {\n  color: #c00000;\n}\ndiv.cl-grader textarea {\n  background: #f0f0f0;\n  font-style: normal;\n}\ndiv.cl-grader textarea.yellow-pad {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\ndiv.cl-grader div.grade {\n  border-top: 1px solid black;\n}\ndiv.cl-grader div.grade p:first-child {\n  text-align: center;\n  font-size: 1.2em;\n}\ndiv.cl-grader div.cl-rubric div.cl-show {\n  margin: 1em 0;\n  word-wrap: normal;\n  min-height: 8em;\n}\ndiv.cl-grader div.cl-rubric textarea {\n  font-size: 0.9em;\n  margin: 1em 0;\n  background: #f0f0f0;\n  font-style: normal;\n  width: 100%;\n  min-height: 8em;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/site/sass/modules/_colors.scss","webpack://./vendor/cl/grades/_grades.scss","webpack://./vendor/cl/grades/sass/partials/_grading.scss"],"names":[],"mappings":"AAgFA;EACE,iCAAA;EACA,oCAAA;EACA,4BAAA;AC/EF;;ACDE;EACE,mBAAA;ADIJ;;ACCE;EACE,kBAAA;ADEJ;ACCE;EACE,kBAAA;EACA,iBAAA;EACA,sBAAA;ADCJ;ACCI;EACE,mBAAA;ADCN;ACGE;EACE,wBAAA;EAA0B,WAAA;EAC1B,gBAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;ADAJ;ACGE;EACE,qBAAA;EACA,iBAAA;EACA,cAAA;ADDJ;ACIE;EACE,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;ADFJ;ACKE;EACE,kBAAA;EACA,SAAA;ADHJ;ACME;EACE,kBAAA;ADJJ;ACOE;EACE,cFhCG;AC2BP;ACQE;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,cFvCG;ACiCP;ACSE;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;ADPJ;ACUE;EACE,cAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;ADRJ;ACYI;EACE,iBAAA;ADVN;ACaI;EACE,gBAAA;ADXN;ACgBI;EACE,iBAAA;ADdN;ACiBI;EACE,gBAAA;EACA,iBAAA;ADfN;ACmBE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;ADjBJ;ACmBI;EACE,kBAAA;ADjBN;ACmBM;EACE,iBAAA;EACA,qBAAA;EACA,iBAAA;ADjBR;ACqBI;EACE,cAAA;EACA,mBAAA;ADnBN;ACqBM;EACE,cAAA;EACA,WAAA;ADnBR;ACsBM;EAEE,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;ADrBR;ACyBI;EACE,cAAA;EACA,UAAA;EACA,kBAAA;EACA,qBAAA;ADvBN;ACyBM;EACE,cAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;ADvBR;AC0BM;EACE,gBAAA;EACA,kBAAA;ADxBR;AC4BI;EACE,gBAAA;AD1BN;AC2BM;EACE,qBAAA;EACA,YAAA;ADzBR;AC8BE;EACE,UAAA;AD5BJ;AC8BI;EACE,UAAA;EACA,mBAAA;AD5BN;AC+BI;EACE,qBAAA;EACA,cAAA;EACA,aAAA;AD7BN;ACgCI;EACE,WAAA;AD9BN;ACiCI;EACE,WAAA;AD/BN;ACkCI;EACE,kBAAA;EACA,gBAAA;ADhCN;ACmCI;EAEE,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;ADlCN;ACsCE;EACE,oBAAA;ADpCJ;ACuCE;EACE,mBFlMiB;EEmMjB,YAAA;EACA,yBAAA;EACA,iBAAA;EACA,gBAAA;ADrCJ;ACuCI;EACE,aAAA;ADrCN;ACwCI;EACE,gBAAA;ADtCN;ACyCI;EACE,cFvKoB;EEwKpB,eAAA;ADvCN;AC0CI;EACE,cF3KqB;ACmI3B;AC4CE;EACE,mBAAA;EACA,kBAAA;AD1CJ;AC6CE;EACE,mDAAA;AD3CJ;AC8CE;EACE,2BAAA;AD5CJ;AC8CI;EACE,kBAAA;EACA,gBAAA;AD5CN;ACmDI;EAEE,aAAA;EACA,iBAAA;EACA,eAAA;ADlDN;ACqDI;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;ADnDN","sourcesContent":["// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$accent: #607D8B;\r\n\r\n$toast-background: #151515;\r\n$toast-text: white;\r\n\r\n$header-background: #535054;\r\n$header-text: #eeeeee;\r\n\r\n// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$primary: #00723f;\r\n$light-primary: #44a26b;\r\n$very-light-primary: #e8f7f3;\r\n$dark-primary: #005223;\r\n$primary-text: #212121;\r\n\r\n$seconda: #00909e;\r\n$secondb: #fcaf17;\r\n$secondc: #c89a58; // #e8d9b5;\r\n\r\n$comp: #c41425;\r\n$blind: #efc6ff;\r\n$comp-background: linear-gradient(#570102, #960606, #570102);\r\n$comp-border: #c7bdbb;\r\n\r\n// Menus\r\n$focus: #008183;\r\n$menu-background: #e8e8e8;\r\n$menu-hover: #d0d0d0;\r\n$menu-color: black;\r\n\r\n// Page background\r\n$background: #eeeeee;\r\n\r\n// Nav\r\n$nav-color: white;\r\n$nav-background: url('img/nav_pattern.png');\r\n$nav-2-color: #ffff99;\r\n$nav-2-background: url('img/nav_pattern-2.png');\r\n\r\n// Tables\r\n$table-gradient-from: #204c42;\r\n$table-gradient-to: #389b54;\r\n\r\n// Dialog boxes\r\n$dialog-gradient-from: #204c42;\r\n$dialog-gradient-to: #389b54;\r\n$dialog-bar-color: white;\r\n\r\n// Link colors\r\n$link: #808080;\r\n$visited: #968443;  // #b09d5b;\r\n$hover: #3366cc;\r\n\r\n$very-light-primary-link: #900000;\r\n$very-light-primary-hover: #c00000;\r\n\r\n\r\n$primary-link: white;\r\n$primary-visited: #dddddd;\r\n$secondb-visited: #555555;\r\n$autoback-link: #882222;\r\n$autoback-link-hover: #cc2222;\r\n\r\n$shadow-x: 3px;\r\n$shadow-y: 3px;\r\n$shadow-radius: 8px;\r\n$shadow-color: #ccc;\r\n\r\n$toggle-link-hover-color: #006600;\r\n\r\n// Boxes\r\n$box-border-color: #bdbdbd;\r\n\r\n// Cards\r\n$card-heading-background: #f2f2f2;\r\n$card-border-color: #cccccc;\r\n\r\n%shadow {\r\n  -moz-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  -webkit-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n}\r\n\r\n%noshadow {\r\n  -moz-box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n","div.cl-grader div.cl-rubric div.cl-show, div.cl-grader table.cl-handbook div.comment, div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc;\n}\n\ndiv.cl-grades td.role {\n  white-space: nowrap;\n}\n\ndiv.cl-grader form {\n  position: relative;\n}\ndiv.cl-grader div.cl-grader-item {\n  position: relative;\n  background: white;\n  padding-bottom: 0.25em;\n}\ndiv.cl-grader div.cl-grader-item h2 {\n  margin-top: -0.25em;\n}\ndiv.cl-grader div.cl-grader-item-locked {\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky;\n  top: 50px;\n  z-index: 100;\n  background: #f8fff8;\n}\ndiv.cl-grader a.link-button {\n  display: inline-block;\n  font-size: 0.85em;\n  padding: 0 2px;\n}\ndiv.cl-grader p.cl-title {\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: bold;\n  margin: 1em 0 0 0;\n}\ndiv.cl-grader p.cl-dispute {\n  text-align: center;\n  margin: 0;\n}\ndiv.cl-grader p.cl-role {\n  text-align: center;\n}\ndiv.cl-grader p.cl-role-staff {\n  color: #c41425;\n}\ndiv.cl-grader p.cl-due {\n  text-align: center;\n  font-style: italic;\n  font-weight: normal;\n  color: #c41425;\n}\ndiv.cl-grader button.cl-grader-button {\n  font-style: italic;\n  font-size: 0.9em;\n  color: black;\n}\ndiv.cl-grader a.cl-extra-link {\n  display: block;\n  float: right;\n  font-size: 0.5em;\n  padding-top: 1em;\n}\ndiv.cl-grader tr.cl-category td {\n  text-align: right;\n}\ndiv.cl-grader tr.cl-category td:first-child {\n  text-align: left;\n}\ndiv.cl-grader tr.cl-assignment td {\n  text-align: right;\n}\ndiv.cl-grader tr.cl-assignment td:first-child {\n  text-align: left;\n  padding-left: 3em;\n}\ndiv.cl-grader div.cl-grade, div.cl-grader div.grader {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\ndiv.cl-grader div.cl-grade label, div.cl-grader div.cl-grade div.label, div.cl-grader div.grader label, div.cl-grader div.grader div.label {\n  font-style: italic;\n}\ndiv.cl-grader div.cl-grade label a, div.cl-grader div.cl-grade div.label a, div.cl-grader div.grader label a, div.cl-grader div.grader div.label a {\n  font-size: 0.85em;\n  text-decoration: none;\n  padding-left: 1em;\n}\ndiv.cl-grader div.cl-grade div.comment, div.cl-grader div.grader div.comment {\n  flex: 1 1 auto;\n  padding: 0 20px 0 0;\n}\ndiv.cl-grader div.cl-grade div.comment textarea, div.cl-grader div.grader div.comment textarea {\n  display: block;\n  width: 100%;\n}\ndiv.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {\n  white-space: pre-wrap;\n  background: #f0f0f0;\n  font-style: normal;\n  border: 1px solid #a9a9a9;\n  height: 120px;\n  overflow: auto;\n  padding: 2px;\n}\ndiv.cl-grader div.cl-grade div.points, div.cl-grader div.grader div.points {\n  flex: 0 0 auto;\n  width: 5em;\n  text-align: center;\n  padding: 45px 5px 0 0;\n}\ndiv.cl-grader div.cl-grade div.points input, div.cl-grader div.cl-grade div.points div.value, div.cl-grader div.grader div.points input, div.cl-grader div.grader div.points div.value {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n}\ndiv.cl-grader div.cl-grade div.points span.not, div.cl-grader div.grader div.points span.not {\n  font-size: 0.8em;\n  font-style: italic;\n}\ndiv.cl-grader div.cl-grade div.value, div.cl-grader div.grader div.value {\n  padding: 2px 1px;\n}\ndiv.cl-grader div.cl-grade div.value a, div.cl-grader div.grader div.value a {\n  text-decoration: none;\n  color: black;\n}\ndiv.cl-grader table.cl-handbook {\n  width: 90%;\n}\ndiv.cl-grader table.cl-handbook td:last-child, div.cl-grader table.cl-handbook th:last-child {\n  width: 1px;\n  white-space: nowrap;\n}\ndiv.cl-grader table.cl-handbook input[type=radio] {\n  display: inline-block;\n  padding: 0 2px;\n  margin: 0 2px;\n}\ndiv.cl-grader table.cl-handbook input[type=text] {\n  width: 100%;\n}\ndiv.cl-grader table.cl-handbook textarea {\n  width: 100%;\n}\ndiv.cl-grader table.cl-handbook td.cl-deduct {\n  text-align: center;\n  font-size: 1.5em;\n}\ndiv.cl-grader table.cl-handbook div.comment {\n  white-space: pre;\n  background: #f0f0f0;\n  font-style: normal;\n  border: 1px solid #a9a9a9;\n  height: 80px;\n  overflow: auto;\n  padding: 2px;\n  margin: 0.3em 0;\n}\ndiv.cl-grader p.cl-rubric-expand {\n  margin-bottom: 0.1em;\n}\ndiv.cl-grader div.cl-rubricblock {\n  background: #e8f7f3;\n  padding: 5px;\n  border: 1px #808080 solid;\n  word-wrap: normal;\n  font-size: 0.9em;\n}\ndiv.cl-grader div.cl-rubricblock p:first-child, div.cl-grader div.cl-rubricblock ul:first-child {\n  margin-top: 0;\n}\ndiv.cl-grader div.cl-rubricblock p:last-child, div.cl-grader div.cl-rubricblock ul:last-child {\n  margin-bottom: 0;\n}\ndiv.cl-grader div.cl-rubricblock li.item, div.cl-grader div.cl-rubricblock p.item, div.cl-grader div.cl-rubricblock ul.items li {\n  color: #900000;\n  cursor: pointer;\n}\ndiv.cl-grader div.cl-rubricblock li.item:hover, div.cl-grader div.cl-rubricblock p.item:hover, div.cl-grader div.cl-rubricblock ul.items li:hover {\n  color: #c00000;\n}\ndiv.cl-grader textarea {\n  background: #f0f0f0;\n  font-style: normal;\n}\ndiv.cl-grader textarea.yellow-pad {\n  background: url(\"../../../site/img/yellowpad.png\");\n}\ndiv.cl-grader div.grade {\n  border-top: 1px solid black;\n}\ndiv.cl-grader div.grade p:first-child {\n  text-align: center;\n  font-size: 1.2em;\n}\ndiv.cl-grader div.cl-rubric div.cl-show {\n  margin: 1em 0;\n  word-wrap: normal;\n  min-height: 8em;\n}\ndiv.cl-grader div.cl-rubric textarea {\n  font-size: 0.9em;\n  margin: 1em 0;\n  background: #f0f0f0;\n  font-style: normal;\n  width: 100%;\n  min-height: 8em;\n}","@import '~site-cl/sass/modules/colors';\r\n\r\ndiv.cl-grades {\r\n  td.role {\r\n    white-space: nowrap;\r\n  }\r\n}\r\n\r\ndiv.cl-grader {\r\n  form {\r\n    position: relative;\r\n  }\r\n\r\n  div.cl-grader-item {\r\n    position: relative;\r\n    background: white;\r\n    padding-bottom: 0.25em;\r\n\r\n    h2 {\r\n      margin-top: -0.25em;\r\n    }\r\n  }\r\n\r\n  div.cl-grader-item-locked {\r\n    position: -webkit-sticky; /* Safari */\r\n    position: sticky;\r\n    top: 50px;\r\n    z-index: 100;\r\n    background: #f8fff8;\r\n  }\r\n\r\n  a.link-button {\r\n    display: inline-block;\r\n    font-size: 0.85em;\r\n    padding: 0 2px;\r\n  }\r\n\r\n  p.cl-title {\r\n    text-align: center;\r\n    font-size: 1.1em;\r\n    font-weight: bold;\r\n    margin: 1em 0 0 0;\r\n  }\r\n\r\n  p.cl-dispute {\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n\r\n  p.cl-role {\r\n    text-align: center;\r\n  }\r\n\r\n  p.cl-role-staff {\r\n    color: $comp;\r\n  }\r\n\r\n  p.cl-due {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-weight: normal;\r\n    color: $comp;\r\n  }\r\n\r\n  button.cl-grader-button {\r\n    font-style: italic;\r\n    font-size: 0.9em;\r\n    color: black;\r\n  }\r\n\r\n  a.cl-extra-link {\r\n    display: block;\r\n    float: right;\r\n    font-size: 0.5em;\r\n    padding-top: 1em;\r\n  }\r\n\r\n  tr.cl-category {\r\n    td {\r\n      text-align: right;\r\n    }\r\n\r\n    td:first-child {\r\n      text-align: left;\r\n    }\r\n  }\r\n\r\n  tr.cl-assignment {\r\n    td {\r\n      text-align: right;\r\n    }\r\n\r\n    td:first-child {\r\n      text-align: left;\r\n      padding-left: 3em;\r\n    }\r\n  }\r\n\r\n  div.cl-grade, div.grader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n\r\n    label, div.label {\r\n      font-style: italic;\r\n\r\n      a {\r\n        font-size: 0.85em;\r\n        text-decoration: none;\r\n        padding-left: 1em;\r\n      }\r\n    }\r\n\r\n    div.comment {\r\n      flex: 1 1 auto;\r\n      padding: 0 20px 0 0;\r\n\r\n      textarea {\r\n        display: block;\r\n        width: 100%;\r\n      }\r\n\r\n      div.comment {\r\n        @extend %shadow;\r\n        white-space: pre-wrap;\r\n        background: #f0f0f0;\r\n        font-style: normal;\r\n        border: 1px solid #a9a9a9;\r\n        height: 120px;\r\n        overflow: auto;\r\n        padding: 2px;\r\n      }\r\n    }\r\n\r\n    div.points {\r\n      flex: 0 0 auto;\r\n      width: 5em;\r\n      text-align: center;\r\n      padding: 45px 5px 0 0;\r\n\r\n      input, div.value {\r\n        display: block;\r\n        width: 100%;\r\n        text-align: center;\r\n        font-style: normal;\r\n        font-weight: bold;\r\n      }\r\n\r\n      span.not {\r\n        font-size: 0.8em;\r\n        font-style: italic;\r\n      }\r\n    }\r\n\r\n    div.value {\r\n      padding: 2px 1px;\r\n      a {\r\n        text-decoration: none;\r\n        color: black;\r\n      }\r\n    }\r\n  }\r\n\r\n  table.cl-handbook {\r\n    width: 90%;\r\n\r\n    td:last-child, th:last-child {\r\n      width: 1px;\r\n      white-space: nowrap;\r\n    }\r\n\r\n    input[type=radio] {\r\n      display: inline-block;\r\n      padding: 0 2px;\r\n      margin: 0 2px;\r\n    }\r\n\r\n    input[type=text] {\r\n      width: 100%;\r\n    }\r\n\r\n    textarea {\r\n      width: 100%;\r\n    }\r\n\r\n    td.cl-deduct {\r\n      text-align: center;\r\n      font-size: 1.5em;\r\n    }\r\n\r\n    div.comment {\r\n      @extend %shadow;\r\n      white-space: pre;\r\n      background: #f0f0f0;\r\n      font-style: normal;\r\n      border: 1px solid #a9a9a9;\r\n      height: 80px;\r\n      overflow: auto;\r\n      padding: 2px;\r\n      margin: 0.3em 0;\r\n    }\r\n  }\r\n\r\n  p.cl-rubric-expand {\r\n    margin-bottom: 0.1em;\r\n  }\r\n\r\n  div.cl-rubricblock {\r\n    background: $very-light-primary;\r\n    padding: 5px;\r\n    border: 1px #808080 solid;\r\n    word-wrap: normal;\r\n    font-size: 0.9em;\r\n\r\n    p:first-child, ul:first-child {\r\n      margin-top: 0;\r\n    }\r\n\r\n    p:last-child, ul:last-child {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    li.item, p.item, ul.items li {\r\n      color: $very-light-primary-link;\r\n      cursor: pointer;\r\n    }\r\n\r\n    li.item:hover, p.item:hover, ul.items li:hover {\r\n      color: $very-light-primary-hover;\r\n    }\r\n  }\r\n\r\n  textarea {\r\n    background: #f0f0f0;\r\n    font-style: normal;\r\n  }\r\n\r\n  textarea.yellow-pad {\r\n    background: url('../../../site/img/yellowpad.png');\r\n  }\r\n\r\n  div.grade {\r\n    border-top: 1px solid black;\r\n\r\n    p:first-child {\r\n      text-align: center;\r\n      font-size: 1.2em;\r\n    }\r\n  }\r\n\r\n  div.cl-rubric {\r\n\r\n\r\n    div.cl-show {\r\n      @extend %shadow;\r\n      margin: 1em 0;\r\n      word-wrap: normal;\r\n      min-height: 8em;\r\n    }\r\n\r\n    textarea {\r\n      font-size: 0.9em;\r\n      margin: 1em 0;\r\n      background: #f0f0f0;\r\n      font-style: normal;\r\n      width: 100%;\r\n      min-height: 8em;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-bulk-upload form {\n  margin-bottom: 1em;\n}\ndiv.cl-bulk-upload fieldset > div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\ndiv.cl-bulk-upload fieldset > div > div {\n  padding-right: 1em;\n}\ndiv.cl-bulk-upload fieldset > div > div p {\n  margin: 0 0 0.5em 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child {\n  margin: 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child input {\n  width: 6.5em;\n}\ndiv.cl-bulk-upload-dlg {\n  width: 400px;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue"],"names":[],"mappings":"AAkLE;EACE,kBAAA;AAjLJ;AAsLI;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AApLN;AAsLM;EACE,kBAAA;AApLR;AAsLQ;EACE,mBAAA;AApLV;AAuLQ;EACE,SAAA;AArLV;AAuLU;EACE,YAAA;AArLZ;AA6LA;EACE,YAAA;AA1LF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndiv.cl-bulk-upload {\n  form {\n    margin-bottom: 1em;\n  }\n\n  fieldset {\n\n    > div {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n\n      > div {\n        padding-right: 1em;\n\n        p {\n          margin: 0 0 0.5em 0;\n        }\n\n        p:last-child {\n          margin: 0;\n\n          input {\n            width: 6.5em;\n          }\n        }\n      }\n    }\n  }\n}\n\ndiv.cl-bulk-upload-dlg {\n  width: 400px;\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "td[data-v-5cf9cddd] {\n  min-width: 30px;\n}\ndiv.category[data-v-5cf9cddd] {\n  color: #fcaf17;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Console/GradesAll.vue","webpack://./vendor/cl/site/sass/modules/_colors.scss"],"names":[],"mappings":"AA8GA;EACE,eAAA;AA7GF;AAgHE;EACE,cChGM;ADbV","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  @import '~site-cl/sass/modules/colors';\n\ntd {\n  min-width: 30px;\n}\n\n  div.category {\n    color: $secondb;\n  }\n","// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$accent: #607D8B;\r\n\r\n$toast-background: #151515;\r\n$toast-text: white;\r\n\r\n$header-background: #535054;\r\n$header-text: #eeeeee;\r\n\r\n// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$primary: #00723f;\r\n$light-primary: #44a26b;\r\n$very-light-primary: #e8f7f3;\r\n$dark-primary: #005223;\r\n$primary-text: #212121;\r\n\r\n$seconda: #00909e;\r\n$secondb: #fcaf17;\r\n$secondc: #c89a58; // #e8d9b5;\r\n\r\n$comp: #c41425;\r\n$blind: #efc6ff;\r\n$comp-background: linear-gradient(#570102, #960606, #570102);\r\n$comp-border: #c7bdbb;\r\n\r\n// Menus\r\n$focus: #008183;\r\n$menu-background: #e8e8e8;\r\n$menu-hover: #d0d0d0;\r\n$menu-color: black;\r\n\r\n// Page background\r\n$background: #eeeeee;\r\n\r\n// Nav\r\n$nav-color: white;\r\n$nav-background: url('img/nav_pattern.png');\r\n$nav-2-color: #ffff99;\r\n$nav-2-background: url('img/nav_pattern-2.png');\r\n\r\n// Tables\r\n$table-gradient-from: #204c42;\r\n$table-gradient-to: #389b54;\r\n\r\n// Dialog boxes\r\n$dialog-gradient-from: #204c42;\r\n$dialog-gradient-to: #389b54;\r\n$dialog-bar-color: white;\r\n\r\n// Link colors\r\n$link: #808080;\r\n$visited: #968443;  // #b09d5b;\r\n$hover: #3366cc;\r\n\r\n$very-light-primary-link: #900000;\r\n$very-light-primary-hover: #c00000;\r\n\r\n\r\n$primary-link: white;\r\n$primary-visited: #dddddd;\r\n$secondb-visited: #555555;\r\n$autoback-link: #882222;\r\n$autoback-link-hover: #cc2222;\r\n\r\n$shadow-x: 3px;\r\n$shadow-y: 3px;\r\n$shadow-radius: 8px;\r\n$shadow-color: #ccc;\r\n\r\n$toggle-link-hover-color: #006600;\r\n\r\n// Boxes\r\n$box-border-color: #bdbdbd;\r\n\r\n// Cards\r\n$card-heading-background: #f2f2f2;\r\n$card-border-color: #cccccc;\r\n\r\n%shadow {\r\n  -moz-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  -webkit-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n}\r\n\r\n%noshadow {\r\n  -moz-box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div#cl-column-chooser-component[data-v-56b05980] {\n  padding: 1em;\n}\ndiv#cl-column-chooser-component p[data-v-56b05980] {\n  text-align: left;\n}\ndiv#cl-column-chooser-component div.cl-parts[data-v-56b05980] {\n  display: table;\n  margin: auto;\n}\ndiv#cl-column-chooser-component div.cl-parts > div[data-v-56b05980] {\n  display: table-row;\n}\ndiv#cl-column-chooser-component div.cl-parts > div > div[data-v-56b05980]:first-child {\n  padding-right: 1em;\n  text-align: right;\n}\ndiv#cl-column-chooser-component div.cl-parts > div > div[data-v-56b05980] {\n  display: table-cell;\n  height: 2em;\n}\ndiv#cl-column-chooser-component div.cl-parts div.cl-comment[data-v-56b05980] {\n  font-style: italic;\n  font-size: 0.85em;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue"],"names":[],"mappings":"AA8EA;EACI,YAAA;AA7EJ;AA8EI;EACI,gBAAA;AA5ER;AA+EI;EACI,cAAA;EACA,YAAA;AA7ER;AA+EQ;EACI,kBAAA;AA7EZ;AA+EY;EACI,kBAAA;EACA,iBAAA;AA7EhB;AAgFY;EACI,mBAAA;EACA,WAAA;AA9EhB;AAkFQ;EACI,kBAAA;EACA,iBAAA;AAhFZ","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\ndiv#cl-column-chooser-component {\r\n    padding: 1em;\r\n    p {\r\n        text-align: left;\r\n    }\r\n\r\n    div.cl-parts {\r\n        display: table;\r\n        margin: auto;\r\n\r\n        >div {\r\n            display: table-row;\r\n\r\n            >div:first-child {\r\n                padding-right: 1em;\r\n                text-align: right;\r\n            }\r\n\r\n            >div {\r\n                display: table-cell;\r\n                height: 2em;\r\n            }\r\n        }\r\n\r\n        div.cl-comment {\r\n            font-style: italic;\r\n            font-size: 0.85em;\r\n        }\r\n\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-grade-history[data-v-177faa53] {\n  max-width: 600px;\n  margin: 1em 0;\n}\np[data-v-177faa53] {\n  font-style: italic;\n  font-size: 0.85em;\n}\np.expander[data-v-177faa53] {\n  margin-bottom: 0;\n}\ndiv.grades[data-v-177faa53] {\n  padding: 2px 0 2px 18px;\n  background-color: #ddffdd;\n}\ndiv.grades p[data-v-177faa53] {\n  margin: 0;\n  padding: 2px 0 0 0;\n}", "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Util/GradeHistoryComponent.vue"],"names":[],"mappings":"AAoDA;EACE,gBAAA;EACA,aAAA;AAnDF;AAqDA;EACE,kBAAA;EACA,iBAAA;AAlDF;AAqDA;EACE,gBAAA;AAlDF;AAoDA;EACE,uBAAA;EACA,yBAAA;AAjDF;AAmDE;EACE,SAAA;EACA,kBAAA;AAjDJ","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndiv.cl-grade-history {\n  max-width: 600px;\n  margin: 1em 0;\n}\np {\n  font-style: italic;\n  font-size: 0.85em;\n}\n\np.expander {\n  margin-bottom: 0;\n}\ndiv.grades {\n  padding: 2px 0 2px 18px;\n  background-color: #ddffdd;\n\n  p {\n    margin: 0;\n    padding: 2px 0 0 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./vendor/cl/grades/_grades.scss":
/*!***************************************!*\
  !*** ./vendor/cl/grades/_grades.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_grades.scss */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/grades/_grades.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./vendor/cl/site/img/yellowpad.png":
/*!******************************************!*\
  !*** ./vendor/cl/site/img/yellowpad.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAIAAACtjN7AAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAHlJREFUOI3t0rENg0AUA1D7n+EqKpQZMkFmZDtKNkiTHiECucsKbhBC4tdPLvzNbR7gHHNYDgBwDBVQPVlVIDNUisWjRevWOZDMGt8vh0YkPR+TQytb9d3HoQVZ+954qY1o93r6Bm6qiK8nea29/uhQkGJNFkU6/Vt/PUghIGwDWDIAAAAASUVORK5CYII=");

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeManual.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesLinks.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesMember.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Grading.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradingAssignment.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradingAssignmentMember.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./RubricEditor.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./RubricsEditor.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Handbook.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeAssignment.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Grades.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./PageNav.vue?vue&type=script&lang=js& */ "./.yarn/__virtual__/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-df5092ef98.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_df5092ef98_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_862606f393_0_cache_style_loader_npm_2_0_0_b9a5c4a2aa_21425246a5_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_1ddc68b4a1_0_cache_css_loader_npm_5_2_6_118c6d409e_993354a248_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_stylePostLoader_js_yarn_virtual_resolve_url_loader_virtual_ec75d2a09e_0_cache_resolve_url_loader_npm_4_0_0_2a9c18d86b_8e5bcf9786_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_3857f5e9f1_0_cache_sass_loader_npm_12_1_0_6188089e12_69c66ea348_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!../../../../../.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./.yarn/__virtual__/style-loader-virtual-862606f393/0/cache/style-loader-npm-2.0.0-b9a5c4a2aa-21425246a5.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-1ddc68b4a1/0/cache/css-loader-npm-5.2.6-118c6d409e-993354a248.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./.yarn/__virtual__/resolve-url-loader-virtual-ec75d2a09e/0/cache/resolve-url-loader-npm-4.0.0-2a9c18d86b-8e5bcf9786.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-3857f5e9f1/0/cache/sass-loader-npm-12.1.0-6188089e12-69c66ea348.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&":
/*!*************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesLinks.vue?vue&type=template&id=02b64216& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesMember.vue?vue&type=template&id=20ef238e& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Grading.vue?vue&type=template&id=7fd146a8& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&":
/*!************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./RubricEditor.vue?vue&type=template&id=df15235c& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");


/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Handbook.vue?vue&type=template&id=62dab77f& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");


/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");


/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Grades.vue?vue&type=template&id=270419e0& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");


/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");


/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");


/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-bulk-upload" }, [
    _c("h2", { attrs: { id: "bulk" } }, [_vm._v("Bulk grade uploading")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "This option accepts files in CSV format as produced by CrowdMark and other systems. "
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "full",
        attrs: { method: "post", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.bulkUpload()
          }
        }
      },
      [
        _c("fieldset", [
          _c("legend", [_vm._v("Bulk Upload File")]),
          _vm._v(" "),
          _c("div", [
            _c("div", [_vm._v("File to upload: ")]),
            _vm._v(" "),
            _c("div", [
              _c("p", [
                _c("input", {
                  attrs: { name: "bulkfile", type: "file" },
                  on: {
                    change: function($event) {
                      _vm.bulkFiles = $event.target.files
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("input", { attrs: { type: "submit", value: "Press" } }),
      _vm._v(" to upload the file!")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-grade" }, [
    _c("div", { staticClass: "comment" }, [
      _c("label", [
        _vm._v("Comment "),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.compute()
              }
            }
          },
          [_vm._v("compute")]
        ),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.item.manual.comment,
              expression: "item.manual.comment"
            }
          ],
          staticClass: "comment",
          attrs: { rows: "6", name: _vm.item.tag + "-comment" },
          domProps: { value: _vm.item.manual.comment },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.item.manual, "comment", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "points" }, [
      _c("label", [
        _vm._v("Points\n            "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.item.manual.points,
              expression: "item.manual.points"
            }
          ],
          staticClass: "points",
          attrs: {
            type: "number",
            id: _vm.item.tag + "-points",
            name: _vm.item.tag + "-points"
          },
          domProps: { value: _vm.item.manual.points },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.item.manual, "points", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "points" }, [
      _c("div", { staticClass: "label" }, [_vm._v("Available")]),
      _vm._v(" "),
      _c("div", { staticClass: "value" }, [
        _c(
          "a",
          {
            attrs: {
              "data-id": _vm.item.tag + "-points",
              title: "Click to fill in points"
            },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.fillInPoints()
              }
            }
          },
          [_vm._v(_vm._s(_vm.item.manual.available))]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("members-fetcher", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _c(
                        "tr",
                        { staticClass: "vertical" },
                        [
                          _c("th", [_vm._v("User")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Role")]),
                          _vm._v(" "),
                          _vm._l(_vm.section.assignments.categories, function(
                            category
                          ) {
                            return [
                              _vm._l(category.assignments, function(
                                assignment
                              ) {
                                return [
                                  _c("th", [
                                    _c("div", { staticClass: "small" }, [
                                      _vm._v(_vm._s(assignment.shortname))
                                    ])
                                  ])
                                ]
                              }),
                              _vm._v(" "),
                              _c("th", [
                                _c("div", { staticClass: "small category" }, [
                                  _vm._v(_vm._s(category.name))
                                ])
                              ])
                            ]
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm._l(fetcher.users, function(user) {
                        return _c(
                          "tr",
                          { class: user.role() !== "T" ? "ignore" : "" },
                          [
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        user.member.id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.userId))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        user.member.id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.name))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.roleName()))]),
                            _vm._v(" "),
                            _vm._l(_vm.section.assignments.categories, function(
                              category
                            ) {
                              return [
                                _vm._l(category.assignments, function(
                                  assignment
                                ) {
                                  return [
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.assignmentGrade(
                                            user,
                                            category,
                                            assignment
                                          )
                                        )
                                      )
                                    ])
                                  ]
                                }),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.categoryGrade(user, category))
                                  )
                                ])
                              ]
                            })
                          ],
                          2
                        )
                      })
                    ],
                    2
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("members-fetcher", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _c("tr", [
                        _c("th", [_vm._v("User")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Role")])
                      ]),
                      _vm._v(" "),
                      _vm._l(fetcher.users, function(user) {
                        return _c(
                          "tr",
                          { class: user.role() !== "T" ? "ignore" : "" },
                          [
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        user.member.id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.userId))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        user.member.id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.name))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.roleName()))])
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("member-fetcher", {
          attrs: {
            id: _vm.memberid,
            faillink: _vm.root + "/cl/console/grades/links"
          },
          on: { fetched: _vm.fetched },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c("prev-next", { attrs: { user: fetcher.user } }),
                  _vm._v(" "),
                  fetcher.user !== null && _vm.grade !== null
                    ? _c("div", [
                        _c(
                          "table",
                          [
                            _c("tr", [
                              _c("th", [_vm._v("Assignment")]),
                              _c("th", [_vm._v(" ")]),
                              _c("th", [_vm._v("Grade")]),
                              _c("th", [_vm._v(" ")]),
                              _c("th", [_vm._v("Grade")])
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.grade.categories, function(category) {
                              return [
                                _c("tr", { staticClass: "cl-category" }, [
                                  _c("td", { attrs: { colspan: "3" } }, [
                                    _vm._v(_vm._s(category.name))
                                  ]),
                                  _c("td", [
                                    _vm._v(_vm._s(category.points) + "%")
                                  ]),
                                  _c("td", [_vm._v(_vm._s(category.grade))])
                                ]),
                                _vm._v(" "),
                                _vm._l(category.assignments, function(
                                  assignment
                                ) {
                                  return _c(
                                    "tr",
                                    {
                                      key: assignment.tag,
                                      staticClass: "cl-assignment"
                                    },
                                    [
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to:
                                                  _vm.root +
                                                  "/cl/console/grading/" +
                                                  assignment.tag +
                                                  "/" +
                                                  fetcher.user.member.id
                                              }
                                            },
                                            [_vm._v(_vm._s(assignment.name))]
                                          )
                                        ],
                                        1
                                      ),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            Math.round(assignment.points * 10) /
                                              10
                                          ) + "%"
                                        )
                                      ]),
                                      _c("td", [
                                        _vm._v(_vm._s(assignment.grade))
                                      ]),
                                      _c("td", { attrs: { colspan: "2" } }, [
                                        _vm._v(" ")
                                      ])
                                    ]
                                  )
                                })
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "center" }, [
                          _vm._v(
                            "Click on each assignment for more grading detail"
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "center" }, [
                          _vm._v(
                            "Computed Grade: " +
                              _vm._s(_vm.grade.grade) +
                              " out of " +
                              _vm._s(_vm.grade.available) +
                              " available points" +
                              _vm._s(_vm.per)
                          )
                        ])
                      ])
                    : _vm._e()
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "cl-column-chooser-component" } }, [
    _c("p", [
      _vm._v("Member identifier column:\n    "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.memberIdColumn.id,
              expression: "memberIdColumn.id"
            }
          ],
          on: {
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.$set(
                _vm.memberIdColumn,
                "id",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        _vm._l(_vm.columns, function(column) {
          return _c("option", [_vm._v(_vm._s(column))])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("p", [_vm._v("Member identifier can be an email address or user ID.")]),
    _vm._v(" "),
    _c("p", { staticClass: "center" }, [
      _vm._v("Select column for each grade item")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cl-parts" },
      [
        _vm._l(_vm.parts, function(part, index) {
          return [
            _c("div", [
              _c("div", [_vm._v(_vm._s(part.name) + ":")]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mapping[part.tag],
                        expression: "mapping[part.tag]"
                      }
                    ],
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.mapping,
                          part.tag,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.columnSelect, function(column) {
                    return _c("option", [_vm._v(_vm._s(column))])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "cl-comment" }, [_vm._v("comment:")]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.commentMapping[part.tag],
                        expression: "commentMapping[part.tag]"
                      }
                    ],
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.commentMapping,
                          part.tag,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.columnSelect, function(column) {
                    return _c("option", [_vm._v(_vm._s(column))])
                  }),
                  0
                )
              ])
            ])
          ]
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("h2", [_vm._v("Grades Summary")]),
        _vm._v(" "),
        _c("ul", [
          _c(
            "li",
            [
              _c(
                "router-link",
                { attrs: { to: _vm.root + "/cl/console/grades/all" } },
                [_vm._v("All Students")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                { attrs: { to: _vm.root + "/cl/console/grades/links" } },
                [_vm._v("All Students Grade Links")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.downloadPermission
            ? _c("li", [
                _c("a", { attrs: { href: _vm.root + "/cl/grades/csv" } }, [
                  _vm._v("Download Student Grades")
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.rubricDumperPermission
            ? _c("li", [
                _c(
                  "a",
                  { attrs: { href: _vm.root + "/cl/grades/rubric-dumper" } },
                  [_vm._v("Rubric Dumper")]
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm._l(_vm.section.assignments.categories, function(category) {
          return _c("div", [
            _c("h2", [_vm._v(_vm._s(category.name))]),
            _vm._v(" "),
            _c(
              "ul",
              [
                category.assignments.length === 0
                  ? _c("li", [_c("em", [_vm._v("Pending...")])])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(category.assignments, function(assignment) {
                  return _c(
                    "li",
                    { key: assignment.tag },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: _vm.gradingLink + assignment.tag } },
                        [_vm._v(_vm._s(assignment.name))]
                      ),
                      _vm._v(" "),
                      _vm.user.atLeast(_vm.ta)
                        ? _c(
                            "router-link",
                            {
                              staticClass: "link-button",
                              attrs: {
                                to:
                                  _vm.root +
                                  "/cl/console/rubric/" +
                                  assignment.tag
                              }
                            },
                            [_vm._v("rubrics")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                })
              ],
              2
            )
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grades" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("submissions-links", { attrs: { assignment: _vm.assignment } }),
        _vm._v(" "),
        _c("members-fetcher", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _vm.grades !== null
                    ? _c(
                        "table",
                        { staticClass: "small" },
                        [
                          _c(
                            "tr",
                            { staticClass: "vertical" },
                            [
                              _c("th", [_vm._v("User")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Name")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Role")]),
                              _vm._v(" "),
                              _vm._l(_vm.parts, function(part) {
                                return _c("th", { staticClass: "small" }, [
                                  _c("div", [_vm._v(_vm._s(part.name))])
                                ])
                              }),
                              _vm._v(" "),
                              _vm.grades !== null
                                ? _c("th", { staticClass: "small" }, [
                                    _c("div", [_vm._v("Grade")])
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm._l(fetcher.users, function(user) {
                            return _c(
                              "tr",
                              { class: user.role() !== "T" ? "ignore" : "" },
                              [
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to:
                                            _vm.root + _vm.link + user.member.id
                                        }
                                      },
                                      [_vm._v(_vm._s(user.userId))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to:
                                            _vm.root + _vm.link + user.member.id
                                        }
                                      },
                                      [_vm._v(_vm._s(user.name))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "role" }, [
                                  _vm._v(_vm._s(user.roleName()))
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.parts, function(part) {
                                  return _c("td", { staticClass: "right" }, [
                                    _vm._v(_vm._s(_vm.partGrade(user, part)))
                                  ])
                                }),
                                _vm._v(" "),
                                _vm.grades !== null
                                  ? _c("td", { staticClass: "right" }, [
                                      _vm._v(_vm._s(_vm.grade(user)))
                                    ])
                                  : _vm._e()
                              ],
                              2
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "tr",
                            { staticClass: "divider" },
                            [
                              _c(
                                "td",
                                {
                                  staticClass: "center",
                                  attrs: { colspan: "2" }
                                },
                                [_c("em", [_vm._v("counts")])]
                              ),
                              _vm._v(" "),
                              _c("td", { staticClass: "center" }, [
                                _vm._v(_vm._s(fetcher.users.length))
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.parts, function(part) {
                                return _c("td", { staticClass: "right" }, [
                                  _vm._v(
                                    _vm._s(_vm.partCount(fetcher.users, part))
                                  )
                                ])
                              }),
                              _vm._v(" "),
                              _vm.grades !== null
                                ? _c("td", { staticClass: "right" }, [
                                    _vm._v(
                                      _vm._s(_vm.gradesCount(fetcher.users))
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "tr",
                            [
                              _c(
                                "td",
                                {
                                  staticClass: "center",
                                  attrs: { colspan: "2" }
                                },
                                [_c("em", [_vm._v("averages")])]
                              ),
                              _vm._v(" "),
                              _c("td", { staticClass: "center" }, [
                                _vm._v(" ")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.parts, function(part) {
                                return _c("td", { staticClass: "right" }, [
                                  _vm._v(
                                    _vm._s(_vm.partAverage(fetcher.users, part))
                                  )
                                ])
                              }),
                              _vm._v(" "),
                              _vm.grades !== null
                                ? _c("td", { staticClass: "right" }, [
                                    _vm._v(
                                      _vm._s(_vm.gradeAverage(fetcher.users))
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          )
                        ],
                        2
                      )
                    : _vm._e()
                ]
              }
            }
          ])
        }),
        _vm._v(" "),
        _vm.parts.length > 0 && _vm.ta
          ? _c("bulk-upload", {
              attrs: { assigntag: _vm.assigntag, parts: _vm.parts }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("member-fetcher", {
          attrs: { id: _vm.memberid, faillink: _vm.gradingLink },
          on: { fetched: _vm.fetched },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c("prev-next", { attrs: { user: fetcher.user } }),
                  _vm._v(" "),
                  fetcher.user !== null
                    ? _c("div", [
                        _c(
                          "form",
                          {
                            ref: "form",
                            attrs: { method: "post" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.submit.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _c(
                              "p",
                              {
                                class:
                                  fetcher.user.role() === "T"
                                    ? "cl-role"
                                    : "cl-role cl-role-staff"
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(fetcher.user.roleName()) +
                                    ": " +
                                    _vm._s(fetcher.user.name) +
                                    " " +
                                    _vm._s(fetcher.user.role()) +
                                    "\n              "
                                ),
                                _c("em", { staticClass: "small" }, [
                                  _vm._v(_vm._s(fetcher.user.userId))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "cl-grader-button",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.email(fetcher.user)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                email " +
                                        _vm._s(
                                          fetcher.user.roleName().toLowerCase()
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "cl-grader-button",
                                    attrs: {
                                      tag: "button",
                                      to:
                                        _vm.root +
                                        "/cl/console/grades/" +
                                        fetcher.user.member.id
                                    }
                                  },
                                  [_vm._v("student grades\n              ")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.due !== null
                              ? _c("p", { staticClass: "cl-due" }, [
                                  _vm._v(
                                    "Assignment due " +
                                      _vm._s(_vm.time(_vm.due)) +
                                      " "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.graders, function(item) {
                              return _c(
                                "div",
                                {
                                  class:
                                    "cl-grader-item" +
                                    (item.locked
                                      ? " cl-grader-item-locked"
                                      : ""),
                                  attrs: { "data-tag": item.tag }
                                },
                                [
                                  _c("h2", [
                                    _c(
                                      "span",
                                      { staticClass: "cl-grader-item-lock" },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: { title: "Lock/Unlock" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.lock(item)
                                              }
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  _vm.root +
                                                  (item.locked
                                                    ? "/cl/img/lock-on.png"
                                                    : "/cl/img/lock-off.png"),
                                                alt: "Unlocked"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(
                                      "\n              " + _vm._s(item.name)
                                    ),
                                    item.teaming !== undefined
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "cl-extra-link",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.teamDistribute(item)
                                              }
                                            }
                                          },
                                          [_vm._v("Team Distribute")]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  item.rubric !== undefined
                                    ? [
                                        _c(
                                          "div",
                                          { staticClass: "cl-toggle" },
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass: "cl-rubric-expand"
                                              },
                                              [
                                                _c("a", [
                                                  _vm._v("Expand for rubric")
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "cl-rubricblock cl-clickable"
                                              },
                                              [
                                                _c("div", {
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      item.rubric
                                                    )
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.manual !== undefined
                                    ? _c("grade-manual", {
                                        attrs: { item: item }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.html !== undefined
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(item.html)
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.handbook !== undefined
                                    ? _c("handbook", {
                                        attrs: { item: item },
                                        on: {
                                          "handbook-data": _vm.handbookData
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("grade-history", {
                                    attrs: { history: item.history }
                                  })
                                ],
                                2
                              )
                            }),
                            _vm._v(" "),
                            _c("submissions", {
                              attrs: {
                                user: fetcher.user,
                                assigntag: _vm.assigntag
                              }
                            }),
                            _vm._v(" "),
                            _vm.reviewing !== null
                              ? _c(_vm.reviewing, {
                                  tag: "component",
                                  attrs: {
                                    assigntag: _vm.assigntag,
                                    user: fetcher.user
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "grade" },
                              [
                                _vm.grade !== null
                                  ? _c("p", [
                                      _vm._v(
                                        "Computed Grade: " + _vm._s(_vm.grade)
                                      )
                                    ])
                                  : [
                                      _c("p", [_vm._v("Grade Not Available")]),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "center small notice" },
                                        [
                                          _vm._v(
                                            "Grades are not available until all parts of the assignment have been\n                  graded."
                                          )
                                        ]
                                      )
                                    ]
                              ],
                              2
                            )
                          ],
                          2
                        )
                      ])
                    : _vm._e()
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v(_vm._s(_vm.rubric.name))]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit()
          }
        }
      },
      [
        _c("div", {
          staticClass: "cl-rubricblock cl-show",
          domProps: { innerHTML: _vm._s(_vm.rubric.show) }
        }),
        _vm._v(" "),
        _c("div", { ref: "editor" }),
        _vm._v(" "),
        _c("button", { attrs: { type: "submit" } }, [_vm._v("Submit")])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content cl-grader" },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.rubrics, function(rubric) {
        return _c(
          "div",
          { staticClass: "cl-rubric" },
          [
            _c("rubric-editor", {
              attrs: { assigntag: _vm.assigntag, rubric: rubric }
            })
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cl-toggle" }, [
      _c("p", [
        _c("a", [_vm._v("Expand for instructions on creating rubrics.")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cl-toggleblock" }, [
        _c("p", [
          _vm._v(
            "Rubrics are entered as HTML. A common format is to\n        create lists using <ul> and <li> tags."
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Contents of an <li> or <p> tag can be make\n        clickable so they automatically appear in the comment\n        window by adding the class 'item'. All <li> children\n        of a <ul> can be made clickable by adding the\n        class 'items':"
          )
        ]),
        _vm._v(" "),
        _c("pre", { staticClass: "code" }, [
          _vm._v(
            '<ul>\n   <li class="item">This item will be clickable</li>\n   <li>This item will not be clickable</li>\n</ul>\n\n<p class="item">And this will be clickable</p>\n\n<ul class="items">\n   <li>All of these items will be clickable</li>\n   <li>This one, too!</li>\n</ul>\n      '
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "table",
      { staticClass: "cl-handbook" },
      [
        _c("tr", [
          _c("th", [
            _vm._v("Category"),
            _c("br"),
            _vm._v("Multiplier: " + _vm._s(_vm.item.multiplier))
          ]),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _vm._l(_vm.item.handbook.categories, function(category) {
          return _c("tr", [
            _c(
              "td",
              [
                category.rubric !== undefined
                  ? [
                      _c("div", { staticClass: "cl-toggle cl-single-space" }, [
                        _c("span", [_c("a", [_vm._v(_vm._s(category.name))])]),
                        _vm._v(" "),
                        _c("div", { staticClass: "cl-rubricblock" }, [
                          _c("div", {
                            domProps: { innerHTML: _vm._s(category.rubric) }
                          })
                        ])
                      ])
                    ]
                  : [_vm._v(_vm._s(category.name))]
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "td",
              { staticClass: "center" },
              [
                !_vm.readonly
                  ? _vm._l(category.deduct + 1, function(deduct) {
                      return _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.metadata[category.tag],
                            expression: "metadata[category.tag]"
                          }
                        ],
                        attrs: { type: "radio" },
                        domProps: {
                          value: deduct - 1,
                          checked: _vm._q(
                            _vm.metadata[category.tag],
                            deduct - 1
                          )
                        },
                        on: {
                          change: [
                            function($event) {
                              return _vm.$set(
                                _vm.metadata,
                                category.tag,
                                deduct - 1
                              )
                            },
                            _vm.compute
                          ]
                        }
                      })
                    })
                  : _c("span", [
                      _vm._v(_vm._s(_vm.deduction(_vm.metadata[category.tag])))
                    ])
              ],
              2
            )
          ])
        }),
        _vm._v(" "),
        _c("tr", [
          _c("td", [
            !_vm.readonly
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.metadata["_manual_text"],
                      expression: "metadata['_manual_text']"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.metadata["_manual_text"] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.metadata,
                        "_manual_text",
                        $event.target.value
                      )
                    }
                  }
                })
              : _c("span", [_vm._v(_vm._s(_vm.metadata["_manual_text"]))])
          ]),
          _vm._v(" "),
          _c(
            "td",
            { staticClass: "center" },
            [
              !_vm.readonly
                ? _vm._l(5, function(deduct) {
                    return _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.metadata["_manual"],
                          expression: "metadata['_manual']"
                        }
                      ],
                      attrs: { type: "radio" },
                      domProps: {
                        value: deduct - 1,
                        checked: _vm._q(_vm.metadata["_manual"], deduct - 1)
                      },
                      on: {
                        change: [
                          function($event) {
                            return _vm.$set(_vm.metadata, "_manual", deduct - 1)
                          },
                          _vm.compute
                        ]
                      }
                    })
                  })
                : _c("span", [
                    _vm._v(_vm._s(_vm.deduction(_vm.metadata["_manual"])))
                  ])
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("tr", [
          _c("td", [
            !_vm.readonly
              ? _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.metadata["_comment"],
                      expression: "metadata['_comment']"
                    }
                  ],
                  attrs: { rows: "3" },
                  domProps: { value: _vm.metadata["_comment"] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.metadata, "_comment", $event.target.value)
                    }
                  }
                })
              : _c("div", { staticClass: "comment" }, [
                  _vm._v(_vm._s(_vm.metadata["_comment"]))
                ])
          ]),
          _c("td", { staticClass: "cl-deduct" }, [_vm._v(_vm._s(_vm.total))])
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_vm._v("Deduction"), _c("br"), _vm._v("0 to max")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "cl-internal" }, [
      _c("th", [_vm._v("Comment")]),
      _c("th", [_vm._v("Deduction")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("div", { staticClass: "cl-autoback" }),
        _vm._v(" "),
        _c("p", { staticClass: "cl-title" }, [
          _vm._v(_vm._s(_vm.json.assignment.name))
        ]),
        _vm._v(" "),
        _vm.json.dispute !== null
          ? _c("p", { staticClass: "cl-dispute" }, [
              _vm._v("Please direct all grading issues to "),
              _c("span", { domProps: { innerHTML: _vm._s(_vm.json.dispute) } })
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.json.grades, function(item) {
          return item.html !== undefined
            ? _c(
                "div",
                [
                  _c("h2", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  item.handbook === undefined
                    ? _c("div", { domProps: { innerHTML: _vm._s(item.html) } })
                    : _c("handbook", {
                        attrs: { item: item, readonly: "true" }
                      }),
                  _vm._v(" "),
                  _c("grade-history", { attrs: { history: item.history } })
                ],
                1
              )
            : _vm._e()
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "grade" },
          [
            _vm.json.grade !== null
              ? _c("p", [_vm._v("Computed Grade: " + _vm._s(_vm.json.grade))])
              : [
                  _c("p", [_vm._v("Grade Not Available")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "center small notice" }, [
                    _vm._v(
                      "Grades are not available until all parts of the assignment have been graded."
                    )
                  ])
                ]
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "cl-autoback" })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c("div", { staticClass: "full" }, [
      _vm.grade !== null
        ? _c("div", [
            _c("p", [
              _c("span", { domProps: { innerHTML: _vm._s(_vm.json.before) } })
            ]),
            _vm._v(" "),
            _vm.json.dispute !== null
              ? _c("p", { staticClass: "center" }, [
                  _vm._v("Please direct all grading issues to "),
                  _c("span", {
                    domProps: { innerHTML: _vm._s(_vm.json.dispute) }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "table",
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.grade.categories, function(category) {
                  return [
                    _c("tr", { staticClass: "cl-category" }, [
                      _c("td", { attrs: { colspan: "3" } }, [
                        _vm._v(_vm._s(category.name))
                      ]),
                      _c("td", [_vm._v(_vm._s(category.points) + "%")]),
                      _c("td", [_vm._v(_vm._s(category.grade))])
                    ]),
                    _vm._v(" "),
                    _vm._l(category.assignments, function(assignment) {
                      return assignment.points > 0
                        ? _c(
                            "tr",
                            {
                              key: assignment.tag,
                              staticClass: "cl-assignment"
                            },
                            [
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        _vm.root + "/cl/grade/" + assignment.tag
                                    }
                                  },
                                  [_vm._v(_vm._s(assignment.name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    Math.round(assignment.points * 10) / 10
                                  ) + "%"
                                )
                              ]),
                              _c("td", [_vm._v(_vm._s(assignment.grade))]),
                              _c("td", { attrs: { colspan: "2" } }, [
                                _vm._v(" ")
                              ])
                            ]
                          )
                        : _vm._e()
                    })
                  ]
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("p", { staticClass: "center" }, [
              _vm._v("Click on each assignment for more grading detail")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "center" }, [
              _vm._v(
                "Computed Grade: " +
                  _vm._s(_vm.grade.grade) +
                  " out of " +
                  _vm._s(_vm.grade.available) +
                  " available points" +
                  _vm._s(_vm.per)
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", { domProps: { innerHTML: _vm._s(_vm.json.after) } })
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Assignment")]),
      _c("th", [_vm._v(" ")]),
      _c("th", [_vm._v("Grade")]),
      _c("th", [_vm._v(" ")]),
      _c("th", [_vm._v("Grade")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-grade-history" }, [
    _vm.history2.length > 0
      ? _c("div", [
          _vm.history2.length > 1
            ? _c("div", { staticClass: "cl-toggle" }, [
                _c("p", { staticClass: "expander" }, [
                  _c("a", [
                    _vm._v(
                      _vm._s(_vm.display(_vm.history2[0])) +
                        " / Expand for additional grading history"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "grades" },
                  _vm._l(_vm.history2, function(h) {
                    return _c("p", [_vm._v(_vm._s(_vm.display(h)))])
                  }),
                  0
                )
              ])
            : _c("div", [
                _c("p", [_vm._v(_vm._s(_vm.display(_vm.history2[0])))])
              ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "cl-nav" }, [
    _c("div", [
      _c(
        "ul",
        { staticClass: "dividers" },
        [
          _c("li", [
            _c("a", { attrs: { href: _vm.homeLink } }, [
              _c("span", { staticClass: "home" }, [_vm._v("Home")])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.menu, function(item) {
            return _c("li", [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return item.click()
                    }
                  }
                },
                [_vm._v(_vm._s(item.name))]
              )
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue":
/*!******************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&");
/* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeManual.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeManual.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&");
/* harmony import */ var _GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeManual.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/GradeManual.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
/* harmony import */ var _GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&");
/* harmony import */ var _GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5cf9cddd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/GradesAll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
/* harmony import */ var _GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/GradesLinks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
/* harmony import */ var _GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/GradesMember.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue":
/*!*******************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&");
/* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&");
/* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56b05980",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue":
/*!*************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
/* harmony import */ var _Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grading.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/Grading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
/* harmony import */ var _GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/GradingAssignment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue":
/*!*****************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
/* harmony import */ var _GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/GradingAssignmentMember.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
/* harmony import */ var _RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.render,
  _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/RubricEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
/* harmony import */ var _RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.render,
  _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Console/RubricsEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
/* harmony import */ var _Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Handbook.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Handbook/Handbook.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
/* harmony import */ var _GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/User/GradeAssignment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue":
/*!*********************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
/* harmony import */ var _Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grades.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/User/Grades.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue":
/*!************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "177faa53",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/grades/js/Util/GradeHistoryComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony import */ var _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNav.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/__virtual__/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-9d6b92ea6f.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_9d6b92ea6f_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/site/js/Vue/PageNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Grades": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./vendor/cl/grades/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZU1hbnVhbC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTGlua3MudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQ29uc29sZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0dyYWRlc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VWdWUuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9fZ3JhZGVzLnNjc3MiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/NWI1YiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT8zZGMyIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT8wNjEyIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlPzZiZTciLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9fZ3JhZGVzLnNjc3M/MzAzMyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT8wYWQ4Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlPzhlOTIiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlPzhhZmMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/MzU0NCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2l0ZS9pbWcveWVsbG93cGFkLnBuZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT8xZTVjIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZU1hbnVhbC52dWU/N2Y2MiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT81NzcyIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNMaW5rcy52dWU/ZjhmYiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTWVtYmVyLnZ1ZT9kMDQ1Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT85NGMzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nLnZ1ZT81ZGE1Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudC52dWU/NWVjOSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlP2MzYzciLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY0VkaXRvci52dWU/OGUxZiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljc0VkaXRvci52dWU/NjRjNyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZT8xYmUxIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlPzlhM2EiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWU/Y2Q5MyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT8wNDRkIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZT83ZGRhIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlP2MxMTYiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlTWFudWFsLnZ1ZT82OWM2Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlPzBkNjMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0xpbmtzLnZ1ZT85YzNlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNNZW1iZXIudnVlP2Y4NDYiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlPzI0Y2EiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmcudnVlPzNlNmYiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT83M2VkIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/YzBmYyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljRWRpdG9yLnZ1ZT80ZTlkIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNzRWRpdG9yLnZ1ZT81NDExIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlPzA3ZmEiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlQXNzaWdubWVudC52dWU/YWM4MiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVzLnZ1ZT9jZjExIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlPzJmMjkiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VOYXYudnVlPzFhODkiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlTWFudWFsLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTGlua3MudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNNZW1iZXIudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNzRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVzLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkdyYWRlcyIsIkdyYWRlc0ZhY3RvcnkiLCJTaXRlIiwiY29uc29sZSIsInVuZGVmaW5lZCIsIkdyYWRlc0NvbnNvbGUiLCJNZW1iZXIiLCJpbnN0YWxsIiwiQ29uc29sZSIsImNvbXBvbmVudHMiLCJhZGRPcHRpb24iLCJhdExlYXN0IiwiR1JBREVSIiwicGFnZSIsInRpdGxlIiwicm91dGUiLCJvcmRlciIsImNvbXBvbmVudCIsIkdyYWRpbmdWdWUiLCJhZGRSb3V0ZXMiLCJHcmFkaW5nQXNzaWdubWVudFZ1ZSIsInByb3BzIiwiR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXJWdWUiLCJSdWJyaWNzRWRpdG9yVnVlIiwiR3JhZGVzTGlua3NWdWUiLCJHcmFkZXNBbGxWdWUiLCJHcmFkZXNNZW1iZXJWdWUiLCJ0YWJsZXMiLCJhZGQiLCJhcGkiLCJjcmVhdGUiLCJzaXRlIiwicmVhZHkiLCJQYWdlVnVlIiwiR3JhZGVBc3NpZ25tZW50VnVlIiwiUGFnZU5hdiIsIkdyYWRlc1Z1ZSIsInNlbCIsIm5hdiIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZ0YWciLCJ0ZW1wbGF0ZSIsIkhlYWRlciIsImluZm8iLCJoZWFkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJzdG9yZSIsIlZ1ZSIsImVsIiwiZGF0YSIsIm1lbnUiLCJtZXRob2RzIiwic2V0VGl0bGUiLCJzaXRlTmFtZSIsInNldE1lbnUiLCJnZXRNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUVBO0FBQ0EsK0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7QUFPQTtBQUNBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBUkEsQ0FVQTs7QUFDQTtBQUNBLHlEQURBLENBR0E7O0FBQ0E7QUFDQSwrQkFEQTtBQUVBLG1DQUZBO0FBR0EsaUNBSEE7QUFJQSxxQkFKQTtBQUtBLDRCQUxBO0FBTUE7QUFOQSxVQUpBLENBYUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7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VyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFB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O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZ3JhZGVzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtYnVsay11cGxvYWRcIj5cclxuICAgIDxoMiBpZD1cImJ1bGtcIj5CdWxrIGdyYWRlIHVwbG9hZGluZzwvaDI+XHJcbiAgICA8cD5UaGlzIG9wdGlvbiBhY2NlcHRzIGZpbGVzIGluIENTViBmb3JtYXQgYXMgcHJvZHVjZWQgYnkgQ3Jvd2RNYXJrIGFuZCBvdGhlciBzeXN0ZW1zLiA8L3A+XHJcblxyXG4gICAgPGZvcm0gY2xhc3M9XCJmdWxsXCIgQHN1Ym1pdC5wcmV2ZW50PVwiYnVsa1VwbG9hZCgpXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICA8bGVnZW5kPkJ1bGsgVXBsb2FkIEZpbGU8L2xlZ2VuZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5GaWxlIHRvIHVwbG9hZDogPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD48aW5wdXQgbmFtZT1cImJ1bGtmaWxlXCIgdHlwZT1cImZpbGVcIiBAY2hhbmdlPVwiYnVsa0ZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiPjwvcD5cclxuICAgICAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlByZXNzXCI+IHRvIHVwbG9hZCB0aGUgZmlsZSE8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEdyYWRlc1VwbG9hZENvbHVtbkNob29zZXJDb21wb25lbnQgZnJvbSAnLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ2Fzc2lnbnRhZycsICdwYXJ0cyddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJ1bGtGaWxlczogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBidWxrVXBsb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2l0ZSA9IHRoaXMuJHNpdGU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJ1bGtGaWxlcyA9PT0gbnVsbCB8fCB0aGlzLmJ1bGtGaWxlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuYnVsa0ZpbGVzWzBdO1xyXG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAvLyBDbG9zdXJlIHRvIGNhcHR1cmUgdGhlIGZpbGUgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG5cclxuICAgICAgICAgIC8vIERhdGEgd2Ugd2lsbCBzZW5kIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBmaWxlOiBlLnRhcmdldC5yZXN1bHQsXHJcbiAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uLFxyXG4gICAgICAgICAgICBtYXBwaW5nOiAnJyxcclxuICAgICAgICAgICAgY29tbWVudE1hcHBpbmc6ICcnLFxyXG4gICAgICAgICAgICBpZGNvbHVtbjogJydcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgICAgLy8gUmVhZCB0aGUgZmlyc3QgbGluZSBvZiB0aGUgQ1NWIGZpbGUgdG8gZ2V0IHRoZSBmaWVsZHNcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCByZSA9IC9eLiokL207XHJcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IGUudGFyZ2V0LnJlc3VsdC5tYXRjaChyZSk7XHJcbiAgICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3IHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3goJ0ludmFsaWQgRmlsZScsICdGaWxlIGRvZXMgbm90IGNvbnRhaW4gZ3JhZGUgZGF0YS4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3guT0ssICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBtYXRjaFswXS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzO1xyXG4gICAgICAgICAgbGV0IG1hcHBpbmcgPSB7fTtcclxuICAgICAgICAgIGxldCBjb21tZW50TWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgbGV0IGlkQ29sdW1uID0ge307XHJcblxyXG4gICAgICAgICAgbmV3IHNpdGUuRGlhbG9nKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDb2x1bW4gU2VsZWN0aW9uJyxcclxuICAgICAgICAgICAgY29udGVudDogJzxkaXYgaWQ9XCJjbC1jb2x1bW4tY2hvb3NlclwiPjwvZGl2PicsXHJcbiAgICAgICAgICAgIGFkZENsYXNzOiAnY2wtY29sdW1uLWNob29zZXItZGxnJyxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnVXBsb2FkJyxcclxuICAgICAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgYW55ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGluZ1twYXJ0LnRhZ10gIT09ICcqbm9uZSonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoIWFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpdGUudG9hc3QodGhpcywgXCJObyBjb2x1bW5zIHNlbGVjdGVkIHRvIHVwbG9hZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubWFwcGluZyA9IEpTT04uc3RyaW5naWZ5KG1hcHBpbmcpO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmNvbW1lbnRNYXBwaW5nID0gSlNPTi5zdHJpbmdpZnkoY29tbWVudE1hcHBpbmcpO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmlkY29sdW1uID0gaWRDb2x1bW4uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICBzaXRlLmFwaS5wb3N0KCcvYXBpL2dyYWRlL2J1bGsvdXBsb2FkLycgKyB0aGlzLmFzc2lnbnRhZywgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSByZXNwb25zZS5nZXREYXRhKCdyZXN1bHRzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlLnRvYXN0KHRoaXMsICcnICsgcmVzdWx0cy5hdHRyaWJ1dGVzLmdyYWRlcyArIFwiIGdyYWRlcyBzdWNjZXNzZnVsbHkgdXBsb2FkZWQgZm9yIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLmF0dHJpYnV0ZXMudXNlcnMgKyAnIHVzZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmdvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcblxyXG5cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIENyZWF0ZSBhIFZ1ZSBpbnNpZGUgdGhlIGRpYWxvZyBib3hcclxuICAgICAgICAgIG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgICAgIGVsOiAnI2NsLWNvbHVtbi1jaG9vc2VyJyxcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0czogcGFydHMsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxyXG4gICAgICAgICAgICAgICAgbWFwcGluZzogbWFwcGluZyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRNYXBwaW5nOiBjb21tZW50TWFwcGluZyxcclxuICAgICAgICAgICAgICAgIGlkQ29sdW1uOiBpZENvbHVtblxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPGNob29zZXIgOnBhcnRzPVwicGFydHNcIiA6Y29sdW1ucz1cImNvbHVtbnNcIj48L2Nob29zZXI+YCxcclxuICAgICAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAgICdjaG9vc2VyJzogR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3NlckNvbXBvbmVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBzaXRlLnRvYXN0KHRoaXMsIFwiRXJyb3IgcmVhZGluZyBmaWxlXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHNpdGUudG9hc3QodGhpcywgXCJGaWxlIHJlYWQgYWJvcnRlZFwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSZWFkIGluIHRoZSBmaWxlXHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuLy8gTm90aWNlOiBOb3Qgc2NvcGVkIVxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBkaXYuY2wtYnVsay11cGxvYWQge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZHNldCB7XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2LjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmNsLWJ1bGstdXBsb2FkLWRsZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcblxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2wtZ3JhZGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+Q29tbWVudCA8YSBAY2xpY2sucHJldmVudD1cImNvbXB1dGUoKVwiPmNvbXB1dGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cIml0ZW0ubWFudWFsLmNvbW1lbnRcIiByb3dzPVwiNlwiIGNsYXNzPVwiY29tbWVudFwiIDpuYW1lPVwiaXRlbS50YWcgKyAnLWNvbW1lbnQnXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRzXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Qb2ludHNcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInBvaW50c1wiIHYtbW9kZWw9XCJpdGVtLm1hbnVhbC5wb2ludHNcIiB0eXBlPVwibnVtYmVyXCIgOmlkPVwiaXRlbS50YWcgKyAnLXBvaW50cydcIiA6bmFtZT1cIml0ZW0udGFnICsgJy1wb2ludHMnXCI+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5BdmFpbGFibGU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJmaWxsSW5Qb2ludHMoKVwiIDpkYXRhLWlkPVwiaXRlbS50YWcgKyAnLXBvaW50cydcIiB0aXRsZT1cIkNsaWNrIHRvIGZpbGwgaW4gcG9pbnRzXCI+e3tpdGVtLm1hbnVhbC5hdmFpbGFibGV9fTwvYT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hbnVhbCBncmFkZSBlbnRyeSBmb3JtLlxyXG4gICAgICogQGNvbnN0cnVjdG9yIEdyYWRlTWFudWFsVnVlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogWydpdGVtJ10sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZmlsbEluUG9pbnRzKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLm1hbnVhbC5wb2ludHMgPSB0aGlzLml0ZW0ubWFudWFsLmF2YWlsYWJsZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcHV0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gdGhpcy5pdGVtLm1hbnVhbC5jb21tZW50LnNwbGl0KC9cXHI/XFxuLyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmVnID0gMDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IGxpbmUubWF0Y2goL15cXHMqKFsrLV0/KShbMS05XVswLTldKikoW14wLTldfCQpLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW5zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRva2Vuc1sxXSA9PT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWcgLT0gK3Rva2Vuc1syXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSArdG9rZW5zWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgKiBJZiB3ZSBvbmx5IGhhdmUgbmVnYXRpdmUgdmFsdWVzLCB0aGF0IGlzIHN1YnRyYWN0ZWQgZnJvbVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGF2YWlsYWJsZSBwb2ludHMuIElmIHdlIG9ubHkgaGF2ZSBwb3NpdGl2ZSB2YWx1ZXMsIHRoZXlcclxuICAgICAgICAgICAgICAgICAqIGFyZSBhZGRlZCB0byBtYWtlIHVwIHRoZSBwb2ludHMuIElmIHdlIGhhdmUgYm90aCwgdGhlIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICogYXJlIGFsbCBhZGRlZCB0b2dldGhlciB0byBtYWtlIHVwIHRoZSB0b3RhbCBwb2ludHMuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGlmKG5lZyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBvcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubWFudWFsLnBvaW50cyA9IHRoaXMuaXRlbS5tYW51YWwuYXZhaWxhYmxlICsgbmVnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5tYW51YWwucG9pbnRzID0gcG9zICsgbmVnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocG9zID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5tYW51YWwucG9pbnRzID0gdGhpcy5pdGVtLm1hbnVhbC5hdmFpbGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLm1hbnVhbC5wb2ludHMgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtZW1iZXJzLWZldGNoZXI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImNhdGVnb3J5IGluIHNlY3Rpb24uYXNzaWdubWVudHMuY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiYXNzaWdubWVudCBpbiBjYXRlZ29yeS5hc3NpZ25tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+PGRpdiBjbGFzcz1cInNtYWxsXCI+e3thc3NpZ25tZW50LnNob3J0bmFtZX19PC9kaXY+PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8dGg+PGRpdiBjbGFzcz1cInNtYWxsIGNhdGVnb3J5XCI+e3tjYXRlZ29yeS5uYW1lfX08L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gZmV0Y2hlci51c2Vyc1wiIDpjbGFzcz1cInVzZXIucm9sZSgpICE9PSAnVCcgPyAnaWdub3JlJyA6ICcnXCI+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy8nICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIudXNlcklkfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy8nICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIubmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt7YXNzaWdubWVudEdyYWRlKHVzZXIsIGNhdGVnb3J5LCBhc3NpZ25tZW50KX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tjYXRlZ29yeUdyYWRlKHVzZXIsIGNhdGVnb3J5KX19PC90ZD5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlcnMtZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWUgPSBTaXRlLk1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5cdGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQWxsIGdyYWRlcyBmb3IgYWxsIG1lbWJlcnNcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkZXMvYWxsXHJcblx0ICogQGNvbnN0cnVjdG9yIEdyYWRlc0FsbFZ1ZVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2VjdGlvbjogbnVsbCxcclxuXHRcdFx0XHRncmFkZXM6IG51bGwsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdtZW1iZXJzRmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0bGV0IHVzZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcblx0XHRcdGxldCBtZW1iZXIgPSB1c2VyLm1lbWJlcjtcclxuXHRcdFx0dGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogR3JhZGVzJyk7XHJcblxyXG5cdFx0XHR0aGlzLiRzaXRlLmFwaS5nZXQoJy9hcGkvZ3JhZGUvYWxsJywge30pXHJcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ncmFkZXMgPSByZXNwb25zZS5nZXREYXRhKCdncmFkZXMtYWxsJykuYXR0cmlidXRlcztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGFzc2lnbm1lbnRHcmFkZSh1c2VyLCBjYXRlZ29yeSwgYXNzaWdubWVudCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmdyYWRlcyA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICc/JztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCB1c2VyR3JhZGVzID0gdGhpcy5ncmFkZXNbdXNlci5tZW1iZXIuaWRdO1xyXG5cdFx0XHRcdGxldCBhc3NpZ25tZW50R3JhZGVzID0gdXNlckdyYWRlcy5jYXRlZ29yaWVzW2NhdGVnb3J5LnRhZ10uYXNzaWdubWVudHM7XHJcblx0XHRcdFx0Zm9yIChsZXQgYXNzaWdubWVudEdyYWRlIG9mIGFzc2lnbm1lbnRHcmFkZXMpIHtcclxuXHRcdFx0XHRcdGlmIChhc3NpZ25tZW50R3JhZGUudGFnID09PSBhc3NpZ25tZW50LnRhZykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYXNzaWdubWVudEdyYWRlLmdyYWRlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYXRlZ29yeUdyYWRlKHVzZXIsIGNhdGVnb3J5KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZ3JhZGVzID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJz8nO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHVzZXJHcmFkZXMgPSB0aGlzLmdyYWRlc1t1c2VyLm1lbWJlci5pZF07XHJcblx0XHRcdFx0bGV0IGNhdGVnb3J5R3JhZGUgPSB1c2VyR3JhZGVzLmNhdGVnb3JpZXNbY2F0ZWdvcnkudGFnXTtcclxuXHRcdFx0XHRyZXR1cm4gY2F0ZWdvcnlHcmFkZS5ncmFkZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnfnNpdGUtY2wvc2Fzcy9tb2R1bGVzL2NvbG9ycyc7XHJcblxyXG50ZCB7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4gIGRpdi5jYXRlZ29yeSB7XHJcbiAgICBjb2xvcjogJHNlY29uZGI7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPG1lbWJlcnMtZmV0Y2hlcj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCIgOmNsYXNzPVwidXNlci5yb2xlKCkgIT09ICdUJyA/ICdpZ25vcmUnIDogJydcIj5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzLycgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzLycgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci5uYW1lfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlci5yb2xlTmFtZSgpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlcnMtZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWUgPSBTaXRlLk1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5cdGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQWxsIHN0dWRlbnQgZ3JhZGUgbGlua3NcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkZXMvbGlua3NcclxuXHQgKiBAY29uc3RydWN0b3IgR3JhZGVzTGlua3NWdWVcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGdyYWRlczogbnVsbCxcclxuXHRcdFx0XHRwYXJ0czogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J21lbWJlcnNGZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWVcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogR3JhZGVzJyk7XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWdyYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPG1lbWJlci1mZXRjaGVyIHYtb246ZmV0Y2hlZD1cImZldGNoZWRcIiA6aWQ9XCJtZW1iZXJpZFwiIDpmYWlsbGluaz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzL2xpbmtzJ1wiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHByZXYtbmV4dCA6dXNlcj1cImZldGNoZXIudXNlclwiPjwvcHJldi1uZXh0PlxyXG4gICAgICAgICAgPGRpdiB2LWlmPVwiZmV0Y2hlci51c2VyICE9PSBudWxsICYmIGdyYWRlICE9PSBudWxsXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+QXNzaWdubWVudDwvdGg+PHRoPiZuYnNwOzwvdGg+PHRoPkdyYWRlPC90aD48dGg+Jm5ic3A7PC90aD48dGg+R3JhZGU8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImNhdGVnb3J5IGluIGdyYWRlLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImNsLWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPnt7Y2F0ZWdvcnkubmFtZX19PC90ZD48dGQ+e3tjYXRlZ29yeS5wb2ludHN9fSU8L3RkPjx0ZD57e2NhdGVnb3J5LmdyYWRlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJjbC1hc3NpZ25tZW50XCIgdi1mb3I9XCJhc3NpZ25tZW50IGluIGNhdGVnb3J5LmFzc2lnbm1lbnRzXCIgOmtleT1cImFzc2lnbm1lbnQudGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiYCR7cm9vdH0vY2wvY29uc29sZS9ncmFkaW5nLyR7YXNzaWdubWVudC50YWd9LyR7ZmV0Y2hlci51c2VyLm1lbWJlci5pZH1gXCI+e3thc3NpZ25tZW50Lm5hbWV9fTwvcm91dGVyLWxpbms+PC90ZD48dGQ+e3tNYXRoLnJvdW5kKGFzc2lnbm1lbnQucG9pbnRzICogMTApIC8gMTB9fSU8L3RkPjx0ZD57e2Fzc2lnbm1lbnQuZ3JhZGV9fTwvdGQ+PHRkIGNvbHNwYW49XCIyXCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPkNvbXB1dGVkIEdyYWRlOiB7e2dyYWRlLmdyYWRlfX0gb3V0IG9mIHt7Z3JhZGUuYXZhaWxhYmxlfX0gYXZhaWxhYmxlIHBvaW50c3t7cGVyfX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlci1mZXRjaGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBQcmV2TmV4dE1lbWJlclZ1ZSA9IFNpdGUuUHJldk5leHRNZW1iZXJWdWU7XHJcblx0Y29uc3QgTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZSA9IFNpdGUuTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuXHRjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnNvbGUgZ3JhZGVzIHByZXNlbnRhdGlvbiBmb3IgYSBtZW1iZXJcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkZXMvOm51bVxyXG5cdCAqIEBjb25zdHJ1Y3RvciBHcmFkZXNNZW1iZXJWdWVcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRleHRlbmRzOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuXHRcdHByb3BzOiBbJ21lbWJlcmlkJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y291cnNlOiB0aGlzLiRzdG9yZS5zdGF0ZS5jb3Vyc2UuY291cnNlLFxyXG5cdFx0XHRcdHNlY3Rpb246IG51bGwsXHJcblx0XHRcdFx0Z3JhZGU6IG51bGwsXHJcblx0XHRcdFx0cGVyOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRtZW1iZXJGZXRjaGVyOiBNZW1iZXJGZXRjaGVyQ29tcG9uZW50VnVlLFxyXG5cdFx0XHRwcmV2TmV4dDogUHJldk5leHRNZW1iZXJWdWUsXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5zZXRUaXRsZSgnOiBHcmFkZScpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZmV0Y2hlZCh1c2VyKSB7XHJcblx0XHRcdFx0dGhpcy5zZWN0aW9uID0gdXNlci5tZW1iZXIuZ2V0U2VjdGlvbih0aGlzLiRzdG9yZSk7XHJcblx0XHRcdFx0dGhpcy5zZXRUaXRsZSgnOiAnICsgdXNlci5uYW1lICsgJyBHcmFkZXMnKTtcclxuXHJcblx0XHRcdFx0dGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL2dyYWRlL2dyYWRlLyR7dGhpcy5tZW1iZXJpZH1gLCB7fSlcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmdyYWRlID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGUnKS5hdHRyaWJ1dGVzO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmdyYWRlLmF2YWlsYWJsZSA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGVyID0gJygnICsgKHRoaXMuZ3JhZGUuZ3JhZGUgLyB0aGlzLmdyYWRlLmF2YWlsYWJsZSAqIDEwMCkudG9GaXhlZCgxKSArICclKSc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgaWQ9XCJjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnRcIj5cclxuICAgICAgICA8cD5NZW1iZXIgaWRlbnRpZmllciBjb2x1bW46XHJcbiAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwibWVtYmVySWRDb2x1bW4uaWRcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNvbHVtbiBpbiBjb2x1bW5zXCI+e3tjb2x1bW59fTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PjwvcD5cclxuXHJcbiAgICAgICAgPHA+TWVtYmVyIGlkZW50aWZpZXIgY2FuIGJlIGFuIGVtYWlsIGFkZHJlc3Mgb3IgdXNlciBJRC48L3A+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+U2VsZWN0IGNvbHVtbiBmb3IgZWFjaCBncmFkZSBpdGVtPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbC1wYXJ0c1wiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIocGFydCwgaW5kZXgpIGluIHBhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3twYXJ0Lm5hbWV9fTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJtYXBwaW5nW3BhcnQudGFnXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNvbHVtbiBpbiBjb2x1bW5TZWxlY3RcIj57e2NvbHVtbn19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbC1jb21tZW50XCI+Y29tbWVudDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJjb21tZW50TWFwcGluZ1twYXJ0LnRhZ11cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJjb2x1bW4gaW4gY29sdW1uU2VsZWN0XCI+e3tjb2x1bW59fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIC8qKlxyXG4gICAgICogQ2hvb3NlIHRoZSBDU1YgY29sdW1ucyBmb3IgZWFjaCBncmFkZSBjb21wb25lbnQgd2UgYXJlIGdvaW5nIHRvIHVwbG9hZC5cclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RydWN0b3IgR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3NlckNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsncGFydHMnLCAnY29sdW1ucyddLFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lbWJlcklkQ29sdW1uOiB7fSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblNlbGVjdDogW10sXHJcbiAgICAgICAgICAgICAgICBtYXBwaW5nOiB7fSxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRNYXBwaW5nOiB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7fSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICAvLyBTZWUgaWYgdGhlcmUgaXMgYW4gZW1haWwgY29sdW1uXHJcbiAgICAgICAgICAgIHRoaXMubWVtYmVySWRDb2x1bW4gPSB0aGlzLiRwYXJlbnQuaWRDb2x1bW47XHJcbiAgICAgICAgICAgIHRoaXMubWVtYmVySWRDb2x1bW4uaWQgPSB0aGlzLmNvbHVtbnNbMF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZW1haWwnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW1iZXJJZENvbHVtbi5pZCA9IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5TZWxlY3QgPSBbJypub25lKiddLmNvbmNhdCh0aGlzLmNvbHVtbnMpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmcgPSB0aGlzLiRwYXJlbnQubWFwcGluZztcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50TWFwcGluZyA9IHRoaXMuJHBhcmVudC5jb21tZW50TWFwcGluZztcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBpbml0aWFsbHkgZW1wdHlcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFydCBvZiB0aGlzLnBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcHBpbmdbcGFydC50YWddID0gJypub25lKic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRNYXBwaW5nW3BhcnQudGFnXSA9ICcqbm9uZSonO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuY2wtcGFydHMge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuXHJcbiAgICAgICAgICAgID5kaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuY2wtY29tbWVudCB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICA8aDI+R3JhZGVzIFN1bW1hcnk8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy9hbGwnXCI+QWxsIFN0dWRlbnRzPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArICcvY2wvY29uc29sZS9ncmFkZXMvbGlua3MnXCI+QWxsIFN0dWRlbnRzIEdyYWRlIExpbmtzPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDxsaSB2LWlmPVwiZG93bmxvYWRQZXJtaXNzaW9uXCI+PGEgOmhyZWY9XCJyb290ICsgJy9jbC9ncmFkZXMvY3N2J1wiPkRvd25sb2FkIFN0dWRlbnQgR3JhZGVzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHYtaWY9XCJydWJyaWNEdW1wZXJQZXJtaXNzaW9uXCI+PGEgOmhyZWY9XCJyb290ICsgJy9jbC9ncmFkZXMvcnVicmljLWR1bXBlcidcIj5SdWJyaWMgRHVtcGVyPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICA8aDI+e3tjYXRlZ29yeS5uYW1lfX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaSB2LWlmPVwiY2F0ZWdvcnkuYXNzaWdubWVudHMubGVuZ3RoID09PSAwXCI+PGVtPlBlbmRpbmcuLi48L2VtPjwvbGk+XHJcbiAgICAgICAgICA8bGkgdi1mb3I9XCJhc3NpZ25tZW50IGluIGNhdGVnb3J5LmFzc2lnbm1lbnRzXCIgOmtleT1cImFzc2lnbm1lbnQudGFnXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJncmFkaW5nTGluayArIGFzc2lnbm1lbnQudGFnXCI+e3thc3NpZ25tZW50Lm5hbWV9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImxpbmstYnV0dG9uXCIgdi1pZj1cInVzZXIuYXRMZWFzdCh0YSlcIiA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL3J1YnJpYy8nICsgYXNzaWdubWVudC50YWdcIj5ydWJyaWNzPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgY29uc3QgTWVtYmVyID0gU2l0ZS5NZW1iZXI7XHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbWFpbiBncmFkaW5nIHBhZ2VcclxuICAgKiAvY2wvY29uc29sZS9ncmFkaW5nXHJcbiAgICogQGNvbnN0cnVjdG9yIEdyYWRpbmdWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nTGluazogdGhpcy4kc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlL2dyYWRpbmcvJyxcclxuICAgICAgICAgICAgICAgIHRhOiBNZW1iZXIuVEEsXHJcblxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWRQZXJtaXNzaW9uOiBmYWxzZSwgICAgICAvLyBQZXJtaXNzaW9uIHRvIGRvd25sb2FkIGdyYWRlcz9cclxuICAgICAgICAgICAgICAgIHJ1YnJpY0R1bXBlclBlcm1pc3Npb246IGZhbHNlICAgLy8gUGVybWlzc2lvbiB0byBkdW1wIHJ1YnJpY3M/XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBBc3NpZ25tZW50IEdyYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG4gICAgICAgICAgICBsZXQgbWVtYmVyID0gdXNlci5tZW1iZXI7XHJcblxyXG5cdCAgICAgICAgICB0aGlzLmRvd25sb2FkUGVybWlzc2lvbiA9IHVzZXIuYXRMZWFzdCh0aGlzLiRzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3QoJ2dyYWRlcy1kb3dubG9hZCcsIE1lbWJlci5UQSkpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1YnJpY0R1bXBlclBlcm1pc3Npb24gPSB1c2VyLmF0TGVhc3QodGhpcy4kc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KCdncmFkZXMtcnVicmljLWR1bXBlcicsIE1lbWJlci5UQSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxzdWJtaXNzaW9ucy1saW5rcyA6YXNzaWdubWVudD1cImFzc2lnbm1lbnRcIj48L3N1Ym1pc3Npb25zLWxpbmtzPlxyXG4gICAgICA8bWVtYmVycy1mZXRjaGVyPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHRhYmxlIHYtaWY9XCJncmFkZXMgIT09IG51bGxcIiBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHYtZm9yPVwicGFydCBpbiBwYXJ0c1wiIGNsYXNzPVwic21hbGxcIj48ZGl2Pnt7cGFydC5uYW1lfX08L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwiZ3JhZGVzICE9PSBudWxsXCIgY2xhc3M9XCJzbWFsbFwiPjxkaXY+R3JhZGU8L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIGZldGNoZXIudXNlcnNcIiA6Y2xhc3M9XCJ1c2VyLnJvbGUoKSAhPT0gJ1QnID8gJ2lnbm9yZScgOiAnJ1wiPlxyXG4gICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArIGxpbmsgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyBsaW5rICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIubmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvbGVcIj57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJwYXJ0IGluIHBhcnRzXCIgY2xhc3M9XCJyaWdodFwiPnt7cGFydEdyYWRlKHVzZXIsIHBhcnQpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZ3JhZGVzICE9PSBudWxsXCIgY2xhc3M9XCJyaWdodFwiPnt7Z3JhZGUodXNlcil9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImRpdmlkZXJcIj5cclxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIiBjbGFzcz1cImNlbnRlclwiPjxlbT5jb3VudHM8L2VtPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2VudGVyXCI+e3tmZXRjaGVyLnVzZXJzLmxlbmd0aH19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJwYXJ0IGluIHBhcnRzXCIgY2xhc3M9XCJyaWdodFwiPnt7cGFydENvdW50KGZldGNoZXIudXNlcnMsIHBhcnQpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZ3JhZGVzICE9PSBudWxsXCIgY2xhc3M9XCJyaWdodFwiPnt7Z3JhZGVzQ291bnQoZmV0Y2hlci51c2Vycyl9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIiBjbGFzcz1cImNlbnRlclwiPjxlbT5hdmVyYWdlczwvZW0+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjZW50ZXJcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWZvcj1cInBhcnQgaW4gcGFydHNcIiBjbGFzcz1cInJpZ2h0XCI+e3twYXJ0QXZlcmFnZShmZXRjaGVyLnVzZXJzLCBwYXJ0KX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImdyYWRlcyAhPT0gbnVsbFwiIGNsYXNzPVwicmlnaHRcIj57e2dyYWRlQXZlcmFnZShmZXRjaGVyLnVzZXJzKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzLWZldGNoZXI+XHJcbiAgICAgIDxidWxrLXVwbG9hZCB2LWlmPVwicGFydHMubGVuZ3RoID4gMCAmJiB0YVwiIDphc3NpZ250YWc9XCJhc3NpZ250YWdcIiA6cGFydHM9XCJwYXJ0c1wiPjwvYnVsay11cGxvYWQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEdyYWRlQnVsa1VwbG9hZENvbXBvbmVudCBmcm9tICcuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWUnO1xyXG5cclxuICBjb25zdCBTdWJtaXNzaW9uc0xpbmtzVnVlID0gU2l0ZS5TdWJtaXNzaW9uc0xpbmtzVnVlO1xyXG4gIGNvbnN0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlID0gU2l0ZS5NZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcbiAgY29uc3QgTWVtYmVyID0gU2l0ZS5NZW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhc3NpZ25tZW50IGdyYWRpbmcgcGFnZSBmb3IgdGhlIGNvdXJzZS5cclxuICAgKiAvY2wvY29uc29sZS9ncmFkaW5nLzphc3NpZ250YWdcclxuICAgKiBAY29uc3RydWN0b3IgR3JhZGluZ0Fzc2lnbm1lbnRWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBleHRlbmRzOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgIHByb3BzOiBbJ2Fzc2lnbnRhZyddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbms6ICcvY2wvY29uc29sZS9ncmFkaW5nLycgKyB0aGlzLmFzc2lnbnRhZyArICcvJyxcclxuICAgICAgICBncmFkZXM6IG51bGwsXHJcbiAgICAgICAgcGFydHM6IFtdLFxyXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIGFzc2lnbm1lbnQ6IG51bGwsXHJcbiAgICAgICAgdGE6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICdtZW1iZXJzRmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlLFxyXG4gICAgICAnc3VibWlzc2lvbnNMaW5rcyc6IFN1Ym1pc3Npb25zTGlua3NWdWUsXHJcbiAgICAgICdidWxrLXVwbG9hZCc6IEdyYWRlQnVsa1VwbG9hZENvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnRhID0gdGhpcy51c2VyLmF0TGVhc3QoTWVtYmVyLlRBKTtcclxuICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cclxuICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBHcmFkaW5nJyk7XHJcblxyXG4gICAgICB0aGlzLiRzaXRlLmFwaS5nZXQoJy9hcGkvZ3JhZGUvZ3JhZGVzLycgKyB0aGlzLmFzc2lnbnRhZywge30pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5ncmFkZXMgPSByZXNwb25zZS5nZXREYXRhKCdncmFkZXMnKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGUtcGFydHMnKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHBhcnRHcmFkZSh1c2VyLCBwYXJ0KSB7XHJcbiAgICAgICAgY29uc3QgdXNlckdyYWRlcyA9IHRoaXMuZ3JhZGVzW3VzZXIubWVtYmVyLmlkXTtcclxuICAgICAgICBpZiAodXNlckdyYWRlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXJ0U3RhdHVzID0gdXNlckdyYWRlcy5ncmFkZXNbcGFydC50YWddO1xyXG4gICAgICAgIGlmIChwYXJ0U3RhdHVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJ0U3RhdHVzO1xyXG4gICAgICB9LFxyXG4gICAgICBncmFkZSh1c2VyKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckdyYWRlcyA9IHRoaXMuZ3JhZGVzW3VzZXIubWVtYmVyLmlkXTtcclxuICAgICAgICBpZiAodXNlckdyYWRlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXNlckdyYWRlcy5ncmFkZSAhPT0gbnVsbCA/IHVzZXJHcmFkZXMuZ3JhZGUgOiAnJztcclxuICAgICAgfSxcclxuICAgICAgcGFydENvdW50KHVzZXJzLCBwYXJ0KSB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgdXNlciBvZiB1c2Vycykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFydEdyYWRlKHVzZXIsIHBhcnQpICE9PSAnJykge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyYWRlc0NvdW50KHVzZXJzKSB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgdXNlciBvZiB1c2Vycykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZ3JhZGUodXNlcikgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgICAgfSxcclxuICAgICAgcGFydEF2ZXJhZ2UodXNlcnMsIHBhcnQpIHtcclxuICAgICAgICBsZXQgY250ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgIGxldCBncmFkZSA9IHRoaXMucGFydEdyYWRlKHVzZXIsIHBhcnQpO1xyXG4gICAgICAgICAgaWYgKGdyYWRlICE9PSAnJykge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgdG90YWwgKz0gZ3JhZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY250ID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbCAvIGNudCAqIDEwKSAvIDEwO1xyXG4gICAgICB9LFxyXG4gICAgICBncmFkZUF2ZXJhZ2UodXNlcnMpIHtcclxuICAgICAgICBsZXQgY250ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgIGxldCBncmFkZSA9IHRoaXMuZ3JhZGUodXNlcik7XHJcbiAgICAgICAgICBpZiAoZ3JhZGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICB0b3RhbCArPSBncmFkZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbnQgPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRvdGFsIC8gY250ICogMTApIC8gMTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8bWVtYmVyLWZldGNoZXIgdi1vbjpmZXRjaGVkPVwiZmV0Y2hlZFwiIDppZD1cIm1lbWJlcmlkXCIgOmZhaWxsaW5rPVwiZ3JhZGluZ0xpbmtcIj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDxwcmV2LW5leHQgOnVzZXI9XCJmZXRjaGVyLnVzZXJcIj48L3ByZXYtbmV4dD5cclxuICAgICAgICAgIDxkaXYgdi1pZj1cImZldGNoZXIudXNlciAhPT0gbnVsbFwiPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICA8cCA6Y2xhc3M9XCJmZXRjaGVyLnVzZXIucm9sZSgpID09PSAnVCcgPyAnY2wtcm9sZScgOiAnY2wtcm9sZSBjbC1yb2xlLXN0YWZmJ1wiPlxyXG4gICAgICAgICAgICAgICAge3tmZXRjaGVyLnVzZXIucm9sZU5hbWUoKX19OiB7e2ZldGNoZXIudXNlci5uYW1lfX0ge3tmZXRjaGVyLnVzZXIucm9sZSgpfX1cclxuICAgICAgICAgICAgICAgIDxlbSBjbGFzcz1cInNtYWxsXCI+e3tmZXRjaGVyLnVzZXIudXNlcklkfX08L2VtPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsLWdyYWRlci1idXR0b25cIiBAY2xpY2sucHJldmVudD1cImVtYWlsKGZldGNoZXIudXNlcilcIj5cclxuICAgICAgICAgICAgICAgICAgZW1haWwge3tmZXRjaGVyLnVzZXIucm9sZU5hbWUoKS50b0xvd2VyQ2FzZSgpfX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiY2wtZ3JhZGVyLWJ1dHRvblwiIHRhZz1cImJ1dHRvblwiIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzLycgKyBmZXRjaGVyLnVzZXIubWVtYmVyLmlkXCI+c3R1ZGVudCBncmFkZXNcclxuICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2wtZHVlXCIgdi1pZj1cImR1ZSAhPT0gbnVsbFwiPkFzc2lnbm1lbnQgZHVlIHt7dGltZShkdWUpfX0gPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIEdyYWRpbmcgaXRlbXMgLS0+XHJcbiAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gZ3JhZGVyc1wiIDpjbGFzcz1cIidjbC1ncmFkZXItaXRlbScgKyAoaXRlbS5sb2NrZWQgPyAnIGNsLWdyYWRlci1pdGVtLWxvY2tlZCcgOiAnJylcIiAgOmRhdGEtdGFnPVwiaXRlbS50YWdcIj5cclxuICAgICAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzcz1cImNsLWdyYWRlci1pdGVtLWxvY2tcIj48YSBAY2xpY2sucHJldmVudD1cImxvY2soaXRlbSlcIiB0aXRsZT1cIkxvY2svVW5sb2NrXCI+PGltZyA6c3JjPVwicm9vdCArIChpdGVtLmxvY2tlZCA/ICcvY2wvaW1nL2xvY2stb24ucG5nJyA6ICcvY2wvaW1nL2xvY2stb2ZmLnBuZycpXCIgYWx0PVwiVW5sb2NrZWRcIj48L2E+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtLm5hbWV9fTxhIHYtaWY9XCJpdGVtLnRlYW1pbmcgIT09IHVuZGVmaW5lZFwiIGNsYXNzPVwiY2wtZXh0cmEtbGlua1wiIEBjbGljay5wcmV2ZW50PVwidGVhbURpc3RyaWJ1dGUoaXRlbSlcIj5UZWFtIERpc3RyaWJ1dGU8L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS5ydWJyaWMgIT09IHVuZGVmaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtdG9nZ2xlXCI+PHAgY2xhc3M9XCJjbC1ydWJyaWMtZXhwYW5kXCI+PGE+RXhwYW5kIGZvciBydWJyaWM8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbC1ydWJyaWNibG9jayBjbC1jbGlja2FibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1odG1sPVwiaXRlbS5ydWJyaWNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPGdyYWRlLW1hbnVhbCB2LWlmPVwiaXRlbS5tYW51YWwgIT09IHVuZGVmaW5lZFwiIDppdGVtPVwiaXRlbVwiPjwvZ3JhZGUtbWFudWFsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5odG1sICE9PSB1bmRlZmluZWRcIiB2LWh0bWw9XCJpdGVtLmh0bWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoYW5kYm9vayB2LWlmPVwiaXRlbS5oYW5kYm9vayAhPT0gdW5kZWZpbmVkXCIgOml0ZW09XCJpdGVtXCIgdi1vbjpoYW5kYm9vay1kYXRhPVwiaGFuZGJvb2tEYXRhXCI+PC9oYW5kYm9vaz5cclxuICAgICAgICAgICAgICAgIDxncmFkZS1oaXN0b3J5IDpoaXN0b3J5PVwiaXRlbS5oaXN0b3J5XCI+PC9ncmFkZS1oaXN0b3J5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIFN1Ym1pc3Npb25zIC0tPlxyXG4gICAgICAgICAgICAgIDxzdWJtaXNzaW9ucyA6dXNlcj1cImZldGNoZXIudXNlclwiIDphc3NpZ250YWc9XCJhc3NpZ250YWdcIj48L3N1Ym1pc3Npb25zPlxyXG4gICAgICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cInJldmlld2luZyAhPT0gbnVsbFwiIDppcz1cInJldmlld2luZ1wiIDphc3NpZ250YWc9XCJhc3NpZ250YWdcIiA6dXNlcj1cImZldGNoZXIudXNlclwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cImdyYWRlICE9PSBudWxsXCI+Q29tcHV0ZWQgR3JhZGU6IHt7Z3JhZGV9fTwvcD5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkdyYWRlIE5vdCBBdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyIHNtYWxsIG5vdGljZVwiPkdyYWRlcyBhcmUgbm90IGF2YWlsYWJsZSB1bnRpbCBhbGwgcGFydHMgb2YgdGhlIGFzc2lnbm1lbnQgaGF2ZSBiZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGVkLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlci1mZXRjaGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgR3JhZGVIaXN0b3J5Q29tcG9uZW50VnVlIGZyb20gJy4uL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZSc7XHJcblx0aW1wb3J0IEhhbmRib29rVnVlIGZyb20gJy4uL0hhbmRib29rL0hhbmRib29rLnZ1ZSc7XHJcblx0aW1wb3J0IEdyYWRlTWFudWFsVnVlIGZyb20gJy4vR3JhZGVNYW51YWwudnVlJztcclxuXHJcblx0Y29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cdGNvbnN0IFByZXZOZXh0TWVtYmVyVnVlID0gU2l0ZS5QcmV2TmV4dE1lbWJlclZ1ZTtcclxuXHRjb25zdCBNZW1iZXJGZXRjaGVyQ29tcG9uZW50VnVlID0gU2l0ZS5NZW1iZXJGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5cdGNvbnN0IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZSA9IFNpdGUuU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50VnVlO1xyXG5cclxuXHQvKipcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkaW5nLzphc3NpZ25tZW50LzptZW1iZXJpZFxyXG5cdCAqIEFzc2lnbm1lbnQgZ3JhZGluZyBwYWdlIGZvciBhIGNvdXJzZSBtZW1iZXJcclxuICAgKiBAY29uc3RydWN0b3IgR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXJWdWVcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0cHJvcHM6IFsnYXNzaWdudGFnJywgJ21lbWJlcmlkJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Z3JhZGluZ0xpbms6ICcvY2wvY29uc29sZS9ncmFkaW5nLycgKyB0aGlzLmFzc2lnbnRhZyxcclxuXHRcdFx0XHRhc3NpZ25tZW50OiBudWxsLFxyXG5cdFx0XHRcdGdyYWRlcnM6IFtdLFxyXG5cdFx0XHRcdGdyYWRlOiBudWxsLFxyXG5cdFx0XHRcdGR1ZTogbnVsbCxcclxuXHRcdFx0XHRoYW5kYm9va1Jlc3VsdDogbnVsbCxcclxuXHRcdFx0XHRyZXZpZXdpbmc6IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0bWVtYmVyRmV0Y2hlcjogTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZSxcclxuXHRcdFx0cHJldk5leHQ6IFByZXZOZXh0TWVtYmVyVnVlLFxyXG5cdFx0XHRncmFkZUhpc3Rvcnk6IEdyYWRlSGlzdG9yeUNvbXBvbmVudFZ1ZSxcclxuXHRcdFx0c3VibWlzc2lvbnM6IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZSxcclxuXHRcdFx0aGFuZGJvb2s6IEhhbmRib29rVnVlLFxyXG4gICAgICAgICAgZ3JhZGVNYW51YWw6IEdyYWRlTWFudWFsVnVlXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5zZXRUaXRsZSgnOiBHcmFkaW5nJyk7XHJcblx0XHRcdHRoaXMuYWRkTmF2MignU3VibWl0JywgMiwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5hZGROYXYyKCdTdWJtaXQgYW5kIEV4aXQnLCAzLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdWJtaXQodHJ1ZSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5hZGROYXYyTGluaygnRXhpdCcsIDQsICcvY2wvY29uc29sZS9ncmFkaW5nLycgKyB0aGlzLmFzc2lnbnRhZyk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRmZXRjaGVkKHVzZXIpIHtcclxuXHRcdFx0XHRsZXQgc2VjdGlvbiA9IHVzZXIubWVtYmVyLmdldFNlY3Rpb24odGhpcy4kc3RvcmUpO1xyXG5cdFx0XHRcdHRoaXMuYXNzaWdubWVudCA9IHVzZXIubWVtYmVyLmdldEFzc2lnbm1lbnQodGhpcy4kc3RvcmUsIHRoaXMuYXNzaWdudGFnKTtcclxuXHRcdFx0XHR0aGlzLnNldFRpdGxlKCc6ICcgKyB1c2VyLm5hbWUgKyAnICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBHcmFkaW5nJyk7XHJcblx0XHRcdFx0aWYgKHRoaXMuYXNzaWdubWVudC5yZXZpZXcgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRoaXMucmV2aWV3aW5nID0gdGhpcy4kc2l0ZS5jb25zb2xlLlJldmlldy5yZXZpZXdzYnlmb3I7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLiRzaXRlLmFwaS5nZXQoYC9hcGkvZ3JhZGUvZ3JhZGVyLyR7dGhpcy5hc3NpZ250YWd9LyR7dGhpcy5tZW1iZXJpZH1gLCB7fSlcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJtaXQoZXhpdCwgY2FsbGJhY2spIHtcclxuXHRcdFx0XHRjb25zdCBmb3JtID0gdGhpcy4kcmVmc1snZm9ybSddO1xyXG5cdFx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cdFx0XHRcdGlmICh0aGlzLmhhbmRib29rUmVzdWx0ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ19oYW5kYm9vaycsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGFuZGJvb2tSZXN1bHQpKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvZ3JhZGUvZ3JhZGVyLyR7dGhpcy5hc3NpZ250YWd9LyR7dGhpcy5tZW1iZXJpZH1gLCBmb3JtRGF0YSlcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZXhpdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2godGhpcy4kc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlL2dyYWRpbmcvJyArIHRoaXMuYXNzaWdudGFnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHQgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGlzdHJpYnV0ZSBncmFkZSBpdGVtIHRvIGFsbCBtZW1iZXJzIG9mIGEgdGVhbS5cclxuICAgICAgICAgICAgICogQHBhcmFtIGl0ZW1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRlYW1EaXN0cmlidXRlKGl0ZW0pIHtcclxuXHRcdFx0ICAgIHRoaXMuc3VibWl0KGZhbHNlLCAoKSA9PiB7XHJcblx0XHRcdCAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZWFtaW5nOiBpdGVtLnRlYW1pbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBncmFkZVRhZzogaXRlbS50YWdcclxuICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvdGVhbS9kaXN0cmlidXRlLyR7dGhpcy5hc3NpZ250YWd9LyR7dGhpcy5tZW1iZXJpZH1gLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cdFx0XHR0YWtlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhbiBleGlzdGluZyBsb2NrZWQgZ3JhZGVyP1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2tlZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmdyYWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYodGhpcy5ncmFkZXJzW2ldLmxvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tlZCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0Y29uc3QgZ3JhZGVyID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGVyJyk7XHJcblx0XHRcdFx0dGhpcy5kdWUgPSBncmFkZXIuYXR0cmlidXRlcy5kdWUgIT09IHVuZGVmaW5lZCA/IGdyYWRlci5hdHRyaWJ1dGVzLmR1ZSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGdyYWRlciBvZiBncmFkZXIuYXR0cmlidXRlcy5ncmFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGdyYWRlci5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0dGhpcy5ncmFkZXJzID0gZ3JhZGVyLmF0dHJpYnV0ZXMuZ3JhZGVycztcclxuXHRcdFx0XHR0aGlzLmdyYWRlID0gZ3JhZGVyLmF0dHJpYnV0ZXMuZ3JhZGU7XHJcblxyXG5cdFx0XHRcdGlmKGxvY2tlZCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdCAgICB0aGlzLmdyYWRlcnNbbG9ja2VkXS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHRcdFx0XHR0aGlzLiRmb3JjZVVwZGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaW5zdGFsbFJ1YnJpY0NsaWNrZXJzKCk7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLm1lc3NhZ2UoJ2NsLWdyYWRlcy1ncmFkZXItaW5zdGFsbGVkJyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgbG9jayhpdGVtKSB7XHJcbiAgICAgICAgICAgICAgaWYoaXRlbS5sb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBncmFkZXIgb2YgdGhpcy5ncmFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGdyYWRlci5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cdFx0XHQvLy8gSW5zdGFsbCBjbGlja2VycyBmb3IgUnVicmljIGl0ZW1zIHRoYXQgd2lsbCBhdXRvZmlsbCB0aGVtLlxyXG5cdFx0XHRpbnN0YWxsUnVicmljQ2xpY2tlcnMoKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2VsZWN0b3JzID0gWydkaXYuY2wtY2xpY2thYmxlIGxpLml0ZW0nLCAnZGl2LmNsLWNsaWNrYWJsZSB1bC5pdGVtcyBsaScsICdkaXYuY2wtY2xpY2thYmxlIHAuaXRlbSddO1xyXG5cdFx0XHRcdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjbGlja2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIGNsaWNrYWJsZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZGF0YXNldC5jbGlja2FibGUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZENvbnRlbnQoZWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlJywgJ3llcycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLy8gQWRkIHJ1YnJpYyBjb250ZW50IHRvIHRoZSBlbGVtZW50IGNvbW1lbnQgdGV4dGFyZWFcclxuXHRcdFx0YWRkQ29udGVudChlbGVtZW50KSB7XHJcblx0XHRcdFx0Y29uc3QgY29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdC8vIFdvcmsgdXAgdW50aWwgd2UgZmluZCB0aGUgY2wtZ3JhZGVyLWl0ZW0gZGl2XHJcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbC1ncmFkZXItaXRlbScpKSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gRmluZCB0aGUgaXRlbSB0aGlzIGRvZXMgd2l0aFxyXG5cdFx0XHRcdGNvbnN0IHRhZyA9IGVsZW1lbnQuZGF0YXNldC50YWc7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5ncmFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKGl0ZW0udGFnID09PSB0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm1hbnVhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm1hbnVhbC5jb21tZW50Lmxlbmd0aCA+IDAgJiYgaXRlbS5tYW51YWwuY29tbWVudC5tYXRjaCgvXFxuJC8pID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubWFudWFsLmNvbW1lbnQgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubWFudWFsLmNvbW1lbnQgKz0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0Ly8gRmluZCBhIHRleHRhcmVhIGluc2lkZSB0aGlzXHJcblx0XHRcdFx0Zm9yIChsZXQgdGV4dGFyZWEgb2YgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpKSB7XHJcblx0XHRcdFx0XHR0ZXh0YXJlYS52YWx1ZSA9IHRleHRhcmVhLnZhbHVlICsgY29udGVudCArIFwiXFxuXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1lKHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCh0LCAnc2hvcnQnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZW1haWwodXNlcikge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICdtYWlsdG86JyArIHVzZXIuZW1haWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdGhhbmRib29rRGF0YShkYXRhKSB7XHJcblx0XHRcdFx0dGhpcy5oYW5kYm9va1Jlc3VsdCA9IGRhdGE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxoMj57e3J1YnJpYy5uYW1lfX08L2gyPlxyXG5cclxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXQoKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2wtcnVicmljYmxvY2sgY2wtc2hvd1wiIHYtaHRtbD1cInJ1YnJpYy5zaG93XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgcmVmPVwiZWRpdG9yXCI+PC9kaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuICAgKiBFZGl0b3IgZm9yIGEgc2luZ2xlIFJ1YnJpY1xyXG4gICAqIENvbXBvbmVudCBpbiAvY2wvY29uc29sZS9ydWJyaWMvOmFzc2lnbnRhZ1xyXG4gICAqIEBjb25zdHJ1Y3RvciBSdWJyaWNFZGl0b3JWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczogWydhc3NpZ250YWcnLCAncnVicmljJ10sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy4kcmVmc1snZWRpdG9yJ107XHJcblx0XHRcdHRoaXMuZWRpdG9yID0gbmV3IHRoaXMuJHNpdGUuRWRpdG9yKGVsZW1lbnQsIHtcclxuXHRcdFx0XHR2YWx1ZTogdGhpcy5ydWJyaWMucnVicmljLFxyXG5cdFx0XHRcdHRhYjogdHJ1ZSxcclxuXHRcdFx0XHRhdXRvSW5kZW50OiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5lZGl0b3IudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZWQoKTtcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNoYW5nZWQoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZXIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuXHRcdFx0XHRcdHRoaXMudGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IG51bGw7XHJcblx0XHRcdFx0XHR0aGlzLnJ1YnJpYy5zaG93ID0gdGhpcy4kc2l0ZS5TYW5pdGl6ZS5zYW5pdGl6ZSh0aGlzLmVkaXRvci50ZXh0YXJlYS52YWx1ZSk7XHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0KCkge1xyXG5cdFx0XHRcdHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvZ3JhZGUvcnVicmljcy8nICsgdGhpcy5hc3NpZ250YWcgKyAnLycgKyB0aGlzLnJ1YnJpYy50YWcsIHtcclxuXHRcdFx0XHRcdHJ1YnJpYzogdGhpcy5ydWJyaWMuc2hvd1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCAnUnVicmljIHN1Y2Nlc3NmdWxseSBzYXZlZCcpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2wtdG9nZ2xlXCI+PHA+PGE+RXhwYW5kIGZvciBpbnN0cnVjdGlvbnMgb24gY3JlYXRpbmcgcnVicmljcy48L2E+PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLXRvZ2dsZWJsb2NrXCI+XHJcbiAgICAgIDxwPlJ1YnJpY3MgYXJlIGVudGVyZWQgYXMgSFRNTC4gQSBjb21tb24gZm9ybWF0IGlzIHRvXHJcbiAgICAgICAgY3JlYXRlIGxpc3RzIHVzaW5nICZsdDt1bCZndDsgYW5kICZsdDtsaSZndDsgdGFncy48L3A+XHJcbiAgICAgIDxwPkNvbnRlbnRzIG9mIGFuICZsdDtsaSZndDsgb3IgJmx0O3AmZ3Q7IHRhZyBjYW4gYmUgbWFrZVxyXG4gICAgICAgIGNsaWNrYWJsZSBzbyB0aGV5IGF1dG9tYXRpY2FsbHkgYXBwZWFyIGluIHRoZSBjb21tZW50XHJcbiAgICAgICAgd2luZG93IGJ5IGFkZGluZyB0aGUgY2xhc3MgJ2l0ZW0nLiBBbGwgJmx0O2xpJmd0OyBjaGlsZHJlblxyXG4gICAgICAgIG9mIGEgJmx0O3VsJmd0OyBjYW4gYmUgbWFkZSBjbGlja2FibGUgYnkgYWRkaW5nIHRoZVxyXG4gICAgICAgIGNsYXNzICdpdGVtcyc6PC9wPlxyXG4gICAgICA8cHJlIGNsYXNzPVwiY29kZVwiPlxyXG4mbHQ7dWwmZ3Q7XHJcbiAgICZsdDtsaSBjbGFzcz1cIml0ZW1cIiZndDtUaGlzIGl0ZW0gd2lsbCBiZSBjbGlja2FibGUmbHQ7L2xpJmd0O1xyXG4gICAmbHQ7bGkmZ3Q7VGhpcyBpdGVtIHdpbGwgbm90IGJlIGNsaWNrYWJsZSZsdDsvbGkmZ3Q7XHJcbiZsdDsvdWwmZ3Q7XHJcblxyXG4mbHQ7cCBjbGFzcz1cIml0ZW1cIiZndDtBbmQgdGhpcyB3aWxsIGJlIGNsaWNrYWJsZSZsdDsvcCZndDtcclxuXHJcbiZsdDt1bCBjbGFzcz1cIml0ZW1zXCImZ3Q7XHJcbiAgICZsdDtsaSZndDtBbGwgb2YgdGhlc2UgaXRlbXMgd2lsbCBiZSBjbGlja2FibGUmbHQ7L2xpJmd0O1xyXG4gICAmbHQ7bGkmZ3Q7VGhpcyBvbmUsIHRvbyEmbHQ7L2xpJmd0O1xyXG4mbHQ7L3VsJmd0O1xyXG4gICAgICA8L3ByZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtZm9yPVwicnVicmljIGluIHJ1YnJpY3NcIiBjbGFzcz1cImNsLXJ1YnJpY1wiPlxyXG4gICAgICA8cnVicmljLWVkaXRvciA6YXNzaWdudGFnPVwiYXNzaWdudGFnXCIgOnJ1YnJpYz1cInJ1YnJpY1wiPjwvcnVicmljLWVkaXRvcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgUnVicmljRWRpdG9yVnVlIGZyb20gJy4vUnVicmljRWRpdG9yLnZ1ZSc7XHJcblxyXG5cdGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHRjb25zdCBNZW1iZXIgPSBTaXRlLk1lbWJlcjtcclxuXHJcblx0LyoqXHJcblx0ICogRWRpdG9yIHBhZ2UgZm9yIGFsbCBydWJyaWNzIGZvciBhbiBhc3NpZ25tZW50XHJcblx0ICogL2NsL2NvbnNvbGUvcnVicmljLzphc3NpZ250YWdcclxuXHQgKiBAY29uc3RydWN0b3IgUnVicmljc0VkaXRvclZ1ZVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRwcm9wczogWydhc3NpZ250YWcnXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0YTogTWVtYmVyLlRBLFxyXG5cdFx0XHRcdHJ1YnJpY3M6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHJ1YnJpY0VkaXRvcjogUnVicmljRWRpdG9yVnVlXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IEFzc2lnbm1lbnQgR3JhZGluZycpO1xyXG5cdFx0XHR0aGlzLnRpbWVyID0gbnVsbDtcclxuXHJcblx0XHRcdGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG5cdFx0XHRsZXQgbWVtYmVyID0gdXNlci5tZW1iZXI7XHJcblxyXG5cdFx0XHR0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG5cdFx0XHR0aGlzLmFzc2lnbm1lbnQgPSB0aGlzLnNlY3Rpb24uZ2V0QXNzaWdubWVudCh0aGlzLmFzc2lnbnRhZyk7XHJcblxyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIFJ1YnJpY3MnKTtcclxuXHJcblx0XHRcdHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS9ncmFkZS9ydWJyaWNzLycgKyB0aGlzLmFzc2lnbm1lbnQudGFnLCB7fSlcclxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJ1YnJpY3MgPSByZXNwb25zZS5nZXREYXRhKCdydWJyaWNzJykuYXR0cmlidXRlcztcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgcnVicmljIG9mIHRoaXMucnVicmljcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNldChydWJyaWMsICdzaG93JywgcnVicmljLnJ1YnJpYyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx0YWJsZSBjbGFzcz1cImNsLWhhbmRib29rXCI+XHJcbiAgICAgIDx0cj48dGg+Q2F0ZWdvcnk8YnI+TXVsdGlwbGllcjoge3tpdGVtLm11bHRpcGxpZXJ9fTwvdGg+PHRoPkRlZHVjdGlvbjxicj4wIHRvIG1heDwvdGg+PC90cj5cclxuICAgICAgPHRyIHYtZm9yPVwiY2F0ZWdvcnkgaW4gaXRlbS5oYW5kYm9vay5jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjYXRlZ29yeS5ydWJyaWMgIT09IHVuZGVmaW5lZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtdG9nZ2xlIGNsLXNpbmdsZS1zcGFjZVwiPjxzcGFuPjxhPnt7Y2F0ZWdvcnkubmFtZX19PC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtcnVicmljYmxvY2tcIj48ZGl2IHYtaHRtbD1cImNhdGVnb3J5LnJ1YnJpY1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7Y2F0ZWdvcnkubmFtZX19PC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhcmVhZG9ubHlcIj5cclxuICAgICAgICAgICAgPGlucHV0IHYtZm9yPVwiZGVkdWN0IGluIChjYXRlZ29yeS5kZWR1Y3QrMSlcIiB2LW1vZGVsPVwibWV0YWRhdGFbY2F0ZWdvcnkudGFnXVwiIDp2YWx1ZT1cImRlZHVjdC0xXCIgdHlwZT1cInJhZGlvXCIgQGNoYW5nZT1cImNvbXB1dGVcIj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8c3BhbiB2LWVsc2U+e3tkZWR1Y3Rpb24obWV0YWRhdGFbY2F0ZWdvcnkudGFnXSl9fTwvc3Bhbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGlucHV0IHYtaWY9XCIhcmVhZG9ubHlcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJtZXRhZGF0YVsnX21hbnVhbF90ZXh0J11cIj5cclxuICAgICAgICAgIDxzcGFuIHYtZWxzZT57e21ldGFkYXRhWydfbWFudWFsX3RleHQnXX19PC9zcGFuPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhcmVhZG9ubHlcIj5cclxuICAgICAgICAgIDxpbnB1dCB2LWZvcj1cImRlZHVjdCBpbiA1XCIgdi1tb2RlbD1cIm1ldGFkYXRhWydfbWFudWFsJ11cIiA6dmFsdWU9XCJkZWR1Y3QtMVwiIHR5cGU9XCJyYWRpb1wiIEBjaGFuZ2U9XCJjb21wdXRlXCI+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8c3BhbiB2LWVsc2U+e3tkZWR1Y3Rpb24obWV0YWRhdGFbJ19tYW51YWwnXSl9fTwvc3Bhbj5cclxuICAgICAgPC90ZD48L3RyPlxyXG4gICAgICA8dHIgY2xhc3M9XCJjbC1pbnRlcm5hbFwiPjx0aD5Db21tZW50PC90aD48dGg+RGVkdWN0aW9uPC90aD48L3RyPlxyXG4gICAgICA8dHI+PHRkPlxyXG4gICAgICAgIDx0ZXh0YXJlYSB2LWlmPVwiIXJlYWRvbmx5XCIgcm93cz1cIjNcIiB2LW1vZGVsPVwibWV0YWRhdGFbJ19jb21tZW50J11cIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCIgdi1lbHNlPnt7bWV0YWRhdGFbJ19jb21tZW50J119fTwvZGl2PlxyXG4gICAgICA8L3RkPjx0ZCBjbGFzcz1cImNsLWRlZHVjdFwiPnt7dG90YWx9fTwvdGQ+PC90cj5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG4gICAqIEhhbmRib29rIGVkaXRvci92aWV3aW5nIFZ1ZSBjb21wb25lbnRcclxuICAgKlxyXG4gICAqIFVzZSBieSBib3RoIHRoZSBzdHVkZW50IGdyYWRlIHByZXNlbnRhdGlvbiBwYWdlIGFuZCB0aGVcclxuICAgKiBhc3NpZ25tZW50IGdyYWRpbmcgcGFnZS5cclxuICAgKiBAY29uc3RydWN0b3IgSGFuZGJvb2tWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpdGVtOiB7ZGVmYXVsdDoge319LFxyXG5cdFx0XHRyZWFkb25seToge2RlZmF1bHQ6IGZhbHNlfVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdGl0ZW06IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMudGFrZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1ldGFkYXRhOiB7fSxcclxuXHRcdFx0XHR0b3RhbDogMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy50YWtlKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHR0YWtlKCkge1xyXG5cdFx0XHRcdHRoaXMubWV0YWRhdGEgPSB7fTtcclxuXHRcdFx0XHRmb3IgKGxldCBjYXRlZ29yeSBvZiB0aGlzLml0ZW0uaGFuZGJvb2suY2F0ZWdvcmllcykge1xyXG5cdFx0XHRcdFx0bGV0IGNhdFBvaW50cyA9IHRoaXMuaXRlbS5tZXRhZGF0YVtjYXRlZ29yeS50YWddO1xyXG5cdFx0XHRcdFx0aWYgKGNhdFBvaW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdGNhdFBvaW50cyA9IDA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMubWV0YWRhdGEsIGNhdGVnb3J5LnRhZywgY2F0UG9pbnRzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCBjYXRQb2ludHMgPSB0aGlzLml0ZW0ubWV0YWRhdGFbJ19tYW51YWwnXTtcclxuXHRcdFx0XHRpZiAoY2F0UG9pbnRzID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdGNhdFBvaW50cyA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5tZXRhZGF0YSwgJ19tYW51YWwnLCBjYXRQb2ludHMpO1xyXG5cclxuXHRcdFx0XHRsZXQgbWFudWFsVGV4dCA9IHRoaXMuaXRlbS5tZXRhZGF0YVsnX21hbnVhbF90ZXh0J107XHJcblx0XHRcdFx0aWYgKG1hbnVhbFRleHQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0bWFudWFsVGV4dCA9ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5tZXRhZGF0YSwgJ19tYW51YWxfdGV4dCcsIG1hbnVhbFRleHQpO1xyXG5cclxuXHRcdFx0XHRsZXQgY29tbWVudCA9IHRoaXMuaXRlbS5tZXRhZGF0YVsnX2NvbW1lbnQnXTtcclxuXHRcdFx0XHRpZiAoY29tbWVudCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRjb21tZW50ID0gJyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJHNldCh0aGlzLm1ldGFkYXRhLCAnX2NvbW1lbnQnLCBjb21tZW50KTtcclxuXHJcblx0XHRcdFx0dGhpcy5jb21wdXRlKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbXB1dGUoKSB7XHJcblx0XHRcdFx0bGV0IHRvdGFsID0gLXRoaXMubWV0YWRhdGFbJ19tYW51YWwnXTtcclxuXHRcdFx0XHRmb3IgKGxldCBjYXRlZ29yeSBvZiB0aGlzLml0ZW0uaGFuZGJvb2suY2F0ZWdvcmllcykge1xyXG5cdFx0XHRcdFx0dG90YWwgLT0gdGhpcy5tZXRhZGF0YVtjYXRlZ29yeS50YWddO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dG90YWwgKz0gdGhpcy5pdGVtLmhhbmRib29rLmZyZWU7XHJcblx0XHRcdFx0aWYgKHRvdGFsID4gMCkge1xyXG5cdFx0XHRcdFx0dG90YWwgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0b3RhbCAqPSB0aGlzLml0ZW0ubXVsdGlwbGllcjtcclxuXHRcdFx0XHR0aGlzLnRvdGFsID0gdG90YWw7XHJcblxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2hhbmRib29rLWRhdGEnLCB7J21ldGFkYXRhJzogdGhpcy5tZXRhZGF0YSwgJ3RvdGFsJzogdGhpcy50b3RhbH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWR1Y3Rpb24oZGVkdWN0KSB7XHJcblx0XHRcdFx0aWYgKGRlZHVjdCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLWRlZHVjdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbC1hdXRvYmFja1wiPjwvZGl2PlxyXG4gICAgICA8cCBjbGFzcz1cImNsLXRpdGxlXCI+e3tqc29uLmFzc2lnbm1lbnQubmFtZX19PC9wPlxyXG4gICAgICA8cCB2LWlmPVwianNvbi5kaXNwdXRlICE9PSBudWxsXCIgY2xhc3M9XCJjbC1kaXNwdXRlXCI+UGxlYXNlIGRpcmVjdCBhbGwgZ3JhZGluZyBpc3N1ZXMgdG8gPHNwYW4gdi1odG1sPVwianNvbi5kaXNwdXRlXCI+PC9zcGFuPjwvcD5cclxuICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4ganNvbi5ncmFkZXNcIiB2LWlmPVwiaXRlbS5odG1sICE9PSB1bmRlZmluZWRcIj5cclxuICAgICAgICA8aDI+e3tpdGVtLm5hbWV9fTwvaDI+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5oYW5kYm9vayA9PT0gdW5kZWZpbmVkXCIgdi1odG1sPVwiaXRlbS5odG1sXCI+PC9kaXY+XHJcbiAgICAgICAgPGhhbmRib29rIHYtZWxzZSA6aXRlbT1cIml0ZW1cIiByZWFkb25seT1cInRydWVcIj48L2hhbmRib29rPlxyXG4gICAgICAgPGdyYWRlLWhpc3RvcnkgOmhpc3Rvcnk9XCJpdGVtLmhpc3RvcnlcIj48L2dyYWRlLWhpc3Rvcnk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGVcIj5cclxuICAgICAgICA8cCB2LWlmPVwianNvbi5ncmFkZSAhPT0gbnVsbFwiPkNvbXB1dGVkIEdyYWRlOiB7e2pzb24uZ3JhZGV9fTwvcD5cclxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgPHA+R3JhZGUgTm90IEF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyIHNtYWxsIG5vdGljZVwiPkdyYWRlcyBhcmUgbm90IGF2YWlsYWJsZSB1bnRpbCBhbGwgcGFydHMgb2YgdGhlIGFzc2lnbm1lbnQgaGF2ZSBiZWVuIGdyYWRlZC48L3A+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbC1hdXRvYmFja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBHcmFkZUhpc3RvcnlDb21wb25lbnQgZnJvbSAnLi4vVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlJztcclxuXHRpbXBvcnQgSGFuZGJvb2tWdWUgZnJvbSAnLi4vSGFuZGJvb2svSGFuZGJvb2sudnVlJztcclxuXHJcblx0Y29uc3QgVXNlclZ1ZUJhc2UgPSBTaXRlLlVzZXJWdWVCYXNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgYXNzaWdubWVudCBncmFkaW5nIHBhZ2UgZm9yIHByZXNlbnRhdGlvbiBmb3IgYSB1c2VyXHJcblx0ICpcclxuXHQgKiAvY2wvZ3JhZGUvOmFzc2lnbm1lbnRcclxuXHQgKiBAY29uc3RydWN0b3IgR3JhZGVBc3NpZ25tZW50VnVlXHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0J2V4dGVuZHMnOiBVc2VyVnVlQmFzZSxcclxuXHRcdHByb3BzOiBbJ2pzb24nXSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Z3JhZGVIaXN0b3J5OiBHcmFkZUhpc3RvcnlDb21wb25lbnQsXHJcblx0XHRcdGhhbmRib29rOiBIYW5kYm9va1Z1ZVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiAgJyArIHRoaXMuanNvbi5hc3NpZ25tZW50LnNob3J0TmFtZSArICcgR3JhZGUgZm9yICcgKyB0aGlzLnVzZXIuZGlzcGxheU5hbWUoKSk7XHJcblxyXG5cdFx0XHRjb25zdCBtZW51ID0gW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdHcmFkZXMnLCBjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLiRzaXRlLnJvb3QgKyAnL2NsL2dyYWRlcyc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldE1lbnUobWVudSk7XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJncmFkZSAhPT0gbnVsbFwiPlxyXG4gICAgICAgIDxwPjxzcGFuIHYtaHRtbD1cImpzb24uYmVmb3JlXCI+PC9zcGFuPjwvcD5cclxuICAgICAgICA8cCB2LWlmPVwianNvbi5kaXNwdXRlICE9PSBudWxsXCIgY2xhc3M9XCJjZW50ZXJcIj5QbGVhc2UgZGlyZWN0IGFsbCBncmFkaW5nIGlzc3VlcyB0byA8c3BhbiB2LWh0bWw9XCJqc29uLmRpc3B1dGVcIj48L3NwYW4+PC9wPlxyXG5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5Bc3NpZ25tZW50PC90aD48dGg+Jm5ic3A7PC90aD48dGg+R3JhZGU8L3RoPjx0aD4mbmJzcDs8L3RoPjx0aD5HcmFkZTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImNhdGVnb3J5IGluIGdyYWRlLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiY2wtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj57e2NhdGVnb3J5Lm5hbWV9fTwvdGQ+PHRkPnt7Y2F0ZWdvcnkucG9pbnRzfX0lPC90ZD48dGQ+e3tjYXRlZ29yeS5ncmFkZX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImNsLWFzc2lnbm1lbnRcIiB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIiA6a2V5PVwiYXNzaWdubWVudC50YWdcIiB2LWlmPVwiYXNzaWdubWVudC5wb2ludHMgPiAwXCI+XHJcbiAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwicm9vdCArICcvY2wvZ3JhZGUvJyArIGFzc2lnbm1lbnQudGFnXCI+e3thc3NpZ25tZW50Lm5hbWV9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e01hdGgucm91bmQoYXNzaWdubWVudC5wb2ludHMgKiAxMCkgLyAxMH19JTwvdGQ+PHRkPnt7YXNzaWdubWVudC5ncmFkZX19PC90ZD48dGQgY29sc3Bhbj1cIjJcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGVhY2ggYXNzaWdubWVudCBmb3IgbW9yZSBncmFkaW5nIGRldGFpbDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPkNvbXB1dGVkIEdyYWRlOiB7e2dyYWRlLmdyYWRlfX0gb3V0IG9mIHt7Z3JhZGUuYXZhaWxhYmxlfX0gYXZhaWxhYmxlIHBvaW50c3t7cGVyfX08L3A+XHJcbiAgICAgICAgPHA+PHNwYW4gdi1odG1sPVwianNvbi5hZnRlclwiPjwvc3Bhbj48L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBjb25zdCBVc2VyVnVlQmFzZSA9IFNpdGUuVXNlclZ1ZUJhc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY291cnNlIGdyYWRpbmcgcGFnZSBmb3IgcHJlc2VudGF0aW9uIG9mIGFsbCBncmFkZXMgZm9yIGEgdXNlclxyXG4gICAgICpcclxuICAgICAqIC9jbC9ncmFkZXNcclxuICAgICAqIEBjb25zdHJ1Y3RvciBHcmFkZXNWdWVcclxuICAgICAqL1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAnZXh0ZW5kcyc6IFVzZXJWdWVCYXNlLFxyXG4gICAgICAgIHByb3BzOiBbJ2pzb24nXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGdyYWRlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGVyOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpdGxlKCdHcmFkZXMgZm9yICcgKyB0aGlzLnVzZXIuZGlzcGxheU5hbWUoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgdGhpcy5zZXRUaXRsZSgnOiBHcmFkZXMgJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyYWRlID0gdGhpcy5qc29uO1xyXG4gICAgICAgICAgICBpZih0aGlzLmdyYWRlLmF2YWlsYWJsZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyID0gJyAoJyArICh0aGlzLmdyYWRlLmdyYWRlIC8gdGhpcy5ncmFkZS5hdmFpbGFibGUgKiAxMDApLnRvRml4ZWQoMSkgKyAnJSknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1ncmFkZS1oaXN0b3J5XCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJoaXN0b3J5Mi5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cImhpc3RvcnkyLmxlbmd0aCA+IDFcIiBjbGFzcz1cImNsLXRvZ2dsZVwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXhwYW5kZXJcIj48YT57e2Rpc3BsYXkoaGlzdG9yeTJbMF0pfX0gLyBFeHBhbmQgZm9yIGFkZGl0aW9uYWwgZ3JhZGluZyBoaXN0b3J5PC9hPjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGVzXCI+XHJcbiAgICAgICAgICA8cCB2LWZvcj1cImggaW4gaGlzdG9yeTJcIj57e2Rpc3BsYXkoaCl9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgIDxwPnt7ZGlzcGxheShoaXN0b3J5MlswXSl9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2hpc3RvcnknXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkyOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgaGlzdG9yeTogZnVuY3Rpb24odG8sIGZtKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5MiA9IHRoaXMuaGlzdG9yeS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICBpZih0aGlzLmhpc3RvcnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpc3RvcnkyID0gdGhpcy5oaXN0b3J5LnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgZGlzcGxheShoaXN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZ3JhZGVyID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3N0YWZmJ10oaGlzdG9yeS5ncmFkZXIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGdyYWRlck5hbWUgPSBncmFkZXIgIT09IG51bGwgPyBncmFkZXIuZGlzcGxheU5hbWUoKSA6IFwiSW52YWxpZFwiO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgoaGlzdG9yeS50aW1lLCAnc2hvcnQnKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAnIGJ5ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgZ3JhZGVyTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4gIGRpdi5jbC1ncmFkZS1oaXN0b3J5IHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gIH1cclxuXHJcbiAgcC5leHBhbmRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBkaXYuZ3JhZGVzIHtcclxuICAgIHBhZGRpbmc6IDJweCAwIDJweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAycHggMCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPG5hdiBjbGFzcz1cImNsLW5hdlwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzPVwiZGl2aWRlcnNcIj5cclxuICAgICAgICA8bGk+PGEgOmhyZWY9XCJob21lTGlua1wiPjxzcGFuIGNsYXNzPVwiaG9tZVwiPkhvbWU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBtZW51XCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJpdGVtLmNsaWNrKClcIj57e2l0ZW0ubmFtZX19PC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydtZW51J10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBob21lTGluazogU2l0ZS5yb290ICsgJy8nXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCB7R3JhZGVzRmFjdG9yeX0gZnJvbSAnLi9qcy9HcmFkZXNGYWN0b3J5JztcclxuaW1wb3J0IHtHcmFkZXNDb25zb2xlfSBmcm9tICcuL2pzL0NvbnNvbGUvR3JhZGVzQ29uc29sZSdcclxuaW1wb3J0ICcuL19ncmFkZXMuc2Nzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgR3JhZGVzID0gR3JhZGVzRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuXHJcbmlmKFNpdGUuU2l0ZS5jb25zb2xlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIEdyYWRlc0NvbnNvbGUuaW5zdGFsbChTaXRlLlNpdGUuY29uc29sZSk7XHJcbn1cclxuIiwiaW1wb3J0IEdyYWRpbmdWdWUgZnJvbSAnLi9HcmFkaW5nLnZ1ZSc7XHJcbmltcG9ydCBHcmFkaW5nQXNzaWdubWVudFZ1ZSBmcm9tICcuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZSc7XHJcbmltcG9ydCBHcmFkaW5nQXNzaWdubWVudE1lbWJlclZ1ZSBmcm9tICcuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZSdcclxuaW1wb3J0IEdyYWRlc0xpbmtzVnVlIGZyb20gJy4vR3JhZGVzTGlua3MudnVlJztcclxuaW1wb3J0IEdyYWRlc0FsbFZ1ZSBmcm9tICcuL0dyYWRlc0FsbC52dWUnO1xyXG5pbXBvcnQgR3JhZGVzTWVtYmVyVnVlIGZyb20gJy4vR3JhZGVzTWVtYmVyLnZ1ZSc7XHJcbmltcG9ydCBSdWJyaWNzRWRpdG9yVnVlIGZyb20gJy4vUnVicmljc0VkaXRvci52dWUnO1xyXG5cclxuY29uc3QgTWVtYmVyID0gU2l0ZS5NZW1iZXI7XHJcblxyXG4vKipcclxuICogVGhlIGdyYWRlcyBjb25zb2xlIGNvbXBvbmVudC5cclxuICpcclxuICogSGFuZGxlcyBpbnN0YWxsYXRpb25zIGluIHRoZSBjb25zb2xlIHN5c3RlbS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR3JhZGVzQ29uc29sZSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogSW5zdGFsbCBmdW5jdGlvbmFsaXR5IGludG8gdGhlIGNvbnNvbGUgc3lzdGVtLlxyXG4gKiBAcGFyYW0gQ29uc29sZVxyXG4gKi9cclxuR3JhZGVzQ29uc29sZS5pbnN0YWxsID0gZnVuY3Rpb24oQ29uc29sZSkge1xyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcbiAgICAgICAgYXRMZWFzdDogTWVtYmVyLkdSQURFUixcclxuICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgIGF0TGVhc3Q6IE1lbWJlci5HUkFERVIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnR3JhZGluZycsXHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2dyYWRpbmcnLFxyXG4gICAgICAgICAgICBvcmRlcjogNCxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBHcmFkaW5nVnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZFJvdXRlcyhbXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRpbmcvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogR3JhZGluZ0Fzc2lnbm1lbnRWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGluZy86YXNzaWdudGFnLzptZW1iZXJpZCcsIGNvbXBvbmVudDogR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXJWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvcnVicmljLzphc3NpZ250YWcnLCBjb21wb25lbnQ6IFJ1YnJpY3NFZGl0b3JWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGVzL2xpbmtzJywgY29tcG9uZW50OiBHcmFkZXNMaW5rc1Z1ZX0sXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRlcy9hbGwnLCBjb21wb25lbnQ6IEdyYWRlc0FsbFZ1ZX0sXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRlcy86bWVtYmVyaWQnLCBjb21wb25lbnQ6IEdyYWRlc01lbWJlclZ1ZSwgcHJvcHM6IHRydWV9XHJcbiAgICBdKTtcclxuXHJcbiAgICBDb25zb2xlLnRhYmxlcy5hZGQoe1xyXG4gICAgICAgIHRpdGxlOiAnR3JhZGVzJyxcclxuICAgICAgICBvcmRlcjogNDAsXHJcbiAgICAgICAgYXBpOiAnL2FwaS9ncmFkZS90YWJsZXMnXHJcbiAgICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtQYWdlVnVlfSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlVnVlJztcclxuaW1wb3J0IEdyYWRlQXNzaWdubWVudFZ1ZSBmcm9tICcuL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZSc7XHJcbmltcG9ydCBHcmFkZXNWdWUgZnJvbSAnLi9Vc2VyL0dyYWRlcy52dWUnO1xyXG5pbXBvcnQgUGFnZU5hdiBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgR3JhZGVzRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5HcmFkZXNGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcbiAgICBjb25zdCBHcmFkZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIH1cclxuXHJcbiAgICBzaXRlLnJlYWR5KCgpID0+IHtcclxuICAgICAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlLWFzc2lnbm1lbnQnLCAnQXNzaWdubWVudCBHcmFkZScsIEdyYWRlQXNzaWdubWVudFZ1ZSwgUGFnZU5hdik7XHJcbiAgICAgICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1ncmFkZXMnLCAnR3JhZGVzJywgR3JhZGVzVnVlLCBQYWdlTmF2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBHcmFkZXM7XHJcbn0iLCIvKipcclxuICogQmFzaWMgVnVlLWJhc2VkIHNpdGUgcGFnZSBzdGFydGVyXHJcbiAqXHJcbiAqIEhvdyB0byB1c2U6XHJcbiAqIEBjb2RlXHJcbiAqIHNpdGUucmVhZHkoKCkgPT4ge1xyXG4gKiAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlLWFzc2lnbm1lbnQnLCAnQXNzaWdubWVudCBHcmFkZScsIEdyYWRlQXNzaWdubWVudFZ1ZSk7XHJcbiAqICAgIFBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtZ3JhZGVzJywgJ0dyYWRlcycsIEdyYWRlc1Z1ZSk7XHJcbiAqIH0pO1xyXG4gKiBAZW5kY29kZVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3IgUGFnZVZ1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBhZ2VWdWUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHBhZ2UgaW4gYSBnaXZlbiBjb21wb25lbnQsIHJlcGxhY2luZyB0aGUgcHJvdmlkZWRcclxuICogc2VsZWN0b3IuIFRoZSBzZWxlY3RvciBpcyBhc3N1bWVkIHRvIGNvbnRhaW4gSlNPTiBkYXRhIHRoYXQgaXNcclxuICogdGhlbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGluIHRoZSBqc29uIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciBhIGRpdiB0byByZXBsYWNlIHdpdGggdGhlIHZpZXcuXHJcbiAqIEBwYXJhbSB0aXRsZSBJbml0aWFsIHRpdGxlIHRvIGFwcGx5IHRvIHRoZSBwYWdlXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IHRvIGRpc3BsYXkgKFZ1ZSlcclxuICogQHBhcmFtIG5hdiBPcHRpb25hbCBuYXZpZ2F0aW9uIGNvbXBvbmVudCwgbGlrZSBQYWdlTmF2XHJcbiAqL1xyXG5QYWdlVnVlLmNyZWF0ZSA9IGZ1bmN0aW9uKHNlbCwgdGl0bGUsIGNvbXBvbmVudCwgbmF2KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmF2dGFnID0gbmF2ICE9PSB1bmRlZmluZWQgPyAnPHBhZ2UtbmF2IDptZW51PVwibWVudVwiPjwvcGFnZS1uYXY+JyA6ICcnO1xyXG4gICAgbGV0IHRlbXBsYXRlID0gYDxkaXY+PHNpdGUtaGVhZGVyIDp0aXRsZT1cInRpdGxlXCI+JHtuYXZ0YWd9PC9zaXRlLWhlYWRlcj5cclxuPHBhZ2UtdnVlIDpqc29uPVwianNvblwiPjwvcGFnZS12dWU+PHNpdGUtZm9vdGVyPjwvc2l0ZS1mb290ZXI+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgY29uc3QgSGVhZGVyID0gU2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcclxuICAgIGNvbnN0IEZvb3RlciA9IFNpdGUuaW5mby5mb290ZXIuY29tcG9uZW50KCk7XHJcblxyXG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBTaXRlLnN0b3JlO1xyXG4gICAgY29uc3Qgc2l0ZSA9IFNpdGUuU2l0ZTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXHJcbiAgICAgICAgICAgICdzaXRlLWZvb3Rlcic6IEZvb3RlcixcclxuICAgICAgICAgICAgJ3BhZ2UtdnVlJzogY29tcG9uZW50XHJcbiAgICAgICAgfTtcclxuICAgIGlmKG5hdiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29tcG9uZW50c1sncGFnZS1uYXYnXSA9IG5hdjtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgU2l0ZS5WdWUoe1xyXG4gICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgIHNpdGUsXHJcbiAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGpzb246IGpzb24sXHJcbiAgICAgICAgICAgIG1lbnU6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXQgdGhlIHNpdGUgdGl0bGUuIFRoaXMgY2FuIGJlIHVzZWQgZnJvbVxyXG4gICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHRpdGxlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRNZW51OiBmdW5jdGlvbihtZW51KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRNZW51OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9zaXRlL2ltZy95ZWxsb3dwYWQucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIGRpdi5jbC1zaG93LCBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYuY29tbWVudCBkaXYuY29tbWVudCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IGRpdi5jb21tZW50IHtcXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxufVxcblxcbmRpdi5jbC1ncmFkZXMgdGQucm9sZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZXItaXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlci1pdGVtIGgyIHtcXG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlci1pdGVtLWxvY2tlZCB7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICAvKiBTYWZhcmkgKi9cXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDUwcHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kOiAjZjhmZmY4O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGEubGluay1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBwYWRkaW5nOiAwIDJweDtcXG59XFxuZGl2LmNsLWdyYWRlciBwLmNsLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMWVtIDAgMCAwO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtZGlzcHV0ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgcC5jbC1yb2xlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2LmNsLWdyYWRlciBwLmNsLXJvbGUtc3RhZmYge1xcbiAgY29sb3I6ICNjNDE0MjU7XFxufVxcbmRpdi5jbC1ncmFkZXIgcC5jbC1kdWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjYzQxNDI1O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGJ1dHRvbi5jbC1ncmFkZXItYnV0dG9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1ncmFkZXIgYS5jbC1leHRyYS1saW5rIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgdHIuY2wtY2F0ZWdvcnkgdGQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbmRpdi5jbC1ncmFkZXIgdHIuY2wtY2F0ZWdvcnkgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuZGl2LmNsLWdyYWRlciB0ci5jbC1hc3NpZ25tZW50IHRkIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWFzc2lnbm1lbnQgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogM2VtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGxhYmVsLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYubGFiZWwsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBsYWJlbCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5sYWJlbCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGxhYmVsIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5sYWJlbCBhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgbGFiZWwgYSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5sYWJlbCBhIHtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYuY29tbWVudCB0ZXh0YXJlYSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IHRleHRhcmVhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50IGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgZGl2LmNvbW1lbnQge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAycHg7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5wb2ludHMsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQ1cHggNXB4IDAgMDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBpbnB1dCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBkaXYudmFsdWUsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIGlucHV0LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBkaXYudmFsdWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYucG9pbnRzIHNwYW4ubm90LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBzcGFuLm5vdCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYudmFsdWUsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYudmFsdWUge1xcbiAgcGFkZGluZzogMnB4IDFweDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnZhbHVlIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYudmFsdWUgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0ZDpsYXN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRoOmxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDFweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAycHg7XFxuICBtYXJnaW46IDAgMnB4O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGQuY2wtZGVkdWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgZGl2LmNvbW1lbnQge1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAycHg7XFxuICBtYXJnaW46IDAuM2VtIDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgcC5jbC1ydWJyaWMtZXhwYW5kIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB7XFxuICBiYWNrZ3JvdW5kOiAjZThmN2YzO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpmaXJzdC1jaGlsZCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWw6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpsYXN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIGxpLml0ZW0sIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHAuaXRlbSwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWwuaXRlbXMgbGkge1xcbiAgY29sb3I6ICM5MDAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIGxpLml0ZW06aG92ZXIsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHAuaXRlbTpob3ZlciwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWwuaXRlbXMgbGk6aG92ZXIge1xcbiAgY29sb3I6ICNjMDAwMDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuZGl2LmNsLWdyYWRlciB0ZXh0YXJlYS55ZWxsb3ctcGFkIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGUgcDpmaXJzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgZGl2LmNsLXNob3cge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgbWluLWhlaWdodDogOGVtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgdGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4ZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9zaXRlL3Nhc3MvbW9kdWxlcy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9ncmFkZXMvX2dyYWRlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvZ3JhZGVzL3Nhc3MvcGFydGlhbHMvX2dyYWRpbmcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRkE7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUMvRUY7O0FDREU7RUFDRSxtQkFBQTtBRElKOztBQ0NFO0VBQ0Usa0JBQUE7QURFSjtBQ0NFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FEQ0o7QUNDSTtFQUNFLG1CQUFBO0FEQ047QUNHRTtFQUNFLHdCQUFBO0VBQTBCLFdBQUE7RUFDMUIsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEQUo7QUNHRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEREo7QUNJRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FERko7QUNLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBREhKO0FDTUU7RUFDRSxrQkFBQTtBREpKO0FDT0U7RUFDRSxjRmhDRztBQzJCUDtBQ1FFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0Z2Q0c7QUNpQ1A7QUNTRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEUEo7QUNVRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRFJKO0FDWUk7RUFDRSxpQkFBQTtBRFZOO0FDYUk7RUFDRSxnQkFBQTtBRFhOO0FDZ0JJO0VBQ0UsaUJBQUE7QURkTjtBQ2lCSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QURmTjtBQ21CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEakJKO0FDbUJJO0VBQ0Usa0JBQUE7QURqQk47QUNtQk07RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QURqQlI7QUNxQkk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QURuQk47QUNxQk07RUFDRSxjQUFBO0VBQ0EsV0FBQTtBRG5CUjtBQ3NCTTtFQUVFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEckJSO0FDeUJJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEdkJOO0FDeUJNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUR2QlI7QUMwQk07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FEeEJSO0FDNEJJO0VBQ0UsZ0JBQUE7QUQxQk47QUMyQk07RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUR6QlI7QUM4QkU7RUFDRSxVQUFBO0FENUJKO0FDOEJJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FENUJOO0FDK0JJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRDdCTjtBQ2dDSTtFQUNFLFdBQUE7QUQ5Qk47QUNpQ0k7RUFDRSxXQUFBO0FEL0JOO0FDa0NJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRGhDTjtBQ21DSTtFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRGxDTjtBQ3NDRTtFQUNFLG9CQUFBO0FEcENKO0FDdUNFO0VBQ0UsbUJGbE1pQjtFRW1NakIsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRHJDSjtBQ3VDSTtFQUNFLGFBQUE7QURyQ047QUN3Q0k7RUFDRSxnQkFBQTtBRHRDTjtBQ3lDSTtFQUNFLGNGdktvQjtFRXdLcEIsZUFBQTtBRHZDTjtBQzBDSTtFQUNFLGNGM0txQjtBQ21JM0I7QUM0Q0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FEMUNKO0FDNkNFO0VBQ0UsbURBQUE7QUQzQ0o7QUM4Q0U7RUFDRSwyQkFBQTtBRDVDSjtBQzhDSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUQ1Q047QUNtREk7RUFFRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEbEROO0FDcURJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEbkROXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFRoZSBtYWpvciBjb2xvcnNcXHJcXG4vLyBXZSBoYXZlIGEgcHJpbWFyeSBjb2xvciwgdHdvIHNlY29uZGFyeSBjb2xvcnMsIGFuZCBhIGNvbXBsZW1lbnRhcnkgY29sb3IuXFxyXFxuJGFjY2VudDogIzYwN0Q4QjtcXHJcXG5cXHJcXG4kdG9hc3QtYmFja2dyb3VuZDogIzE1MTUxNTtcXHJcXG4kdG9hc3QtdGV4dDogd2hpdGU7XFxyXFxuXFxyXFxuJGhlYWRlci1iYWNrZ3JvdW5kOiAjNTM1MDU0O1xcclxcbiRoZWFkZXItdGV4dDogI2VlZWVlZTtcXHJcXG5cXHJcXG4vLyBUaGUgbWFqb3IgY29sb3JzXFxyXFxuLy8gV2UgaGF2ZSBhIHByaW1hcnkgY29sb3IsIHR3byBzZWNvbmRhcnkgY29sb3JzLCBhbmQgYSBjb21wbGVtZW50YXJ5IGNvbG9yLlxcclxcbiRwcmltYXJ5OiAjMDA3MjNmO1xcclxcbiRsaWdodC1wcmltYXJ5OiAjNDRhMjZiO1xcclxcbiR2ZXJ5LWxpZ2h0LXByaW1hcnk6ICNlOGY3ZjM7XFxyXFxuJGRhcmstcHJpbWFyeTogIzAwNTIyMztcXHJcXG4kcHJpbWFyeS10ZXh0OiAjMjEyMTIxO1xcclxcblxcclxcbiRzZWNvbmRhOiAjMDA5MDllO1xcclxcbiRzZWNvbmRiOiAjZmNhZjE3O1xcclxcbiRzZWNvbmRjOiAjYzg5YTU4OyAvLyAjZThkOWI1O1xcclxcblxcclxcbiRjb21wOiAjYzQxNDI1O1xcclxcbiRibGluZDogI2VmYzZmZjtcXHJcXG4kY29tcC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzU3MDEwMiwgIzk2MDYwNiwgIzU3MDEwMik7XFxyXFxuJGNvbXAtYm9yZGVyOiAjYzdiZGJiO1xcclxcblxcclxcbi8vIE1lbnVzXFxyXFxuJGZvY3VzOiAjMDA4MTgzO1xcclxcbiRtZW51LWJhY2tncm91bmQ6ICNlOGU4ZTg7XFxyXFxuJG1lbnUtaG92ZXI6ICNkMGQwZDA7XFxyXFxuJG1lbnUtY29sb3I6IGJsYWNrO1xcclxcblxcclxcbi8vIFBhZ2UgYmFja2dyb3VuZFxcclxcbiRiYWNrZ3JvdW5kOiAjZWVlZWVlO1xcclxcblxcclxcbi8vIE5hdlxcclxcbiRuYXYtY29sb3I6IHdoaXRlO1xcclxcbiRuYXYtYmFja2dyb3VuZDogdXJsKCdpbWcvbmF2X3BhdHRlcm4ucG5nJyk7XFxyXFxuJG5hdi0yLWNvbG9yOiAjZmZmZjk5O1xcclxcbiRuYXYtMi1iYWNrZ3JvdW5kOiB1cmwoJ2ltZy9uYXZfcGF0dGVybi0yLnBuZycpO1xcclxcblxcclxcbi8vIFRhYmxlc1xcclxcbiR0YWJsZS1ncmFkaWVudC1mcm9tOiAjMjA0YzQyO1xcclxcbiR0YWJsZS1ncmFkaWVudC10bzogIzM4OWI1NDtcXHJcXG5cXHJcXG4vLyBEaWFsb2cgYm94ZXNcXHJcXG4kZGlhbG9nLWdyYWRpZW50LWZyb206ICMyMDRjNDI7XFxyXFxuJGRpYWxvZy1ncmFkaWVudC10bzogIzM4OWI1NDtcXHJcXG4kZGlhbG9nLWJhci1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuLy8gTGluayBjb2xvcnNcXHJcXG4kbGluazogIzgwODA4MDtcXHJcXG4kdmlzaXRlZDogIzk2ODQ0MzsgIC8vICNiMDlkNWI7XFxyXFxuJGhvdmVyOiAjMzM2NmNjO1xcclxcblxcclxcbiR2ZXJ5LWxpZ2h0LXByaW1hcnktbGluazogIzkwMDAwMDtcXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5LWhvdmVyOiAjYzAwMDAwO1xcclxcblxcclxcblxcclxcbiRwcmltYXJ5LWxpbms6IHdoaXRlO1xcclxcbiRwcmltYXJ5LXZpc2l0ZWQ6ICNkZGRkZGQ7XFxyXFxuJHNlY29uZGItdmlzaXRlZDogIzU1NTU1NTtcXHJcXG4kYXV0b2JhY2stbGluazogIzg4MjIyMjtcXHJcXG4kYXV0b2JhY2stbGluay1ob3ZlcjogI2NjMjIyMjtcXHJcXG5cXHJcXG4kc2hhZG93LXg6IDNweDtcXHJcXG4kc2hhZG93LXk6IDNweDtcXHJcXG4kc2hhZG93LXJhZGl1czogOHB4O1xcclxcbiRzaGFkb3ctY29sb3I6ICNjY2M7XFxyXFxuXFxyXFxuJHRvZ2dsZS1saW5rLWhvdmVyLWNvbG9yOiAjMDA2NjAwO1xcclxcblxcclxcbi8vIEJveGVzXFxyXFxuJGJveC1ib3JkZXItY29sb3I6ICNiZGJkYmQ7XFxyXFxuXFxyXFxuLy8gQ2FyZHNcXHJcXG4kY2FyZC1oZWFkaW5nLWJhY2tncm91bmQ6ICNmMmYyZjI7XFxyXFxuJGNhcmQtYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcclxcblxcclxcbiVzaGFkb3cge1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3cteCAkc2hhZG93LXkgJHNoYWRvdy1yYWRpdXMgJHNoYWRvdy1jb2xvcjtcXHJcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3cteCAkc2hhZG93LXkgJHNoYWRvdy1yYWRpdXMgJHNoYWRvdy1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJW5vc2hhZG93IHtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIGRpdi5jbC1zaG93LCBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYuY29tbWVudCBkaXYuY29tbWVudCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IGRpdi5jb21tZW50IHtcXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxufVxcblxcbmRpdi5jbC1ncmFkZXMgdGQucm9sZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZXItaXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlci1pdGVtIGgyIHtcXG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlci1pdGVtLWxvY2tlZCB7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICAvKiBTYWZhcmkgKi9cXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDUwcHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kOiAjZjhmZmY4O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGEubGluay1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBwYWRkaW5nOiAwIDJweDtcXG59XFxuZGl2LmNsLWdyYWRlciBwLmNsLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMWVtIDAgMCAwO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtZGlzcHV0ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgcC5jbC1yb2xlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2LmNsLWdyYWRlciBwLmNsLXJvbGUtc3RhZmYge1xcbiAgY29sb3I6ICNjNDE0MjU7XFxufVxcbmRpdi5jbC1ncmFkZXIgcC5jbC1kdWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjYzQxNDI1O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGJ1dHRvbi5jbC1ncmFkZXItYnV0dG9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1ncmFkZXIgYS5jbC1leHRyYS1saW5rIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgdHIuY2wtY2F0ZWdvcnkgdGQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbmRpdi5jbC1ncmFkZXIgdHIuY2wtY2F0ZWdvcnkgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuZGl2LmNsLWdyYWRlciB0ci5jbC1hc3NpZ25tZW50IHRkIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWFzc2lnbm1lbnQgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogM2VtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGxhYmVsLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYubGFiZWwsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBsYWJlbCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5sYWJlbCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGxhYmVsIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5sYWJlbCBhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgbGFiZWwgYSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5sYWJlbCBhIHtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYuY29tbWVudCB0ZXh0YXJlYSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IHRleHRhcmVhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50IGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgZGl2LmNvbW1lbnQge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAycHg7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5wb2ludHMsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQ1cHggNXB4IDAgMDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBpbnB1dCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBkaXYudmFsdWUsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIGlucHV0LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBkaXYudmFsdWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYucG9pbnRzIHNwYW4ubm90LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBzcGFuLm5vdCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYudmFsdWUsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYudmFsdWUge1xcbiAgcGFkZGluZzogMnB4IDFweDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnZhbHVlIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYudmFsdWUgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0ZDpsYXN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRoOmxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDFweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAycHg7XFxuICBtYXJnaW46IDAgMnB4O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGQuY2wtZGVkdWN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgZGl2LmNvbW1lbnQge1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAycHg7XFxuICBtYXJnaW46IDAuM2VtIDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgcC5jbC1ydWJyaWMtZXhwYW5kIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB7XFxuICBiYWNrZ3JvdW5kOiAjZThmN2YzO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpmaXJzdC1jaGlsZCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWw6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpsYXN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIGxpLml0ZW0sIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHAuaXRlbSwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWwuaXRlbXMgbGkge1xcbiAgY29sb3I6ICM5MDAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIGxpLml0ZW06aG92ZXIsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHAuaXRlbTpob3ZlciwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWwuaXRlbXMgbGk6aG92ZXIge1xcbiAgY29sb3I6ICNjMDAwMDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuZGl2LmNsLWdyYWRlciB0ZXh0YXJlYS55ZWxsb3ctcGFkIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vLi4vLi4vc2l0ZS9pbWcveWVsbG93cGFkLnBuZ1xcXCIpO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlIHA6Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIGRpdi5jbC1zaG93IHtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIG1pbi1oZWlnaHQ6IDhlbTtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogOGVtO1xcbn1cIixcIkBpbXBvcnQgJ35zaXRlLWNsL3Nhc3MvbW9kdWxlcy9jb2xvcnMnO1xcclxcblxcclxcbmRpdi5jbC1ncmFkZXMge1xcclxcbiAgdGQucm9sZSB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmRpdi5jbC1ncmFkZXIge1xcclxcbiAgZm9ybSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1ncmFkZXItaXRlbSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAtMC4yNWVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtZ3JhZGVyLWl0ZW0tbG9ja2VkIHtcXHJcXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiA1MHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmOGZmZjg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhLmxpbmstYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG4gICAgcGFkZGluZzogMCAycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwLmNsLXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwLmNsLWRpc3B1dGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAuY2wtcm9sZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAuY2wtcm9sZS1zdGFmZiB7XFxyXFxuICAgIGNvbG9yOiAkY29tcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAuY2wtZHVlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGNvbG9yOiAkY29tcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbi5jbC1ncmFkZXItYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhLmNsLWV4dHJhLWxpbmsge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDAuNWVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgdHIuY2wtY2F0ZWdvcnkge1xcclxcbiAgICB0ZCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdGQ6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRyLmNsLWFzc2lnbm1lbnQge1xcclxcbiAgICB0ZCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdGQ6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAzZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1ncmFkZSwgZGl2LmdyYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcclxcbiAgICBsYWJlbCwgZGl2LmxhYmVsIHtcXHJcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuXFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYuY29tbWVudCB7XFxyXFxuICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAgcGFkZGluZzogMCAyMHB4IDAgMDtcXHJcXG5cXHJcXG4gICAgICB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBkaXYuY29tbWVudCB7XFxyXFxuICAgICAgICBAZXh0ZW5kICVzaGFkb3c7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXHJcXG4gICAgICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGl2LnBvaW50cyB7XFxyXFxuICAgICAgZmxleDogMCAwIGF1dG87XFxyXFxuICAgICAgd2lkdGg6IDVlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgcGFkZGluZzogNDVweCA1cHggMCAwO1xcclxcblxcclxcbiAgICAgIGlucHV0LCBkaXYudmFsdWUge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBzcGFuLm5vdCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYudmFsdWUge1xcclxcbiAgICAgIHBhZGRpbmc6IDJweCAxcHg7XFxyXFxuICAgICAgYSB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0YWJsZS5jbC1oYW5kYm9vayB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuXFxyXFxuICAgIHRkOmxhc3QtY2hpbGQsIHRoOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dFt0eXBlPXJhZGlvXSB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgMnB4O1xcclxcbiAgICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdGV4dGFyZWEge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRkLmNsLWRlZHVjdCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGl2LmNvbW1lbnQge1xcclxcbiAgICAgIEBleHRlbmQgJXNoYWRvdztcXHJcXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XFxyXFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgICBtYXJnaW46IDAuM2VtIDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAuY2wtcnVicmljLWV4cGFuZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXJ1YnJpY2Jsb2NrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJHZlcnktbGlnaHQtcHJpbWFyeTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCAjODA4MDgwIHNvbGlkO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG5cXHJcXG4gICAgcDpmaXJzdC1jaGlsZCwgdWw6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcDpsYXN0LWNoaWxkLCB1bDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGxpLml0ZW0sIHAuaXRlbSwgdWwuaXRlbXMgbGkge1xcclxcbiAgICAgIGNvbG9yOiAkdmVyeS1saWdodC1wcmltYXJ5LWxpbms7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGxpLml0ZW06aG92ZXIsIHAuaXRlbTpob3ZlciwgdWwuaXRlbXMgbGk6aG92ZXIge1xcclxcbiAgICAgIGNvbG9yOiAkdmVyeS1saWdodC1wcmltYXJ5LWhvdmVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0ZXh0YXJlYSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRleHRhcmVhLnllbGxvdy1wYWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL3NpdGUvaW1nL3llbGxvd3BhZC5wbmcnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5ncmFkZSB7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG4gICAgcDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1ydWJyaWMge1xcclxcblxcclxcblxcclxcbiAgICBkaXYuY2wtc2hvdyB7XFxyXFxuICAgICAgQGV4dGVuZCAlc2hhZG93O1xcclxcbiAgICAgIG1hcmdpbjogMWVtIDA7XFxyXFxuICAgICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgICAgbWluLWhlaWdodDogOGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICAgIG1hcmdpbjogMWVtIDA7XFxyXFxuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgbWluLWhlaWdodDogOGVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWJ1bGstdXBsb2FkIGZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHAge1xcbiAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1idWxrLXVwbG9hZCBmaWVsZHNldCA+IGRpdiA+IGRpdiBwOmxhc3QtY2hpbGQgaW5wdXQge1xcbiAgd2lkdGg6IDYuNWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQtZGxnIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0xFO0VBQ0Usa0JBQUE7QUFqTEo7QUFzTEk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXBMTjtBQXNMTTtFQUNFLGtCQUFBO0FBcExSO0FBc0xRO0VBQ0UsbUJBQUE7QUFwTFY7QUF1TFE7RUFDRSxTQUFBO0FBckxWO0FBdUxVO0VBQ0UsWUFBQTtBQXJMWjtBQTZMQTtFQUNFLFlBQUE7QUExTEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuZGl2LmNsLWJ1bGstdXBsb2FkIHtcXG4gIGZvcm0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICBmaWVsZHNldCB7XFxuXFxuICAgID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxuXFxuICAgICAgPiBkaXYge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xcblxcbiAgICAgICAgcCB7XFxuICAgICAgICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBwOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICBtYXJnaW46IDA7XFxuXFxuICAgICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgICB3aWR0aDogNi41ZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZGl2LmNsLWJ1bGstdXBsb2FkLWRsZyB7XFxuICB3aWR0aDogNDAwcHg7XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwidGRbZGF0YS12LTVjZjljZGRkXSB7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxufVxcbmRpdi5jYXRlZ29yeVtkYXRhLXYtNWNmOWNkZGRdIHtcXG4gIGNvbG9yOiAjZmNhZjE3O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZVwiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL3NpdGUvc2Fzcy9tb2R1bGVzL19jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE4R0E7RUFDRSxlQUFBO0FBN0dGO0FBZ0hFO0VBQ0UsY0NoR007QURiVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gIEBpbXBvcnQgJ35zaXRlLWNsL3Nhc3MvbW9kdWxlcy9jb2xvcnMnO1xcblxcbnRkIHtcXG4gIG1pbi13aWR0aDogMzBweDtcXG59XFxuXFxuICBkaXYuY2F0ZWdvcnkge1xcbiAgICBjb2xvcjogJHNlY29uZGI7XFxuICB9XFxuXCIsXCIvLyBUaGUgbWFqb3IgY29sb3JzXFxyXFxuLy8gV2UgaGF2ZSBhIHByaW1hcnkgY29sb3IsIHR3byBzZWNvbmRhcnkgY29sb3JzLCBhbmQgYSBjb21wbGVtZW50YXJ5IGNvbG9yLlxcclxcbiRhY2NlbnQ6ICM2MDdEOEI7XFxyXFxuXFxyXFxuJHRvYXN0LWJhY2tncm91bmQ6ICMxNTE1MTU7XFxyXFxuJHRvYXN0LXRleHQ6IHdoaXRlO1xcclxcblxcclxcbiRoZWFkZXItYmFja2dyb3VuZDogIzUzNTA1NDtcXHJcXG4kaGVhZGVyLXRleHQ6ICNlZWVlZWU7XFxyXFxuXFxyXFxuLy8gVGhlIG1ham9yIGNvbG9yc1xcclxcbi8vIFdlIGhhdmUgYSBwcmltYXJ5IGNvbG9yLCB0d28gc2Vjb25kYXJ5IGNvbG9ycywgYW5kIGEgY29tcGxlbWVudGFyeSBjb2xvci5cXHJcXG4kcHJpbWFyeTogIzAwNzIzZjtcXHJcXG4kbGlnaHQtcHJpbWFyeTogIzQ0YTI2YjtcXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5OiAjZThmN2YzO1xcclxcbiRkYXJrLXByaW1hcnk6ICMwMDUyMjM7XFxyXFxuJHByaW1hcnktdGV4dDogIzIxMjEyMTtcXHJcXG5cXHJcXG4kc2Vjb25kYTogIzAwOTA5ZTtcXHJcXG4kc2Vjb25kYjogI2ZjYWYxNztcXHJcXG4kc2Vjb25kYzogI2M4OWE1ODsgLy8gI2U4ZDliNTtcXHJcXG5cXHJcXG4kY29tcDogI2M0MTQyNTtcXHJcXG4kYmxpbmQ6ICNlZmM2ZmY7XFxyXFxuJGNvbXAtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1NzAxMDIsICM5NjA2MDYsICM1NzAxMDIpO1xcclxcbiRjb21wLWJvcmRlcjogI2M3YmRiYjtcXHJcXG5cXHJcXG4vLyBNZW51c1xcclxcbiRmb2N1czogIzAwODE4MztcXHJcXG4kbWVudS1iYWNrZ3JvdW5kOiAjZThlOGU4O1xcclxcbiRtZW51LWhvdmVyOiAjZDBkMGQwO1xcclxcbiRtZW51LWNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG4vLyBQYWdlIGJhY2tncm91bmRcXHJcXG4kYmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG5cXHJcXG4vLyBOYXZcXHJcXG4kbmF2LWNvbG9yOiB3aGl0ZTtcXHJcXG4kbmF2LWJhY2tncm91bmQ6IHVybCgnaW1nL25hdl9wYXR0ZXJuLnBuZycpO1xcclxcbiRuYXYtMi1jb2xvcjogI2ZmZmY5OTtcXHJcXG4kbmF2LTItYmFja2dyb3VuZDogdXJsKCdpbWcvbmF2X3BhdHRlcm4tMi5wbmcnKTtcXHJcXG5cXHJcXG4vLyBUYWJsZXNcXHJcXG4kdGFibGUtZ3JhZGllbnQtZnJvbTogIzIwNGM0MjtcXHJcXG4kdGFibGUtZ3JhZGllbnQtdG86ICMzODliNTQ7XFxyXFxuXFxyXFxuLy8gRGlhbG9nIGJveGVzXFxyXFxuJGRpYWxvZy1ncmFkaWVudC1mcm9tOiAjMjA0YzQyO1xcclxcbiRkaWFsb2ctZ3JhZGllbnQtdG86ICMzODliNTQ7XFxyXFxuJGRpYWxvZy1iYXItY29sb3I6IHdoaXRlO1xcclxcblxcclxcbi8vIExpbmsgY29sb3JzXFxyXFxuJGxpbms6ICM4MDgwODA7XFxyXFxuJHZpc2l0ZWQ6ICM5Njg0NDM7ICAvLyAjYjA5ZDViO1xcclxcbiRob3ZlcjogIzMzNjZjYztcXHJcXG5cXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5LWxpbms6ICM5MDAwMDA7XFxyXFxuJHZlcnktbGlnaHQtcHJpbWFyeS1ob3ZlcjogI2MwMDAwMDtcXHJcXG5cXHJcXG5cXHJcXG4kcHJpbWFyeS1saW5rOiB3aGl0ZTtcXHJcXG4kcHJpbWFyeS12aXNpdGVkOiAjZGRkZGRkO1xcclxcbiRzZWNvbmRiLXZpc2l0ZWQ6ICM1NTU1NTU7XFxyXFxuJGF1dG9iYWNrLWxpbms6ICM4ODIyMjI7XFxyXFxuJGF1dG9iYWNrLWxpbmstaG92ZXI6ICNjYzIyMjI7XFxyXFxuXFxyXFxuJHNoYWRvdy14OiAzcHg7XFxyXFxuJHNoYWRvdy15OiAzcHg7XFxyXFxuJHNoYWRvdy1yYWRpdXM6IDhweDtcXHJcXG4kc2hhZG93LWNvbG9yOiAjY2NjO1xcclxcblxcclxcbiR0b2dnbGUtbGluay1ob3Zlci1jb2xvcjogIzAwNjYwMDtcXHJcXG5cXHJcXG4vLyBCb3hlc1xcclxcbiRib3gtYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xcclxcblxcclxcbi8vIENhcmRzXFxyXFxuJGNhcmQtaGVhZGluZy1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xcclxcbiRjYXJkLWJvcmRlci1jb2xvcjogI2NjY2NjYztcXHJcXG5cXHJcXG4lc2hhZG93IHtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdy14ICRzaGFkb3cteSAkc2hhZG93LXJhZGl1cyAkc2hhZG93LWNvbG9yO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxufVxcclxcblxcclxcbiVub3NoYWRvdyB7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnRbZGF0YS12LTU2YjA1OTgwXSB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgcFtkYXRhLXYtNTZiMDU5ODBdIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgZGl2LmNsLXBhcnRzW2RhdGEtdi01NmIwNTk4MF0ge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgZGl2LmNsLXBhcnRzID4gZGl2W2RhdGEtdi01NmIwNTk4MF0ge1xcbiAgZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG5kaXYjY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50IGRpdi5jbC1wYXJ0cyA+IGRpdiA+IGRpdltkYXRhLXYtNTZiMDU5ODBdOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5kaXYjY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50IGRpdi5jbC1wYXJ0cyA+IGRpdiA+IGRpdltkYXRhLXYtNTZiMDU5ODBdIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBoZWlnaHQ6IDJlbTtcXG59XFxuZGl2I2NsLWNvbHVtbi1jaG9vc2VyLWNvbXBvbmVudCBkaXYuY2wtcGFydHMgZGl2LmNsLWNvbW1lbnRbZGF0YS12LTU2YjA1OTgwXSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQThFQTtFQUNJLFlBQUE7QUE3RUo7QUE4RUk7RUFDSSxnQkFBQTtBQTVFUjtBQStFSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBN0VSO0FBK0VRO0VBQ0ksa0JBQUE7QUE3RVo7QUErRVk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBN0VoQjtBQWdGWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQTlFaEI7QUFrRlE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBaEZaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQge1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYuY2wtcGFydHMge1xcclxcbiAgICAgICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICAgICAgICA+ZGl2IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxyXFxuXFxyXFxuICAgICAgICAgICAgPmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgID5kaXYge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYuY2wtY29tbWVudCB7XFxyXFxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTFkZGM2OGI0YTEvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS01LjIuNi0xMThjNmQ0MDllLTk5MzM1NGEyNDguemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWdyYWRlLWhpc3RvcnlbZGF0YS12LTE3N2ZhYTUzXSB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxucFtkYXRhLXYtMTc3ZmFhNTNdIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbn1cXG5wLmV4cGFuZGVyW2RhdGEtdi0xNzdmYWE1M10ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuZGl2LmdyYWRlc1tkYXRhLXYtMTc3ZmFhNTNdIHtcXG4gIHBhZGRpbmc6IDJweCAwIDJweCAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZDtcXG59XFxuZGl2LmdyYWRlcyBwW2RhdGEtdi0xNzdmYWE1M10ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMnB4IDAgMCAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFvREE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFuREY7QUFxREE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBbERGO0FBcURBO0VBQ0UsZ0JBQUE7QUFsREY7QUFvREE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBakRGO0FBbURFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBakRKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbmRpdi5jbC1ncmFkZS1oaXN0b3J5IHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDFlbSAwO1xcbn1cXG5wIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbn1cXG5cXG5wLmV4cGFuZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbmRpdi5ncmFkZXMge1xcbiAgcGFkZGluZzogMnB4IDAgMnB4IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmZmRkO1xcblxcbiAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMnB4IDAgMCAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTg2MjYwNmYzOTMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTIuMC4wLWI5YTVjNGEyYWEtMjE0MjUyNDZhNS56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVzb2x2ZS11cmwtbG9hZGVyLXZpcnR1YWwtZWM3NWQyYTA5ZS8wL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNC4wLjAtMmE5YzE4ZDg2Yi04ZTViY2Y5Nzg2LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtMzg1N2Y1ZTlmMS8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMi4xLjAtNjE4ODA4OWUxMi02OWM2NmVhMzQ4LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi9fZ3JhZGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtODYyNjA2ZjM5My8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMi4wLjAtYjlhNWM0YTJhYS0yMTQyNTI0NmE1LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtM2YwYzM4YmIyYy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZXNvbHZlLXVybC1sb2FkZXItdmlydHVhbC1lYzc1ZDJhMDllLzAvY2FjaGUvcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS00LjAuMC0yYTljMThkODZiLThlNWJjZjk3ODYuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC0zODU3ZjVlOWYxLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEyLjEuMC02MTg4MDg5ZTEyLTY5YzY2ZWEzNDguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtODYyNjA2ZjM5My8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMi4wLjAtYjlhNWM0YTJhYS0yMTQyNTI0NmE1LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtM2YwYzM4YmIyYy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZXNvbHZlLXVybC1sb2FkZXItdmlydHVhbC1lYzc1ZDJhMDllLzAvY2FjaGUvcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS00LjAuMC0yYTljMThkODZiLThlNWJjZjk3ODYuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC0zODU3ZjVlOWYxLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEyLjEuMC02MTg4MDg5ZTEyLTY5YzY2ZWEzNDguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjZjljZGRkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtODYyNjA2ZjM5My8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMi4wLjAtYjlhNWM0YTJhYS0yMTQyNTI0NmE1LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC0xZGRjNjhiNGExLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNS4yLjYtMTE4YzZkNDA5ZS05OTMzNTRhMjQ4LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtM2YwYzM4YmIyYy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9yZXNvbHZlLXVybC1sb2FkZXItdmlydHVhbC1lYzc1ZDJhMDllLzAvY2FjaGUvcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS00LjAuMC0yYTljMThkODZiLThlNWJjZjk3ODYuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC0zODU3ZjVlOWYxLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEyLjEuMC02MTg4MDg5ZTEyLTY5YzY2ZWEzNDguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NmIwNTk4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTg2MjYwNmYzOTMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTIuMC4wLWI5YTVjNGEyYWEtMjE0MjUyNDZhNS56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtMWRkYzY4YjRhMS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTUuMi42LTExOGM2ZDQwOWUtOTkzMzU0YTI0OC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTNmMGMzOGJiMmMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vcmVzb2x2ZS11cmwtbG9hZGVyLXZpcnR1YWwtZWM3NWQyYTA5ZS8wL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNC4wLjAtMmE5YzE4ZDg2Yi04ZTViY2Y5Nzg2LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtMzg1N2Y1ZTlmMS8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMi4xLjAtNjE4ODA4OWUxMi02OWM2NmVhMzQ4LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzdmYWE1MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQWdDQUlBQUFDdGpON0FBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQUhsSlJFRlVPSTN0MHJFTmcwQVVBMUQ3bitFcUtwUVpNa0ZtWkR0S05raVRIaUVDdWNzS2JoQkM0dGRQTHZ6TmJSN2dISE5ZRGdCd0RCVlFQVmxWSUROVWlzV2pSZXZXT1pETUd0OHZoMFlrUFIrVFF5dGI5ZDNIb1FWWis5NTRxWTFvOTNyNkJtNnFpSzhuZWEyOS91aFFrR0pORmtVNi9WdC9QVWdoSUd3RFdESUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVNYW51YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUFzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LWRmNTA5MmVmOTguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtZGY1MDkyZWY5OC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS1kZjUwOTJlZjk4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtYnVsay11cGxvYWRcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCB7IGF0dHJzOiB7IGlkOiBcImJ1bGtcIiB9IH0sIFtfdm0uX3YoXCJCdWxrIGdyYWRlIHVwbG9hZGluZ1wiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJUaGlzIG9wdGlvbiBhY2NlcHRzIGZpbGVzIGluIENTViBmb3JtYXQgYXMgcHJvZHVjZWQgYnkgQ3Jvd2RNYXJrIGFuZCBvdGhlciBzeXN0ZW1zLiBcIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnVsbFwiLFxuICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiLCBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS5idWxrVXBsb2FkKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZmllbGRzZXRcIiwgW1xuICAgICAgICAgIF9jKFwibGVnZW5kXCIsIFtfdm0uX3YoXCJCdWxrIFVwbG9hZCBGaWxlXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiRmlsZSB0byB1cGxvYWQ6IFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiYnVsa2ZpbGVcIiwgdHlwZTogXCJmaWxlXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmJ1bGtGaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlByZXNzXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiB0byB1cGxvYWQgdGhlIGZpbGUhXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtZ3JhZGVcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21tZW50XCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgIF92bS5fdihcIkNvbW1lbnQgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNvbXB1dGUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiY29tcHV0ZVwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubWFudWFsLmNvbW1lbnQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5tYW51YWwuY29tbWVudFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21tZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHsgcm93czogXCI2XCIsIG5hbWU6IF92bS5pdGVtLnRhZyArIFwiLWNvbW1lbnRcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uaXRlbS5tYW51YWwuY29tbWVudCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLm1hbnVhbCwgXCJjb21tZW50XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRzXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgIF92bS5fdihcIlBvaW50c1xcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLml0ZW0ubWFudWFsLnBvaW50cyxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLm1hbnVhbC5wb2ludHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9pbnRzXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBpZDogX3ZtLml0ZW0udGFnICsgXCItcG9pbnRzXCIsXG4gICAgICAgICAgICBuYW1lOiBfdm0uaXRlbS50YWcgKyBcIi1wb2ludHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5pdGVtLm1hbnVhbC5wb2ludHMgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaXRlbS5tYW51YWwsIFwicG9pbnRzXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCJBdmFpbGFibGVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImRhdGEtaWRcIjogX3ZtLml0ZW0udGFnICsgXCItcG9pbnRzXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkNsaWNrIHRvIGZpbGwgaW4gcG9pbnRzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbGxJblBvaW50cygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLm1hbnVhbC5hdmFpbGFibGUpKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibWVtYmVycy1mZXRjaGVyXCIsIHtcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidmVydGljYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlY3Rpb24uYXNzaWdubWVudHMuY2F0ZWdvcmllcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChjYXRlZ29yeS5hc3NpZ25tZW50cywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50LnNob3J0bmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIGNhdGVnb3J5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChmZXRjaGVyLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogdXNlci5yb2xlKCkgIT09IFwiVFwiID8gXCJpZ25vcmVcIiA6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLm1lbWJlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ncmFkZXMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKCkpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChjYXRlZ29yeS5hc3NpZ25tZW50cywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXNzaWdubWVudEdyYWRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmNhdGVnb3J5R3JhZGUodXNlciwgY2F0ZWdvcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlcnMtZmV0Y2hlclwiLCB7XG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiB1c2VyLnJvbGUoKSAhPT0gXCJUXCIgPyBcImlnbm9yZVwiIDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ncmFkZXMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL2dyYWRlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIucm9sZU5hbWUoKSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibWVtYmVyLWZldGNoZXJcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogX3ZtLm1lbWJlcmlkLFxuICAgICAgICAgICAgZmFpbGxpbms6IF92bS5yb290ICsgXCIvY2wvY29uc29sZS9ncmFkZXMvbGlua3NcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgZmV0Y2hlZDogX3ZtLmZldGNoZWQgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwcmV2LW5leHRcIiwgeyBhdHRyczogeyB1c2VyOiBmZXRjaGVyLnVzZXIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnVzZXIgIT09IG51bGwgJiYgX3ZtLmdyYWRlICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQXNzaWdubWVudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkdyYWRlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLCoFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiR3JhZGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ncmFkZS5jYXRlZ29yaWVzLCBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWNhdGVnb3J5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5LnBvaW50cykgKyBcIiVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5LmdyYWRlKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGNhdGVnb3J5LmFzc2lnbm1lbnRzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBhc3NpZ25tZW50LnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtYXNzaWdubWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL2dyYWRpbmcvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50LnRhZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyLm1lbWJlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoYXNzaWdubWVudC5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChhc3NpZ25tZW50LnBvaW50cyAqIDEwKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoYXNzaWdubWVudC5ncmFkZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNsaWNrIG9uIGVhY2ggYXNzaWdubWVudCBmb3IgbW9yZSBncmFkaW5nIGRldGFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcHV0ZWQgR3JhZGU6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ3JhZGUuZ3JhZGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG91dCBvZiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdyYWRlLmF2YWlsYWJsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYXZhaWxhYmxlIHBvaW50c1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImNsLWNvbHVtbi1jaG9vc2VyLWNvbXBvbmVudFwiIH0gfSwgW1xuICAgIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXCJNZW1iZXIgaWRlbnRpZmllciBjb2x1bW46XFxuICAgIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1lbWJlcklkQ29sdW1uLmlkLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1lbWJlcklkQ29sdW1uLmlkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICBfdm0ubWVtYmVySWRDb2x1bW4sXG4gICAgICAgICAgICAgICAgXCJpZFwiLFxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woX3ZtLmNvbHVtbnMsIGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KF92bS5fcyhjb2x1bW4pKV0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgW192bS5fdihcIk1lbWJlciBpZGVudGlmaWVyIGNhbiBiZSBhbiBlbWFpbCBhZGRyZXNzIG9yIHVzZXIgSUQuXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJTZWxlY3QgY29sdW1uIGZvciBlYWNoIGdyYWRlIGl0ZW1cIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtcGFydHNcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX2woX3ZtLnBhcnRzLCBmdW5jdGlvbihwYXJ0LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKHBhcnQubmFtZSkgKyBcIjpcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tYXBwaW5nW3BhcnQudGFnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZ1twYXJ0LnRhZ11cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1hcHBpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2x1bW5TZWxlY3QsIGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgW192bS5fdihfdm0uX3MoY29sdW1uKSldKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWNvbW1lbnRcIiB9LCBbX3ZtLl92KFwiY29tbWVudDpcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb21tZW50TWFwcGluZ1twYXJ0LnRhZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbW1lbnRNYXBwaW5nW3BhcnQudGFnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tbWVudE1hcHBpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2x1bW5TZWxlY3QsIGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgW192bS5fdihfdm0uX3MoY29sdW1uKSldKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiR3JhZGVzIFN1bW1hcnlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0ucm9vdCArIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL2FsbFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWxsIFN0dWRlbnRzXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS5yb290ICsgXCIvY2wvY29uc29sZS9ncmFkZXMvbGlua3NcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkFsbCBTdHVkZW50cyBHcmFkZSBMaW5rc1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRvd25sb2FkUGVybWlzc2lvblxuICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ucm9vdCArIFwiL2NsL2dyYWRlcy9jc3ZcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRvd25sb2FkIFN0dWRlbnQgR3JhZGVzXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucnVicmljRHVtcGVyUGVybWlzc2lvblxuICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBfdm0ucm9vdCArIFwiL2NsL2dyYWRlcy9ydWJyaWMtZHVtcGVyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJ1YnJpYyBEdW1wZXJcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFzc2lnbm1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtfYyhcImVtXCIsIFtfdm0uX3YoXCJQZW5kaW5nLi4uXCIpXSldKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbChjYXRlZ29yeS5hc3NpZ25tZW50cywgZnVuY3Rpb24oYXNzaWdubWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBhc3NpZ25tZW50LnRhZyB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0uZ3JhZGluZ0xpbmsgKyBhc3NpZ25tZW50LnRhZyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50Lm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuYXRMZWFzdChfdm0udGEpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5rLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NsL2NvbnNvbGUvcnVicmljL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50LnRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInJ1YnJpY3NcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVzXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3VibWlzc2lvbnMtbGlua3NcIiwgeyBhdHRyczogeyBhc3NpZ25tZW50OiBfdm0uYXNzaWdubWVudCB9IH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcIm1lbWJlcnMtZmV0Y2hlclwiLCB7XG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2ZXJ0aWNhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYXJ0cywgZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKHBhcnQubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiR3JhZGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiB1c2VyLnJvbGUoKSAhPT0gXCJUXCIgPyBcImlnbm9yZVwiIDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgKyBfdm0ubGluayArIHVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgKyBfdm0ubGluayArIHVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInJvbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYXJ0cywgZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYXJ0R3JhZGUodXNlciwgcGFydCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ3JhZGVzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdyYWRlKHVzZXIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJlbVwiLCBbX3ZtLl92KFwiY291bnRzXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZmV0Y2hlci51c2Vycy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYXJ0cywgZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGFydENvdW50KGZldGNoZXIudXNlcnMsIHBhcnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ3JhZGVzQ291bnQoZmV0Y2hlci51c2VycykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiZW1cIiwgW192bS5fdihcImF2ZXJhZ2VzXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhcnRzLCBmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wYXJ0QXZlcmFnZShmZXRjaGVyLnVzZXJzLCBwYXJ0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ3JhZGVzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdyYWRlQXZlcmFnZShmZXRjaGVyLnVzZXJzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5wYXJ0cy5sZW5ndGggPiAwICYmIF92bS50YVxuICAgICAgICAgID8gX2MoXCJidWxrLXVwbG9hZFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGFzc2lnbnRhZzogX3ZtLmFzc2lnbnRhZywgcGFydHM6IF92bS5wYXJ0cyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWdyYWRlclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlci1mZXRjaGVyXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBpZDogX3ZtLm1lbWJlcmlkLCBmYWlsbGluazogX3ZtLmdyYWRpbmdMaW5rIH0sXG4gICAgICAgICAgb246IHsgZmV0Y2hlZDogX3ZtLmZldGNoZWQgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwcmV2LW5leHRcIiwgeyBhdHRyczogeyB1c2VyOiBmZXRjaGVyLnVzZXIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBmZXRjaGVyLnVzZXIgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlci5yb2xlKCkgPT09IFwiVFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY2wtcm9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiY2wtcm9sZSBjbC1yb2xlLXN0YWZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZldGNoZXIudXNlci5yb2xlTmFtZSgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZldGNoZXIudXNlci5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmV0Y2hlci51c2VyLnJvbGUoKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZW1cIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZldGNoZXIudXNlci51c2VySWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1ncmFkZXItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtYWlsKGZldGNoZXIudXNlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBlbWFpbCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyLnJvbGVOYW1lKCkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWdyYWRlci1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwic3R1ZGVudCBncmFkZXNcXG4gICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmR1ZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1kdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBc3NpZ25tZW50IGR1ZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGltZShfdm0uZHVlKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdyYWRlcnMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbC1ncmFkZXItaXRlbVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIGNsLWdyYWRlci1pdGVtLWxvY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRhZ1wiOiBpdGVtLnRhZyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1ncmFkZXItaXRlbS1sb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkxvY2svVW5sb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2NrKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5sb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiL2NsL2ltZy9sb2NrLW9uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9jbC9pbWcvbG9jay1vZmYucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlVubG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGVhbWluZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtZXh0cmEtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRlYW1EaXN0cmlidXRlKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRlYW0gRGlzdHJpYnV0ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVicmljICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtdG9nZ2xlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtcnVicmljLWV4cGFuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFeHBhbmQgZm9yIHJ1YnJpY1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2wtcnVicmljYmxvY2sgY2wtY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVicmljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubWFudWFsICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJncmFkZS1tYW51YWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaHRtbCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoaXRlbS5odG1sKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmhhbmRib29rICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJoYW5kYm9va1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhbmRib29rLWRhdGFcIjogX3ZtLmhhbmRib29rRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImdyYWRlLWhpc3RvcnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGlzdG9yeTogaXRlbS5oaXN0b3J5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN1Ym1pc3Npb25zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IGZldGNoZXIudXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBfdm0uYXNzaWdudGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmV2aWV3aW5nICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKF92bS5yZXZpZXdpbmcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbnRhZzogX3ZtLmFzc2lnbnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IGZldGNoZXIudXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdyYWRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdyYWRlICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wdXRlZCBHcmFkZTogXCIgKyBfdm0uX3MoX3ZtLmdyYWRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkdyYWRlIE5vdCBBdmFpbGFibGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXIgc21hbGwgbm90aWNlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JhZGVzIGFyZSBub3QgYXZhaWxhYmxlIHVudGlsIGFsbCBwYXJ0cyBvZiB0aGUgYXNzaWdubWVudCBoYXZlIGJlZW5cXG4gICAgICAgICAgICAgICAgICBncmFkZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5ydWJyaWMubmFtZSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtcnVicmljYmxvY2sgY2wtc2hvd1wiLFxuICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5ydWJyaWMuc2hvdykgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwiZWRpdG9yXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtfdm0uX3YoXCJTdWJtaXRcIildKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWdyYWRlclwiIH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0ucnVicmljcywgZnVuY3Rpb24ocnVicmljKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtcnVicmljXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInJ1YnJpYy1lZGl0b3JcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBhc3NpZ250YWc6IF92bS5hc3NpZ250YWcsIHJ1YnJpYzogcnVicmljIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdG9nZ2xlXCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoXCJFeHBhbmQgZm9yIGluc3RydWN0aW9ucyBvbiBjcmVhdGluZyBydWJyaWNzLlwiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXRvZ2dsZWJsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiUnVicmljcyBhcmUgZW50ZXJlZCBhcyBIVE1MLiBBIGNvbW1vbiBmb3JtYXQgaXMgdG9cXG4gICAgICAgIGNyZWF0ZSBsaXN0cyB1c2luZyA8dWw+IGFuZCA8bGk+IHRhZ3MuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiQ29udGVudHMgb2YgYW4gPGxpPiBvciA8cD4gdGFnIGNhbiBiZSBtYWtlXFxuICAgICAgICBjbGlja2FibGUgc28gdGhleSBhdXRvbWF0aWNhbGx5IGFwcGVhciBpbiB0aGUgY29tbWVudFxcbiAgICAgICAgd2luZG93IGJ5IGFkZGluZyB0aGUgY2xhc3MgJ2l0ZW0nLiBBbGwgPGxpPiBjaGlsZHJlblxcbiAgICAgICAgb2YgYSA8dWw+IGNhbiBiZSBtYWRlIGNsaWNrYWJsZSBieSBhZGRpbmcgdGhlXFxuICAgICAgICBjbGFzcyAnaXRlbXMnOlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwcmVcIiwgeyBzdGF0aWNDbGFzczogXCJjb2RlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICc8dWw+XFxuICAgPGxpIGNsYXNzPVwiaXRlbVwiPlRoaXMgaXRlbSB3aWxsIGJlIGNsaWNrYWJsZTwvbGk+XFxuICAgPGxpPlRoaXMgaXRlbSB3aWxsIG5vdCBiZSBjbGlja2FibGU8L2xpPlxcbjwvdWw+XFxuXFxuPHAgY2xhc3M9XCJpdGVtXCI+QW5kIHRoaXMgd2lsbCBiZSBjbGlja2FibGU8L3A+XFxuXFxuPHVsIGNsYXNzPVwiaXRlbXNcIj5cXG4gICA8bGk+QWxsIG9mIHRoZXNlIGl0ZW1zIHdpbGwgYmUgY2xpY2thYmxlPC9saT5cXG4gICA8bGk+VGhpcyBvbmUsIHRvbyE8L2xpPlxcbjwvdWw+XFxuICAgICAgJ1xuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwidGFibGVcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtaGFuZGJvb2tcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICBfYyhcInRoXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNhdGVnb3J5XCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIk11bHRpcGxpZXI6IFwiICsgX3ZtLl9zKF92bS5pdGVtLm11bHRpcGxpZXIpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5pdGVtLmhhbmRib29rLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LnJ1YnJpYyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXRvZ2dsZSBjbC1zaW5nbGUtc3BhY2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW19jKFwiYVwiLCBbX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSldKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcnVicmljYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhjYXRlZ29yeS5ydWJyaWMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiBbX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSldXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgIV92bS5yZWFkb25seVxuICAgICAgICAgICAgICAgICAgPyBfdm0uX2woY2F0ZWdvcnkuZGVkdWN0ICsgMSwgZnVuY3Rpb24oZGVkdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0YWRhdGFbY2F0ZWdvcnkudGFnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1ldGFkYXRhW2NhdGVnb3J5LnRhZ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGVkdWN0IC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXRhZGF0YVtjYXRlZ29yeS50YWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZHVjdCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVkdWN0IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbXB1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVkdWN0aW9uKF92bS5tZXRhZGF0YVtjYXRlZ29yeS50YWddKSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRhZGF0YVtcIl9tYW51YWxfdGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1ldGFkYXRhWydfbWFudWFsX3RleHQnXVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5tZXRhZGF0YVtcIl9tYW51YWxfdGV4dFwiXSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJfbWFudWFsX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubWV0YWRhdGFbXCJfbWFudWFsX3RleHRcIl0pKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5yZWFkb25seVxuICAgICAgICAgICAgICAgID8gX3ZtLl9sKDUsIGZ1bmN0aW9uKGRlZHVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1ldGFkYXRhW1wiX21hbnVhbFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRhZGF0YVsnX21hbnVhbCddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicmFkaW9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGVkdWN0IC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShfdm0ubWV0YWRhdGFbXCJfbWFudWFsXCJdLCBkZWR1Y3QgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLm1ldGFkYXRhLCBcIl9tYW51YWxcIiwgZGVkdWN0IC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbXB1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVkdWN0aW9uKF92bS5tZXRhZGF0YVtcIl9tYW51YWxcIl0pKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgID8gX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRhZGF0YVtcIl9jb21tZW50XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0YWRhdGFbJ19jb21tZW50J11cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCIzXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWV0YWRhdGFbXCJfY29tbWVudFwiXSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5tZXRhZGF0YSwgXCJfY29tbWVudFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbW1lbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5tZXRhZGF0YVtcIl9jb21tZW50XCJdKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1kZWR1Y3RcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0udG90YWwpKV0pXG4gICAgICAgIF0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhcIiwgW192bS5fdihcIkRlZHVjdGlvblwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiMCB0byBtYXhcIildKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtaW50ZXJuYWxcIiB9LCBbXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb21tZW50XCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEZWR1Y3Rpb25cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtYXV0b2JhY2tcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uanNvbi5hc3NpZ25tZW50Lm5hbWUpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmpzb24uZGlzcHV0ZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtZGlzcHV0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiUGxlYXNlIGRpcmVjdCBhbGwgZ3JhZGluZyBpc3N1ZXMgdG8gXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uanNvbi5kaXNwdXRlKSB9IH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uanNvbi5ncmFkZXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5odG1sICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgaXRlbS5oYW5kYm9vayA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhpdGVtLmh0bWwpIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcImhhbmRib29rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0sIHJlYWRvbmx5OiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJncmFkZS1oaXN0b3J5XCIsIHsgYXR0cnM6IHsgaGlzdG9yeTogaXRlbS5oaXN0b3J5IH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdyYWRlXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uanNvbi5ncmFkZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KFwiQ29tcHV0ZWQgR3JhZGU6IFwiICsgX3ZtLl9zKF92bS5qc29uLmdyYWRlKSldKVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiR3JhZGUgTm90IEF2YWlsYWJsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlciBzbWFsbCBub3RpY2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIkdyYWRlcyBhcmUgbm90IGF2YWlsYWJsZSB1bnRpbCBhbGwgcGFydHMgb2YgdGhlIGFzc2lnbm1lbnQgaGF2ZSBiZWVuIGdyYWRlZC5cIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1hdXRvYmFja1wiIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSwgW1xuICAgICAgX3ZtLmdyYWRlICE9PSBudWxsXG4gICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmpzb24uYmVmb3JlKSB9IH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uanNvbi5kaXNwdXRlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGxlYXNlIGRpcmVjdCBhbGwgZ3JhZGluZyBpc3N1ZXMgdG8gXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmpzb24uZGlzcHV0ZSkgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdyYWRlLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtY2F0ZWdvcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5LnBvaW50cykgKyBcIiVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5LmdyYWRlKSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGNhdGVnb3J5LmFzc2lnbm1lbnRzLCBmdW5jdGlvbihhc3NpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2lnbm1lbnQucG9pbnRzID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBhc3NpZ25tZW50LnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWFzc2lnbm1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgKyBcIi9jbC9ncmFkZS9cIiArIGFzc2lnbm1lbnQudGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50Lm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGFzc2lnbm1lbnQucG9pbnRzICogMTApIC8gMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQuZ3JhZGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIkNvbXB1dGVkIEdyYWRlOiBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdyYWRlLmdyYWRlKSArXG4gICAgICAgICAgICAgICAgICBcIiBvdXQgb2YgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZS5hdmFpbGFibGUpICtcbiAgICAgICAgICAgICAgICAgIFwiIGF2YWlsYWJsZSBwb2ludHNcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBlcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmpzb24uYWZ0ZXIpIH0gfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFzc2lnbm1lbnRcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJHcmFkZVwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkdyYWRlXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1ncmFkZS1oaXN0b3J5XCIgfSwgW1xuICAgIF92bS5oaXN0b3J5Mi5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfdm0uaGlzdG9yeTIubGVuZ3RoID4gMVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXRvZ2dsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJleHBhbmRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc3BsYXkoX3ZtLmhpc3RvcnkyWzBdKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBFeHBhbmQgZm9yIGFkZGl0aW9uYWwgZ3JhZGluZyBoaXN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ3JhZGVzXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaGlzdG9yeTIsIGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheShoKSkpXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheShfdm0uaGlzdG9yeTJbMF0pKSldKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJuYXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1uYXZcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyc1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5ob21lTGluayB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaG9tZVwiIH0sIFtfdm0uX3YoXCJIb21lXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm1lbnUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDJkNjhiMGImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MmQ2OGIwYicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MmQ2OGIwYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MmQ2OGIwYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MmQ2OGIwYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MmQ2OGIwYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDk5OTNkNSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZU1hbnVhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGQ5OTkzZDUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGQ5OTkzZDUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGQ5OTkzZDUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDk5OTNkNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZDk5OTNkNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlTWFudWFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Y2Y5Y2RkZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01Y2Y5Y2RkZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWNmOWNkZGRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWNmOWNkZGQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWNmOWNkZGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWNmOWNkZGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNmOWNkZGQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWNmOWNkZGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjQyMTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2NoYXJsZXNvd2VuL09uZURyaXZlIC0gTWljaGlnYW4gU3RhdGUgVW5pdmVyc2l0eS9Qcm9qZWN0cy9Db3Vyc2VMaWIvY29tcGxldGUvLnlhcm4vY2FjaGUvdnVlLWhvdC1yZWxvYWQtYXBpLW5wbS0yLjMuNC01NDlhZTI2MzM3LTliZWZjMGIzZDYuemlwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAyYjY0MjE2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyYjY0MjE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyYjY0MjE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjQyMTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDJiNjQyMTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNMaW5rcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBlZjIzOGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjBlZjIzOGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjBlZjIzOGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjBlZjIzOGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBlZjIzOGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjBlZjIzOGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNNZW1iZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NmIwNTk4MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NmIwNTk4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTZiMDU5ODBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTZiMDU5ODAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTZiMDU5ODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTZiMDU5ODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2YjA1OTgwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU2YjA1OTgwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmZDE0NmE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2ZkMTQ2YTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2ZkMTQ2YTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2ZkMTQ2YTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmZDE0NmE4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdmZDE0NmE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDMwZjgxOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjAzMGY4MTknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjAzMGY4MTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjAzMGY4MTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDMwZjgxOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMDMwZjgxOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxNjY5ZDEzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMTY2OWQxMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMTY2OWQxMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMTY2OWQxMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxNjY5ZDEzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAxNjY5ZDEzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMTUyMzVjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1J1YnJpY0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1J1YnJpY0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtOWQ2YjkyZWE2Zi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2NoYXJsZXNvd2VuL09uZURyaXZlIC0gTWljaGlnYW4gU3RhdGUgVW5pdmVyc2l0eS9Qcm9qZWN0cy9Db3Vyc2VMaWIvY29tcGxldGUvLnlhcm4vY2FjaGUvdnVlLWhvdC1yZWxvYWQtYXBpLW5wbS0yLjMuNC01NDlhZTI2MzM3LTliZWZjMGIzZDYuemlwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2RmMTUyMzVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RmMTUyMzVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RmMTUyMzVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmMTUyMzVjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2RmMTUyMzVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljRWRpdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUnVicmljc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU2NmQ3NGImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUnVicmljc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NTY2ZDc0YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NTY2ZDc0YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NTY2ZDc0YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUnVicmljc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU2NmQ3NGImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTU2NmQ3NGInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNzRWRpdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyZGFiNzdmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MmRhYjc3ZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MmRhYjc3ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MmRhYjc3ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyZGFiNzdmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYyZGFiNzdmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjJiMGIyMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZUFzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZUFzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTlkNmI5MmVhNmYuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ZjJiMGIyMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZjJiMGIyMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZjJiMGIyMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjJiMGIyMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZjJiMGIyMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlQXNzaWdubWVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjcwNDE5ZTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjcwNDE5ZTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjcwNDE5ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjcwNDE5ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjcwNDE5ZTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjcwNDE5ZTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3N2ZhYTUzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3N2ZhYTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNzdmYWE1M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9jaGFybGVzb3dlbi9PbmVEcml2ZSAtIE1pY2hpZ2FuIFN0YXRlIFVuaXZlcnNpdHkvUHJvamVjdHMvQ291cnNlTGliL2NvbXBsZXRlLy55YXJuL2NhY2hlL3Z1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy05YmVmYzBiM2Q2LnppcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNzdmYWE1MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNzdmYWE1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNzdmYWE1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzdmYWE1MyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNzdmYWE1MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYmY0Y2IwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS05ZDZiOTJlYTZmLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2hhcmxlc293ZW4vT25lRHJpdmUgLSBNaWNoaWdhbiBTdGF0ZSBVbml2ZXJzaXR5L1Byb2plY3RzL0NvdXJzZUxpYi9jb21wbGV0ZS8ueWFybi9jYWNoZS92dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctOWJlZmMwYjNkNi56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGRiZjRjYjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGRiZjRjYjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGRiZjRjYjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYmY0Y2IwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBkYmY0Y2IwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiR3JhZGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvdXJzZWxpYlwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdmVuZG9yL2NsL2dyYWRlcy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==