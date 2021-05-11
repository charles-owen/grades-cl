/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/grades/_grades.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/grades/_grades.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _site_img_yellowpad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site/img/yellowpad.png */ "./vendor/cl/site/img/yellowpad.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_site_img_yellowpad_png__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment, div.cl-grader table.cl-handbook div.comment, div.cl-grader div.cl-rubric div.cl-show {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc; }\n\ndiv.cl-grades td.role {\n  white-space: nowrap; }\n\ndiv.cl-grader form {\n  position: relative; }\n\ndiv.cl-grader div.cl-grader-item {\n  position: relative;\n  background: white;\n  padding-bottom: 0.25em; }\n  div.cl-grader div.cl-grader-item h2 {\n    margin-top: -0.25em; }\n\ndiv.cl-grader div.cl-grader-item-locked {\n  position: -webkit-sticky;\n  /* Safari */\n  position: sticky;\n  top: 50px;\n  z-index: 100;\n  background: #f8fff8; }\n\ndiv.cl-grader a.link-button {\n  display: inline-block;\n  font-size: 0.85em;\n  padding: 0 2px; }\n\ndiv.cl-grader p.cl-title {\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: bold;\n  margin: 1em 0 0 0; }\n\ndiv.cl-grader p.cl-dispute {\n  text-align: center;\n  margin: 0; }\n\ndiv.cl-grader p.cl-role {\n  text-align: center; }\n\ndiv.cl-grader p.cl-role-staff {\n  color: #c41425; }\n\ndiv.cl-grader p.cl-due {\n  text-align: center;\n  font-style: italic;\n  font-weight: normal;\n  color: #c41425; }\n\ndiv.cl-grader button.cl-grader-button {\n  font-style: italic;\n  font-size: 0.9em;\n  color: black; }\n\ndiv.cl-grader a.cl-extra-link {\n  display: block;\n  float: right;\n  font-size: 0.5em;\n  padding-top: 1em; }\n\ndiv.cl-grader tr.cl-category td {\n  text-align: right; }\n\ndiv.cl-grader tr.cl-category td:first-child {\n  text-align: left; }\n\ndiv.cl-grader tr.cl-assignment td {\n  text-align: right; }\n\ndiv.cl-grader tr.cl-assignment td:first-child {\n  text-align: left;\n  padding-left: 3em; }\n\ndiv.cl-grader div.cl-grade, div.cl-grader div.grader {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start; }\n  div.cl-grader div.cl-grade label, div.cl-grader div.cl-grade div.label, div.cl-grader div.grader label, div.cl-grader div.grader div.label {\n    font-style: italic; }\n    div.cl-grader div.cl-grade label a, div.cl-grader div.cl-grade div.label a, div.cl-grader div.grader label a, div.cl-grader div.grader div.label a {\n      font-size: 0.85em;\n      text-decoration: none;\n      padding-left: 1em; }\n  div.cl-grader div.cl-grade div.comment, div.cl-grader div.grader div.comment {\n    flex: 1 1 auto;\n    padding: 0 20px 0 0; }\n    div.cl-grader div.cl-grade div.comment textarea, div.cl-grader div.grader div.comment textarea {\n      display: block;\n      width: 100%; }\n    div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {\n      white-space: pre-wrap;\n      background: #f0f0f0;\n      font-style: normal;\n      border: 1px solid #a9a9a9;\n      height: 120px;\n      overflow: auto;\n      padding: 2px; }\n  div.cl-grader div.cl-grade div.points, div.cl-grader div.grader div.points {\n    flex: 0 0 auto;\n    width: 5em;\n    text-align: center;\n    padding: 45px 5px 0 0; }\n    div.cl-grader div.cl-grade div.points input, div.cl-grader div.cl-grade div.points div.value, div.cl-grader div.grader div.points input, div.cl-grader div.grader div.points div.value {\n      display: block;\n      width: 100%;\n      text-align: center;\n      font-style: normal;\n      font-weight: bold; }\n    div.cl-grader div.cl-grade div.points span.not, div.cl-grader div.grader div.points span.not {\n      font-size: 0.8em;\n      font-style: italic; }\n  div.cl-grader div.cl-grade div.value, div.cl-grader div.grader div.value {\n    padding: 2px 1px; }\n    div.cl-grader div.cl-grade div.value a, div.cl-grader div.grader div.value a {\n      text-decoration: none;\n      color: black; }\n\ndiv.cl-grader table.cl-handbook {\n  width: 90%; }\n  div.cl-grader table.cl-handbook td:last-child, div.cl-grader table.cl-handbook th:last-child {\n    width: 1px;\n    white-space: nowrap; }\n  div.cl-grader table.cl-handbook input[type=radio] {\n    display: inline-block;\n    padding: 0 2px;\n    margin: 0 2px; }\n  div.cl-grader table.cl-handbook input[type=text] {\n    width: 100%; }\n  div.cl-grader table.cl-handbook textarea {\n    width: 100%; }\n  div.cl-grader table.cl-handbook td.cl-deduct {\n    text-align: center;\n    font-size: 1.5em; }\n  div.cl-grader table.cl-handbook div.comment {\n    white-space: pre;\n    background: #f0f0f0;\n    font-style: normal;\n    border: 1px solid #a9a9a9;\n    height: 80px;\n    overflow: auto;\n    padding: 2px;\n    margin: 0.3em 0; }\n\ndiv.cl-grader p.cl-rubric-expand {\n  margin-bottom: 0.1em; }\n\ndiv.cl-grader div.cl-rubricblock {\n  background: #e8f7f3;\n  padding: 5px;\n  border: 1px #808080 solid;\n  word-wrap: normal;\n  font-size: 0.9em; }\n  div.cl-grader div.cl-rubricblock p:first-child, div.cl-grader div.cl-rubricblock ul:first-child {\n    margin-top: 0; }\n  div.cl-grader div.cl-rubricblock p:last-child, div.cl-grader div.cl-rubricblock ul:last-child {\n    margin-bottom: 0; }\n  div.cl-grader div.cl-rubricblock li.item, div.cl-grader div.cl-rubricblock p.item, div.cl-grader div.cl-rubricblock ul.items li {\n    color: #900000;\n    cursor: pointer; }\n  div.cl-grader div.cl-rubricblock li.item:hover, div.cl-grader div.cl-rubricblock p.item:hover, div.cl-grader div.cl-rubricblock ul.items li:hover {\n    color: #c00000; }\n\ndiv.cl-grader textarea {\n  background: #f0f0f0;\n  font-style: normal; }\n\ndiv.cl-grader textarea.yellow-pad {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\ndiv.cl-grader div.grade {\n  border-top: 1px solid black; }\n  div.cl-grader div.grade p:first-child {\n    text-align: center;\n    font-size: 1.2em; }\n\ndiv.cl-grader div.cl-rubric div.cl-show {\n  margin: 1em 0;\n  word-wrap: normal;\n  min-height: 8em; }\n\ndiv.cl-grader div.cl-rubric textarea {\n  font-size: 0.9em;\n  margin: 1em 0;\n  background: #f0f0f0;\n  font-style: normal;\n  width: 100%;\n  min-height: 8em; }\n", "",{"version":3,"sources":["webpack://./vendor/cl/grades/sass/partials/_grading.scss","webpack://./vendor/cl/site/sass/modules/_colors.scss"],"names":[],"mappings":"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","sourcesContent":["@import '~site-cl/sass/modules/colors';\r\n\r\ndiv.cl-grades {\r\n  td.role {\r\n    white-space: nowrap;\r\n  }\r\n}\r\n\r\ndiv.cl-grader {\r\n  form {\r\n    position: relative;\r\n  }\r\n\r\n  div.cl-grader-item {\r\n    position: relative;\r\n    background: white;\r\n    padding-bottom: 0.25em;\r\n\r\n    h2 {\r\n      margin-top: -0.25em;\r\n    }\r\n  }\r\n\r\n  div.cl-grader-item-locked {\r\n    position: -webkit-sticky; /* Safari */\r\n    position: sticky;\r\n    top: 50px;\r\n    z-index: 100;\r\n    background: #f8fff8;\r\n  }\r\n\r\n  a.link-button {\r\n    display: inline-block;\r\n    font-size: 0.85em;\r\n    padding: 0 2px;\r\n  }\r\n\r\n  p.cl-title {\r\n    text-align: center;\r\n    font-size: 1.1em;\r\n    font-weight: bold;\r\n    margin: 1em 0 0 0;\r\n  }\r\n\r\n  p.cl-dispute {\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n\r\n  p.cl-role {\r\n    text-align: center;\r\n  }\r\n\r\n  p.cl-role-staff {\r\n    color: $comp;\r\n  }\r\n\r\n  p.cl-due {\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-weight: normal;\r\n    color: $comp;\r\n  }\r\n\r\n  button.cl-grader-button {\r\n    font-style: italic;\r\n    font-size: 0.9em;\r\n    color: black;\r\n  }\r\n\r\n  a.cl-extra-link {\r\n    display: block;\r\n    float: right;\r\n    font-size: 0.5em;\r\n    padding-top: 1em;\r\n  }\r\n\r\n  tr.cl-category {\r\n    td {\r\n      text-align: right;\r\n    }\r\n\r\n    td:first-child {\r\n      text-align: left;\r\n    }\r\n  }\r\n\r\n  tr.cl-assignment {\r\n    td {\r\n      text-align: right;\r\n    }\r\n\r\n    td:first-child {\r\n      text-align: left;\r\n      padding-left: 3em;\r\n    }\r\n  }\r\n\r\n  div.cl-grade, div.grader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n\r\n    label, div.label {\r\n      font-style: italic;\r\n\r\n      a {\r\n        font-size: 0.85em;\r\n        text-decoration: none;\r\n        padding-left: 1em;\r\n      }\r\n    }\r\n\r\n    div.comment {\r\n      flex: 1 1 auto;\r\n      padding: 0 20px 0 0;\r\n\r\n      textarea {\r\n        display: block;\r\n        width: 100%;\r\n      }\r\n\r\n      div.comment {\r\n        @extend %shadow;\r\n        white-space: pre-wrap;\r\n        background: #f0f0f0;\r\n        font-style: normal;\r\n        border: 1px solid #a9a9a9;\r\n        height: 120px;\r\n        overflow: auto;\r\n        padding: 2px;\r\n      }\r\n    }\r\n\r\n    div.points {\r\n      flex: 0 0 auto;\r\n      width: 5em;\r\n      text-align: center;\r\n      padding: 45px 5px 0 0;\r\n\r\n      input, div.value {\r\n        display: block;\r\n        width: 100%;\r\n        text-align: center;\r\n        font-style: normal;\r\n        font-weight: bold;\r\n      }\r\n\r\n      span.not {\r\n        font-size: 0.8em;\r\n        font-style: italic;\r\n      }\r\n    }\r\n\r\n    div.value {\r\n      padding: 2px 1px;\r\n      a {\r\n        text-decoration: none;\r\n        color: black;\r\n      }\r\n    }\r\n  }\r\n\r\n  table.cl-handbook {\r\n    width: 90%;\r\n\r\n    td:last-child, th:last-child {\r\n      width: 1px;\r\n      white-space: nowrap;\r\n    }\r\n\r\n    input[type=radio] {\r\n      display: inline-block;\r\n      padding: 0 2px;\r\n      margin: 0 2px;\r\n    }\r\n\r\n    input[type=text] {\r\n      width: 100%;\r\n    }\r\n\r\n    textarea {\r\n      width: 100%;\r\n    }\r\n\r\n    td.cl-deduct {\r\n      text-align: center;\r\n      font-size: 1.5em;\r\n    }\r\n\r\n    div.comment {\r\n      @extend %shadow;\r\n      white-space: pre;\r\n      background: #f0f0f0;\r\n      font-style: normal;\r\n      border: 1px solid #a9a9a9;\r\n      height: 80px;\r\n      overflow: auto;\r\n      padding: 2px;\r\n      margin: 0.3em 0;\r\n    }\r\n  }\r\n\r\n  p.cl-rubric-expand {\r\n    margin-bottom: 0.1em;\r\n  }\r\n\r\n  div.cl-rubricblock {\r\n    background: $very-light-primary;\r\n    padding: 5px;\r\n    border: 1px #808080 solid;\r\n    word-wrap: normal;\r\n    font-size: 0.9em;\r\n\r\n    p:first-child, ul:first-child {\r\n      margin-top: 0;\r\n    }\r\n\r\n    p:last-child, ul:last-child {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    li.item, p.item, ul.items li {\r\n      color: $very-light-primary-link;\r\n      cursor: pointer;\r\n    }\r\n\r\n    li.item:hover, p.item:hover, ul.items li:hover {\r\n      color: $very-light-primary-hover;\r\n    }\r\n  }\r\n\r\n  textarea {\r\n    background: #f0f0f0;\r\n    font-style: normal;\r\n  }\r\n\r\n  textarea.yellow-pad {\r\n    background: url('../../../site/img/yellowpad.png');\r\n  }\r\n\r\n  div.grade {\r\n    border-top: 1px solid black;\r\n\r\n    p:first-child {\r\n      text-align: center;\r\n      font-size: 1.2em;\r\n    }\r\n  }\r\n\r\n  div.cl-rubric {\r\n\r\n\r\n    div.cl-show {\r\n      @extend %shadow;\r\n      margin: 1em 0;\r\n      word-wrap: normal;\r\n      min-height: 8em;\r\n    }\r\n\r\n    textarea {\r\n      font-size: 0.9em;\r\n      margin: 1em 0;\r\n      background: #f0f0f0;\r\n      font-style: normal;\r\n      width: 100%;\r\n      min-height: 8em;\r\n    }\r\n  }\r\n}\r\n","// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$accent: #607D8B;\r\n\r\n$toast-background: #151515;\r\n$toast-text: white;\r\n\r\n$header-background: #535054;\r\n$header-text: #eeeeee;\r\n\r\n// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$primary: #00723f;\r\n$light-primary: #44a26b;\r\n$very-light-primary: #e8f7f3;\r\n$dark-primary: #005223;\r\n$primary-text: #212121;\r\n\r\n$seconda: #00909e;\r\n$secondb: #fcaf17;\r\n$secondc: #c89a58; // #e8d9b5;\r\n\r\n$comp: #c41425;\r\n$blind: #efc6ff;\r\n$comp-background: linear-gradient(#570102, #960606, #570102);\r\n$comp-border: #c7bdbb;\r\n\r\n// Menus\r\n$focus: #008183;\r\n$menu-background: #e8e8e8;\r\n$menu-hover: #d0d0d0;\r\n$menu-color: black;\r\n\r\n// Page background\r\n$background: #eeeeee;\r\n\r\n// Nav\r\n$nav-color: white;\r\n$nav-background: url('img/nav_pattern.png');\r\n$nav-2-color: #ffff99;\r\n$nav-2-background: url('img/nav_pattern-2.png');\r\n\r\n// Tables\r\n$table-gradient-from: #204c42;\r\n$table-gradient-to: #389b54;\r\n\r\n// Dialog boxes\r\n$dialog-gradient-from: #204c42;\r\n$dialog-gradient-to: #389b54;\r\n$dialog-bar-color: white;\r\n\r\n// Link colors\r\n$link: #808080;\r\n$visited: #968443;  // #b09d5b;\r\n$hover: #3366cc;\r\n\r\n$very-light-primary-link: #900000;\r\n$very-light-primary-hover: #c00000;\r\n\r\n\r\n$primary-link: white;\r\n$primary-visited: #dddddd;\r\n$secondb-visited: #555555;\r\n$autoback-link: #882222;\r\n$autoback-link-hover: #cc2222;\r\n\r\n$shadow-x: 3px;\r\n$shadow-y: 3px;\r\n$shadow-radius: 8px;\r\n$shadow-color: #ccc;\r\n\r\n$toggle-link-hover-color: #006600;\r\n\r\n// Boxes\r\n$box-border-color: #bdbdbd;\r\n\r\n// Cards\r\n$card-heading-background: #f2f2f2;\r\n$card-border-color: #cccccc;\r\n\r\n%shadow {\r\n  -moz-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  -webkit-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n}\r\n\r\n%noshadow {\r\n  -moz-box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-bulk-upload form {\n  margin-bottom: 1em;\n}\ndiv.cl-bulk-upload fieldset > div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\ndiv.cl-bulk-upload fieldset > div > div {\n    padding-right: 1em;\n}\ndiv.cl-bulk-upload fieldset > div > div p {\n      margin: 0 0 0.5em 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child {\n      margin: 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child input {\n        width: 6.5em;\n}\ndiv.cl-bulk-upload-dlg {\n  width: 400px;\n}\n", "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue"],"names":[],"mappings":"AAiLA;EAEI,kBAAkB;AAAA;AAFtB;EAQM,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AAAA;AAVvB;IAaQ,kBAAkB;AAAA;AAb1B;MAgBU,mBAAmB;AAAA;AAhB7B;MAoBU,SAAS;AAAA;AApBnB;QAuBY,YAAY;AAAA;AAQxB;EACE,YAAY;AAAA","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndiv.cl-bulk-upload {\n  form {\n    margin-bottom: 1em;\n  }\n\n  fieldset {\n\n    > div {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n\n      > div {\n        padding-right: 1em;\n\n        p {\n          margin: 0 0 0.5em 0;\n        }\n\n        p:last-child {\n          margin: 0;\n\n          input {\n            width: 6.5em;\n          }\n        }\n      }\n    }\n  }\n}\n\ndiv.cl-bulk-upload-dlg {\n  width: 400px;\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "td[data-v-5cf9cddd] {\n  min-width: 30px;\n}\ndiv.category[data-v-5cf9cddd] {\n  color: #fcaf17;\n}\n", "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Console/GradesAll.vue","webpack://./vendor/cl/site/sass/modules/_colors.scss"],"names":[],"mappings":"AA8GA;EACE,eAAe;AAAA;AAGf;EACE,cChGa;AAAA","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  @import '~site-cl/sass/modules/colors';\n\ntd {\n  min-width: 30px;\n}\n\n  div.category {\n    color: $secondb;\n  }\n","// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$accent: #607D8B;\r\n\r\n$toast-background: #151515;\r\n$toast-text: white;\r\n\r\n$header-background: #535054;\r\n$header-text: #eeeeee;\r\n\r\n// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$primary: #00723f;\r\n$light-primary: #44a26b;\r\n$very-light-primary: #e8f7f3;\r\n$dark-primary: #005223;\r\n$primary-text: #212121;\r\n\r\n$seconda: #00909e;\r\n$secondb: #fcaf17;\r\n$secondc: #c89a58; // #e8d9b5;\r\n\r\n$comp: #c41425;\r\n$blind: #efc6ff;\r\n$comp-background: linear-gradient(#570102, #960606, #570102);\r\n$comp-border: #c7bdbb;\r\n\r\n// Menus\r\n$focus: #008183;\r\n$menu-background: #e8e8e8;\r\n$menu-hover: #d0d0d0;\r\n$menu-color: black;\r\n\r\n// Page background\r\n$background: #eeeeee;\r\n\r\n// Nav\r\n$nav-color: white;\r\n$nav-background: url('img/nav_pattern.png');\r\n$nav-2-color: #ffff99;\r\n$nav-2-background: url('img/nav_pattern-2.png');\r\n\r\n// Tables\r\n$table-gradient-from: #204c42;\r\n$table-gradient-to: #389b54;\r\n\r\n// Dialog boxes\r\n$dialog-gradient-from: #204c42;\r\n$dialog-gradient-to: #389b54;\r\n$dialog-bar-color: white;\r\n\r\n// Link colors\r\n$link: #808080;\r\n$visited: #968443;  // #b09d5b;\r\n$hover: #3366cc;\r\n\r\n$very-light-primary-link: #900000;\r\n$very-light-primary-hover: #c00000;\r\n\r\n\r\n$primary-link: white;\r\n$primary-visited: #dddddd;\r\n$secondb-visited: #555555;\r\n$autoback-link: #882222;\r\n$autoback-link-hover: #cc2222;\r\n\r\n$shadow-x: 3px;\r\n$shadow-y: 3px;\r\n$shadow-radius: 8px;\r\n$shadow-color: #ccc;\r\n\r\n$toggle-link-hover-color: #006600;\r\n\r\n// Boxes\r\n$box-border-color: #bdbdbd;\r\n\r\n// Cards\r\n$card-heading-background: #f2f2f2;\r\n$card-border-color: #cccccc;\r\n\r\n%shadow {\r\n  -moz-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  -webkit-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n}\r\n\r\n%noshadow {\r\n  -moz-box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div#cl-column-chooser-component[data-v-56b05980] {\n  padding: 1em;\n}\ndiv#cl-column-chooser-component p[data-v-56b05980] {\n    text-align: left;\n}\ndiv#cl-column-chooser-component div.cl-parts[data-v-56b05980] {\n    display: table;\n    margin: auto;\n}\ndiv#cl-column-chooser-component div.cl-parts > div[data-v-56b05980] {\n      display: table-row;\n}\ndiv#cl-column-chooser-component div.cl-parts > div > div[data-v-56b05980]:first-child {\n        padding-right: 1em;\n        text-align: right;\n}\ndiv#cl-column-chooser-component div.cl-parts > div > div[data-v-56b05980] {\n        display: table-cell;\n        height: 2em;\n}\ndiv#cl-column-chooser-component div.cl-parts div.cl-comment[data-v-56b05980] {\n      font-style: italic;\n      font-size: 0.85em;\n}\n", "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue"],"names":[],"mappings":"AA8EA;EACI,YAAY;AAAA;AADhB;IAGQ,gBAAgB;AAAA;AAHxB;IAOQ,cAAc;IACd,YAAY;AAAA;AARpB;MAWY,kBAAkB;AAAA;AAX9B;QAcgB,kBAAkB;QAClB,iBAAiB;AAAA;AAfjC;QAmBgB,mBAAmB;QACnB,WAAW;AAAA;AApB3B;MAyBY,kBAAkB;MAClB,iBAAiB;AAAA","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\ndiv#cl-column-chooser-component {\r\n    padding: 1em;\r\n    p {\r\n        text-align: left;\r\n    }\r\n\r\n    div.cl-parts {\r\n        display: table;\r\n        margin: auto;\r\n\r\n        >div {\r\n            display: table-row;\r\n\r\n            >div:first-child {\r\n                padding-right: 1em;\r\n                text-align: right;\r\n            }\r\n\r\n            >div {\r\n                display: table-cell;\r\n                height: 2em;\r\n            }\r\n        }\r\n\r\n        div.cl-comment {\r\n            font-style: italic;\r\n            font-size: 0.85em;\r\n        }\r\n\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.cl-grade-history[data-v-177faa53] {\n  max-width: 600px;\n  margin: 1em 0;\n}\np[data-v-177faa53] {\n  font-style: italic;\n  font-size: 0.85em;\n}\np.expander[data-v-177faa53] {\n  margin-bottom: 0;\n}\ndiv.grades[data-v-177faa53] {\n  padding: 2px 0 2px 18px;\n  background-color: #ddffdd;\n}\ndiv.grades p[data-v-177faa53] {\n    margin: 0;\n    padding: 2px 0 0 0;\n}\n", "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Util/GradeHistoryComponent.vue"],"names":[],"mappings":"AAoDA;EACE,gBAAgB;EAChB,aAAa;AAAA;AAEf;EACE,kBAAkB;EAClB,iBAAiB;AAAA;AAGnB;EACE,gBAAgB;AAAA;AAElB;EACE,uBAAuB;EACvB,yBAAyB;AAAA;AAF3B;IAKI,SAAS;IACT,kBAAkB;AAAA","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndiv.cl-grade-history {\n  max-width: 600px;\n  margin: 1em 0;\n}\np {\n  font-style: italic;\n  font-size: 0.85em;\n}\n\np.expander {\n  margin-bottom: 0;\n}\ndiv.grades {\n  padding: 2px 0 2px 18px;\n  background-color: #ddffdd;\n\n  p {\n    margin: 0;\n    padding: 2px 0 0 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./vendor/cl/grades/_grades.scss":
/*!***************************************!*\
  !*** ./vendor/cl/grades/_grades.scss ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_grades.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/grades/_grades.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_grades.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/grades/_grades.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./_grades.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./vendor/cl/grades/_grades.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue":
/*!******************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&");
/* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('42d68b0b')) {
      api.createRecord('42d68b0b', component.options)
    } else {
      api.reload('42d68b0b', component.options)
    }
    module.hot.accept(/*! ./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&");
(function () {
      api.rerender('42d68b0b', {
        render: _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeManual.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeManual.vue ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&");
/* harmony import */ var _GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeManual.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4d9993d5')) {
      api.createRecord('4d9993d5', component.options)
    } else {
      api.reload('4d9993d5', component.options)
    }
    module.hot.accept(/*! ./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&");
(function () {
      api.rerender('4d9993d5', {
        render: _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradeManual.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
/* harmony import */ var _GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&");
/* harmony import */ var _GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5cf9cddd",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5cf9cddd')) {
      api.createRecord('5cf9cddd', component.options)
    } else {
      api.reload('5cf9cddd', component.options)
    }
    module.hot.accept(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
(function () {
      api.rerender('5cf9cddd', {
        render: _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesAll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
/* harmony import */ var _GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('02b64216')) {
      api.createRecord('02b64216', component.options)
    } else {
      api.reload('02b64216', component.options)
    }
    module.hot.accept(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
(function () {
      api.rerender('02b64216', {
        render: _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesLinks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
/* harmony import */ var _GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('20ef238e')) {
      api.createRecord('20ef238e', component.options)
    } else {
      api.reload('20ef238e', component.options)
    }
    module.hot.accept(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
(function () {
      api.rerender('20ef238e', {
        render: _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesMember.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue":
/*!*******************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&");
/* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&");
/* harmony import */ var _GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56b05980",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('56b05980')) {
      api.createRecord('56b05980', component.options)
    } else {
      api.reload('56b05980', component.options)
    }
    module.hot.accept(/*! ./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&");
(function () {
      api.rerender('56b05980', {
        render: _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue":
/*!*************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
/* harmony import */ var _Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grading.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7fd146a8')) {
      api.createRecord('7fd146a8', component.options)
    } else {
      api.reload('7fd146a8', component.options)
    }
    module.hot.accept(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
(function () {
      api.rerender('7fd146a8', {
        render: _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/Grading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
/* harmony import */ var _GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2030f819')) {
      api.createRecord('2030f819', component.options)
    } else {
      api.reload('2030f819', component.options)
    }
    module.hot.accept(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
(function () {
      api.rerender('2030f819', {
        render: _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradingAssignment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue":
/*!*****************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
/* harmony import */ var _GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('01669d13')) {
      api.createRecord('01669d13', component.options)
    } else {
      api.reload('01669d13', component.options)
    }
    module.hot.accept(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
(function () {
      api.rerender('01669d13', {
        render: _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradingAssignmentMember.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
/* harmony import */ var _RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.render,
  _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('df15235c')) {
      api.createRecord('df15235c', component.options)
    } else {
      api.reload('df15235c', component.options)
    }
    module.hot.accept(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
(function () {
      api.rerender('df15235c', {
        render: _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/RubricEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
/* harmony import */ var _RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.render,
  _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5566d74b')) {
      api.createRecord('5566d74b', component.options)
    } else {
      api.reload('5566d74b', component.options)
    }
    module.hot.accept(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
(function () {
      api.rerender('5566d74b', {
        render: _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/RubricsEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
/* harmony import */ var _Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Handbook.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('62dab77f')) {
      api.createRecord('62dab77f', component.options)
    } else {
      api.reload('62dab77f', component.options)
    }
    module.hot.accept(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
(function () {
      api.rerender('62dab77f', {
        render: _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Handbook/Handbook.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
/* harmony import */ var _GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5f2b0b20')) {
      api.createRecord('5f2b0b20', component.options)
    } else {
      api.reload('5f2b0b20', component.options)
    }
    module.hot.accept(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
(function () {
      api.rerender('5f2b0b20', {
        render: _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/User/GradeAssignment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue":
/*!*********************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
/* harmony import */ var _Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grades.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('270419e0')) {
      api.createRecord('270419e0', component.options)
    } else {
      api.reload('270419e0', component.options)
    }
    module.hot.accept(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
(function () {
      api.rerender('270419e0', {
        render: _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/User/Grades.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue":
/*!************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "177faa53",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('177faa53')) {
      api.createRecord('177faa53', component.options)
    } else {
      api.reload('177faa53', component.options)
    }
    module.hot.accept(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
(function () {
      api.rerender('177faa53', {
        render: _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Util/GradeHistoryComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony import */ var _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNav.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0dbf4cb0')) {
      api.createRecord('0dbf4cb0', component.options)
    } else {
      api.reload('0dbf4cb0', component.options)
    }
    module.hot.accept(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
(function () {
      api.rerender('0dbf4cb0', {
        render: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.render,
        staticRenderFns: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/site/js/Vue/PageNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeManual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradingAssignment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradingAssignmentMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RubricEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RubricsEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Handbook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeAssignment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grades.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_style_index_0_id_56b05980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=style&index=0&id=56b05980&lang=scss&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&":
/*!*************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeBulkUploadComponent_vue_vue_type_template_id_42d68b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeManual_vue_vue_type_template_id_4d9993d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeManual.vue?vue&type=template&id=4d9993d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesLinks.vue?vue&type=template&id=02b64216& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesMember.vue?vue&type=template&id=20ef238e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesUploadColumnChooser_vue_vue_type_template_id_56b05980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grading.vue?vue&type=template&id=7fd146a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&":
/*!************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RubricEditor.vue?vue&type=template&id=df15235c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");


/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");


/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Handbook.vue?vue&type=template&id=62dab77f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");


/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");


/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grades.vue?vue&type=template&id=270419e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");


/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");


/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeBulkUploadComponent.vue?vue&type=template&id=42d68b0b& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradeManual.vue?vue&type=template&id=4d9993d5& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradesUploadColumnChooser.vue?vue&type=template&id=56b05980&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8& ***!
  \***********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                                return _vm.submit($event)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f& ***!
  \*************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0& ***!
  \*******************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
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
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("Grades." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("2824afd5c6e8dc9ff27f")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "courselib:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/cl/dist/";
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
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecourselib"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
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
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./vendor/cl/grades/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZU1hbnVhbC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTGlua3MudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudC52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQ29uc29sZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0dyYWRlc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VWdWUuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9fZ3JhZGVzLnNjc3MiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/NDM4NSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT8zY2FmIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT8yNjEzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP2Y1MDMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9fZ3JhZGVzLnNjc3M/Y2FmMSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT8zOGUwIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlPzdmNzkiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP2UzYWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/OWY4NyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvc2l0ZS9pbWcveWVsbG93cGFkLnBuZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVNYW51YWwudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc01lbWJlci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnQudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY3NFZGl0b3IudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT85MDY1Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZU1hbnVhbC52dWU/Nzk1ZCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT80NzU0Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNMaW5rcy52dWU/Mzk1OSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTWVtYmVyLnZ1ZT9kMTcxIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT83Njc5Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nLnZ1ZT9kODRkIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudC52dWU/NzI5OCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlPzM3ODAiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY0VkaXRvci52dWU/ZjYzNSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljc0VkaXRvci52dWU/NDgxMSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZT85MTBmIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlPzkxNTkiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWU/MjRjOSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT84YTg1Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZT82ODEyIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlPzcxMjMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlTWFudWFsLnZ1ZT81MzM1Iiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlP2Y4OTgiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0xpbmtzLnZ1ZT80M2FhIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNNZW1iZXIudnVlPzlkZTkiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlPzUzNjAiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmcudnVlPzllMjkiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT84MTkzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/ODRjZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljRWRpdG9yLnZ1ZT9lMWQzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNzRWRpdG9yLnZ1ZT9lMTIxIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlP2NlYWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlQXNzaWdubWVudC52dWU/YmYzNCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVzLnZ1ZT8wODAyIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlPzNhYTUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VOYXYudnVlPzBmOWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJHcmFkZXMiLCJHcmFkZXNGYWN0b3J5IiwiU2l0ZSIsImNvbnNvbGUiLCJ1bmRlZmluZWQiLCJHcmFkZXNDb25zb2xlIiwiTWVtYmVyIiwiaW5zdGFsbCIsIkNvbnNvbGUiLCJjb21wb25lbnRzIiwiYWRkT3B0aW9uIiwiYXRMZWFzdCIsIkdSQURFUiIsInBhZ2UiLCJ0aXRsZSIsInJvdXRlIiwib3JkZXIiLCJjb21wb25lbnQiLCJHcmFkaW5nVnVlIiwiYWRkUm91dGVzIiwiR3JhZGluZ0Fzc2lnbm1lbnRWdWUiLCJwcm9wcyIsIkdyYWRpbmdBc3NpZ25tZW50TWVtYmVyVnVlIiwiUnVicmljc0VkaXRvclZ1ZSIsIkdyYWRlc0xpbmtzVnVlIiwiR3JhZGVzQWxsVnVlIiwiR3JhZGVzTWVtYmVyVnVlIiwidGFibGVzIiwiYWRkIiwiYXBpIiwiY3JlYXRlIiwic2l0ZSIsInJlYWR5IiwiUGFnZVZ1ZSIsIkdyYWRlQXNzaWdubWVudFZ1ZSIsIlBhZ2VOYXYiLCJHcmFkZXNWdWUiLCJzZWwiLCJuYXYiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2dGFnIiwidGVtcGxhdGUiLCJIZWFkZXIiLCJpbmZvIiwiaGVhZGVyIiwiRm9vdGVyIiwiZm9vdGVyIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInRleHRDb250ZW50Iiwic3RvcmUiLCJWdWUiLCJlbCIsImRhdGEiLCJt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QUFvQjtXQUN2QztXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7O1dBRUY7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBLEdBQUc7V0FDSDs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQSxDOzs7OztXQzdXQSxvQzs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IsMkJBQTJCO1dBQzdDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtX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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHFDQUFxQztXQUNyQztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDcmhCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImdyYWRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtYnVsay11cGxvYWRcIj5cclxuICAgIDxoMiBpZD1cImJ1bGtcIj5CdWxrIGdyYWRlIHVwbG9hZGluZzwvaDI+XHJcbiAgICA8cD5UaGlzIG9wdGlvbiBhY2NlcHRzIGZpbGVzIGluIENTViBmb3JtYXQgYXMgcHJvZHVjZWQgYnkgQ3Jvd2RNYXJrIGFuZCBvdGhlciBzeXN0ZW1zLiA8L3A+XHJcblxyXG4gICAgPGZvcm0gY2xhc3M9XCJmdWxsXCIgQHN1Ym1pdC5wcmV2ZW50PVwiYnVsa1VwbG9hZCgpXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICA8bGVnZW5kPkJ1bGsgVXBsb2FkIEZpbGU8L2xlZ2VuZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdj5GaWxlIHRvIHVwbG9hZDogPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD48aW5wdXQgbmFtZT1cImJ1bGtmaWxlXCIgdHlwZT1cImZpbGVcIiBAY2hhbmdlPVwiYnVsa0ZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiPjwvcD5cclxuICAgICAgICAgICAgPHA+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlByZXNzXCI+IHRvIHVwbG9hZCB0aGUgZmlsZSE8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEdyYWRlc1VwbG9hZENvbHVtbkNob29zZXJDb21wb25lbnQgZnJvbSAnLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ2Fzc2lnbnRhZycsICdwYXJ0cyddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJ1bGtGaWxlczogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBidWxrVXBsb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2l0ZSA9IHRoaXMuJHNpdGU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJ1bGtGaWxlcyA9PT0gbnVsbCB8fCB0aGlzLmJ1bGtGaWxlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuYnVsa0ZpbGVzWzBdO1xyXG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAvLyBDbG9zdXJlIHRvIGNhcHR1cmUgdGhlIGZpbGUgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG5cclxuICAgICAgICAgIC8vIERhdGEgd2Ugd2lsbCBzZW5kIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBmaWxlOiBlLnRhcmdldC5yZXN1bHQsXHJcbiAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uLFxyXG4gICAgICAgICAgICBtYXBwaW5nOiAnJyxcclxuICAgICAgICAgICAgY29tbWVudE1hcHBpbmc6ICcnLFxyXG4gICAgICAgICAgICBpZGNvbHVtbjogJydcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvL1xyXG4gICAgICAgICAgLy8gUmVhZCB0aGUgZmlyc3QgbGluZSBvZiB0aGUgQ1NWIGZpbGUgdG8gZ2V0IHRoZSBmaWVsZHNcclxuICAgICAgICAgIC8vXHJcbiAgICAgICAgICBjb25zdCByZSA9IC9eLiokL207XHJcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IGUudGFyZ2V0LnJlc3VsdC5tYXRjaChyZSk7XHJcbiAgICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3IHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3goJ0ludmFsaWQgRmlsZScsICdGaWxlIGRvZXMgbm90IGNvbnRhaW4gZ3JhZGUgZGF0YS4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpdGUuRGlhbG9nLk1lc3NhZ2VCb3guT0ssICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBtYXRjaFswXS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzO1xyXG4gICAgICAgICAgbGV0IG1hcHBpbmcgPSB7fTtcclxuICAgICAgICAgIGxldCBjb21tZW50TWFwcGluZyA9IHt9O1xyXG4gICAgICAgICAgbGV0IGlkQ29sdW1uID0ge307XHJcblxyXG4gICAgICAgICAgbmV3IHNpdGUuRGlhbG9nKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDb2x1bW4gU2VsZWN0aW9uJyxcclxuICAgICAgICAgICAgY29udGVudDogJzxkaXYgaWQ9XCJjbC1jb2x1bW4tY2hvb3NlclwiPjwvZGl2PicsXHJcbiAgICAgICAgICAgIGFkZENsYXNzOiAnY2wtY29sdW1uLWNob29zZXItZGxnJyxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnVXBsb2FkJyxcclxuICAgICAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgYW55ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGluZ1twYXJ0LnRhZ10gIT09ICcqbm9uZSonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoIWFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpdGUudG9hc3QodGhpcywgXCJObyBjb2x1bW5zIHNlbGVjdGVkIHRvIHVwbG9hZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEubWFwcGluZyA9IEpTT04uc3RyaW5naWZ5KG1hcHBpbmcpO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmNvbW1lbnRNYXBwaW5nID0gSlNPTi5zdHJpbmdpZnkoY29tbWVudE1hcHBpbmcpO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmlkY29sdW1uID0gaWRDb2x1bW4uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICBzaXRlLmFwaS5wb3N0KCcvYXBpL2dyYWRlL2J1bGsvdXBsb2FkLycgKyB0aGlzLmFzc2lnbnRhZywgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSByZXNwb25zZS5nZXREYXRhKCdyZXN1bHRzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlLnRvYXN0KHRoaXMsICcnICsgcmVzdWx0cy5hdHRyaWJ1dGVzLmdyYWRlcyArIFwiIGdyYWRlcyBzdWNjZXNzZnVsbHkgdXBsb2FkZWQgZm9yIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLmF0dHJpYnV0ZXMudXNlcnMgKyAnIHVzZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmdvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcblxyXG5cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIENyZWF0ZSBhIFZ1ZSBpbnNpZGUgdGhlIGRpYWxvZyBib3hcclxuICAgICAgICAgIG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgICAgIGVsOiAnI2NsLWNvbHVtbi1jaG9vc2VyJyxcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0czogcGFydHMsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxyXG4gICAgICAgICAgICAgICAgbWFwcGluZzogbWFwcGluZyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRNYXBwaW5nOiBjb21tZW50TWFwcGluZyxcclxuICAgICAgICAgICAgICAgIGlkQ29sdW1uOiBpZENvbHVtblxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPGNob29zZXIgOnBhcnRzPVwicGFydHNcIiA6Y29sdW1ucz1cImNvbHVtbnNcIj48L2Nob29zZXI+YCxcclxuICAgICAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAgICdjaG9vc2VyJzogR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3NlckNvbXBvbmVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBzaXRlLnRvYXN0KHRoaXMsIFwiRXJyb3IgcmVhZGluZyBmaWxlXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHNpdGUudG9hc3QodGhpcywgXCJGaWxlIHJlYWQgYWJvcnRlZFwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSZWFkIGluIHRoZSBmaWxlXHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuLy8gTm90aWNlOiBOb3Qgc2NvcGVkIVxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBkaXYuY2wtYnVsay11cGxvYWQge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZHNldCB7XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2LjVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmNsLWJ1bGstdXBsb2FkLWRsZyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcblxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2wtZ3JhZGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+Q29tbWVudCA8YSBAY2xpY2sucHJldmVudD1cImNvbXB1dGUoKVwiPmNvbXB1dGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cIml0ZW0ubWFudWFsLmNvbW1lbnRcIiByb3dzPVwiNlwiIGNsYXNzPVwiY29tbWVudFwiIDpuYW1lPVwiaXRlbS50YWcgKyAnLWNvbW1lbnQnXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRzXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Qb2ludHNcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInBvaW50c1wiIHYtbW9kZWw9XCJpdGVtLm1hbnVhbC5wb2ludHNcIiB0eXBlPVwibnVtYmVyXCIgOmlkPVwiaXRlbS50YWcgKyAnLXBvaW50cydcIiA6bmFtZT1cIml0ZW0udGFnICsgJy1wb2ludHMnXCI+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj5BdmFpbGFibGU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJmaWxsSW5Qb2ludHMoKVwiIDpkYXRhLWlkPVwiaXRlbS50YWcgKyAnLXBvaW50cydcIiB0aXRsZT1cIkNsaWNrIHRvIGZpbGwgaW4gcG9pbnRzXCI+e3tpdGVtLm1hbnVhbC5hdmFpbGFibGV9fTwvYT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hbnVhbCBncmFkZSBlbnRyeSBmb3JtLlxyXG4gICAgICogQGNvbnN0cnVjdG9yIEdyYWRlTWFudWFsVnVlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogWydpdGVtJ10sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZmlsbEluUG9pbnRzKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtLm1hbnVhbC5wb2ludHMgPSB0aGlzLml0ZW0ubWFudWFsLmF2YWlsYWJsZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcHV0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gdGhpcy5pdGVtLm1hbnVhbC5jb21tZW50LnNwbGl0KC9cXHI/XFxuLyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmVnID0gMDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IGxpbmUubWF0Y2goL15cXHMqKFsrLV0/KShbMS05XVswLTldKikoW14wLTldfCQpLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW5zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRva2Vuc1sxXSA9PT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWcgLT0gK3Rva2Vuc1syXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSArdG9rZW5zWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgKiBJZiB3ZSBvbmx5IGhhdmUgbmVnYXRpdmUgdmFsdWVzLCB0aGF0IGlzIHN1YnRyYWN0ZWQgZnJvbVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGF2YWlsYWJsZSBwb2ludHMuIElmIHdlIG9ubHkgaGF2ZSBwb3NpdGl2ZSB2YWx1ZXMsIHRoZXlcclxuICAgICAgICAgICAgICAgICAqIGFyZSBhZGRlZCB0byBtYWtlIHVwIHRoZSBwb2ludHMuIElmIHdlIGhhdmUgYm90aCwgdGhlIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICogYXJlIGFsbCBhZGRlZCB0b2dldGhlciB0byBtYWtlIHVwIHRoZSB0b3RhbCBwb2ludHMuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGlmKG5lZyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBvcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0ubWFudWFsLnBvaW50cyA9IHRoaXMuaXRlbS5tYW51YWwuYXZhaWxhYmxlICsgbmVnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5tYW51YWwucG9pbnRzID0gcG9zICsgbmVnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocG9zID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbS5tYW51YWwucG9pbnRzID0gdGhpcy5pdGVtLm1hbnVhbC5hdmFpbGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtLm1hbnVhbC5wb2ludHMgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtZW1iZXJzLWZldGNoZXI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImNhdGVnb3J5IGluIHNlY3Rpb24uYXNzaWdubWVudHMuY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiYXNzaWdubWVudCBpbiBjYXRlZ29yeS5hc3NpZ25tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+PGRpdiBjbGFzcz1cInNtYWxsXCI+e3thc3NpZ25tZW50LnNob3J0bmFtZX19PC9kaXY+PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8dGg+PGRpdiBjbGFzcz1cInNtYWxsIGNhdGVnb3J5XCI+e3tjYXRlZ29yeS5uYW1lfX08L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gZmV0Y2hlci51c2Vyc1wiIDpjbGFzcz1cInVzZXIucm9sZSgpICE9PSAnVCcgPyAnaWdub3JlJyA6ICcnXCI+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy8nICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIudXNlcklkfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy8nICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIubmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt7YXNzaWdubWVudEdyYWRlKHVzZXIsIGNhdGVnb3J5LCBhc3NpZ25tZW50KX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tjYXRlZ29yeUdyYWRlKHVzZXIsIGNhdGVnb3J5KX19PC90ZD5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlcnMtZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWUgPSBTaXRlLk1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5cdGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQWxsIGdyYWRlcyBmb3IgYWxsIG1lbWJlcnNcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkZXMvYWxsXHJcblx0ICogQGNvbnN0cnVjdG9yIEdyYWRlc0FsbFZ1ZVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2VjdGlvbjogbnVsbCxcclxuXHRcdFx0XHRncmFkZXM6IG51bGwsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdtZW1iZXJzRmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0bGV0IHVzZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcblx0XHRcdGxldCBtZW1iZXIgPSB1c2VyLm1lbWJlcjtcclxuXHRcdFx0dGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogR3JhZGVzJyk7XHJcblxyXG5cdFx0XHR0aGlzLiRzaXRlLmFwaS5nZXQoJy9hcGkvZ3JhZGUvYWxsJywge30pXHJcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5ncmFkZXMgPSByZXNwb25zZS5nZXREYXRhKCdncmFkZXMtYWxsJykuYXR0cmlidXRlcztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGFzc2lnbm1lbnRHcmFkZSh1c2VyLCBjYXRlZ29yeSwgYXNzaWdubWVudCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmdyYWRlcyA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICc/JztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCB1c2VyR3JhZGVzID0gdGhpcy5ncmFkZXNbdXNlci5tZW1iZXIuaWRdO1xyXG5cdFx0XHRcdGxldCBhc3NpZ25tZW50R3JhZGVzID0gdXNlckdyYWRlcy5jYXRlZ29yaWVzW2NhdGVnb3J5LnRhZ10uYXNzaWdubWVudHM7XHJcblx0XHRcdFx0Zm9yIChsZXQgYXNzaWdubWVudEdyYWRlIG9mIGFzc2lnbm1lbnRHcmFkZXMpIHtcclxuXHRcdFx0XHRcdGlmIChhc3NpZ25tZW50R3JhZGUudGFnID09PSBhc3NpZ25tZW50LnRhZykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYXNzaWdubWVudEdyYWRlLmdyYWRlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYXRlZ29yeUdyYWRlKHVzZXIsIGNhdGVnb3J5KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZ3JhZGVzID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJz8nO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHVzZXJHcmFkZXMgPSB0aGlzLmdyYWRlc1t1c2VyLm1lbWJlci5pZF07XHJcblx0XHRcdFx0bGV0IGNhdGVnb3J5R3JhZGUgPSB1c2VyR3JhZGVzLmNhdGVnb3JpZXNbY2F0ZWdvcnkudGFnXTtcclxuXHRcdFx0XHRyZXR1cm4gY2F0ZWdvcnlHcmFkZS5ncmFkZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgQGltcG9ydCAnfnNpdGUtY2wvc2Fzcy9tb2R1bGVzL2NvbG9ycyc7XHJcblxyXG50ZCB7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4gIGRpdi5jYXRlZ29yeSB7XHJcbiAgICBjb2xvcjogJHNlY29uZGI7XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPG1lbWJlcnMtZmV0Y2hlcj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCIgOmNsYXNzPVwidXNlci5yb2xlKCkgIT09ICdUJyA/ICdpZ25vcmUnIDogJydcIj5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzLycgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzLycgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci5uYW1lfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlci5yb2xlTmFtZSgpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlcnMtZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWUgPSBTaXRlLk1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5cdGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQWxsIHN0dWRlbnQgZ3JhZGUgbGlua3NcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkZXMvbGlua3NcclxuXHQgKiBAY29uc3RydWN0b3IgR3JhZGVzTGlua3NWdWVcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGdyYWRlczogbnVsbCxcclxuXHRcdFx0XHRwYXJ0czogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J21lbWJlcnNGZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWVcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogR3JhZGVzJyk7XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWdyYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPG1lbWJlci1mZXRjaGVyIHYtb246ZmV0Y2hlZD1cImZldGNoZWRcIiA6aWQ9XCJtZW1iZXJpZFwiIDpmYWlsbGluaz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzL2xpbmtzJ1wiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHByZXYtbmV4dCA6dXNlcj1cImZldGNoZXIudXNlclwiPjwvcHJldi1uZXh0PlxyXG4gICAgICAgICAgPGRpdiB2LWlmPVwiZmV0Y2hlci51c2VyICE9PSBudWxsICYmIGdyYWRlICE9PSBudWxsXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+QXNzaWdubWVudDwvdGg+PHRoPiZuYnNwOzwvdGg+PHRoPkdyYWRlPC90aD48dGg+Jm5ic3A7PC90aD48dGg+R3JhZGU8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImNhdGVnb3J5IGluIGdyYWRlLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImNsLWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPnt7Y2F0ZWdvcnkubmFtZX19PC90ZD48dGQ+e3tjYXRlZ29yeS5wb2ludHN9fSU8L3RkPjx0ZD57e2NhdGVnb3J5LmdyYWRlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJjbC1hc3NpZ25tZW50XCIgdi1mb3I9XCJhc3NpZ25tZW50IGluIGNhdGVnb3J5LmFzc2lnbm1lbnRzXCIgOmtleT1cImFzc2lnbm1lbnQudGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiYCR7cm9vdH0vY2wvY29uc29sZS9ncmFkaW5nLyR7YXNzaWdubWVudC50YWd9LyR7ZmV0Y2hlci51c2VyLm1lbWJlci5pZH1gXCI+e3thc3NpZ25tZW50Lm5hbWV9fTwvcm91dGVyLWxpbms+PC90ZD48dGQ+e3tNYXRoLnJvdW5kKGFzc2lnbm1lbnQucG9pbnRzICogMTApIC8gMTB9fSU8L3RkPjx0ZD57e2Fzc2lnbm1lbnQuZ3JhZGV9fTwvdGQ+PHRkIGNvbHNwYW49XCIyXCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPkNvbXB1dGVkIEdyYWRlOiB7e2dyYWRlLmdyYWRlfX0gb3V0IG9mIHt7Z3JhZGUuYXZhaWxhYmxlfX0gYXZhaWxhYmxlIHBvaW50c3t7cGVyfX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlci1mZXRjaGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBQcmV2TmV4dE1lbWJlclZ1ZSA9IFNpdGUuUHJldk5leHRNZW1iZXJWdWU7XHJcblx0Y29uc3QgTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZSA9IFNpdGUuTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuXHRjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnNvbGUgZ3JhZGVzIHByZXNlbnRhdGlvbiBmb3IgYSBtZW1iZXJcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkZXMvOm51bVxyXG5cdCAqIEBjb25zdHJ1Y3RvciBHcmFkZXNNZW1iZXJWdWVcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRleHRlbmRzOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuXHRcdHByb3BzOiBbJ21lbWJlcmlkJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y291cnNlOiB0aGlzLiRzdG9yZS5zdGF0ZS5jb3Vyc2UuY291cnNlLFxyXG5cdFx0XHRcdHNlY3Rpb246IG51bGwsXHJcblx0XHRcdFx0Z3JhZGU6IG51bGwsXHJcblx0XHRcdFx0cGVyOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRtZW1iZXJGZXRjaGVyOiBNZW1iZXJGZXRjaGVyQ29tcG9uZW50VnVlLFxyXG5cdFx0XHRwcmV2TmV4dDogUHJldk5leHRNZW1iZXJWdWUsXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5zZXRUaXRsZSgnOiBHcmFkZScpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZmV0Y2hlZCh1c2VyKSB7XHJcblx0XHRcdFx0dGhpcy5zZWN0aW9uID0gdXNlci5tZW1iZXIuZ2V0U2VjdGlvbih0aGlzLiRzdG9yZSk7XHJcblx0XHRcdFx0dGhpcy5zZXRUaXRsZSgnOiAnICsgdXNlci5uYW1lICsgJyBHcmFkZXMnKTtcclxuXHJcblx0XHRcdFx0dGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpL2dyYWRlL2dyYWRlLyR7dGhpcy5tZW1iZXJpZH1gLCB7fSlcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmdyYWRlID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGUnKS5hdHRyaWJ1dGVzO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmdyYWRlLmF2YWlsYWJsZSA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGVyID0gJygnICsgKHRoaXMuZ3JhZGUuZ3JhZGUgLyB0aGlzLmdyYWRlLmF2YWlsYWJsZSAqIDEwMCkudG9GaXhlZCgxKSArICclKSc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgaWQ9XCJjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnRcIj5cclxuICAgICAgICA8cD5NZW1iZXIgaWRlbnRpZmllciBjb2x1bW46XHJcbiAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwibWVtYmVySWRDb2x1bW4uaWRcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNvbHVtbiBpbiBjb2x1bW5zXCI+e3tjb2x1bW59fTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PjwvcD5cclxuXHJcbiAgICAgICAgPHA+TWVtYmVyIGlkZW50aWZpZXIgY2FuIGJlIGFuIGVtYWlsIGFkZHJlc3Mgb3IgdXNlciBJRC48L3A+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+U2VsZWN0IGNvbHVtbiBmb3IgZWFjaCBncmFkZSBpdGVtPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbC1wYXJ0c1wiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIocGFydCwgaW5kZXgpIGluIHBhcnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3twYXJ0Lm5hbWV9fTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJtYXBwaW5nW3BhcnQudGFnXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNvbHVtbiBpbiBjb2x1bW5TZWxlY3RcIj57e2NvbHVtbn19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbC1jb21tZW50XCI+Y29tbWVudDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJjb21tZW50TWFwcGluZ1twYXJ0LnRhZ11cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJjb2x1bW4gaW4gY29sdW1uU2VsZWN0XCI+e3tjb2x1bW59fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIC8qKlxyXG4gICAgICogQ2hvb3NlIHRoZSBDU1YgY29sdW1ucyBmb3IgZWFjaCBncmFkZSBjb21wb25lbnQgd2UgYXJlIGdvaW5nIHRvIHVwbG9hZC5cclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RydWN0b3IgR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3NlckNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsncGFydHMnLCAnY29sdW1ucyddLFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lbWJlcklkQ29sdW1uOiB7fSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblNlbGVjdDogW10sXHJcbiAgICAgICAgICAgICAgICBtYXBwaW5nOiB7fSxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRNYXBwaW5nOiB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7fSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICAvLyBTZWUgaWYgdGhlcmUgaXMgYW4gZW1haWwgY29sdW1uXHJcbiAgICAgICAgICAgIHRoaXMubWVtYmVySWRDb2x1bW4gPSB0aGlzLiRwYXJlbnQuaWRDb2x1bW47XHJcbiAgICAgICAgICAgIHRoaXMubWVtYmVySWRDb2x1bW4uaWQgPSB0aGlzLmNvbHVtbnNbMF07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gb2YgdGhpcy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZW1haWwnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW1iZXJJZENvbHVtbi5pZCA9IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5TZWxlY3QgPSBbJypub25lKiddLmNvbmNhdCh0aGlzLmNvbHVtbnMpO1xyXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmcgPSB0aGlzLiRwYXJlbnQubWFwcGluZztcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50TWFwcGluZyA9IHRoaXMuJHBhcmVudC5jb21tZW50TWFwcGluZztcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBpbml0aWFsbHkgZW1wdHlcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFydCBvZiB0aGlzLnBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcHBpbmdbcGFydC50YWddID0gJypub25lKic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRNYXBwaW5nW3BhcnQudGFnXSA9ICcqbm9uZSonO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuY2wtcGFydHMge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuXHJcbiAgICAgICAgICAgID5kaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID5kaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYuY2wtY29tbWVudCB7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICA8aDI+R3JhZGVzIFN1bW1hcnk8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy9hbGwnXCI+QWxsIFN0dWRlbnRzPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArICcvY2wvY29uc29sZS9ncmFkZXMvbGlua3MnXCI+QWxsIFN0dWRlbnRzIEdyYWRlIExpbmtzPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDxsaSB2LWlmPVwiZG93bmxvYWRQZXJtaXNzaW9uXCI+PGEgOmhyZWY9XCJyb290ICsgJy9jbC9ncmFkZXMvY3N2J1wiPkRvd25sb2FkIFN0dWRlbnQgR3JhZGVzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHYtaWY9XCJydWJyaWNEdW1wZXJQZXJtaXNzaW9uXCI+PGEgOmhyZWY9XCJyb290ICsgJy9jbC9ncmFkZXMvcnVicmljLWR1bXBlcidcIj5SdWJyaWMgRHVtcGVyPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICA8aDI+e3tjYXRlZ29yeS5uYW1lfX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaSB2LWlmPVwiY2F0ZWdvcnkuYXNzaWdubWVudHMubGVuZ3RoID09PSAwXCI+PGVtPlBlbmRpbmcuLi48L2VtPjwvbGk+XHJcbiAgICAgICAgICA8bGkgdi1mb3I9XCJhc3NpZ25tZW50IGluIGNhdGVnb3J5LmFzc2lnbm1lbnRzXCIgOmtleT1cImFzc2lnbm1lbnQudGFnXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJncmFkaW5nTGluayArIGFzc2lnbm1lbnQudGFnXCI+e3thc3NpZ25tZW50Lm5hbWV9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImxpbmstYnV0dG9uXCIgdi1pZj1cInVzZXIuYXRMZWFzdCh0YSlcIiA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL3J1YnJpYy8nICsgYXNzaWdubWVudC50YWdcIj5ydWJyaWNzPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgY29uc3QgTWVtYmVyID0gU2l0ZS5NZW1iZXI7XHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbWFpbiBncmFkaW5nIHBhZ2VcclxuICAgKiAvY2wvY29uc29sZS9ncmFkaW5nXHJcbiAgICogQGNvbnN0cnVjdG9yIEdyYWRpbmdWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nTGluazogdGhpcy4kc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlL2dyYWRpbmcvJyxcclxuICAgICAgICAgICAgICAgIHRhOiBNZW1iZXIuVEEsXHJcblxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWRQZXJtaXNzaW9uOiBmYWxzZSwgICAgICAvLyBQZXJtaXNzaW9uIHRvIGRvd25sb2FkIGdyYWRlcz9cclxuICAgICAgICAgICAgICAgIHJ1YnJpY0R1bXBlclBlcm1pc3Npb246IGZhbHNlICAgLy8gUGVybWlzc2lvbiB0byBkdW1wIHJ1YnJpY3M/XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBBc3NpZ25tZW50IEdyYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG4gICAgICAgICAgICBsZXQgbWVtYmVyID0gdXNlci5tZW1iZXI7XHJcblxyXG5cdCAgICAgICAgICB0aGlzLmRvd25sb2FkUGVybWlzc2lvbiA9IHVzZXIuYXRMZWFzdCh0aGlzLiRzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3QoJ2dyYWRlcy1kb3dubG9hZCcsIE1lbWJlci5UQSkpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1YnJpY0R1bXBlclBlcm1pc3Npb24gPSB1c2VyLmF0TGVhc3QodGhpcy4kc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KCdncmFkZXMtcnVicmljLWR1bXBlcicsIE1lbWJlci5UQSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxzdWJtaXNzaW9ucy1saW5rcyA6YXNzaWdubWVudD1cImFzc2lnbm1lbnRcIj48L3N1Ym1pc3Npb25zLWxpbmtzPlxyXG4gICAgICA8bWVtYmVycy1mZXRjaGVyPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHRhYmxlIHYtaWY9XCJncmFkZXMgIT09IG51bGxcIiBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHYtZm9yPVwicGFydCBpbiBwYXJ0c1wiIGNsYXNzPVwic21hbGxcIj48ZGl2Pnt7cGFydC5uYW1lfX08L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwiZ3JhZGVzICE9PSBudWxsXCIgY2xhc3M9XCJzbWFsbFwiPjxkaXY+R3JhZGU8L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIGZldGNoZXIudXNlcnNcIiA6Y2xhc3M9XCJ1c2VyLnJvbGUoKSAhPT0gJ1QnID8gJ2lnbm9yZScgOiAnJ1wiPlxyXG4gICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArIGxpbmsgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyBsaW5rICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIubmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvbGVcIj57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJwYXJ0IGluIHBhcnRzXCIgY2xhc3M9XCJyaWdodFwiPnt7cGFydEdyYWRlKHVzZXIsIHBhcnQpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZ3JhZGVzICE9PSBudWxsXCIgY2xhc3M9XCJyaWdodFwiPnt7Z3JhZGUodXNlcil9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImRpdmlkZXJcIj5cclxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIiBjbGFzcz1cImNlbnRlclwiPjxlbT5jb3VudHM8L2VtPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2VudGVyXCI+e3tmZXRjaGVyLnVzZXJzLmxlbmd0aH19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJwYXJ0IGluIHBhcnRzXCIgY2xhc3M9XCJyaWdodFwiPnt7cGFydENvdW50KGZldGNoZXIudXNlcnMsIHBhcnQpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZ3JhZGVzICE9PSBudWxsXCIgY2xhc3M9XCJyaWdodFwiPnt7Z3JhZGVzQ291bnQoZmV0Y2hlci51c2Vycyl9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIiBjbGFzcz1cImNlbnRlclwiPjxlbT5hdmVyYWdlczwvZW0+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjZW50ZXJcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWZvcj1cInBhcnQgaW4gcGFydHNcIiBjbGFzcz1cInJpZ2h0XCI+e3twYXJ0QXZlcmFnZShmZXRjaGVyLnVzZXJzLCBwYXJ0KX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImdyYWRlcyAhPT0gbnVsbFwiIGNsYXNzPVwicmlnaHRcIj57e2dyYWRlQXZlcmFnZShmZXRjaGVyLnVzZXJzKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzLWZldGNoZXI+XHJcbiAgICAgIDxidWxrLXVwbG9hZCB2LWlmPVwicGFydHMubGVuZ3RoID4gMCAmJiB0YVwiIDphc3NpZ250YWc9XCJhc3NpZ250YWdcIiA6cGFydHM9XCJwYXJ0c1wiPjwvYnVsay11cGxvYWQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEdyYWRlQnVsa1VwbG9hZENvbXBvbmVudCBmcm9tICcuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWUnO1xyXG5cclxuICBjb25zdCBTdWJtaXNzaW9uc0xpbmtzVnVlID0gU2l0ZS5TdWJtaXNzaW9uc0xpbmtzVnVlO1xyXG4gIGNvbnN0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlID0gU2l0ZS5NZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZTtcclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcbiAgY29uc3QgTWVtYmVyID0gU2l0ZS5NZW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhc3NpZ25tZW50IGdyYWRpbmcgcGFnZSBmb3IgdGhlIGNvdXJzZS5cclxuICAgKiAvY2wvY29uc29sZS9ncmFkaW5nLzphc3NpZ250YWdcclxuICAgKiBAY29uc3RydWN0b3IgR3JhZGluZ0Fzc2lnbm1lbnRWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBleHRlbmRzOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgIHByb3BzOiBbJ2Fzc2lnbnRhZyddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbms6ICcvY2wvY29uc29sZS9ncmFkaW5nLycgKyB0aGlzLmFzc2lnbnRhZyArICcvJyxcclxuICAgICAgICBncmFkZXM6IG51bGwsXHJcbiAgICAgICAgcGFydHM6IFtdLFxyXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIGFzc2lnbm1lbnQ6IG51bGwsXHJcbiAgICAgICAgdGE6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICdtZW1iZXJzRmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlLFxyXG4gICAgICAnc3VibWlzc2lvbnNMaW5rcyc6IFN1Ym1pc3Npb25zTGlua3NWdWUsXHJcbiAgICAgICdidWxrLXVwbG9hZCc6IEdyYWRlQnVsa1VwbG9hZENvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnRhID0gdGhpcy51c2VyLmF0TGVhc3QoTWVtYmVyLlRBKTtcclxuICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cclxuICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBHcmFkaW5nJyk7XHJcblxyXG4gICAgICB0aGlzLiRzaXRlLmFwaS5nZXQoJy9hcGkvZ3JhZGUvZ3JhZGVzLycgKyB0aGlzLmFzc2lnbnRhZywge30pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5ncmFkZXMgPSByZXNwb25zZS5nZXREYXRhKCdncmFkZXMnKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGUtcGFydHMnKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHBhcnRHcmFkZSh1c2VyLCBwYXJ0KSB7XHJcbiAgICAgICAgY29uc3QgdXNlckdyYWRlcyA9IHRoaXMuZ3JhZGVzW3VzZXIubWVtYmVyLmlkXTtcclxuICAgICAgICBpZiAodXNlckdyYWRlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXJ0U3RhdHVzID0gdXNlckdyYWRlcy5ncmFkZXNbcGFydC50YWddO1xyXG4gICAgICAgIGlmIChwYXJ0U3RhdHVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJ0U3RhdHVzO1xyXG4gICAgICB9LFxyXG4gICAgICBncmFkZSh1c2VyKSB7XHJcbiAgICAgICAgY29uc3QgdXNlckdyYWRlcyA9IHRoaXMuZ3JhZGVzW3VzZXIubWVtYmVyLmlkXTtcclxuICAgICAgICBpZiAodXNlckdyYWRlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXNlckdyYWRlcy5ncmFkZSAhPT0gbnVsbCA/IHVzZXJHcmFkZXMuZ3JhZGUgOiAnJztcclxuICAgICAgfSxcclxuICAgICAgcGFydENvdW50KHVzZXJzLCBwYXJ0KSB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgdXNlciBvZiB1c2Vycykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFydEdyYWRlKHVzZXIsIHBhcnQpICE9PSAnJykge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyYWRlc0NvdW50KHVzZXJzKSB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgdXNlciBvZiB1c2Vycykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZ3JhZGUodXNlcikgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgICAgfSxcclxuICAgICAgcGFydEF2ZXJhZ2UodXNlcnMsIHBhcnQpIHtcclxuICAgICAgICBsZXQgY250ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgIGxldCBncmFkZSA9IHRoaXMucGFydEdyYWRlKHVzZXIsIHBhcnQpO1xyXG4gICAgICAgICAgaWYgKGdyYWRlICE9PSAnJykge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgdG90YWwgKz0gZ3JhZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY250ID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbCAvIGNudCAqIDEwKSAvIDEwO1xyXG4gICAgICB9LFxyXG4gICAgICBncmFkZUF2ZXJhZ2UodXNlcnMpIHtcclxuICAgICAgICBsZXQgY250ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgIGxldCBncmFkZSA9IHRoaXMuZ3JhZGUodXNlcik7XHJcbiAgICAgICAgICBpZiAoZ3JhZGUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICB0b3RhbCArPSBncmFkZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbnQgPT09IDApIHtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRvdGFsIC8gY250ICogMTApIC8gMTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8bWVtYmVyLWZldGNoZXIgdi1vbjpmZXRjaGVkPVwiZmV0Y2hlZFwiIDppZD1cIm1lbWJlcmlkXCIgOmZhaWxsaW5rPVwiZ3JhZGluZ0xpbmtcIj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDxwcmV2LW5leHQgOnVzZXI9XCJmZXRjaGVyLnVzZXJcIj48L3ByZXYtbmV4dD5cclxuICAgICAgICAgIDxkaXYgdi1pZj1cImZldGNoZXIudXNlciAhPT0gbnVsbFwiPlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICA8cCA6Y2xhc3M9XCJmZXRjaGVyLnVzZXIucm9sZSgpID09PSAnVCcgPyAnY2wtcm9sZScgOiAnY2wtcm9sZSBjbC1yb2xlLXN0YWZmJ1wiPlxyXG4gICAgICAgICAgICAgICAge3tmZXRjaGVyLnVzZXIucm9sZU5hbWUoKX19OiB7e2ZldGNoZXIudXNlci5uYW1lfX0ge3tmZXRjaGVyLnVzZXIucm9sZSgpfX1cclxuICAgICAgICAgICAgICAgIDxlbSBjbGFzcz1cInNtYWxsXCI+e3tmZXRjaGVyLnVzZXIudXNlcklkfX08L2VtPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsLWdyYWRlci1idXR0b25cIiBAY2xpY2sucHJldmVudD1cImVtYWlsKGZldGNoZXIudXNlcilcIj5cclxuICAgICAgICAgICAgICAgICAgZW1haWwge3tmZXRjaGVyLnVzZXIucm9sZU5hbWUoKS50b0xvd2VyQ2FzZSgpfX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiY2wtZ3JhZGVyLWJ1dHRvblwiIHRhZz1cImJ1dHRvblwiIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzLycgKyBmZXRjaGVyLnVzZXIubWVtYmVyLmlkXCI+c3R1ZGVudCBncmFkZXNcclxuICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2wtZHVlXCIgdi1pZj1cImR1ZSAhPT0gbnVsbFwiPkFzc2lnbm1lbnQgZHVlIHt7dGltZShkdWUpfX0gPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIEdyYWRpbmcgaXRlbXMgLS0+XHJcbiAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gZ3JhZGVyc1wiIDpjbGFzcz1cIidjbC1ncmFkZXItaXRlbScgKyAoaXRlbS5sb2NrZWQgPyAnIGNsLWdyYWRlci1pdGVtLWxvY2tlZCcgOiAnJylcIiAgOmRhdGEtdGFnPVwiaXRlbS50YWdcIj5cclxuICAgICAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzcz1cImNsLWdyYWRlci1pdGVtLWxvY2tcIj48YSBAY2xpY2sucHJldmVudD1cImxvY2soaXRlbSlcIiB0aXRsZT1cIkxvY2svVW5sb2NrXCI+PGltZyA6c3JjPVwicm9vdCArIChpdGVtLmxvY2tlZCA/ICcvY2wvaW1nL2xvY2stb24ucG5nJyA6ICcvY2wvaW1nL2xvY2stb2ZmLnBuZycpXCIgYWx0PVwiVW5sb2NrZWRcIj48L2E+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtLm5hbWV9fTxhIHYtaWY9XCJpdGVtLnRlYW1pbmcgIT09IHVuZGVmaW5lZFwiIGNsYXNzPVwiY2wtZXh0cmEtbGlua1wiIEBjbGljay5wcmV2ZW50PVwidGVhbURpc3RyaWJ1dGUoaXRlbSlcIj5UZWFtIERpc3RyaWJ1dGU8L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS5ydWJyaWMgIT09IHVuZGVmaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtdG9nZ2xlXCI+PHAgY2xhc3M9XCJjbC1ydWJyaWMtZXhwYW5kXCI+PGE+RXhwYW5kIGZvciBydWJyaWM8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbC1ydWJyaWNibG9jayBjbC1jbGlja2FibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1odG1sPVwiaXRlbS5ydWJyaWNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPGdyYWRlLW1hbnVhbCB2LWlmPVwiaXRlbS5tYW51YWwgIT09IHVuZGVmaW5lZFwiIDppdGVtPVwiaXRlbVwiPjwvZ3JhZGUtbWFudWFsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5odG1sICE9PSB1bmRlZmluZWRcIiB2LWh0bWw9XCJpdGVtLmh0bWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoYW5kYm9vayB2LWlmPVwiaXRlbS5oYW5kYm9vayAhPT0gdW5kZWZpbmVkXCIgOml0ZW09XCJpdGVtXCIgdi1vbjpoYW5kYm9vay1kYXRhPVwiaGFuZGJvb2tEYXRhXCI+PC9oYW5kYm9vaz5cclxuICAgICAgICAgICAgICAgIDxncmFkZS1oaXN0b3J5IDpoaXN0b3J5PVwiaXRlbS5oaXN0b3J5XCI+PC9ncmFkZS1oaXN0b3J5PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIFN1Ym1pc3Npb25zIC0tPlxyXG4gICAgICAgICAgICAgIDxzdWJtaXNzaW9ucyA6dXNlcj1cImZldGNoZXIudXNlclwiIDphc3NpZ250YWc9XCJhc3NpZ250YWdcIj48L3N1Ym1pc3Npb25zPlxyXG4gICAgICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cInJldmlld2luZyAhPT0gbnVsbFwiIDppcz1cInJldmlld2luZ1wiIDphc3NpZ250YWc9XCJhc3NpZ250YWdcIiA6dXNlcj1cImZldGNoZXIudXNlclwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cImdyYWRlICE9PSBudWxsXCI+Q29tcHV0ZWQgR3JhZGU6IHt7Z3JhZGV9fTwvcD5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkdyYWRlIE5vdCBBdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyIHNtYWxsIG5vdGljZVwiPkdyYWRlcyBhcmUgbm90IGF2YWlsYWJsZSB1bnRpbCBhbGwgcGFydHMgb2YgdGhlIGFzc2lnbm1lbnQgaGF2ZSBiZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGVkLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlci1mZXRjaGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgR3JhZGVIaXN0b3J5Q29tcG9uZW50VnVlIGZyb20gJy4uL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZSc7XHJcblx0aW1wb3J0IEhhbmRib29rVnVlIGZyb20gJy4uL0hhbmRib29rL0hhbmRib29rLnZ1ZSc7XHJcblx0aW1wb3J0IEdyYWRlTWFudWFsVnVlIGZyb20gJy4vR3JhZGVNYW51YWwudnVlJztcclxuXHJcblx0Y29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cdGNvbnN0IFByZXZOZXh0TWVtYmVyVnVlID0gU2l0ZS5QcmV2TmV4dE1lbWJlclZ1ZTtcclxuXHRjb25zdCBNZW1iZXJGZXRjaGVyQ29tcG9uZW50VnVlID0gU2l0ZS5NZW1iZXJGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5cdGNvbnN0IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZSA9IFNpdGUuU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50VnVlO1xyXG5cclxuXHQvKipcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkaW5nLzphc3NpZ25tZW50LzptZW1iZXJpZFxyXG5cdCAqIEFzc2lnbm1lbnQgZ3JhZGluZyBwYWdlIGZvciBhIGNvdXJzZSBtZW1iZXJcclxuICAgKiBAY29uc3RydWN0b3IgR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXJWdWVcclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0cHJvcHM6IFsnYXNzaWdudGFnJywgJ21lbWJlcmlkJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Z3JhZGluZ0xpbms6ICcvY2wvY29uc29sZS9ncmFkaW5nLycgKyB0aGlzLmFzc2lnbnRhZyxcclxuXHRcdFx0XHRhc3NpZ25tZW50OiBudWxsLFxyXG5cdFx0XHRcdGdyYWRlcnM6IFtdLFxyXG5cdFx0XHRcdGdyYWRlOiBudWxsLFxyXG5cdFx0XHRcdGR1ZTogbnVsbCxcclxuXHRcdFx0XHRoYW5kYm9va1Jlc3VsdDogbnVsbCxcclxuXHRcdFx0XHRyZXZpZXdpbmc6IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0bWVtYmVyRmV0Y2hlcjogTWVtYmVyRmV0Y2hlckNvbXBvbmVudFZ1ZSxcclxuXHRcdFx0cHJldk5leHQ6IFByZXZOZXh0TWVtYmVyVnVlLFxyXG5cdFx0XHRncmFkZUhpc3Rvcnk6IEdyYWRlSGlzdG9yeUNvbXBvbmVudFZ1ZSxcclxuXHRcdFx0c3VibWlzc2lvbnM6IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZSxcclxuXHRcdFx0aGFuZGJvb2s6IEhhbmRib29rVnVlLFxyXG4gICAgICAgICAgZ3JhZGVNYW51YWw6IEdyYWRlTWFudWFsVnVlXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5zZXRUaXRsZSgnOiBHcmFkaW5nJyk7XHJcblx0XHRcdHRoaXMuYWRkTmF2MignU3VibWl0JywgMiwgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3VibWl0KCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5hZGROYXYyKCdTdWJtaXQgYW5kIEV4aXQnLCAzLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdWJtaXQodHJ1ZSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5hZGROYXYyTGluaygnRXhpdCcsIDQsICcvY2wvY29uc29sZS9ncmFkaW5nLycgKyB0aGlzLmFzc2lnbnRhZyk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRmZXRjaGVkKHVzZXIpIHtcclxuXHRcdFx0XHRsZXQgc2VjdGlvbiA9IHVzZXIubWVtYmVyLmdldFNlY3Rpb24odGhpcy4kc3RvcmUpO1xyXG5cdFx0XHRcdHRoaXMuYXNzaWdubWVudCA9IHVzZXIubWVtYmVyLmdldEFzc2lnbm1lbnQodGhpcy4kc3RvcmUsIHRoaXMuYXNzaWdudGFnKTtcclxuXHRcdFx0XHR0aGlzLnNldFRpdGxlKCc6ICcgKyB1c2VyLm5hbWUgKyAnICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBHcmFkaW5nJyk7XHJcblx0XHRcdFx0aWYgKHRoaXMuYXNzaWdubWVudC5yZXZpZXcgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdHRoaXMucmV2aWV3aW5nID0gdGhpcy4kc2l0ZS5jb25zb2xlLlJldmlldy5yZXZpZXdzYnlmb3I7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLiRzaXRlLmFwaS5nZXQoYC9hcGkvZ3JhZGUvZ3JhZGVyLyR7dGhpcy5hc3NpZ250YWd9LyR7dGhpcy5tZW1iZXJpZH1gLCB7fSlcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJtaXQoZXhpdCwgY2FsbGJhY2spIHtcclxuXHRcdFx0XHRjb25zdCBmb3JtID0gdGhpcy4kcmVmc1snZm9ybSddO1xyXG5cdFx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cdFx0XHRcdGlmICh0aGlzLmhhbmRib29rUmVzdWx0ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ19oYW5kYm9vaycsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGFuZGJvb2tSZXN1bHQpKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvZ3JhZGUvZ3JhZGVyLyR7dGhpcy5hc3NpZ250YWd9LyR7dGhpcy5tZW1iZXJpZH1gLCBmb3JtRGF0YSlcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZXhpdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2godGhpcy4kc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlL2dyYWRpbmcvJyArIHRoaXMuYXNzaWdudGFnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHQgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGlzdHJpYnV0ZSBncmFkZSBpdGVtIHRvIGFsbCBtZW1iZXJzIG9mIGEgdGVhbS5cclxuICAgICAgICAgICAgICogQHBhcmFtIGl0ZW1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRlYW1EaXN0cmlidXRlKGl0ZW0pIHtcclxuXHRcdFx0ICAgIHRoaXMuc3VibWl0KGZhbHNlLCAoKSA9PiB7XHJcblx0XHRcdCAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZWFtaW5nOiBpdGVtLnRlYW1pbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBncmFkZVRhZzogaXRlbS50YWdcclxuICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvdGVhbS9kaXN0cmlidXRlLyR7dGhpcy5hc3NpZ250YWd9LyR7dGhpcy5tZW1iZXJpZH1gLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cdFx0XHR0YWtlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhbiBleGlzdGluZyBsb2NrZWQgZ3JhZGVyP1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2tlZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmdyYWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYodGhpcy5ncmFkZXJzW2ldLmxvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tlZCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0Y29uc3QgZ3JhZGVyID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGVyJyk7XHJcblx0XHRcdFx0dGhpcy5kdWUgPSBncmFkZXIuYXR0cmlidXRlcy5kdWUgIT09IHVuZGVmaW5lZCA/IGdyYWRlci5hdHRyaWJ1dGVzLmR1ZSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGdyYWRlciBvZiBncmFkZXIuYXR0cmlidXRlcy5ncmFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGdyYWRlci5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0dGhpcy5ncmFkZXJzID0gZ3JhZGVyLmF0dHJpYnV0ZXMuZ3JhZGVycztcclxuXHRcdFx0XHR0aGlzLmdyYWRlID0gZ3JhZGVyLmF0dHJpYnV0ZXMuZ3JhZGU7XHJcblxyXG5cdFx0XHRcdGlmKGxvY2tlZCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdCAgICB0aGlzLmdyYWRlcnNbbG9ja2VkXS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHRcdFx0XHR0aGlzLiRmb3JjZVVwZGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaW5zdGFsbFJ1YnJpY0NsaWNrZXJzKCk7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLm1lc3NhZ2UoJ2NsLWdyYWRlcy1ncmFkZXItaW5zdGFsbGVkJyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgbG9jayhpdGVtKSB7XHJcbiAgICAgICAgICAgICAgaWYoaXRlbS5sb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBncmFkZXIgb2YgdGhpcy5ncmFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGdyYWRlci5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cdFx0XHQvLy8gSW5zdGFsbCBjbGlja2VycyBmb3IgUnVicmljIGl0ZW1zIHRoYXQgd2lsbCBhdXRvZmlsbCB0aGVtLlxyXG5cdFx0XHRpbnN0YWxsUnVicmljQ2xpY2tlcnMoKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2VsZWN0b3JzID0gWydkaXYuY2wtY2xpY2thYmxlIGxpLml0ZW0nLCAnZGl2LmNsLWNsaWNrYWJsZSB1bC5pdGVtcyBsaScsICdkaXYuY2wtY2xpY2thYmxlIHAuaXRlbSddO1xyXG5cdFx0XHRcdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjbGlja2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIGNsaWNrYWJsZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZGF0YXNldC5jbGlja2FibGUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZENvbnRlbnQoZWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlJywgJ3llcycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLy8gQWRkIHJ1YnJpYyBjb250ZW50IHRvIHRoZSBlbGVtZW50IGNvbW1lbnQgdGV4dGFyZWFcclxuXHRcdFx0YWRkQ29udGVudChlbGVtZW50KSB7XHJcblx0XHRcdFx0Y29uc3QgY29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdC8vIFdvcmsgdXAgdW50aWwgd2UgZmluZCB0aGUgY2wtZ3JhZGVyLWl0ZW0gZGl2XHJcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbC1ncmFkZXItaXRlbScpKSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gRmluZCB0aGUgaXRlbSB0aGlzIGRvZXMgd2l0aFxyXG5cdFx0XHRcdGNvbnN0IHRhZyA9IGVsZW1lbnQuZGF0YXNldC50YWc7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5ncmFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKGl0ZW0udGFnID09PSB0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm1hbnVhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLm1hbnVhbC5jb21tZW50Lmxlbmd0aCA+IDAgJiYgaXRlbS5tYW51YWwuY29tbWVudC5tYXRjaCgvXFxuJC8pID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubWFudWFsLmNvbW1lbnQgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubWFudWFsLmNvbW1lbnQgKz0gY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0Ly8gRmluZCBhIHRleHRhcmVhIGluc2lkZSB0aGlzXHJcblx0XHRcdFx0Zm9yIChsZXQgdGV4dGFyZWEgb2YgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpKSB7XHJcblx0XHRcdFx0XHR0ZXh0YXJlYS52YWx1ZSA9IHRleHRhcmVhLnZhbHVlICsgY29udGVudCArIFwiXFxuXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1lKHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCh0LCAnc2hvcnQnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZW1haWwodXNlcikge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICdtYWlsdG86JyArIHVzZXIuZW1haWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdGhhbmRib29rRGF0YShkYXRhKSB7XHJcblx0XHRcdFx0dGhpcy5oYW5kYm9va1Jlc3VsdCA9IGRhdGE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxoMj57e3J1YnJpYy5uYW1lfX08L2gyPlxyXG5cclxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXQoKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2wtcnVicmljYmxvY2sgY2wtc2hvd1wiIHYtaHRtbD1cInJ1YnJpYy5zaG93XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgcmVmPVwiZWRpdG9yXCI+PC9kaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuICAgKiBFZGl0b3IgZm9yIGEgc2luZ2xlIFJ1YnJpY1xyXG4gICAqIENvbXBvbmVudCBpbiAvY2wvY29uc29sZS9ydWJyaWMvOmFzc2lnbnRhZ1xyXG4gICAqIEBjb25zdHJ1Y3RvciBSdWJyaWNFZGl0b3JWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczogWydhc3NpZ250YWcnLCAncnVicmljJ10sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy4kcmVmc1snZWRpdG9yJ107XHJcblx0XHRcdHRoaXMuZWRpdG9yID0gbmV3IHRoaXMuJHNpdGUuRWRpdG9yKGVsZW1lbnQsIHtcclxuXHRcdFx0XHR2YWx1ZTogdGhpcy5ydWJyaWMucnVicmljLFxyXG5cdFx0XHRcdHRhYjogdHJ1ZSxcclxuXHRcdFx0XHRhdXRvSW5kZW50OiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5lZGl0b3IudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZWQoKTtcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNoYW5nZWQoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZXIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuXHRcdFx0XHRcdHRoaXMudGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IG51bGw7XHJcblx0XHRcdFx0XHR0aGlzLnJ1YnJpYy5zaG93ID0gdGhpcy4kc2l0ZS5TYW5pdGl6ZS5zYW5pdGl6ZSh0aGlzLmVkaXRvci50ZXh0YXJlYS52YWx1ZSk7XHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0KCkge1xyXG5cdFx0XHRcdHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvZ3JhZGUvcnVicmljcy8nICsgdGhpcy5hc3NpZ250YWcgKyAnLycgKyB0aGlzLnJ1YnJpYy50YWcsIHtcclxuXHRcdFx0XHRcdHJ1YnJpYzogdGhpcy5ydWJyaWMuc2hvd1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCAnUnVicmljIHN1Y2Nlc3NmdWxseSBzYXZlZCcpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2wtdG9nZ2xlXCI+PHA+PGE+RXhwYW5kIGZvciBpbnN0cnVjdGlvbnMgb24gY3JlYXRpbmcgcnVicmljcy48L2E+PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLXRvZ2dsZWJsb2NrXCI+XHJcbiAgICAgIDxwPlJ1YnJpY3MgYXJlIGVudGVyZWQgYXMgSFRNTC4gQSBjb21tb24gZm9ybWF0IGlzIHRvXHJcbiAgICAgICAgY3JlYXRlIGxpc3RzIHVzaW5nICZsdDt1bCZndDsgYW5kICZsdDtsaSZndDsgdGFncy48L3A+XHJcbiAgICAgIDxwPkNvbnRlbnRzIG9mIGFuICZsdDtsaSZndDsgb3IgJmx0O3AmZ3Q7IHRhZyBjYW4gYmUgbWFrZVxyXG4gICAgICAgIGNsaWNrYWJsZSBzbyB0aGV5IGF1dG9tYXRpY2FsbHkgYXBwZWFyIGluIHRoZSBjb21tZW50XHJcbiAgICAgICAgd2luZG93IGJ5IGFkZGluZyB0aGUgY2xhc3MgJ2l0ZW0nLiBBbGwgJmx0O2xpJmd0OyBjaGlsZHJlblxyXG4gICAgICAgIG9mIGEgJmx0O3VsJmd0OyBjYW4gYmUgbWFkZSBjbGlja2FibGUgYnkgYWRkaW5nIHRoZVxyXG4gICAgICAgIGNsYXNzICdpdGVtcyc6PC9wPlxyXG4gICAgICA8cHJlIGNsYXNzPVwiY29kZVwiPlxyXG4mbHQ7dWwmZ3Q7XHJcbiAgICZsdDtsaSBjbGFzcz1cIml0ZW1cIiZndDtUaGlzIGl0ZW0gd2lsbCBiZSBjbGlja2FibGUmbHQ7L2xpJmd0O1xyXG4gICAmbHQ7bGkmZ3Q7VGhpcyBpdGVtIHdpbGwgbm90IGJlIGNsaWNrYWJsZSZsdDsvbGkmZ3Q7XHJcbiZsdDsvdWwmZ3Q7XHJcblxyXG4mbHQ7cCBjbGFzcz1cIml0ZW1cIiZndDtBbmQgdGhpcyB3aWxsIGJlIGNsaWNrYWJsZSZsdDsvcCZndDtcclxuXHJcbiZsdDt1bCBjbGFzcz1cIml0ZW1zXCImZ3Q7XHJcbiAgICZsdDtsaSZndDtBbGwgb2YgdGhlc2UgaXRlbXMgd2lsbCBiZSBjbGlja2FibGUmbHQ7L2xpJmd0O1xyXG4gICAmbHQ7bGkmZ3Q7VGhpcyBvbmUsIHRvbyEmbHQ7L2xpJmd0O1xyXG4mbHQ7L3VsJmd0O1xyXG4gICAgICA8L3ByZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtZm9yPVwicnVicmljIGluIHJ1YnJpY3NcIiBjbGFzcz1cImNsLXJ1YnJpY1wiPlxyXG4gICAgICA8cnVicmljLWVkaXRvciA6YXNzaWdudGFnPVwiYXNzaWdudGFnXCIgOnJ1YnJpYz1cInJ1YnJpY1wiPjwvcnVicmljLWVkaXRvcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgUnVicmljRWRpdG9yVnVlIGZyb20gJy4vUnVicmljRWRpdG9yLnZ1ZSc7XHJcblxyXG5cdGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHRjb25zdCBNZW1iZXIgPSBTaXRlLk1lbWJlcjtcclxuXHJcblx0LyoqXHJcblx0ICogRWRpdG9yIHBhZ2UgZm9yIGFsbCBydWJyaWNzIGZvciBhbiBhc3NpZ25tZW50XHJcblx0ICogL2NsL2NvbnNvbGUvcnVicmljLzphc3NpZ250YWdcclxuXHQgKiBAY29uc3RydWN0b3IgUnVicmljc0VkaXRvclZ1ZVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRwcm9wczogWydhc3NpZ250YWcnXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0YTogTWVtYmVyLlRBLFxyXG5cdFx0XHRcdHJ1YnJpY3M6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHJ1YnJpY0VkaXRvcjogUnVicmljRWRpdG9yVnVlXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IEFzc2lnbm1lbnQgR3JhZGluZycpO1xyXG5cdFx0XHR0aGlzLnRpbWVyID0gbnVsbDtcclxuXHJcblx0XHRcdGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG5cdFx0XHRsZXQgbWVtYmVyID0gdXNlci5tZW1iZXI7XHJcblxyXG5cdFx0XHR0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG5cdFx0XHR0aGlzLmFzc2lnbm1lbnQgPSB0aGlzLnNlY3Rpb24uZ2V0QXNzaWdubWVudCh0aGlzLmFzc2lnbnRhZyk7XHJcblxyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIFJ1YnJpY3MnKTtcclxuXHJcblx0XHRcdHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS9ncmFkZS9ydWJyaWNzLycgKyB0aGlzLmFzc2lnbm1lbnQudGFnLCB7fSlcclxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJ1YnJpY3MgPSByZXNwb25zZS5nZXREYXRhKCdydWJyaWNzJykuYXR0cmlidXRlcztcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgcnVicmljIG9mIHRoaXMucnVicmljcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJHNldChydWJyaWMsICdzaG93JywgcnVicmljLnJ1YnJpYyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx0YWJsZSBjbGFzcz1cImNsLWhhbmRib29rXCI+XHJcbiAgICAgIDx0cj48dGg+Q2F0ZWdvcnk8YnI+TXVsdGlwbGllcjoge3tpdGVtLm11bHRpcGxpZXJ9fTwvdGg+PHRoPkRlZHVjdGlvbjxicj4wIHRvIG1heDwvdGg+PC90cj5cclxuICAgICAgPHRyIHYtZm9yPVwiY2F0ZWdvcnkgaW4gaXRlbS5oYW5kYm9vay5jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjYXRlZ29yeS5ydWJyaWMgIT09IHVuZGVmaW5lZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtdG9nZ2xlIGNsLXNpbmdsZS1zcGFjZVwiPjxzcGFuPjxhPnt7Y2F0ZWdvcnkubmFtZX19PC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtcnVicmljYmxvY2tcIj48ZGl2IHYtaHRtbD1cImNhdGVnb3J5LnJ1YnJpY1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7Y2F0ZWdvcnkubmFtZX19PC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhcmVhZG9ubHlcIj5cclxuICAgICAgICAgICAgPGlucHV0IHYtZm9yPVwiZGVkdWN0IGluIChjYXRlZ29yeS5kZWR1Y3QrMSlcIiB2LW1vZGVsPVwibWV0YWRhdGFbY2F0ZWdvcnkudGFnXVwiIDp2YWx1ZT1cImRlZHVjdC0xXCIgdHlwZT1cInJhZGlvXCIgQGNoYW5nZT1cImNvbXB1dGVcIj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8c3BhbiB2LWVsc2U+e3tkZWR1Y3Rpb24obWV0YWRhdGFbY2F0ZWdvcnkudGFnXSl9fTwvc3Bhbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGlucHV0IHYtaWY9XCIhcmVhZG9ubHlcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJtZXRhZGF0YVsnX21hbnVhbF90ZXh0J11cIj5cclxuICAgICAgICAgIDxzcGFuIHYtZWxzZT57e21ldGFkYXRhWydfbWFudWFsX3RleHQnXX19PC9zcGFuPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhcmVhZG9ubHlcIj5cclxuICAgICAgICAgIDxpbnB1dCB2LWZvcj1cImRlZHVjdCBpbiA1XCIgdi1tb2RlbD1cIm1ldGFkYXRhWydfbWFudWFsJ11cIiA6dmFsdWU9XCJkZWR1Y3QtMVwiIHR5cGU9XCJyYWRpb1wiIEBjaGFuZ2U9XCJjb21wdXRlXCI+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8c3BhbiB2LWVsc2U+e3tkZWR1Y3Rpb24obWV0YWRhdGFbJ19tYW51YWwnXSl9fTwvc3Bhbj5cclxuICAgICAgPC90ZD48L3RyPlxyXG4gICAgICA8dHIgY2xhc3M9XCJjbC1pbnRlcm5hbFwiPjx0aD5Db21tZW50PC90aD48dGg+RGVkdWN0aW9uPC90aD48L3RyPlxyXG4gICAgICA8dHI+PHRkPlxyXG4gICAgICAgIDx0ZXh0YXJlYSB2LWlmPVwiIXJlYWRvbmx5XCIgcm93cz1cIjNcIiB2LW1vZGVsPVwibWV0YWRhdGFbJ19jb21tZW50J11cIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCIgdi1lbHNlPnt7bWV0YWRhdGFbJ19jb21tZW50J119fTwvZGl2PlxyXG4gICAgICA8L3RkPjx0ZCBjbGFzcz1cImNsLWRlZHVjdFwiPnt7dG90YWx9fTwvdGQ+PC90cj5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG4gICAqIEhhbmRib29rIGVkaXRvci92aWV3aW5nIFZ1ZSBjb21wb25lbnRcclxuICAgKlxyXG4gICAqIFVzZSBieSBib3RoIHRoZSBzdHVkZW50IGdyYWRlIHByZXNlbnRhdGlvbiBwYWdlIGFuZCB0aGVcclxuICAgKiBhc3NpZ25tZW50IGdyYWRpbmcgcGFnZS5cclxuICAgKiBAY29uc3RydWN0b3IgSGFuZGJvb2tWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpdGVtOiB7ZGVmYXVsdDoge319LFxyXG5cdFx0XHRyZWFkb25seToge2RlZmF1bHQ6IGZhbHNlfVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdGl0ZW06IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMudGFrZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1ldGFkYXRhOiB7fSxcclxuXHRcdFx0XHR0b3RhbDogMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy50YWtlKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHR0YWtlKCkge1xyXG5cdFx0XHRcdHRoaXMubWV0YWRhdGEgPSB7fTtcclxuXHRcdFx0XHRmb3IgKGxldCBjYXRlZ29yeSBvZiB0aGlzLml0ZW0uaGFuZGJvb2suY2F0ZWdvcmllcykge1xyXG5cdFx0XHRcdFx0bGV0IGNhdFBvaW50cyA9IHRoaXMuaXRlbS5tZXRhZGF0YVtjYXRlZ29yeS50YWddO1xyXG5cdFx0XHRcdFx0aWYgKGNhdFBvaW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdGNhdFBvaW50cyA9IDA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMubWV0YWRhdGEsIGNhdGVnb3J5LnRhZywgY2F0UG9pbnRzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCBjYXRQb2ludHMgPSB0aGlzLml0ZW0ubWV0YWRhdGFbJ19tYW51YWwnXTtcclxuXHRcdFx0XHRpZiAoY2F0UG9pbnRzID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdGNhdFBvaW50cyA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5tZXRhZGF0YSwgJ19tYW51YWwnLCBjYXRQb2ludHMpO1xyXG5cclxuXHRcdFx0XHRsZXQgbWFudWFsVGV4dCA9IHRoaXMuaXRlbS5tZXRhZGF0YVsnX21hbnVhbF90ZXh0J107XHJcblx0XHRcdFx0aWYgKG1hbnVhbFRleHQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0bWFudWFsVGV4dCA9ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5tZXRhZGF0YSwgJ19tYW51YWxfdGV4dCcsIG1hbnVhbFRleHQpO1xyXG5cclxuXHRcdFx0XHRsZXQgY29tbWVudCA9IHRoaXMuaXRlbS5tZXRhZGF0YVsnX2NvbW1lbnQnXTtcclxuXHRcdFx0XHRpZiAoY29tbWVudCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRjb21tZW50ID0gJyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJHNldCh0aGlzLm1ldGFkYXRhLCAnX2NvbW1lbnQnLCBjb21tZW50KTtcclxuXHJcblx0XHRcdFx0dGhpcy5jb21wdXRlKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbXB1dGUoKSB7XHJcblx0XHRcdFx0bGV0IHRvdGFsID0gLXRoaXMubWV0YWRhdGFbJ19tYW51YWwnXTtcclxuXHRcdFx0XHRmb3IgKGxldCBjYXRlZ29yeSBvZiB0aGlzLml0ZW0uaGFuZGJvb2suY2F0ZWdvcmllcykge1xyXG5cdFx0XHRcdFx0dG90YWwgLT0gdGhpcy5tZXRhZGF0YVtjYXRlZ29yeS50YWddO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dG90YWwgKz0gdGhpcy5pdGVtLmhhbmRib29rLmZyZWU7XHJcblx0XHRcdFx0aWYgKHRvdGFsID4gMCkge1xyXG5cdFx0XHRcdFx0dG90YWwgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0b3RhbCAqPSB0aGlzLml0ZW0ubXVsdGlwbGllcjtcclxuXHRcdFx0XHR0aGlzLnRvdGFsID0gdG90YWw7XHJcblxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2hhbmRib29rLWRhdGEnLCB7J21ldGFkYXRhJzogdGhpcy5tZXRhZGF0YSwgJ3RvdGFsJzogdGhpcy50b3RhbH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWR1Y3Rpb24oZGVkdWN0KSB7XHJcblx0XHRcdFx0aWYgKGRlZHVjdCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gLWRlZHVjdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbC1hdXRvYmFja1wiPjwvZGl2PlxyXG4gICAgICA8cCBjbGFzcz1cImNsLXRpdGxlXCI+e3tqc29uLmFzc2lnbm1lbnQubmFtZX19PC9wPlxyXG4gICAgICA8cCB2LWlmPVwianNvbi5kaXNwdXRlICE9PSBudWxsXCIgY2xhc3M9XCJjbC1kaXNwdXRlXCI+UGxlYXNlIGRpcmVjdCBhbGwgZ3JhZGluZyBpc3N1ZXMgdG8gPHNwYW4gdi1odG1sPVwianNvbi5kaXNwdXRlXCI+PC9zcGFuPjwvcD5cclxuICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4ganNvbi5ncmFkZXNcIiB2LWlmPVwiaXRlbS5odG1sICE9PSB1bmRlZmluZWRcIj5cclxuICAgICAgICA8aDI+e3tpdGVtLm5hbWV9fTwvaDI+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5oYW5kYm9vayA9PT0gdW5kZWZpbmVkXCIgdi1odG1sPVwiaXRlbS5odG1sXCI+PC9kaXY+XHJcbiAgICAgICAgPGhhbmRib29rIHYtZWxzZSA6aXRlbT1cIml0ZW1cIiByZWFkb25seT1cInRydWVcIj48L2hhbmRib29rPlxyXG4gICAgICAgPGdyYWRlLWhpc3RvcnkgOmhpc3Rvcnk9XCJpdGVtLmhpc3RvcnlcIj48L2dyYWRlLWhpc3Rvcnk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGVcIj5cclxuICAgICAgICA8cCB2LWlmPVwianNvbi5ncmFkZSAhPT0gbnVsbFwiPkNvbXB1dGVkIEdyYWRlOiB7e2pzb24uZ3JhZGV9fTwvcD5cclxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgPHA+R3JhZGUgTm90IEF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyIHNtYWxsIG5vdGljZVwiPkdyYWRlcyBhcmUgbm90IGF2YWlsYWJsZSB1bnRpbCBhbGwgcGFydHMgb2YgdGhlIGFzc2lnbm1lbnQgaGF2ZSBiZWVuIGdyYWRlZC48L3A+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbC1hdXRvYmFja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBHcmFkZUhpc3RvcnlDb21wb25lbnQgZnJvbSAnLi4vVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlJztcclxuXHRpbXBvcnQgSGFuZGJvb2tWdWUgZnJvbSAnLi4vSGFuZGJvb2svSGFuZGJvb2sudnVlJztcclxuXHJcblx0Y29uc3QgVXNlclZ1ZUJhc2UgPSBTaXRlLlVzZXJWdWVCYXNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgYXNzaWdubWVudCBncmFkaW5nIHBhZ2UgZm9yIHByZXNlbnRhdGlvbiBmb3IgYSB1c2VyXHJcblx0ICpcclxuXHQgKiAvY2wvZ3JhZGUvOmFzc2lnbm1lbnRcclxuXHQgKiBAY29uc3RydWN0b3IgR3JhZGVBc3NpZ25tZW50VnVlXHJcblx0ICovXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0J2V4dGVuZHMnOiBVc2VyVnVlQmFzZSxcclxuXHRcdHByb3BzOiBbJ2pzb24nXSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Z3JhZGVIaXN0b3J5OiBHcmFkZUhpc3RvcnlDb21wb25lbnQsXHJcblx0XHRcdGhhbmRib29rOiBIYW5kYm9va1Z1ZVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiAgJyArIHRoaXMuanNvbi5hc3NpZ25tZW50LnNob3J0TmFtZSArICcgR3JhZGUgZm9yICcgKyB0aGlzLnVzZXIuZGlzcGxheU5hbWUoKSk7XHJcblxyXG5cdFx0XHRjb25zdCBtZW51ID0gW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdHcmFkZXMnLCBjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLiRzaXRlLnJvb3QgKyAnL2NsL2dyYWRlcyc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldE1lbnUobWVudSk7XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJncmFkZSAhPT0gbnVsbFwiPlxyXG4gICAgICAgIDxwPjxzcGFuIHYtaHRtbD1cImpzb24uYmVmb3JlXCI+PC9zcGFuPjwvcD5cclxuICAgICAgICA8cCB2LWlmPVwianNvbi5kaXNwdXRlICE9PSBudWxsXCIgY2xhc3M9XCJjZW50ZXJcIj5QbGVhc2UgZGlyZWN0IGFsbCBncmFkaW5nIGlzc3VlcyB0byA8c3BhbiB2LWh0bWw9XCJqc29uLmRpc3B1dGVcIj48L3NwYW4+PC9wPlxyXG5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5Bc3NpZ25tZW50PC90aD48dGg+Jm5ic3A7PC90aD48dGg+R3JhZGU8L3RoPjx0aD4mbmJzcDs8L3RoPjx0aD5HcmFkZTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImNhdGVnb3J5IGluIGdyYWRlLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiY2wtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj57e2NhdGVnb3J5Lm5hbWV9fTwvdGQ+PHRkPnt7Y2F0ZWdvcnkucG9pbnRzfX0lPC90ZD48dGQ+e3tjYXRlZ29yeS5ncmFkZX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImNsLWFzc2lnbm1lbnRcIiB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIiA6a2V5PVwiYXNzaWdubWVudC50YWdcIiB2LWlmPVwiYXNzaWdubWVudC5wb2ludHMgPiAwXCI+XHJcbiAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwicm9vdCArICcvY2wvZ3JhZGUvJyArIGFzc2lnbm1lbnQudGFnXCI+e3thc3NpZ25tZW50Lm5hbWV9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e01hdGgucm91bmQoYXNzaWdubWVudC5wb2ludHMgKiAxMCkgLyAxMH19JTwvdGQ+PHRkPnt7YXNzaWdubWVudC5ncmFkZX19PC90ZD48dGQgY29sc3Bhbj1cIjJcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGVhY2ggYXNzaWdubWVudCBmb3IgbW9yZSBncmFkaW5nIGRldGFpbDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPkNvbXB1dGVkIEdyYWRlOiB7e2dyYWRlLmdyYWRlfX0gb3V0IG9mIHt7Z3JhZGUuYXZhaWxhYmxlfX0gYXZhaWxhYmxlIHBvaW50c3t7cGVyfX08L3A+XHJcbiAgICAgICAgPHA+PHNwYW4gdi1odG1sPVwianNvbi5hZnRlclwiPjwvc3Bhbj48L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBjb25zdCBVc2VyVnVlQmFzZSA9IFNpdGUuVXNlclZ1ZUJhc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY291cnNlIGdyYWRpbmcgcGFnZSBmb3IgcHJlc2VudGF0aW9uIG9mIGFsbCBncmFkZXMgZm9yIGEgdXNlclxyXG4gICAgICpcclxuICAgICAqIC9jbC9ncmFkZXNcclxuICAgICAqIEBjb25zdHJ1Y3RvciBHcmFkZXNWdWVcclxuICAgICAqL1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAnZXh0ZW5kcyc6IFVzZXJWdWVCYXNlLFxyXG4gICAgICAgIHByb3BzOiBbJ2pzb24nXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGdyYWRlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGVyOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpdGxlKCdHcmFkZXMgZm9yICcgKyB0aGlzLnVzZXIuZGlzcGxheU5hbWUoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgdGhpcy5zZXRUaXRsZSgnOiBHcmFkZXMgJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyYWRlID0gdGhpcy5qc29uO1xyXG4gICAgICAgICAgICBpZih0aGlzLmdyYWRlLmF2YWlsYWJsZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyID0gJyAoJyArICh0aGlzLmdyYWRlLmdyYWRlIC8gdGhpcy5ncmFkZS5hdmFpbGFibGUgKiAxMDApLnRvRml4ZWQoMSkgKyAnJSknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1ncmFkZS1oaXN0b3J5XCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJoaXN0b3J5Mi5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cImhpc3RvcnkyLmxlbmd0aCA+IDFcIiBjbGFzcz1cImNsLXRvZ2dsZVwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXhwYW5kZXJcIj48YT57e2Rpc3BsYXkoaGlzdG9yeTJbMF0pfX0gLyBFeHBhbmQgZm9yIGFkZGl0aW9uYWwgZ3JhZGluZyBoaXN0b3J5PC9hPjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGVzXCI+XHJcbiAgICAgICAgICA8cCB2LWZvcj1cImggaW4gaGlzdG9yeTJcIj57e2Rpc3BsYXkoaCl9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgIDxwPnt7ZGlzcGxheShoaXN0b3J5MlswXSl9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2hpc3RvcnknXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkyOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgaGlzdG9yeTogZnVuY3Rpb24odG8sIGZtKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5MiA9IHRoaXMuaGlzdG9yeS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICBpZih0aGlzLmhpc3RvcnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpc3RvcnkyID0gdGhpcy5oaXN0b3J5LnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgZGlzcGxheShoaXN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZ3JhZGVyID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3N0YWZmJ10oaGlzdG9yeS5ncmFkZXIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGdyYWRlck5hbWUgPSBncmFkZXIgIT09IG51bGwgPyBncmFkZXIuZGlzcGxheU5hbWUoKSA6IFwiSW52YWxpZFwiO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgoaGlzdG9yeS50aW1lLCAnc2hvcnQnKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAnIGJ5ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgZ3JhZGVyTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4gIGRpdi5jbC1ncmFkZS1oaXN0b3J5IHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gIH1cclxuXHJcbiAgcC5leHBhbmRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBkaXYuZ3JhZGVzIHtcclxuICAgIHBhZGRpbmc6IDJweCAwIDJweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAycHggMCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPG5hdiBjbGFzcz1cImNsLW5hdlwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzPVwiZGl2aWRlcnNcIj5cclxuICAgICAgICA8bGk+PGEgOmhyZWY9XCJob21lTGlua1wiPjxzcGFuIGNsYXNzPVwiaG9tZVwiPkhvbWU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBtZW51XCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJpdGVtLmNsaWNrKClcIj57e2l0ZW0ubmFtZX19PC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydtZW51J10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBob21lTGluazogU2l0ZS5yb290ICsgJy8nXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCB7R3JhZGVzRmFjdG9yeX0gZnJvbSAnLi9qcy9HcmFkZXNGYWN0b3J5JztcclxuaW1wb3J0IHtHcmFkZXNDb25zb2xlfSBmcm9tICcuL2pzL0NvbnNvbGUvR3JhZGVzQ29uc29sZSdcclxuaW1wb3J0ICcuL19ncmFkZXMuc2Nzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgR3JhZGVzID0gR3JhZGVzRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuXHJcbmlmKFNpdGUuU2l0ZS5jb25zb2xlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIEdyYWRlc0NvbnNvbGUuaW5zdGFsbChTaXRlLlNpdGUuY29uc29sZSk7XHJcbn1cclxuIiwiaW1wb3J0IEdyYWRpbmdWdWUgZnJvbSAnLi9HcmFkaW5nLnZ1ZSc7XHJcbmltcG9ydCBHcmFkaW5nQXNzaWdubWVudFZ1ZSBmcm9tICcuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZSc7XHJcbmltcG9ydCBHcmFkaW5nQXNzaWdubWVudE1lbWJlclZ1ZSBmcm9tICcuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZSdcclxuaW1wb3J0IEdyYWRlc0xpbmtzVnVlIGZyb20gJy4vR3JhZGVzTGlua3MudnVlJztcclxuaW1wb3J0IEdyYWRlc0FsbFZ1ZSBmcm9tICcuL0dyYWRlc0FsbC52dWUnO1xyXG5pbXBvcnQgR3JhZGVzTWVtYmVyVnVlIGZyb20gJy4vR3JhZGVzTWVtYmVyLnZ1ZSc7XHJcbmltcG9ydCBSdWJyaWNzRWRpdG9yVnVlIGZyb20gJy4vUnVicmljc0VkaXRvci52dWUnO1xyXG5cclxuY29uc3QgTWVtYmVyID0gU2l0ZS5NZW1iZXI7XHJcblxyXG4vKipcclxuICogVGhlIGdyYWRlcyBjb25zb2xlIGNvbXBvbmVudC5cclxuICpcclxuICogSGFuZGxlcyBpbnN0YWxsYXRpb25zIGluIHRoZSBjb25zb2xlIHN5c3RlbS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR3JhZGVzQ29uc29sZSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogSW5zdGFsbCBmdW5jdGlvbmFsaXR5IGludG8gdGhlIGNvbnNvbGUgc3lzdGVtLlxyXG4gKiBAcGFyYW0gQ29uc29sZVxyXG4gKi9cclxuR3JhZGVzQ29uc29sZS5pbnN0YWxsID0gZnVuY3Rpb24oQ29uc29sZSkge1xyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcbiAgICAgICAgYXRMZWFzdDogTWVtYmVyLkdSQURFUixcclxuICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgIGF0TGVhc3Q6IE1lbWJlci5HUkFERVIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnR3JhZGluZycsXHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2dyYWRpbmcnLFxyXG4gICAgICAgICAgICBvcmRlcjogNCxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBHcmFkaW5nVnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZFJvdXRlcyhbXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRpbmcvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogR3JhZGluZ0Fzc2lnbm1lbnRWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGluZy86YXNzaWdudGFnLzptZW1iZXJpZCcsIGNvbXBvbmVudDogR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXJWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvcnVicmljLzphc3NpZ250YWcnLCBjb21wb25lbnQ6IFJ1YnJpY3NFZGl0b3JWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGVzL2xpbmtzJywgY29tcG9uZW50OiBHcmFkZXNMaW5rc1Z1ZX0sXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRlcy9hbGwnLCBjb21wb25lbnQ6IEdyYWRlc0FsbFZ1ZX0sXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRlcy86bWVtYmVyaWQnLCBjb21wb25lbnQ6IEdyYWRlc01lbWJlclZ1ZSwgcHJvcHM6IHRydWV9XHJcbiAgICBdKTtcclxuXHJcbiAgICBDb25zb2xlLnRhYmxlcy5hZGQoe1xyXG4gICAgICAgIHRpdGxlOiAnR3JhZGVzJyxcclxuICAgICAgICBvcmRlcjogNDAsXHJcbiAgICAgICAgYXBpOiAnL2FwaS9ncmFkZS90YWJsZXMnXHJcbiAgICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtQYWdlVnVlfSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlVnVlJztcclxuaW1wb3J0IEdyYWRlQXNzaWdubWVudFZ1ZSBmcm9tICcuL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZSc7XHJcbmltcG9ydCBHcmFkZXNWdWUgZnJvbSAnLi9Vc2VyL0dyYWRlcy52dWUnO1xyXG5pbXBvcnQgUGFnZU5hdiBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgR3JhZGVzRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5HcmFkZXNGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcbiAgICBjb25zdCBHcmFkZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIH1cclxuXHJcbiAgICBzaXRlLnJlYWR5KCgpID0+IHtcclxuICAgICAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlLWFzc2lnbm1lbnQnLCAnQXNzaWdubWVudCBHcmFkZScsIEdyYWRlQXNzaWdubWVudFZ1ZSwgUGFnZU5hdik7XHJcbiAgICAgICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1ncmFkZXMnLCAnR3JhZGVzJywgR3JhZGVzVnVlLCBQYWdlTmF2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBHcmFkZXM7XHJcbn0iLCIvKipcclxuICogQmFzaWMgVnVlLWJhc2VkIHNpdGUgcGFnZSBzdGFydGVyXHJcbiAqXHJcbiAqIEhvdyB0byB1c2U6XHJcbiAqIEBjb2RlXHJcbiAqIHNpdGUucmVhZHkoKCkgPT4ge1xyXG4gKiAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlLWFzc2lnbm1lbnQnLCAnQXNzaWdubWVudCBHcmFkZScsIEdyYWRlQXNzaWdubWVudFZ1ZSk7XHJcbiAqICAgIFBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtZ3JhZGVzJywgJ0dyYWRlcycsIEdyYWRlc1Z1ZSk7XHJcbiAqIH0pO1xyXG4gKiBAZW5kY29kZVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3IgUGFnZVZ1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBhZ2VWdWUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHBhZ2UgaW4gYSBnaXZlbiBjb21wb25lbnQsIHJlcGxhY2luZyB0aGUgcHJvdmlkZWRcclxuICogc2VsZWN0b3IuIFRoZSBzZWxlY3RvciBpcyBhc3N1bWVkIHRvIGNvbnRhaW4gSlNPTiBkYXRhIHRoYXQgaXNcclxuICogdGhlbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGluIHRoZSBqc29uIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIGZvciBhIGRpdiB0byByZXBsYWNlIHdpdGggdGhlIHZpZXcuXHJcbiAqIEBwYXJhbSB0aXRsZSBJbml0aWFsIHRpdGxlIHRvIGFwcGx5IHRvIHRoZSBwYWdlXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IHRvIGRpc3BsYXkgKFZ1ZSlcclxuICogQHBhcmFtIG5hdiBPcHRpb25hbCBuYXZpZ2F0aW9uIGNvbXBvbmVudCwgbGlrZSBQYWdlTmF2XHJcbiAqL1xyXG5QYWdlVnVlLmNyZWF0ZSA9IGZ1bmN0aW9uKHNlbCwgdGl0bGUsIGNvbXBvbmVudCwgbmF2KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWwpO1xyXG4gICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmF2dGFnID0gbmF2ICE9PSB1bmRlZmluZWQgPyAnPHBhZ2UtbmF2IDptZW51PVwibWVudVwiPjwvcGFnZS1uYXY+JyA6ICcnO1xyXG4gICAgbGV0IHRlbXBsYXRlID0gYDxkaXY+PHNpdGUtaGVhZGVyIDp0aXRsZT1cInRpdGxlXCI+JHtuYXZ0YWd9PC9zaXRlLWhlYWRlcj5cclxuPHBhZ2UtdnVlIDpqc29uPVwianNvblwiPjwvcGFnZS12dWU+PHNpdGUtZm9vdGVyPjwvc2l0ZS1mb290ZXI+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgY29uc3QgSGVhZGVyID0gU2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcclxuICAgIGNvbnN0IEZvb3RlciA9IFNpdGUuaW5mby5mb290ZXIuY29tcG9uZW50KCk7XHJcblxyXG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBTaXRlLnN0b3JlO1xyXG4gICAgY29uc3Qgc2l0ZSA9IFNpdGUuU2l0ZTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXHJcbiAgICAgICAgICAgICdzaXRlLWZvb3Rlcic6IEZvb3RlcixcclxuICAgICAgICAgICAgJ3BhZ2UtdnVlJzogY29tcG9uZW50XHJcbiAgICAgICAgfTtcclxuICAgIGlmKG5hdiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29tcG9uZW50c1sncGFnZS1uYXYnXSA9IG5hdjtcclxuICAgIH1cclxuXHJcbiAgICBuZXcgU2l0ZS5WdWUoe1xyXG4gICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgIHNpdGUsXHJcbiAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGpzb246IGpzb24sXHJcbiAgICAgICAgICAgIG1lbnU6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXQgdGhlIHNpdGUgdGl0bGUuIFRoaXMgY2FuIGJlIHVzZWQgZnJvbVxyXG4gICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHRpdGxlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRNZW51OiBmdW5jdGlvbihtZW51KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRNZW51OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9zaXRlL2ltZy95ZWxsb3dwYWQucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmNvbW1lbnQgZGl2LmNvbW1lbnQsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYuY29tbWVudCBkaXYuY29tbWVudCwgZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayBkaXYuY29tbWVudCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIGRpdi5jbC1zaG93IHtcXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7IH1cXG5cXG5kaXYuY2wtZ3JhZGVzIHRkLnJvbGUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbmRpdi5jbC1ncmFkZXIgZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZXItaXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07IH1cXG4gIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlci1pdGVtIGgyIHtcXG4gICAgbWFyZ2luLXRvcDogLTAuMjVlbTsgfVxcblxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlci1pdGVtLWxvY2tlZCB7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICAvKiBTYWZhcmkgKi9cXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDUwcHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kOiAjZjhmZmY4OyB9XFxuXFxuZGl2LmNsLWdyYWRlciBhLmxpbmstYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgcGFkZGluZzogMCAycHg7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAxZW0gMCAwIDA7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtZGlzcHV0ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtcm9sZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtcm9sZS1zdGFmZiB7XFxuICBjb2xvcjogI2M0MTQyNTsgfVxcblxcbmRpdi5jbC1ncmFkZXIgcC5jbC1kdWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjYzQxNDI1OyB9XFxuXFxuZGl2LmNsLWdyYWRlciBidXR0b24uY2wtZ3JhZGVyLWJ1dHRvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgY29sb3I6IGJsYWNrOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBhLmNsLWV4dHJhLWxpbmsge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgcGFkZGluZy10b3A6IDFlbTsgfVxcblxcbmRpdi5jbC1ncmFkZXIgdHIuY2wtY2F0ZWdvcnkgdGQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWNhdGVnb3J5IHRkOmZpcnN0LWNoaWxkIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWFzc2lnbm1lbnQgdGQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWFzc2lnbm1lbnQgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogM2VtOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBsYWJlbCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmxhYmVsLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgbGFiZWwsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYubGFiZWwge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gICAgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgbGFiZWwgYSwgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmxhYmVsIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBsYWJlbCBhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmxhYmVsIGEge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgfVxcbiAgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmNvbW1lbnQsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYuY29tbWVudCB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAwOyB9XFxuICAgIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50IHRleHRhcmVhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgdGV4dGFyZWEge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50IGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgZGl2LmNvbW1lbnQge1xcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcbiAgICAgIGhlaWdodDogMTIwcHg7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgcGFkZGluZzogMnB4OyB9XFxuICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYucG9pbnRzLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDQ1cHggNXB4IDAgMDsgfVxcbiAgICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYucG9pbnRzIGlucHV0LCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYucG9pbnRzIGRpdi52YWx1ZSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5wb2ludHMgaW5wdXQsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIGRpdi52YWx1ZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYucG9pbnRzIHNwYW4ubm90LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBzcGFuLm5vdCB7XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi52YWx1ZSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi52YWx1ZSB7XFxuICAgIHBhZGRpbmc6IDJweCAxcHg7IH1cXG4gICAgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnZhbHVlIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYudmFsdWUgYSB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiBibGFjazsgfVxcblxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sge1xcbiAgd2lkdGg6IDkwJTsgfVxcbiAgZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0ZDpsYXN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRoOmxhc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDJweDtcXG4gICAgbWFyZ2luOiAwIDJweDsgfVxcbiAgZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIGRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0ZC5jbC1kZWR1Y3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07IH1cXG4gIGRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgZGl2LmNvbW1lbnQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgbWFyZ2luOiAwLjNlbSAwOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBwLmNsLXJ1YnJpYy1leHBhbmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB7XFxuICBiYWNrZ3JvdW5kOiAjZThmN2YzO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggIzgwODA4MCBzb2xpZDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpmaXJzdC1jaGlsZCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWw6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayBwOmxhc3QtY2hpbGQsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHVsOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayBsaS5pdGVtLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayBwLml0ZW0sIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHVsLml0ZW1zIGxpIHtcXG4gICAgY29sb3I6ICM5MDAwMDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgbGkuaXRlbTpob3ZlciwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcC5pdGVtOmhvdmVyLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bC5pdGVtcyBsaTpob3ZlciB7XFxuICAgIGNvbG9yOiAjYzAwMDAwOyB9XFxuXFxuZGl2LmNsLWdyYWRlciB0ZXh0YXJlYSB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuZGl2LmNsLWdyYWRlciB0ZXh0YXJlYS55ZWxsb3ctcGFkIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7IH1cXG4gIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlIHA6Zmlyc3QtY2hpbGQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07IH1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgZGl2LmNsLXNob3cge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgbWluLWhlaWdodDogOGVtOyB9XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogOGVtOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmVuZG9yL2NsL2dyYWRlcy9zYXNzL3BhcnRpYWxzL19ncmFkaW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9zaXRlL3Nhc3MvbW9kdWxlcy9fY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUE7RUN5RUUsaUNBWmlCO0VBYWpCLG9DQWJpQjtFQWNqQiw0QkFkaUIsRUFBQTs7QURuRW5CO0VBRUksbUJBQW1CLEVBQUE7O0FBSXZCO0VBRUksa0JBQWtCLEVBQUE7O0FBRnRCO0VBTUksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0IsRUFBQTtFQVIxQjtJQVdNLG1CQUFtQixFQUFBOztBQVh6QjtFQWdCSSx3QkFBd0I7RUFBRSxXQUFBO0VBQzFCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQXBCdkI7RUF3QkkscUJBQXFCO0VBQ3JCLGlCQUFpQjtF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XFxuXFxyXFxuZGl2LmNsLWdyYWRlcyB7XFxyXFxuICB0ZC5yb2xlIHtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNsLWdyYWRlciB7XFxyXFxuICBmb3JtIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLWdyYWRlci1pdGVtIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IC0wLjI1ZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5jbC1ncmFkZXItaXRlbS1sb2NrZWQge1xcclxcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDUwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y4ZmZmODtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGEubGluay1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAuY2wtdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAuY2wtZGlzcHV0ZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgcC5jbC1yb2xlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgcC5jbC1yb2xlLXN0YWZmIHtcXHJcXG4gICAgY29sb3I6ICRjb21wO1xcclxcbiAgfVxcclxcblxcclxcbiAgcC5jbC1kdWUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgY29sb3I6ICRjb21wO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uLmNsLWdyYWRlci1idXR0b24ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGEuY2wtZXh0cmEtbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC41ZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0ci5jbC1jYXRlZ29yeSB7XFxyXFxuICAgIHRkIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0ZDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgdHIuY2wtYXNzaWdubWVudCB7XFxyXFxuICAgIHRkIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0ZDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLWdyYWRlLCBkaXYuZ3JhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgIGxhYmVsLCBkaXYubGFiZWwge1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG5cXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdi5jb21tZW50IHtcXHJcXG4gICAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xcclxcblxcclxcbiAgICAgIHRleHRhcmVhIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGRpdi5jb21tZW50IHtcXHJcXG4gICAgICAgIEBleHRlbmQgJXNoYWRvdztcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogMnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYucG9pbnRzIHtcXHJcXG4gICAgICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gICAgICB3aWR0aDogNWVtO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBwYWRkaW5nOiA0NXB4IDVweCAwIDA7XFxyXFxuXFxyXFxuICAgICAgaW5wdXQsIGRpdi52YWx1ZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHNwYW4ubm90IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpdi52YWx1ZSB7XFxyXFxuICAgICAgcGFkZGluZzogMnB4IDFweDtcXHJcXG4gICAgICBhIHtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRhYmxlLmNsLWhhbmRib29rIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG5cXHJcXG4gICAgdGQ6bGFzdC1jaGlsZCwgdGg6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgd2lkdGg6IDFweDtcXHJcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dIHtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgcGFkZGluZzogMCAycHg7XFxyXFxuICAgICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0ZXh0YXJlYSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdGQuY2wtZGVkdWN0IHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYuY29tbWVudCB7XFxyXFxuICAgICAgQGV4dGVuZCAlc2hhZG93O1xcclxcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXHJcXG4gICAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgICAgcGFkZGluZzogMnB4O1xcclxcbiAgICAgIG1hcmdpbjogMC4zZW0gMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgcC5jbC1ydWJyaWMtZXhwYW5kIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuY2wtcnVicmljYmxvY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkdmVyeS1saWdodC1wcmltYXJ5O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XFxyXFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtO1xcclxcblxcclxcbiAgICBwOmZpcnN0LWNoaWxkLCB1bDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwOmxhc3QtY2hpbGQsIHVsOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGkuaXRlbSwgcC5pdGVtLCB1bC5pdGVtcyBsaSB7XFxyXFxuICAgICAgY29sb3I6ICR2ZXJ5LWxpZ2h0LXByaW1hcnktbGluaztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGkuaXRlbTpob3ZlciwgcC5pdGVtOmhvdmVyLCB1bC5pdGVtcyBsaTpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICR2ZXJ5LWxpZ2h0LXByaW1hcnktaG92ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcblxcclxcbiAgdGV4dGFyZWEueWVsbG93LXBhZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vc2l0ZS9pbWcveWVsbG93cGFkLnBuZycpO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmdyYWRlIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcbiAgICBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmNsLXJ1YnJpYyB7XFxyXFxuXFxyXFxuXFxyXFxuICAgIGRpdi5jbC1zaG93IHtcXHJcXG4gICAgICBAZXh0ZW5kICVzaGFkb3c7XFxyXFxuICAgICAgbWFyZ2luOiAxZW0gMDtcXHJcXG4gICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiA4ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdGV4dGFyZWEge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgICAgbWFyZ2luOiAxZW0gMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiA4ZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvLyBUaGUgbWFqb3IgY29sb3JzXFxyXFxuLy8gV2UgaGF2ZSBhIHByaW1hcnkgY29sb3IsIHR3byBzZWNvbmRhcnkgY29sb3JzLCBhbmQgYSBjb21wbGVtZW50YXJ5IGNvbG9yLlxcclxcbiRhY2NlbnQ6ICM2MDdEOEI7XFxyXFxuXFxyXFxuJHRvYXN0LWJhY2tncm91bmQ6ICMxNTE1MTU7XFxyXFxuJHRvYXN0LXRleHQ6IHdoaXRlO1xcclxcblxcclxcbiRoZWFkZXItYmFja2dyb3VuZDogIzUzNTA1NDtcXHJcXG4kaGVhZGVyLXRleHQ6ICNlZWVlZWU7XFxyXFxuXFxyXFxuLy8gVGhlIG1ham9yIGNvbG9yc1xcclxcbi8vIFdlIGhhdmUgYSBwcmltYXJ5IGNvbG9yLCB0d28gc2Vjb25kYXJ5IGNvbG9ycywgYW5kIGEgY29tcGxlbWVudGFyeSBjb2xvci5cXHJcXG4kcHJpbWFyeTogIzAwNzIzZjtcXHJcXG4kbGlnaHQtcHJpbWFyeTogIzQ0YTI2YjtcXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5OiAjZThmN2YzO1xcclxcbiRkYXJrLXByaW1hcnk6ICMwMDUyMjM7XFxyXFxuJHByaW1hcnktdGV4dDogIzIxMjEyMTtcXHJcXG5cXHJcXG4kc2Vjb25kYTogIzAwOTA5ZTtcXHJcXG4kc2Vjb25kYjogI2ZjYWYxNztcXHJcXG4kc2Vjb25kYzogI2M4OWE1ODsgLy8gI2U4ZDliNTtcXHJcXG5cXHJcXG4kY29tcDogI2M0MTQyNTtcXHJcXG4kYmxpbmQ6ICNlZmM2ZmY7XFxyXFxuJGNvbXAtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1NzAxMDIsICM5NjA2MDYsICM1NzAxMDIpO1xcclxcbiRjb21wLWJvcmRlcjogI2M3YmRiYjtcXHJcXG5cXHJcXG4vLyBNZW51c1xcclxcbiRmb2N1czogIzAwODE4MztcXHJcXG4kbWVudS1iYWNrZ3JvdW5kOiAjZThlOGU4O1xcclxcbiRtZW51LWhvdmVyOiAjZDBkMGQwO1xcclxcbiRtZW51LWNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG4vLyBQYWdlIGJhY2tncm91bmRcXHJcXG4kYmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG5cXHJcXG4vLyBOYXZcXHJcXG4kbmF2LWNvbG9yOiB3aGl0ZTtcXHJcXG4kbmF2LWJhY2tncm91bmQ6IHVybCgnaW1nL25hdl9wYXR0ZXJuLnBuZycpO1xcclxcbiRuYXYtMi1jb2xvcjogI2ZmZmY5OTtcXHJcXG4kbmF2LTItYmFja2dyb3VuZDogdXJsKCdpbWcvbmF2X3BhdHRlcm4tMi5wbmcnKTtcXHJcXG5cXHJcXG4vLyBUYWJsZXNcXHJcXG4kdGFibGUtZ3JhZGllbnQtZnJvbTogIzIwNGM0MjtcXHJcXG4kdGFibGUtZ3JhZGllbnQtdG86ICMzODliNTQ7XFxyXFxuXFxyXFxuLy8gRGlhbG9nIGJveGVzXFxyXFxuJGRpYWxvZy1ncmFkaWVudC1mcm9tOiAjMjA0YzQyO1xcclxcbiRkaWFsb2ctZ3JhZGllbnQtdG86ICMzODliNTQ7XFxyXFxuJGRpYWxvZy1iYXItY29sb3I6IHdoaXRlO1xcclxcblxcclxcbi8vIExpbmsgY29sb3JzXFxyXFxuJGxpbms6ICM4MDgwODA7XFxyXFxuJHZpc2l0ZWQ6ICM5Njg0NDM7ICAvLyAjYjA5ZDViO1xcclxcbiRob3ZlcjogIzMzNjZjYztcXHJcXG5cXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5LWxpbms6ICM5MDAwMDA7XFxyXFxuJHZlcnktbGlnaHQtcHJpbWFyeS1ob3ZlcjogI2MwMDAwMDtcXHJcXG5cXHJcXG5cXHJcXG4kcHJpbWFyeS1saW5rOiB3aGl0ZTtcXHJcXG4kcHJpbWFyeS12aXNpdGVkOiAjZGRkZGRkO1xcclxcbiRzZWNvbmRiLXZpc2l0ZWQ6ICM1NTU1NTU7XFxyXFxuJGF1dG9iYWNrLWxpbms6ICM4ODIyMjI7XFxyXFxuJGF1dG9iYWNrLWxpbmstaG92ZXI6ICNjYzIyMjI7XFxyXFxuXFxyXFxuJHNoYWRvdy14OiAzcHg7XFxyXFxuJHNoYWRvdy15OiAzcHg7XFxyXFxuJHNoYWRvdy1yYWRpdXM6IDhweDtcXHJcXG4kc2hhZG93LWNvbG9yOiAjY2NjO1xcclxcblxcclxcbiR0b2dnbGUtbGluay1ob3Zlci1jb2xvcjogIzAwNjYwMDtcXHJcXG5cXHJcXG4vLyBCb3hlc1xcclxcbiRib3gtYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xcclxcblxcclxcbi8vIENhcmRzXFxyXFxuJGNhcmQtaGVhZGluZy1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xcclxcbiRjYXJkLWJvcmRlci1jb2xvcjogI2NjY2NjYztcXHJcXG5cXHJcXG4lc2hhZG93IHtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdy14ICRzaGFkb3cteSAkc2hhZG93LXJhZGl1cyAkc2hhZG93LWNvbG9yO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxufVxcclxcblxcclxcbiVub3NoYWRvdyB7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtYnVsay11cGxvYWQgZm9ybSB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbmRpdi5jbC1idWxrLXVwbG9hZCBmaWVsZHNldCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYgPiBkaXYge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcbmRpdi5jbC1idWxrLXVwbG9hZCBmaWVsZHNldCA+IGRpdiA+IGRpdiBwIHtcXG4gICAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYgPiBkaXYgcDpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1idWxrLXVwbG9hZCBmaWVsZHNldCA+IGRpdiA+IGRpdiBwOmxhc3QtY2hpbGQgaW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDYuNWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQtZGxnIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBaUxBO0VBRUksa0JBQWtCO0FBQUE7QUFGdEI7RUFRTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUFBO0FBVnZCO0lBYVEsa0JBQWtCO0FBQUE7QUFiMUI7TUFnQlUsbUJBQW1CO0FBQUE7QUFoQjdCO01Bb0JVLFNBQVM7QUFBQTtBQXBCbkI7UUF1QlksWUFBWTtBQUFBO0FBUXhCO0VBQ0UsWUFBWTtBQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbmRpdi5jbC1idWxrLXVwbG9hZCB7XFxuICBmb3JtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgZmllbGRzZXQge1xcblxcbiAgICA+IGRpdiB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcblxcbiAgICAgID4gZGl2IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcDpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDYuNWVtO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbmRpdi5jbC1idWxrLXVwbG9hZC1kbGcge1xcbiAgd2lkdGg6IDQwMHB4O1xcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJ0ZFtkYXRhLXYtNWNmOWNkZGRdIHtcXG4gIG1pbi13aWR0aDogMzBweDtcXG59XFxuZGl2LmNhdGVnb3J5W2RhdGEtdi01Y2Y5Y2RkZF0ge1xcbiAgY29sb3I6ICNmY2FmMTc7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvc2l0ZS9zYXNzL21vZHVsZXMvX2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQThHQTtFQUNFLGVBQWU7QUFBQTtBQUdmO0VBQ0UsY0NoR2E7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gIEBpbXBvcnQgJ35zaXRlLWNsL3Nhc3MvbW9kdWxlcy9jb2xvcnMnO1xcblxcbnRkIHtcXG4gIG1pbi13aWR0aDogMzBweDtcXG59XFxuXFxuICBkaXYuY2F0ZWdvcnkge1xcbiAgICBjb2xvcjogJHNlY29uZGI7XFxuICB9XFxuXCIsXCIvLyBUaGUgbWFqb3IgY29sb3JzXFxyXFxuLy8gV2UgaGF2ZSBhIHByaW1hcnkgY29sb3IsIHR3byBzZWNvbmRhcnkgY29sb3JzLCBhbmQgYSBjb21wbGVtZW50YXJ5IGNvbG9yLlxcclxcbiRhY2NlbnQ6ICM2MDdEOEI7XFxyXFxuXFxyXFxuJHRvYXN0LWJhY2tncm91bmQ6ICMxNTE1MTU7XFxyXFxuJHRvYXN0LXRleHQ6IHdoaXRlO1xcclxcblxcclxcbiRoZWFkZXItYmFja2dyb3VuZDogIzUzNTA1NDtcXHJcXG4kaGVhZGVyLXRleHQ6ICNlZWVlZWU7XFxyXFxuXFxyXFxuLy8gVGhlIG1ham9yIGNvbG9yc1xcclxcbi8vIFdlIGhhdmUgYSBwcmltYXJ5IGNvbG9yLCB0d28gc2Vjb25kYXJ5IGNvbG9ycywgYW5kIGEgY29tcGxlbWVudGFyeSBjb2xvci5cXHJcXG4kcHJpbWFyeTogIzAwNzIzZjtcXHJcXG4kbGlnaHQtcHJpbWFyeTogIzQ0YTI2YjtcXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5OiAjZThmN2YzO1xcclxcbiRkYXJrLXByaW1hcnk6ICMwMDUyMjM7XFxyXFxuJHByaW1hcnktdGV4dDogIzIxMjEyMTtcXHJcXG5cXHJcXG4kc2Vjb25kYTogIzAwOTA5ZTtcXHJcXG4kc2Vjb25kYjogI2ZjYWYxNztcXHJcXG4kc2Vjb25kYzogI2M4OWE1ODsgLy8gI2U4ZDliNTtcXHJcXG5cXHJcXG4kY29tcDogI2M0MTQyNTtcXHJcXG4kYmxpbmQ6ICNlZmM2ZmY7XFxyXFxuJGNvbXAtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM1NzAxMDIsICM5NjA2MDYsICM1NzAxMDIpO1xcclxcbiRjb21wLWJvcmRlcjogI2M3YmRiYjtcXHJcXG5cXHJcXG4vLyBNZW51c1xcclxcbiRmb2N1czogIzAwODE4MztcXHJcXG4kbWVudS1iYWNrZ3JvdW5kOiAjZThlOGU4O1xcclxcbiRtZW51LWhvdmVyOiAjZDBkMGQwO1xcclxcbiRtZW51LWNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG4vLyBQYWdlIGJhY2tncm91bmRcXHJcXG4kYmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG5cXHJcXG4vLyBOYXZcXHJcXG4kbmF2LWNvbG9yOiB3aGl0ZTtcXHJcXG4kbmF2LWJhY2tncm91bmQ6IHVybCgnaW1nL25hdl9wYXR0ZXJuLnBuZycpO1xcclxcbiRuYXYtMi1jb2xvcjogI2ZmZmY5OTtcXHJcXG4kbmF2LTItYmFja2dyb3VuZDogdXJsKCdpbWcvbmF2X3BhdHRlcm4tMi5wbmcnKTtcXHJcXG5cXHJcXG4vLyBUYWJsZXNcXHJcXG4kdGFibGUtZ3JhZGllbnQtZnJvbTogIzIwNGM0MjtcXHJcXG4kdGFibGUtZ3JhZGllbnQtdG86ICMzODliNTQ7XFxyXFxuXFxyXFxuLy8gRGlhbG9nIGJveGVzXFxyXFxuJGRpYWxvZy1ncmFkaWVudC1mcm9tOiAjMjA0YzQyO1xcclxcbiRkaWFsb2ctZ3JhZGllbnQtdG86ICMzODliNTQ7XFxyXFxuJGRpYWxvZy1iYXItY29sb3I6IHdoaXRlO1xcclxcblxcclxcbi8vIExpbmsgY29sb3JzXFxyXFxuJGxpbms6ICM4MDgwODA7XFxyXFxuJHZpc2l0ZWQ6ICM5Njg0NDM7ICAvLyAjYjA5ZDViO1xcclxcbiRob3ZlcjogIzMzNjZjYztcXHJcXG5cXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5LWxpbms6ICM5MDAwMDA7XFxyXFxuJHZlcnktbGlnaHQtcHJpbWFyeS1ob3ZlcjogI2MwMDAwMDtcXHJcXG5cXHJcXG5cXHJcXG4kcHJpbWFyeS1saW5rOiB3aGl0ZTtcXHJcXG4kcHJpbWFyeS12aXNpdGVkOiAjZGRkZGRkO1xcclxcbiRzZWNvbmRiLXZpc2l0ZWQ6ICM1NTU1NTU7XFxyXFxuJGF1dG9iYWNrLWxpbms6ICM4ODIyMjI7XFxyXFxuJGF1dG9iYWNrLWxpbmstaG92ZXI6ICNjYzIyMjI7XFxyXFxuXFxyXFxuJHNoYWRvdy14OiAzcHg7XFxyXFxuJHNoYWRvdy15OiAzcHg7XFxyXFxuJHNoYWRvdy1yYWRpdXM6IDhweDtcXHJcXG4kc2hhZG93LWNvbG9yOiAjY2NjO1xcclxcblxcclxcbiR0b2dnbGUtbGluay1ob3Zlci1jb2xvcjogIzAwNjYwMDtcXHJcXG5cXHJcXG4vLyBCb3hlc1xcclxcbiRib3gtYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xcclxcblxcclxcbi8vIENhcmRzXFxyXFxuJGNhcmQtaGVhZGluZy1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xcclxcbiRjYXJkLWJvcmRlci1jb2xvcjogI2NjY2NjYztcXHJcXG5cXHJcXG4lc2hhZG93IHtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogJHNoYWRvdy14ICRzaGFkb3cteSAkc2hhZG93LXJhZGl1cyAkc2hhZG93LWNvbG9yO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxufVxcclxcblxcclxcbiVub3NoYWRvdyB7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYjY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50W2RhdGEtdi01NmIwNTk4MF0ge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5kaXYjY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50IHBbZGF0YS12LTU2YjA1OTgwXSB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgZGl2LmNsLXBhcnRzW2RhdGEtdi01NmIwNTk4MF0ge1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5kaXYjY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50IGRpdi5jbC1wYXJ0cyA+IGRpdltkYXRhLXYtNTZiMDU5ODBdIHtcXG4gICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgZGl2LmNsLXBhcnRzID4gZGl2ID4gZGl2W2RhdGEtdi01NmIwNTk4MF06Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbmRpdiNjbC1jb2x1bW4tY2hvb3Nlci1jb21wb25lbnQgZGl2LmNsLXBhcnRzID4gZGl2ID4gZGl2W2RhdGEtdi01NmIwNTk4MF0ge1xcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgICAgIGhlaWdodDogMmVtO1xcbn1cXG5kaXYjY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50IGRpdi5jbC1wYXJ0cyBkaXYuY2wtY29tbWVudFtkYXRhLXYtNTZiMDU5ODBdIHtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE4RUE7RUFDSSxZQUFZO0FBQUE7QUFEaEI7SUFHUSxnQkFBZ0I7QUFBQTtBQUh4QjtJQU9RLGNBQWM7SUFDZCxZQUFZO0FBQUE7QUFScEI7TUFXWSxrQkFBa0I7QUFBQTtBQVg5QjtRQWNnQixrQkFBa0I7UUFDbEIsaUJBQWlCO0FBQUE7QUFmakM7UUFtQmdCLG1CQUFtQjtRQUNuQixXQUFXO0FBQUE7QUFwQjNCO01BeUJZLGtCQUFrQjtNQUNsQixpQkFBaUI7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5kaXYjY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50IHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGl2LmNsLXBhcnRzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgICAgICAgPmRpdiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xcclxcblxcclxcbiAgICAgICAgICAgID5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA+ZGl2IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2LmNsLWNvbW1lbnQge1xcclxcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtZ3JhZGUtaGlzdG9yeVtkYXRhLXYtMTc3ZmFhNTNdIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDFlbSAwO1xcbn1cXG5wW2RhdGEtdi0xNzdmYWE1M10ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcbnAuZXhwYW5kZXJbZGF0YS12LTE3N2ZhYTUzXSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5kaXYuZ3JhZGVzW2RhdGEtdi0xNzdmYWE1M10ge1xcbiAgcGFkZGluZzogMnB4IDAgMnB4IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmZmRkO1xcbn1cXG5kaXYuZ3JhZGVzIHBbZGF0YS12LTE3N2ZhYTUzXSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMnB4IDAgMCAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFvREE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUFBO0FBRWY7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQUE7QUFHbkI7RUFDRSxnQkFBZ0I7QUFBQTtBQUVsQjtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFBQTtBQUYzQjtJQUtJLFNBQVM7SUFDVCxrQkFBa0I7QUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5kaXYuY2wtZ3JhZGUtaGlzdG9yeSB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxucCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG59XFxuXFxucC5leHBhbmRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5kaXYuZ3JhZGVzIHtcXG4gIHBhZGRpbmc6IDJweCAwIDJweCAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZDtcXG5cXG4gIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDJweCAwIDAgMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX2dyYWRlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vX2dyYWRlcy5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzLCB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMsIHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNmOWNkZGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNmOWNkZGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00WzBdLnJ1bGVzWzBdLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTZiMDU5ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2YjA1OTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMsIHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTc3ZmFhNTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTc3ZmFhNTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscywgdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFnQ0FJQUFBQ3RqTjdBQUFBQlMybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBnb2dQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRLSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpOCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtuaHhnN3dBQUFIbEpSRUZVT0kzdDByRU5nMEFVQTFEN24rRXFLcFFaTWtGbVpEdEtOa2lUSGlFQ3Vjc0tiaEJDNHRkUEx2ek5iUjdnSEhOWURnQndEQlZRUFZsVklETlVpc1dqUmV2V09aRE1HdDh2aDBZa1BSK1RReXRiOWQzSG9RVlorOTU0cVkxbzkzcjZCbTZxaUs4bmVhMjkvdWhRa0dKTkZrVTYvVnQvUFVnaElHd0RXRElBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyZDY4YjBiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vR3JhZGVCdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDJkNjhiMGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDJkNjhiMGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDJkNjhiMGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDJkNjhiMGImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDJkNjhiMGInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZU1hbnVhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ5OTkzZDUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVNYW51YWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZU1hbnVhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRkOTk5M2Q1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRkOTk5M2Q1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRkOTk5M2Q1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZU1hbnVhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ5OTkzZDUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGQ5OTkzZDUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZU1hbnVhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNmOWNkZGQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNmOWNkZGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1Y2Y5Y2RkZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVjZjljZGRkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVjZjljZGRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVjZjljZGRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjZjljZGRkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVjZjljZGRkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVzTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjY0MjE2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlc0xpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMmI2NDIxNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMmI2NDIxNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMmI2NDIxNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVzTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjY0MjE2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyYjY0MjE2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTGlua3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZXNNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwZWYyMzhlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwZWYyMzhlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwZWYyMzhlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwZWYyMzhlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZXNNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwZWYyMzhlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwZWYyMzhlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTWVtYmVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTZiMDU5ODAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTZiMDU5ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NmIwNTk4MFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU2YjA1OTgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU2YjA1OTgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU2YjA1OTgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NmIwNTk4MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NmIwNTk4MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc1VwbG9hZENvbHVtbkNob29zZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZmQxNDZhOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdmZDE0NmE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdmZDE0NmE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdmZDE0NmE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZmQxNDZhOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZmQxNDZhOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAzMGY4MTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwMzBmODE5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwMzBmODE5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwMzBmODE5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAzMGY4MTkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjAzMGY4MTknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTY2OWQxMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDE2NjlkMTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDE2NjlkMTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDE2NjlkMTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTY2OWQxMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMTY2OWQxMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjE1MjM1YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkZjE1MjM1YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkZjE1MjM1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkZjE1MjM1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjE1MjM1YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkZjE1MjM1YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY0VkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NjZkNzRiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTU2NmQ3NGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTU2NmQ3NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTU2NmQ3NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NjZkNzRiJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU1NjZkNzRiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljc0VkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmRhYjc3ZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9IYW5kYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjJkYWI3N2YnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjJkYWI3N2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjJkYWI3N2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmRhYjc3ZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MmRhYjc3ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYyYjBiMjAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWYyYjBiMjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWYyYjBiMjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWYyYjBiMjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYyYjBiMjAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWYyYjBiMjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3MDQxOWUwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI3MDQxOWUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI3MDQxOWUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI3MDQxOWUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3MDQxOWUwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI3MDQxOWUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzdmYWE1MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzdmYWE1MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE3N2ZhYTUzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTc3ZmFhNTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTc3ZmFhNTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTc3ZmFhNTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc3ZmFhNTMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTc3ZmFhNTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGJmNGNiMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBkYmY0Y2IwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBkYmY0Y2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBkYmY0Y2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGJmNGNiMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZGJmNGNiMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VOYXYudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUJ1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlTWFudWFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzVXBsb2FkQ29sdW1uQ2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNVcGxvYWRDb2x1bW5DaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1J1YnJpY0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUnVicmljc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IYW5kYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IYW5kYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlQXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1idWxrLXVwbG9hZFwiIH0sIFtcbiAgICBfYyhcImgyXCIsIHsgYXR0cnM6IHsgaWQ6IFwiYnVsa1wiIH0gfSwgW192bS5fdihcIkJ1bGsgZ3JhZGUgdXBsb2FkaW5nXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlRoaXMgb3B0aW9uIGFjY2VwdHMgZmlsZXMgaW4gQ1NWIGZvcm1hdCBhcyBwcm9kdWNlZCBieSBDcm93ZE1hcmsgYW5kIG90aGVyIHN5c3RlbXMuIFwiXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmdWxsXCIsXG4gICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIsIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLmJ1bGtVcGxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJmaWVsZHNldFwiLCBbXG4gICAgICAgICAgX2MoXCJsZWdlbmRcIiwgW192bS5fdihcIkJ1bGsgVXBsb2FkIEZpbGVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJGaWxlIHRvIHVwbG9hZDogXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJidWxrZmlsZVwiLCB0eXBlOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uYnVsa0ZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiUHJlc3NcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIHRvIHVwbG9hZCB0aGUgZmlsZSFcIilcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1ncmFkZVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbW1lbnRcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgX3ZtLl92KFwiQ29tbWVudCBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29tcHV0ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJjb21wdXRlXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5tYW51YWwuY29tbWVudCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLm1hbnVhbC5jb21tZW50XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbW1lbnRcIixcbiAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjZcIiwgbmFtZTogX3ZtLml0ZW0udGFnICsgXCItY29tbWVudFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5pdGVtLm1hbnVhbC5jb21tZW50IH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLml0ZW0ubWFudWFsLCBcImNvbW1lbnRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb2ludHNcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgX3ZtLl92KFwiUG9pbnRzXFxuICAgICAgICAgICAgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaXRlbS5tYW51YWwucG9pbnRzLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ubWFudWFsLnBvaW50c1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb2ludHNcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIGlkOiBfdm0uaXRlbS50YWcgKyBcIi1wb2ludHNcIixcbiAgICAgICAgICAgIG5hbWU6IF92bS5pdGVtLnRhZyArIFwiLXBvaW50c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLml0ZW0ubWFudWFsLnBvaW50cyB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pdGVtLm1hbnVhbCwgXCJwb2ludHNcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb2ludHNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIkF2YWlsYWJsZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwiZGF0YS1pZFwiOiBfdm0uaXRlbS50YWcgKyBcIi1wb2ludHNcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQ2xpY2sgdG8gZmlsbCBpbiBwb2ludHNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmlsbEluUG9pbnRzKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLml0ZW0ubWFudWFsLmF2YWlsYWJsZSkpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJzLWZldGNoZXJcIiwge1xuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZmV0Y2hlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2ZXJ0aWNhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VjdGlvbi5hc3NpZ25tZW50cy5jYXRlZ29yaWVzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGNhdGVnb3J5LmFzc2lnbm1lbnRzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQuc2hvcnRuYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGwgY2F0ZWdvcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiB1c2VyLnJvbGUoKSAhPT0gXCJUXCIgPyBcImlnbm9yZVwiIDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ncmFkZXMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL2dyYWRlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIucm9sZU5hbWUoKSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlY3Rpb24uYXNzaWdubWVudHMuY2F0ZWdvcmllcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGNhdGVnb3J5LmFzc2lnbm1lbnRzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hc3NpZ25tZW50R3JhZGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY2F0ZWdvcnlHcmFkZSh1c2VyLCBjYXRlZ29yeSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibWVtYmVycy1mZXRjaGVyXCIsIHtcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmV0Y2hlci51c2VycywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHVzZXIucm9sZSgpICE9PSBcIlRcIiA/IFwiaWdub3JlXCIgOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL2dyYWRlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLm1lbWJlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSgpKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXItZmV0Y2hlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBfdm0ubWVtYmVyaWQsXG4gICAgICAgICAgICBmYWlsbGluazogX3ZtLnJvb3QgKyBcIi9jbC9jb25zb2xlL2dyYWRlcy9saW5rc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBmZXRjaGVkOiBfdm0uZmV0Y2hlZCB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZmV0Y2hlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInByZXYtbmV4dFwiLCB7IGF0dHJzOiB7IHVzZXI6IGZldGNoZXIudXNlciB9IH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlciAhPT0gbnVsbCAmJiBfdm0uZ3JhZGUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBc3NpZ25tZW50XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLCoFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiR3JhZGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJHcmFkZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdyYWRlLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtY2F0ZWdvcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoY2F0ZWdvcnkucG9pbnRzKSArIFwiJVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkuZ3JhZGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woY2F0ZWdvcnkuYXNzaWdubWVudHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGFzc2lnbm1lbnQudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1hc3NpZ25tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NsL2NvbnNvbGUvZ3JhZGluZy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQudGFnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnVzZXIubWVtYmVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50Lm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGFzc2lnbm1lbnQucG9pbnRzICogMTApIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50LmdyYWRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wdXRlZCBHcmFkZTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZS5ncmFkZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgb3V0IG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ3JhZGUuYXZhaWxhYmxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBhdmFpbGFibGUgcG9pbnRzXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiY2wtY29sdW1uLWNob29zZXItY29tcG9uZW50XCIgfSB9LCBbXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIk1lbWJlciBpZGVudGlmaWVyIGNvbHVtbjpcXG4gICAgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWVtYmVySWRDb2x1bW4uaWQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVtYmVySWRDb2x1bW4uaWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgIF92bS5tZW1iZXJJZENvbHVtbixcbiAgICAgICAgICAgICAgICBcImlkXCIsXG4gICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0uY29sdW1ucywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoX3ZtLl9zKGNvbHVtbikpXSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiTWVtYmVyIGlkZW50aWZpZXIgY2FuIGJlIGFuIGVtYWlsIGFkZHJlc3Mgb3IgdXNlciBJRC5cIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgIF92bS5fdihcIlNlbGVjdCBjb2x1bW4gZm9yIGVhY2ggZ3JhZGUgaXRlbVwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1wYXJ0c1wiIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fbChfdm0ucGFydHMsIGZ1bmN0aW9uKHBhcnQsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MocGFydC5uYW1lKSArIFwiOlwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmdbcGFydC50YWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYXBwaW5nW3BhcnQudGFnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWFwcGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbHVtblNlbGVjdCwgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KF92bS5fcyhjb2x1bW4pKV0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtY29tbWVudFwiIH0sIFtfdm0uX3YoXCJjb21tZW50OlwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbW1lbnRNYXBwaW5nW3BhcnQudGFnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29tbWVudE1hcHBpbmdbcGFydC50YWddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21tZW50TWFwcGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbHVtblNlbGVjdCwgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KF92bS5fcyhjb2x1bW4pKV0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWdyYWRlclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJHcmFkZXMgU3VtbWFyeVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS5yb290ICsgXCIvY2wvY29uc29sZS9ncmFkZXMvYWxsXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBbGwgU3R1ZGVudHNcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLnJvb3QgKyBcIi9jbC9jb25zb2xlL2dyYWRlcy9saW5rc1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWxsIFN0dWRlbnRzIEdyYWRlIExpbmtzXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZG93bmxvYWRQZXJtaXNzaW9uXG4gICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5yb290ICsgXCIvY2wvZ3JhZGVzL2NzdlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRG93bmxvYWQgU3R1ZGVudCBHcmFkZXNcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5ydWJyaWNEdW1wZXJQZXJtaXNzaW9uXG4gICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IF92bS5yb290ICsgXCIvY2wvZ3JhZGVzL3J1YnJpYy1kdW1wZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUnVicmljIER1bXBlclwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLnNlY3Rpb24uYXNzaWdubWVudHMuY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXNzaWdubWVudHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW19jKFwiZW1cIiwgW192bS5fdihcIlBlbmRpbmcuLi5cIildKV0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9sKGNhdGVnb3J5LmFzc2lnbm1lbnRzLCBmdW5jdGlvbihhc3NpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGFzc2lnbm1lbnQudGFnIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS5ncmFkaW5nTGluayArIGFzc2lnbm1lbnQudGFnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlci5hdExlYXN0KF92bS50YSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmstYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ydWJyaWMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQudGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwicnVicmljc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXNcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzdWJtaXNzaW9ucy1saW5rc1wiLCB7IGF0dHJzOiB7IGFzc2lnbm1lbnQ6IF92bS5hc3NpZ25tZW50IH0gfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibWVtYmVycy1mZXRjaGVyXCIsIHtcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX3ZtLmdyYWRlcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZlcnRpY2FsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhcnRzLCBmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MocGFydC5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdyYWRlcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJHcmFkZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmV0Y2hlci51c2VycywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHVzZXIucm9sZSgpICE9PSBcIlRcIiA/IFwiaWdub3JlXCIgOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArIF92bS5saW5rICsgdXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArIF92bS5saW5rICsgdXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicm9sZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHVzZXIucm9sZU5hbWUoKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhcnRzLCBmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhcnRHcmFkZSh1c2VyLCBwYXJ0KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ3JhZGUodXNlcikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImVtXCIsIFtfdm0uX3YoXCJjb3VudHNcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmZXRjaGVyLnVzZXJzLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhcnRzLCBmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wYXJ0Q291bnQoZmV0Y2hlci51c2VycywgcGFydCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdyYWRlcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZXNDb3VudChmZXRjaGVyLnVzZXJzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJlbVwiLCBbX3ZtLl92KFwiYXZlcmFnZXNcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGFydHMsIGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBhcnRBdmVyYWdlKGZldGNoZXIudXNlcnMsIHBhcnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ3JhZGVBdmVyYWdlKGZldGNoZXIudXNlcnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnBhcnRzLmxlbmd0aCA+IDAgJiYgX3ZtLnRhXG4gICAgICAgICAgPyBfYyhcImJ1bGstdXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgYXNzaWdudGFnOiBfdm0uYXNzaWdudGFnLCBwYXJ0czogX3ZtLnBhcnRzIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibWVtYmVyLWZldGNoZXJcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IGlkOiBfdm0ubWVtYmVyaWQsIGZhaWxsaW5rOiBfdm0uZ3JhZGluZ0xpbmsgfSxcbiAgICAgICAgICBvbjogeyBmZXRjaGVkOiBfdm0uZmV0Y2hlZCB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZmV0Y2hlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInByZXYtbmV4dFwiLCB7IGF0dHJzOiB7IHVzZXI6IGZldGNoZXIudXNlciB9IH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlciAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyLnJvbGUoKSA9PT0gXCJUXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjbC1yb2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJjbC1yb2xlIGNsLXJvbGUtc3RhZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmV0Y2hlci51c2VyLnJvbGVOYW1lKCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmV0Y2hlci51c2VyLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmZXRjaGVyLnVzZXIucm9sZSgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJlbVwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZmV0Y2hlci51c2VyLnVzZXJJZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWdyYWRlci1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1haWwoZmV0Y2hlci51c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIGVtYWlsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnVzZXIucm9sZU5hbWUoKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtZ3JhZGVyLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ncmFkZXMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJzdHVkZW50IGdyYWRlc1xcbiAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZHVlICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWR1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFzc2lnbm1lbnQgZHVlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50aW1lKF92bS5kdWUpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ3JhZGVycywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsLWdyYWRlci1pdGVtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0ubG9ja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgY2wtZ3JhZGVyLWl0ZW0tbG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFnXCI6IGl0ZW0udGFnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLWdyYWRlci1pdGVtLWxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiTG9jay9VbmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvY2soaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtLmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIvY2wvaW1nL2xvY2stb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2NsL2ltZy9sb2NrLW9mZi5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiVW5sb2NrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZWFtaW5nICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1leHRyYS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGVhbURpc3RyaWJ1dGUoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGVhbSBEaXN0cmlidXRlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ydWJyaWMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC10b2dnbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1ydWJyaWMtZXhwYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkV4cGFuZCBmb3IgcnVicmljXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbC1ydWJyaWNibG9jayBjbC1jbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ydWJyaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tYW51YWwgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImdyYWRlLW1hbnVhbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5odG1sICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhpdGVtLmh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaGFuZGJvb2sgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImhhbmRib29rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFuZGJvb2stZGF0YVwiOiBfdm0uaGFuZGJvb2tEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZ3JhZGUtaGlzdG9yeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoaXN0b3J5OiBpdGVtLmhpc3RvcnkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3VibWlzc2lvbnNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogZmV0Y2hlci51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ250YWc6IF92bS5hc3NpZ250YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXZpZXdpbmcgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoX3ZtLnJldmlld2luZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBfdm0uYXNzaWdudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogZmV0Y2hlci51c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ3JhZGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ3JhZGUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXB1dGVkIEdyYWRlOiBcIiArIF92bS5fcyhfdm0uZ3JhZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiR3JhZGUgTm90IEF2YWlsYWJsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlciBzbWFsbCBub3RpY2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmFkZXMgYXJlIG5vdCBhdmFpbGFibGUgdW50aWwgYWxsIHBhcnRzIG9mIHRoZSBhc3NpZ25tZW50IGhhdmUgYmVlblxcbiAgICAgICAgICAgICAgICAgIGdyYWRlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLnJ1YnJpYy5uYW1lKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1ydWJyaWNibG9jayBjbC1zaG93XCIsXG4gICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJ1YnJpYy5zaG93KSB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJlZGl0b3JcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSxcbiAgICBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5ydWJyaWNzLCBmdW5jdGlvbihydWJyaWMpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1ydWJyaWNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicnVicmljLWVkaXRvclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGFzc2lnbnRhZzogX3ZtLmFzc2lnbnRhZywgcnVicmljOiBydWJyaWMgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC10b2dnbGVcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW1xuICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIkV4cGFuZCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNyZWF0aW5nIHJ1YnJpY3MuXCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdG9nZ2xlYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJSdWJyaWNzIGFyZSBlbnRlcmVkIGFzIEhUTUwuIEEgY29tbW9uIGZvcm1hdCBpcyB0b1xcbiAgICAgICAgY3JlYXRlIGxpc3RzIHVzaW5nIDx1bD4gYW5kIDxsaT4gdGFncy5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJDb250ZW50cyBvZiBhbiA8bGk+IG9yIDxwPiB0YWcgY2FuIGJlIG1ha2VcXG4gICAgICAgIGNsaWNrYWJsZSBzbyB0aGV5IGF1dG9tYXRpY2FsbHkgYXBwZWFyIGluIHRoZSBjb21tZW50XFxuICAgICAgICB3aW5kb3cgYnkgYWRkaW5nIHRoZSBjbGFzcyAnaXRlbScuIEFsbCA8bGk+IGNoaWxkcmVuXFxuICAgICAgICBvZiBhIDx1bD4gY2FuIGJlIG1hZGUgY2xpY2thYmxlIGJ5IGFkZGluZyB0aGVcXG4gICAgICAgIGNsYXNzICdpdGVtcyc6XCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNvZGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgJzx1bD5cXG4gICA8bGkgY2xhc3M9XCJpdGVtXCI+VGhpcyBpdGVtIHdpbGwgYmUgY2xpY2thYmxlPC9saT5cXG4gICA8bGk+VGhpcyBpdGVtIHdpbGwgbm90IGJlIGNsaWNrYWJsZTwvbGk+XFxuPC91bD5cXG5cXG48cCBjbGFzcz1cIml0ZW1cIj5BbmQgdGhpcyB3aWxsIGJlIGNsaWNrYWJsZTwvcD5cXG5cXG48dWwgY2xhc3M9XCJpdGVtc1wiPlxcbiAgIDxsaT5BbGwgb2YgdGhlc2UgaXRlbXMgd2lsbCBiZSBjbGlja2FibGU8L2xpPlxcbiAgIDxsaT5UaGlzIG9uZSwgdG9vITwvbGk+XFxuPC91bD5cXG4gICAgICAnXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJ0YWJsZVwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1oYW5kYm9va1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ2F0ZWdvcnlcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiTXVsdGlwbGllcjogXCIgKyBfdm0uX3MoX3ZtLml0ZW0ubXVsdGlwbGllcikpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLml0ZW0uaGFuZGJvb2suY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkucnVicmljICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdG9nZ2xlIGNsLXNpbmdsZS1zcGFjZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKV0pXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1ydWJyaWNibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGNhdGVnb3J5LnJ1YnJpYykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICA6IFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKV1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICA/IF92bS5fbChjYXRlZ29yeS5kZWR1Y3QgKyAxLCBmdW5jdGlvbihkZWR1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRhZGF0YVtjYXRlZ29yeS50YWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0YWRhdGFbY2F0ZWdvcnkudGFnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWR1Y3QgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldGFkYXRhW2NhdGVnb3J5LnRhZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVkdWN0IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWR1Y3QgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tcHV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZWR1Y3Rpb24oX3ZtLm1ldGFkYXRhW2NhdGVnb3J5LnRhZ10pKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgPyBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1ldGFkYXRhW1wiX21hbnVhbF90ZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0YWRhdGFbJ19tYW51YWxfdGV4dCddXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm1ldGFkYXRhW1wiX21hbnVhbF90ZXh0XCJdIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9tYW51YWxfdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5tZXRhZGF0YVtcIl9tYW51YWxfdGV4dFwiXSkpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgICAgPyBfdm0uX2woNSwgZnVuY3Rpb24oZGVkdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0YWRhdGFbXCJfbWFudWFsXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1ldGFkYXRhWydfbWFudWFsJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWR1Y3QgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKF92bS5tZXRhZGF0YVtcIl9tYW51YWxcIl0sIGRlZHVjdCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChfdm0ubWV0YWRhdGEsIFwiX21hbnVhbFwiLCBkZWR1Y3QgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29tcHV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kZWR1Y3Rpb24oX3ZtLm1ldGFkYXRhW1wiX21hbnVhbFwiXSkpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgPyBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1ldGFkYXRhW1wiX2NvbW1lbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRhZGF0YVsnX2NvbW1lbnQnXVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjNcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5tZXRhZGF0YVtcIl9jb21tZW50XCJdIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1ldGFkYXRhLCBcIl9jb21tZW50XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm1ldGFkYXRhW1wiX2NvbW1lbnRcIl0pKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWRlZHVjdFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50b3RhbCkpXSlcbiAgICAgICAgXSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRGVkdWN0aW9uXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIwIHRvIG1heFwiKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1pbnRlcm5hbFwiIH0sIFtcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbW1lbnRcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRlZHVjdGlvblwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1hdXRvYmFja1wiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjbC10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5qc29uLmFzc2lnbm1lbnQubmFtZSkpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uanNvbi5kaXNwdXRlICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1kaXNwdXRlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJQbGVhc2UgZGlyZWN0IGFsbCBncmFkaW5nIGlzc3VlcyB0byBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5qc29uLmRpc3B1dGUpIH0gfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5qc29uLmdyYWRlcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLmh0bWwgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBpdGVtLmhhbmRib29rID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGl0ZW0uaHRtbCkgfSB9KVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaGFuZGJvb2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSwgcmVhZG9ubHk6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImdyYWRlLWhpc3RvcnlcIiwgeyBhdHRyczogeyBoaXN0b3J5OiBpdGVtLmhpc3RvcnkgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ3JhZGVcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5qc29uLmdyYWRlICE9PSBudWxsXG4gICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtfdm0uX3YoXCJDb21wdXRlZCBHcmFkZTogXCIgKyBfdm0uX3MoX3ZtLmpzb24uZ3JhZGUpKV0pXG4gICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJHcmFkZSBOb3QgQXZhaWxhYmxlXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyIHNtYWxsIG5vdGljZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiR3JhZGVzIGFyZSBub3QgYXZhaWxhYmxlIHVudGlsIGFsbCBwYXJ0cyBvZiB0aGUgYXNzaWdubWVudCBoYXZlIGJlZW4gZ3JhZGVkLlwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWF1dG9iYWNrXCIgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWdyYWRlclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LCBbXG4gICAgICBfdm0uZ3JhZGUgIT09IG51bGxcbiAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uanNvbi5iZWZvcmUpIH0gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5qc29uLmRpc3B1dGUgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQbGVhc2UgZGlyZWN0IGFsbCBncmFkaW5nIGlzc3VlcyB0byBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uanNvbi5kaXNwdXRlKSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ3JhZGUuY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jYXRlZ29yeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkucG9pbnRzKSArIFwiJVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkuZ3JhZGUpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woY2F0ZWdvcnkuYXNzaWdubWVudHMsIGZ1bmN0aW9uKGFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzaWdubWVudC5wb2ludHMgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGFzc2lnbm1lbnQudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtYXNzaWdubWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArIFwiL2NsL2dyYWRlL1wiICsgYXNzaWdubWVudC50YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoYXNzaWdubWVudC5wb2ludHMgKiAxMCkgLyAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoYXNzaWdubWVudC5ncmFkZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJDbGljayBvbiBlYWNoIGFzc2lnbm1lbnQgZm9yIG1vcmUgZ3JhZGluZyBkZXRhaWxcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiQ29tcHV0ZWQgR3JhZGU6IFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ3JhZGUuZ3JhZGUpICtcbiAgICAgICAgICAgICAgICAgIFwiIG91dCBvZiBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdyYWRlLmF2YWlsYWJsZSkgK1xuICAgICAgICAgICAgICAgICAgXCIgYXZhaWxhYmxlIHBvaW50c1wiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGVyKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uanNvbi5hZnRlcikgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQXNzaWdubWVudFwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkdyYWRlXCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLCoFwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiR3JhZGVcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWdyYWRlLWhpc3RvcnlcIiB9LCBbXG4gICAgX3ZtLmhpc3RvcnkyLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5oaXN0b3J5Mi5sZW5ndGggPiAxXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdG9nZ2xlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImV4cGFuZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheShfdm0uaGlzdG9yeTJbMF0pKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAvIEV4cGFuZCBmb3IgYWRkaXRpb25hbCBncmFkaW5nIGhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmFkZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5oaXN0b3J5MiwgZnVuY3Rpb24oaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KGgpKSldKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KF92bS5oaXN0b3J5MlswXSkpKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLW5hdlwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhvbWVMaW5rIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSwgW192bS5fdihcIkhvbWVcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0ubWVudSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoY2FjaGVkTW9kdWxlLmVycm9yICE9PSB1bmRlZmluZWQpIHRocm93IGNhY2hlZE1vZHVsZS5lcnJvcjtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dHJ5IHtcblx0XHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdFx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRcdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cdH0gY2F0Y2goZSkge1xuXHRcdG1vZHVsZS5lcnJvciA9IGU7XG5cdFx0dGhyb3cgZTtcblx0fVxuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIkdyYWRlcy5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI4MjRhZmQ1YzZlOGRjOWZmMjdmXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiY291cnNlbGliOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcztcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZm4oKTtcblx0dmFyIGJsb2NrZXIgPSBibG9ja2luZ1Byb21pc2VzO1xuXHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdHJldHVybiBQcm9taXNlLmFsbChibG9ja2VyKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRzZXRTdGF0dXMoXCJjaGVja1wiKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaG1yTSgpLnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cblx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdGtleVxuXHRcdFx0KSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdH0sXG5cdFx0XHRbXSlcblx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblxuXHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRzZXRTdGF0dXMoXCJhYm9ydFwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0c2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHRzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdGlmIChlcnJvcikge1xuXHRcdHNldFN0YXR1cyhcImZhaWxcIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRTdGF0dXMoXCJpZGxlXCIpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIkdyYWRlc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZWNvdXJzZWxpYlwiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0IV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3Vyc2VsaWJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi92ZW5kb3IvY2wvZ3JhZGVzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9