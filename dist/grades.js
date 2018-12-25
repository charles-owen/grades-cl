(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Grades"] = factory();
	else
		root["Grades"] = factory();
})(window, function() {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Grades"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! users-cl/js/Vue/UserVueBase.vue */ "./vendor/cl/users/js/Vue/UserVueBase.vue");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    /**
     * Add an option to the nav2 menu.
     * @param title Title of the option to add.
     * @param order Order in the menu.
     * @param closure Function to call when selected.
     */
    addNav2: function addNav2(title, order, closure) {
      var item = this.$site.console.components.addNav2Link(this, title, order, closure);
      this.components1.push(item);
      return item;
    },

    /**
     * Add an option to the nav2 menu that is a router link
     * @param title Title of the option to add.
     * @param order Order in the menu.
     * @param link Link without Site.root
     */
    addNav2Link: function addNav2Link(title, order, link) {
      var _this = this;

      this.addNav2(title, order, function () {
        _this.$router.push(Site.root + link);
      });
    },
    removeNav2: function removeNav2(item) {
      var i = this.components1.indexOf(item);

      if (i >= 0) {
        this.components1.splice(i, 1);
      }

      this.$site.console.components.removeNav2(this, item);
    }
  },
  created: function created() {
    this.components1 = [];
  },
  beforeDestroy: function beforeDestroy() {
    this.$site.console.components.removeNav2(this, this.components1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var users_cl_js_Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! users-cl/js/Lib/FetcherVue.vue */ "./vendor/cl/users/js/Lib/FetcherVue.vue");
/* harmony import */ var _StudentsOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentsOnly */ "./vendor/cl/course/js/Console/Members/StudentsOnly.js");
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      default: 0
    },
    faillink: {
      default: null
    }
  },
  data: function data() {
    return {
      user: null
    };
  },
  watch: {
    id: function id(to, from) {
      this.fetch();
    }
  },
  mounted: function mounted() {
    this.fetch();
  },
  components: {
    'fetcher': users_cl_js_Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      var query = {
        id: this.id
      };

      if (_StudentsOnly__WEBPACK_IMPORTED_MODULE_1__["StudentsOnly"].get()) {
        query.role = _Members_Member__WEBPACK_IMPORTED_MODULE_2__["Member"].STUDENT;
      }

      this.$store.dispatch('members/get', query).then(function (user) {
        _this.user = user;
        _this.userId = user.userId;

        _this.$emit('fetched', _this.user);
      }).catch(function (msg) {
        Site.toast(_this, msg);

        if (_this.faillink !== null) {
          setTimeout(function () {
            _this.$router.push({
              path: Site.root + _this.faillink
            });
          }, 3000);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var users_cl_js_Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! users-cl/js/Lib/FetcherVue.vue */ "./vendor/cl/users/js/Lib/FetcherVue.vue");
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _StudentsOnly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StudentsOnly */ "./vendor/cl/course/js/Console/Members/StudentsOnly.js");
//
//
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
 * Member fetcher component that can be used by views.
 *
 * @constructor MembersFetcherComponentVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  // If the fetching value it true, the using client
  // is fetching more than just the membership and we will
  // wait for that as well.
  props: {
    fetching: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      students: false,
      studentsElement: null
    };
  },
  methods: {
    fetchMore: function fetchMore() {
      this.$store.dispatch('members/more');
    },

    /**
     * Add "Students Only" to the menu bar
     * @memberof MembersFetcherComponentVue
     */
    addStudentsOnly: function addStudentsOnly() {
      this.students = _StudentsOnly__WEBPACK_IMPORTED_MODULE_3__["StudentsOnly"].get();
      var element = this.$refs['students-only'];
      element.parentNode.removeChild(element);
      var extra = document.querySelector('div.cl-section-component span.extra');
      extra.appendChild(element);
      element.style.display = 'inline-block';
      this.studentsElement = element;
    },
    studentsOnlyChanged: function studentsOnlyChanged() {
      _StudentsOnly__WEBPACK_IMPORTED_MODULE_3__["StudentsOnly"].set(this.students);
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    users: function users(state) {
      if (this.students) {
        return state.members.users.filter(function (user) {
          return user.role() === _Members_Member__WEBPACK_IMPORTED_MODULE_2__["Member"].STUDENT;
        });
      } else {
        return state.members.users;
      }
    },
    fetcher: function fetcher(state) {
      return state.members.fetcher;
    }
  }),
  components: {
    'fetcher': users_cl_js_Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.students = _StudentsOnly__WEBPACK_IMPORTED_MODULE_3__["StudentsOnly"].get();
    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.$store.commit('members/query', query);
    this.$store.dispatch('members/fetch');
    setTimeout(function () {
      _this.addStudentsOnly();
    }, 100);
  },
  beforeDestroy: function beforeDestroy() {
    this.studentsElement.parentNode.removeChild(this.studentsElement);
    var extras = document.querySelectorAll('div.cl-section-component span.extra');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      link: ''
    };
  },
  watch: {
    user: function user(to, fm) {
      var user = this.user;
      var link = this.link;

      if (user !== null && user.prev !== undefined) {
        this.$set(this.$site.console.components, 'nav2left', {
          template: "<router-link title=\"Previous Member\" :to=\"link + user.prev.member.id\"><img :src=\"icon\" alt=\"Previous Member\"></router-link>",
          data: function data() {
            return {
              icon: Site.root + '/vendor/cl/site/img/previcon.png',
              user: user,
              link: link
            };
          }
        });
      } else {
        this.$set(this.$site.console.components, 'nav2left', null);
      }

      if (user !== null && user.next !== undefined) {
        this.$set(this.$site.console.components, 'nav2right', {
          template: "<router-link title=\"Next Member\" :to=\"link + user.next.member.id\"><img :src=\"icon\" alt=\"Next Member\"></router-link>",
          data: function data() {
            return {
              icon: this.$site.root + '/vendor/cl/site/img/nexticon.png',
              user: user,
              link: link
            };
          }
        });
      } else {
        this.$set(this.$site.console.components, 'nav2right', null);
      }
    }
  },
  mounted: function mounted() {
    // Determine the path
    var path = this.$route.path; // Remove the member ID from the end

    var re = /(^.*)\/([0-9]+)$/;
    var match = path.match(re);

    if (match !== null) {
      this.link = match[1] + '/';
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$set(this.$site.console.components, 'nav2left', null);
    this.$set(this.$site.console.components, 'nav2right', null);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Submission_Submission_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Submission/Submission.vue */ "./vendor/cl/course/js/Submission/Submission.vue");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'assigntag'],
  data: function data() {
    return {
      assignment: null,
      submissions: []
    };
  },
  watch: {
    user: function user() {
      this.submissions = [];
      this.fetch(this.user);
    }
  },
  components: {
    submissionVue: _Submission_Submission_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.fetch(this.user);
  },
  methods: {
    fetch: function fetch(user) {
      var _this = this;

      var section = user.member.getSection(this.$store);
      this.assignment = user.member.getAssignment(this.$store, this.assigntag);

      if (this.assignment.submissions === undefined) {
        // This assignment has no submissions
        this.submissions = [];
        return;
      }

      Site.api.get('/api/course/submission/submissions/' + this.assigntag + '/' + user.member.id, {}).then(function (response) {
        if (!response.hasError()) {
          var submissions = response.getDataAll('submissions');
          _this.submissions = [];

          for (var i = 0; i < submissions.length; i++) {
            _this.submissions.push(submissions[i].attributes);

            _this.submissions[i].user = user;
          }
        } else {
          Site.toast(_this, response);
        }
      }).catch(function (error) {
        Site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['assignment'],
  data: function data() {
    return {
      links: []
    };
  },
  watch: {
    assignment: function assignment() {
      this.take();
    }
  },
  mounted: function mounted() {
    this.take();
  },
  methods: {
    take: function take() {
      if (this.assignment !== null) {
        this.links = []; // Collect up the submission links

        if (this.assignment.submissions !== undefined) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.assignment.submissions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var submission = _step.value;
              var bulk = {
                text: 'Bulk download of ' + submission.name,
                url: '/cl/course/submissions/' + this.assignment.tag + '/' + submission.tag,
                atLeast: _Members_Member__WEBPACK_IMPORTED_MODULE_1__["Member"].STAFF
              };
              this.links.push(bulk);

              if (submission.links !== undefined) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = submission.links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var link = _step2.value;
                    this.links.push(link);
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _SubmitText_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitText.vue */ "./vendor/cl/course/js/Submission/SubmitText.vue");
/* harmony import */ var _SubmitProgram_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitProgram.vue */ "./vendor/cl/course/js/Submission/SubmitProgram.vue");
/* harmony import */ var _SubmitImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitImage.vue */ "./vendor/cl/course/js/Submission/SubmitImage.vue");
/* harmony import */ var _SubmitUnknown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmitUnknown.vue */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue");
/* harmony import */ var _Submitted_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Submitted.vue */ "./vendor/cl/course/js/Submission/Submitted.vue");
/* harmony import */ var _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmittedItem.vue */ "./vendor/cl/course/js/Submission/SubmittedItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission'],
  data: function data() {
    return {
      staff: false,
      submitter: 'submit-text',
      submissions: []
    };
  },
  components: {
    submitText: _SubmitText_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    submitProgram: _SubmitProgram_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    submitImage: _SubmitImage_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    submitUnknown: _SubmitUnknown_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    submitted: _Submitted_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mounted: function mounted() {
    this.submissions = this.submission.submissions;
    var user = this.$store.state.user.user;
    this.staff = user.atLeast(_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].STAFF);

    switch (this.submission.type) {
      case 'program':
        this.submitter = 'submit-program';
        break;

      case 'text':
        this.submitter = 'submit-text';
        break;

      case 'image':
        this.submitter = 'submit-image';
        break;

      default:
        this.submitter = 'submit-unknown';
        break;
    }
  },
  methods: {
    newSubmissions: function newSubmissions(value) {
      this.submissions = value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_APIResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/APIResponse */ "./vendor/cl/site/js/APIResponse.js");
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission'],
  data: function data() {
    return {
      files: null,
      action: null,
      submitting: false
    };
  },
  mounted: function mounted() {
    var system = this.submission.teaming !== null ? 'team' : 'course';
    this.action = "".concat(this.$site.root, "/cl/api/").concat(system, "/submission/submit/").concat(this.submission.assignTag, "/").concat(this.submission.tag);
  },
  methods: {
    load: function load() {
      if (!this.submitting) {
        return;
      }

      this.submitting = false;
      var json = frames['upload_target_' + this.submission.tag].document.getElementsByTagName("body")[0].innerHTML;
      var response = new site_cl_js_APIResponse__WEBPACK_IMPORTED_MODULE_0__["APIResponse"](JSON.parse(json));

      if (!response.hasError()) {
        this.$refs['form'].reset();
        this.$emit('new_submissions', response.getData('submissions').attributes);
        Site.toast(this, "Submission successfully saved to the server");
      } else {
        Site.toast(this, response);
      }
    },
    submit: function submit() {
      this.submitting = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_APIResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/APIResponse */ "./vendor/cl/site/js/APIResponse.js");
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission'],
  data: function data() {
    return {
      files: null,
      action: null,
      submitting: false
    };
  },
  mounted: function mounted() {
    var system = this.submission.teaming !== null ? 'team' : 'course';
    this.action = "".concat(this.$site.root, "/cl/api/").concat(system, "/submission/submit/").concat(this.submission.assignTag, "/").concat(this.submission.tag);
  },
  methods: {
    load: function load() {
      if (!this.submitting) {
        return;
      }

      this.submitting = false;
      var json = frames['upload_target_' + this.submission.tag].document.getElementsByTagName("body")[0].innerHTML;
      var response;

      try {
        response = new site_cl_js_APIResponse__WEBPACK_IMPORTED_MODULE_0__["APIResponse"](JSON.parse(json));
      } catch (exception) {
        console.log(exception);
        console.log(json);
        Site.toast(this, "Error during submission");
        return;
      }

      if (!response.hasError()) {
        this.$refs['form'].reset();
        this.$emit('new_submissions', response.getData('submissions').attributes);
        Site.toast(this, "Submission successfully saved to the server");
      } else {
        Site.toast(this, response);
      }
    },
    submit: function submit() {
      this.submitting = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_UI_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/UI/Editor */ "./vendor/cl/site/js/UI/Editor.js");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission'],
  mounted: function mounted() {
    var element = this.$refs['editor'];
    this.editor = new site_cl_js_UI_Editor__WEBPACK_IMPORTED_MODULE_0__["Editor"](element, {
      height: this.submission.height,
      classes: ['yellow-pad']
    });
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var text = this.editor.textarea.value.trim();

      if (text === '') {
        Site.toast(this, 'You must enter some text to submit');
        return;
      }

      var params = {
        type: 'text/plain',
        text: text
      };
      var system = this.submission.teaming !== null ? 'team' : 'course';
      this.$site.api.post("/api/".concat(system, "/submission/submit/").concat(this.submission.assignTag, "/").concat(this.submission.tag), params).then(function (response) {
        if (!response.hasError()) {
          _this.editor.textarea.value = '';

          _this.$emit('new_submissions', response.getData('submissions').attributes);

          _this.$site.toast(_this, "Submission successfully saved to the server");
        } else {
          _this.$site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['options']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue */ "./vendor/cl/course/js/Submission/SubmittedItem.vue");
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * Component that displays the list of submissions.
 * @constructor SubmittedVue
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission', 'submissions'],
  data: function data() {
    return {
      previewTxt: null,
      previewImg: null,
      previewTime: null,
      result: null
    };
  },
  components: {
    submittedItem: _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var service = this.submission.teaming !== null ? 'team' : 'course';

    if (this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
      this.previewImg = "".concat(this.$site.root, "/cl/").concat(service, "/submission/view/").concat(this.submissions[0].id);
      this.previewTime = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(this.submissions[0].date);
    }

    if (this.submission.preview !== undefined) {
      this.previewTxt = this.submission.preview.text;
      this.previewTime = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(this.submission.preview.date);
    }
  },
  watch: {
    submissions: function submissions() {
      var service = this.submission.teaming !== null ? 'team' : 'course';

      if (this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
        this.previewImg = "".concat(this.$site.root, "/cl/").concat(service, "/submission/view/").concat(this.submissions[0].id);
      } else {
        this.previewImg = null;
      }
    }
  },
  methods: {
    previewer: function previewer(submission) {
      var _this = this;

      this.previewTxt = "\n";
      this.previewTime = '&nbsp;';
      var service = this.submission.teaming === null ? 'course' : 'team';
      this.$site.api.get("/api/".concat(service, "/submission/get/").concat(this.submission.assignTag, "/").concat(this.submission.tag, "/").concat(submission.id), {}).then(function (response) {
        if (!response.hasError()) {
          var _submission = response.getData('submission').attributes;
          _this.previewTxt = _submission.text;
          _this.previewTime = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(_submission.date);
        } else {
          _this.$site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    },
    preview_img: function preview_img(submission) {
      var service = this.submission.teaming === null ? 'course' : 'team';

      if (submission.type.substr(0, 6) === 'image/') {
        this.previewImg = "".concat(this.$site.root, "/cl/").concat(service, "/submission/view/").concat(submission.id);
        this.previewTime = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(submission.date);
      } else {
        this.previewImg = null;
      }
    },
    analysisResult: function analysisResult(result) {
      this.result = result;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: TEXT_TYPES, IMG_TYPES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TYPES", function() { return TEXT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_TYPES", function() { return IMG_TYPES; });
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
/* harmony import */ var site_cl_js_UI_Menu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/UI/Menu.vue */ "./vendor/cl/site/js/UI/Menu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var TEXT_TYPES = ['text/plain', 'text/html'];
var IMG_TYPES = ['image/png', 'image/jpeg', 'image/gif'];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['assigntag', 'tag', 'submission', 'analysis', 'teaming'],
  data: function data() {
    return {
      root: Site.root,
      toDownload: null
    };
  },
  components: {
    menuVue: site_cl_js_UI_Menu_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var service = this.teaming !== null ? 'team' : 'course';
    this.toDownload = "".concat(this.$site.root, "/cl/").concat(service, "/submission/download/").concat(this.submission.id);
  },
  methods: {
    isText: function isText() {
      return TEXT_TYPES.indexOf(this.submission.type) >= 0;
    },
    isImage: function isImage() {
      return IMG_TYPES.indexOf(this.submission.type) >= 0;
    },
    display: function display() {
      var disp = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_0__["TimeFormatter"].absoluteUNIX(this.submission.date, "long");

      if (this.submission.name !== null) {
        disp += ': ' + this.submission.name;
      }

      if (this.submission.by !== undefined) {
        disp += ' by ' + this.submission.by;
      }

      return disp;
    },
    selectText: function selectText() {
      this.$emit('preview', this.submission);
    },
    select: function select() {
      this.$emit('preview_img', this.submission);
    },
    showAnalysis: function showAnalysis(analysis) {
      var _this = this;

      var service = this.teaming !== null ? 'team' : 'course';
      this.$site.api.get("/api/".concat(service, "/submission/analysis/").concat(this.assigntag, "/").concat(this.tag, "/").concat(analysis.tag, "/").concat(this.submission.id), {}).then(function (response) {
        if (!response.hasError()) {
          var analysisResult = response.getData('submission-analysis').attributes;

          _this.$emit('result', analysisResult);
        } else {
          _this.$site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! course-cl/js/Console/Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      link: Site.root + '/cl/console/grades/',
      section: null,
      grades: null
    };
  },
  components: {
    'membersfetcher': course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    var user = this.$store.state.user.user;
    var member = user.member;
    this.section = this.$store.getters['course/section'](member.semester, member.section);
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.setTitle(': Grades');
    Site.api.get('/api/grade/all', {}).then(function (response) {
      if (!response.hasError()) {
        _this.grades = response.getData('grades-all').attributes;
      } else {
        Site.toast(_this, response);
      }
    }).catch(function (error) {
      Site.toast(_this, error);
    });
  },
  methods: {
    assignmentGrade: function assignmentGrade(user, category, assignment) {
      if (this.grades === null) {
        return '?';
      }

      var userGrades = this.grades[user.member.id];
      var assignmentGrades = userGrades.categories[category.tag].assignments;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = assignmentGrades[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var assignmentGrade = _step.value;

          if (assignmentGrade.tag === assignment.tag) {
            return assignmentGrade.grade;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! course-cl/js/Console/Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      link: Site.root + '/cl/console/grades/',
      grades: null,
      parts: []
    };
  },
  components: {
    'membersfetcher': course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.$parent.setTitle(': Grades');
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var course_cl_js_Console_Members_PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! course-cl/js/Console/Members/PrevNextMember.vue */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue");
/* harmony import */ var course_cl_js_Console_Members_MemberFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! course-cl/js/Console/Members/MemberFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  extends: console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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
    memberfetcher: course_cl_js_Console_Members_MemberFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    prevNext: course_cl_js_Console_Members_PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.setTitle(': Grade'); //            this.addNav2('Submit', 2, () => {
    //                this.submit();
    //            });
    //
    //            this.addNav2('Submit and Exit', 3, () => {
    //                this.submit(true);
    //            });
    //
    //            this.addNav2Link('Exit', 4, '/cl/console/grading/' + this.assigntag);
  },
  methods: {
    fetched: function fetched(user) {
      var _this = this;

      this.section = user.member.getSection(this.$store);
      this.setTitle(': ' + user.name + ' Grades');
      Site.api.get("/api/grade/grade/".concat(this.memberid), {}).then(function (response) {
        if (!response.hasError()) {
          _this.grade = response.getData('grade').attributes;

          if (_this.grade.available > 0) {
            _this.per = '(' + (_this.grade.grade / _this.grade.available * 100).toFixed(1) + '%)';
          }
        } else {
          Site.toast(_this, response);
        }
      }).catch(function (error) {
        Site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      section: null,
      gradingLink: this.$site.root + '/cl/console/grading/',
      ta: course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].TA,
      downloadPermission: false // Permission to download grades?

    };
  },
  computed: {},
  created: function created() {
    this.$parent.setTitle(': Assignment Grading');
    var user = this.$store.state.user.user;
    var member = user.member;
    this.downloadPermission = user.atLeast(this.$site.permissions.atLeast('grades-download', course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].TA));
    this.section = this.$store.getters['course/section'](member.semester, member.section);
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! course-cl/js/Console/Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
/* harmony import */ var course_cl_js_Console_SubmissionsLinks_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! course-cl/js/Console/SubmissionsLinks.vue */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * The assignment grading page for the course.
 * /cl/console/grading/:assigntag
 * @constructor GradingAssignmentVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  extends: console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['assigntag'],
  data: function data() {
    return {
      link: Site.root + '/cl/console/grading/' + this.assigntag + '/',
      grades: null,
      parts: [],
      fetched: false,
      assignment: null
    };
  },
  components: {
    'membersfetcher': course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'submissionsLinks': course_cl_js_Console_SubmissionsLinks_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Grading');
    this.site.api.get('/api/grade/grades/' + this.assigntag, {}).then(function (response) {
      if (!response.hasError()) {
        _this.grades = response.getData('grades').attributes;
        _this.parts = response.getData('grade-parts').attributes;
      } else {
        Site.toast(_this, response);
      }
    }).catch(function (error) {
      Site.toast(_this, error);
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var user = _step.value;

          if (this.partGrade(user, part) !== '') {
            cnt++;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return cnt;
    },
    gradesCount: function gradesCount(users) {
      var cnt = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = users[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var user = _step2.value;

          if (this.grade(user) !== '') {
            cnt++;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return cnt;
    },
    partAverage: function partAverage(users, part) {
      var cnt = 0;
      var total = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = users[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var user = _step3.value;
          var grade = this.partGrade(user, part);

          if (grade !== '') {
            cnt++;
            total += grade;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (cnt === 0) {
        return '';
      }

      return Math.round(total / cnt * 10) / 10;
    },
    gradeAverage: function gradeAverage(users) {
      var cnt = 0;
      var total = 0;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = users[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var user = _step4.value;
          var grade = this.grade(user);

          if (grade !== '') {
            cnt++;
            total += grade;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (cnt === 0) {
        return '';
      }

      return Math.round(total / cnt * 10) / 10;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var course_cl_js_Console_Members_PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! course-cl/js/Console/Members/PrevNextMember.vue */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue");
/* harmony import */ var course_cl_js_Console_Members_MemberFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! course-cl/js/Console/Members/MemberFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue");
/* harmony import */ var _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Util/GradeHistoryComponent.vue */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue");
/* harmony import */ var course_cl_js_Console_SubmissionsAssignmentMemberComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! course-cl/js/Console/SubmissionsAssignmentMemberComponent.vue */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue");
/* harmony import */ var _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Handbook/Handbook.vue */ "./vendor/cl/grades/js/Handbook/Handbook.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * /cl/console/grading/:assignment/:memberid
 * Assignment grading page for a course member
 */






/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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
    memberfetcher: course_cl_js_Console_Members_MemberFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    prevNext: course_cl_js_Console_Members_PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    gradeHistory: _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    submissions: course_cl_js_Console_SubmissionsAssignmentMemberComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    handbook: _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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

      Site.api.get("/api/grade/grader/".concat(this.assigntag, "/").concat(this.memberid), {}).then(function (response) {
        if (!response.hasError()) {
          _this2.take(response);
        } else {
          Site.toast(_this2, response);
        }
      }).catch(function (error) {
        Site.toast(_this2, error);
      });
    },
    submit: function submit(exit) {
      var _this3 = this;

      var form = this.$refs['form'];
      var formData = new FormData(form);

      if (this.handbookResult !== null) {
        formData.append('_handbook', JSON.stringify(this.handbookResult));
      }

      Site.api.post("/api/grade/grader/".concat(this.assigntag, "/").concat(this.memberid), formData).then(function (response) {
        if (!response.hasError()) {
          _this3.take(response);

          if (exit) {
            _this3.$router.push(Site.root + '/cl/console/grading/' + _this3.assigntag);
          }
        } else {
          Site.toast(_this3, response);
        }
      }).catch(function (error) {
        Site.toast(_this3, error);
      });
    },
    take: function take(response) {
      var _this4 = this;

      var grader = response.getData('grader');
      this.due = grader.attributes.due !== undefined ? grader.attributes.due : null;
      this.graders = grader.attributes.graders;
      this.grade = grader.attributes.grade;
      this.$forceUpdate();
      this.$nextTick(function () {
        _this4.installAvailableClickers();

        _this4.installRubricClickers();
      });
    },
    /// Install clicker for available that will autofill the points
    installAvailableClickers: function installAvailableClickers() {
      var clickables = document.querySelectorAll('div.cl-grader div.grader a.available-clicker');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var element = _step.value;
          element.addEventListener('click', function () {
            document.getElementById(element.dataset.id).value = element.innerText;
          });
        };

        for (var _iterator = clickables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    /// Install clickers for Rubric items that will autofill them.
    installRubricClickers: function installRubricClickers() {
      var _this5 = this;

      var selectors = ['div.cl-clickable li.item', 'div.cl-clickable ul.items li', 'div.cl-clickable p.item'];

      for (var _i = 0; _i < selectors.length; _i++) {
        var selector = selectors[_i];
        var clickables = document.querySelectorAll(selector);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          var _loop2 = function _loop2() {
            var element = _step2.value;

            if (element.dataset.clickable === undefined) {
              element.addEventListener('click', function () {
                _this5.addContent(element);
              });
              element.setAttribute('data-clickable', 'yes');
            }
          };

          for (var _iterator2 = clickables[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            _loop2();
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
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
      } // Find a textarea inside this


      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = element.querySelectorAll('textarea')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var textarea = _step3.value;
          textarea.value = textarea.value + content + "\n";
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    },
    time: function time(t) {
      console.log(this.$site);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var site_cl_js_Util_Sanitize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/Util/Sanitize */ "./vendor/cl/site/js/Util/Sanitize.js");
/* harmony import */ var site_cl_js_UI_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! site-cl/js/UI/Editor */ "./vendor/cl/site/js/UI/Editor.js");
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['assigntag', 'rubric'],
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    var element = this.$refs['editor'];
    this.editor = new site_cl_js_UI_Editor__WEBPACK_IMPORTED_MODULE_2__["Editor"](element, {
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
        _this2.rubric.show = site_cl_js_Util_Sanitize__WEBPACK_IMPORTED_MODULE_1__["Sanitize"].sanitize(_this2.editor.textarea.value);
      }, 100);
    },
    submit: function submit() {
      var _this3 = this;

      Site.api.post('/api/grade/rubrics/' + this.assigntag + '/' + this.rubric.tag, {
        rubric: this.rubric.show
      }).then(function (response) {
        if (!response.hasError()) {
          Site.toast(_this3, 'Rubric successfully saved');
        } else {
          Site.toast(_this3, response);
        }
      }).catch(function (error) {
        Site.toast(_this3, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var _RubricEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RubricEditor.vue */ "./vendor/cl/grades/js/Console/RubricEditor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: ['assigntag'],
  data: function data() {
    return {
      ta: course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].TA,
      rubrics: []
    };
  },
  components: {
    rubricEditor: _RubricEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    Site.api.get('/api/grade/rubrics/' + this.assignment.tag, {}).then(function (response) {
      if (!response.hasError()) {
        _this.rubrics = response.getData('rubrics').attributes;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.rubrics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var rubric = _step.value;

            _this.$set(rubric, 'show', rubric.rubric);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        Site.toast(_this, response);
      }
    }).catch(function (error) {
      Site.toast(_this, error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      default: {}
    },
    readonly: {
      default: false
    }
  },
  data: function data() {
    return {
      metadata: {},
      total: 0
    };
  },
  created: function created() {
    this.metadata = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.item.handbook.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var category = _step.value;
        var _catPoints = this.item.metadata[category.tag];

        if (_catPoints === undefined) {
          _catPoints = 0;
        }

        this.$set(this.metadata, category.tag, _catPoints);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
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
  methods: {
    compute: function compute() {
      var total = -this.metadata['_manual'];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.item.handbook.categories[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var category = _step2.value;
          total -= this.metadata[category.tag];
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/GradeHistoryComponent.vue */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue");
/* harmony import */ var users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! users-cl/js/Vue/UserVueBase.vue */ "./vendor/cl/users/js/Vue/UserVueBase.vue");
/* harmony import */ var _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Handbook/Handbook.vue */ "./vendor/cl/grades/js/Handbook/Handbook.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: ['json'],
  data: function data() {
    return {};
  },
  components: {
    gradeHistory: _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    handbook: _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.$parent.setTitle(':  ' + this.json.assignment.shortName + ' Grade for ' + this.user.displayName());
    var menu = [{
      name: 'Grades',
      click: function click() {
        window.location = Site.root = '/cl/grades';
      }
    }];
    this.$parent.setMenu(menu);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! users-cl/js/Vue/UserVueBase.vue */ "./vendor/cl/users/js/Vue/UserVueBase.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
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
      var str = this.$site.TimeFormatter.absoluteUNIX(history.time, 'short') + ' by ' + grader.displayName();
      return str;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//

/**
 * General-purpose menu system Vue component.
 *
 * Supports simple menus where a click opens and closes a pull-down menu.
 * @example
 * // Include this component
 * import MenuVue from 'site-cl/js/UI/Menu.vue';
 * @example
 * // Add as a component to the Vue:
 * components: {
 *   menuVue: MenuVue
 * },
 * @example
 * // Use in the template
 * <menu-vue v-on:open="select"><a class="float-right"><img :src="root + '/vendor/cl/site/img/menubars.png'" alt="Menu"></a>
 *   <ul>
 *     <li><a>First option</a></li>
 *     <li><a>Second option</a></li>
 *   </ul>
 * </menu-vue>
 * @constructor MenuVue
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['addClass'],
  data: function data() {
    return {
      useClass: 'cl-menu'
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.addClass !== undefined) {
      this.useClass += ' ' + this.addClass;
    } //
    // Collect up the elements
    //


    var links = [];
    var uls = [];
    var open = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.$refs['menu'].children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;

        if (child.tagName === 'A') {
          links.push(child);
        } else if (child.tagName === 'UL') {
          uls.push(child);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var closeListener = function closeListener(event) {
      // Did we click on something that is a child of
      // this menu div?
      var element = event.target;

      do {
        // We are okay with clicks on children of
        // the pop-up menu
        if (uls.indexOf(element) >= 0) {
          break;
        }

        if (element === _this.$refs['menu']) {
          return;
        }

        element = element.parentElement;
      } while (element !== null);

      closeAll();
    }; //
    // Close all menus
    //


    var closeAll = function closeAll() {
      // This timeout ensures the click on
      // the menu is processed before the menu
      // is hidden.
      setTimeout(function () {
        for (var _i = 0; _i < uls.length; _i++) {
          var ul = uls[_i];
          ul.style.display = 'none';
        }
      }, 200);
      open = false;
      document.removeEventListener('click', closeListener);
      document.removeEventListener('mousedown', closeListener);
    }; //
    // Click listeners on the links
    //


    for (var _i2 = 0; _i2 < links.length; _i2++) {
      var link = links[_i2];
      link.addEventListener('click', function (event) {
        event.preventDefault(); // We have clicked on a menu link

        if (!open) {
          // Open the menu!
          open = true;

          for (var _i3 = 0; _i3 < uls.length; _i3++) {
            var ul = uls[_i3];
            ul.style.display = 'block';
          }

          document.addEventListener('click', closeListener);
          document.addEventListener('mousedown', closeListener);

          _this.$emit('open');
        } else {
          // Close the menu
          closeAll();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['menu'],
  data: function data() {
    return {
      homeLink: Site.root + '/'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
  * Base component for pages.
  * @constructor PageVueBase
  */
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      /**
        * Site object
        * @memberof PageVueBase
        * @instance
        * @member {Site} site
        */
      site: Site,

      /**
        * Site root path (Site.root)
        * @memberof PageVueBase
        * @instance
        * @member {string} root
        */
      root: Site.root
    };
  },
  methods: {
    /**
      * Set the page title
      * @memberof PageVueBase
      * @instance
     * @param {string} title
     */
    setTitle: function setTitle(title) {
      this.$parent.setTitle(title);
    },
    setMenu: function setMenu(menu) {
      this.$parent.setMenu(menu);
    },
    getMenu: function getMenu() {
      return this.$parent.getMenu();
    },
    clearMenu: function clearMenu() {
      this.setMenu([]);
    },

    /**
     * Add an option to the nav2 menu.
     * @param title Title of the option to add.
     * @param closure Function to call when selected.
     */
    addMenu: function addMenu(title, closure) {
      var menu = this.getMenu();
      menu.push({
        name: title,
        click: closure
      });
      this.setMenu(menu);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: Fetcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return Fetcher; });
//
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
 * @file
 * Fetcher component displays "Fetching" and a "more" button.
 */

/**
 * Fetcher function used to update this object.
 * @constructor
 */
var Fetcher = function Fetcher() {
  this.more = false; // Indicates there is more to fetch

  this.fetching = false; // Set true while we are fetching

  this.fetched = false; // Set true when we have fetched something...

  this.start = function (single) {
    this.fetching = true;

    if (single !== true) {
      this.more = false;
    }
  };

  this.done = function (single) {
    this.fetching = false;

    if (single !== true) {
      this.fetched = true;
    }
  };

  this.reset = function () {
    this.more = false;
    this.fetching = false;
    this.fetched = false;
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fetcher: {
      type: Object,
      'default': null
    },
    fetching: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'fetcher.fetching': function fetcherFetching(to, from) {
      this.setFetching();
    },
    fetching: function fetching(to, from) {
      this.setFetching();
    }
  },
  data: function data() {
    return {
      showFetching: false,
      delayedFetching: false,
      timer: null
    };
  },
  mounted: function mounted() {
    this.setFetching();
  },
  methods: {
    fetchMore: function fetchMore() {
      this.$parent.fetchMore();
    },
    setFetching: function setFetching() {
      var _this = this;

      // Are we currently fetching?
      var showFetching = this.fetcher !== null && this.fetcher.fetching || this.fetching;

      if (showFetching && !this.showFetching) {
        // Fetching is becoming active
        this.timer = setTimeout(function () {
          _this.delayedFetching = true;
        }, 1000);
      } else if (!showFetching && this.showFetching) {
        clearTimeout(this.timer);
        this.time = null;
        this.delayedFetching = false;
      }

      this.showFetching = showFetching;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_Vue_PageVueBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVueBase.vue */ "./vendor/cl/site/js/Vue/PageVueBase.vue");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': site_cl_js_Vue_PageVueBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  computed: {
    user: function user() {
      return this.$store.state.user.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/grades/_grades.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/grades/_grades.scss ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-grader div.grader div.comment div.comment,\ndiv.cl-grader table.cl-handbook div.comment,\ndiv.cl-grader div.cl-rubric div.cl-show {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc;\n}\n\ndiv.cl-grades td.role {\n  white-space: nowrap;\n}\n\ndiv.cl-grader a.link-button {\n  display: inline-block;\n  font-size: 0.85em;\n  padding: 0 2px;\n}\n\ndiv.cl-grader p.cl-title {\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: bold;\n  margin: 1em 0 0 0;\n}\n\ndiv.cl-grader p.cl-dispute {\n  text-align: center;\n  margin: 0;\n}\n\ndiv.cl-grader p.cl-role {\n  text-align: center;\n}\n\ndiv.cl-grader p.cl-role-staff {\n  color: #c41425;\n}\n\ndiv.cl-grader p.cl-due {\n  text-align: center;\n  font-style: italic;\n  font-weight: normal;\n  color: #c41425;\n}\n\ndiv.cl-grader button.cl-grader-button {\n  font-style: italic;\n  font-size: 0.9em;\n  color: black;\n}\n\ndiv.cl-grader tr.cl-category td {\n  text-align: right;\n}\n\ndiv.cl-grader tr.cl-category td:first-child {\n  text-align: left;\n}\n\ndiv.cl-grader tr.cl-assignment td {\n  text-align: right;\n}\n\ndiv.cl-grader tr.cl-assignment td:first-child {\n  text-align: left;\n  padding-left: 3em;\n}\n\ndiv.cl-grader div.grader {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n\ndiv.cl-grader div.grader label,\ndiv.cl-grader div.grader div.label {\n  font-style: italic;\n}\n\ndiv.cl-grader div.grader div.comment {\n  flex: 1 1 auto;\n  padding: 0 20px 0 0;\n}\n\ndiv.cl-grader div.grader div.comment textarea {\n  display: block;\n  width: 100%;\n}\n\ndiv.cl-grader div.grader div.comment div.comment {\n  white-space: pre;\n  background: #f0f0f0;\n  font-style: normal;\n  border: 1px solid #a9a9a9;\n  height: 120px;\n  overflow: auto;\n  padding: 2px;\n}\n\ndiv.cl-grader div.grader div.points {\n  flex: 0 1 auto;\n  width: 5em;\n  text-align: center;\n  padding: 45px 5px 0 0;\n}\n\ndiv.cl-grader div.grader div.points input,\ndiv.cl-grader div.grader div.points div.value {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n}\n\ndiv.cl-grader div.grader div.points span.not {\n  font-size: 0.8em;\n  font-style: italic;\n}\n\ndiv.cl-grader div.grader div.value {\n  padding: 2px 1px;\n}\n\ndiv.cl-grader div.grader a.available-clicker {\n  text-decoration: none;\n  color: black;\n}\n\ndiv.cl-grader table.cl-handbook {\n  width: 90%;\n}\n\ndiv.cl-grader table.cl-handbook td:last-child,\ndiv.cl-grader table.cl-handbook th:last-child {\n  width: 1px;\n  white-space: nowrap;\n}\n\ndiv.cl-grader table.cl-handbook input[type=radio] {\n  display: inline-block;\n  padding: 0 2px;\n  margin: 0 2px;\n}\n\ndiv.cl-grader table.cl-handbook input[type=text] {\n  width: 100%;\n}\n\ndiv.cl-grader table.cl-handbook textarea {\n  width: 100%;\n}\n\ndiv.cl-grader table.cl-handbook td.cl-deduct {\n  text-align: center;\n  font-size: 1.5em;\n}\n\ndiv.cl-grader table.cl-handbook div.comment {\n  white-space: pre;\n  background: #f0f0f0;\n  font-style: normal;\n  border: 1px solid #a9a9a9;\n  height: 80px;\n  overflow: auto;\n  padding: 2px;\n  margin: 0.3em 0;\n}\n\ndiv.cl-grader p.cl-rubric-expand {\n  margin-bottom: 0.1em;\n}\n\ndiv.cl-grader div.cl-rubricblock {\n  background: #e8f7f3;\n  padding: 5px;\n  border: 1px #808080 solid;\n  word-wrap: normal;\n  font-size: 0.9em;\n}\n\ndiv.cl-grader div.cl-rubricblock p:first-child,\ndiv.cl-grader div.cl-rubricblock ul:first-child {\n  margin-top: 0;\n}\n\ndiv.cl-grader div.cl-rubricblock p:last-child,\ndiv.cl-grader div.cl-rubricblock ul:last-child {\n  margin-bottom: 0;\n}\n\ndiv.cl-grader div.cl-rubricblock li.item,\ndiv.cl-grader div.cl-rubricblock p.item,\ndiv.cl-grader div.cl-rubricblock ul.items li {\n  color: #900000;\n  cursor: pointer;\n}\n\ndiv.cl-grader div.cl-rubricblock li.item:hover,\ndiv.cl-grader div.cl-rubricblock p.item:hover,\ndiv.cl-grader div.cl-rubricblock ul.items li:hover {\n  color: #c00000;\n}\n\ndiv.cl-grader textarea {\n  background: #f0f0f0;\n  font-style: normal;\n}\n\ndiv.cl-grader textarea.yellow-pad {\n  background: url(" + escape(__webpack_require__(/*! ./../site/img/yellowpad.png */ "./vendor/cl/site/img/yellowpad.png")) + ");\n}\n\ndiv.cl-grader div.grade {\n  border-top: 1px solid black;\n}\n\ndiv.cl-grader div.grade p:first-child {\n  text-align: center;\n  font-size: 1.2em;\n}\n\ndiv.cl-grader div.cl-rubric div.cl-show {\n  margin: 1em 0;\n  word-wrap: normal;\n  min-height: 8em;\n}\n\ndiv.cl-grader div.cl-rubric textarea {\n  font-size: 0.9em;\n  margin: 1em 0;\n  background: #f0f0f0;\n  font-style: normal;\n  width: 100%;\n  min-height: 8em;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-editor {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 5em;\n  height: 10em;\n  padding: 0;\n  overflow: hidden;\n  margin: 1em 0;\n}\n\ndiv.cl-editor textarea {\n  position: absolute;\n  box-sizing: border-box;\n  resize: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td[data-v-5cf9cddd] {\n  min-width: 30px;\n}\ndiv.category[data-v-5cf9cddd] {\n  color: #fcaf17;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-grade-history[data-v-177faa53] {\n  max-width: 600px;\n  margin: 1em 0;\n}\np[data-v-177faa53] {\n  font-style: italic;\n  font-size: 0.85em;\n}\np.expander[data-v-177faa53] {\n  margin-bottom: 0;\n}\ndiv.grades[data-v-177faa53] {\n  padding: 2px 0 2px 18px;\n  background-color: #ddffdd;\n}\ndiv.grades p[data-v-177faa53] {\n  margin: 0;\n  padding: 2px 0 0 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.fetching[data-v-43b26bcb] {\n  height: 28px;\n  margin: 1em 0;\n}\ndiv.fetching p[data-v-43b26bcb] {\n  text-align: center;\n  font-style: italic;\n  color: #c41425;\n  padding-top: 2px;\n}\n.more[data-v-43b26bcb] {\n  text-align: center;\n}\n.more button[data-v-43b26bcb] {\n  font-size: 0.8em;\n  height: 28px;\n  margin: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._t("default", null, { user: _vm.user })], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("label", { ref: "students-only", staticStyle: { display: "none" } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.students,
              expression: "students"
            }
          ],
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.students)
              ? _vm._i(_vm.students, null) > -1
              : _vm.students
          },
          on: {
            change: [
              function($event) {
                var $$a = _vm.students,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.students = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.students = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.students = $$c
                }
              },
              _vm.studentsOnlyChanged
            ]
          }
        }),
        _vm._v(" Students Only")
      ]),
      _vm._v(" "),
      _c(
        "fetcher",
        { attrs: { fetcher: _vm.fetcher, fetching: _vm.fetching } },
        [
          _vm._t("default", null, { users: _vm.users, students: _vm.students }),
          _vm._v(" "),
          _vm.users.length == 0
            ? _c("p", { staticClass: "centerbox comp center" }, [
                _vm._v(
                  "\n        There are currently no members enrolled in this section."
                )
              ])
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.submissions, function(submission) {
      return _c(
        "div",
        [
          _c("h2", [_vm._v(_vm._s(submission.name))]),
          _vm._v(" "),
          _c("submission-vue", { attrs: { submission: submission } })
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.links, function(link) {
      return _vm.user.atLeast(link.atLeast)
        ? _c("p", { staticClass: "center" }, [
            _c("a", { attrs: { href: _vm.root + link.url } }, [
              _vm._v(_vm._s(link.text))
            ])
          ])
        : _vm._e()
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cl-submission" },
    [
      _vm.submission.submit
        ? _c(
            "div",
            {},
            [
              !_vm.submission.open
                ? _c("div", [
                    _c("p", { staticClass: "centerbox comp center" }, [
                      _vm._v("This assignment is not open for submissions.")
                    ]),
                    _vm._v(" "),
                    _vm.staff
                      ? _c(
                          "div",
                          { staticClass: "centerbox primary" },
                          [
                            _vm._m(0),
                            _vm._v(" "),
                            _c(_vm.submitter, {
                              tag: "component",
                              attrs: { submission: _vm.submission },
                              on: { new_submissions: _vm.newSubmissions }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.submission.open
                ? _c(_vm.submitter, {
                    tag: "component",
                    attrs: { submission: _vm.submission },
                    on: { new_submissions: _vm.newSubmissions }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("submitted", {
        attrs: { submission: _vm.submission, submissions: _vm.submissions }
      }),
      _vm._v(" "),
      _vm.submission.additional !== null
        ? _c("div", {
            domProps: { innerHTML: _vm._s(_vm.submission.additional) }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "center" }, [
      _c("em", [_vm._v("...Staff only for submission testing...")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        ref: "form",
        staticClass: "file",
        attrs: {
          enctype: "multipart/form-data",
          method: "post",
          action: _vm.action,
          target: "upload_target_" + _vm.submission.tag
        },
        on: { submit: _vm.submit }
      },
      [
        _c("label", [
          _vm._v("Submit: "),
          _c("input", {
            attrs: { type: "file", name: "file" },
            on: {
              change: function($event) {
                _vm.files = $event.target.files
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "upload",
          attrs: { type: "submit", name: "submit", value: "Upload File" }
        }),
        _vm._v(" "),
        _c("iframe", {
          ref: "iframe",
          staticStyle: {
            width: "0",
            height: "0",
            border: "0px solid #fff",
            display: "none"
          },
          attrs: { name: "upload_target_" + _vm.submission.tag, src: "" },
          on: { load: _vm.load }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        ref: "form",
        staticClass: "file",
        attrs: {
          enctype: "multipart/form-data",
          method: "post",
          action: _vm.action,
          target: "upload_target_" + _vm.submission.tag
        },
        on: { submit: _vm.submit }
      },
      [
        _c("label", [
          _vm._v("Submit: "),
          _c("input", {
            attrs: { type: "file", name: "file" },
            on: {
              change: function($event) {
                _vm.files = $event.target.files
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "upload",
          attrs: { type: "submit", name: "submit", value: "Upload File" }
        }),
        _vm._v(" "),
        _c("iframe", {
          ref: "iframe",
          staticStyle: {
            width: "0",
            height: "0",
            border: "0px solid #fff",
            display: "none"
          },
          attrs: { name: "upload_target_" + _vm.submission.tag, src: "" },
          on: { load: _vm.load }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [_c("div", { ref: "editor" }), _vm._v(" "), _vm._m(0)]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("input", { attrs: { type: "submit", value: "Submit" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", { staticClass: "shoutout" }, [
      _vm._v("Submission type "),
      _c("em", [_vm._v(_vm._s(_vm.options.type))]),
      _vm._v(" is not supported")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      [
        _vm.submissions.length === 0
          ? [
              _c("p", { staticClass: "large center" }, [
                _vm._v("No submissions, yet.")
              ])
            ]
          : [
              _c(
                "table",
                { staticClass: "small" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.submissions, function(submitted) {
                    return _c("tr", [
                      _c(
                        "td",
                        [
                          _c("submitted-item", {
                            attrs: {
                              assigntag: _vm.submission.assignTag,
                              tag: _vm.submission.tag,
                              submission: submitted,
                              analysis: _vm.submission.analysis,
                              teaming: _vm.submission.teaming
                            },
                            on: {
                              result: _vm.analysisResult,
                              preview_img: _vm.preview_img,
                              preview: _vm.previewer
                            }
                          })
                        ],
                        1
                      )
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              _vm.submission.type === "text"
                ? _c("p", { staticClass: "center" }, [
                    _vm._v(
                      "Click on any submission date to display the submission"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.submission.type === "program"
                ? _c("p", { staticClass: "center" }, [
                    _vm._v("Click on any submission for submission options")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.submission.type === "image"
                ? _c("p", { staticClass: "center" }, [
                    _vm._v(
                      "Click on any submission to view and for submission options"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.previewTxt !== null
                ? _c("div", [
                    _vm.previewTxt !== null
                      ? _c("pre", { staticClass: "cl-preview yellow-pad" }, [
                          _vm._v(_vm._s(_vm.previewTxt))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("p", {
                      staticClass: "cl-preview-time",
                      domProps: { innerHTML: _vm._s(_vm.previewTime) }
                    })
                  ])
                : _vm._e()
            ]
      ],
      2
    ),
    _vm._v(" "),
    _vm.result !== null
      ? _c("pre", { staticClass: "cl-analysis" }, [_vm._v(_vm._s(_vm.result))])
      : _vm._e(),
    _vm._v(" "),
    _vm.previewImg !== null
      ? _c("div", [
          _vm.previewImg !== null
            ? _c("figure", { staticClass: "cl-preview" }, [
                _c("img", { attrs: { src: _vm.previewImg } })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p", { staticClass: "cl-preview-time" }, [
            _vm._v(_vm._s(_vm.previewTime))
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("th", [_vm._v("Submissions")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.isText()
        ? [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.selectText()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.display()))]
            )
          ]
        : _vm.isImage()
          ? [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.select($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.display()))]
              ),
              _c(
                "menu-vue",
                { staticClass: "float-right", on: { open: _vm.select } },
                [
                  _c("a", [
                    _c("img", {
                      attrs: {
                        src: _vm.root + "/vendor/cl/site/img/menubars.png",
                        alt: "Menu"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    [
                      _c("li", [
                        _c("a", { attrs: { href: _vm.toDownload } }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.root + "/vendor/cl/site/img/download.png",
                              alt: "Download"
                            }
                          }),
                          _vm._v(" Download")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.analysis, function(item) {
                        return _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.showAnalysis(item)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: { src: item.icon, alt: item.menu }
                              }),
                              _vm._v(" " + _vm._s(item.menu))
                            ]
                          )
                        ])
                      })
                    ],
                    2
                  )
                ]
              )
            ]
          : [
              _c("menu-vue", { on: { open: _vm.select } }, [
                _c("a", [_vm._v(_vm._s(_vm.display()))]),
                _c("a", { staticClass: "float-right" }, [
                  _c("img", {
                    attrs: {
                      src: _vm.root + "/vendor/cl/site/img/menubars.png",
                      alt: "Menu"
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  [
                    _c("li", [
                      _c("a", { attrs: { href: _vm.toDownload } }, [
                        _c("img", {
                          attrs: {
                            src: _vm.root + "/vendor/cl/site/img/download.png",
                            alt: "Download"
                          }
                        }),
                        _vm._v(" Download")
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.analysis, function(item) {
                      return _c(
                        "li",
                        {
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              _vm.showAnalysis(item)
                            }
                          }
                        },
                        [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  $event.stopPropagation()
                                  _vm.showAnalysis(item)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: { src: item.icon, alt: item.menu }
                              }),
                              _vm._v(" " + _vm._s(item.menu))
                            ]
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("membersfetcher", {
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
                                  { attrs: { to: _vm.link + user.member.id } },
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
                                  { attrs: { to: _vm.link + user.member.id } },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("membersfetcher", {
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
                                  { attrs: { to: _vm.link + user.member.id } },
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
                                  { attrs: { to: _vm.link + user.member.id } },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("memberfetcher", {
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
                                        _vm._v(_vm._s(assignment.points) + "%")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
        _c("membersfetcher", {
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
                                        attrs: { to: _vm.link + user.member.id }
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
                                        attrs: { to: _vm.link + user.member.id }
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
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("memberfetcher", {
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
                                  "\n            " +
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
                                        _vm.email(fetcher.user)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                email " +
                                        _vm._s(
                                          fetcher.user.roleName().toLowerCase()
                                        )
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
                                  [_vm._v("student grades")]
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
                                { staticClass: "cl-grader-item" },
                                [
                                  _c("h2", [_vm._v(_vm._s(item.name))]),
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
                                  item.handbook === undefined
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(item.html)
                                        }
                                      })
                                    : _c("handbook", {
                                        attrs: { item: item },
                                        on: {
                                          "handbook-data": _vm.handbookData
                                        }
                                      }),
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
                                            "Grades are not available until all parts of the assignment have been graded."
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
            _vm.submit()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
                              _vm.$set(_vm.metadata, category.tag, deduct - 1)
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
                            _vm.$set(_vm.metadata, "_manual", deduct - 1)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
          return _c(
            "div",
            [
              _c("h2", [_vm._v(_vm._s(item.name))]),
              _vm._v(" "),
              item.handbook === undefined
                ? _c("div", { domProps: { innerHTML: _vm._s(item.html) } })
                : _c("handbook", { attrs: { item: item, readonly: "true" } }),
              _vm._v(" "),
              _c("grade-history", { attrs: { history: item.history } })
            ],
            1
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-grader" }, [
    _c("div", { staticClass: "full" }, [
      _vm.grade !== null
        ? _c("div", [
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
                      return _c(
                        "tr",
                        { key: assignment.tag, staticClass: "cl-assignment" },
                        [
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.root + "/cl/grade/" + assignment.tag
                                }
                              },
                              [_vm._v(_vm._s(assignment.name))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(assignment.points) + "%")]),
                          _c("td", [_vm._v(_vm._s(assignment.grade))]),
                          _c("td", { attrs: { colspan: "2" } }, [_vm._v(" ")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "menu", class: _vm.useClass }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
                      item.click()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.delayedFetching
        ? _c("div", { staticClass: "fetching" }, [
            _c("p", [_vm._v("Fetching from server...")])
          ])
        : _vm._e(),
      _vm._v(" "),
      (_vm.fetcher === null || !_vm.fetcher.fetching) && !_vm.fetching
        ? _vm._t("default")
        : _vm._e(),
      _vm._v(" "),
      _vm.fetcher !== null && _vm.fetcher.more
        ? _c("p", { staticClass: "more" }, [
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.fetchMore($event)
                  }
                }
              },
              [_vm._v("MORE")]
            )
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("822158f8", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6affb83c", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("451ec1a4", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
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
    if (!module.hot.data) {
      api.createRecord('69e355a8', component.options)
    } else {
      api.reload('69e355a8', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/console/js/ConsoleComponentBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue":
/*!************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&");
/* harmony import */ var _MemberFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberFetcherComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MemberFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('4a9a55c6', component.options)
    } else {
      api.reload('4a9a55c6', component.options)
    }
    module.hot.accept(/*! ./MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&");
(function () {
      api.rerender('4a9a55c6', {
        render: _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberFetcherComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue":
/*!*************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
/* harmony import */ var _MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('3eab44d2', component.options)
    } else {
      api.reload('3eab44d2', component.options)
    }
    module.hot.accept(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
(function () {
      api.rerender('3eab44d2', {
        render: _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersFetcherComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&":
/*!********************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue":
/*!****************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/PrevNextMember.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrevNextMember.vue?vue&type=template&id=39eadd8d& */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&");
/* harmony import */ var _PrevNextMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrevNextMember.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrevNextMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('39eadd8d', component.options)
    } else {
      api.reload('39eadd8d', component.options)
    }
    module.hot.accept(/*! ./PrevNextMember.vue?vue&type=template&id=39eadd8d& */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrevNextMember.vue?vue&type=template&id=39eadd8d& */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&");
(function () {
      api.rerender('39eadd8d', {
        render: _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/PrevNextMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrevNextMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&":
/*!***********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrevNextMember.vue?vue&type=template&id=39eadd8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/StudentsOnly.js":
/*!*************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/StudentsOnly.js ***!
  \*************************************************************/
/*! exports provided: StudentsOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsOnly", function() { return StudentsOnly; });
var LOCAL_STORAGE_STUDENTS_ONLY = 'cl_students_only';
/**
 * Item in local storage that maintains the state of
 * "students only" in the console.
 * @constructor
 */

var StudentsOnly = function StudentsOnly() {};

StudentsOnly.get = function () {
  var localStorage = window.localStorage;
  var s = localStorage.getItem(LOCAL_STORAGE_STUDENTS_ONLY);
  return s === 'yes';
};

StudentsOnly.set = function (students) {
  var localStorage = window.localStorage;
  localStorage.setItem(LOCAL_STORAGE_STUDENTS_ONLY, students ? 'yes' : 'no');
};

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue":
/*!******************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&");
/* harmony import */ var _SubmissionsAssignmentMemberComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmissionsAssignmentMemberComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('1fddd506', component.options)
    } else {
      api.reload('1fddd506', component.options)
    }
    module.hot.accept(/*! ./SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&");
(function () {
      api.rerender('1fddd506', {
        render: _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&":
/*!*************************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsLinks.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsLinks.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsLinks.vue?vue&type=template&id=96744b6e& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&");
/* harmony import */ var _SubmissionsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionsLinks.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmissionsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('96744b6e', component.options)
    } else {
      api.reload('96744b6e', component.options)
    }
    module.hot.accept(/*! ./SubmissionsLinks.vue?vue&type=template&id=96744b6e& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsLinks.vue?vue&type=template&id=96744b6e& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&");
(function () {
      api.rerender('96744b6e', {
        render: _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Console/SubmissionsLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsLinks.vue?vue&type=template&id=96744b6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Members/Member.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Members/Member.js ***!
  \***********************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony import */ var _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/js/Users/Membership.js */ "./vendor/cl/users/js/Users/Membership.js");
/**
 * @file Member of a course
 * Attaches to a user Object
 */


var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].call(this);
  var role = 'G';

  if (json !== undefined) {
    this.id = json.id;
    this.semester = json.semester;
    this.section = json.section;
    role = json.role;
  } else {
    this.id = 0; // System membership ID

    this.semester = null; // Semester code

    this.section = null; // Section Id

    role = null; // Membership role
  }

  this.role = function () {
    return role;
  };

  this.setRole = function (role_) {
    role = role_;
  };
};

Member.prototype = Object.create(_users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].prototype);
Member.prototype.constructor = Member;
/**
 * Get the course section for a member
 * @param store Vuex store
 * @returns {*}
 */

Member.prototype.getSection = function (store) {
  return store.getters['course/section'](this.semester, this.section);
};
/**
 * Get an assignment for a member
 * @param store Vuex store
 * @param assigntag Assignment tag
 */


Member.prototype.getAssignment = function (store, assigntag) {
  var section = this.getSection(store);
  return section.getAssignment(assigntag);
}; // The possible member roles
// Must match values in Member.php


Member.GUEST = 'G'; ///< Guest user visiting the site

Member.USER = 'U'; ///< Standard user from User, don't use for Member

Member.DROPPED = 'D'; ///< User has dropped the course

Member.STUDENT = 'T'; ///< Enrolled student in course

Member.STAFF = 'S'; ///< Any course staff

Member.GRADER = 'R'; ///< Graders

Member.TA = 'E'; ///< Teaching assistant

Member.INSTRUCTOR = 'I'; ///< Course instructor

Member.ADMIN = 'A'; ///< Admin

Member.prototype.getRoles = function () {
  var roles = {};
  roles[Member.GUEST] = {
    name: 'Guest',
    priority: 1
  };
  roles[Member.DROPPED] = {
    name: 'Dropped',
    priority: 2
  };
  roles[Member.USER] = {
    name: 'User',
    priority: 3,
    skip: true
  };
  roles[Member.STUDENT] = {
    name: 'Student',
    priority: 4
  };
  roles[Member.STAFF] = {
    name: 'Staff',
    priority: 5,
    skip: true
  };
  roles[Member.GRADER] = {
    name: 'Grader',
    priority: 6
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    priority: 7
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 8
  };
  roles[Member.ADMIN] = {
    name: 'Admin',
    priority: 100
  };
  return roles;
};



/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue?vue&type=template&id=15f46600& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&");
/* harmony import */ var _Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submission.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('15f46600', component.options)
    } else {
      api.reload('15f46600', component.options)
    }
    module.hot.accept(/*! ./Submission.vue?vue&type=template&id=15f46600& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue?vue&type=template&id=15f46600& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&");
(function () {
      api.rerender('15f46600', {
        render: _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Submission/Submission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submission.vue?vue&type=template&id=15f46600& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue":
/*!********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&");
/* harmony import */ var _SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('02b620c2', component.options)
    } else {
      api.reload('02b620c2', component.options)
    }
    module.hot.accept(/*! ./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&");
(function () {
      api.rerender('02b620c2', {
        render: _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmitImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&":
/*!***************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&");
/* harmony import */ var _SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('3aa1e570', component.options)
    } else {
      api.reload('3aa1e570', component.options)
    }
    module.hot.accept(/*! ./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&");
(function () {
      api.rerender('3aa1e570', {
        render: _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmitProgram.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitProgram.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=template&id=311d0a99& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&");
/* harmony import */ var _SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('311d0a99', component.options)
    } else {
      api.reload('311d0a99', component.options)
    }
    module.hot.accept(/*! ./SubmitText.vue?vue&type=template&id=311d0a99& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=template&id=311d0a99& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&");
(function () {
      api.rerender('311d0a99', {
        render: _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmitText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitText.vue?vue&type=template&id=311d0a99& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&");
/* harmony import */ var _SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('06fd480e', component.options)
    } else {
      api.reload('06fd480e', component.options)
    }
    module.hot.accept(/*! ./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&");
(function () {
      api.rerender('06fd480e', {
        render: _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmitUnknown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitUnknown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submitted.vue?vue&type=template&id=424dad77& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&");
/* harmony import */ var _Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submitted.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('424dad77', component.options)
    } else {
      api.reload('424dad77', component.options)
    }
    module.hot.accept(/*! ./Submitted.vue?vue&type=template&id=424dad77& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submitted.vue?vue&type=template&id=424dad77& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&");
(function () {
      api.rerender('424dad77', {
        render: _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Submission/Submitted.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submitted.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submitted.vue?vue&type=template&id=424dad77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue ***!
  \**********************************************************/
/*! exports provided: default, TEXT_TYPES, IMG_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&");
/* harmony import */ var _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_TYPES", function() { return _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["TEXT_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMG_TYPES", function() { return _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["IMG_TYPES"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('506943aa', component.options)
    } else {
      api.reload('506943aa', component.options)
    }
    module.hot.accept(/*! ./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&");
(function () {
      api.rerender('506943aa', {
        render: _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmittedItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default, TEXT_TYPES, IMG_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmittedItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_TYPES", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["TEXT_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMG_TYPES", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["IMG_TYPES"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/_grades.scss":
/*!***************************************!*\
  !*** ./vendor/cl/grades/_grades.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_grades.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/grades/_grades.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("20ca8132", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_grades.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/grades/_grades.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_grades.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/grades/_grades.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/grades/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/grades/index.js ***!
  \***********************************/
/*! exports provided: Grades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grades", function() { return Grades; });
/* harmony import */ var _js_GradesFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/GradesFactory */ "./vendor/cl/grades/js/GradesFactory.js");
/* harmony import */ var _js_Console_GradesConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/GradesConsole */ "./vendor/cl/grades/js/Console/GradesConsole.js");
/* harmony import */ var _grades_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_grades.scss */ "./vendor/cl/grades/_grades.scss");
/* harmony import */ var _grades_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grades_scss__WEBPACK_IMPORTED_MODULE_2__);



var Grades = _js_GradesFactory__WEBPACK_IMPORTED_MODULE_0__["GradesFactory"].create(Site.Site);

if (Site.Site.console !== undefined) {
  _js_Console_GradesConsole__WEBPACK_IMPORTED_MODULE_1__["GradesConsole"].install(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
/* harmony import */ var _GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('5cf9cddd', component.options)
    } else {
      api.reload('5cf9cddd', component.options)
    }
    module.hot.accept(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
(function () {
      api.rerender('5cf9cddd', {
        render: _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesAll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=style&index=0&id=5cf9cddd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_style_index_0_id_5cf9cddd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesAll.vue?vue&type=template&id=5cf9cddd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesAll_vue_vue_type_template_id_5cf9cddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesConsole.js":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesConsole.js ***!
  \******************************************************/
/*! exports provided: GradesConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesConsole", function() { return GradesConsole; });
/* harmony import */ var course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _Grading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grading.vue */ "./vendor/cl/grades/js/Console/Grading.vue");
/* harmony import */ var _GradingAssignment_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradingAssignment.vue */ "./vendor/cl/grades/js/Console/GradingAssignment.vue");
/* harmony import */ var _GradingAssignmentMember_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GradingAssignmentMember.vue */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue");
/* harmony import */ var _GradesLinks_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GradesLinks.vue */ "./vendor/cl/grades/js/Console/GradesLinks.vue");
/* harmony import */ var _GradesAll_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GradesAll.vue */ "./vendor/cl/grades/js/Console/GradesAll.vue");
/* harmony import */ var _GradesMember_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GradesMember.vue */ "./vendor/cl/grades/js/Console/GradesMember.vue");
/* harmony import */ var _RubricsEditor_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RubricsEditor.vue */ "./vendor/cl/grades/js/Console/RubricsEditor.vue");
/**
 * @file
 * Install into the grades console system.
 */








var GradesConsole = function GradesConsole() {};

GradesConsole.install = function (Console) {
  Console.components.addOption({
    atLeast: course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].GRADER,
    page: {
      atLeast: course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].GRADER,
      title: 'Grading',
      route: '/grading',
      order: 4,
      component: _Grading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    }
  });
  Console.components.addRoutes([{
    route: '/grading/:assigntag',
    component: _GradingAssignment_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    props: true
  }, {
    route: '/grading/:assigntag/:memberid',
    component: _GradingAssignmentMember_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    props: true
  }, {
    route: '/rubric/:assigntag',
    component: _RubricsEditor_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    props: true
  }, {
    route: '/grades/links',
    component: _GradesLinks_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    route: '/grades/all',
    component: _GradesAll_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    route: '/grades/:memberid',
    component: _GradesMember_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    props: true
  }]);
  Console.tables.add({
    title: 'Grades',
    order: 11,
    api: '/api/grade/tables'
  });
};

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
/* harmony import */ var _GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('02b64216', component.options)
    } else {
      api.reload('02b64216', component.options)
    }
    module.hot.accept(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesLinks.vue?vue&type=template&id=02b64216& */ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
(function () {
      api.rerender('02b64216', {
        render: _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesLinks.vue?vue&type=template&id=02b64216& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesLinks.vue?vue&type=template&id=02b64216&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesLinks_vue_vue_type_template_id_02b64216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
/* harmony import */ var _GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('20ef238e', component.options)
    } else {
      api.reload('20ef238e', component.options)
    }
    module.hot.accept(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradesMember.vue?vue&type=template&id=20ef238e& */ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
(function () {
      api.rerender('20ef238e', {
        render: _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradesMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradesMember.vue?vue&type=template&id=20ef238e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradesMember.vue?vue&type=template&id=20ef238e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradesMember_vue_vue_type_template_id_20ef238e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue":
/*!*************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
/* harmony import */ var _Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grading.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('7fd146a8', component.options)
    } else {
      api.reload('7fd146a8', component.options)
    }
    module.hot.accept(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grading.vue?vue&type=template&id=7fd146a8& */ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
(function () {
      api.rerender('7fd146a8', {
        render: _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/Grading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/Grading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grading.vue?vue&type=template&id=7fd146a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/Grading.vue?vue&type=template&id=7fd146a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grading_vue_vue_type_template_id_7fd146a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
/* harmony import */ var _GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('2030f819', component.options)
    } else {
      api.reload('2030f819', component.options)
    }
    module.hot.accept(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
(function () {
      api.rerender('2030f819', {
        render: _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradingAssignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingAssignment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingAssignment.vue?vue&type=template&id=2030f819& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignment.vue?vue&type=template&id=2030f819&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignment_vue_vue_type_template_id_2030f819___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue":
/*!*****************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
/* harmony import */ var _GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('01669d13', component.options)
    } else {
      api.reload('01669d13', component.options)
    }
    module.hot.accept(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
(function () {
      api.rerender('01669d13', {
        render: _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/GradingAssignmentMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingAssignmentMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&":
/*!************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradingAssignmentMember.vue?vue&type=template&id=01669d13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/GradingAssignmentMember.vue?vue&type=template&id=01669d13&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradingAssignmentMember_vue_vue_type_template_id_01669d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
/* harmony import */ var _RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('df15235c', component.options)
    } else {
      api.reload('df15235c', component.options)
    }
    module.hot.accept(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricEditor.vue?vue&type=template&id=df15235c& */ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
(function () {
      api.rerender('df15235c', {
        render: _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/RubricEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RubricEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RubricEditor.vue?vue&type=template&id=df15235c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricEditor.vue?vue&type=template&id=df15235c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEditor_vue_vue_type_template_id_df15235c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
/* harmony import */ var _RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('5566d74b', component.options)
    } else {
      api.reload('5566d74b', component.options)
    }
    module.hot.accept(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
(function () {
      api.rerender('5566d74b', {
        render: _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Console/RubricsEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RubricsEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RubricsEditor.vue?vue&type=template&id=5566d74b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Console/RubricsEditor.vue?vue&type=template&id=5566d74b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricsEditor_vue_vue_type_template_id_5566d74b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/GradesFactory.js":
/*!**********************************************!*\
  !*** ./vendor/cl/grades/js/GradesFactory.js ***!
  \**********************************************/
/*! exports provided: GradesFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesFactory", function() { return GradesFactory; });
/* harmony import */ var site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVue */ "./vendor/cl/site/js/Vue/PageVue.js");
/* harmony import */ var _User_GradeAssignment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User/GradeAssignment.vue */ "./vendor/cl/grades/js/User/GradeAssignment.vue");
/* harmony import */ var _User_Grades_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User/Grades.vue */ "./vendor/cl/grades/js/User/Grades.vue");
/* harmony import */ var site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! site-cl/js/Vue/PageNav.vue */ "./vendor/cl/site/js/Vue/PageNav.vue");




var GradesFactory = function GradesFactory() {};

GradesFactory.create = function (site) {
  var Grades = function Grades() {};

  site.ready(function () {
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__["PageVue"].create('div.cl-grade-assignment', 'Assignment Grade', _User_GradeAssignment_vue__WEBPACK_IMPORTED_MODULE_1__["default"], site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__["PageVue"].create('div.cl-grades', 'Grades', _User_Grades_vue__WEBPACK_IMPORTED_MODULE_2__["default"], site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });
  return Grades;
};

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
/* harmony import */ var _Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Handbook.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('62dab77f', component.options)
    } else {
      api.reload('62dab77f', component.options)
    }
    module.hot.accept(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handbook.vue?vue&type=template&id=62dab77f& */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
(function () {
      api.rerender('62dab77f', {
        render: _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Handbook/Handbook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Handbook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Handbook.vue?vue&type=template&id=62dab77f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Handbook_vue_vue_type_template_id_62dab77f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
/* harmony import */ var _GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('5f2b0b20', component.options)
    } else {
      api.reload('5f2b0b20', component.options)
    }
    module.hot.accept(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
(function () {
      api.rerender('5f2b0b20', {
        render: _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/User/GradeAssignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeAssignment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeAssignment.vue?vue&type=template&id=5f2b0b20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeAssignment_vue_vue_type_template_id_5f2b0b20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue":
/*!*********************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
/* harmony import */ var _Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grades.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('270419e0', component.options)
    } else {
      api.reload('270419e0', component.options)
    }
    module.hot.accept(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grades.vue?vue&type=template&id=270419e0& */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
(function () {
      api.rerender('270419e0', {
        render: _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/User/Grades.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grades.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grades.vue?vue&type=template&id=270419e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grades_vue_vue_type_template_id_270419e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue":
/*!************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('177faa53', component.options)
    } else {
      api.reload('177faa53', component.options)
    }
    module.hot.accept(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
(function () {
      api.rerender('177faa53', {
        render: _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/grades/js/Util/GradeHistoryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/img/yellowpad.png":
/*!******************************************!*\
  !*** ./vendor/cl/site/img/yellowpad.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAIAAACtjN7AAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAHlJREFUOI3t0rENg0AUA1D7n+EqKpQZMkFmZDtKNkiTHiECucsKbhBC4tdPLvzNbR7gHHNYDgBwDBVQPVlVIDNUisWjRevWOZDMGt8vh0YkPR+TQytb9d3HoQVZ+954qY1o93r6Bm6qiK8nea29/uhQkGJNFkU6/Vt/PUghIGwDWDIAAAAASUVORK5CYII="

/***/ }),

/***/ "./vendor/cl/site/js/APIResponse.js":
/*!******************************************!*\
  !*** ./vendor/cl/site/js/APIResponse.js ***!
  \******************************************/
/*! exports provided: APIResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIResponse", function() { return APIResponse; });
/**
 * Response from the API in an easy-to-use format
 * @constructor
 */
var APIResponse = function APIResponse(json) {
  this.json = json;
  /**
   * Get data by type
   * @param type Name of the type, like 'token'
   * @returns {object} Object of data or null if not found
   */

  this.getData = function (type) {
    if (this.json.data !== undefined) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.json.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.type === type) {
            return item;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return null;
  };
  /**
   * Get all instances of data by tye
   * @param type Name of the type, like 'token'
   * @returns {Array} Array of objects representing the data elements.
   */


  this.getDataAll = function (type) {
    if (this.json.data !== undefined) {
      var ret = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.json.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          if (item.type === type) {
            ret.push(item);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return ret;
    }

    return [];
  };
  /**
   * Does this response have an error?
   * @returns {boolean} True if there is an error
   */


  this.hasError = function () {
    return this.json.errors !== undefined && this.json.errors.length > 0;
  };
  /**
   * Return the error code if there is an error
   * @return {int} Error code
   */


  this.errorCode = function () {
    return this.json.errors[0].code;
  };
  /**
   * Return the error title if there is an error
   * @return {string} Error title
   */


  this.errorTitle = function () {
    return this.json.errors[0].title;
  };
}; //export default APIResponse;

/***/ }),

/***/ "./vendor/cl/site/js/TimeFormatter.js":
/*!********************************************!*\
  !*** ./vendor/cl/site/js/TimeFormatter.js ***!
  \********************************************/
/*! exports provided: TimeFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatter", function() { return TimeFormatter; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Utility functions to format times.
 */

/**
 * Utility functions to format times.
 * @constructor
 */

var TimeFormatter = function TimeFormatter() {};
/**
 * Convert a time to the format we display
 * Time is relative to a specified time (or current time)
 * @param {moment} time Time to convert (moment)
 * @param {moment} currentTime Current time (moment)
 * @param {string} format Moment format
 * @returns {string}
 */

TimeFormatter.relative = function (time, currentTime, format) {
  if (currentTime === undefined || currentTime === null) {
    currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default.a.now();
  }

  var elapsed = currentTime.diff(time);

  if (elapsed < 60000) {
    return '<1 min ago';
  }

  if (elapsed < 3600000) {
    // Within an hour ago
    var mins = Math.floor(elapsed / 60000);
    return '' + mins + ' min ago';
  }
  /*
   * Determine if it was today
   */


  if (time.date() === currentTime.date() && time.month() === currentTime.month() && time.year() === currentTime.year()) {
    var hour = time.hour();
    var am = 'am';

    if (hour === 0) {
      hour = 12;
    } else if (hour === 12) {
      am = 'pm';
    } else if (hour > 12) {
      am = 'pm';
      hour -= 12;
    }

    var minute = time.minute();

    if (minute < 10) {
      minute = '0' + minute;
    }

    return "Today at " + hour + ':' + minute + am;
  }

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  }

  return time.format(format);
};
/**
 * Display a Unix time as an absolute time.
 * @param {int} time Unix time (seconds)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.absoluteUNIX = function (time, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  } else if (format === 'short') {
    format = 'ddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long') {
    format = 'dddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long-date') {
    format = 'dddd, M-DD-YYYY';
  } else if (format === 'short-time') {
    format = 'h:mma';
  }

  return t.format(format);
};
/**
 * Display a Unix time as a relative time.
 * @param {int} time Unix time (seconds)
 * @param {int} currentTime Current time as UNIX time (optional)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.relativeUNIX = function (time, currentTime, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);
  var c = currentTime !== null ? moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(currentTime) : moment__WEBPACK_IMPORTED_MODULE_0___default()();
  return this.relative(t, c, format);
};

/***/ }),

/***/ "./vendor/cl/site/js/UI/Editor.js":
/*!****************************************!*\
  !*** ./vendor/cl/site/js/UI/Editor.js ***!
  \****************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_editor.scss */ "./vendor/cl/site/js/UI/_editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resizer-cl */ "./packages/resizer-cl/src/app.modules.js");
/* harmony import */ var _EditorOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorOptions */ "./vendor/cl/site/js/UI/EditorOptions.js");
/*
 * Javascript support for the Editor
 */



/**
 * Javascript object in support of textarea-based editor
 *
 * If editor has the code style, line numbers are displayed.
 * Set member .tab to support smart tabs
 * Set member .autoIndent to support automatic indentation
 * @param {HTMLElement} element The element for the textarea we are turning into an editor
 * @param {Object} options Options to pass to the editor
 * @constructor
 */

var Editor = function Editor(element, options) {
  if (options !== undefined) {
    options = new _EditorOptions__WEBPACK_IMPORTED_MODULE_2__["EditorOptions"](options);
  } else {
    options = new _EditorOptions__WEBPACK_IMPORTED_MODULE_2__["EditorOptions"](JSON.parse(element.textContent));
  }

  element.classList.add('cl-editor');
  element.style.display = 'block';
  var resizer = new resizer_cl__WEBPACK_IMPORTED_MODULE_1__["default"](element, {
    resize: options.resize,
    handle: options.handle,
    grabSize: options.grabSize
  });
  var ta = document.createElement('textarea');
  this.textarea = ta;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = options.classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cls = _step.value;
      ta.classList.add(cls);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  element.innerHTML = '';
  element.appendChild(ta);
  ta.value = options.value;

  if (options.name !== null) {
    ta.name = options.name;
  }

  if (options.code) {
    ta.classList.add('code');
  }

  if (options.height !== null) {
    element.style.height = options.height;
  }

  if (options.minHeight !== null) {
    element.style.minHeight = options.minHeight;
  }

  ta.spellcheck = options.spellcheck; // IE11 and some older browsers do not support
  // the insertText command. This determines if it
  // is available. This may be revised it the attempt to
  // use them fails.

  var insertTextSupported = document.queryCommandSupported("insertText");
  var deleteSupported = document.queryCommandSupported("delete"); // Set true after we auto-indent

  var justIndented = false;

  if (options.tab || options.autoIndent) {
    ta.addEventListener('keydown', function (event) {
      if (options.tab && event.which === 9) {
        // Tab character
        event.preventDefault();

        if (!event.shiftKey) {
          tabAtCaret();
          justIndented = true;
        } else {
          unTab();
          justIndented = false;
        }

        return false;
      }

      if (options.autoIndent) {
        if (event.which == 13) {
          // Return character
          event.preventDefault();
          justIndented = returnWithIndent();
          return false;
        } else if (justIndented && event.which == 8) {
          // Backspace after we just indented!
          if (unDent()) {
            event.preventDefault();
            return false;
          }
        } else {
          justIndented = false;
        }
      }

      return true;
    });
  }
  /*
   * This is the magic that syncs the background with the
   * line numbers in it.
   */


  ta.addEventListener('scroll', function (event) {
    var top = ta.scrollTop;
    var left = ta.scrollLeft;
    ta.style.backgroundPosition = -left + 'px ' + -top + 'px';
  });
  /*
   * Insert a tab at the current edit location in the textarea
   */

  function tabAtCaret() {
    var dSel = ta;

    if (dSel.selectionStart || dSel.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = dSel.selectionStart;
      var endPos = dSel.selectionEnd;

      if (startPos == endPos) {
        // Tabbing at the current location
        var before = dSel.value.substring(0, startPos);
        var split = before.split("\n");
        var lastLine = split[split.length - 1];
        var lastLen = lastLine.length;
        var toAdd = options.tabSize - lastLen % options.tabSize;
        var spaces = '';

        for (var i = 0; i < toAdd; i++) {
          spaces += ' ';
        }

        insertText(dSel, spaces);
        dSel.selectionStart = startPos + toAdd;
        dSel.selectionEnd = startPos + toAdd;
      } else {
        // Tabbing a selection
        var val = dSel.value;
        var split = val.split("\n");
        var linePos = 0; // Find the line the selection starts on

        for (var line = 0; line < split.length; line++) {
          var nextLinePos = linePos + split[line].length + 1;

          if (startPos >= linePos && startPos < nextLinePos) {
            break;
          }

          linePos = nextLinePos;
        }

        spaces = '';

        for (var i = 0; i < options.tabSize; i++) {
          spaces += ' ';
        }

        var insertions = 0; // Indent until we are done

        for (; line < split.length; line++) {
          dSel.selectionStart = linePos + insertions;
          dSel.selectionEnd = linePos + insertions;
          insertText(dSel, spaces);
          insertions += options.tabSize;
          nextLinePos = linePos + split[line].length + 1;

          if (endPos <= nextLinePos) {
            // We are done
            break;
          }

          linePos = nextLinePos;
        }

        dSel.selectionStart = startPos + options.tabSize;
        dSel.selectionEnd = endPos + insertions;
      }
    } else {
      dSel.value += " ";
      dSel.focus();
    }
  }
  /*
   * Handle the Shift-TAB combination (untabbing)
   */


  function unTab() {
    // Selection DOM object
    var dSel = ta;
    var startPos = dSel.selectionStart;
    var endPos = dSel.selectionEnd; // Untabbing a selection

    var val = dSel.value;
    var split = val.split("\n");
    var linePos = 0; // Find the line the selection starts on

    for (var line = 0; line < split.length; line++) {
      var nextLinePos = linePos + split[line].length + 1;

      if (startPos >= linePos && startPos < nextLinePos) {
        break;
      }

      linePos = nextLinePos;
    }

    var deletions = 0;
    var firstLine = true; // Undent until we are done

    for (; line < split.length; line++) {
      for (var spaces = 0; spaces < options.tabSize && spaces < split[line].length; spaces++) {
        if (split[line][spaces] != ' ') {
          break;
        }
      }

      if (spaces > 0) {
        dSel.selectionStart = linePos - deletions;
        dSel.selectionEnd = linePos - deletions + spaces;
        deleteText(dSel);
        deletions += spaces;
      }

      if (firstLine) {
        startPos -= spaces;

        if (startPos < linePos) {
          startPos = linePos;
        }

        firstLine = false;
      }

      nextLinePos = linePos + split[line].length + 1;

      if (endPos <= nextLinePos) {
        // We are done
        break;
      }

      linePos = nextLinePos;
    }

    dSel.selectionStart = startPos;
    dSel.selectionEnd = endPos - deletions;
  }
  /*
   * Insert a return character and enough spaces to indent
   * the text so as to match the previous line.
   */


  function returnWithIndent() {
    // Selection DOM object
    var dSel = ta; // How many spaces will be put before the first non-space?

    var space = 0;

    if (dSel.selectionStart || dSel.selectionStart == '0') {
      var startPos = dSel.selectionStart;
      var endPos = dSel.selectionEnd;
      var scrollTop = dSel.scrollTop;
      var before = dSel.value.substring(0, startPos);
      var after = dSel.value.substring(endPos, dSel.value.length);
      var split = before.split("\n"); // What is the last line before the caret?

      var last = split[split.length - 1];

      for (var i = 0; i < last.length; i++) {
        if (last.charAt(i) != ' ') {
          break;
        }

        space++;
      } // Create the return


      var myValue = "\n";

      for (i = 0; i < space; i++) {
        myValue += ' ';
      }

      insertText(dSel, myValue);
      dSel.selectionStart = startPos + myValue.length;
      dSel.selectionEnd = startPos + myValue.length;
    } else {
      dSel.value += "\n";
      dSel.focus();
    }

    return space > 0;
  }
  /*
   * Remove the last tabSize spaces at the current location
   * @return true if was un-dented
   */


  function unDent() {
    // Selection DOM object
    var dSel = ta;

    if (dSel.selectionStart || dSel.selectionStart == '0') {
      var startPos = dSel.selectionStart;
      var endPos = dSel.selectionEnd;
      var scrollTop = dSel.scrollTop;
      var before = dSel.value.substring(0, startPos);
      var spaceStr = '';

      for (var i = 0; i < options.tabSize; i++) {
        spaceStr += ' ';
      }

      if (before.length >= options.tabSize && before.substr(before.length - options.tabSize, options.tabSize) === spaceStr) {
        dSel.selectionStart = before.length - options.tabSize;
        dSel.selectionEnd = before.length - 1;
        deleteText(dSel);
        dSel.selectionStart = before.length - options.tabSize;
        dSel.selectionEnd = dSel.selectionStart;
        return true;
      }
    }

    return false;
  }
  /*
   * Insert text in a textarea at the current selection.
   *
   * This is provided to allow for fallback to a non-undoable version
   * for Internet explorer and Firefox.
   * @param textarea Textarea we are modifying
   * @param text Text to insert
   */


  function insertText(textarea, text) {
    if (insertTextSupported) {
      if (!document.execCommand("insertText", false, text)) {
        insertTextSupported = false;
        insertText(textarea, text);
      }
    } else {
      // Backup version for Internet Explorer 11
      var pos = textarea.selectionStart;
      var scrollTop = textarea.scrollTop;
      var value = textarea.value;
      textarea.value = value.substring(0, pos) + text + value.substring(pos);
      textarea.focus();
      textarea.scrollTop = scrollTop;
    }
  }
  /*
   * Delete text in a textarea at the current selection.
   *
   * This is provided to allow for fallback to a non-undoable version
   * for Internet explorer and Firefox.
   * @param textarea
   */


  function deleteText(textarea) {
    if (deleteSupported) {
      if (!document.execCommand("delete")) {
        deleteSupported = false;
        deleteText(textarea);
      }
    } else {
      // Backup version for Internet Explorer 11
      // and Firefox
      var startPos = textarea.selectionStart;
      var endPos = textarea.selectionEnd;
      var scrollTop = textarea.scrollTop;
      var value = textarea.value;
      textarea.value = value.substring(0, startPos) + value.substring(endPos);
      textarea.focus();
      textarea.scrollTop = scrollTop;
    }
  }
};

/***/ }),

/***/ "./vendor/cl/site/js/UI/EditorOptions.js":
/*!***********************************************!*\
  !*** ./vendor/cl/site/js/UI/EditorOptions.js ***!
  \***********************************************/
/*! exports provided: EditorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorOptions", function() { return EditorOptions; });
/*
 * Various interface options we can select
 */

/**
 * Editor interface options.
 *
 * This is used by Editor to provide default values for the editor options.
 *
 * @param options User provided options that override the default values.
 * @constructor
 */
var EditorOptions = function EditorOptions(options) {
  options = options ? options : {}; /// Options: vertical, horizontal, both

  this.resize = 'vertical'; /// The resizing handle

  this.handle = 'bar'; /// Range for grabbing

  this.grabSize = 10; /// Is this for source code?

  this.code = false; /// Initial textarea value

  this.value = ''; /// Height value to use

  this.height = null; /// Name for the control

  this.name = null; /// Use handle the tab key?

  this.tab = false; /// Automatically indent code?

  this.autoIndent = false; /// Minimum height to set

  this.minHeight = null; /// Spellcheck the textarea?

  this.spellcheck = false; /// Size of a tab stop in characters.

  this.tabSize = 4; /// Classes to add to the textarea

  this.classes = [];

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue":
/*!***************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('d4b05102', component.options)
    } else {
      api.reload('d4b05102', component.options)
    }
    module.hot.accept(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
(function () {
      api.rerender('d4b05102', {
        render: _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/site/js/UI/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=d4b05102& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/UI/_editor.scss":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/UI/_editor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_editor.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("33597a9a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_editor.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_editor.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/site/js/Util/Sanitize.js":
/*!********************************************!*\
  !*** ./vendor/cl/site/js/Util/Sanitize.js ***!
  \********************************************/
/*! exports provided: Sanitize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sanitize", function() { return Sanitize; });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Basic Sanitize operations to protect from XSS.
 */

/**
 * Basic Sanitize operations to protect from XSS.
 *
 * Some of this is a wrapper around DOMPurify's sanitize, so
 * it can be easily replaced in the future. Additional functions are
 * useful for sanitizing input from files.
 *
 * @constructor
 */

var Sanitize = function Sanitize() {};

Sanitize.sanitize = function (text) {
  return dompurify__WEBPACK_IMPORTED_MODULE_0___default.a.sanitize(text);
};

Sanitize.boolean = function (value) {
  return value === true;
};
/**
 * Replace <, >, and & with corresponding HTML entities.
 * @param text
 * @returns {string|XML|*}
 */


Sanitize.htmlentities = function (text) {
  text = text.replace(/&/g, '&amp;');
  text = text.replace(/</g, '&lt;');
  text = text.replace(/>/g, '&gt;');
  return text;
};

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony import */ var _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNav.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('0dbf4cb0', component.options)
    } else {
      api.reload('0dbf4cb0', component.options)
    }
    module.hot.accept(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
(function () {
      api.rerender('0dbf4cb0', {
        render: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/site/js/Vue/PageNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVue.js":
/*!******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVue.js ***!
  \******************************************/
/*! exports provided: PageVue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVue", function() { return PageVue; });
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
  var components = {
    'site-header': Header,
    'site-footer': Footer,
    'page-vue': component
  };

  if (nav !== undefined) {
    components['page-nav'] = nav;
  }

  var site = Site.Site;
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

/***/ "./vendor/cl/site/js/Vue/PageVueBase.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVueBase.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVueBase.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
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
    if (!module.hot.data) {
      api.createRecord('12bbaef8', component.options)
    } else {
      api.reload('12bbaef8', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/site/js/Vue/PageVueBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVueBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue ***!
  \***********************************************/
/*! exports provided: default, Fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
/* harmony import */ var _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=script&lang=js& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["Fetcher"]; });

/* harmony import */ var _FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43b26bcb",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('43b26bcb', component.options)
    } else {
      api.reload('43b26bcb', component.options)
    }
    module.hot.accept(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
(function () {
      api.rerender('43b26bcb', {
        render: _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/users/js/Lib/FetcherVue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default, Fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["Fetcher"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/users/js/Users/Membership.js":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Users/Membership.js ***!
  \************************************************/
/*! exports provided: Membership */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Membership", function() { return Membership; });
/**
 * @file
 * A membership associated with a user.
 *
 * This is a base object that will be inherited by
 * actual membership objects.
 */
var Membership = function Membership() {
  /// The User object for this membership
  this.user = null;
};



/***/ }),

/***/ "./vendor/cl/users/js/Vue/UserVueBase.vue":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Vue/UserVueBase.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserVueBase.vue?vue&type=script&lang=js& */ "./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
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
    if (!module.hot.data) {
      api.createRecord('c7e4e49e', component.options)
    } else {
      api.reload('c7e4e49e', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/users/js/Vue/UserVueBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserVueBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

},[["./vendor/cl/grades/index.js","runtime","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0xpbmtzLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0xpbmtzLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc01lbWJlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNzRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVzLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9zaXRlL2pzL1VJL01lbnUudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlVnVlQmFzZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC91c2Vycy9qcy9MaWIvRmV0Y2hlclZ1ZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvX2dyYWRlcy5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1VJL19lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT83MmI1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlPzM2YjkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZT84ZTgwIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZT9iMDNjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT9hNzc3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZT8zM2VmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlPzYwYjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlP2E2YTMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlPzg2YWQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZT9kZTRkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT8yYjYwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZT80NTk1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZT83M2IxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlPzlmNzciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlPzM3NjAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0FsbC52dWU/MDdlZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTGlua3MudnVlP2E2ZDMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc01lbWJlci52dWU/NzZkYSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWU/ODk0YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnQudnVlPzU5NTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT85NTg2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlPzI2ZGUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY3NFZGl0b3IudnVlPzFiMWIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWU/ZTkxYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZT9lOTZlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlP2JhNzIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/M2YxMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZT85ZjJhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZT9lNDQyIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9MaWIvRmV0Y2hlclZ1ZS52dWU/ZTcyNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT9iYjZlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP2I2MjEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZT83YTAwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/ODhkMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZT8zZDQzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP2E5YTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT84Y2M1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT9mMmFmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9QcmV2TmV4dE1lbWJlci52dWU/NTBjMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9QcmV2TmV4dE1lbWJlci52dWU/MzY2ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9TdHVkZW50c09ubHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWU/NmZmOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT83MDY2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0xpbmtzLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNMaW5rcy52dWU/OTUwOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNMaW5rcy52dWU/NmFjOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL01lbWJlcnMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/OThmYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/NjUzMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWU/OTE4NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlPzBkMTQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT9hYTEwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT9kYThhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/ZWNjYyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/MTU0NiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzFmZGIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzRlZTAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWU/YmZlNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZT9hZGZiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/YzUyNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/NzEwMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL19ncmFkZXMuc2Nzcz9hZmY5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0FsbC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0FsbC52dWU/ZjhhMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZT8yN2VkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNBbGwudnVlPzNlMDEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0xpbmtzLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzTGlua3MudnVlPzk0ZGYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc0xpbmtzLnZ1ZT8yMDRjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNNZW1iZXIudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNNZW1iZXIudnVlPzVhYWMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRlc01lbWJlci52dWU/ZjljMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmcudnVlP2FmZTEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmcudnVlPzJjYTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGluZ0Fzc2lnbm1lbnQudnVlPzVmMTYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT8wMTU4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT80MDM2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/MzAxZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljRWRpdG9yLnZ1ZT83NDUyIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNFZGl0b3IudnVlP2Y1M2YiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY3NFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNzRWRpdG9yLnZ1ZT80MDMwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9SdWJyaWNzRWRpdG9yLnZ1ZT8yZGUyIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvR3JhZGVzRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZT8zOTY5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvSGFuZGJvb2svSGFuZGJvb2sudnVlPzQ4NWEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlQXNzaWdubWVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlQXNzaWdubWVudC52dWU/ZDU4YiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZT9mM2Y5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlPzA1ODAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWU/MTMwNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT8wM2VkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlPzE4OGEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/YWFmYSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9pbWcveWVsbG93cGFkLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9BUElSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9UaW1lRm9ybWF0dGVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1VJL0VkaXRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9FZGl0b3JPcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1VJL01lbnUudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1VJL01lbnUudnVlP2JkOTYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVUkvTWVudS52dWU/MGE5NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9fZWRpdG9yLnNjc3M/MmFlYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VdGlsL1Nhbml0aXplLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/ZDNhZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/YTJmMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlVnVlQmFzZS52dWU/MTE4YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9MaWIvRmV0Y2hlclZ1ZS52dWU/NzI2OCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlPzQ5N2IiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZT8yZjEyIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlP2I2ZTEiXSwibmFtZXMiOlsiTE9DQUxfU1RPUkFHRV9TVFVERU5UU19PTkxZIiwiU3R1ZGVudHNPbmx5IiwiZ2V0IiwibG9jYWxTdG9yYWdlIiwid2luZG93IiwicyIsImdldEl0ZW0iLCJzZXQiLCJzdHVkZW50cyIsInNldEl0ZW0iLCJNZW1iZXIiLCJqc29uIiwiTWVtYmVyc2hpcCIsImNhbGwiLCJyb2xlIiwidW5kZWZpbmVkIiwiaWQiLCJzZW1lc3RlciIsInNlY3Rpb24iLCJzZXRSb2xlIiwicm9sZV8iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImdldFNlY3Rpb24iLCJzdG9yZSIsImdldHRlcnMiLCJnZXRBc3NpZ25tZW50IiwiYXNzaWdudGFnIiwiR1VFU1QiLCJVU0VSIiwiRFJPUFBFRCIsIlNUVURFTlQiLCJTVEFGRiIsIkdSQURFUiIsIlRBIiwiSU5TVFJVQ1RPUiIsIkFETUlOIiwiZ2V0Um9sZXMiLCJyb2xlcyIsIm5hbWUiLCJwcmlvcml0eSIsInNraXAiLCJHcmFkZXMiLCJHcmFkZXNGYWN0b3J5IiwiU2l0ZSIsImNvbnNvbGUiLCJHcmFkZXNDb25zb2xlIiwiaW5zdGFsbCIsIkNvbnNvbGUiLCJjb21wb25lbnRzIiwiYWRkT3B0aW9uIiwiYXRMZWFzdCIsInBhZ2UiLCJ0aXRsZSIsInJvdXRlIiwib3JkZXIiLCJjb21wb25lbnQiLCJHcmFkaW5nVnVlIiwiYWRkUm91dGVzIiwiR3JhZGluZ0Fzc2lnbm1lbnRWdWUiLCJwcm9wcyIsIkdyYWRpbmdBc3NpZ25tZW50TWVtYmVyVnVlIiwiUnVicmljc0VkaXRvclZ1ZSIsIkdyYWRlc0xpbmtzVnVlIiwiR3JhZGVzQWxsVnVlIiwiR3JhZGVzTWVtYmVyVnVlIiwidGFibGVzIiwiYWRkIiwiYXBpIiwic2l0ZSIsInJlYWR5IiwiUGFnZVZ1ZSIsIkdyYWRlQXNzaWdubWVudFZ1ZSIsIlBhZ2VOYXYiLCJHcmFkZXNWdWUiLCJBUElSZXNwb25zZSIsImdldERhdGEiLCJ0eXBlIiwiZGF0YSIsIml0ZW0iLCJnZXREYXRhQWxsIiwicmV0IiwicHVzaCIsImhhc0Vycm9yIiwiZXJyb3JzIiwibGVuZ3RoIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yVGl0bGUiLCJUaW1lRm9ybWF0dGVyIiwicmVsYXRpdmUiLCJ0aW1lIiwiY3VycmVudFRpbWUiLCJmb3JtYXQiLCJtb21lbnQiLCJub3ciLCJlbGFwc2VkIiwiZGlmZiIsIm1pbnMiLCJNYXRoIiwiZmxvb3IiLCJkYXRlIiwibW9udGgiLCJ5ZWFyIiwiaG91ciIsImFtIiwibWludXRlIiwiYWJzb2x1dGVVTklYIiwidCIsInVuaXgiLCJyZWxhdGl2ZVVOSVgiLCJjIiwiRWRpdG9yIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJFZGl0b3JPcHRpb25zIiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJzdHlsZSIsImRpc3BsYXkiLCJyZXNpemVyIiwiUmVzaXplciIsInJlc2l6ZSIsImhhbmRsZSIsImdyYWJTaXplIiwidGEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0YXJlYSIsImNsYXNzZXMiLCJjbHMiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwiaGVpZ2h0IiwibWluSGVpZ2h0Iiwic3BlbGxjaGVjayIsImluc2VydFRleHRTdXBwb3J0ZWQiLCJxdWVyeUNvbW1hbmRTdXBwb3J0ZWQiLCJkZWxldGVTdXBwb3J0ZWQiLCJqdXN0SW5kZW50ZWQiLCJ0YWIiLCJhdXRvSW5kZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNoaWZ0S2V5IiwidGFiQXRDYXJldCIsInVuVGFiIiwicmV0dXJuV2l0aEluZGVudCIsInVuRGVudCIsInRvcCIsInNjcm9sbFRvcCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZFNlbCIsInNlbGVjdGlvblN0YXJ0Iiwic3RhcnRQb3MiLCJlbmRQb3MiLCJzZWxlY3Rpb25FbmQiLCJiZWZvcmUiLCJzdWJzdHJpbmciLCJzcGxpdCIsImxhc3RMaW5lIiwibGFzdExlbiIsInRvQWRkIiwidGFiU2l6ZSIsInNwYWNlcyIsImkiLCJpbnNlcnRUZXh0IiwidmFsIiwibGluZVBvcyIsImxpbmUiLCJuZXh0TGluZVBvcyIsImluc2VydGlvbnMiLCJmb2N1cyIsImRlbGV0aW9ucyIsImZpcnN0TGluZSIsImRlbGV0ZVRleHQiLCJzcGFjZSIsImFmdGVyIiwibGFzdCIsImNoYXJBdCIsIm15VmFsdWUiLCJzcGFjZVN0ciIsInN1YnN0ciIsInRleHQiLCJleGVjQ29tbWFuZCIsInBvcyIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsIlNhbml0aXplIiwic2FuaXRpemUiLCJET01QdXJpZnkiLCJib29sZWFuIiwiaHRtbGVudGl0aWVzIiwicmVwbGFjZSIsInNlbCIsIm5hdiIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZ0YWciLCJ0ZW1wbGF0ZSIsIkhlYWRlciIsImluZm8iLCJoZWFkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJWdWUiLCJlbCIsIm1lbnUiLCJtZXRob2RzIiwic2V0VGl0bGUiLCJzaXRlTmFtZSIsInNldE1lbnUiLCJnZXRNZW51IiwidXNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFFQTtBQUNBLG9GQURBO0FBRUE7QUFDQTs7Ozs7O0FBTUEsV0FQQSxtQkFPQSxLQVBBLEVBT0EsS0FQQSxFQU9BLE9BUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWEE7O0FBYUE7Ozs7OztBQU1BLGVBbkJBLHVCQW1CQSxLQW5CQSxFQW1CQSxLQW5CQSxFQW1CQSxJQW5CQSxFQW1CQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0F2QkE7QUF5QkEsY0F6QkEsc0JBeUJBLElBekJBLEVBeUJBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFoQ0EsR0FGQTtBQW9DQSxTQXBDQSxxQkFvQ0E7QUFDQTtBQUNBLEdBdENBO0FBdUNBLGVBdkNBLDJCQXVDQTtBQUNBO0FBQ0E7QUF6Q0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREEsS0FEQTtBQUlBO0FBQ0E7QUFEQTtBQUpBLEdBREE7QUFTQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBYkE7QUFjQTtBQUNBLE1BREEsY0FDQSxFQURBLEVBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUhBLEdBZEE7QUFtQkEsU0FuQkEscUJBbUJBO0FBQ0E7QUFDQSxHQXJCQTtBQXNCQTtBQUNBO0FBREEsR0F0QkE7QUF5QkE7QUFDQSxTQURBLG1CQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQSxpREFDQSxJQURBLENBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsT0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxXQUZBLEVBRUEsSUFGQTtBQUdBO0FBQ0EsT0FiQTtBQWdCQTtBQTFCQTtBQXpCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUZBO0FBREEsR0FKQTtBQVVBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFJQSxHQWZBO0FBZ0JBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTs7OztBQUlBLG1CQVJBLDZCQVFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxLQW5CQTtBQW9CQSx1QkFwQkEsaUNBb0JBO0FBQ0E7QUFDQTtBQXRCQSxHQWhCQTtBQXdDQTtBQUNBLFNBREEsaUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUE7QUFBQTtBQUFBO0FBVkEsSUF4Q0E7QUFxREE7QUFDQTtBQURBLEdBckRBO0FBd0RBLFNBeERBLHFCQXdEQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLEdBRkE7QUFJQSxHQXRFQTtBQXVFQSxlQXZFQSwyQkF1RUE7QUFDQTtBQUNBO0FBQ0E7QUExRUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQSxpQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5SkFEQTtBQUVBO0FBQ0E7QUFDQSxrRUFEQTtBQUVBLHdCQUZBO0FBR0E7QUFIQTtBQUtBO0FBUkE7QUFVQSxPQVhBLE1BV0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpSkFEQTtBQUVBO0FBQ0E7QUFDQSx3RUFEQTtBQUVBLHdCQUZBO0FBR0E7QUFIQTtBQUtBO0FBUkE7QUFVQSxPQVhBLE1BV0E7QUFDQTtBQUNBO0FBR0E7QUFwQ0EsR0FQQTtBQTZDQSxTQTdDQSxxQkE2Q0E7QUFDQTtBQUNBLGdDQUZBLENBSUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXZEQTtBQXdEQSxlQXhEQSwyQkF3REE7QUFDQTtBQUNBO0FBQ0E7QUEzREEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNJQTtBQUVBO0FBQ0EsOEJBREE7QUFFQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUZBO0FBSUEsR0FQQTtBQVFBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBLEdBUkE7QUFjQTtBQUNBO0FBREEsR0FkQTtBQWlCQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBLEdBbkJBO0FBb0JBO0FBQ0EsU0FEQSxpQkFDQSxJQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQ0EsY0FEQSxHQUNBLEdBREEsR0FDQSxjQURBLEVBQ0EsRUFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxTQVBBLE1BT0E7QUFDQTtBQUNBO0FBRUEsT0FkQSxFQWVBLEtBZkEsQ0FlQTtBQUNBO0FBQ0EsT0FqQkE7QUFvQkE7QUE5QkE7QUFwQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUVBO0FBQ0EsMkZBREE7QUFFQSx1QkFGQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEEsR0FSQTtBQWFBLFNBYkEscUJBYUE7QUFDQTtBQUNBLEdBZkE7QUFnQkE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQSx3QkFEQSxDQUdBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0EsMkRBREE7QUFFQSwyRkFGQTtBQUdBO0FBSEE7QUFLQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFDQTtBQXhCQTtBQWhCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHVCQURBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsOEJBRkE7QUFHQTtBQUhBO0FBS0EsR0FSQTtBQVNBO0FBQ0EsdUVBREE7QUFFQSw2RUFGQTtBQUdBLHlFQUhBO0FBSUEsNkVBSkE7QUFLQTtBQUxBLEdBVEE7QUFnQkEsU0FoQkEscUJBZ0JBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBZkE7QUFpQkEsR0F0Q0E7QUF1Q0E7QUFDQSxrQkFEQSwwQkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEE7QUF2Q0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBRUE7QUFDQSx1QkFEQTtBQUVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQTtBQUtBLEdBUkE7QUFTQSxTQVRBLHFCQVNBO0FBQ0E7QUFDQTtBQUNBLEdBWkE7QUFhQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLFVBbkJBLG9CQW1CQTtBQUNBO0FBQ0E7QUFyQkE7QUFiQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUNBLHVCQURBO0FBRUE7QUFDQTtBQUNBLGlCQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FSQTtBQVNBLFNBVEEscUJBU0E7QUFDQTtBQUNBO0FBQ0EsR0FaQTtBQWFBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLE9BRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkEsVUEzQkEsb0JBMkJBO0FBQ0E7QUFDQTtBQTdCQTtBQWJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUNBLHVCQURBO0FBRUEsU0FGQSxxQkFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBO0FBRkE7QUFJQSxHQVJBO0FBU0E7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUFLQTtBQUNBLG9KQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBRUEsT0FWQSxFQVdBLEtBWEEsQ0FXQTtBQUNBO0FBQ0EsT0FiQTtBQWNBO0FBNUJBO0FBVEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFEQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwQkE7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQSxzQ0FEQTtBQUVBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHNCQUZBO0FBR0EsdUJBSEE7QUFJQTtBQUpBO0FBTUEsR0FUQTtBQVVBO0FBQ0E7QUFEQSxHQVZBO0FBYUEsU0FiQSxxQkFhQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F4QkE7QUF5QkE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFSQSxHQXpCQTtBQW1DQTtBQUNBLGFBREEscUJBQ0EsVUFEQSxFQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0tBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBRUEsT0FWQSxFQVdBLEtBWEEsQ0FXQTtBQUNBO0FBQ0EsT0FiQTtBQWNBLEtBbkJBO0FBb0JBLGVBcEJBLHVCQW9CQSxVQXBCQSxFQW9CQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxLQTVCQTtBQTZCQSxrQkE3QkEsMEJBNkJBLE1BN0JBLEVBNkJBO0FBQ0E7QUFDQTtBQS9CQTtBQW5DQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0Esa0VBREE7QUFFQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBSUEsR0FQQTtBQVFBO0FBQ0E7QUFEQSxHQVJBO0FBV0EsU0FYQSxxQkFXQTtBQUNBO0FBQ0E7QUFDQSxHQWRBO0FBZUE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsV0FKQSxxQkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLFdBUEEscUJBT0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FqQkE7QUFrQkEsY0FsQkEsd0JBa0JBO0FBQ0E7QUFDQSxLQXBCQTtBQXFCQSxVQXJCQSxvQkFxQkE7QUFDQTtBQUNBLEtBdkJBO0FBd0JBLGdCQXhCQSx3QkF3QkEsUUF4QkEsRUF3QkE7QUFBQTs7QUFDQTtBQUNBLHNMQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBRUEsT0FUQSxFQVVBLEtBVkEsQ0FVQTtBQUNBO0FBQ0EsT0FaQTtBQWFBO0FBdkNBO0FBZkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDV0E7QUFDQTtBQUVBO0FBQ0EsMkZBREE7QUFFQTtBQUNBO0FBQ0EsNkNBREE7QUFFQSxtQkFGQTtBQUdBO0FBSEE7QUFLQSxHQVJBO0FBU0E7QUFDQTtBQURBLEdBVEE7QUFZQSxTQVpBLHFCQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FoQkE7QUFpQkEsU0FqQkEscUJBaUJBO0FBQUE7O0FBQ0E7QUFLQSx1Q0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUVBLEtBUkEsRUFTQSxLQVRBLENBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxHQXBDQTtBQXFDQTtBQUNBLG1CQURBLDJCQUNBLElBREEsRUFDQSxRQURBLEVBQ0EsVUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7O0FBQUE7QUFPQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQTtBQUNBLEtBZkE7QUFnQkEsaUJBaEJBLHlCQWdCQSxJQWhCQSxFQWdCQSxRQWhCQSxFQWdCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQXJDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQSwyRkFEQTtBQUVBO0FBQ0E7QUFDQSw2Q0FEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQTtBQUtBLEdBUkE7QUFTQTtBQUNBO0FBREEsR0FUQTtBQVlBLFNBWkEscUJBWUE7QUFDQTtBQUNBLEdBZEE7QUFlQTtBQWZBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHlGQURBO0FBRUEscUJBRkE7QUFHQTtBQUNBO0FBQ0EsNkNBREE7QUFFQSxtQkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQTtBQU1BLEdBVkE7QUFXQTtBQUNBLGtIQURBO0FBRUE7QUFGQSxHQVhBO0FBZUEsU0FmQSxxQkFlQTtBQUNBLDZCQURBLENBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBMUJBO0FBMkJBO0FBQ0EsV0FEQSxtQkFDQSxJQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBRUEsa0VBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUxBLE1BS0E7QUFDQTtBQUNBO0FBRUEsT0FYQSxFQVlBLEtBWkEsQ0FZQTtBQUNBO0FBQ0EsT0FkQTtBQWVBO0FBcEJBO0FBM0JBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUVBO0FBQ0EsMkZBREE7QUFFQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSwyREFGQTtBQUdBLCtFQUhBO0FBS0EsK0JBTEEsQ0FLQTs7QUFMQTtBQU9BLEdBVkE7QUFXQSxjQVhBO0FBY0EsU0FkQSxxQkFjQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQSxHQXZCQTtBQXdCQTtBQXhCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQSx5RkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFDQTtBQUNBLHFFQURBO0FBRUEsa0JBRkE7QUFHQSxlQUhBO0FBSUEsb0JBSkE7QUFLQTtBQUxBO0FBT0EsR0FYQTtBQVlBO0FBQ0Esc0hBREE7QUFFQTtBQUZBLEdBWkE7QUFnQkEsU0FoQkEscUJBZ0JBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUVBLGlFQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFFQSxLQVRBLEVBVUEsS0FWQSxDQVVBO0FBQ0E7QUFDQSxLQVpBO0FBZUEsR0EzQ0E7QUE0Q0E7QUFDQSxhQURBLHFCQUNBLElBREEsRUFDQSxJQURBLEVBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FiQTtBQWNBLFNBZEEsaUJBY0EsSUFkQSxFQWNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FyQkE7QUFzQkEsYUF0QkEscUJBc0JBLEtBdEJBLEVBc0JBLElBdEJBLEVBc0JBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQTtBQUNBLEtBL0JBO0FBZ0NBLGVBaENBLHVCQWdDQSxLQWhDQSxFQWdDQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUE7QUFDQSxLQXpDQTtBQTBDQSxlQTFDQSx1QkEwQ0EsS0ExQ0EsRUEwQ0EsSUExQ0EsRUEwQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBR0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBMURBO0FBMkRBLGdCQTNEQSx3QkEyREEsS0EzREEsRUEyREE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBOztBQUFBO0FBR0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBM0VBO0FBNUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsMkZBREE7QUFFQSxrQ0FGQTtBQUdBO0FBQ0E7QUFDQSwwREFEQTtBQUVBLHNCQUZBO0FBR0EsaUJBSEE7QUFJQSxpQkFKQTtBQUtBLGVBTEE7QUFNQSwwQkFOQTtBQU9BO0FBUEE7QUFTQSxHQWJBO0FBY0E7QUFDQSxrSEFEQTtBQUVBLHFHQUZBO0FBR0EseUZBSEE7QUFJQSxzSEFKQTtBQUtBO0FBTEEsR0FkQTtBQXFCQSxTQXJCQSxxQkFxQkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBSUE7QUFDQTtBQUNBLEtBRkE7QUFJQTtBQUNBLEdBaENBO0FBaUNBO0FBQ0EsV0FEQSxtQkFDQSxJQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtGQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBRUEsT0FSQSxFQVNBLEtBVEEsQ0FTQTtBQUNBO0FBQ0EsT0FYQTtBQWNBLEtBdkJBO0FBd0JBLFVBeEJBLGtCQXdCQSxJQXhCQSxFQXdCQTtBQUFBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNHQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUVBLE9BWkEsRUFhQSxLQWJBLENBYUE7QUFDQTtBQUNBLE9BZkE7QUFnQkEsS0EvQ0E7QUFnREEsUUFoREEsZ0JBZ0RBLFFBaERBLEVBZ0RBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxPQUhBO0FBSUEsS0EzREE7QUE0REE7QUFDQSw0QkE3REEsc0NBNkRBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGNBRUEsT0FGQTtBQUdBO0FBQ0E7QUFDQSxXQUZBO0FBSEE7O0FBRUE7QUFBQTtBQUlBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLEtBcEVBO0FBcUVBO0FBQ0EseUJBdEVBLG1DQXNFQTtBQUFBOztBQUNBOztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsZ0JBRUEsT0FGQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxlQUZBO0FBR0E7QUFDQTtBQVJBOztBQUVBO0FBQUE7QUFPQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBLEtBbkZBO0FBb0ZBO0FBQ0EsY0FyRkEsc0JBcUZBLE9BckZBLEVBcUZBO0FBQ0Esd0NBREEsQ0FHQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQWZBLENBaUJBOzs7QUFqQkE7QUFBQTtBQUFBOztBQUFBO0FBa0JBO0FBQUE7QUFDQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQkEsS0ExR0E7QUEyR0EsUUEzR0EsZ0JBMkdBLENBM0dBLEVBMkdBO0FBQ0E7QUFDQTtBQUNBLEtBOUdBO0FBK0dBLFNBL0dBLGlCQStHQSxJQS9HQSxFQStHQTtBQUNBO0FBQ0EsS0FqSEE7QUFrSEEsZ0JBbEhBLHdCQWtIQSxJQWxIQSxFQWtIQTtBQUNBO0FBQ0E7QUFwSEE7QUFqQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxnQ0FEQTtBQUVBLFNBRkEscUJBRUEsQ0FDQSxDQUhBO0FBSUEsU0FKQSxxQkFJQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLGVBRkE7QUFHQTtBQUhBO0FBTUE7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQWZBO0FBZ0JBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsRUFHQSxHQUhBO0FBSUEsS0FYQTtBQVlBLFVBWkEsb0JBWUE7QUFBQTs7QUFDQTtBQUNBO0FBREEsU0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUVBLE9BVkEsRUFXQSxLQVhBLENBV0E7QUFDQTtBQUNBLE9BYkE7QUFlQTtBQTVCQTtBQWhCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLDJGQURBO0FBRUEsc0JBRkE7QUFHQTtBQUNBO0FBQ0EsK0VBREE7QUFFQTtBQUZBO0FBSUEsR0FSQTtBQVNBO0FBQ0E7QUFEQSxHQVRBO0FBWUEsU0FaQSxxQkFZQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUEsa0VBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQSxPQUxBLE1BS0E7QUFDQTtBQUNBO0FBRUEsS0FYQSxFQVlBLEtBWkEsQ0FZQTtBQUNBO0FBQ0EsS0FkQTtBQWVBO0FBdkNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS0E7QUFDQTtBQUNBO0FBQUE7QUFBQSxLQURBO0FBRUE7QUFBQTtBQUFBO0FBRkEsR0FEQTtBQUtBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQSxHQVZBO0FBV0EsU0FYQSxxQkFXQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBRUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBLEdBMUNBO0FBMkNBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQWZBO0FBZ0JBLGFBaEJBLHFCQWdCQSxNQWhCQSxFQWdCQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUEzQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esb0ZBREE7QUFFQSxpQkFGQTtBQUdBO0FBQ0E7QUFFQSxHQU5BO0FBT0E7QUFDQSx5RkFEQTtBQUVBO0FBRkEsR0FQQTtBQVdBLFNBWEEscUJBV0E7QUFDQTtBQUVBLGdCQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQSxLQURBO0FBTUE7QUFDQTtBQXJCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFFQTtBQUNBLG9GQURBO0FBRUEsaUJBRkE7QUFHQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBSUEsR0FSQTtBQVNBLFNBVEEscUJBU0E7QUFDQSwyREFEQSxDQUdBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBbEJBO0FBbUJBO0FBbkJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEEsR0FQQTtBQVlBLFNBWkEscUJBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWhCQTtBQWlCQTtBQUNBLFdBREEsbUJBQ0EsT0FEQSxFQUNBO0FBQ0E7QUFDQSwrRUFDQSxNQURBLEdBRUEsb0JBRkE7QUFJQTtBQUNBO0FBUkE7QUFqQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQU5BO0FBT0EsU0FQQSxxQkFPQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxLQUhBLENBS0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7O0FBQUE7QUFZQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BWkEsUUFZQSxnQkFaQTs7QUFjQTtBQUNBLEtBbkJBLENBcEJBLENBeUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsT0FKQSxFQUlBLEdBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQSxLQWRBLENBNUNBLENBNERBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0EsK0JBREEsQ0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE9BcEJBO0FBcUJBO0FBRUE7QUE5RkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkEsRzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSxnQkFQQTs7QUFRQTs7Ozs7O0FBTUE7QUFkQTtBQWdCQSxHQWxCQTtBQW1CQTtBQUNBOzs7Ozs7QUFNQSxZQVBBLG9CQU9BLEtBUEEsRUFPQTtBQUNBO0FBQ0EsS0FUQTtBQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQTtBQUNBLEtBZkE7QUFnQkEsYUFoQkEsdUJBZ0JBO0FBQ0E7QUFDQSxLQWxCQTs7QUFtQkE7Ozs7O0FBS0EsV0F4QkEsbUJBd0JBLEtBeEJBLEVBd0JBLE9BeEJBLEVBd0JBO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUEvQkE7QUFuQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BOzs7OztBQUtBOzs7O0FBSUE7QUFDQSxvQkFEQSxDQUNBOztBQUNBLHdCQUZBLENBRUE7O0FBQ0EsdUJBSEEsQ0FHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBTkE7O0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQU5BOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FKQTtBQUtBLENBMUJBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUFMQSxHQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBO0FBQ0E7QUFDQTtBQU5BLEdBWEE7QUFtQkE7QUFDQTtBQUNBLHlCQURBO0FBRUEsNEJBRkE7QUFHQTtBQUhBO0FBS0EsR0F6QkE7QUEwQkEsU0ExQkEscUJBMEJBO0FBQ0E7QUFDQSxHQTVCQTtBQTZCQTtBQUNBLGFBREEsdUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxlQUpBLHlCQUlBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBO0FBR0EsT0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQWxCQTtBQTdCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVBO0FBQ0EsbUZBREE7QUFFQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQSxHOzs7Ozs7Ozs7OztBQ1pBLGFBQWEsbUJBQU8sQ0FBQyx1R0FBb0Q7QUFDekUsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyw2SUFBNkksc0NBQXNDLHlDQUF5QyxpQ0FBaUMsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsaUNBQWlDLDBCQUEwQixzQkFBc0IsbUJBQW1CLEdBQUcsOEJBQThCLHVCQUF1QixxQkFBcUIsc0JBQXNCLHNCQUFzQixHQUFHLGdDQUFnQyx1QkFBdUIsY0FBYyxHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxtQ0FBbUMsbUJBQW1CLEdBQUcsNEJBQTRCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLG1CQUFtQixHQUFHLDJDQUEyQyx1QkFBdUIscUJBQXFCLGlCQUFpQixHQUFHLHFDQUFxQyxzQkFBc0IsR0FBRyxpREFBaUQscUJBQXFCLEdBQUcsdUNBQXVDLHNCQUFzQixHQUFHLG1EQUFtRCxxQkFBcUIsc0JBQXNCLEdBQUcsOEJBQThCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcseUVBQXlFLHVCQUF1QixHQUFHLDBDQUEwQyxtQkFBbUIsd0JBQXdCLEdBQUcsbURBQW1ELG1CQUFtQixnQkFBZ0IsR0FBRyxzREFBc0QscUJBQXFCLHdCQUF3Qix1QkFBdUIsOEJBQThCLGtCQUFrQixtQkFBbUIsaUJBQWlCLEdBQUcseUNBQXlDLG1CQUFtQixlQUFlLHVCQUF1QiwwQkFBMEIsR0FBRywrRkFBK0YsbUJBQW1CLGdCQUFnQix1QkFBdUIsdUJBQXVCLHNCQUFzQixHQUFHLGtEQUFrRCxxQkFBcUIsdUJBQXVCLEdBQUcsd0NBQXdDLHFCQUFxQixHQUFHLGtEQUFrRCwwQkFBMEIsaUJBQWlCLEdBQUcscUNBQXFDLGVBQWUsR0FBRyxtR0FBbUcsZUFBZSx3QkFBd0IsR0FBRyx1REFBdUQsMEJBQTBCLG1CQUFtQixrQkFBa0IsR0FBRyxzREFBc0QsZ0JBQWdCLEdBQUcsOENBQThDLGdCQUFnQixHQUFHLGtEQUFrRCx1QkFBdUIscUJBQXFCLEdBQUcsaURBQWlELHFCQUFxQix3QkFBd0IsdUJBQXVCLDhCQUE4QixpQkFBaUIsbUJBQW1CLGlCQUFpQixvQkFBb0IsR0FBRyxzQ0FBc0MseUJBQXlCLEdBQUcsc0NBQXNDLHdCQUF3QixpQkFBaUIsOEJBQThCLHNCQUFzQixxQkFBcUIsR0FBRyxzR0FBc0csa0JBQWtCLEdBQUcsb0dBQW9HLHFCQUFxQixHQUFHLHVJQUF1SSxtQkFBbUIsb0JBQW9CLEdBQUcseUpBQXlKLG1CQUFtQixHQUFHLDRCQUE0Qix3QkFBd0IsdUJBQXVCLEdBQUcsdUNBQXVDLCtCQUErQixtQkFBTyxDQUFDLHVFQUE2QixRQUFRLEdBQUcsNkJBQTZCLGdDQUFnQyxHQUFHLDJDQUEyQyx1QkFBdUIscUJBQXFCLEdBQUcsNkNBQTZDLGtCQUFrQixzQkFBc0Isb0JBQW9CLEdBQUcsMENBQTBDLHFCQUFxQixrQkFBa0Isd0JBQXdCLHVCQUF1QixnQkFBZ0Isb0JBQW9CLEdBQUc7O0FBRWpqSjs7Ozs7Ozs7Ozs7O0FDUkEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsdUJBQXVCLDJCQUEyQixnQkFBZ0Isb0JBQW9CLGlCQUFpQixlQUFlLHFCQUFxQixrQkFBa0IsR0FBRyw0QkFBNEIsdUJBQXVCLDJCQUEyQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixXQUFXLFlBQVksR0FBRzs7QUFFblc7Ozs7Ozs7Ozs7OztBQ1BBLDJCQUEyQixtQkFBTyxDQUFDLHlHQUF3RDtBQUMzRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsd0JBQXdCLG9CQUFvQixHQUFHLGlDQUFpQyxtQkFBbUIsR0FBRzs7QUFFN0g7Ozs7Ozs7Ozs7OztBQ1BBLDJCQUEyQixtQkFBTyxDQUFDLHlHQUF3RDtBQUMzRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsMENBQTBDLHFCQUFxQixrQkFBa0IsR0FBRyxzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLCtCQUErQixxQkFBcUIsR0FBRywrQkFBK0IsNEJBQTRCLDhCQUE4QixHQUFHLGlDQUFpQyxjQUFjLHVCQUF1QixHQUFHOztBQUU3WTs7Ozs7Ozs7Ozs7O0FDUEEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxrQ0FBa0MsaUJBQWlCLGtCQUFrQixHQUFHLG1DQUFtQyx1QkFBdUIsdUJBQXVCLG1CQUFtQixxQkFBcUIsR0FBRywwQkFBMEIsdUJBQXVCLEdBQUcsaUNBQWlDLHFCQUFxQixpQkFBaUIsY0FBYyxHQUFHOztBQUV2Vzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7OztBQzlRQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FB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Q0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQTtBQUFBO0FBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQTJjLENBQWdCLGdjQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7OztBQVFBLElBQUk1TSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBRXhCO0FBQ0EsT0FBS2tOLElBQUwsR0FBWSxJQUFaO0FBQ0gsQ0FKRDs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUMrRDtBQUNMOzs7QUFHMUQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNqQ2Y7QUFBQTtBQUFBLHdDQUFxTSxDQUFnQixxUEFBRyxFQUFDLEMiLCJmaWxlIjoiZ3JhZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR3JhZGVzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkdyYWRlc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPCEtLVxyXG5AZmlsZVxyXG5CYXNlIGNvbXBvbmVudCBmb3IgY29uc29sZSBwYWdlcy5cclxuXHJcblByb3ZpZGVzOlxyXG5uYXYyIG1lbnUgc3VwcG9ydCB3aXRoIGF1dG9tYXRpYyByZW1vdmFsLlxyXG4tLT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgVXNlclZ1ZUJhc2UgZnJvbSAndXNlcnMtY2wvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAnZXh0ZW5kcyc6IFVzZXJWdWVCYXNlLFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEFkZCBhbiBvcHRpb24gdG8gdGhlIG5hdjIgbWVudS5cclxuICAgICAgICAgICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgb3B0aW9uIHRvIGFkZC5cclxuICAgICAgICAgICAqIEBwYXJhbSBvcmRlciBPcmRlciBpbiB0aGUgbWVudS5cclxuICAgICAgICAgICAqIEBwYXJhbSBjbG9zdXJlIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzZWxlY3RlZC5cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgYWRkTmF2Mih0aXRsZSwgb3JkZXIsIGNsb3N1cmUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMuYWRkTmF2MkxpbmsodGhpcywgdGl0bGUsIG9yZGVyLCBjbG9zdXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMxLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQWRkIGFuIG9wdGlvbiB0byB0aGUgbmF2MiBtZW51IHRoYXQgaXMgYSByb3V0ZXIgbGlua1xyXG4gICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSBvcHRpb24gdG8gYWRkLlxyXG4gICAgICAgICAgICogQHBhcmFtIG9yZGVyIE9yZGVyIGluIHRoZSBtZW51LlxyXG4gICAgICAgICAgICogQHBhcmFtIGxpbmsgTGluayB3aXRob3V0IFNpdGUucm9vdFxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBhZGROYXYyTGluayh0aXRsZSwgb3JkZXIsIGxpbmspIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZE5hdjIodGl0bGUsIG9yZGVyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFNpdGUucm9vdCArIGxpbmspO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICByZW1vdmVOYXYyKGl0ZW0pIHtcclxuICAgICAgICAgICAgICBsZXQgaSA9IHRoaXMuY29tcG9uZW50czEuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgICAgICBpZihpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzMS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMucmVtb3ZlTmF2Mih0aGlzLCBpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgXHR0aGlzLmNvbXBvbmVudHMxID0gW107XHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICAgIFx0dGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMucmVtb3ZlTmF2Mih0aGlzLCB0aGlzLmNvbXBvbmVudHMxKTtcclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHNsb3QgOnVzZXI9XCJ1c2VyXCI+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgRmV0Y2hlclZ1ZSBmcm9tICd1c2Vycy1jbC9qcy9MaWIvRmV0Y2hlclZ1ZS52dWUnO1xyXG4gIGltcG9ydCB7U3R1ZGVudHNPbmx5fSBmcm9tICcuL1N0dWRlbnRzT25seSc7XHJcbiAgaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4uLy4uL01lbWJlcnMvTWVtYmVyJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbGxpbms6IHtcclxuICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB1c2VyOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICBpZCh0bywgZnJvbSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZmV0Y2goKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBmZXRjaCgpIHtcclxuICAgICAgICAgIFx0ICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgICBcdCAgXHRpZDogdGhpcy5pZFxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYoU3R1ZGVudHNPbmx5LmdldCgpKSB7XHJcbiAgICAgICAgICAgICAgXHRxdWVyeS5yb2xlID0gTWVtYmVyLlNUVURFTlQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbWVtYmVycy9nZXQnLCBxdWVyeSlcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXIudXNlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZmV0Y2hlZCcsIHRoaXMudXNlcik7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgobXNnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZhaWxsaW5rICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOiBTaXRlLnJvb3QgKyB0aGlzLmZhaWxsaW5rfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiByZWY9XCJzdHVkZW50cy1vbmx5XCIgPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwic3R1ZGVudHNcIiBAY2hhbmdlPVwic3R1ZGVudHNPbmx5Q2hhbmdlZFwiPiBTdHVkZW50cyBPbmx5PC9sYWJlbD5cclxuICAgICAgPGZldGNoZXIgOmZldGNoZXI9XCJmZXRjaGVyXCIgOmZldGNoaW5nPVwiZmV0Y2hpbmdcIj5cclxuICAgICAgICA8c2xvdCA6dXNlcnM9XCJ1c2Vyc1wiIDpzdHVkZW50cz1cInN0dWRlbnRzXCI+PC9zbG90PlxyXG4gICAgICAgIDxwIHYtaWY9XCJ1c2Vycy5sZW5ndGggPT0gMFwiIGNsYXNzPVwiY2VudGVyYm94IGNvbXAgY2VudGVyXCI+XHJcbiAgICAgICAgICBUaGVyZSBhcmUgY3VycmVudGx5IG5vIG1lbWJlcnMgZW5yb2xsZWQgaW4gdGhpcyBzZWN0aW9uLjwvcD5cclxuICAgICAgPC9mZXRjaGVyPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7bWFwU3RhdGV9IGZyb20gJ3Z1ZXgnO1xyXG4gICAgaW1wb3J0IEZldGNoZXJWdWUgZnJvbSAndXNlcnMtY2wvanMvTGliL0ZldGNoZXJWdWUudnVlJztcclxuICAgIGltcG9ydCB7TWVtYmVyfSBmcm9tICcuLi8uLi9NZW1iZXJzL01lbWJlcidcclxuICAgIGltcG9ydCB7U3R1ZGVudHNPbmx5fSBmcm9tICcuL1N0dWRlbnRzT25seSc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZW1iZXIgZmV0Y2hlciBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCBieSB2aWV3cy5cclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RydWN0b3IgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIC8vIElmIHRoZSBmZXRjaGluZyB2YWx1ZSBpdCB0cnVlLCB0aGUgdXNpbmcgY2xpZW50XHJcbiAgICAgICAgLy8gaXMgZmV0Y2hpbmcgbW9yZSB0aGFuIGp1c3QgdGhlIG1lbWJlcnNoaXAgYW5kIHdlIHdpbGxcclxuICAgICAgICAvLyB3YWl0IGZvciB0aGF0IGFzIHdlbGwuXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZmV0Y2hpbmc6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzRWxlbWVudDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZldGNoTW9yZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL21vcmUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEFkZCBcIlN0dWRlbnRzIE9ubHlcIiB0byB0aGUgbWVudSBiYXJcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBhZGRTdHVkZW50c09ubHkoKSB7XHJcbiAgICAgICAgICAgIFx0dGhpcy5zdHVkZW50cyA9IFN0dWRlbnRzT25seS5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ3N0dWRlbnRzLW9ubHknXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgICAgICAgICAgZXh0cmEuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0dWRlbnRzT25seUNoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgIFx0U3R1ZGVudHNPbmx5LnNldCh0aGlzLnN0dWRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcnMoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0dWRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLnJvbGUoKSA9PT0gTWVtYmVyLlNUVURFTlRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoZXI6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMuZmV0Y2hlclxyXG5cclxuICAgICAgICB9KSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBTdHVkZW50c09ubHkuZ2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21lbWJlcnMvcXVlcnknLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2ZldGNoJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3R1ZGVudHNPbmx5KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHVkZW50c0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnN0dWRlbnRzRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGxldCBleHRyYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsndXNlciddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgbGluazogJycsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICB1c2VyOiBmdW5jdGlvbih0bywgZm0pIHtcclxuICAgICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMudXNlcjtcclxuICAgICAgICAgICAgICBsZXQgbGluayA9IHRoaXMubGluaztcclxuXHJcblx0ICAgICAgICAgICAgICBpZih1c2VyICE9PSBudWxsICYmIHVzZXIucHJldiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHQgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cywgJ25hdjJsZWZ0Jywge1xyXG5cdFx0XHQgICAgICAgICAgICAgIHRlbXBsYXRlOiBgPHJvdXRlci1saW5rIHRpdGxlPVwiUHJldmlvdXMgTWVtYmVyXCIgOnRvPVwibGluayArIHVzZXIucHJldi5tZW1iZXIuaWRcIj48aW1nIDpzcmM9XCJpY29uXCIgYWx0PVwiUHJldmlvdXMgTWVtYmVyXCI+PC9yb3V0ZXItbGluaz5gLFxyXG5cdFx0XHQgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgaWNvbjogU2l0ZS5yb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvcHJldmljb24ucG5nJyxcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgdXNlcjogdXNlcixcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgbGluazogbGlua1xyXG5cdFx0XHRcdCAgICAgICAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMsICduYXYybGVmdCcsIG51bGwpO1xyXG5cdCAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgIGlmKHVzZXIgIT09IG51bGwgJiYgdXNlci5uZXh0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdCAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLCAnbmF2MnJpZ2h0Jywge1xyXG5cdFx0XHQgICAgICAgICAgICAgIHRlbXBsYXRlOiBgPHJvdXRlci1saW5rIHRpdGxlPVwiTmV4dCBNZW1iZXJcIiA6dG89XCJsaW5rICsgdXNlci5uZXh0Lm1lbWJlci5pZFwiPjxpbWcgOnNyYz1cImljb25cIiBhbHQ9XCJOZXh0IE1lbWJlclwiPjwvcm91dGVyLWxpbms+YCxcclxuXHRcdFx0ICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQgICAgICAgICAgICAgIHJldHVybiB7XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgIGljb246IHRoaXMuJHNpdGUucm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL25leHRpY29uLnBuZycsXHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgIGxpbms6IGxpbmtcclxuXHRcdFx0XHQgICAgICAgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLCAnbmF2MnJpZ2h0JywgbnVsbCk7XHJcblx0ICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgIC8vIERldGVybWluZSB0aGUgcGF0aFxyXG4gICAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuJHJvdXRlLnBhdGg7XHJcblxyXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBtZW1iZXIgSUQgZnJvbSB0aGUgZW5kXHJcbiAgICAgICAgICBjb25zdCByZSA9IC8oXi4qKVxcLyhbMC05XSspJC87XHJcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IHBhdGgubWF0Y2gocmUpO1xyXG4gICAgICAgICAgaWYobWF0Y2ggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxpbmsgPSBtYXRjaFsxXSArICcvJztcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cywgJ25hdjJsZWZ0JywgbnVsbCk7XHJcbiAgICAgICAgICB0aGlzLiRzZXQodGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMsICduYXYycmlnaHQnLCBudWxsKTtcclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiB2LWZvcj1cInN1Ym1pc3Npb24gaW4gc3VibWlzc2lvbnNcIj5cclxuICAgICAgPGgyPnt7c3VibWlzc2lvbi5uYW1lfX08L2gyPlxyXG4gICAgICA8c3VibWlzc2lvbi12dWUgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCI+PC9zdWJtaXNzaW9uLXZ1ZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgU3VibWlzc2lvblZ1ZSBmcm9tICcuLi9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlJztcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IFsndXNlcicsICdhc3NpZ250YWcnXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRhc3NpZ25tZW50OiBudWxsLFxyXG5cdFx0XHRcdHN1Ym1pc3Npb25zOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG4gICAgd2F0Y2g6IHtcclxuXHRcdFx0dXNlcigpIHtcclxuXHRcdFx0XHR0aGlzLnN1Ym1pc3Npb25zID0gW107XHJcblx0XHRcdFx0dGhpcy5mZXRjaCh0aGlzLnVzZXIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRzdWJtaXNzaW9uVnVlOiBTdWJtaXNzaW9uVnVlXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5mZXRjaCh0aGlzLnVzZXIpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZmV0Y2godXNlcikge1xyXG5cdFx0XHRcdGxldCBzZWN0aW9uID0gdXNlci5tZW1iZXIuZ2V0U2VjdGlvbih0aGlzLiRzdG9yZSk7XHJcblx0XHRcdFx0dGhpcy5hc3NpZ25tZW50ID0gdXNlci5tZW1iZXIuZ2V0QXNzaWdubWVudCh0aGlzLiRzdG9yZSwgdGhpcy5hc3NpZ250YWcpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmFzc2lnbm1lbnQuc3VibWlzc2lvbnMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0Ly8gVGhpcyBhc3NpZ25tZW50IGhhcyBubyBzdWJtaXNzaW9uc1xyXG5cdFx0XHRcdFx0dGhpcy5zdWJtaXNzaW9ucyA9IFtdO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0U2l0ZS5hcGkuZ2V0KCcvYXBpL2NvdXJzZS9zdWJtaXNzaW9uL3N1Ym1pc3Npb25zLycgK1xyXG5cdFx0XHRcdFx0dGhpcy5hc3NpZ250YWcgKyAnLycgKyB1c2VyLm1lbWJlci5pZCwge30pXHJcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3VibWlzc2lvbnMgPSByZXNwb25zZS5nZXREYXRhQWxsKCdzdWJtaXNzaW9ucycpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3VibWlzc2lvbnMgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN1Ym1pc3Npb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1Ym1pc3Npb25zLnB1c2goc3VibWlzc2lvbnNbaV0uYXR0cmlidXRlcyk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1Ym1pc3Npb25zW2ldLnVzZXIgPSB1c2VyO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHAgdi1mb3I9XCJsaW5rIGluIGxpbmtzXCIgdi1pZj1cInVzZXIuYXRMZWFzdChsaW5rLmF0TGVhc3QpXCIgY2xhc3M9XCJjZW50ZXJcIj48YSA6aHJlZj1cInJvb3QgKyBsaW5rLnVybFwiPnt7bGluay50ZXh0fX08L2E+PC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgQ29uc29sZUNvbXBvbmVudEJhc2UgZnJvbSAnY29uc29sZS1jbC9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUnO1xyXG5cdGltcG9ydCB7TWVtYmVyfSBmcm9tICcuLi9NZW1iZXJzL01lbWJlcic7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuXHQgICdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICBwcm9wczogWydhc3NpZ25tZW50J10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgIFx0cmV0dXJuIHtcclxuICAgIFx0XHRsaW5rczogW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcblx0ICBcdGFzc2lnbm1lbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdCAgXHRcdHRoaXMudGFrZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy50YWtlKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0YWtlKCkge1xyXG4gICAgICBcdGlmKHRoaXMuYXNzaWdubWVudCAhPT0gbnVsbCkge1xyXG4gICAgICBcdFx0dGhpcy5saW5rcyA9IFtdO1xyXG5cclxuXHQgICAgICAgIC8vIENvbGxlY3QgdXAgdGhlIHN1Ym1pc3Npb24gbGlua3NcclxuXHQgICAgICAgIGlmICh0aGlzLmFzc2lnbm1lbnQuc3VibWlzc2lvbnMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0ICAgICAgICBmb3IgKGxldCBzdWJtaXNzaW9uIG9mIHRoaXMuYXNzaWdubWVudC5zdWJtaXNzaW9ucykge1xyXG5cdFx0ICAgICAgICBcdGxldCBidWxrID0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0J1bGsgZG93bmxvYWQgb2YgJyArIHN1Ym1pc3Npb24ubmFtZSxcclxuICAgICAgICAgICAgICAgIHVybDogJy9jbC9jb3Vyc2Uvc3VibWlzc2lvbnMvJyArIHRoaXMuYXNzaWdubWVudC50YWcgKyAnLycgKyBzdWJtaXNzaW9uLnRhZyxcclxuICAgICAgICAgICAgICAgIGF0TGVhc3Q6IE1lbWJlci5TVEFGRlxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKGJ1bGspO1xyXG5cclxuXHRcdFx0ICAgICAgICBpZiAoc3VibWlzc2lvbi5saW5rcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0ICAgICAgICBmb3IgKGxldCBsaW5rIG9mIHN1Ym1pc3Npb24ubGlua3MpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgdGhpcy5saW5rcy5wdXNoKGxpbmspO1xyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHQgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblx0ICB9XHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1zdWJtaXNzaW9uXCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJzdWJtaXNzaW9uLnN1Ym1pdFwiIGNsYXNzPVwiXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cIiFzdWJtaXNzaW9uLm9wZW5cIj5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBjb21wIGNlbnRlclwiPlRoaXMgYXNzaWdubWVudCBpcyBub3Qgb3BlbiBmb3Igc3VibWlzc2lvbnMuPC9wPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInN0YWZmXCIgY2xhc3M9XCJjZW50ZXJib3ggcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj48ZW0+Li4uU3RhZmYgb25seSBmb3Igc3VibWlzc2lvbiB0ZXN0aW5nLi4uPC9lbT48L3A+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDppcz1cInN1Ym1pdHRlclwiIHYtb246bmV3X3N1Ym1pc3Npb25zPVwibmV3U3VibWlzc2lvbnNcIj48L2NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjb21wb25lbnQgdi1pZj1cInN1Ym1pc3Npb24ub3BlblwiIDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDppcz1cInN1Ym1pdHRlclwiIHYtb246bmV3X3N1Ym1pc3Npb25zPVwibmV3U3VibWlzc2lvbnNcIj48L2NvbXBvbmVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN1Ym1pdHRlZCA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6c3VibWlzc2lvbnM9XCJzdWJtaXNzaW9uc1wiPjwvc3VibWl0dGVkPlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5hZGRpdGlvbmFsICE9PSBudWxsXCIgdi1odG1sPVwic3VibWlzc2lvbi5hZGRpdGlvbmFsXCIgY2xhc3M9XCJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vTWVtYmVycy9NZW1iZXInO1xyXG4gICAgaW1wb3J0IFN1Ym1pdFRleHRWdWUgZnJvbSAnLi9TdWJtaXRUZXh0LnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0UHJvZ3JhbVZ1ZSBmcm9tICcuL1N1Ym1pdFByb2dyYW0udnVlJztcclxuICAgIGltcG9ydCBTdWJtaXRJbWFnZVZ1ZSBmcm9tICcuL1N1Ym1pdEltYWdlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0VW5rbm93blZ1ZSBmcm9tICcuL1N1Ym1pdFVua25vd24udnVlJztcclxuICAgIGltcG9ydCBTdWJtaXR0ZWRWdWUgZnJvbSAnLi9TdWJtaXR0ZWQudnVlJztcclxuICAgIGltcG9ydCB7VEVYVF9UWVBFU30gZnJvbSAnLi9TdWJtaXR0ZWRJdGVtLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBzdGFmZjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VibWl0dGVyOiAnc3VibWl0LXRleHQnLFxyXG4gICAgICAgICAgICAgIHN1Ym1pc3Npb25zOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICBzdWJtaXRUZXh0OiBTdWJtaXRUZXh0VnVlLFxyXG4gICAgICAgICAgc3VibWl0UHJvZ3JhbTogU3VibWl0UHJvZ3JhbVZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdEltYWdlOiBTdWJtaXRJbWFnZVZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdFVua25vd246IFN1Ym1pdFVua25vd25WdWUsXHJcbiAgICAgICAgICBzdWJtaXR0ZWQ6IFN1Ym1pdHRlZFZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICBcdHRoaXMuc3VibWlzc2lvbnMgPSB0aGlzLnN1Ym1pc3Npb24uc3VibWlzc2lvbnM7XHJcblxyXG4gICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcbiAgICAgICAgICB0aGlzLnN0YWZmID0gdXNlci5hdExlYXN0KE1lbWJlci5TVEFGRik7XHJcbiAgICAgICAgICBzd2l0Y2godGhpcy5zdWJtaXNzaW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlICdwcm9ncmFtJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LXByb2dyYW0nO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC10ZXh0JztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LWltYWdlJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC11bmtub3duJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBuZXdTdWJtaXNzaW9ucyh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pc3Npb25zID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzcz1cImZpbGVcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XHJcbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIEZpbGVcIiAvPlxyXG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtBUElSZXNwb25zZX0gZnJvbSAnc2l0ZS1jbC9qcy9BUElSZXNwb25zZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgZmlsZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvYXBpLyR7c3lzdGVtfS9zdWJtaXNzaW9uL3N1Ym1pdC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ31gO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBsb2FkKCkge1xyXG4gICAgICAgICAgICAgIGlmKCF0aGlzLnN1Ym1pdHRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBqc29uID0gZnJhbWVzWyd1cGxvYWRfdGFyZ2V0XycgKyB0aGlzLnN1Ym1pc3Npb24udGFnXS5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IG5ldyBBUElSZXNwb25zZShKU09OLnBhcnNlKGpzb24pKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2Zvcm0nXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzcz1cImZpbGVcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XHJcbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIEZpbGVcIiAvPlxyXG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtBUElSZXNwb25zZX0gZnJvbSAnc2l0ZS1jbC9qcy9BUElSZXNwb25zZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgZmlsZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHQgICAgICB0aGlzLmFjdGlvbiA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvYXBpLyR7c3lzdGVtfS9zdWJtaXNzaW9uL3N1Ym1pdC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ31gO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBsb2FkKCkge1xyXG4gICAgICAgICAgICAgIGlmKCF0aGlzLnN1Ym1pdHRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBqc29uID0gZnJhbWVzWyd1cGxvYWRfdGFyZ2V0XycgKyB0aGlzLnN1Ym1pc3Npb24udGFnXS5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICAgICAgICB0cnkge1xyXG5cdCAgICAgICAgICAgICAgcmVzcG9uc2UgPSBuZXcgQVBJUmVzcG9uc2UoSlNPTi5wYXJzZShqc29uKSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgICBcdGNvbnNvbGUubG9nKGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhqc29uKTtcclxuXHQgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgXCJFcnJvciBkdXJpbmcgc3VibWlzc2lvblwiKTtcclxuICAgICAgICAgICAgICBcdHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydmb3JtJ10ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3X3N1Ym1pc3Npb25zJywgcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbnMnKS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XHJcbiAgICAgIDxkaXYgcmVmPVwiZWRpdG9yXCI+PC9kaXY+XHJcbiAgICAgIDxwPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj48L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7RWRpdG9yfSBmcm9tICdzaXRlLWNsL2pzL1VJL0VkaXRvcic7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ2VkaXRvciddO1xyXG4gICAgICAgICAgdGhpcy5lZGl0b3IgPSBuZXcgRWRpdG9yKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3VibWlzc2lvbi5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogWyd5ZWxsb3ctcGFkJ11cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmVkaXRvci50ZXh0YXJlYS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmKHRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsICdZb3UgbXVzdCBlbnRlciBzb21lIHRleHQgdG8gc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dC9wbGFpbicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN5c3RlbSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcbiAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWAsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci50ZXh0YXJlYS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8cCBjbGFzcz1cInNob3V0b3V0XCI+U3VibWlzc2lvbiB0eXBlIDxlbT57e29wdGlvbnMudHlwZX19PC9lbT4gaXMgbm90IHN1cHBvcnRlZDwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydvcHRpb25zJ11cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwic3VibWlzc2lvbnMubGVuZ3RoID09PSAwXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsYXJnZSBjZW50ZXJcIj5ObyBzdWJtaXNzaW9ucywgeWV0LjwvcD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+U3VibWlzc2lvbnM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciB2LWZvcj1cInN1Ym1pdHRlZCBpbiBzdWJtaXNzaW9uc1wiPlxyXG4gICAgICAgICAgICA8dGQ+PHN1Ym1pdHRlZC1pdGVtIDphc3NpZ250YWc9XCJzdWJtaXNzaW9uLmFzc2lnblRhZ1wiIDp0YWc9XCJzdWJtaXNzaW9uLnRhZ1wiIDpzdWJtaXNzaW9uPVwic3VibWl0dGVkXCIgOmFuYWx5c2lzPVwic3VibWlzc2lvbi5hbmFseXNpc1wiIDp0ZWFtaW5nPVwic3VibWlzc2lvbi50ZWFtaW5nXCIgQHJlc3VsdD0nYW5hbHlzaXNSZXN1bHQnIHYtb246cHJldmlld19pbWc9XCJwcmV2aWV3X2ltZ1wiIHYtb246cHJldmlldz1cInByZXZpZXdlclwiPjwvc3VibWl0dGVkLWl0ZW0+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAndGV4dCdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGRhdGUgdG8gZGlzcGxheSB0aGUgc3VibWlzc2lvbjwvcD5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAncHJvZ3JhbSdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGZvciBzdWJtaXNzaW9uIG9wdGlvbnM8L3A+XHJcbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ2ltYWdlJ1wiIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gYW55IHN1Ym1pc3Npb24gdG8gdmlldyBhbmQgZm9yIHN1Ym1pc3Npb24gb3B0aW9uczwvcD5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3VHh0ICE9PSBudWxsXCI+XHJcbiAgICAgICAgICA8cHJlIGNsYXNzPVwiY2wtcHJldmlldyB5ZWxsb3ctcGFkXCIgdi1pZj1cInByZXZpZXdUeHQgIT09IG51bGxcIj57e3ByZXZpZXdUeHR9fTwvcHJlPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjbC1wcmV2aWV3LXRpbWVcIiB2LWh0bWw9XCJwcmV2aWV3VGltZVwiPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPHByZSBjbGFzcz1cImNsLWFuYWx5c2lzXCIgdi1pZj1cInJlc3VsdCAhPT0gbnVsbFwiPnt7cmVzdWx0fX08L3ByZT5cclxuICAgIDxkaXYgdi1pZj1cInByZXZpZXdJbWcgIT09IG51bGxcIj5cclxuICAgICAgPGZpZ3VyZSB2LWlmPVwicHJldmlld0ltZyAhPT0gbnVsbFwiIGNsYXNzPVwiY2wtcHJldmlld1wiPjxpbWcgOnNyYz1cInByZXZpZXdJbWdcIj48L2ZpZ3VyZT5cclxuICAgICAgPHAgY2xhc3M9XCJjbC1wcmV2aWV3LXRpbWVcIj57e3ByZXZpZXdUaW1lfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICAvKipcclxuICAgICAqIENvbXBvbmVudCB0aGF0IGRpc3BsYXlzIHRoZSBsaXN0IG9mIHN1Ym1pc3Npb25zLlxyXG4gICAgICogQGNvbnN0cnVjdG9yIFN1Ym1pdHRlZFZ1ZVxyXG4gICAgICovXHJcbiAgaW1wb3J0IFN1Ym1pdHRlZEl0ZW1WdWUgZnJvbSAnLi9TdWJtaXR0ZWRJdGVtLnZ1ZSc7XHJcbiAgaW1wb3J0IHtUaW1lRm9ybWF0dGVyfSBmcm9tICdzaXRlLWNsL2pzL1RpbWVGb3JtYXR0ZXInO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nLCAnc3VibWlzc2lvbnMnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHByZXZpZXdUeHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgcHJldmlld0ltZzogbnVsbCxcclxuICAgICAgICAgICAgICBwcmV2aWV3VGltZTogbnVsbCxcclxuICAgICAgICAgICAgICByZXN1bHQ6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgc3VibWl0dGVkSXRlbTogU3VibWl0dGVkSXRlbVZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cdCAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG4gICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN1Ym1pc3Npb25zWzBdLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGhpcy5zdWJtaXNzaW9uc1swXS5kYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBcdHRoaXMucHJldmlld1R4dCA9IHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3LnRleHQ7XHJcbiAgICAgICAgXHR0aGlzLnByZXZpZXdUaW1lID0gVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGhpcy5zdWJtaXNzaW9uLnByZXZpZXcuZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3YXRjaDoge1xyXG4gICAgICAgIHN1Ym1pc3Npb25zOiBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG5cdCAgICAgICAgaWYodGhpcy5zdWJtaXNzaW9ucy5sZW5ndGggPiAwICYmIHRoaXMuc3VibWlzc2lvbnNbMF0udHlwZS5zdWJzdHIoMCwgNikgPT09ICdpbWFnZS8nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIHByZXZpZXdlcihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgXHR0aGlzLnByZXZpZXdUeHQgPSBcIlxcblwiO1xyXG4gICAgICAgIFx0dGhpcy5wcmV2aWV3VGltZSA9ICcmbmJzcDsnO1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgPT09IG51bGwgPyAnY291cnNlJyA6ICd0ZWFtJztcclxuICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpLyR7c2VydmljZX0vc3VibWlzc2lvbi9nZXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9LyR7c3VibWlzc2lvbi5pZH1gLCB7fSlcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXNzaW9uID0gcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbicpLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gc3VibWlzc2lvbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1RpbWUgPSBUaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzdWJtaXNzaW9uLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlld19pbWcoc3VibWlzc2lvbikge1xyXG5cdCAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XHJcblx0ICAgICAgICBpZihzdWJtaXNzaW9uLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgICBcdHRoaXMucHJldmlld0ltZyA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL3ZpZXcvJHtzdWJtaXNzaW9uLmlkfWA7XHJcblx0ICAgICAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IFRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHN1Ym1pc3Npb24uZGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmFseXNpc1Jlc3VsdChyZXN1bHQpIHtcclxuICAgICAgICBcdHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJpc1RleHQoKVwiPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cInNlbGVjdFRleHQoKVwiPnt7ZGlzcGxheSgpfX08L2E+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImlzSW1hZ2UoKVwiPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cInNlbGVjdFwiPnt7ZGlzcGxheSgpfX08L2E+PG1lbnUtdnVlIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBAb3Blbj1cInNlbGVjdFwiPjxhPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmcnXCIgYWx0PVwiTWVudVwiPjwvYT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGEgOmhyZWY9XCJ0b0Rvd25sb2FkXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2Rvd25sb2FkLnBuZydcIiBhbHQ9XCJEb3dubG9hZFwiPiBEb3dubG9hZDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBhbmFseXNpc1wiPjxhIEBjbGljay5wcmV2ZW50PVwic2hvd0FuYWx5c2lzKGl0ZW0pXCI+PGltZyA6c3JjPVwiaXRlbS5pY29uXCIgOmFsdD1cIml0ZW0ubWVudVwiPiB7e2l0ZW0ubWVudX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9tZW51LXZ1ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICA8bWVudS12dWUgdi1vbjpvcGVuPVwic2VsZWN0XCI+PGE+e3tkaXNwbGF5KCl9fTwvYT48YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSA6aHJlZj1cInRvRG93bmxvYWRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nJ1wiIGFsdD1cIkRvd25sb2FkXCI+IERvd25sb2FkPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgQGNsaWNrLnN0b3A9XCJzaG93QW5hbHlzaXMoaXRlbSlcIiAgdi1mb3I9XCJpdGVtIGluIGFuYWx5c2lzXCI+PGEgQGNsaWNrLnByZXZlbnQuc3RvcD1cInNob3dBbmFseXNpcyhpdGVtKVwiPjxpbWcgOnNyYz1cIml0ZW0uaWNvblwiIDphbHQ9XCJpdGVtLm1lbnVcIj4ge3tpdGVtLm1lbnV9fTwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbWVudS12dWU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtUaW1lRm9ybWF0dGVyfSBmcm9tICdzaXRlLWNsL2pzL1RpbWVGb3JtYXR0ZXInO1xyXG4gIGltcG9ydCBNZW51VnVlIGZyb20gJ3NpdGUtY2wvanMvVUkvTWVudS52dWUnO1xyXG5cclxuICBleHBvcnQgY29uc3QgVEVYVF9UWVBFUyA9IFsndGV4dC9wbGFpbicsICd0ZXh0L2h0bWwnXVxyXG4gIGV4cG9ydCBjb25zdCBJTUdfVFlQRVMgPSBbJ2ltYWdlL3BuZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL2dpZiddO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2Fzc2lnbnRhZycsICd0YWcnLCAnc3VibWlzc2lvbicsICdhbmFseXNpcycsICd0ZWFtaW5nJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFx0cm9vdDogU2l0ZS5yb290LFxyXG4gICAgICAgICAgICB0b0Rvd25sb2FkOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgIG1lbnVWdWU6IE1lbnVWdWVcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgdGhpcy50b0Rvd25sb2FkID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vZG93bmxvYWQvJHt0aGlzLnN1Ym1pc3Npb24uaWR9YDtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgaXNUZXh0KCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBURVhUX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpc0ltYWdlKCkge1xyXG5cdCAgICAgICAgICByZXR1cm4gSU1HX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgICAgICAgIGxldCBkaXNwID0gVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgodGhpcy5zdWJtaXNzaW9uLmRhdGUsIFwibG9uZ1wiKTtcclxuICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pc3Npb24ubmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwICs9ICc6ICcgKyB0aGlzLnN1Ym1pc3Npb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5ieSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgXHRkaXNwICs9ICcgYnkgJyArIHRoaXMuc3VibWlzc2lvbi5ieTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRpc3A7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0VGV4dCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwcmV2aWV3JywgdGhpcy5zdWJtaXNzaW9uKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3QoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncHJldmlld19pbWcnLCB0aGlzLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dBbmFseXNpcyhhbmFseXNpcykge1xyXG5cdCAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vYW5hbHlzaXMvJHt0aGlzLmFzc2lnbnRhZ30vJHt0aGlzLnRhZ30vJHthbmFseXNpcy50YWd9LyR7dGhpcy5zdWJtaXNzaW9uLmlkfWAsIHt9KVxyXG4gICAgICAgICAgXHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBcdCAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICBcdCAgICAgICAgXHRjb25zdCBhbmFseXNpc1Jlc3VsdCA9IHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb24tYW5hbHlzaXMnKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgXHQgICAgICAgIFx0dGhpcy4kZW1pdCgncmVzdWx0JywgYW5hbHlzaXNSZXN1bHQpO1xyXG4gICAgICAgICAgXHQgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgIFx0ICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHQgICAgfSlcclxuICAgICAgICAgIFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICBcdCAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPCEtLVxyXG5AZmlsZVxyXG5BbGwgc3R1ZGVudCBncmFkZXNcclxuL2NsL2NvbnNvbGUvZ3JhZGVzL2FsbFxyXG4tLT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPG1lbWJlcnNmZXRjaGVyPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoPjxkaXYgY2xhc3M9XCJzbWFsbFwiPnt7YXNzaWdubWVudC5zaG9ydG5hbWV9fTwvZGl2PjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPHRoPjxkaXYgY2xhc3M9XCJzbWFsbCBjYXRlZ29yeVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9kaXY+PC90aD5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIGZldGNoZXIudXNlcnNcIiA6Y2xhc3M9XCJ1c2VyLnJvbGUoKSAhPT0gJ1QnID8gJ2lnbm9yZScgOiAnJ1wiPlxyXG4gICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwibGluayArIHVzZXIubWVtYmVyLmlkXCI+e3t1c2VyLnVzZXJJZH19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwibGluayArIHVzZXIubWVtYmVyLmlkXCI+e3t1c2VyLm5hbWV9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t1c2VyLnJvbGVOYW1lKCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiY2F0ZWdvcnkgaW4gc2VjdGlvbi5hc3NpZ25tZW50cy5jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJhc3NpZ25tZW50IGluIGNhdGVnb3J5LmFzc2lnbm1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57e2Fzc2lnbm1lbnRHcmFkZSh1c2VyLCBjYXRlZ29yeSwgYXNzaWdubWVudCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7Y2F0ZWdvcnlHcmFkZSh1c2VyLCBjYXRlZ29yeSl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQ29uc29sZUNvbXBvbmVudEJhc2UgZnJvbSAnY29uc29sZS1jbC9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUnO1xyXG4gICAgaW1wb3J0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50IGZyb20gJ2NvdXJzZS1jbC9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxpbms6IFNpdGUucm9vdCArICcvY2wvY29uc29sZS9ncmFkZXMvJyxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ21lbWJlcnNmZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG4gICAgICAgICAgICBsZXQgbWVtYmVyID0gdXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogR3JhZGVzJyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBTaXRlLmFwaS5nZXQoJy9hcGkvZ3JhZGUvYWxsJywge30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFkZXMgPSByZXNwb25zZS5nZXREYXRhKCdncmFkZXMtYWxsJykuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYXNzaWdubWVudEdyYWRlKHVzZXIsIGNhdGVnb3J5LCBhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdyYWRlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJHcmFkZXMgPSB0aGlzLmdyYWRlc1t1c2VyLm1lbWJlci5pZF07XHJcbiAgICAgICAgICAgICAgICBsZXQgYXNzaWdubWVudEdyYWRlcyA9IHVzZXJHcmFkZXMuY2F0ZWdvcmllc1tjYXRlZ29yeS50YWddLmFzc2lnbm1lbnRzO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBhc3NpZ25tZW50R3JhZGUgb2YgYXNzaWdubWVudEdyYWRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFzc2lnbm1lbnRHcmFkZS50YWcgPT09IGFzc2lnbm1lbnQudGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NpZ25tZW50R3JhZGUuZ3JhZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlHcmFkZSh1c2VyLCBjYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ncmFkZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJz8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB1c2VyR3JhZGVzID0gdGhpcy5ncmFkZXNbdXNlci5tZW1iZXIuaWRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5R3JhZGUgPSB1c2VyR3JhZGVzLmNhdGVnb3JpZXNbY2F0ZWdvcnkudGFnXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeUdyYWRlLmdyYWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0ICd+c2l0ZS1jbC9zYXNzL21vZHVsZXMvY29sb3JzJztcclxuXHJcbnRkIHtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbiAgZGl2LmNhdGVnb3J5IHtcclxuICAgIGNvbG9yOiAkc2Vjb25kYjtcclxuICB9XHJcbjwvc3R5bGU+IiwiPCEtLVxyXG5AZmlsZVxyXG5BbGwgc3R1ZGVudCBncmFkZSBsaW5rc1xyXG4vY2wvY29uc29sZS9ncmFkZXMvbGlua3NcclxuLS0+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtZW1iZXJzZmV0Y2hlcj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCIgOmNsYXNzPVwidXNlci5yb2xlKCkgIT09ICdUJyA/ICdpZ25vcmUnIDogJydcIj5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cImxpbmsgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cImxpbmsgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci5uYW1lfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlci5yb2xlTmFtZSgpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlcnNmZXRjaGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBDb25zb2xlQ29tcG9uZW50QmFzZSBmcm9tICdjb25zb2xlLWNsL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgTWVtYmVyc0ZldGNoZXJDb21wb25lbnQgZnJvbSAnY291cnNlLWNsL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGluazogU2l0ZS5yb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy8nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFydHM6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ21lbWJlcnNmZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBHcmFkZXMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8bWVtYmVyZmV0Y2hlciB2LW9uOmZldGNoZWQ9XCJmZXRjaGVkXCIgOmlkPVwibWVtYmVyaWRcIiA6ZmFpbGxpbms9XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy9saW5rcydcIj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDxwcmV2LW5leHQgOnVzZXI9XCJmZXRjaGVyLnVzZXJcIj48L3ByZXYtbmV4dD5cclxuICAgICAgICAgIDxkaXYgdi1pZj1cImZldGNoZXIudXNlciAhPT0gbnVsbCAmJiBncmFkZSAhPT0gbnVsbFwiPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkFzc2lnbm1lbnQ8L3RoPjx0aD4mbmJzcDs8L3RoPjx0aD5HcmFkZTwvdGg+PHRoPiZuYnNwOzwvdGg+PHRoPkdyYWRlPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjYXRlZ29yeSBpbiBncmFkZS5jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJjbC1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj57e2NhdGVnb3J5Lm5hbWV9fTwvdGQ+PHRkPnt7Y2F0ZWdvcnkucG9pbnRzfX0lPC90ZD48dGQ+e3tjYXRlZ29yeS5ncmFkZX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiY2wtYXNzaWdubWVudFwiIHYtZm9yPVwiYXNzaWdubWVudCBpbiBjYXRlZ29yeS5hc3NpZ25tZW50c1wiIDprZXk9XCJhc3NpZ25tZW50LnRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cImAke3Jvb3R9L2NsL2NvbnNvbGUvZ3JhZGluZy8ke2Fzc2lnbm1lbnQudGFnfS8ke2ZldGNoZXIudXNlci5tZW1iZXIuaWR9YFwiPnt7YXNzaWdubWVudC5uYW1lfX08L3JvdXRlci1saW5rPjwvdGQ+PHRkPnt7YXNzaWdubWVudC5wb2ludHN9fSU8L3RkPjx0ZD57e2Fzc2lnbm1lbnQuZ3JhZGV9fTwvdGQ+PHRkIGNvbHNwYW49XCIyXCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPkNvbXB1dGVkIEdyYWRlOiB7e2dyYWRlLmdyYWRlfX0gb3V0IG9mIHt7Z3JhZGUuYXZhaWxhYmxlfX0gYXZhaWxhYmxlIHBvaW50c3t7cGVyfX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlcmZldGNoZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IENvbnNvbGVDb21wb25lbnRCYXNlIGZyb20gJ2NvbnNvbGUtY2wvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlJztcclxuICAgIGltcG9ydCBQcmV2TmV4dE1lbWJlclZ1ZSBmcm9tICdjb3Vyc2UtY2wvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZSc7XHJcbiAgICBpbXBvcnQgTWVtYmVyRmV0Y2hlckNvbXBvbmVudCBmcm9tICdjb3Vyc2UtY2wvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZXh0ZW5kczogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICAgICAgcHJvcHM6IFsnbWVtYmVyaWQnXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvdXJzZTogdGhpcy4kc3RvcmUuc3RhdGUuY291cnNlLmNvdXJzZSxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBlcjogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBtZW1iZXJmZXRjaGVyOiBNZW1iZXJGZXRjaGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBwcmV2TmV4dDogUHJldk5leHRNZW1iZXJWdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpdGxlKCc6IEdyYWRlJyk7XHJcbi8vICAgICAgICAgICAgdGhpcy5hZGROYXYyKCdTdWJtaXQnLCAyLCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XHJcbi8vICAgICAgICAgICAgfSk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgdGhpcy5hZGROYXYyKCdTdWJtaXQgYW5kIEV4aXQnLCAzLCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KHRydWUpO1xyXG4vLyAgICAgICAgICAgIH0pO1xyXG4vL1xyXG4vLyAgICAgICAgICAgIHRoaXMuYWRkTmF2MkxpbmsoJ0V4aXQnLCA0LCAnL2NsL2NvbnNvbGUvZ3JhZGluZy8nICsgdGhpcy5hc3NpZ250YWcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBmZXRjaGVkKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbiA9IHVzZXIubWVtYmVyLmdldFNlY3Rpb24odGhpcy4kc3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnOiAnICsgdXNlci5uYW1lICsgJyBHcmFkZXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBTaXRlLmFwaS5nZXQoYC9hcGkvZ3JhZGUvZ3JhZGUvJHt0aGlzLm1lbWJlcmlkfWAsIHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGUgPSByZXNwb25zZS5nZXREYXRhKCdncmFkZScpLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdyYWRlLmF2YWlsYWJsZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlciA9ICcoJyArICh0aGlzLmdyYWRlLmdyYWRlIC8gdGhpcy5ncmFkZS5hdmFpbGFibGUgKiAxMDApLnRvRml4ZWQoMSkgKyAnJSknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG5AZmlsZVxyXG5UaGUgbWFpbiBncmFkaW5nIHBhZ2VcclxuL2NsL2NvbnNvbGUvZ3JhZGluZ1xyXG4tLT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICA8aDI+R3JhZGVzIFN1bW1hcnk8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2dyYWRlcy9hbGwnXCI+QWxsIFN0dWRlbnRzPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArICcvY2wvY29uc29sZS9ncmFkZXMvbGlua3MnXCI+QWxsIFN0dWRlbnRzIEdyYWRlIExpbmtzPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDxsaSB2LWlmPVwiZG93bmxvYWRQZXJtaXNzaW9uXCI+PGEgOmhyZWY9XCJyb290ICsgJy9jbC9ncmFkZXMvY3N2J1wiPkRvd25sb2FkIFN0dWRlbnQgR3JhZGVzPC9hPjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgICA8aDI+e3tjYXRlZ29yeS5uYW1lfX08L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaSB2LWlmPVwiY2F0ZWdvcnkuYXNzaWdubWVudHMubGVuZ3RoID09PSAwXCI+PGVtPlBlbmRpbmcuLi48L2VtPjwvbGk+XHJcbiAgICAgICAgICA8bGkgdi1mb3I9XCJhc3NpZ25tZW50IGluIGNhdGVnb3J5LmFzc2lnbm1lbnRzXCIgOmtleT1cImFzc2lnbm1lbnQudGFnXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJncmFkaW5nTGluayArIGFzc2lnbm1lbnQudGFnXCI+e3thc3NpZ25tZW50Lm5hbWV9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImxpbmstYnV0dG9uXCIgdi1pZj1cInVzZXIuYXRMZWFzdCh0YSlcIiA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL3J1YnJpYy8nICsgYXNzaWdubWVudC50YWdcIj5ydWJyaWNzPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtNZW1iZXJ9IGZyb20gJ2NvdXJzZS1jbC9qcy9NZW1iZXJzL01lbWJlcic7XHJcbiAgaW1wb3J0IENvbnNvbGVDb21wb25lbnRCYXNlIGZyb20gJ2NvbnNvbGUtY2wvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nTGluazogdGhpcy4kc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlL2dyYWRpbmcvJyxcclxuICAgICAgICAgICAgICAgIHRhOiBNZW1iZXIuVEEsXHJcblxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWRQZXJtaXNzaW9uOiBmYWxzZSAgIC8vIFBlcm1pc3Npb24gdG8gZG93bmxvYWQgZ3JhZGVzP1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogQXNzaWdubWVudCBHcmFkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcjtcclxuICAgICAgICAgICAgbGV0IG1lbWJlciA9IHVzZXIubWVtYmVyO1xyXG5cclxuXHQgICAgICAgICAgdGhpcy5kb3dubG9hZFBlcm1pc3Npb24gPSB1c2VyLmF0TGVhc3QodGhpcy4kc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KCdncmFkZXMtZG93bmxvYWQnLCBNZW1iZXIuVEEpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10obWVtYmVyLnNlbWVzdGVyLCBtZW1iZXIuc2VjdGlvbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8c3VibWlzc2lvbnMtbGlua3MgOmFzc2lnbm1lbnQ9XCJhc3NpZ25tZW50XCI+PC9zdWJtaXNzaW9ucy1saW5rcz5cclxuICAgICAgPG1lbWJlcnNmZXRjaGVyPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHRhYmxlIHYtaWY9XCJncmFkZXMgIT09IG51bGxcIiBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHYtZm9yPVwicGFydCBpbiBwYXJ0c1wiIGNsYXNzPVwic21hbGxcIj48ZGl2Pnt7cGFydC5uYW1lfX08L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwiZ3JhZGVzICE9PSBudWxsXCIgY2xhc3M9XCJzbWFsbFwiPjxkaXY+R3JhZGU8L2Rpdj48L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIGZldGNoZXIudXNlcnNcIiA6Y2xhc3M9XCJ1c2VyLnJvbGUoKSAhPT0gJ1QnID8gJ2lnbm9yZScgOiAnJ1wiPlxyXG4gICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwibGluayArIHVzZXIubWVtYmVyLmlkXCI+e3t1c2VyLnVzZXJJZH19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwibGluayArIHVzZXIubWVtYmVyLmlkXCI+e3t1c2VyLm5hbWV9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb2xlXCI+e3t1c2VyLnJvbGVOYW1lKCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtZm9yPVwicGFydCBpbiBwYXJ0c1wiIGNsYXNzPVwicmlnaHRcIj57e3BhcnRHcmFkZSh1c2VyLCBwYXJ0KX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImdyYWRlcyAhPT0gbnVsbFwiIGNsYXNzPVwicmlnaHRcIj57e2dyYWRlKHVzZXIpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJkaXZpZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJjZW50ZXJcIj48ZW0+Y291bnRzPC9lbT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNlbnRlclwiPnt7ZmV0Y2hlci51c2Vycy5sZW5ndGh9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtZm9yPVwicGFydCBpbiBwYXJ0c1wiIGNsYXNzPVwicmlnaHRcIj57e3BhcnRDb3VudChmZXRjaGVyLnVzZXJzLCBwYXJ0KX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImdyYWRlcyAhPT0gbnVsbFwiIGNsYXNzPVwicmlnaHRcIj57e2dyYWRlc0NvdW50KGZldGNoZXIudXNlcnMpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJjZW50ZXJcIj48ZW0+YXZlcmFnZXM8L2VtPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2VudGVyXCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJwYXJ0IGluIHBhcnRzXCIgY2xhc3M9XCJyaWdodFwiPnt7cGFydEF2ZXJhZ2UoZmV0Y2hlci51c2VycywgcGFydCl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJncmFkZXMgIT09IG51bGxcIiBjbGFzcz1cInJpZ2h0XCI+e3tncmFkZUF2ZXJhZ2UoZmV0Y2hlci51c2Vycyl9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvbWVtYmVyc2ZldGNoZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBDb25zb2xlQ29tcG9uZW50QmFzZSBmcm9tICdjb25zb2xlLWNsL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZSc7XHJcblx0aW1wb3J0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50IGZyb20gJ2NvdXJzZS1jbC9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlJztcclxuICBpbXBvcnQgU3VibWlzc2lvbnNMaW5rc1Z1ZSBmcm9tICdjb3Vyc2UtY2wvanMvQ29uc29sZS9TdWJtaXNzaW9uc0xpbmtzLnZ1ZSc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhc3NpZ25tZW50IGdyYWRpbmcgcGFnZSBmb3IgdGhlIGNvdXJzZS5cclxuICAgKiAvY2wvY29uc29sZS9ncmFkaW5nLzphc3NpZ250YWdcclxuICAgKiBAY29uc3RydWN0b3IgR3JhZGluZ0Fzc2lnbm1lbnRWdWVcclxuICAgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRleHRlbmRzOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuXHRcdHByb3BzOiBbJ2Fzc2lnbnRhZyddLFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxpbms6IFNpdGUucm9vdCArICcvY2wvY29uc29sZS9ncmFkaW5nLycgKyB0aGlzLmFzc2lnbnRhZyArICcvJyxcclxuXHRcdFx0XHRncmFkZXM6IG51bGwsXHJcblx0XHRcdFx0cGFydHM6IFtdLFxyXG4gICAgICAgIGZldGNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIGFzc2lnbm1lbnQ6IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0J21lbWJlcnNmZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnQsXHJcblx0XHQgICdzdWJtaXNzaW9uc0xpbmtzJzogU3VibWlzc2lvbnNMaW5rc1Z1ZVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcblx0XHRcdGxldCBxdWVyeSA9IHtcclxuXHRcdFx0XHRzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG5cdFx0XHRcdHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG5cdFx0XHR0aGlzLmFzc2lnbm1lbnQgPSB0aGlzLnNlY3Rpb24uZ2V0QXNzaWdubWVudCh0aGlzLmFzc2lnbnRhZyk7XHJcblxyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIEdyYWRpbmcnKTtcclxuXHJcblx0XHRcdHRoaXMuc2l0ZS5hcGkuZ2V0KCcvYXBpL2dyYWRlL2dyYWRlcy8nICsgdGhpcy5hc3NpZ250YWcsIHt9KVxyXG5cdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ3JhZGVzID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGVzJykuYXR0cmlidXRlcztcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJ0cyA9IHJlc3BvbnNlLmdldERhdGEoJ2dyYWRlLXBhcnRzJykuYXR0cmlidXRlcztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRwYXJ0R3JhZGUodXNlciwgcGFydCkge1xyXG5cdFx0XHRcdGNvbnN0IHVzZXJHcmFkZXMgPSB0aGlzLmdyYWRlc1t1c2VyLm1lbWJlci5pZF07XHJcblx0XHRcdFx0aWYgKHVzZXJHcmFkZXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y29uc3QgcGFydFN0YXR1cyA9IHVzZXJHcmFkZXMuZ3JhZGVzW3BhcnQudGFnXTtcclxuXHRcdFx0XHRpZiAocGFydFN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gcGFydFN0YXR1cztcclxuXHRcdFx0fSxcclxuXHRcdFx0Z3JhZGUodXNlcikge1xyXG5cdFx0XHRcdGNvbnN0IHVzZXJHcmFkZXMgPSB0aGlzLmdyYWRlc1t1c2VyLm1lbWJlci5pZF07XHJcblx0XHRcdFx0aWYgKHVzZXJHcmFkZXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHVzZXJHcmFkZXMuZ3JhZGUgIT09IG51bGwgPyB1c2VyR3JhZGVzLmdyYWRlIDogJyc7XHJcblx0XHRcdH0sXHJcbiAgICAgIHBhcnRDb3VudCh1c2VycywgcGFydCkge1xyXG5cdFx0XHRcdGxldCBjbnQgPSAwO1xyXG5cdFx0XHRcdGZvcihsZXQgdXNlciBvZiB1c2Vycykge1xyXG5cdFx0XHRcdFx0aWYodGhpcy5wYXJ0R3JhZGUodXNlciwgcGFydCkgIT09ICcnKSB7XHJcblx0XHRcdFx0XHRcdGNudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgICAgfSxcclxuICAgICAgZ3JhZGVzQ291bnQodXNlcnMpIHtcclxuXHQgICAgICBsZXQgY250ID0gMDtcclxuXHQgICAgICBmb3IobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuXHRcdCAgICAgIGlmKHRoaXMuZ3JhZGUodXNlcikgIT09ICcnKSB7XHJcblx0XHRcdCAgICAgIGNudCsrO1xyXG5cdFx0ICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIGNudDtcclxuICAgICAgfSxcclxuICAgICAgcGFydEF2ZXJhZ2UodXNlcnMsIHBhcnQpIHtcclxuICAgICAgICBsZXQgY250ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgdXNlciBvZiB1c2Vycykge1xyXG4gICAgICAgIFx0bGV0IGdyYWRlID0gdGhpcy5wYXJ0R3JhZGUodXNlciwgcGFydCk7XHJcbiAgICAgICAgICBpZihncmFkZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGdyYWRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY250ID09PSAwKSB7XHJcbiAgICAgICAgXHRyZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbC9jbnQgKiAxMCkgLyAxMDtcclxuICAgICAgfSxcclxuICAgICAgZ3JhZGVBdmVyYWdlKHVzZXJzKSB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgIGxldCBncmFkZSA9IHRoaXMuZ3JhZGUodXNlcik7XHJcbiAgICAgICAgICBpZihncmFkZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGdyYWRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY250ID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbC9jbnQgKiAxMCkgLyAxMDtcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtZW1iZXJmZXRjaGVyIHYtb246ZmV0Y2hlZD1cImZldGNoZWRcIiA6aWQ9XCJtZW1iZXJpZFwiIDpmYWlsbGluaz1cImdyYWRpbmdMaW5rXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8cHJldi1uZXh0IDp1c2VyPVwiZmV0Y2hlci51c2VyXCI+PC9wcmV2LW5leHQ+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJmZXRjaGVyLnVzZXIgIT09IG51bGxcIj5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIHJlZj1cImZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgPHAgOmNsYXNzPVwiZmV0Y2hlci51c2VyLnJvbGUoKSA9PT0gJ1QnID8gJ2NsLXJvbGUnIDogJ2NsLXJvbGUgY2wtcm9sZS1zdGFmZidcIj5cclxuICAgICAgICAgICAgICB7e2ZldGNoZXIudXNlci5yb2xlTmFtZSgpfX06IHt7ZmV0Y2hlci51c2VyLm5hbWV9fSB7e2ZldGNoZXIudXNlci5yb2xlKCl9fVxyXG4gICAgICAgICAgICAgICAgPGVtIGNsYXNzPVwic21hbGxcIj57e2ZldGNoZXIudXNlci51c2VySWR9fTwvZW0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2wtZ3JhZGVyLWJ1dHRvblwiIEBjbGljay5wcmV2ZW50PVwiZW1haWwoZmV0Y2hlci51c2VyKVwiPlxyXG4gICAgICAgICAgICAgICAgICBlbWFpbCB7e2ZldGNoZXIudXNlci5yb2xlTmFtZSgpLnRvTG93ZXJDYXNlKCl9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiY2wtZ3JhZGVyLWJ1dHRvblwiIHRhZz1cImJ1dHRvblwiIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvZ3JhZGVzLycgKyBmZXRjaGVyLnVzZXIubWVtYmVyLmlkXCI+c3R1ZGVudCBncmFkZXM8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNsLWR1ZVwiIHYtaWY9XCJkdWUgIT09IG51bGxcIj5Bc3NpZ25tZW50IGR1ZSB7e3RpbWUoZHVlKX19IDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsLWdyYWRlci1pdGVtXCIgdi1mb3I9XCJpdGVtIGluIGdyYWRlcnNcIj5cclxuICAgICAgICAgICAgICA8aDI+e3tpdGVtLm5hbWV9fTwvaDI+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtLnJ1YnJpYyAhPT0gdW5kZWZpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtdG9nZ2xlXCI+PHAgY2xhc3M9XCJjbC1ydWJyaWMtZXhwYW5kXCI+PGE+RXhwYW5kIGZvciBydWJyaWM8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2wtcnVicmljYmxvY2sgY2wtY2xpY2thYmxlXCI+PGRpdiB2LWh0bWw9XCJpdGVtLnJ1YnJpY1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLmhhbmRib29rID09PSB1bmRlZmluZWRcIiB2LWh0bWw9XCJpdGVtLmh0bWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8aGFuZGJvb2sgdi1lbHNlIDppdGVtPVwiaXRlbVwiIHYtb246aGFuZGJvb2stZGF0YT1cImhhbmRib29rRGF0YVwiPjwvaGFuZGJvb2s+XHJcbiAgICAgICAgICAgICAgPGdyYWRlLWhpc3RvcnkgOmhpc3Rvcnk9XCJpdGVtLmhpc3RvcnlcIj48L2dyYWRlLWhpc3Rvcnk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3VibWlzc2lvbnMgOnVzZXI9XCJmZXRjaGVyLnVzZXJcIiA6YXNzaWdudGFnPVwiYXNzaWdudGFnXCI+PC9zdWJtaXNzaW9ucz5cclxuICAgICAgICAgICAgPGNvbXBvbmVudCB2LWlmPVwicmV2aWV3aW5nICE9PSBudWxsXCIgOmlzPVwicmV2aWV3aW5nXCIgOmFzc2lnbnRhZz1cImFzc2lnbnRhZ1wiIDp1c2VyPVwiZmV0Y2hlci51c2VyXCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmFkZVwiPlxyXG4gICAgICAgICAgICAgIDxwIHYtaWY9XCJncmFkZSAhPT0gbnVsbFwiPkNvbXB1dGVkIEdyYWRlOiB7e2dyYWRlfX08L3A+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgIDxwPkdyYWRlIE5vdCBBdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlciBzbWFsbCBub3RpY2VcIj5HcmFkZXMgYXJlIG5vdCBhdmFpbGFibGUgdW50aWwgYWxsIHBhcnRzIG9mIHRoZSBhc3NpZ25tZW50IGhhdmUgYmVlbiBncmFkZWQuPC9wPlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJmZXRjaGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvKipcclxuXHQgKiAvY2wvY29uc29sZS9ncmFkaW5nLzphc3NpZ25tZW50LzptZW1iZXJpZFxyXG5cdCAqIEFzc2lnbm1lbnQgZ3JhZGluZyBwYWdlIGZvciBhIGNvdXJzZSBtZW1iZXJcclxuXHQgKi9cclxuXHRpbXBvcnQgQ29uc29sZUNvbXBvbmVudEJhc2UgZnJvbSAnY29uc29sZS1jbC9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUnO1xyXG5cdGltcG9ydCBQcmV2TmV4dE1lbWJlclZ1ZSBmcm9tICdjb3Vyc2UtY2wvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZSc7XHJcblx0aW1wb3J0IE1lbWJlckZldGNoZXJDb21wb25lbnQgZnJvbSAnY291cnNlLWNsL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZSc7XHJcblx0aW1wb3J0IEdyYWRlSGlzdG9yeUNvbXBvbmVudCBmcm9tICcuLi9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWUnO1xyXG5cdGltcG9ydCBTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQgZnJvbSAnY291cnNlLWNsL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZSc7XHJcblx0aW1wb3J0IEhhbmRib29rQ29tcG9uZW50IGZyb20gJy4uL0hhbmRib29rL0hhbmRib29rLnZ1ZSc7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRwcm9wczogWydhc3NpZ250YWcnLCAnbWVtYmVyaWQnXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRncmFkaW5nTGluazogJy9jbC9jb25zb2xlL2dyYWRpbmcvJyArIHRoaXMuYXNzaWdudGFnLFxyXG5cdFx0XHRcdGFzc2lnbm1lbnQ6IG51bGwsXHJcblx0XHRcdFx0Z3JhZGVyczogW10sXHJcblx0XHRcdFx0Z3JhZGU6IG51bGwsXHJcblx0XHRcdFx0ZHVlOiBudWxsLFxyXG5cdFx0XHRcdGhhbmRib29rUmVzdWx0OiBudWxsLFxyXG4gICAgICAgIHJldmlld2luZzogbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRtZW1iZXJmZXRjaGVyOiBNZW1iZXJGZXRjaGVyQ29tcG9uZW50LFxyXG5cdFx0XHRwcmV2TmV4dDogUHJldk5leHRNZW1iZXJWdWUsXHJcblx0XHRcdGdyYWRlSGlzdG9yeTogR3JhZGVIaXN0b3J5Q29tcG9uZW50LFxyXG5cdFx0XHRzdWJtaXNzaW9uczogU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LFxyXG5cdFx0XHRoYW5kYm9vazogSGFuZGJvb2tDb21wb25lbnRcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLnNldFRpdGxlKCc6IEdyYWRpbmcnKTtcclxuXHRcdFx0dGhpcy5hZGROYXYyKCdTdWJtaXQnLCAyLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmFkZE5hdjIoJ1N1Ym1pdCBhbmQgRXhpdCcsIDMsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN1Ym1pdCh0cnVlKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmFkZE5hdjJMaW5rKCdFeGl0JywgNCwgJy9jbC9jb25zb2xlL2dyYWRpbmcvJyArIHRoaXMuYXNzaWdudGFnKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGZldGNoZWQodXNlcikge1xyXG5cdFx0XHRcdGxldCBzZWN0aW9uID0gdXNlci5tZW1iZXIuZ2V0U2VjdGlvbih0aGlzLiRzdG9yZSk7XHJcblx0XHRcdFx0dGhpcy5hc3NpZ25tZW50ID0gdXNlci5tZW1iZXIuZ2V0QXNzaWdubWVudCh0aGlzLiRzdG9yZSwgdGhpcy5hc3NpZ250YWcpO1xyXG5cdFx0XHRcdHRoaXMuc2V0VGl0bGUoJzogJyArIHVzZXIubmFtZSArICcgJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIEdyYWRpbmcnKTtcclxuXHRcdCAgICBpZih0aGlzLmFzc2lnbm1lbnQucmV2aWV3ID09PSB0cnVlKSB7XHJcblx0XHQgICAgXHR0aGlzLnJldmlld2luZyA9IHRoaXMuJHNpdGUuY29uc29sZS5SZXZpZXcucmV2aWV3c2J5Zm9yO1xyXG5cdCAgICAgIH1cclxuXHJcblx0XHRcdFx0U2l0ZS5hcGkuZ2V0KGAvYXBpL2dyYWRlL2dyYWRlci8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMubWVtYmVyaWR9YCwge30pXHJcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0KGV4aXQpIHtcclxuXHRcdFx0XHRjb25zdCBmb3JtID0gdGhpcy4kcmVmc1snZm9ybSddO1xyXG5cdFx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cdFx0XHRcdGlmICh0aGlzLmhhbmRib29rUmVzdWx0ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ19oYW5kYm9vaycsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGFuZGJvb2tSZXN1bHQpKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFNpdGUuYXBpLnBvc3QoYC9hcGkvZ3JhZGUvZ3JhZGVyLyR7dGhpcy5hc3NpZ250YWd9LyR7dGhpcy5tZW1iZXJpZH1gLCBmb3JtRGF0YSlcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZXhpdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goU2l0ZS5yb290ICsgJy9jbC9jb25zb2xlL2dyYWRpbmcvJyArIHRoaXMuYXNzaWdudGFnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0U2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0YWtlKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0Y29uc3QgZ3JhZGVyID0gcmVzcG9uc2UuZ2V0RGF0YSgnZ3JhZGVyJyk7XHJcblx0XHRcdFx0dGhpcy5kdWUgPSBncmFkZXIuYXR0cmlidXRlcy5kdWUgIT09IHVuZGVmaW5lZCA/IGdyYWRlci5hdHRyaWJ1dGVzLmR1ZSA6IG51bGw7XHJcblx0XHRcdFx0dGhpcy5ncmFkZXJzID0gZ3JhZGVyLmF0dHJpYnV0ZXMuZ3JhZGVycztcclxuXHRcdFx0XHR0aGlzLmdyYWRlID0gZ3JhZGVyLmF0dHJpYnV0ZXMuZ3JhZGU7XHJcblxyXG5cdFx0XHRcdHRoaXMuJGZvcmNlVXBkYXRlKCk7XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHQgICAgdGhpcy5pbnN0YWxsQXZhaWxhYmxlQ2xpY2tlcnMoKTtcclxuXHRcdFx0XHRcdHRoaXMuaW5zdGFsbFJ1YnJpY0NsaWNrZXJzKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcbiAgICAgIC8vLyBJbnN0YWxsIGNsaWNrZXIgZm9yIGF2YWlsYWJsZSB0aGF0IHdpbGwgYXV0b2ZpbGwgdGhlIHBvaW50c1xyXG4gICAgICBpbnN0YWxsQXZhaWxhYmxlQ2xpY2tlcnMoKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgYS5hdmFpbGFibGUtY2xpY2tlcicpO1xyXG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGNsaWNrYWJsZXMpIHtcclxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuZGF0YXNldC5pZCkudmFsdWUgPSBlbGVtZW50LmlubmVyVGV4dDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8vIEluc3RhbGwgY2xpY2tlcnMgZm9yIFJ1YnJpYyBpdGVtcyB0aGF0IHdpbGwgYXV0b2ZpbGwgdGhlbS5cclxuICAgICAgaW5zdGFsbFJ1YnJpY0NsaWNrZXJzKCkge1xyXG5cdFx0XHRcdGNvbnN0IHNlbGVjdG9ycyA9IFsnZGl2LmNsLWNsaWNrYWJsZSBsaS5pdGVtJywgJ2Rpdi5jbC1jbGlja2FibGUgdWwuaXRlbXMgbGknLCAnZGl2LmNsLWNsaWNrYWJsZSBwLml0ZW0nXTtcclxuXHRcdFx0XHRmb3IoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKSB7XHJcbiAgICAgICAgICBjb25zdCBjbGlja2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGNsaWNrYWJsZXMpIHtcclxuICAgICAgICAgIFx0aWYoZWxlbWVudC5kYXRhc2V0LmNsaWNrYWJsZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdCAgICAgICAgICAgIHRoaXMuYWRkQ29udGVudChlbGVtZW50KTtcclxuXHQgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUnLCAneWVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vLyBBZGQgcnVicmljIGNvbnRlbnQgdG8gdGhlIGVsZW1lbnQgY29tbWVudCB0ZXh0YXJlYVxyXG5cdFx0XHRhZGRDb250ZW50KGVsZW1lbnQpIHtcclxuXHRcdFx0XHRjb25zdCBjb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdFx0Ly8gV29yayB1cCB1bnRpbCB3ZSBmaW5kIHRoZSBjbC1ncmFkZXItaXRlbSBkaXZcclxuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG5cdFx0XHRcdHdoaWxlIChlbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsLWdyYWRlci1pdGVtJykpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChlbGVtZW50ID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBGaW5kIGEgdGV4dGFyZWEgaW5zaWRlIHRoaXNcclxuXHRcdFx0XHRmb3IgKGxldCB0ZXh0YXJlYSBvZiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJykpIHtcclxuXHRcdFx0XHRcdHRleHRhcmVhLnZhbHVlID0gdGV4dGFyZWEudmFsdWUgKyBjb250ZW50ICsgXCJcXG5cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRpbWUodCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuJHNpdGUpO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIuYWJzb2x1dGVVTklYKHQsICdzaG9ydCcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbWFpbCh1c2VyKSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uID0gJ21haWx0bzonICsgdXNlci5lbWFpbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0aGFuZGJvb2tEYXRhKGRhdGEpIHtcclxuXHRcdFx0XHR0aGlzLmhhbmRib29rUmVzdWx0ID0gZGF0YTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGgyPnt7cnVicmljLm5hbWV9fTwvaDI+XHJcblxyXG4gICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdCgpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbC1ydWJyaWNibG9jayBjbC1zaG93XCIgdi1odG1sPVwicnVicmljLnNob3dcIj48L2Rpdj5cclxuICAgICA8IS0tICA8dGV4dGFyZWEgcmVmPVwiZWRpdG9yXCIgdi1tb2RlbD1cInJ1YnJpYy5ydWJyaWNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIiBAa2V5ZG93bj1cImNoYW5nZWQoKVwiPjwvdGV4dGFyZWE+IC0tPlxyXG4gICAgICA8ZGl2IHJlZj1cImVkaXRvclwiPjwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnY291cnNlLWNsL2pzL01lbWJlcnMvTWVtYmVyJztcclxuICAgIGltcG9ydCB7U2FuaXRpemV9IGZyb20gJ3NpdGUtY2wvanMvVXRpbC9TYW5pdGl6ZSc7XHJcbiAgICBpbXBvcnQge0VkaXRvcn0gZnJvbSAnc2l0ZS1jbC9qcy9VSS9FZGl0b3InO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2Fzc2lnbnRhZycsICdydWJyaWMnXSxcclxuICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiRyZWZzWydlZGl0b3InXTtcclxuICAgICAgICAgIHRoaXMuZWRpdG9yID0gbmV3IEVkaXRvcihlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucnVicmljLnJ1YnJpYyxcclxuICAgICAgICAgICAgICB0YWI6IHRydWUsXHJcbiAgICAgICAgICAgICAgYXV0b0luZGVudDogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdGhpcy5lZGl0b3IudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZWQoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIGNoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy50aW1lciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5ydWJyaWMuc2hvdyA9IFNhbml0aXplLnNhbml0aXplKHRoaXMuZWRpdG9yLnRleHRhcmVhLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICBTaXRlLmFwaS5wb3N0KCcvYXBpL2dyYWRlL3J1YnJpY3MvJyArIHRoaXMuYXNzaWdudGFnICsgJy8nICsgdGhpcy5ydWJyaWMudGFnICwge1xyXG4gICAgICAgICAgICAgICAgICBydWJyaWM6IHRoaXMucnVicmljLnNob3dcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgJ1J1YnJpYyBzdWNjZXNzZnVsbHkgc2F2ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWdyYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLXRvZ2dsZVwiPjxwPjxhPkV4cGFuZCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNyZWF0aW5nIHJ1YnJpY3MuPC9hPjwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJjbC10b2dnbGVibG9ja1wiPlxyXG4gICAgICA8cD5SdWJyaWNzIGFyZSBlbnRlcmVkIGFzIEhUTUwuIEEgY29tbW9uIGZvcm1hdCBpcyB0b1xyXG4gICAgICAgIGNyZWF0ZSBsaXN0cyB1c2luZyAmbHQ7dWwmZ3Q7IGFuZCAmbHQ7bGkmZ3Q7IHRhZ3MuPC9wPlxyXG4gICAgICA8cD5Db250ZW50cyBvZiBhbiAmbHQ7bGkmZ3Q7IG9yICZsdDtwJmd0OyB0YWcgY2FuIGJlIG1ha2VcclxuICAgICAgICBjbGlja2FibGUgc28gdGhleSBhdXRvbWF0aWNhbGx5IGFwcGVhciBpbiB0aGUgY29tbWVudFxyXG4gICAgICAgIHdpbmRvdyBieSBhZGRpbmcgdGhlIGNsYXNzICdpdGVtJy4gQWxsICZsdDtsaSZndDsgY2hpbGRyZW5cclxuICAgICAgICBvZiBhICZsdDt1bCZndDsgY2FuIGJlIG1hZGUgY2xpY2thYmxlIGJ5IGFkZGluZyB0aGVcclxuICAgICAgICBjbGFzcyAnaXRlbXMnOjwvcD5cclxuICAgICAgPHByZSBjbGFzcz1cImNvZGVcIj5cclxuJmx0O3VsJmd0O1xyXG4gICAmbHQ7bGkgY2xhc3M9XCJpdGVtXCImZ3Q7VGhpcyBpdGVtIHdpbGwgYmUgY2xpY2thYmxlJmx0Oy9saSZndDtcclxuICAgJmx0O2xpJmd0O1RoaXMgaXRlbSB3aWxsIG5vdCBiZSBjbGlja2FibGUmbHQ7L2xpJmd0O1xyXG4mbHQ7L3VsJmd0O1xyXG5cclxuJmx0O3AgY2xhc3M9XCJpdGVtXCImZ3Q7QW5kIHRoaXMgd2lsbCBiZSBjbGlja2FibGUmbHQ7L3AmZ3Q7XHJcblxyXG4mbHQ7dWwgY2xhc3M9XCJpdGVtc1wiJmd0O1xyXG4gICAmbHQ7bGkmZ3Q7QWxsIG9mIHRoZXNlIGl0ZW1zIHdpbGwgYmUgY2xpY2thYmxlJmx0Oy9saSZndDtcclxuICAgJmx0O2xpJmd0O1RoaXMgb25lLCB0b28hJmx0Oy9saSZndDtcclxuJmx0Oy91bCZndDtcclxuICAgICAgPC9wcmU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWZvcj1cInJ1YnJpYyBpbiBydWJyaWNzXCIgY2xhc3M9XCJjbC1ydWJyaWNcIj5cclxuICAgICAgPHJ1YnJpYy1lZGl0b3IgOmFzc2lnbnRhZz1cImFzc2lnbnRhZ1wiIDpydWJyaWM9XCJydWJyaWNcIj48L3J1YnJpYy1lZGl0b3I+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnY291cnNlLWNsL2pzL01lbWJlcnMvTWVtYmVyJztcclxuICAgIGltcG9ydCBDb25zb2xlQ29tcG9uZW50QmFzZSBmcm9tICdjb25zb2xlLWNsL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgUnVicmljRWRpdG9yVnVlIGZyb20gJy4vUnVicmljRWRpdG9yLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgICdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICAgICAgcHJvcHM6IFsnYXNzaWdudGFnJ10sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0YTogTWVtYmVyLlRBLFxyXG4gICAgICAgICAgICAgICAgcnVicmljczogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBydWJyaWNFZGl0b3I6IFJ1YnJpY0VkaXRvclZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IEFzc2lnbm1lbnQgR3JhZGluZycpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG4gICAgICAgICAgICBsZXQgbWVtYmVyID0gdXNlci5tZW1iZXI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSB0aGlzLnNlY3Rpb24uZ2V0QXNzaWdubWVudCh0aGlzLmFzc2lnbnRhZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIFJ1YnJpY3MnKTtcclxuXHJcbiAgICAgICAgICAgIFNpdGUuYXBpLmdldCgnL2FwaS9ncmFkZS9ydWJyaWNzLycgKyB0aGlzLmFzc2lnbm1lbnQudGFnLCB7fSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1YnJpY3MgPSByZXNwb25zZS5nZXREYXRhKCdydWJyaWNzJykuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBydWJyaWMgb2YgdGhpcy5ydWJyaWNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQocnVicmljLCAnc2hvdycsIHJ1YnJpYy5ydWJyaWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dGFibGUgY2xhc3M9XCJjbC1oYW5kYm9va1wiPlxyXG4gICAgICA8dHI+PHRoPkNhdGVnb3J5PGJyPk11bHRpcGxpZXI6IHt7aXRlbS5tdWx0aXBsaWVyfX08L3RoPjx0aD5EZWR1Y3Rpb248YnI+MCB0byBtYXg8L3RoPjwvdHI+XHJcbiAgICAgIDx0ciB2LWZvcj1cImNhdGVnb3J5IGluIGl0ZW0uaGFuZGJvb2suY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY2F0ZWdvcnkucnVicmljICE9PSB1bmRlZmluZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsLXRvZ2dsZSBjbC1zaW5nbGUtc3BhY2VcIj48c3Bhbj48YT57e2NhdGVnb3J5Lm5hbWV9fTwvYT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsLXJ1YnJpY2Jsb2NrXCI+PGRpdiB2LWh0bWw9XCJjYXRlZ29yeS5ydWJyaWNcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT57e2NhdGVnb3J5Lm5hbWV9fTwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIXJlYWRvbmx5XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2LWZvcj1cImRlZHVjdCBpbiAoY2F0ZWdvcnkuZGVkdWN0KzEpXCIgdi1tb2RlbD1cIm1ldGFkYXRhW2NhdGVnb3J5LnRhZ11cIiA6dmFsdWU9XCJkZWR1Y3QtMVwiIHR5cGU9XCJyYWRpb1wiIEBjaGFuZ2U9XCJjb21wdXRlXCI+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPHNwYW4gdi1lbHNlPnt7ZGVkdWN0aW9uKG1ldGFkYXRhW2NhdGVnb3J5LnRhZ10pfX08L3NwYW4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxpbnB1dCB2LWlmPVwiIXJlYWRvbmx5XCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibWV0YWRhdGFbJ19tYW51YWxfdGV4dCddXCI+XHJcbiAgICAgICAgICA8c3BhbiB2LWVsc2U+e3ttZXRhZGF0YVsnX21hbnVhbF90ZXh0J119fTwvc3Bhbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIXJlYWRvbmx5XCI+XHJcbiAgICAgICAgICA8aW5wdXQgdi1mb3I9XCJkZWR1Y3QgaW4gNVwiIHYtbW9kZWw9XCJtZXRhZGF0YVsnX21hbnVhbCddXCIgOnZhbHVlPVwiZGVkdWN0LTFcIiB0eXBlPVwicmFkaW9cIiBAY2hhbmdlPVwiY29tcHV0ZVwiPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHNwYW4gdi1lbHNlPnt7ZGVkdWN0aW9uKG1ldGFkYXRhWydfbWFudWFsJ10pfX08L3NwYW4+XHJcbiAgICAgIDwvdGQ+PC90cj5cclxuICAgICAgPHRyIGNsYXNzPVwiY2wtaW50ZXJuYWxcIj48dGg+Q29tbWVudDwvdGg+PHRoPkRlZHVjdGlvbjwvdGg+PC90cj5cclxuICAgICAgPHRyPjx0ZD5cclxuICAgICAgICA8dGV4dGFyZWEgdi1pZj1cIiFyZWFkb25seVwiIHJvd3M9XCIzXCIgdi1tb2RlbD1cIm1ldGFkYXRhWydfY29tbWVudCddXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiIHYtZWxzZT57e21ldGFkYXRhWydfY29tbWVudCddfX08L2Rpdj5cclxuICAgICAgPC90ZD48dGQgY2xhc3M9XCJjbC1kZWR1Y3RcIj57e3RvdGFsfX08L3RkPjwvdHI+XHJcbiAgICA8L3RhYmxlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgaXRlbToge2RlZmF1bHQ6IHt9fSxcclxuICAgICAgICAgIHJlYWRvbmx5OiB7ZGVmYXVsdDogZmFsc2V9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBtZXRhZGF0YToge30sXHJcbiAgICAgICAgICAgICAgdG90YWw6IDBcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgIHRoaXMubWV0YWRhdGEgPSB7fTtcclxuICAgICAgICAgIGZvcihsZXQgY2F0ZWdvcnkgb2YgdGhpcy5pdGVtLmhhbmRib29rLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICBsZXQgY2F0UG9pbnRzID0gdGhpcy5pdGVtLm1ldGFkYXRhW2NhdGVnb3J5LnRhZ107XHJcbiAgICAgICAgICAgICAgaWYoY2F0UG9pbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgY2F0UG9pbnRzID0gMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLm1ldGFkYXRhLCBjYXRlZ29yeS50YWcsIGNhdFBvaW50cyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IGNhdFBvaW50cyA9IHRoaXMuaXRlbS5tZXRhZGF0YVsnX21hbnVhbCddO1xyXG4gICAgICAgICAgaWYoY2F0UG9pbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBjYXRQb2ludHMgPSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLm1ldGFkYXRhLCAnX21hbnVhbCcsIGNhdFBvaW50cyk7XHJcblxyXG4gICAgICAgICAgbGV0IG1hbnVhbFRleHQgPSB0aGlzLml0ZW0ubWV0YWRhdGFbJ19tYW51YWxfdGV4dCddO1xyXG4gICAgICAgICAgaWYobWFudWFsVGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgbWFudWFsVGV4dCA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy4kc2V0KHRoaXMubWV0YWRhdGEsICdfbWFudWFsX3RleHQnLCBtYW51YWxUZXh0KTtcclxuXHJcbiAgICAgICAgICBsZXQgY29tbWVudCA9IHRoaXMuaXRlbS5tZXRhZGF0YVsnX2NvbW1lbnQnXTtcclxuICAgICAgICAgIGlmKGNvbW1lbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIGNvbW1lbnQgPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLm1ldGFkYXRhLCAnX2NvbW1lbnQnLCBjb21tZW50KTtcclxuXHJcbiAgICAgICAgICB0aGlzLmNvbXB1dGUoKTtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgY29tcHV0ZSgpIHtcclxuICAgICAgICAgICAgICBsZXQgdG90YWwgPSAtdGhpcy5tZXRhZGF0YVsnX21hbnVhbCddO1xyXG4gICAgICAgICAgICAgIGZvcihsZXQgY2F0ZWdvcnkgb2YgdGhpcy5pdGVtLmhhbmRib29rLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgdG90YWwgLT0gdGhpcy5tZXRhZGF0YVtjYXRlZ29yeS50YWddO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdG90YWwgKz0gdGhpcy5pdGVtLmhhbmRib29rLmZyZWU7XHJcbiAgICAgICAgICAgICAgaWYodG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsID0gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdG90YWwgKj0gdGhpcy5pdGVtLm11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdoYW5kYm9vay1kYXRhJywgeydtZXRhZGF0YSc6dGhpcy5tZXRhZGF0YSwgJ3RvdGFsJzp0aGlzLnRvdGFsfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGVkdWN0aW9uKGRlZHVjdCkge1xyXG4gICAgICAgICAgICAgIGlmKGRlZHVjdCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIC1kZWR1Y3Q7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8IS0tXHJcbkBmaWxlXHJcblRoZSBhc3NpZ25tZW50IGdyYWRpbmcgcGFnZSBmb3IgcHJlc2VudGF0aW9uIGZvciBhIHVzZXJcclxuL2NsL2dyYWRlLzphc3NpZ25tZW50XHJcbi0tPlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWdyYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsLWF1dG9iYWNrXCI+PC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiY2wtdGl0bGVcIj57e2pzb24uYXNzaWdubWVudC5uYW1lfX08L3A+XHJcbiAgICAgIDxwIHYtaWY9XCJqc29uLmRpc3B1dGUgIT09IG51bGxcIiBjbGFzcz1cImNsLWRpc3B1dGVcIj5QbGVhc2UgZGlyZWN0IGFsbCBncmFkaW5nIGlzc3VlcyB0byA8c3BhbiB2LWh0bWw9XCJqc29uLmRpc3B1dGVcIj48L3NwYW4+PC9wPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBqc29uLmdyYWRlc1wiPlxyXG4gICAgICAgIDxoMj57e2l0ZW0ubmFtZX19PC9oMj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLmhhbmRib29rID09PSB1bmRlZmluZWRcInYtaHRtbD1cIml0ZW0uaHRtbFwiPjwvZGl2PlxyXG4gICAgICAgIDxoYW5kYm9vayB2LWVsc2UgOml0ZW09XCJpdGVtXCIgcmVhZG9ubHk9XCJ0cnVlXCI+PC9oYW5kYm9vaz5cclxuICAgICAgIDxncmFkZS1oaXN0b3J5IDpoaXN0b3J5PVwiaXRlbS5oaXN0b3J5XCI+PC9ncmFkZS1oaXN0b3J5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdyYWRlXCI+XHJcbiAgICAgICAgPHAgdi1pZj1cImpzb24uZ3JhZGUgIT09IG51bGxcIj5Db21wdXRlZCBHcmFkZToge3tqc29uLmdyYWRlfX08L3A+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgIDxwPkdyYWRlIE5vdCBBdmFpbGFibGU8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlciBzbWFsbCBub3RpY2VcIj5HcmFkZXMgYXJlIG5vdCBhdmFpbGFibGUgdW50aWwgYWxsIHBhcnRzIG9mIHRoZSBhc3NpZ25tZW50IGhhdmUgYmVlbiBncmFkZWQuPC9wPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2wtYXV0b2JhY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgR3JhZGVIaXN0b3J5Q29tcG9uZW50IGZyb20gJy4uL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZSc7XHJcbiAgaW1wb3J0IFVzZXJWdWVCYXNlIGZyb20gJ3VzZXJzLWNsL2pzL1Z1ZS9Vc2VyVnVlQmFzZS52dWUnO1xyXG4gIGltcG9ydCBIYW5kYm9va0NvbXBvbmVudCBmcm9tICcuLi9IYW5kYm9vay9IYW5kYm9vay52dWUnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICdleHRlbmRzJzogVXNlclZ1ZUJhc2UsXHJcbiAgICAgIHByb3BzOiBbJ2pzb24nXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIFx0cmV0dXJuIHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgIGdyYWRlSGlzdG9yeTogR3JhZGVIaXN0b3J5Q29tcG9uZW50LFxyXG4gICAgICAgICAgaGFuZGJvb2s6IEhhbmRib29rQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogICcgKyB0aGlzLmpzb24uYXNzaWdubWVudC5zaG9ydE5hbWUgKyAnIEdyYWRlIGZvciAnICsgdGhpcy51c2VyLmRpc3BsYXlOYW1lKCkpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG1lbnUgPSBbXHJcbiAgICAgICAgICAgICAge25hbWU6ICdHcmFkZXMnLCBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBTaXRlLnJvb3QgPSAnL2NsL2dyYWRlcyc7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgdGhpcy4kcGFyZW50LnNldE1lbnUobWVudSk7XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiIsIjwhLS1cclxuQGZpbGVcclxuVGhlIGNvdXJzZSBncmFkaW5nIHBhZ2UgZm9yIHByZXNlbnRhdGlvbiBvZiBhbGwgZ3JhZGVzIGZvciBhIHVzZXJcclxuL2NsL2dyYWRlc1xyXG4tLT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cImdyYWRlICE9PSBudWxsXCI+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+QXNzaWdubWVudDwvdGg+PHRoPiZuYnNwOzwvdGg+PHRoPkdyYWRlPC90aD48dGg+Jm5ic3A7PC90aD48dGg+R3JhZGU8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjYXRlZ29yeSBpbiBncmFkZS5jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImNsLWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+e3tjYXRlZ29yeS5uYW1lfX08L3RkPjx0ZD57e2NhdGVnb3J5LnBvaW50c319JTwvdGQ+PHRkPnt7Y2F0ZWdvcnkuZ3JhZGV9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJjbC1hc3NpZ25tZW50XCIgdi1mb3I9XCJhc3NpZ25tZW50IGluIGNhdGVnb3J5LmFzc2lnbm1lbnRzXCIgOmtleT1cImFzc2lnbm1lbnQudGFnXCI+XHJcbiAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwicm9vdCArICcvY2wvZ3JhZGUvJyArIGFzc2lnbm1lbnQudGFnXCI+e3thc3NpZ25tZW50Lm5hbWV9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e2Fzc2lnbm1lbnQucG9pbnRzfX0lPC90ZD48dGQ+e3thc3NpZ25tZW50LmdyYWRlfX08L3RkPjx0ZCBjb2xzcGFuPVwiMlwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q29tcHV0ZWQgR3JhZGU6IHt7Z3JhZGUuZ3JhZGV9fSBvdXQgb2Yge3tncmFkZS5hdmFpbGFibGV9fSBhdmFpbGFibGUgcG9pbnRze3twZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFVzZXJWdWVCYXNlIGZyb20gJ3VzZXJzLWNsL2pzL1Z1ZS9Vc2VyVnVlQmFzZS52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAnZXh0ZW5kcyc6IFVzZXJWdWVCYXNlLFxyXG4gICAgICAgIHByb3BzOiBbJ2pzb24nXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGdyYWRlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGVyOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpdGxlKCdHcmFkZXMgZm9yICcgKyB0aGlzLnVzZXIuZGlzcGxheU5hbWUoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgdGhpcy5zZXRUaXRsZSgnOiBHcmFkZXMgJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyYWRlID0gdGhpcy5qc29uO1xyXG4gICAgICAgICAgICBpZih0aGlzLmdyYWRlLmF2YWlsYWJsZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyID0gJyAoJyArICh0aGlzLmdyYWRlLmdyYWRlIC8gdGhpcy5ncmFkZS5hdmFpbGFibGUgKiAxMDApLnRvRml4ZWQoMSkgKyAnJSknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1ncmFkZS1oaXN0b3J5XCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJoaXN0b3J5Mi5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cImhpc3RvcnkyLmxlbmd0aCA+IDFcIiBjbGFzcz1cImNsLXRvZ2dsZVwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXhwYW5kZXJcIj48YT57e2Rpc3BsYXkoaGlzdG9yeTJbMF0pfX0gLyBFeHBhbmQgZm9yIGFkZGl0aW9uYWwgZ3JhZGluZyBoaXN0b3J5PC9hPjwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JhZGVzXCI+XHJcbiAgICAgICAgICA8cCB2LWZvcj1cImggaW4gaGlzdG9yeTJcIj57e2Rpc3BsYXkoaCl9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgIDxwPnt7ZGlzcGxheShoaXN0b3J5MlswXSl9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2hpc3RvcnknXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkyOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgaGlzdG9yeTogZnVuY3Rpb24odG8sIGZtKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5MiA9IHRoaXMuaGlzdG9yeS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICBpZih0aGlzLmhpc3RvcnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpc3RvcnkyID0gdGhpcy5oaXN0b3J5LnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgZGlzcGxheShoaXN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZ3JhZGVyID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3N0YWZmJ10oaGlzdG9yeS5ncmFkZXIpO1xyXG4gICAgICAgICAgICAgIGxldCBzdHIgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIuYWJzb2x1dGVVTklYKGhpc3RvcnkudGltZSwgJ3Nob3J0JykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJyBieSAnICtcclxuICAgICAgICAgICAgICAgICAgICAgIGdyYWRlci5kaXNwbGF5TmFtZSgpO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbiAgZGl2LmNsLWdyYWRlLWhpc3Rvcnkge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgfVxyXG5cclxuICBwLmV4cGFuZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIGRpdi5ncmFkZXMge1xyXG4gICAgcGFkZGluZzogMnB4IDAgMnB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmZmRkO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDAgMDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHJlZj1cIm1lbnVcIiA6Y2xhc3M9XCJ1c2VDbGFzc1wiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhbC1wdXJwb3NlIG1lbnUgc3lzdGVtIFZ1ZSBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogU3VwcG9ydHMgc2ltcGxlIG1lbnVzIHdoZXJlIGEgY2xpY2sgb3BlbnMgYW5kIGNsb3NlcyBhIHB1bGwtZG93biBtZW51LlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIEluY2x1ZGUgdGhpcyBjb21wb25lbnRcclxuICAgICAqIGltcG9ydCBNZW51VnVlIGZyb20gJ3NpdGUtY2wvanMvVUkvTWVudS52dWUnO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIEFkZCBhcyBhIGNvbXBvbmVudCB0byB0aGUgVnVlOlxyXG4gICAgICogY29tcG9uZW50czoge1xyXG4gICAgICogICBtZW51VnVlOiBNZW51VnVlXHJcbiAgICAgKiB9LFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIFVzZSBpbiB0aGUgdGVtcGxhdGVcclxuICAgICAqIDxtZW51LXZ1ZSB2LW9uOm9wZW49XCJzZWxlY3RcIj48YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICogICA8dWw+XHJcbiAgICAgKiAgICAgPGxpPjxhPkZpcnN0IG9wdGlvbjwvYT48L2xpPlxyXG4gICAgICogICAgIDxsaT48YT5TZWNvbmQgb3B0aW9uPC9hPjwvbGk+XHJcbiAgICAgKiAgIDwvdWw+XHJcbiAgICAgKiA8L21lbnUtdnVlPlxyXG4gICAgICogQGNvbnN0cnVjdG9yIE1lbnVWdWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXHQgIHByb3BzOiBbJ2FkZENsYXNzJ10sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcdHVzZUNsYXNzOiAnY2wtbWVudSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgIFx0ICBcdCAgaWYodGhpcy5hZGRDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBcdCAgXHRcdCAgdGhpcy51c2VDbGFzcyArPSAnICcgKyB0aGlzLmFkZENsYXNzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBDb2xsZWN0IHVwIHRoZSBlbGVtZW50c1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBsZXQgbGlua3MgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHVscyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgb3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy4kcmVmc1snbWVudSddLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdVTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bHMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjbG9zZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBEaWQgd2UgY2xpY2sgb24gc29tZXRoaW5nIHRoYXQgaXMgYSBjaGlsZCBvZlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBtZW51IGRpdj9cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBva2F5IHdpdGggY2xpY2tzIG9uIGNoaWxkcmVuIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHBvcC11cCBtZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVscy5pbmRleE9mKGVsZW1lbnQpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy4kcmVmc1snbWVudSddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChlbGVtZW50ICE9PSBudWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbG9zZUFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBDbG9zZSBhbGwgbWVudXNcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgbGV0IGNsb3NlQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhlIGNsaWNrIG9uXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgbWVudSBpcyBwcm9jZXNzZWQgYmVmb3JlIHRoZSBtZW51XHJcbiAgICAgICAgICAgICAgICAvLyBpcyBoaWRkZW4uXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1bCBvZiB1bHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIENsaWNrIGxpc3RlbmVycyBvbiB0aGUgbGlua3NcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgY2xpY2tlZCBvbiBhIG1lbnUgbGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSBtZW51IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdWwgb2YgdWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIG1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxuYXYgY2xhc3M9XCJjbC1uYXZcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cImRpdmlkZXJzXCI+XHJcbiAgICAgICAgPGxpPjxhIDpocmVmPVwiaG9tZUxpbmtcIj48c3BhbiBjbGFzcz1cImhvbWVcIj5Ib21lPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cIml0ZW0gaW4gbWVudVwiPjxhIEBjbGljay5wcmV2ZW50PVwiaXRlbS5jbGljaygpXCI+e3tpdGVtLm5hbWV9fTwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnbWVudSddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaG9tZUxpbms6IFNpdGUucm9vdCArICcvJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8c2NyaXB0PlxyXG5cdC8qKlxyXG4gICAqIEJhc2UgY29tcG9uZW50IGZvciBwYWdlcy5cclxuICAgKiBAY29uc3RydWN0b3IgUGFnZVZ1ZUJhc2VcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblx0ICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICogU2l0ZSBvYmplY3RcclxuICAgICAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZUJhc2VcclxuICAgICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtTaXRlfSBzaXRlXHJcbiAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgc2l0ZTogU2l0ZSxcclxuXHQgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgKiBTaXRlIHJvb3QgcGF0aCAoU2l0ZS5yb290KVxyXG4gICAgICAgICAgICAgICAqIEBtZW1iZXJvZiBQYWdlVnVlQmFzZVxyXG4gICAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gcm9vdFxyXG4gICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgIHJvb3Q6IFNpdGUucm9vdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblx0ICAgICAgICAvKipcclxuICAgICAgICAgICAqIFNldCB0aGUgcGFnZSB0aXRsZVxyXG4gICAgICAgICAgICogQG1lbWJlcm9mIFBhZ2VWdWVCYXNlXHJcbiAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxyXG5cdCAgICAgICAgICovXHJcbiAgICAgICAgICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSh0aXRsZSk7XHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBzZXRNZW51OiBmdW5jdGlvbihtZW51KSB7XHJcblx0ICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0TWVudShtZW51KTtcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGdldE1lbnU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgIFx0IHJldHVybiB0aGlzLiRwYXJlbnQuZ2V0TWVudSgpO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgY2xlYXJNZW51KCkge1xyXG4gICAgICAgICAgIFx0ICB0aGlzLnNldE1lbnUoW10pO1xyXG4gICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgLyoqXHJcblx0ICAgICAgICAgICogQWRkIGFuIG9wdGlvbiB0byB0aGUgbmF2MiBtZW51LlxyXG5cdCAgICAgICAgICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgb3B0aW9uIHRvIGFkZC5cclxuXHQgICAgICAgICAgKiBAcGFyYW0gY2xvc3VyZSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VsZWN0ZWQuXHJcblx0ICAgICAgICAgICovXHJcblx0ICAgICAgICAgYWRkTWVudSh0aXRsZSwgY2xvc3VyZSkge1xyXG5cdFx0ICAgICAgICAgbGV0IG1lbnUgPSB0aGlzLmdldE1lbnUoKTtcclxuXHRcdCAgICAgICAgIG1lbnUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBjbG9zdXJlXHJcbiAgICAgICAgICAgICB9KTtcclxuXHRcdCAgICAgICAgIHRoaXMuc2V0TWVudShtZW51KTtcclxuXHQgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmV0Y2hpbmdcIiB2LWlmPVwiZGVsYXllZEZldGNoaW5nXCI+XHJcbiAgICAgIDxwPkZldGNoaW5nIGZyb20gc2VydmVyLi4uPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c2xvdCB2LWlmPVwiKGZldGNoZXIgPT09IG51bGwgfHwgIWZldGNoZXIuZmV0Y2hpbmcpICYmICFmZXRjaGluZ1wiPjwvc2xvdD5cclxuICAgIDxwIGNsYXNzPVwibW9yZVwiIHYtaWY9XCJmZXRjaGVyICE9PSBudWxsICYmIGZldGNoZXIubW9yZVwiPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJmZXRjaE1vcmVcIj5NT1JFPC9idXR0b24+PC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAvKipcclxuICAgKiBAZmlsZVxyXG4gICAqIEZldGNoZXIgY29tcG9uZW50IGRpc3BsYXlzIFwiRmV0Y2hpbmdcIiBhbmQgYSBcIm1vcmVcIiBidXR0b24uXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoZXIgZnVuY3Rpb24gdXNlZCB0byB1cGRhdGUgdGhpcyBvYmplY3QuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgZXhwb3J0IGxldCBGZXRjaGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubW9yZSA9IGZhbHNlOyAgICAgICAvLyBJbmRpY2F0ZXMgdGhlcmUgaXMgbW9yZSB0byBmZXRjaFxyXG4gICAgICB0aGlzLmZldGNoaW5nID0gZmFsc2U7ICAvLyBTZXQgdHJ1ZSB3aGlsZSB3ZSBhcmUgZmV0Y2hpbmdcclxuICAgICAgdGhpcy5mZXRjaGVkID0gZmFsc2U7ICAgLy8gU2V0IHRydWUgd2hlbiB3ZSBoYXZlIGZldGNoZWQgc29tZXRoaW5nLi4uXHJcblxyXG4gICAgICB0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oc2luZ2xlKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZihzaW5nbGUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICB0aGlzLm1vcmUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kb25lID0gZnVuY3Rpb24oc2luZ2xlKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgaWYoc2luZ2xlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5mZXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5tb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZldGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZldGNoZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZmV0Y2hlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmV0Y2hpbmc6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAnZmV0Y2hlci5mZXRjaGluZyc6IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZXRjaGluZygpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmV0Y2hpbmc6IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRGZXRjaGluZygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBzaG93RmV0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRlbGF5ZWRGZXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGltZXI6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RmV0Y2hpbmcoKTtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgZmV0Y2hNb3JlKCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5mZXRjaE1vcmUoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXRGZXRjaGluZygpIHtcclxuICAgICAgICAgICAgICAvLyBBcmUgd2UgY3VycmVudGx5IGZldGNoaW5nP1xyXG4gICAgICAgICAgICAgIGxldCBzaG93RmV0Y2hpbmcgPSAodGhpcy5mZXRjaGVyICE9PSBudWxsICYmIHRoaXMuZmV0Y2hlci5mZXRjaGluZykgfHwgdGhpcy5mZXRjaGluZztcclxuICAgICAgICAgICAgICBpZihzaG93RmV0Y2hpbmcgJiYgIXRoaXMuc2hvd0ZldGNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIEZldGNoaW5nIGlzIGJlY29taW5nIGFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5ZWRGZXRjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKCFzaG93RmV0Y2hpbmcgJiYgdGhpcy5zaG93RmV0Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5ZWRGZXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLnNob3dGZXRjaGluZyA9IHNob3dGZXRjaGluZztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH07XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL3NpdGUvc2Fzcy9tb2R1bGVzL19jb2xvcnMnO1xyXG5cclxuZGl2LmZldGNoaW5nIHtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxuXHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogJGNvbXA7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vcmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG48L3N0eWxlPiIsIjwhLS1cclxuQGZpbGVcclxuQmFzZSBjb21wb25lbnQgZm9yIHBhZ2VzIHRoYXQgaW5jbHVkZXMgc3VwcG9ydCBmb3IgdGhpcy51c2VyXHJcblxyXG5Qcm92aWRlczpcclxuc2V0VGl0bGVcclxudGhpcy5yb290XHJcbi0tPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQYWdlVnVlQmFzZSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlVnVlQmFzZS52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAnZXh0ZW5kcyc6IFBhZ2VWdWVCYXNlLFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgXHR1c2VyKCkge1xyXG4gICAgICAgIFx0XHRyZXR1cm4gIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IGRpdi5jb21tZW50LFxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgZGl2LmNvbW1lbnQsXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIGRpdi5jbC1zaG93IHtcXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxufVxcblxcbmRpdi5jbC1ncmFkZXMgdGQucm9sZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGEubGluay1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBwYWRkaW5nOiAwIDJweDtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBwLmNsLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMWVtIDAgMCAwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtZGlzcHV0ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgcC5jbC1yb2xlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBwLmNsLXJvbGUtc3RhZmYge1xcbiAgY29sb3I6ICNjNDE0MjU7XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgcC5jbC1kdWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjYzQxNDI1O1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGJ1dHRvbi5jbC1ncmFkZXItYnV0dG9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgdHIuY2wtY2F0ZWdvcnkgdGQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgdHIuY2wtY2F0ZWdvcnkgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciB0ci5jbC1hc3NpZ25tZW50IHRkIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWFzc2lnbm1lbnQgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogM2VtO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGxhYmVsLFxcbmRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYubGFiZWwge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgdGV4dGFyZWEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IGRpdi5jb21tZW50IHtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5wb2ludHMge1xcbiAgZmxleDogMCAxIGF1dG87XFxuICB3aWR0aDogNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNDVweCA1cHggMCAwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBpbnB1dCxcXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBkaXYudmFsdWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBzcGFuLm5vdCB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnZhbHVlIHtcXG4gIHBhZGRpbmc6IDJweCAxcHg7XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBhLmF2YWlsYWJsZS1jbGlja2VyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRkOmxhc3QtY2hpbGQsXFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0aDpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiAxcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMnB4O1xcbiAgbWFyZ2luOiAwIDJweDtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRkLmNsLWRlZHVjdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGRpdi5jb21tZW50IHtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXG4gIGhlaWdodDogODBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgbWFyZ2luOiAwLjNlbSAwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtcnVicmljLWV4cGFuZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sge1xcbiAgYmFja2dyb3VuZDogI2U4ZjdmMztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHA6Zmlyc3QtY2hpbGQsXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWw6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpsYXN0LWNoaWxkLFxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHVsOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgbGkuaXRlbSxcXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayBwLml0ZW0sXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWwuaXRlbXMgbGkge1xcbiAgY29sb3I6ICM5MDAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIGxpLml0ZW06aG92ZXIsXFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcC5pdGVtOmhvdmVyLFxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHVsLml0ZW1zIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiAjYzAwMDAwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIHRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgdGV4dGFyZWEueWVsbG93LXBhZCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vLi4vc2l0ZS9pbWcveWVsbG93cGFkLnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbmRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGUgcDpmaXJzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgZGl2LmNsLXNob3cge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgbWluLWhlaWdodDogOGVtO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgdGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4ZW07XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWVkaXRvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1ZW07XFxuICBoZWlnaHQ6IDEwZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMWVtIDA7XFxufVxcblxcbmRpdi5jbC1lZGl0b3IgdGV4dGFyZWEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ0ZFtkYXRhLXYtNWNmOWNkZGRdIHtcXG4gIG1pbi13aWR0aDogMzBweDtcXG59XFxuZGl2LmNhdGVnb3J5W2RhdGEtdi01Y2Y5Y2RkZF0ge1xcbiAgY29sb3I6ICNmY2FmMTc7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWdyYWRlLWhpc3RvcnlbZGF0YS12LTE3N2ZhYTUzXSB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxucFtkYXRhLXYtMTc3ZmFhNTNdIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbn1cXG5wLmV4cGFuZGVyW2RhdGEtdi0xNzdmYWE1M10ge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuZGl2LmdyYWRlc1tkYXRhLXYtMTc3ZmFhNTNdIHtcXG4gIHBhZGRpbmc6IDJweCAwIDJweCAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZDtcXG59XFxuZGl2LmdyYWRlcyBwW2RhdGEtdi0xNzdmYWE1M10ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMnB4IDAgMCAwO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5mZXRjaGluZ1tkYXRhLXYtNDNiMjZiY2JdIHtcXG4gIGhlaWdodDogMjhweDtcXG4gIG1hcmdpbjogMWVtIDA7XFxufVxcbmRpdi5mZXRjaGluZyBwW2RhdGEtdi00M2IyNmJjYl0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICNjNDE0MjU7XFxuICBwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG4ubW9yZVtkYXRhLXYtNDNiMjZiY2JdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vcmUgYnV0dG9uW2RhdGEtdi00M2IyNmJjYl0ge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGhlaWdodDogMjhweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiLCBudWxsLCB7IHVzZXI6IF92bS51c2VyIH0pXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IHJlZjogXCJzdHVkZW50cy1vbmx5XCIsIHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0gfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3R1ZGVudHMsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3R1ZGVudHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnN0dWRlbnRzKVxuICAgICAgICAgICAgICA/IF92bS5faShfdm0uc3R1ZGVudHMsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgOiBfdm0uc3R1ZGVudHNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5zdHVkZW50cyxcbiAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnN0dWRlbnRzID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgIChfdm0uc3R1ZGVudHMgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zdHVkZW50cyA9ICQkY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3ZtLnN0dWRlbnRzT25seUNoYW5nZWRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgU3R1ZGVudHMgT25seVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZmV0Y2hlclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGZldGNoZXI6IF92bS5mZXRjaGVyLCBmZXRjaGluZzogX3ZtLmZldGNoaW5nIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImRlZmF1bHRcIiwgbnVsbCwgeyB1c2VyczogX3ZtLnVzZXJzLCBzdHVkZW50czogX3ZtLnN0dWRlbnRzIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnVzZXJzLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBjb21wIGNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgVGhlcmUgYXJlIGN1cnJlbnRseSBubyBtZW1iZXJzIGVucm9sbGVkIGluIHRoaXMgc2VjdGlvbi5cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2woX3ZtLnN1Ym1pc3Npb25zLCBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKHN1Ym1pc3Npb24ubmFtZSkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN1Ym1pc3Npb24tdnVlXCIsIHsgYXR0cnM6IHsgc3VibWlzc2lvbjogc3VibWlzc2lvbiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgX3ZtLl9sKF92bS5saW5rcywgZnVuY3Rpb24obGluaykge1xuICAgICAgcmV0dXJuIF92bS51c2VyLmF0TGVhc3QobGluay5hdExlYXN0KVxuICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5yb290ICsgbGluay51cmwgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobGluay50ZXh0KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNsLXN1Ym1pc3Npb25cIiB9LFxuICAgIFtcbiAgICAgIF92bS5zdWJtaXNzaW9uLnN1Ym1pdFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLnN1Ym1pc3Npb24ub3BlblxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGhpcyBhc3NpZ25tZW50IGlzIG5vdCBvcGVuIGZvciBzdWJtaXNzaW9ucy5cIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zdGFmZlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IHByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoX3ZtLnN1Ym1pdHRlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3VibWlzc2lvbjogX3ZtLnN1Ym1pc3Npb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IG5ld19zdWJtaXNzaW9uczogX3ZtLm5ld1N1Ym1pc3Npb25zIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi5vcGVuXG4gICAgICAgICAgICAgICAgPyBfYyhfdm0uc3VibWl0dGVyLCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3VibWlzc2lvbjogX3ZtLnN1Ym1pc3Npb24gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgbmV3X3N1Ym1pc3Npb25zOiBfdm0ubmV3U3VibWlzc2lvbnMgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInN1Ym1pdHRlZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHN1Ym1pc3Npb246IF92bS5zdWJtaXNzaW9uLCBzdWJtaXNzaW9uczogX3ZtLnN1Ym1pc3Npb25zIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zdWJtaXNzaW9uLmFkZGl0aW9uYWwgIT09IG51bGxcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc3VibWlzc2lvbi5hZGRpdGlvbmFsKSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImVtXCIsIFtfdm0uX3YoXCIuLi5TdGFmZiBvbmx5IGZvciBzdWJtaXNzaW9uIHRlc3RpbmcuLi5cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgYWN0aW9uOiBfdm0uYWN0aW9uLFxuICAgICAgICAgIHRhcmdldDogXCJ1cGxvYWRfdGFyZ2V0X1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHN1Ym1pdDogX3ZtLnN1Ym1pdCB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJTdWJtaXQ6IFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgbmFtZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiVXBsb2FkIEZpbGVcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlmcmFtZVwiLCB7XG4gICAgICAgICAgcmVmOiBcImlmcmFtZVwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjBweCBzb2xpZCAjZmZmXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGxvYWRfdGFyZ2V0X1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnLCBzcmM6IFwiXCIgfSxcbiAgICAgICAgICBvbjogeyBsb2FkOiBfdm0ubG9hZCB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgICB0YXJnZXQ6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZ1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zdWJtaXQgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiU3VibWl0OiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJmaWxlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIG5hbWU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlVwbG9hZCBGaWxlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpZnJhbWVcIiwge1xuICAgICAgICAgIHJlZjogXCJpZnJhbWVcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IFwiMFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIwcHggc29saWQgI2ZmZlwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZywgc3JjOiBcIlwiIH0sXG4gICAgICAgICAgb246IHsgbG9hZDogX3ZtLmxvYWQgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW19jKFwiZGl2XCIsIHsgcmVmOiBcImVkaXRvclwiIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJTdWJtaXRcIiB9IH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzaG91dG91dFwiIH0sIFtcbiAgICAgIF92bS5fdihcIlN1Ym1pc3Npb24gdHlwZSBcIiksXG4gICAgICBfYyhcImVtXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vcHRpb25zLnR5cGUpKV0pLFxuICAgICAgX3ZtLl92KFwiIGlzIG5vdCBzdXBwb3J0ZWRcIilcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIFtcbiAgICAgICAgX3ZtLnN1Ym1pc3Npb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsYXJnZSBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTm8gc3VibWlzc2lvbnMsIHlldC5cIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnN1Ym1pc3Npb25zLCBmdW5jdGlvbihzdWJtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN1Ym1pdHRlZC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBfdm0uc3VibWlzc2lvbi5hc3NpZ25UYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IF92bS5zdWJtaXNzaW9uLnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pc3Npb246IHN1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5c2lzOiBfdm0uc3VibWlzc2lvbi5hbmFseXNpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1pbmc6IF92bS5zdWJtaXNzaW9uLnRlYW1pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IF92bS5hbmFseXNpc1Jlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfaW1nOiBfdm0ucHJldmlld19pbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3OiBfdm0ucHJldmlld2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi50eXBlID09PSBcInRleHRcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJDbGljayBvbiBhbnkgc3VibWlzc2lvbiBkYXRlIHRvIGRpc3BsYXkgdGhlIHN1Ym1pc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5zdWJtaXNzaW9uLnR5cGUgPT09IFwicHJvZ3JhbVwiXG4gICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGZvciBzdWJtaXNzaW9uIG9wdGlvbnNcIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24udHlwZSA9PT0gXCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIHRvIHZpZXcgYW5kIGZvciBzdWJtaXNzaW9uIG9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5wcmV2aWV3VHh0ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5wcmV2aWV3VHh0ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXByZXZpZXcgeWVsbG93LXBhZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJldmlld1R4dCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldy10aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnByZXZpZXdUaW1lKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5yZXN1bHQgIT09IG51bGxcbiAgICAgID8gX2MoXCJwcmVcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1hbmFseXNpc1wiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yZXN1bHQpKV0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnByZXZpZXdJbWcgIT09IG51bGxcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5wcmV2aWV3SW1nICE9PSBudWxsXG4gICAgICAgICAgICA/IF9jKFwiZmlndXJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlld1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnByZXZpZXdJbWcgfSB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXByZXZpZXctdGltZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByZXZpZXdUaW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3VibWlzc2lvbnNcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5pc1RleHQoKVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RUZXh0KClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KCkpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIDogX3ZtLmlzSW1hZ2UoKVxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KCkpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZW51LXZ1ZVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiwgb246IHsgb3BlbjogX3ZtLnNlbGVjdCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIk1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS50b0Rvd25sb2FkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBEb3dubG9hZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYW5hbHlzaXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dBbmFseXNpcyhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pY29uLCBhbHQ6IGl0ZW0ubWVudSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLm1lbnUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIF9jKFwibWVudS12dWVcIiwgeyBvbjogeyBvcGVuOiBfdm0uc2VsZWN0IH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheSgpKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJNZW51XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0udG9Eb3dubG9hZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL2Rvd25sb2FkLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERvd25sb2FkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYW5hbHlzaXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmljb24sIGFsdDogaXRlbS5tZW51IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0ubWVudSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlcnNmZXRjaGVyXCIsIHtcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidmVydGljYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlY3Rpb24uYXNzaWdubWVudHMuY2F0ZWdvcmllcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChjYXRlZ29yeS5hc3NpZ25tZW50cywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50LnNob3J0bmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIGNhdGVnb3J5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChmZXRjaGVyLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogdXNlci5yb2xlKCkgIT09IFwiVFwiID8gXCJpZ25vcmVcIiA6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLmxpbmsgKyB1c2VyLm1lbWJlci5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0ubGluayArIHVzZXIubWVtYmVyLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKCkpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChjYXRlZ29yeS5hc3NpZ25tZW50cywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXNzaWdubWVudEdyYWRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmNhdGVnb3J5R3JhZGUodXNlciwgY2F0ZWdvcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlcnNmZXRjaGVyXCIsIHtcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmV0Y2hlci51c2VycywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IHVzZXIucm9sZSgpICE9PSBcIlRcIiA/IFwiaWdub3JlXCIgOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS5saW5rICsgdXNlci5tZW1iZXIuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLmxpbmsgKyB1c2VyLm1lbWJlci5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSgpKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJmZXRjaGVyXCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IF92bS5tZW1iZXJpZCxcbiAgICAgICAgICAgIGZhaWxsaW5rOiBfdm0ucm9vdCArIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL2xpbmtzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGZldGNoZWQ6IF92bS5mZXRjaGVkIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicHJldi1uZXh0XCIsIHsgYXR0cnM6IHsgdXNlcjogZmV0Y2hlci51c2VyIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyICE9PSBudWxsICYmIF92bS5ncmFkZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFzc2lnbm1lbnRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJHcmFkZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkdyYWRlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ3JhZGUuY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jYXRlZ29yeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5wb2ludHMpICsgXCIlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5ncmFkZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChjYXRlZ29yeS5hc3NpZ25tZW50cywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYXNzaWdubWVudC50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWFzc2lnbm1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ncmFkaW5nL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudC50YWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGFzc2lnbm1lbnQucG9pbnRzKSArIFwiJVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50LmdyYWRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2sgb24gZWFjaCBhc3NpZ25tZW50IGZvciBtb3JlIGdyYWRpbmcgZGV0YWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wdXRlZCBHcmFkZTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZS5ncmFkZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgb3V0IG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ3JhZGUuYXZhaWxhYmxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBhdmFpbGFibGUgcG9pbnRzXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiR3JhZGVzIFN1bW1hcnlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0ucm9vdCArIFwiL2NsL2NvbnNvbGUvZ3JhZGVzL2FsbFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWxsIFN0dWRlbnRzXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS5yb290ICsgXCIvY2wvY29uc29sZS9ncmFkZXMvbGlua3NcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkFsbCBTdHVkZW50cyBHcmFkZSBMaW5rc1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRvd25sb2FkUGVybWlzc2lvblxuICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ucm9vdCArIFwiL2NsL2dyYWRlcy9jc3ZcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRvd25sb2FkIFN0dWRlbnQgR3JhZGVzXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uc2VjdGlvbi5hc3NpZ25tZW50cy5jYXRlZ29yaWVzLCBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hc3NpZ25tZW50cy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbX2MoXCJlbVwiLCBbX3ZtLl92KFwiUGVuZGluZy4uLlwiKV0pXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woY2F0ZWdvcnkuYXNzaWdubWVudHMsIGZ1bmN0aW9uKGFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogYXNzaWdubWVudC50YWcgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLmdyYWRpbmdMaW5rICsgYXNzaWdubWVudC50YWcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoYXNzaWdubWVudC5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLmF0TGVhc3QoX3ZtLnRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluay1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL3J1YnJpYy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudC50YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJydWJyaWNzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWdyYWRlc1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInN1Ym1pc3Npb25zLWxpbmtzXCIsIHsgYXR0cnM6IHsgYXNzaWdubWVudDogX3ZtLmFzc2lnbm1lbnQgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJtZW1iZXJzZmV0Y2hlclwiLCB7XG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2ZXJ0aWNhbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYXJ0cywgZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKHBhcnQubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiR3JhZGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiB1c2VyLnJvbGUoKSAhPT0gXCJUXCIgPyBcImlnbm9yZVwiIDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBfdm0ubGluayArIHVzZXIubWVtYmVyLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogX3ZtLmxpbmsgKyB1c2VyLm1lbWJlci5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicm9sZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHVzZXIucm9sZU5hbWUoKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhcnRzLCBmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhcnRHcmFkZSh1c2VyLCBwYXJ0KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZ3JhZGUodXNlcikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImVtXCIsIFtfdm0uX3YoXCJjb3VudHNcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmZXRjaGVyLnVzZXJzLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhcnRzLCBmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wYXJ0Q291bnQoZmV0Y2hlci51c2VycywgcGFydCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdyYWRlcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZXNDb3VudChmZXRjaGVyLnVzZXJzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJlbVwiLCBbX3ZtLl92KFwiYXZlcmFnZXNcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGFydHMsIGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBhcnRBdmVyYWdlKGZldGNoZXIudXNlcnMsIHBhcnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ncmFkZXMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ3JhZGVBdmVyYWdlKGZldGNoZXIudXNlcnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibWVtYmVyZmV0Y2hlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5tZW1iZXJpZCwgZmFpbGxpbms6IF92bS5ncmFkaW5nTGluayB9LFxuICAgICAgICAgIG9uOiB7IGZldGNoZWQ6IF92bS5mZXRjaGVkIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicHJldi1uZXh0XCIsIHsgYXR0cnM6IHsgdXNlcjogZmV0Y2hlci51c2VyIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVyLnVzZXIucm9sZSgpID09PSBcIlRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNsLXJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNsLXJvbGUgY2wtcm9sZS1zdGFmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmV0Y2hlci51c2VyLnJvbGVOYW1lKCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmV0Y2hlci51c2VyLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmZXRjaGVyLnVzZXIucm9sZSgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJlbVwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZmV0Y2hlci51c2VyLnVzZXJJZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWdyYWRlci1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbWFpbChmZXRjaGVyLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgZW1haWwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlci5yb2xlTmFtZSgpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtZ3JhZGVyLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9ncmFkZXMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlci5tZW1iZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJzdHVkZW50IGdyYWRlc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmR1ZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1kdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBc3NpZ25tZW50IGR1ZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGltZShfdm0uZHVlKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmdyYWRlcnMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1ncmFkZXItaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1YnJpYyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLXRvZ2dsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLXJ1YnJpYy1leHBhbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRXhwYW5kIGZvciBydWJyaWNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsLXJ1YnJpY2Jsb2NrIGNsLWNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1YnJpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmhhbmRib29rID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhpdGVtLmh0bWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImhhbmRib29rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFuZGJvb2stZGF0YVwiOiBfdm0uaGFuZGJvb2tEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZ3JhZGUtaGlzdG9yeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBoaXN0b3J5OiBpdGVtLmhpc3RvcnkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3VibWlzc2lvbnNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogZmV0Y2hlci51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ250YWc6IF92bS5hc3NpZ250YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXZpZXdpbmcgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoX3ZtLnJldmlld2luZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBfdm0uYXNzaWdudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogZmV0Y2hlci51c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ3JhZGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ3JhZGUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXB1dGVkIEdyYWRlOiBcIiArIF92bS5fcyhfdm0uZ3JhZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiR3JhZGUgTm90IEF2YWlsYWJsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlciBzbWFsbCBub3RpY2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmFkZXMgYXJlIG5vdCBhdmFpbGFibGUgdW50aWwgYWxsIHBhcnRzIG9mIHRoZSBhc3NpZ25tZW50IGhhdmUgYmVlbiBncmFkZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5ydWJyaWMubmFtZSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBfdm0uc3VibWl0KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1ydWJyaWNibG9jayBjbC1zaG93XCIsXG4gICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJ1YnJpYy5zaG93KSB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJlZGl0b3JcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSxcbiAgICBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5ydWJyaWNzLCBmdW5jdGlvbihydWJyaWMpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1ydWJyaWNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicnVicmljLWVkaXRvclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGFzc2lnbnRhZzogX3ZtLmFzc2lnbnRhZywgcnVicmljOiBydWJyaWMgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC10b2dnbGVcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW1xuICAgICAgICBfYyhcImFcIiwgW192bS5fdihcIkV4cGFuZCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNyZWF0aW5nIHJ1YnJpY3MuXCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdG9nZ2xlYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJSdWJyaWNzIGFyZSBlbnRlcmVkIGFzIEhUTUwuIEEgY29tbW9uIGZvcm1hdCBpcyB0b1xcbiAgICAgICAgY3JlYXRlIGxpc3RzIHVzaW5nIDx1bD4gYW5kIDxsaT4gdGFncy5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJDb250ZW50cyBvZiBhbiA8bGk+IG9yIDxwPiB0YWcgY2FuIGJlIG1ha2VcXG4gICAgICAgIGNsaWNrYWJsZSBzbyB0aGV5IGF1dG9tYXRpY2FsbHkgYXBwZWFyIGluIHRoZSBjb21tZW50XFxuICAgICAgICB3aW5kb3cgYnkgYWRkaW5nIHRoZSBjbGFzcyAnaXRlbScuIEFsbCA8bGk+IGNoaWxkcmVuXFxuICAgICAgICBvZiBhIDx1bD4gY2FuIGJlIG1hZGUgY2xpY2thYmxlIGJ5IGFkZGluZyB0aGVcXG4gICAgICAgIGNsYXNzICdpdGVtcyc6XCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNvZGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgJzx1bD5cXG4gICA8bGkgY2xhc3M9XCJpdGVtXCI+VGhpcyBpdGVtIHdpbGwgYmUgY2xpY2thYmxlPC9saT5cXG4gICA8bGk+VGhpcyBpdGVtIHdpbGwgbm90IGJlIGNsaWNrYWJsZTwvbGk+XFxuPC91bD5cXG5cXG48cCBjbGFzcz1cIml0ZW1cIj5BbmQgdGhpcyB3aWxsIGJlIGNsaWNrYWJsZTwvcD5cXG5cXG48dWwgY2xhc3M9XCJpdGVtc1wiPlxcbiAgIDxsaT5BbGwgb2YgdGhlc2UgaXRlbXMgd2lsbCBiZSBjbGlja2FibGU8L2xpPlxcbiAgIDxsaT5UaGlzIG9uZSwgdG9vITwvbGk+XFxuPC91bD5cXG4gICAgICAnXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJ0YWJsZVwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1oYW5kYm9va1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ2F0ZWdvcnlcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiTXVsdGlwbGllcjogXCIgKyBfdm0uX3MoX3ZtLml0ZW0ubXVsdGlwbGllcikpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLml0ZW0uaGFuZGJvb2suY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkucnVicmljICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdG9nZ2xlIGNsLXNpbmdsZS1zcGFjZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKV0pXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1ydWJyaWNibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKGNhdGVnb3J5LnJ1YnJpYykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICA6IFtfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKV1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICA/IF92bS5fbChjYXRlZ29yeS5kZWR1Y3QgKyAxLCBmdW5jdGlvbihkZWR1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRhZGF0YVtjYXRlZ29yeS50YWddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0YWRhdGFbY2F0ZWdvcnkudGFnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWR1Y3QgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldGFkYXRhW2NhdGVnb3J5LnRhZ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVkdWN0IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWV0YWRhdGEsIGNhdGVnb3J5LnRhZywgZGVkdWN0IC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb21wdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRlZHVjdGlvbihfdm0ubWV0YWRhdGFbY2F0ZWdvcnkudGFnXSkpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgIV92bS5yZWFkb25seVxuICAgICAgICAgICAgICA/IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0YWRhdGFbXCJfbWFudWFsX3RleHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRhZGF0YVsnX21hbnVhbF90ZXh0J11cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWV0YWRhdGFbXCJfbWFudWFsX3RleHRcIl0gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX21hbnVhbF90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLm1ldGFkYXRhW1wiX21hbnVhbF90ZXh0XCJdKSldKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0ucmVhZG9ubHlcbiAgICAgICAgICAgICAgICA/IF92bS5fbCg1LCBmdW5jdGlvbihkZWR1Y3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRhZGF0YVtcIl9tYW51YWxcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0YWRhdGFbJ19tYW51YWwnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlZHVjdCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoX3ZtLm1ldGFkYXRhW1wiX21hbnVhbFwiXSwgZGVkdWN0IC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1ldGFkYXRhLCBcIl9tYW51YWxcIiwgZGVkdWN0IC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbXB1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGVkdWN0aW9uKF92bS5tZXRhZGF0YVtcIl9tYW51YWxcIl0pKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAhX3ZtLnJlYWRvbmx5XG4gICAgICAgICAgICAgID8gX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRhZGF0YVtcIl9jb21tZW50XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0YWRhdGFbJ19jb21tZW50J11cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCIzXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWV0YWRhdGFbXCJfY29tbWVudFwiXSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5tZXRhZGF0YSwgXCJfY29tbWVudFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbW1lbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5tZXRhZGF0YVtcIl9jb21tZW50XCJdKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1kZWR1Y3RcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0udG90YWwpKV0pXG4gICAgICAgIF0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhcIiwgW192bS5fdihcIkRlZHVjdGlvblwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwiMCB0byBtYXhcIildKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtaW50ZXJuYWxcIiB9LCBbXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb21tZW50XCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEZWR1Y3Rpb25cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZ3JhZGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtYXV0b2JhY2tcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uanNvbi5hc3NpZ25tZW50Lm5hbWUpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmpzb24uZGlzcHV0ZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtZGlzcHV0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiUGxlYXNlIGRpcmVjdCBhbGwgZ3JhZGluZyBpc3N1ZXMgdG8gXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uanNvbi5kaXNwdXRlKSB9IH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uanNvbi5ncmFkZXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIGl0ZW0uaGFuZGJvb2sgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhpdGVtLmh0bWwpIH0gfSlcbiAgICAgICAgICAgICAgICA6IF9jKFwiaGFuZGJvb2tcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtLCByZWFkb25seTogXCJ0cnVlXCIgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJncmFkZS1oaXN0b3J5XCIsIHsgYXR0cnM6IHsgaGlzdG9yeTogaXRlbS5oaXN0b3J5IH0gfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdyYWRlXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uanNvbi5ncmFkZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KFwiQ29tcHV0ZWQgR3JhZGU6IFwiICsgX3ZtLl9zKF92bS5qc29uLmdyYWRlKSldKVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiR3JhZGUgTm90IEF2YWlsYWJsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlciBzbWFsbCBub3RpY2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIkdyYWRlcyBhcmUgbm90IGF2YWlsYWJsZSB1bnRpbCBhbGwgcGFydHMgb2YgdGhlIGFzc2lnbm1lbnQgaGF2ZSBiZWVuIGdyYWRlZC5cIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1hdXRvYmFja1wiIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1ncmFkZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSwgW1xuICAgICAgX3ZtLmdyYWRlICE9PSBudWxsXG4gICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ3JhZGUuY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jYXRlZ29yeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNhdGVnb3J5Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkucG9pbnRzKSArIFwiJVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkuZ3JhZGUpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woY2F0ZWdvcnkuYXNzaWdubWVudHMsIGZ1bmN0aW9uKGFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogYXNzaWdubWVudC50YWcsIHN0YXRpY0NsYXNzOiBcImNsLWFzc2lnbm1lbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5yb290ICsgXCIvY2wvZ3JhZGUvXCIgKyBhc3NpZ25tZW50LnRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoYXNzaWdubWVudC5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50LnBvaW50cykgKyBcIiVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50LmdyYWRlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW192bS5fdihcIsKgXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkNsaWNrIG9uIGVhY2ggYXNzaWdubWVudCBmb3IgbW9yZSBncmFkaW5nIGRldGFpbFwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJDb21wdXRlZCBHcmFkZTogXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ncmFkZS5ncmFkZSkgK1xuICAgICAgICAgICAgICAgICAgXCIgb3V0IG9mIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ3JhZGUuYXZhaWxhYmxlKSArXG4gICAgICAgICAgICAgICAgICBcIiBhdmFpbGFibGUgcG9pbnRzXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wZXIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFzc2lnbm1lbnRcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJHcmFkZVwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkdyYWRlXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1ncmFkZS1oaXN0b3J5XCIgfSwgW1xuICAgIF92bS5oaXN0b3J5Mi5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfdm0uaGlzdG9yeTIubGVuZ3RoID4gMVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXRvZ2dsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJleHBhbmRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc3BsYXkoX3ZtLmhpc3RvcnkyWzBdKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBFeHBhbmQgZm9yIGFkZGl0aW9uYWwgZ3JhZGluZyBoaXN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ3JhZGVzXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaGlzdG9yeTIsIGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheShoKSkpXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheShfdm0uaGlzdG9yeTJbMF0pKSldKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyByZWY6IFwibWVudVwiLCBjbGFzczogX3ZtLnVzZUNsYXNzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwibmF2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtbmF2XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGl2aWRlcnNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaG9tZUxpbmsgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImhvbWVcIiB9LCBbX3ZtLl92KFwiSG9tZVwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5tZW51LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLmRlbGF5ZWRGZXRjaGluZ1xuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmV0Y2hpbmdcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkZldGNoaW5nIGZyb20gc2VydmVyLi4uXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIChfdm0uZmV0Y2hlciA9PT0gbnVsbCB8fCAhX3ZtLmZldGNoZXIuZmV0Y2hpbmcpICYmICFfdm0uZmV0Y2hpbmdcbiAgICAgICAgPyBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZldGNoZXIgIT09IG51bGwgJiYgX3ZtLmZldGNoZXIubW9yZVxuICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vcmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmV0Y2hNb3JlKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJNT1JFXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNmOWNkZGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI4MjIxNThmOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjZjljZGRkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjZjljZGRkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTc3ZmFhNTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2YWZmYjgzY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3N2ZhYTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3N2ZhYTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzYjI2YmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDUxZWMxYTRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDNiMjZiY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzYjI2YmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjllMzU1YTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjllMzU1YTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uc29sZUNvbXBvbmVudEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhOWE1NWM2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGE5YTU1YzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGE5YTU1YzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhOWE1NWM2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhOWE1NWM2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTlhNTVjNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYWI0NGQyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZWFiNDRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZWFiNDRkMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYWI0NGQyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNlYWI0NGQyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VhYjQ0ZDImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ByZXZOZXh0TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOWVhZGQ4ZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QcmV2TmV4dE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ByZXZOZXh0TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzllYWRkOGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzllYWRkOGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ByZXZOZXh0TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOWVhZGQ4ZCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczOWVhZGQ4ZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvUHJldk5leHRNZW1iZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJldk5leHRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2TmV4dE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJldk5leHRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5ZWFkZDhkJlwiIiwiY29uc3QgTE9DQUxfU1RPUkFHRV9TVFVERU5UU19PTkxZID0gJ2NsX3N0dWRlbnRzX29ubHknO1xyXG5cclxuLyoqXHJcbiAqIEl0ZW0gaW4gbG9jYWwgc3RvcmFnZSB0aGF0IG1haW50YWlucyB0aGUgc3RhdGUgb2ZcclxuICogXCJzdHVkZW50cyBvbmx5XCIgaW4gdGhlIGNvbnNvbGUuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN0dWRlbnRzT25seSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5TdHVkZW50c09ubHkuZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRsZXQgcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfU1RVREVOVFNfT05MWSk7XHJcblx0cmV0dXJuIHMgPT09ICd5ZXMnO1xyXG59XHJcblxyXG5TdHVkZW50c09ubHkuc2V0ID0gZnVuY3Rpb24oc3R1ZGVudHMpIHtcclxuXHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU1RVREVOVFNfT05MWSwgc3R1ZGVudHMgPyAneWVzJyA6ICdubycpO1xyXG5cclxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZmRkZDUwNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxZmRkZDUwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxZmRkZDUwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZmRkZDUwNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxZmRkZDUwNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWZkZGQ1MDYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk2NzQ0YjZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXNzaW9uc0xpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTY3NDRiNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTY3NDRiNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk2NzQ0YjZlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk2NzQ0YjZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNMaW5rcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0xpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTY3NDRiNmUmXCIiLCIvKipcclxuICogQGZpbGUgTWVtYmVyIG9mIGEgY291cnNlXHJcbiAqIEF0dGFjaGVzIHRvIGEgdXNlciBPYmplY3RcclxuICovXHJcblxyXG5pbXBvcnQge01lbWJlcnNoaXB9IGZyb20gJy4uLy4uLy4uL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMnO1xyXG5cclxubGV0IE1lbWJlciA9IGZ1bmN0aW9uKGpzb24pIHtcclxuICAgIE1lbWJlcnNoaXAuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBsZXQgcm9sZSA9ICdHJztcclxuXHJcbiAgICBpZihqc29uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmlkID0ganNvbi5pZDtcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0ganNvbi5zZW1lc3RlcjtcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBqc29uLnNlY3Rpb247XHJcbiAgICAgICAgcm9sZSA9IGpzb24ucm9sZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7ICAgIC8vIFN5c3RlbSBtZW1iZXJzaGlwIElEXHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IG51bGw7ICAgLy8gU2VtZXN0ZXIgY29kZVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IG51bGw7ICAvLyBTZWN0aW9uIElkXHJcbiAgICAgICAgcm9sZSA9IG51bGw7ICAgICAgIC8vIE1lbWJlcnNoaXAgcm9sZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm9sZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiByb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0Um9sZSA9IGZ1bmN0aW9uKHJvbGVfKSB7XHJcbiAgICAgICAgcm9sZSA9IHJvbGVfO1xyXG4gICAgfVxyXG59XHJcblxyXG5NZW1iZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNZW1iZXJzaGlwLnByb3RvdHlwZSk7XHJcbk1lbWJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNZW1iZXI7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBjb3Vyc2Ugc2VjdGlvbiBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5NZW1iZXIucHJvdG90eXBlLmdldFNlY3Rpb24gPSBmdW5jdGlvbihzdG9yZSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10odGhpcy5zZW1lc3RlciwgdGhpcy5zZWN0aW9uKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbiBhc3NpZ25tZW50IGZvciBhIG1lbWJlclxyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxyXG4gKiBAcGFyYW0gYXNzaWdudGFnIEFzc2lnbm1lbnQgdGFnXHJcbiAqL1xyXG5NZW1iZXIucHJvdG90eXBlLmdldEFzc2lnbm1lbnQgPSBmdW5jdGlvbihzdG9yZSwgYXNzaWdudGFnKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHN0b3JlKTtcclxuICAgIHJldHVybiBzZWN0aW9uLmdldEFzc2lnbm1lbnQoYXNzaWdudGFnKTtcclxufVxyXG5cclxuXHJcbi8vIFRoZSBwb3NzaWJsZSBtZW1iZXIgcm9sZXNcclxuLy8gTXVzdCBtYXRjaCB2YWx1ZXMgaW4gTWVtYmVyLnBocFxyXG5NZW1iZXIuR1VFU1QgPSAnRyc7ICAgICAvLy88IEd1ZXN0IHVzZXIgdmlzaXRpbmcgdGhlIHNpdGVcclxuTWVtYmVyLlVTRVIgPSAnVSc7ICAgICAgLy8vPCBTdGFuZGFyZCB1c2VyIGZyb20gVXNlciwgZG9uJ3QgdXNlIGZvciBNZW1iZXJcclxuTWVtYmVyLkRST1BQRUQgPSAnRCc7ICAgLy8vPCBVc2VyIGhhcyBkcm9wcGVkIHRoZSBjb3Vyc2VcclxuTWVtYmVyLlNUVURFTlQgPSAnVCc7ICAgLy8vPCBFbnJvbGxlZCBzdHVkZW50IGluIGNvdXJzZVxyXG5NZW1iZXIuU1RBRkYgPSAnUyc7ICAgICAvLy88IEFueSBjb3Vyc2Ugc3RhZmZcclxuTWVtYmVyLkdSQURFUiA9ICdSJzsgICAgLy8vPCBHcmFkZXJzXHJcbk1lbWJlci5UQSA9ICdFJzsgICAgICAgIC8vLzwgVGVhY2hpbmcgYXNzaXN0YW50XHJcbk1lbWJlci5JTlNUUlVDVE9SID0gJ0knOyAgICAvLy88IENvdXJzZSBpbnN0cnVjdG9yXHJcbk1lbWJlci5BRE1JTiA9ICdBJzsgICAgIC8vLzwgQWRtaW5cclxuXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0Um9sZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCByb2xlcyA9IHt9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkdVRVNUXSA9IHtuYW1lOiAnR3Vlc3QnLCBwcmlvcml0eTogMX07XHJcbiAgICByb2xlc1tNZW1iZXIuRFJPUFBFRF0gPSB7bmFtZTogJ0Ryb3BwZWQnLCBwcmlvcml0eTogMn07XHJcbiAgICByb2xlc1tNZW1iZXIuVVNFUl0gPSB7bmFtZTogJ1VzZXInLCBwcmlvcml0eTogMywgc2tpcDogdHJ1ZX07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RVREVOVF0gPSB7bmFtZTogJ1N0dWRlbnQnLCBwcmlvcml0eTogNH07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RBRkZdID0ge25hbWU6ICdTdGFmZicsIHByaW9yaXR5OiA1LCBza2lwOiB0cnVlfTtcclxuICAgIHJvbGVzW01lbWJlci5HUkFERVJdID0ge25hbWU6ICdHcmFkZXInLCBwcmlvcml0eTogNn07XHJcbiAgICByb2xlc1tNZW1iZXIuVEFdID0ge25hbWU6ICdUZWFjaGluZyBBc3Npc3RhbnQnLCBwcmlvcml0eTogN307XHJcbiAgICByb2xlc1tNZW1iZXIuSU5TVFJVQ1RPUl0gPSB7bmFtZTogJ0luc3RydWN0b3InLCBwcmlvcml0eTogOH07XHJcbiAgICByb2xlc1tNZW1iZXIuQURNSU5dID0ge25hbWU6ICdBZG1pbicsIHByaW9yaXR5OiAxMDB9O1xyXG5cclxuICAgIHJldHVybiByb2xlcztcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7TWVtYmVyfTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWY0NjYwMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE1ZjQ2NjAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE1ZjQ2NjAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWY0NjYwMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNWY0NjYwMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjIwYzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyYjYyMGMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyYjYyMGMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjIwYzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDJiNjIwYzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjIwYzImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhYTFlNTcwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2FhMWU1NzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2FhMWU1NzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhYTFlNTcwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNhYTFlNTcwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMWQwYTk5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzExZDBhOTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzExZDBhOTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMWQwYTk5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxMWQwYTk5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzExZDBhOTkmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDZmZDQ4MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDZmZDQ4MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2ZmQ0ODBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZmZDQ4MGUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI0ZGFkNzcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDI0ZGFkNzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDI0ZGFkNzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI0ZGFkNzcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDI0ZGFkNzcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNGRhZDc3JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDY5NDNhYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUwNjk0M2FhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUwNjk0M2FhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDY5NDNhYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDY5NDNhYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhJlwiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2dyYWRlcy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIwY2E4MTMyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19ncmFkZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19ncmFkZXMuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHtHcmFkZXNGYWN0b3J5fSBmcm9tICcuL2pzL0dyYWRlc0ZhY3RvcnknO1xyXG5pbXBvcnQge0dyYWRlc0NvbnNvbGV9IGZyb20gJy4vanMvQ29uc29sZS9HcmFkZXNDb25zb2xlJ1xyXG5pbXBvcnQgJy4vX2dyYWRlcy5zY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHcmFkZXMgPSBHcmFkZXNGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xyXG5cclxuaWYoU2l0ZS5TaXRlLmNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgR3JhZGVzQ29uc29sZS5pbnN0YWxsKFNpdGUuU2l0ZS5jb25zb2xlKTtcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNmOWNkZGQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNmOWNkZGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1Y2Y5Y2RkZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVjZjljZGRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVjZjljZGRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjZjljZGRkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVjZjljZGRkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvR3JhZGVzQWxsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc0FsbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01Y2Y5Y2RkZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzQWxsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjZjljZGRkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNBbGwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjZjljZGRkJnNjb3BlZD10cnVlJlwiIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEluc3RhbGwgaW50byB0aGUgZ3JhZGVzIGNvbnNvbGUgc3lzdGVtLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7TWVtYmVyfSBmcm9tICdjb3Vyc2UtY2wvanMvTWVtYmVycy9NZW1iZXInO1xyXG5cclxuaW1wb3J0IEdyYWRpbmdWdWUgZnJvbSAnLi9HcmFkaW5nLnZ1ZSc7XHJcbmltcG9ydCBHcmFkaW5nQXNzaWdubWVudFZ1ZSBmcm9tICcuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZSc7XHJcbmltcG9ydCBHcmFkaW5nQXNzaWdubWVudE1lbWJlclZ1ZSBmcm9tICcuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZSdcclxuaW1wb3J0IEdyYWRlc0xpbmtzVnVlIGZyb20gJy4vR3JhZGVzTGlua3MudnVlJztcclxuaW1wb3J0IEdyYWRlc0FsbFZ1ZSBmcm9tICcuL0dyYWRlc0FsbC52dWUnO1xyXG5pbXBvcnQgR3JhZGVzTWVtYmVyVnVlIGZyb20gJy4vR3JhZGVzTWVtYmVyLnZ1ZSc7XHJcbmltcG9ydCBSdWJyaWNzRWRpdG9yVnVlIGZyb20gJy4vUnVicmljc0VkaXRvci52dWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyYWRlc0NvbnNvbGUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuR3JhZGVzQ29uc29sZS5pbnN0YWxsID0gZnVuY3Rpb24oQ29uc29sZSkge1xyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcbiAgICAgICAgYXRMZWFzdDogTWVtYmVyLkdSQURFUixcclxuICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgIGF0TGVhc3Q6IE1lbWJlci5HUkFERVIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnR3JhZGluZycsXHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2dyYWRpbmcnLFxyXG4gICAgICAgICAgICBvcmRlcjogNCxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBHcmFkaW5nVnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZFJvdXRlcyhbXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRpbmcvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogR3JhZGluZ0Fzc2lnbm1lbnRWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGluZy86YXNzaWdudGFnLzptZW1iZXJpZCcsIGNvbXBvbmVudDogR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXJWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvcnVicmljLzphc3NpZ250YWcnLCBjb21wb25lbnQ6IFJ1YnJpY3NFZGl0b3JWdWUsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvZ3JhZGVzL2xpbmtzJywgY29tcG9uZW50OiBHcmFkZXNMaW5rc1Z1ZX0sXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRlcy9hbGwnLCBjb21wb25lbnQ6IEdyYWRlc0FsbFZ1ZX0sXHJcbiAgICAgICAge3JvdXRlOiAnL2dyYWRlcy86bWVtYmVyaWQnLCBjb21wb25lbnQ6IEdyYWRlc01lbWJlclZ1ZSwgcHJvcHM6IHRydWV9XHJcbiAgICBdKTtcclxuXHJcbiAgICBDb25zb2xlLnRhYmxlcy5hZGQoe1xyXG4gICAgICAgIHRpdGxlOiAnR3JhZGVzJyxcclxuICAgICAgICBvcmRlcjogMTEsXHJcbiAgICAgICAgYXBpOiAnL2FwaS9ncmFkZS90YWJsZXMnXHJcbiAgICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjQyMTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyYjY0MjE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyYjY0MjE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjQyMTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDJiNjQyMTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNMaW5rcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlc0xpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjQyMTYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBlZjIzOGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjBlZjIzOGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjBlZjIzOGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlc01lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBlZjIzOGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjBlZjIzOGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkZXNNZW1iZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXNNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwZWYyMzhlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZmQxNDZhOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdmZDE0NmE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdmZDE0NmE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZmQxNDZhOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZmQxNDZhOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmZDE0NmE4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAzMGY4MTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGluZ0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwMzBmODE5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwMzBmODE5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAzMGY4MTkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjAzMGY4MTknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvQ29uc29sZS9HcmFkaW5nQXNzaWdubWVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmdBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkaW5nQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAzMGY4MTkmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTY2OWQxMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkaW5nQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDE2NjlkMTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDE2NjlkMTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTY2OWQxMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMTY2OWQxMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGluZ0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRpbmdBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTY2OWQxMyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjE1MjM1YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkZjE1MjM1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkZjE1MjM1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUnVicmljRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZjE1MjM1YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkZjE1MjM1YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Db25zb2xlL1J1YnJpY0VkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SdWJyaWNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1J1YnJpY0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGYxNTIzNWMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NjZkNzRiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTU2NmQ3NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTU2NmQ3NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1J1YnJpY3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NjZkNzRiJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU1NjZkNzRiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0NvbnNvbGUvUnVicmljc0VkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SdWJyaWNzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUnVicmljc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUnVicmljc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU2NmQ3NGImXCIiLCJpbXBvcnQge1BhZ2VWdWV9IGZyb20gJ3NpdGUtY2wvanMvVnVlL1BhZ2VWdWUnO1xyXG5pbXBvcnQgR3JhZGVBc3NpZ25tZW50VnVlIGZyb20gJy4vVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlJztcclxuaW1wb3J0IEdyYWRlc1Z1ZSBmcm9tICcuL1VzZXIvR3JhZGVzLnZ1ZSc7XHJcbmltcG9ydCBQYWdlTmF2IGZyb20gJ3NpdGUtY2wvanMvVnVlL1BhZ2VOYXYudnVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBHcmFkZXNGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbkdyYWRlc0ZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIGNvbnN0IEdyYWRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHNpdGUucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgIFBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtZ3JhZGUtYXNzaWdubWVudCcsICdBc3NpZ25tZW50IEdyYWRlJywgR3JhZGVBc3NpZ25tZW50VnVlLCBQYWdlTmF2KTtcclxuICAgICAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlcycsICdHcmFkZXMnLCBHcmFkZXNWdWUsIFBhZ2VOYXYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIEdyYWRlcztcclxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyZGFiNzdmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MmRhYjc3ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MmRhYjc3ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyZGFiNzdmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYyZGFiNzdmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmRhYjc3ZiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjJiMGIyMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmFkZUFzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmFkZUFzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZjJiMGIyMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZjJiMGIyMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjJiMGIyMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZjJiMGIyMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlQXNzaWdubWVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUFzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUFzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlQXNzaWdubWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYyYjBiMjAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjcwNDE5ZTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjcwNDE5ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjcwNDE5ZTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjcwNDE5ZTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjcwNDE5ZTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3MDQxOWUwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3N2ZhYTUzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3N2ZhYTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTc3ZmFhNTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNzdmYWE1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNzdmYWE1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzdmYWE1MyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNzdmYWE1MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTc3ZmFhNTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzdmYWE1MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzdmYWE1MyZzY29wZWQ9dHJ1ZSZcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQWdDQUlBQUFDdGpON0FBQUFCUzJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE5ESWdOemt1TVRZd09USTBMQ0F5TURFM0x6QTNMekV6TFRBeE9qQTJPak01SUNBZ0lDQWdJQ0FpUGdvZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWk4K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K25oeGc3d0FBQUhsSlJFRlVPSTN0MHJFTmcwQVVBMUQ3bitFcUtwUVpNa0ZtWkR0S05raVRIaUVDdWNzS2JoQkM0dGRQTHZ6TmJSN2dISE5ZRGdCd0RCVlFQVmxWSUROVWlzV2pSZXZXT1pETUd0OHZoMFlrUFIrVFF5dGI5ZDNIb1FWWis5NTRxWTFvOTNyNkJtNnFpSzhuZWEyOS91aFFrR0pORmtVNi9WdC9QVWdoSUd3RFdESUFBQUFBU1VWT1JLNUNZSUk9XCIiLCIvKipcclxuICogUmVzcG9uc2UgZnJvbSB0aGUgQVBJIGluIGFuIGVhc3ktdG8tdXNlIGZvcm1hdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBBUElSZXNwb25zZSA9IGZ1bmN0aW9uKGpzb24pIHtcclxuICAgIHRoaXMuanNvbiA9IGpzb247XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGRhdGEgYnkgdHlwZVxyXG4gICAgICogQHBhcmFtIHR5cGUgTmFtZSBvZiB0aGUgdHlwZSwgbGlrZSAndG9rZW4nXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYmplY3Qgb2YgZGF0YSBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gICAgICovXHJcbiAgICB0aGlzLmdldERhdGEgPSBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbi5kYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuanNvbi5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYWxsIGluc3RhbmNlcyBvZiBkYXRhIGJ5IHR5ZVxyXG5cdCAqIEBwYXJhbSB0eXBlIE5hbWUgb2YgdGhlIHR5cGUsIGxpa2UgJ3Rva2VuJ1xyXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGRhdGEgZWxlbWVudHMuXHJcblx0ICovXHJcblx0dGhpcy5nZXREYXRhQWxsID0gZnVuY3Rpb24odHlwZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmpzb24uZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCByZXQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuanNvbi5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEb2VzIHRoaXMgcmVzcG9uc2UgaGF2ZSBhbiBlcnJvcj9cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGVyZSBpcyBhbiBlcnJvclxyXG5cdCAqL1xyXG5cdHRoaXMuaGFzRXJyb3IgPSBmdW5jdGlvbigpICB7XHJcblx0XHRyZXR1cm4gKHRoaXMuanNvbi5lcnJvcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmpzb24uZXJyb3JzLmxlbmd0aCA+IDApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRoZSBlcnJvciBjb2RlIGlmIHRoZXJlIGlzIGFuIGVycm9yXHJcblx0ICogQHJldHVybiB7aW50fSBFcnJvciBjb2RlXHJcblx0ICovXHJcbiAgICB0aGlzLmVycm9yQ29kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmpzb24uZXJyb3JzWzBdLmNvZGU7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0aGUgZXJyb3IgdGl0bGUgaWYgdGhlcmUgaXMgYW4gZXJyb3JcclxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IEVycm9yIHRpdGxlXHJcblx0ICovXHJcblx0dGhpcy5lcnJvclRpdGxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbi5lcnJvcnNbMF0udGl0bGU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IEFQSVJlc3BvbnNlO1xyXG4iLCIvKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyB0byBmb3JtYXQgdGltZXMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgZnVuY3Rpb25zIHRvIGZvcm1hdCB0aW1lcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IFRpbWVGb3JtYXR0ZXIgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSB0aW1lIHRvIHRoZSBmb3JtYXQgd2UgZGlzcGxheVxyXG4gKiBUaW1lIGlzIHJlbGF0aXZlIHRvIGEgc3BlY2lmaWVkIHRpbWUgKG9yIGN1cnJlbnQgdGltZSlcclxuICogQHBhcmFtIHttb21lbnR9IHRpbWUgVGltZSB0byBjb252ZXJ0IChtb21lbnQpXHJcbiAqIEBwYXJhbSB7bW9tZW50fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUgKG1vbWVudClcclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBNb21lbnQgZm9ybWF0XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlID0gZnVuY3Rpb24odGltZSwgY3VycmVudFRpbWUsIGZvcm1hdCkge1xyXG4gICAgaWYoY3VycmVudFRpbWUgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50VGltZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGN1cnJlbnRUaW1lID0gbW9tZW50Lm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGltZS5kaWZmKHRpbWUpO1xyXG5cclxuICAgIGlmKGVsYXBzZWQgPCA2MDAwMCkge1xyXG4gICAgICAgIHJldHVybiAnPDEgbWluIGFnbyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZWxhcHNlZCA8IDM2MDAwMDApIHtcclxuICAgICAgICAvLyBXaXRoaW4gYW4gaG91ciBhZ29cclxuICAgICAgICBjb25zdCBtaW5zID0gTWF0aC5mbG9vcihlbGFwc2VkIC8gNjAwMDApO1xyXG4gICAgICAgIHJldHVybiAnJyArIG1pbnMgKyAnIG1pbiBhZ28nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgaXQgd2FzIHRvZGF5XHJcbiAgICAgKi9cclxuICAgIGlmKHRpbWUuZGF0ZSgpID09PSBjdXJyZW50VGltZS5kYXRlKCkgJiZcclxuICAgICAgICB0aW1lLm1vbnRoKCkgPT09IGN1cnJlbnRUaW1lLm1vbnRoKCkgJiZcclxuICAgICAgICB0aW1lLnllYXIoKSA9PT0gY3VycmVudFRpbWUueWVhcigpKSB7XHJcbiAgICAgICAgbGV0IGhvdXIgPSB0aW1lLmhvdXIoKTtcclxuICAgICAgICBsZXQgYW0gPSAnYW0nO1xyXG4gICAgICAgIGlmKGhvdXIgPT09IDApIHtcclxuICAgICAgICAgICAgaG91ciA9IDEyO1xyXG4gICAgICAgIH0gZWxzZSBpZihob3VyID09PSAxMikge1xyXG4gICAgICAgICAgICBhbSA9ICdwbSdcclxuICAgICAgICB9IGVsc2UgaWYoaG91ciA+IDEyKSB7XHJcbiAgICAgICAgICAgIGFtID0gJ3BtJztcclxuICAgICAgICAgICAgaG91ciAtPSAxMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1pbnV0ZSA9IHRpbWUubWludXRlKCk7XHJcbiAgICAgICAgaWYobWludXRlIDwgMTApIHtcclxuICAgICAgICAgICAgbWludXRlID0gJzAnICsgbWludXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFwiVG9kYXkgYXQgXCIgKyBob3VyICsgJzonICsgbWludXRlICsgYW07XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3JtYXQgPSAnTS1ERC1ZWVlZIGg6bW06c3NhJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGltZS5mb3JtYXQoZm9ybWF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXkgYSBVbml4IHRpbWUgYXMgYW4gYWJzb2x1dGUgdGltZS5cclxuICogQHBhcmFtIHtpbnR9IHRpbWUgVW5peCB0aW1lIChzZWNvbmRzKVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IE1vbWVudCBmb3JtYXQgb3IgJ2xvbmcnIG9yICdzaG9ydCcgZm9yIGRheXMgaW5jbHVzaW9uLlxyXG4gKi9cclxuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVggPSBmdW5jdGlvbih0aW1lLCBmb3JtYXQpIHtcclxuICAgIGxldCB0ID0gbW9tZW50LnVuaXgodGltZSk7XHJcbiAgICBpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvcm1hdCA9ICdNLURELVlZWVkgaDptbTpzc2EnO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ3Nob3J0Jykge1xyXG5cdCAgICBmb3JtYXQgPSAnZGRkLCBNLURELVlZWVkgaDptbTpzc2EnO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ2xvbmcnKSB7XHJcblx0ICAgIGZvcm1hdCA9ICdkZGRkLCBNLURELVlZWVkgaDptbTpzc2EnO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ2xvbmctZGF0ZScpIHtcclxuXHQgICAgZm9ybWF0ID0gJ2RkZGQsIE0tREQtWVlZWSc7XHJcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAnc2hvcnQtdGltZScpIHtcclxuXHQgICAgZm9ybWF0ID0gJ2g6bW1hJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdC5mb3JtYXQoZm9ybWF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXkgYSBVbml4IHRpbWUgYXMgYSByZWxhdGl2ZSB0aW1lLlxyXG4gKiBAcGFyYW0ge2ludH0gdGltZSBVbml4IHRpbWUgKHNlY29uZHMpXHJcbiAqIEBwYXJhbSB7aW50fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUgYXMgVU5JWCB0aW1lIChvcHRpb25hbClcclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBNb21lbnQgZm9ybWF0IG9yICdsb25nJyBvciAnc2hvcnQnIGZvciBkYXlzIGluY2x1c2lvbi5cclxuICovXHJcblRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYID0gZnVuY3Rpb24odGltZSwgY3VycmVudFRpbWUsIGZvcm1hdCkge1xyXG4gICAgbGV0IHQgPSBtb21lbnQudW5peCh0aW1lKTtcclxuICAgIGxldCBjID0gY3VycmVudFRpbWUgIT09IG51bGwgPyBtb21lbnQudW5peChjdXJyZW50VGltZSkgOiBtb21lbnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZWxhdGl2ZSh0LCBjLCBmb3JtYXQpO1xyXG59XHJcbiIsIi8qXHJcbiAqIEphdmFzY3JpcHQgc3VwcG9ydCBmb3IgdGhlIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCAnLi9fZWRpdG9yLnNjc3MnO1xyXG5pbXBvcnQgUmVzaXplciBmcm9tICdyZXNpemVyLWNsJztcclxuaW1wb3J0IHtFZGl0b3JPcHRpb25zfSBmcm9tICcuL0VkaXRvck9wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEphdmFzY3JpcHQgb2JqZWN0IGluIHN1cHBvcnQgb2YgdGV4dGFyZWEtYmFzZWQgZWRpdG9yXHJcbiAqXHJcbiAqIElmIGVkaXRvciBoYXMgdGhlIGNvZGUgc3R5bGUsIGxpbmUgbnVtYmVycyBhcmUgZGlzcGxheWVkLlxyXG4gKiBTZXQgbWVtYmVyIC50YWIgdG8gc3VwcG9ydCBzbWFydCB0YWJzXHJcbiAqIFNldCBtZW1iZXIgLmF1dG9JbmRlbnQgdG8gc3VwcG9ydCBhdXRvbWF0aWMgaW5kZW50YXRpb25cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCBmb3IgdGhlIHRleHRhcmVhIHdlIGFyZSB0dXJuaW5nIGludG8gYW4gZWRpdG9yXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyB0byB0aGUgZWRpdG9yXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBpZihvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvcHRpb25zID0gbmV3IEVkaXRvck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbnMgPSBuZXcgRWRpdG9yT3B0aW9ucyhKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NsLWVkaXRvcicpO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGNvbnN0IHJlc2l6ZXIgPSBuZXcgUmVzaXplcihlbGVtZW50LCB7XHJcbiAgICAgICByZXNpemU6IG9wdGlvbnMucmVzaXplLFxyXG4gICAgICAgaGFuZGxlOiBvcHRpb25zLmhhbmRsZSxcclxuICAgICAgIGdyYWJTaXplOiBvcHRpb25zLmdyYWJTaXplXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICB0aGlzLnRleHRhcmVhID0gdGE7XHJcbiAgICBmb3IobGV0IGNscyBvZiBvcHRpb25zLmNsYXNzZXMpIHtcclxuICAgICAgICB0YS5jbGFzc0xpc3QuYWRkKGNscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGEpO1xyXG4gICAgdGEudmFsdWUgPSBvcHRpb25zLnZhbHVlO1xyXG4gICAgaWYob3B0aW9ucy5uYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGEubmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpZihvcHRpb25zLmNvZGUpIHtcclxuICAgICAgICB0YS5jbGFzc0xpc3QuYWRkKCdjb2RlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYob3B0aW9ucy5oZWlnaHQgIT09IG51bGwpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG9wdGlvbnMubWluSGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSBvcHRpb25zLm1pbkhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICB0YS5zcGVsbGNoZWNrID0gb3B0aW9ucy5zcGVsbGNoZWNrO1xyXG5cclxuICAgIC8vIElFMTEgYW5kIHNvbWUgb2xkZXIgYnJvd3NlcnMgZG8gbm90IHN1cHBvcnRcclxuICAgIC8vIHRoZSBpbnNlcnRUZXh0IGNvbW1hbmQuIFRoaXMgZGV0ZXJtaW5lcyBpZiBpdFxyXG4gICAgLy8gaXMgYXZhaWxhYmxlLiBUaGlzIG1heSBiZSByZXZpc2VkIGl0IHRoZSBhdHRlbXB0IHRvXHJcbiAgICAvLyB1c2UgdGhlbSBmYWlscy5cclxuICAgIGxldCBpbnNlcnRUZXh0U3VwcG9ydGVkID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkIChcImluc2VydFRleHRcIik7XHJcbiAgICBsZXQgZGVsZXRlU3VwcG9ydGVkID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkIChcImRlbGV0ZVwiKTtcclxuXHJcbiAgICAvLyBTZXQgdHJ1ZSBhZnRlciB3ZSBhdXRvLWluZGVudFxyXG4gICAgbGV0IGp1c3RJbmRlbnRlZCA9IGZhbHNlO1xyXG4gICAgaWYob3B0aW9ucy50YWIgfHwgb3B0aW9ucy5hdXRvSW5kZW50KSB7XHJcbiAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLnRhYiAmJiBldmVudC53aGljaCA9PT0gOSkgeyAgLy8gVGFiIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJBdENhcmV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdEluZGVudGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5UYWIoKTtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0SW5kZW50ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b0luZGVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQud2hpY2ggPT0gMTMpIHsgICAgIC8vIFJldHVybiBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RJbmRlbnRlZCA9IHJldHVybldpdGhJbmRlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoanVzdEluZGVudGVkICYmIGV2ZW50LndoaWNoID09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBCYWNrc3BhY2UgYWZ0ZXIgd2UganVzdCBpbmRlbnRlZCFcclxuICAgICAgICAgICAgICAgICAgICBpZih1bkRlbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0SW5kZW50ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBUaGlzIGlzIHRoZSBtYWdpYyB0aGF0IHN5bmNzIHRoZSBiYWNrZ3JvdW5kIHdpdGggdGhlXHJcbiAgICAgKiBsaW5lIG51bWJlcnMgaW4gaXQuXHJcbiAgICAgKi9cclxuICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IHRhLnNjcm9sbFRvcDtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGEuc2Nyb2xsTGVmdDtcclxuICAgICAgICB0YS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAtbGVmdCArICdweCAnICsgLXRvcCArICdweCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogSW5zZXJ0IGEgdGFiIGF0IHRoZSBjdXJyZW50IGVkaXQgbG9jYXRpb24gaW4gdGhlIHRleHRhcmVhXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRhYkF0Q2FyZXQoKSB7XHJcbiAgICAgICAgY29uc3QgZFNlbCA9IHRhO1xyXG5cclxuICAgICAgICBpZiAoZFNlbC5zZWxlY3Rpb25TdGFydCB8fCBkU2VsLnNlbGVjdGlvblN0YXJ0ID09ICcwJykge1xyXG4gICAgICAgICAgICAvL0ZvciBicm93c2VycyBsaWtlIEZpcmVmb3ggYW5kIFdlYmtpdCBiYXNlZFxyXG4gICAgICAgICAgICB2YXIgc3RhcnRQb3MgPSBkU2VsLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICB2YXIgZW5kUG9zID0gZFNlbC5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0UG9zID09IGVuZFBvcykge1xyXG4gICAgICAgICAgICAgICAgLy8gVGFiYmluZyBhdCB0aGUgY3VycmVudCBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZSA9IGRTZWwudmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgICAgIHZhciBzcGxpdCA9IGJlZm9yZS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBsYXN0TGluZSA9IHNwbGl0W3NwbGl0Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgIHZhciBsYXN0TGVuID0gbGFzdExpbmUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvQWRkID0gb3B0aW9ucy50YWJTaXplIC0gKGxhc3RMZW4gJSBvcHRpb25zLnRhYlNpemUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwYWNlcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8dG9BZGQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlcyArPSAnICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGV4dChkU2VsLCBzcGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0UG9zICsgdG9BZGQ7XHJcbiAgICAgICAgICAgICAgICBkU2VsLnNlbGVjdGlvbkVuZCA9IHN0YXJ0UG9zICsgdG9BZGQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUYWJiaW5nIGEgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gZFNlbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBzcGxpdCA9IHZhbC5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5lUG9zID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBsaW5lIHRoZSBzZWxlY3Rpb24gc3RhcnRzIG9uXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGxpbmU9MDsgbGluZSA8IHNwbGl0Lmxlbmd0aDsgbGluZSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRMaW5lUG9zID0gbGluZVBvcyArIHNwbGl0W2xpbmVdLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3RhcnRQb3MgPj0gbGluZVBvcyAmJiBzdGFydFBvcyA8IG5leHRMaW5lUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsaW5lUG9zID0gbmV4dExpbmVQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhY2VzID0gJyc7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxvcHRpb25zLnRhYlNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlcyArPSAnICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluc2VydGlvbnMgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEluZGVudCB1bnRpbCB3ZSBhcmUgZG9uZVxyXG4gICAgICAgICAgICAgICAgZm9yKCA7IGxpbmUgPCBzcGxpdC5sZW5ndGg7ICBsaW5lKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkU2VsLnNlbGVjdGlvblN0YXJ0ID0gbGluZVBvcyArIGluc2VydGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25FbmQgPSBsaW5lUG9zICsgaW5zZXJ0aW9ucztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dChkU2VsLCBzcGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2VydGlvbnMgKz0gb3B0aW9ucy50YWJTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXh0TGluZVBvcyA9IGxpbmVQb3MgKyBzcGxpdFtsaW5lXS5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVuZFBvcyA8PSBuZXh0TGluZVBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgZG9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVQb3MgPSBuZXh0TGluZVBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkU2VsLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3MgKyBvcHRpb25zLnRhYlNpemU7XHJcbiAgICAgICAgICAgICAgICBkU2VsLnNlbGVjdGlvbkVuZCA9IGVuZFBvcyArIGluc2VydGlvbnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZFNlbC52YWx1ZSArPSBcIiBcIjtcclxuICAgICAgICAgICAgZFNlbC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogSGFuZGxlIHRoZSBTaGlmdC1UQUIgY29tYmluYXRpb24gKHVudGFiYmluZylcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdW5UYWIoKSB7XHJcbiAgICAgICAgLy8gU2VsZWN0aW9uIERPTSBvYmplY3RcclxuICAgICAgICBjb25zdCBkU2VsID0gdGE7XHJcblxyXG4gICAgICAgIHZhciBzdGFydFBvcyA9IGRTZWwuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgdmFyIGVuZFBvcyA9IGRTZWwuc2VsZWN0aW9uRW5kO1xyXG5cclxuICAgICAgICAvLyBVbnRhYmJpbmcgYSBzZWxlY3Rpb25cclxuICAgICAgICB2YXIgdmFsID0gZFNlbC52YWx1ZTtcclxuICAgICAgICB2YXIgc3BsaXQgPSB2YWwuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgdmFyIGxpbmVQb3MgPSAwO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSBsaW5lIHRoZSBzZWxlY3Rpb24gc3RhcnRzIG9uXHJcbiAgICAgICAgZm9yKHZhciBsaW5lPTA7IGxpbmUgPCBzcGxpdC5sZW5ndGg7IGxpbmUrKykge1xyXG4gICAgICAgICAgICB2YXIgbmV4dExpbmVQb3MgPSBsaW5lUG9zICsgc3BsaXRbbGluZV0ubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgaWYoc3RhcnRQb3MgPj0gbGluZVBvcyAmJiBzdGFydFBvcyA8IG5leHRMaW5lUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaW5lUG9zID0gbmV4dExpbmVQb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGVsZXRpb25zID0gMDtcclxuICAgICAgICB2YXIgZmlyc3RMaW5lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVW5kZW50IHVudGlsIHdlIGFyZSBkb25lXHJcbiAgICAgICAgZm9yKCA7IGxpbmUgPCBzcGxpdC5sZW5ndGg7ICBsaW5lKyspIHtcclxuICAgICAgICAgICAgZm9yKHZhciBzcGFjZXM9MDsgIHNwYWNlcyA8IG9wdGlvbnMudGFiU2l6ZSAmJiBzcGFjZXM8c3BsaXRbbGluZV0ubGVuZ3RoOyBzcGFjZXMrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoc3BsaXRbbGluZV1bc3BhY2VzXSAhPSAnICcpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc3BhY2VzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25TdGFydCA9IGxpbmVQb3MgLSBkZWxldGlvbnM7XHJcbiAgICAgICAgICAgICAgICBkU2VsLnNlbGVjdGlvbkVuZCA9IGxpbmVQb3MgLSBkZWxldGlvbnMgKyBzcGFjZXM7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVUZXh0KGRTZWwpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRpb25zICs9IHNwYWNlcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZmlyc3RMaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFBvcyAtPSBzcGFjZXM7XHJcbiAgICAgICAgICAgICAgICBpZihzdGFydFBvcyA8IGxpbmVQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFBvcyA9IGxpbmVQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaXJzdExpbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV4dExpbmVQb3MgPSBsaW5lUG9zICsgc3BsaXRbbGluZV0ubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgaWYoZW5kUG9zIDw9IG5leHRMaW5lUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgZG9uZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpbmVQb3MgPSBuZXh0TGluZVBvcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRTZWwuc2VsZWN0aW9uU3RhcnQgPSBzdGFydFBvcztcclxuICAgICAgICBkU2VsLnNlbGVjdGlvbkVuZCA9IGVuZFBvcyAtIGRlbGV0aW9ucztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIEluc2VydCBhIHJldHVybiBjaGFyYWN0ZXIgYW5kIGVub3VnaCBzcGFjZXMgdG8gaW5kZW50XHJcbiAgICAgKiB0aGUgdGV4dCBzbyBhcyB0byBtYXRjaCB0aGUgcHJldmlvdXMgbGluZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmV0dXJuV2l0aEluZGVudCgpIHtcclxuICAgICAgICAvLyBTZWxlY3Rpb24gRE9NIG9iamVjdFxyXG4gICAgICAgIGNvbnN0IGRTZWwgPSB0YTtcclxuXHJcbiAgICAgICAgLy8gSG93IG1hbnkgc3BhY2VzIHdpbGwgYmUgcHV0IGJlZm9yZSB0aGUgZmlyc3Qgbm9uLXNwYWNlP1xyXG4gICAgICAgIHZhciBzcGFjZSA9IDA7XHJcblxyXG4gICAgICAgIGlmIChkU2VsLnNlbGVjdGlvblN0YXJ0IHx8IGRTZWwuc2VsZWN0aW9uU3RhcnQgPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFBvcyA9IGRTZWwuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIHZhciBlbmRQb3MgPSBkU2VsLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRTZWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB2YXIgYmVmb3JlID0gZFNlbC52YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICB2YXIgYWZ0ZXIgPSBkU2VsLnZhbHVlLnN1YnN0cmluZyhlbmRQb3MsZFNlbC52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB2YXIgc3BsaXQgPSBiZWZvcmUuc3BsaXQoXCJcXG5cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBXaGF0IGlzIHRoZSBsYXN0IGxpbmUgYmVmb3JlIHRoZSBjYXJldD9cclxuICAgICAgICAgICAgdmFyIGxhc3QgPSBzcGxpdFtzcGxpdC5sZW5ndGgtMV07XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxsYXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihsYXN0LmNoYXJBdChpKSAhPSAnICcpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFjZSsrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHJldHVyblxyXG4gICAgICAgICAgICB2YXIgbXlWYWx1ZSA9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIGZvcihpPTA7IGk8c3BhY2U7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbXlWYWx1ZSArPSAnICc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluc2VydFRleHQoZFNlbCwgbXlWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRTZWwuc2VsZWN0aW9uU3RhcnQgPSBzdGFydFBvcyArIG15VmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgICBkU2VsLnNlbGVjdGlvbkVuZCA9IHN0YXJ0UG9zICsgbXlWYWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZFNlbC52YWx1ZSArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICBkU2VsLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3BhY2UgPiAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICogUmVtb3ZlIHRoZSBsYXN0IHRhYlNpemUgc3BhY2VzIGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uXHJcbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgd2FzIHVuLWRlbnRlZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB1bkRlbnQoKSB7XHJcbiAgICAgICAgLy8gU2VsZWN0aW9uIERPTSBvYmplY3RcclxuICAgICAgICBjb25zdCBkU2VsID0gdGE7XHJcblxyXG5cclxuICAgICAgICBpZiAoZFNlbC5zZWxlY3Rpb25TdGFydCB8fCBkU2VsLnNlbGVjdGlvblN0YXJ0ID09ICcwJykge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRQb3MgPSBkU2VsLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICB2YXIgZW5kUG9zID0gZFNlbC5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSBkU2VsLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZSA9IGRTZWwudmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgdmFyIHNwYWNlU3RyID0gJyc7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPG9wdGlvbnMudGFiU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzcGFjZVN0ciArPSAnICc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYmVmb3JlLmxlbmd0aCA+PSBvcHRpb25zLnRhYlNpemUgJiZcclxuICAgICAgICAgICAgICAgIGJlZm9yZS5zdWJzdHIoYmVmb3JlLmxlbmd0aC1vcHRpb25zLnRhYlNpemUsIG9wdGlvbnMudGFiU2l6ZSkgPT09IHNwYWNlU3RyKSB7XHJcbiAgICAgICAgICAgICAgICBkU2VsLnNlbGVjdGlvblN0YXJ0ID0gYmVmb3JlLmxlbmd0aCAtIG9wdGlvbnMudGFiU2l6ZTtcclxuICAgICAgICAgICAgICAgIGRTZWwuc2VsZWN0aW9uRW5kID0gYmVmb3JlLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVUZXh0KGRTZWwpO1xyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25TdGFydCA9IGJlZm9yZS5sZW5ndGggLSBvcHRpb25zLnRhYlNpemU7XHJcbiAgICAgICAgICAgICAgICBkU2VsLnNlbGVjdGlvbkVuZCA9IGRTZWwuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgICAqIEluc2VydCB0ZXh0IGluIGEgdGV4dGFyZWEgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgdG8gYWxsb3cgZm9yIGZhbGxiYWNrIHRvIGEgbm9uLXVuZG9hYmxlIHZlcnNpb25cclxuICAgICAqIGZvciBJbnRlcm5ldCBleHBsb3JlciBhbmQgRmlyZWZveC5cclxuICAgICAqIEBwYXJhbSB0ZXh0YXJlYSBUZXh0YXJlYSB3ZSBhcmUgbW9kaWZ5aW5nXHJcbiAgICAgKiBAcGFyYW0gdGV4dCBUZXh0IHRvIGluc2VydFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbnNlcnRUZXh0KHRleHRhcmVhLCB0ZXh0KSB7XHJcbiAgICAgICAgaWYoaW5zZXJ0VGV4dFN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICBpZighZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCB0ZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGV4dFN1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGV4dCh0ZXh0YXJlYSwgdGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBCYWNrdXAgdmVyc2lvbiBmb3IgSW50ZXJuZXQgRXhwbG9yZXIgMTFcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRleHRhcmVhLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0ZXh0YXJlYS52YWx1ZTtcclxuICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgcG9zKSArIHRleHQgKyB2YWx1ZS5zdWJzdHJpbmcocG9zKTtcclxuICAgICAgICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICAgICAgICAgICAgdGV4dGFyZWEuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogRGVsZXRlIHRleHQgaW4gYSB0ZXh0YXJlYSBhdCB0aGUgY3VycmVudCBzZWxlY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBpcyBwcm92aWRlZCB0byBhbGxvdyBmb3IgZmFsbGJhY2sgdG8gYSBub24tdW5kb2FibGUgdmVyc2lvblxyXG4gICAgICogZm9yIEludGVybmV0IGV4cGxvcmVyIGFuZCBGaXJlZm94LlxyXG4gICAgICogQHBhcmFtIHRleHRhcmVhXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRleHQodGV4dGFyZWEpIHtcclxuICAgICAgICBpZihkZWxldGVTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgaWYoIWRvY3VtZW50LmV4ZWNDb21tYW5kKFwiZGVsZXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVRleHQodGV4dGFyZWEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQmFja3VwIHZlcnNpb24gZm9yIEludGVybmV0IEV4cGxvcmVyIDExXHJcbiAgICAgICAgICAgIC8vIGFuZCBGaXJlZm94XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFBvcyA9IHRleHRhcmVhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGV4dGFyZWEuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRleHRhcmVhLnZhbHVlO1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcykgKyB2YWx1ZS5zdWJzdHJpbmcoZW5kUG9zKTtcclxuICAgICAgICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICAgICAgICAgICAgdGV4dGFyZWEuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBWYXJpb3VzIGludGVyZmFjZSBvcHRpb25zIHdlIGNhbiBzZWxlY3RcclxuICovXHJcblxyXG4vKipcclxuICogRWRpdG9yIGludGVyZmFjZSBvcHRpb25zLlxyXG4gKlxyXG4gKiBUaGlzIGlzIHVzZWQgYnkgRWRpdG9yIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBlZGl0b3Igb3B0aW9ucy5cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgRWRpdG9yT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuICAgIC8vLyBPcHRpb25zOiB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCwgYm90aFxyXG4gICAgdGhpcy5yZXNpemUgPSAndmVydGljYWwnO1xyXG5cclxuICAgIC8vLyBUaGUgcmVzaXppbmcgaGFuZGxlXHJcbiAgICB0aGlzLmhhbmRsZSA9ICdiYXInO1xyXG5cclxuICAgIC8vLyBSYW5nZSBmb3IgZ3JhYmJpbmdcclxuICAgIHRoaXMuZ3JhYlNpemUgPSAxMDtcclxuXHJcbiAgICAvLy8gSXMgdGhpcyBmb3Igc291cmNlIGNvZGU/XHJcbiAgICB0aGlzLmNvZGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gSW5pdGlhbCB0ZXh0YXJlYSB2YWx1ZVxyXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xyXG5cclxuICAgIC8vLyBIZWlnaHQgdmFsdWUgdG8gdXNlXHJcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XHJcblxyXG4gICAgLy8vIE5hbWUgZm9yIHRoZSBjb250cm9sXHJcbiAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG5cclxuICAgIC8vLyBVc2UgaGFuZGxlIHRoZSB0YWIga2V5P1xyXG4gICAgdGhpcy50YWIgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gQXV0b21hdGljYWxseSBpbmRlbnQgY29kZT9cclxuICAgIHRoaXMuYXV0b0luZGVudCA9IGZhbHNlO1xyXG5cclxuICAgIC8vLyBNaW5pbXVtIGhlaWdodCB0byBzZXRcclxuICAgIHRoaXMubWluSGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAvLy8gU3BlbGxjaGVjayB0aGUgdGV4dGFyZWE/XHJcbiAgICB0aGlzLnNwZWxsY2hlY2sgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gU2l6ZSBvZiBhIHRhYiBzdG9wIGluIGNoYXJhY3RlcnMuXHJcbiAgICB0aGlzLnRhYlNpemUgPSA0O1xyXG5cclxuICAgIC8vLyBDbGFzc2VzIHRvIGFkZCB0byB0aGUgdGV4dGFyZWFcclxuICAgIHRoaXMuY2xhc3NlcyA9IFtdO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNGIwNTEwMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q0YjA1MTAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q0YjA1MTAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNGIwNTEwMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkNGIwNTEwMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3NpdGUvanMvVUkvTWVudS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDRiMDUxMDImXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fZWRpdG9yLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMzM1OTdhOWFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2VkaXRvci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2VkaXRvci5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcclxuICogQmFzaWMgU2FuaXRpemUgb3BlcmF0aW9ucyB0byBwcm90ZWN0IGZyb20gWFNTLlxyXG4gKi9cclxuXHJcbmltcG9ydCBET01QdXJpZnkgZnJvbSAnZG9tcHVyaWZ5JztcclxuXHJcbi8qKlxyXG4gKiBCYXNpYyBTYW5pdGl6ZSBvcGVyYXRpb25zIHRvIHByb3RlY3QgZnJvbSBYU1MuXHJcbiAqXHJcbiAqIFNvbWUgb2YgdGhpcyBpcyBhIHdyYXBwZXIgYXJvdW5kIERPTVB1cmlmeSdzIHNhbml0aXplLCBzb1xyXG4gKiBpdCBjYW4gYmUgZWFzaWx5IHJlcGxhY2VkIGluIHRoZSBmdXR1cmUuIEFkZGl0aW9uYWwgZnVuY3Rpb25zIGFyZVxyXG4gKiB1c2VmdWwgZm9yIHNhbml0aXppbmcgaW5wdXQgZnJvbSBmaWxlcy5cclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2FuaXRpemUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuU2FuaXRpemUuc2FuaXRpemUgPSBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICByZXR1cm4gRE9NUHVyaWZ5LnNhbml0aXplKHRleHQpO1xyXG59XHJcblxyXG5TYW5pdGl6ZS5ib29sZWFuID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcGxhY2UgPCwgPiwgYW5kICYgd2l0aCBjb3JyZXNwb25kaW5nIEhUTUwgZW50aXRpZXMuXHJcbiAqIEBwYXJhbSB0ZXh0XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd8WE1MfCp9XHJcbiAqL1xyXG5TYW5pdGl6ZS5odG1sZW50aXRpZXMgPSBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xyXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xyXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGJmNGNiMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBkYmY0Y2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBkYmY0Y2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGJmNGNiMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZGJmNGNiMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VOYXYudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYmY0Y2IwJlwiIiwiLyoqXHJcbiAqIEJhc2ljIFZ1ZS1iYXNlZCBzaXRlIHBhZ2Ugc3RhcnRlclxyXG4gKlxyXG4gKiBIb3cgdG8gdXNlOlxyXG4gKiBAY29kZVxyXG4gKiBzaXRlLnJlYWR5KCgpID0+IHtcclxuICogICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1ncmFkZS1hc3NpZ25tZW50JywgJ0Fzc2lnbm1lbnQgR3JhZGUnLCBHcmFkZUFzc2lnbm1lbnRWdWUpO1xyXG4gKiAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlcycsICdHcmFkZXMnLCBHcmFkZXNWdWUpO1xyXG4gKiB9KTtcclxuICogQGVuZGNvZGVcclxuICpcclxuICogQGNvbnN0cnVjdG9yIFBhZ2VWdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBQYWdlVnVlID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBwYWdlIGluIGEgZ2l2ZW4gY29tcG9uZW50LCByZXBsYWNpbmcgdGhlIHByb3ZpZGVkXHJcbiAqIHNlbGVjdG9yLiBUaGUgc2VsZWN0b3IgaXMgYXNzdW1lZCB0byBjb250YWluIEpTT04gZGF0YSB0aGF0IGlzXHJcbiAqIHRoZW4gcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudCBpbiB0aGUganNvbiBwcm9wZXJ0eS5cclxuICpcclxuICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgYSBkaXYgdG8gcmVwbGFjZSB3aXRoIHRoZSB2aWV3LlxyXG4gKiBAcGFyYW0gdGl0bGUgSW5pdGlhbCB0aXRsZSB0byBhcHBseSB0byB0aGUgcGFnZVxyXG4gKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCB0byBkaXNwbGF5IChWdWUpXHJcbiAqIEBwYXJhbSBuYXYgT3B0aW9uYWwgbmF2aWdhdGlvbiBjb21wb25lbnQsIGxpa2UgUGFnZU5hdlxyXG4gKi9cclxuUGFnZVZ1ZS5jcmVhdGUgPSBmdW5jdGlvbihzZWwsIHRpdGxlLCBjb21wb25lbnQsIG5hdikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgIGlmKGVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5hdnRhZyA9IG5hdiAhPT0gdW5kZWZpbmVkID8gJzxwYWdlLW5hdiA6bWVudT1cIm1lbnVcIj48L3BhZ2UtbmF2PicgOiAnJztcclxuICAgIGxldCB0ZW1wbGF0ZSA9IGA8ZGl2PjxzaXRlLWhlYWRlciA6dGl0bGU9XCJ0aXRsZVwiPiR7bmF2dGFnfTwvc2l0ZS1oZWFkZXI+XHJcbjxwYWdlLXZ1ZSA6anNvbj1cImpzb25cIj48L3BhZ2UtdnVlPjxzaXRlLWZvb3Rlcj48L3NpdGUtZm9vdGVyPlxyXG48L2Rpdj5gO1xyXG5cclxuICAgIGNvbnN0IEhlYWRlciA9IFNpdGUuaW5mby5oZWFkZXIuY29tcG9uZW50KCk7XHJcbiAgICBjb25zdCBGb290ZXIgPSBTaXRlLmluZm8uZm9vdGVyLmNvbXBvbmVudCgpO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gU2l0ZS5zdG9yZTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXHJcbiAgICAgICAgICAgICdzaXRlLWZvb3Rlcic6IEZvb3RlcixcclxuICAgICAgICAgICAgJ3BhZ2UtdnVlJzogY29tcG9uZW50XHJcbiAgICAgICAgfTtcclxuICAgIGlmKG5hdiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29tcG9uZW50c1sncGFnZS1uYXYnXSA9IG5hdjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2l0ZSA9IFNpdGUuU2l0ZTtcclxuXHJcbiAgICBuZXcgU2l0ZS5WdWUoe1xyXG4gICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgIHNpdGUsXHJcbiAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGpzb246IGpzb24sXHJcbiAgICAgICAgICAgIG1lbnU6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXQgdGhlIHNpdGUgdGl0bGUuIFRoaXMgY2FuIGJlIHVzZWQgZnJvbVxyXG4gICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHRpdGxlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRNZW51OiBmdW5jdGlvbihtZW51KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRNZW51OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2VWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZVZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMmJiYWVmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMmJiYWVmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZUJhc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZVZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzYjI2YmNiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzYjI2YmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDNiMjZiY2JcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0M2IyNmJjYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0M2IyNmJjYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDNiMjZiY2Imc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDNiMjZiY2InLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC91c2Vycy9qcy9MaWIvRmV0Y2hlclZ1ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDNiMjZiY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDNiMjZiY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzYjI2YmNiJnNjb3BlZD10cnVlJlwiIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEEgbWVtYmVyc2hpcCBhc3NvY2lhdGVkIHdpdGggYSB1c2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgYmFzZSBvYmplY3QgdGhhdCB3aWxsIGJlIGluaGVyaXRlZCBieVxyXG4gKiBhY3R1YWwgbWVtYmVyc2hpcCBvYmplY3RzLlxyXG4gKi9cclxuXHJcbnZhciBNZW1iZXJzaGlwID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8vIFRoZSBVc2VyIG9iamVjdCBmb3IgdGhpcyBtZW1iZXJzaGlwXHJcbiAgICB0aGlzLnVzZXIgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQge01lbWJlcnNoaXB9O1xyXG4iLCJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlclZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M3ZTRlNDllJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M3ZTRlNDllJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9