"use strict";
(self["webpackChunkcse335"] = self["webpackChunkcse335"] || []).push([["Grades"],{

/***/ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.3.4-174fadbea4-58b6c62a66.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cl-handbook"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Deduction"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("0 to max")], -1 /* HOISTED */);
var _hoisted_4 = {
  key: 0,
  "class": "cl-toggle cl-single-space"
};
var _hoisted_5 = {
  "class": "cl-rubricblock"
};
var _hoisted_6 = ["innerHTML"];
var _hoisted_7 = {
  "class": "center"
};
var _hoisted_8 = ["onUpdate:modelValue", "value"];
var _hoisted_9 = {
  key: 1
};
var _hoisted_10 = {
  key: 1
};
var _hoisted_11 = {
  "class": "center"
};
var _hoisted_12 = ["value"];
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "cl-internal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Comment"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Deduction")], -1 /* HOISTED */);
var _hoisted_15 = {
  key: 1,
  "class": "comment"
};
var _hoisted_16 = {
  "class": "cl-deduct"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Category"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Multiplier: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.multiplier), 1 /* TEXT */)]), _hoisted_3]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.item.handbook.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [category.rubric !== undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: category.rubric
    }, null, 8 /* PROPS */, _hoisted_6)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 1
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_7, [!$props.readonly ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(category.deduct + 1, function (deduct) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return _ctx.metadata[category.tag] = $event;
        },
        value: deduct - 1,
        type: "radio",
        onChange: _cache[0] || (_cache[0] = function () {
          return $options.compute && $options.compute.apply($options, arguments);
        })
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_8)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, _ctx.metadata[category.tag]]]);
    }), 256 /* UNKEYED_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.deduction(_ctx.metadata[category.tag])), 1 /* TEXT */))])]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [!$props.readonly ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.metadata['_manual_text'] = $event;
    })
  }, null, 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.metadata['_manual_text']]]) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.metadata['_manual_text']), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, [!$props.readonly ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(5, function (deduct) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
        return _ctx.metadata['_manual'] = $event;
      }),
      value: deduct - 1,
      type: "radio",
      onChange: _cache[3] || (_cache[3] = function () {
        return $options.compute && $options.compute.apply($options, arguments);
      })
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, _ctx.metadata['_manual']]]);
  }), 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.deduction(_ctx.metadata['_manual'])), 1 /* TEXT */))])]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [!$props.readonly ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
    key: 0,
    rows: "3",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.metadata['_comment'] = $event;
    })
  }, null, 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.metadata['_comment']]]) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.metadata['_comment']), 1 /* TEXT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.total), 1 /* TEXT */)])])]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.3.4-174fadbea4-58b6c62a66.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content cl-grader"
};
var _hoisted_2 = {
  "class": "full"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "cl-autoback"
}, null, -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "cl-title"
};
var _hoisted_5 = {
  key: 0,
  "class": "cl-dispute"
};
var _hoisted_6 = ["innerHTML"];
var _hoisted_7 = ["innerHTML"];
var _hoisted_8 = {
  "class": "grade"
};
var _hoisted_9 = {
  key: 0
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Grade Not Available", -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "center small notice"
}, "Grades are not available until all parts of the assignment have been graded.", -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "cl-autoback"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_handbook = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("handbook");
  var _component_grade_history = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("grade-history");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.json.assignment.name), 1 /* TEXT */), $props.json.dispute !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please direct all grading issues to "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    innerHTML: $props.json.dispute
  }, null, 8 /* PROPS */, _hoisted_6)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.grades, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), item.handbook === undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      innerHTML: item.html
    }, null, 8 /* PROPS */, _hoisted_7)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_handbook, {
      key: 1,
      item: item,
      readonly: "true"
    }, null, 8 /* PROPS */, ["item"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_grade_history, {
      history: item.history
    }, null, 8 /* PROPS */, ["history"])]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [$props.json.grade !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_9, "Computed Grade: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.json.grade), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [_hoisted_10, _hoisted_11], 64 /* STABLE_FRAGMENT */))]), _hoisted_12])]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.3.4-174fadbea4-58b6c62a66.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content cl-grader"
};
var _hoisted_2 = {
  "class": "full"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = {
  key: 0,
  "class": "center"
};
var _hoisted_6 = ["innerHTML"];
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Assignment"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Grade"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, " "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Grade")], -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "cl-category"
};
var _hoisted_9 = {
  colspan: "3"
};
var _hoisted_10 = ["href"];
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "2"
}, " ", -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "center"
}, "Click on each assignment for more grading detail", -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "center"
};
var _hoisted_14 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_ctx.grade !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    innerHTML: $props.json.before
  }, null, 8 /* PROPS */, _hoisted_4)]), $props.json.dispute !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please direct all grading issues to "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    innerHTML: $props.json.dispute
  }, null, 8 /* PROPS */, _hoisted_6)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [_hoisted_7, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.grade.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.points) + "%", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.grade), 1 /* TEXT */)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.assignments(category), function (assignment) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
        "class": "cl-assignment",
        key: assignment.tag
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: _ctx.root + '/cl/grade/' + assignment.tag
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(assignment.name), 9 /* TEXT, PROPS */, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Math.round(assignment.points * 10) / 10) + "%", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(assignment.grade), 1 /* TEXT */), _hoisted_11]);
    }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
  }), 256 /* UNKEYED_FRAGMENT */))]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, "Computed Grade: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.grade.grade) + " out of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.grade.available) + " available points" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.per), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    innerHTML: $props.json.after
  }, null, 8 /* PROPS */, _hoisted_14)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.3.4-174fadbea4-58b6c62a66.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-177faa53"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "cl-grade-history"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 0,
  "class": "cl-toggle"
};
var _hoisted_4 = {
  "class": "expander"
};
var _hoisted_5 = {
  "class": "grades"
};
var _hoisted_6 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.history2.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_ctx.history2.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.display(_ctx.history2[0])) + " / Expand for additional grading history", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.history2, function (h) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.display(h)), 1 /* TEXT */);
  }), 256 /* UNKEYED_FRAGMENT */))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.display(_ctx.history2[0])), 1 /* TEXT */)]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  emit: ['handbook-data'],
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
          this.metadata[category.tag] = _catPoints;
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
      this.metadata['_manual'] = catPoints;
      var manualText = this.item.metadata['_manual_text'];
      if (manualText === undefined) {
        manualText = '';
      }
      this.metadata['_manual_text'] = manualText;
      var comment = this.item.metadata['_comment'];
      if (comment === undefined) {
        comment = '';
      }
      this.metadata['_comment'] = comment;
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

/***/ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/GradeHistoryComponent.vue */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue");
/* harmony import */ var _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Handbook/Handbook.vue */ "./vendor/cl/grades/js/Handbook/Handbook.vue");


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
    gradeHistory: _Util_GradeHistoryComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    handbook: _Handbook_Handbook_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    grades: function grades() {
      return this.json.grades.filter(function (item) {
        return item.html !== undefined;
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.$root.setTitle(':  ' + this.json.assignment.shortName + ' Grade for ' + this.user.displayName());
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

/***/ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  methods: {
    assignments: function assignments(category) {
      return category.assignments.filter(function (assignment) {
        return assignment.points > 0;
      });
    }
  },
  data: function data() {
    return {
      grade: null,
      per: ''
    };
  },
  mounted: function mounted() {
    this.setTitle('Grades for ' + this.user.displayName());

    //  this.setTitle(': Grades ');

    this.grade = this.json;
    if (this.grade.available > 0) {
      this.per = ' (' + (this.grade.grade / this.grade.available * 100).toFixed(1) + '%)';
    }
  }
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/***/ "./vendor/cl/grades/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/grades/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_GradesFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/GradesFactory */ "./vendor/cl/grades/js/GradesFactory.js");
/* harmony import */ var _grades_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_grades.scss */ "./vendor/cl/grades/_grades.scss");


if (!Site.Grades) {
  Site.Grades = _js_GradesFactory__WEBPACK_IMPORTED_MODULE_0__.GradesFactory.create(Site);
}

/***/ }),

/***/ "./vendor/cl/grades/js/GradesFactory.js":
/*!**********************************************!*\
  !*** ./vendor/cl/grades/js/GradesFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GradesFactory: () => (/* binding */ GradesFactory)
/* harmony export */ });
/* harmony import */ var site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVue */ "./vendor/cl/site/js/Vue/PageVue.js");
/* harmony import */ var _User_GradeAssignment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User/GradeAssignment.vue */ "./vendor/cl/grades/js/User/GradeAssignment.vue");
/* harmony import */ var _User_Grades_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User/Grades.vue */ "./vendor/cl/grades/js/User/Grades.vue");
/* harmony import */ var site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! site-cl/js/Vue/PageNav.vue */ "./vendor/cl/site/js/Vue/PageNav.vue");




var GradesFactory = function GradesFactory() {};
GradesFactory.create = function (site) {
  var Grades = function Grades() {};
  site.ready(function () {
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__.PageVue.create('div.cl-grade-assignment', 'Assignment Grade', _User_GradeAssignment_vue__WEBPACK_IMPORTED_MODULE_1__["default"], site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__.PageVue.create('div.cl-grades', 'Grades', _User_Grades_vue__WEBPACK_IMPORTED_MODULE_2__["default"], site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });
  return Grades;
};

/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `div.cl-grade-history[data-v-177faa53] {
  max-width: 600px;
  margin: 1em 0;
}
p[data-v-177faa53] {
  font-style: italic;
  font-size: 0.85em;
}
p.expander[data-v-177faa53] {
  margin-bottom: 0;
}
div.grades[data-v-177faa53] {
  padding: 2px 0 2px 18px;
  background-color: #ddffdd;
}
div.grades p[data-v-177faa53] {
  margin: 0;
  padding: 2px 0 0 0;
}`, "",{"version":3,"sources":["webpack://./vendor/cl/grades/js/Util/GradeHistoryComponent.vue"],"names":[],"mappings":"AAEE;EACE,gBAAA;EACA,aAAA;AADJ;AAGE;EACE,kBAAA;EACA,iBAAA;AAAJ;AAGE;EACE,gBAAA;AAAJ;AAEE;EACE,uBAAA;EACA,yBAAA;AACJ;AACI;EACE,SAAA;EACA,kBAAA;AACN","sourcesContent":["\n\n  div.cl-grade-history {\n    max-width: 600px;\n    margin: 1em 0;\n  }\n  p {\n    font-style: italic;\n    font-size: 0.85em;\n  }\n\n  p.expander {\n    margin-bottom: 0;\n  }\n  div.grades {\n    padding: 2px 0 2px 18px;\n    background-color: #ddffdd;\n\n    p {\n      margin: 0;\n      padding: 2px 0 0 0;\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/grades/_grades.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/grades/_grades.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../site/img/yellowpad.png */ "./vendor/cl/site/img/yellowpad.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `div.cl-grader div.cl-rubric div.cl-show, div.cl-grader table.cl-handbook div.comment, div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {
  -moz-box-shadow: 3px 3px 8px #ccc;
  -webkit-box-shadow: 3px 3px 8px #ccc;
  box-shadow: 3px 3px 8px #ccc;
}

div.cl-grades td.role {
  white-space: nowrap;
}

div.cl-grader form {
  position: relative;
}
div.cl-grader div.cl-grader-item {
  position: relative;
  background: white;
  padding-bottom: 0.25em;
}
div.cl-grader div.cl-grader-item h2 {
  margin-top: -0.25em;
}
div.cl-grader div.cl-grader-item-locked {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 50px;
  z-index: 100;
  background: #f8fff8;
}
div.cl-grader a.link-button {
  display: inline-block;
  font-size: 0.85em;
  padding: 0 2px;
}
div.cl-grader p.cl-title {
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
  margin: 1em 0 0 0;
}
div.cl-grader p.cl-dispute {
  text-align: center;
  margin: 0;
}
div.cl-grader p.cl-role {
  text-align: center;
}
div.cl-grader p.cl-role-staff {
  color: #c41425;
}
div.cl-grader p.cl-due {
  text-align: center;
  font-style: italic;
  font-weight: normal;
  color: #c41425;
}
div.cl-grader button.cl-grader-button {
  font-style: italic;
  font-size: 0.9em;
  color: black;
}
div.cl-grader a.cl-extra-link {
  display: block;
  float: right;
  font-size: 0.5em;
  padding-top: 1em;
}
div.cl-grader tr.cl-category td {
  text-align: right;
}
div.cl-grader tr.cl-category td:first-child {
  text-align: left;
}
div.cl-grader tr.cl-assignment td {
  text-align: right;
}
div.cl-grader tr.cl-assignment td:first-child {
  text-align: left;
  padding-left: 3em;
}
div.cl-grader div.cl-grade, div.cl-grader div.grader {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
div.cl-grader div.cl-grade label, div.cl-grader div.cl-grade div.label, div.cl-grader div.grader label, div.cl-grader div.grader div.label {
  font-style: italic;
}
div.cl-grader div.cl-grade label a, div.cl-grader div.cl-grade div.label a, div.cl-grader div.grader label a, div.cl-grader div.grader div.label a {
  font-size: 0.85em;
  text-decoration: none;
  padding-left: 1em;
}
div.cl-grader div.cl-grade div.comment, div.cl-grader div.grader div.comment {
  flex: 1 1 auto;
  padding: 0 20px 0 0;
}
div.cl-grader div.cl-grade div.comment textarea, div.cl-grader div.grader div.comment textarea {
  display: block;
  width: 100%;
}
div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {
  white-space: pre-wrap;
  background: #f0f0f0;
  font-style: normal;
  border: 1px solid #a9a9a9;
  height: 120px;
  overflow: auto;
  padding: 2px;
}
div.cl-grader div.cl-grade div.points, div.cl-grader div.grader div.points {
  flex: 0 0 auto;
  width: 5em;
  text-align: center;
  padding: 45px 5px 0 0;
}
div.cl-grader div.cl-grade div.points input, div.cl-grader div.cl-grade div.points div.value, div.cl-grader div.grader div.points input, div.cl-grader div.grader div.points div.value {
  display: block;
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: bold;
}
div.cl-grader div.cl-grade div.points span.not, div.cl-grader div.grader div.points span.not {
  font-size: 0.8em;
  font-style: italic;
}
div.cl-grader div.cl-grade div.value, div.cl-grader div.grader div.value {
  padding: 2px 1px;
}
div.cl-grader div.cl-grade div.value a, div.cl-grader div.grader div.value a {
  text-decoration: none;
  color: black;
}
div.cl-grader table.cl-handbook {
  width: 90%;
}
div.cl-grader table.cl-handbook td:last-child, div.cl-grader table.cl-handbook th:last-child {
  width: 1px;
  white-space: nowrap;
}
div.cl-grader table.cl-handbook input[type=radio] {
  display: inline-block;
  padding: 0 2px;
  margin: 0 2px;
}
div.cl-grader table.cl-handbook input[type=text] {
  width: 100%;
}
div.cl-grader table.cl-handbook textarea {
  width: 100%;
}
div.cl-grader table.cl-handbook td.cl-deduct {
  text-align: center;
  font-size: 1.5em;
}
div.cl-grader table.cl-handbook div.comment {
  white-space: pre;
  background: #f0f0f0;
  font-style: normal;
  border: 1px solid #a9a9a9;
  height: 80px;
  overflow: auto;
  padding: 2px;
  margin: 0.3em 0;
}
div.cl-grader p.cl-rubric-expand {
  margin-bottom: 0.1em;
}
div.cl-grader div.cl-rubricblock {
  background: #e8f7f3;
  padding: 5px;
  border: 1px #808080 solid;
  word-wrap: normal;
  font-size: 0.9em;
}
div.cl-grader div.cl-rubricblock p:first-child, div.cl-grader div.cl-rubricblock ul:first-child {
  margin-top: 0;
}
div.cl-grader div.cl-rubricblock p:last-child, div.cl-grader div.cl-rubricblock ul:last-child {
  margin-bottom: 0;
}
div.cl-grader div.cl-rubricblock li.item, div.cl-grader div.cl-rubricblock p.item, div.cl-grader div.cl-rubricblock ul.items li {
  color: #900000;
  cursor: pointer;
}
div.cl-grader div.cl-rubricblock li.item:hover, div.cl-grader div.cl-rubricblock p.item:hover, div.cl-grader div.cl-rubricblock ul.items li:hover {
  color: #c00000;
}
div.cl-grader textarea {
  background: #f0f0f0;
  font-style: normal;
}
div.cl-grader textarea.yellow-pad {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
div.cl-grader div.grade {
  border-top: 1px solid black;
}
div.cl-grader div.grade p:first-child {
  text-align: center;
  font-size: 1.2em;
}
div.cl-grader div.cl-rubric div.cl-show {
  margin: 1em 0;
  word-wrap: normal;
  min-height: 8em;
}
div.cl-grader div.cl-rubric textarea {
  font-size: 0.9em;
  margin: 1em 0;
  background: #f0f0f0;
  font-style: normal;
  width: 100%;
  min-height: 8em;
}`, "",{"version":3,"sources":["webpack://./vendor/cl/site/sass/modules/_colors.scss","webpack://./vendor/cl/grades/_grades.scss","webpack://./vendor/cl/grades/sass/partials/_grading.scss"],"names":[],"mappings":"AAgFA;EACE,iCAAA;EACA,oCAAA;EACA,4BAAA;AC/EF;;ACDE;EACE,mBAAA;ADIJ;;ACCE;EACE,kBAAA;ADEJ;ACCE;EACE,kBAAA;EACA,iBAAA;EACA,sBAAA;ADCJ;ACCI;EACE,mBAAA;ADCN;ACGE;EACE,wBAAA,EAAA,WAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;ADDJ;ACIE;EACE,qBAAA;EACA,iBAAA;EACA,cAAA;ADFJ;ACKE;EACE,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;ADHJ;ACME;EACE,kBAAA;EACA,SAAA;ADJJ;ACOE;EACE,kBAAA;ADLJ;ACQE;EACE,cFhCG;AC0BP;ACSE;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,cFvCG;ACgCP;ACUE;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;ADRJ;ACWE;EACE,cAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;ADTJ;ACaI;EACE,iBAAA;ADXN;ACcI;EACE,gBAAA;ADZN;ACiBI;EACE,iBAAA;ADfN;ACkBI;EACE,gBAAA;EACA,iBAAA;ADhBN;ACoBE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;ADlBJ;ACoBI;EACE,kBAAA;ADlBN;ACoBM;EACE,iBAAA;EACA,qBAAA;EACA,iBAAA;ADlBR;ACsBI;EACE,cAAA;EACA,mBAAA;ADpBN;ACsBM;EACE,cAAA;EACA,WAAA;ADpBR;ACuBM;EAEE,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;ADtBR;AC0BI;EACE,cAAA;EACA,UAAA;EACA,kBAAA;EACA,qBAAA;ADxBN;AC0BM;EACE,cAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;ADxBR;AC2BM;EACE,gBAAA;EACA,kBAAA;ADzBR;AC6BI;EACE,gBAAA;AD3BN;AC4BM;EACE,qBAAA;EACA,YAAA;AD1BR;AC+BE;EACE,UAAA;AD7BJ;AC+BI;EACE,UAAA;EACA,mBAAA;AD7BN;ACgCI;EACE,qBAAA;EACA,cAAA;EACA,aAAA;AD9BN;ACiCI;EACE,WAAA;AD/BN;ACkCI;EACE,WAAA;ADhCN;ACmCI;EACE,kBAAA;EACA,gBAAA;ADjCN;ACoCI;EAEE,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;ADnCN;ACuCE;EACE,oBAAA;ADrCJ;ACwCE;EACE,mBFlMiB;EEmMjB,YAAA;EACA,yBAAA;EACA,iBAAA;EACA,gBAAA;ADtCJ;ACwCI;EACE,aAAA;ADtCN;ACyCI;EACE,gBAAA;ADvCN;AC0CI;EACE,cFvKoB;EEwKpB,eAAA;ADxCN;AC2CI;EACE,cF3KqB;ACkI3B;AC6CE;EACE,mBAAA;EACA,kBAAA;AD3CJ;AC8CE;EACE,mDAAA;AD5CJ;AC+CE;EACE,2BAAA;AD7CJ;AC+CI;EACE,kBAAA;EACA,gBAAA;AD7CN;ACoDI;EAEE,aAAA;EACA,iBAAA;EACA,eAAA;ADnDN;ACsDI;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;ADpDN","sourcesContent":["// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$accent: #607D8B;\r\n\r\n$toast-background: #151515;\r\n$toast-text: white;\r\n\r\n$header-background: #535054;\r\n$header-text: #eeeeee;\r\n\r\n// The major colors\r\n// We have a primary color, two secondary colors, and a complementary color.\r\n$primary: #00723f;\r\n$light-primary: #44a26b;\r\n$very-light-primary: #e8f7f3;\r\n$dark-primary: #005223;\r\n$primary-text: #212121;\r\n\r\n$seconda: #00909e;\r\n$secondb: #fcaf17;\r\n$secondc: #c89a58; // #e8d9b5;\r\n\r\n$comp: #c41425;\r\n$blind: #efc6ff;\r\n$comp-background: linear-gradient(#570102, #960606, #570102);\r\n$comp-border: #c7bdbb;\r\n\r\n// Menus\r\n$focus: #008183;\r\n$menu-background: #e8e8e8;\r\n$menu-hover: #d0d0d0;\r\n$menu-color: black;\r\n\r\n// Page background\r\n$background: #eeeeee;\r\n\r\n// Nav\r\n$nav-color: white;\r\n$nav-background: url('img/nav_pattern.png');\r\n$nav-2-color: #ffff99;\r\n$nav-2-background: url('img/nav_pattern-2.png');\r\n\r\n// Tables\r\n$table-gradient-from: #204c42;\r\n$table-gradient-to: #389b54;\r\n\r\n// Dialog boxes\r\n$dialog-gradient-from: #204c42;\r\n$dialog-gradient-to: #389b54;\r\n$dialog-bar-color: white;\r\n\r\n// Link colors\r\n$link: #808080;\r\n$visited: #968443;  // #b09d5b;\r\n$hover: #3366cc;\r\n\r\n$very-light-primary-link: #900000;\r\n$very-light-primary-hover: #c00000;\r\n\r\n\r\n$primary-link: white;\r\n$primary-visited: #dddddd;\r\n$secondb-visited: #555555;\r\n$autoback-link: #882222;\r\n$autoback-link-hover: #cc2222;\r\n\r\n$shadow-x: 3px;\r\n$shadow-y: 3px;\r\n$shadow-radius: 8px;\r\n$shadow-color: #ccc;\r\n\r\n$toggle-link-hover-color: #006600;\r\n\r\n// Boxes\r\n$box-border-color: #bdbdbd;\r\n\r\n// Cards\r\n$card-heading-background: #f2f2f2;\r\n$card-border-color: #cccccc;\r\n\r\n%shadow {\r\n  -moz-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  -webkit-box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n  box-shadow: $shadow-x $shadow-y $shadow-radius $shadow-color;\r\n}\r\n\r\n%noshadow {\r\n  -moz-box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n","div.cl-grader div.cl-rubric div.cl-show, div.cl-grader table.cl-handbook div.comment, div.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {\n  -moz-box-shadow: 3px 3px 8px #ccc;\n  -webkit-box-shadow: 3px 3px 8px #ccc;\n  box-shadow: 3px 3px 8px #ccc;\n}\n\ndiv.cl-grades td.role {\n  white-space: nowrap;\n}\n\ndiv.cl-grader form {\n  position: relative;\n}\ndiv.cl-grader div.cl-grader-item {\n  position: relative;\n  background: white;\n  padding-bottom: 0.25em;\n}\ndiv.cl-grader div.cl-grader-item h2 {\n  margin-top: -0.25em;\n}\ndiv.cl-grader div.cl-grader-item-locked {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 50px;\n  z-index: 100;\n  background: #f8fff8;\n}\ndiv.cl-grader a.link-button {\n  display: inline-block;\n  font-size: 0.85em;\n  padding: 0 2px;\n}\ndiv.cl-grader p.cl-title {\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: bold;\n  margin: 1em 0 0 0;\n}\ndiv.cl-grader p.cl-dispute {\n  text-align: center;\n  margin: 0;\n}\ndiv.cl-grader p.cl-role {\n  text-align: center;\n}\ndiv.cl-grader p.cl-role-staff {\n  color: #c41425;\n}\ndiv.cl-grader p.cl-due {\n  text-align: center;\n  font-style: italic;\n  font-weight: normal;\n  color: #c41425;\n}\ndiv.cl-grader button.cl-grader-button {\n  font-style: italic;\n  font-size: 0.9em;\n  color: black;\n}\ndiv.cl-grader a.cl-extra-link {\n  display: block;\n  float: right;\n  font-size: 0.5em;\n  padding-top: 1em;\n}\ndiv.cl-grader tr.cl-category td {\n  text-align: right;\n}\ndiv.cl-grader tr.cl-category td:first-child {\n  text-align: left;\n}\ndiv.cl-grader tr.cl-assignment td {\n  text-align: right;\n}\ndiv.cl-grader tr.cl-assignment td:first-child {\n  text-align: left;\n  padding-left: 3em;\n}\ndiv.cl-grader div.cl-grade, div.cl-grader div.grader {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\ndiv.cl-grader div.cl-grade label, div.cl-grader div.cl-grade div.label, div.cl-grader div.grader label, div.cl-grader div.grader div.label {\n  font-style: italic;\n}\ndiv.cl-grader div.cl-grade label a, div.cl-grader div.cl-grade div.label a, div.cl-grader div.grader label a, div.cl-grader div.grader div.label a {\n  font-size: 0.85em;\n  text-decoration: none;\n  padding-left: 1em;\n}\ndiv.cl-grader div.cl-grade div.comment, div.cl-grader div.grader div.comment {\n  flex: 1 1 auto;\n  padding: 0 20px 0 0;\n}\ndiv.cl-grader div.cl-grade div.comment textarea, div.cl-grader div.grader div.comment textarea {\n  display: block;\n  width: 100%;\n}\ndiv.cl-grader div.cl-grade div.comment div.comment, div.cl-grader div.grader div.comment div.comment {\n  white-space: pre-wrap;\n  background: #f0f0f0;\n  font-style: normal;\n  border: 1px solid #a9a9a9;\n  height: 120px;\n  overflow: auto;\n  padding: 2px;\n}\ndiv.cl-grader div.cl-grade div.points, div.cl-grader div.grader div.points {\n  flex: 0 0 auto;\n  width: 5em;\n  text-align: center;\n  padding: 45px 5px 0 0;\n}\ndiv.cl-grader div.cl-grade div.points input, div.cl-grader div.cl-grade div.points div.value, div.cl-grader div.grader div.points input, div.cl-grader div.grader div.points div.value {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n}\ndiv.cl-grader div.cl-grade div.points span.not, div.cl-grader div.grader div.points span.not {\n  font-size: 0.8em;\n  font-style: italic;\n}\ndiv.cl-grader div.cl-grade div.value, div.cl-grader div.grader div.value {\n  padding: 2px 1px;\n}\ndiv.cl-grader div.cl-grade div.value a, div.cl-grader div.grader div.value a {\n  text-decoration: none;\n  color: black;\n}\ndiv.cl-grader table.cl-handbook {\n  width: 90%;\n}\ndiv.cl-grader table.cl-handbook td:last-child, div.cl-grader table.cl-handbook th:last-child {\n  width: 1px;\n  white-space: nowrap;\n}\ndiv.cl-grader table.cl-handbook input[type=radio] {\n  display: inline-block;\n  padding: 0 2px;\n  margin: 0 2px;\n}\ndiv.cl-grader table.cl-handbook input[type=text] {\n  width: 100%;\n}\ndiv.cl-grader table.cl-handbook textarea {\n  width: 100%;\n}\ndiv.cl-grader table.cl-handbook td.cl-deduct {\n  text-align: center;\n  font-size: 1.5em;\n}\ndiv.cl-grader table.cl-handbook div.comment {\n  white-space: pre;\n  background: #f0f0f0;\n  font-style: normal;\n  border: 1px solid #a9a9a9;\n  height: 80px;\n  overflow: auto;\n  padding: 2px;\n  margin: 0.3em 0;\n}\ndiv.cl-grader p.cl-rubric-expand {\n  margin-bottom: 0.1em;\n}\ndiv.cl-grader div.cl-rubricblock {\n  background: #e8f7f3;\n  padding: 5px;\n  border: 1px #808080 solid;\n  word-wrap: normal;\n  font-size: 0.9em;\n}\ndiv.cl-grader div.cl-rubricblock p:first-child, div.cl-grader div.cl-rubricblock ul:first-child {\n  margin-top: 0;\n}\ndiv.cl-grader div.cl-rubricblock p:last-child, div.cl-grader div.cl-rubricblock ul:last-child {\n  margin-bottom: 0;\n}\ndiv.cl-grader div.cl-rubricblock li.item, div.cl-grader div.cl-rubricblock p.item, div.cl-grader div.cl-rubricblock ul.items li {\n  color: #900000;\n  cursor: pointer;\n}\ndiv.cl-grader div.cl-rubricblock li.item:hover, div.cl-grader div.cl-rubricblock p.item:hover, div.cl-grader div.cl-rubricblock ul.items li:hover {\n  color: #c00000;\n}\ndiv.cl-grader textarea {\n  background: #f0f0f0;\n  font-style: normal;\n}\ndiv.cl-grader textarea.yellow-pad {\n  background: url(\"../../../site/img/yellowpad.png\");\n}\ndiv.cl-grader div.grade {\n  border-top: 1px solid black;\n}\ndiv.cl-grader div.grade p:first-child {\n  text-align: center;\n  font-size: 1.2em;\n}\ndiv.cl-grader div.cl-rubric div.cl-show {\n  margin: 1em 0;\n  word-wrap: normal;\n  min-height: 8em;\n}\ndiv.cl-grader div.cl-rubric textarea {\n  font-size: 0.9em;\n  margin: 1em 0;\n  background: #f0f0f0;\n  font-style: normal;\n  width: 100%;\n  min-height: 8em;\n}","@import '~site-cl/sass/modules/colors';\n\ndiv.cl-grades {\n  td.role {\n    white-space: nowrap;\n  }\n}\n\ndiv.cl-grader {\n  form {\n    position: relative;\n  }\n\n  div.cl-grader-item {\n    position: relative;\n    background: white;\n    padding-bottom: 0.25em;\n\n    h2 {\n      margin-top: -0.25em;\n    }\n  }\n\n  div.cl-grader-item-locked {\n    position: -webkit-sticky; /* Safari */\n    position: sticky;\n    top: 50px;\n    z-index: 100;\n    background: #f8fff8;\n  }\n\n  a.link-button {\n    display: inline-block;\n    font-size: 0.85em;\n    padding: 0 2px;\n  }\n\n  p.cl-title {\n    text-align: center;\n    font-size: 1.1em;\n    font-weight: bold;\n    margin: 1em 0 0 0;\n  }\n\n  p.cl-dispute {\n    text-align: center;\n    margin: 0;\n  }\n\n  p.cl-role {\n    text-align: center;\n  }\n\n  p.cl-role-staff {\n    color: $comp;\n  }\n\n  p.cl-due {\n    text-align: center;\n    font-style: italic;\n    font-weight: normal;\n    color: $comp;\n  }\n\n  button.cl-grader-button {\n    font-style: italic;\n    font-size: 0.9em;\n    color: black;\n  }\n\n  a.cl-extra-link {\n    display: block;\n    float: right;\n    font-size: 0.5em;\n    padding-top: 1em;\n  }\n\n  tr.cl-category {\n    td {\n      text-align: right;\n    }\n\n    td:first-child {\n      text-align: left;\n    }\n  }\n\n  tr.cl-assignment {\n    td {\n      text-align: right;\n    }\n\n    td:first-child {\n      text-align: left;\n      padding-left: 3em;\n    }\n  }\n\n  div.cl-grade, div.grader {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n\n    label, div.label {\n      font-style: italic;\n\n      a {\n        font-size: 0.85em;\n        text-decoration: none;\n        padding-left: 1em;\n      }\n    }\n\n    div.comment {\n      flex: 1 1 auto;\n      padding: 0 20px 0 0;\n\n      textarea {\n        display: block;\n        width: 100%;\n      }\n\n      div.comment {\n        @extend %shadow;\n        white-space: pre-wrap;\n        background: #f0f0f0;\n        font-style: normal;\n        border: 1px solid #a9a9a9;\n        height: 120px;\n        overflow: auto;\n        padding: 2px;\n      }\n    }\n\n    div.points {\n      flex: 0 0 auto;\n      width: 5em;\n      text-align: center;\n      padding: 45px 5px 0 0;\n\n      input, div.value {\n        display: block;\n        width: 100%;\n        text-align: center;\n        font-style: normal;\n        font-weight: bold;\n      }\n\n      span.not {\n        font-size: 0.8em;\n        font-style: italic;\n      }\n    }\n\n    div.value {\n      padding: 2px 1px;\n      a {\n        text-decoration: none;\n        color: black;\n      }\n    }\n  }\n\n  table.cl-handbook {\n    width: 90%;\n\n    td:last-child, th:last-child {\n      width: 1px;\n      white-space: nowrap;\n    }\n\n    input[type=radio] {\n      display: inline-block;\n      padding: 0 2px;\n      margin: 0 2px;\n    }\n\n    input[type=text] {\n      width: 100%;\n    }\n\n    textarea {\n      width: 100%;\n    }\n\n    td.cl-deduct {\n      text-align: center;\n      font-size: 1.5em;\n    }\n\n    div.comment {\n      @extend %shadow;\n      white-space: pre;\n      background: #f0f0f0;\n      font-style: normal;\n      border: 1px solid #a9a9a9;\n      height: 80px;\n      overflow: auto;\n      padding: 2px;\n      margin: 0.3em 0;\n    }\n  }\n\n  p.cl-rubric-expand {\n    margin-bottom: 0.1em;\n  }\n\n  div.cl-rubricblock {\n    background: $very-light-primary;\n    padding: 5px;\n    border: 1px #808080 solid;\n    word-wrap: normal;\n    font-size: 0.9em;\n\n    p:first-child, ul:first-child {\n      margin-top: 0;\n    }\n\n    p:last-child, ul:last-child {\n      margin-bottom: 0;\n    }\n\n    li.item, p.item, ul.items li {\n      color: $very-light-primary-link;\n      cursor: pointer;\n    }\n\n    li.item:hover, p.item:hover, ul.items li:hover {\n      color: $very-light-primary-hover;\n    }\n  }\n\n  textarea {\n    background: #f0f0f0;\n    font-style: normal;\n  }\n\n  textarea.yellow-pad {\n    background: url('../../../site/img/yellowpad.png');\n  }\n\n  div.grade {\n    border-top: 1px solid black;\n\n    p:first-child {\n      text-align: center;\n      font-size: 1.2em;\n    }\n  }\n\n  div.cl-rubric {\n\n\n    div.cl-show {\n      @extend %shadow;\n      margin: 1em 0;\n      word-wrap: normal;\n      min-height: 8em;\n    }\n\n    textarea {\n      font-size: 0.9em;\n      margin: 1em 0;\n      background: #f0f0f0;\n      font-style: normal;\n      width: 100%;\n      min-height: 8em;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!../../../.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!../../../.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./_grades.scss */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./vendor/cl/grades/_grades.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_grades_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f":
/*!*********************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Handbook_vue_vue_type_template_id_62dab77f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Handbook_vue_vue_type_template_id_62dab77f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Handbook.vue?vue&type=template&id=62dab77f */ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f");


/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeAssignment_vue_vue_type_template_id_5f2b0b20__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeAssignment_vue_vue_type_template_id_5f2b0b20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./GradeAssignment.vue?vue&type=template&id=5f2b0b20 */ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20");


/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0":
/*!***************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Grades_vue_vue_type_template_id_270419e0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Grades_vue_vue_type_template_id_270419e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Grades.vue?vue&type=template&id=270419e0 */ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0");


/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true */ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true");


/***/ }),

/***/ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Handbook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Handbook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Handbook.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeAssignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeAssignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./GradeAssignment.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Grades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Grades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Grades.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_7183053ab4_0_cache_babel_loader_npm_9_1_3_cbf4da21df_b168dde5b8_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./GradeHistoryComponent.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-7183053ab4/0/cache/babel-loader-npm-9.1.3-cbf4da21df-b168dde5b8.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_cjs_js_yarn_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_yarn_virtual_vue_loader_virtual_58c100c515_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_cache_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_yarn_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/cjs.js!../../../../../.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!../../../../../.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!../../../../../.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/cjs.js!./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/__virtual__/vue-loader-virtual-58c100c515/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true");


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
/* harmony import */ var _Handbook_vue_vue_type_template_id_62dab77f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handbook.vue?vue&type=template&id=62dab77f */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=template&id=62dab77f");
/* harmony import */ var _Handbook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Handbook.vue?vue&type=script&lang=js */ "./vendor/cl/grades/js/Handbook/Handbook.vue?vue&type=script&lang=js");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Handbook_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Handbook_vue_vue_type_template_id_62dab77f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/grades/js/Handbook/Handbook.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _GradeAssignment_vue_vue_type_template_id_5f2b0b20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=template&id=5f2b0b20 */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=template&id=5f2b0b20");
/* harmony import */ var _GradeAssignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeAssignment.vue?vue&type=script&lang=js */ "./vendor/cl/grades/js/User/GradeAssignment.vue?vue&type=script&lang=js");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_GradeAssignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GradeAssignment_vue_vue_type_template_id_5f2b0b20__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/grades/js/User/GradeAssignment.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Grades_vue_vue_type_template_id_270419e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grades.vue?vue&type=template&id=270419e0 */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=template&id=270419e0");
/* harmony import */ var _Grades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grades.vue?vue&type=script&lang=js */ "./vendor/cl/grades/js/User/Grades.vue?vue&type=script&lang=js");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Grades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Grades_vue_vue_type_template_id_270419e0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/grades/js/User/Grades.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=template&id=177faa53&scoped=true");
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=script&lang=js */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _GradeHistoryComponent_vue_vue_type_style_index_0_id_177faa53_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true */ "./vendor/cl/grades/js/Util/GradeHistoryComponent.vue?vue&type=style&index=0&id=177faa53&lang=scss&scoped=true");
/* harmony import */ var _yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-8410487cdb/0/cache/vue-loader-npm-17.2.2-fa6d142d5e-54ea380e63.zip/node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_yarn_virtual_vue_loader_virtual_8410487cdb_0_cache_vue_loader_npm_17_2_2_fa6d142d5e_54ea380e63_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_GradeHistoryComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GradeHistoryComponent_vue_vue_type_template_id_177faa53_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-177faa53"],['__file',"vendor/cl/grades/js/Util/GradeHistoryComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/site/img/yellowpad.png":
/*!******************************************!*\
  !*** ./vendor/cl/site/img/yellowpad.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAIAAACtjN7AAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAHlJREFUOI3t0rENg0AUA1D7n+EqKpQZMkFmZDtKNkiTHiECucsKbhBC4tdPLvzNbR7gHHNYDgBwDBVQPVlVIDNUisWjRevWOZDMGt8vh0YkPR+TQytb9d3HoQVZ+954qY1o93r6Bm6qiK8nea29/uhQkGJNFkU6/Vt/PUghIGwDWDIAAAAASUVORK5CYII=";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor","Course","Users","common"], () => (__webpack_exec__("./vendor/cl/grades/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVzLmRldi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0VBRVcsU0FBTTtBQUFhOzhCQUNSQSx1REFBQSxDQUFJOzhCQUFvQ0EsdURBQUEsQ0FBOEIsK0VBQTFCLFdBQVMsZ0JBQUFBLHVEQUFBLENBQUksbUZBQVE7OztFQUl0RSxTQUFNOzs7RUFDSixTQUFNO0FBQWdCOzs7RUFLN0IsU0FBTTtBQUFROzs7Ozs7Ozs7RUFZZCxTQUFNO0FBQVE7Ozs7OytCQU1wQkEsdURBQUEsQ0FBK0Q7RUFBM0QsU0FBTTtBQUFhLGlCQUFDQSx1REFBQSxDQUFnQixZQUFaLFNBQU8sZ0JBQUtBLHVEQUFBLENBQWtCLFlBQWQsV0FBUzs7O0VBRzlDLFNBQU07OztFQUNKLFNBQU07QUFBVzs7MkRBbEM5QkMsdURBQUEsQ0FvQ00sY0FuQ0pELHVEQUFBLENBa0NRLFNBbENSRSxVQWtDUSxHQWpDTkYsdURBQUEsQ0FBMkYsYUFBdkZBLHVEQUFBLENBQW9ELGtFQUFoRCxVQUFRLEdBQUFHLFVBQUkscUVBQVksR0FBQUMsb0RBQUEsQ0FBRUMsTUFBQSxDQUFBQyxJQUFJLENBQUNDLFVBQVUsb0JBQU9DLFVBQThCLDJEQUN0RlAsdURBQUEsQ0FlS1EseUNBQUEsUUFBQUMsK0NBQUEsQ0Fma0JMLE1BQUEsQ0FBQUMsSUFBSSxDQUFDSyxRQUFRLENBQUNDLFVBQVUsWUFBcENDLFFBQVE7NkRBQW5CWix1REFBQSxDQWVLLGFBZEhELHVEQUFBLENBT0ssYUFOYWEsUUFBUSxDQUFDQyxNQUFNLEtBQUtDLFNBQVMsc0RBQzNDZCx1REFBQSxDQUVNLE9BRk5lLFVBRU0sR0FGaUNoQix1REFBQSxDQUFxQyxlQUEvQkEsdURBQUEsQ0FBd0IsV0FBQUksb0RBQUEsQ0FBbkJTLFFBQVEsQ0FBQ0ksSUFBSSxvQkFDN0RqQix1REFBQSxDQUFzRSxPQUF0RWtCLFVBQXNFLEdBQTFDbEIsdURBQUEsQ0FBb0M7TUFBL0JtQixTQUF3QixFQUFoQk4sUUFBUSxDQUFDQztrR0FHdERiLHVEQUFBLENBQTZDUSx5Q0FBQTtNQUFBVyxHQUFBO0lBQUEsOEdBQTFCUCxRQUFRLENBQUNJLElBQUksaURBRWxDakIsdURBQUEsQ0FLSyxNQUxMcUIsVUFLSyxJQUpjaEIsTUFBQSxDQUFBaUIsUUFBUSwwREFDdkJyQix1REFBQSxDQUErSFEseUNBQUE7TUFBQVcsR0FBQTtJQUFBLEdBQUFWLCtDQUFBLENBQXRHRyxRQUFRLENBQUNVLE1BQU0sZ0JBQTFCQSxNQUFNO29IQUFwQnRCLHVEQUFBLENBQStIOztpQkFBekV1QixJQUFBLENBQUFDLFFBQVEsQ0FBQ1osUUFBUSxDQUFDYSxHQUFHLElBQUFDLE1BQUE7UUFBQTtRQUFJQyxLQUFLLEVBQUVMLE1BQU07UUFBSU0sSUFBSSxFQUFDLE9BQU87UUFBRUMsUUFBTSxFQUFBQyxNQUFBLFFBQUFBLE1BQUE7VUFBQSxPQUFFQyxRQUFBLENBQUFDLE9BQUEsSUFBQUQsUUFBQSxDQUFBQyxPQUFBLENBQUFDLEtBQUEsQ0FBQUYsUUFBQSxFQUFBRyxTQUFBLENBQU87UUFBQTs2R0FBdkVYLElBQUEsQ0FBQUMsUUFBUSxDQUFDWixRQUFRLENBQUNhLEdBQUc7MEZBRTdFekIsdURBQUEsQ0FBeUQsUUFBQW1DLFVBQUEsRUFBQWhDLG9EQUFBLENBQTFDNEIsUUFBQSxDQUFBSyxTQUFTLENBQUNiLElBQUEsQ0FBQUMsUUFBUSxDQUFDWixRQUFRLENBQUNhLEdBQUc7b0NBR2xEMUIsdURBQUEsQ0FVVSxhQVRSQSx1REFBQSxDQUdLLGNBRldLLE1BQUEsQ0FBQWlCLFFBQVEsMEdBQXRCckIsdURBQUEsQ0FBdUU7O0lBQS9DNEIsSUFBSSxFQUFDLE1BQU07O2FBQVVMLElBQUEsQ0FBQUMsUUFBUSxtQkFBQUUsTUFBQTtJQUFBO2tGQUFSSCxJQUFBLENBQUFDLFFBQVEseUVBQ3JEeEIsdURBQUEsQ0FBZ0QsUUFBQXFDLFdBQUEsRUFBQWxDLG9EQUFBLENBQWpDb0IsSUFBQSxDQUFBQyxRQUFRLHFDQUV6QnpCLHVEQUFBLENBS0csTUFMSHVDLFdBS0csSUFKY2xDLE1BQUEsQ0FBQWlCLFFBQVEsc0RBQ3ZCckIsdURBQUEsQ0FBMEdRLHlDQUFBO0lBQUFXLEdBQUE7RUFBQSxHQUFBViwrQ0FBQSxDQUFsRixDQUFDLFlBQVhhLE1BQU07K0RBQXBCdkIsdURBQUEsQ0FBMEc7O2VBQXRFd0IsSUFBQSxDQUFBQyxRQUFRLGNBQUFFLE1BQUE7TUFBQTtNQUFjQyxLQUFLLEVBQUVMLE1BQU07TUFBSU0sSUFBSSxFQUFDLE9BQU87TUFBRUMsUUFBTSxFQUFBQyxNQUFBLFFBQUFBLE1BQUE7UUFBQSxPQUFFQyxRQUFBLENBQUFDLE9BQUEsSUFBQUQsUUFBQSxDQUFBQyxPQUFBLENBQUFDLEtBQUEsQ0FBQUYsUUFBQSxFQUFBRyxTQUFBLENBQU87TUFBQTsyR0FBcEVYLElBQUEsQ0FBQUMsUUFBUTtzRkFFOUN4Qix1REFBQSxDQUFzRCxRQUFBdUMsV0FBQSxFQUFBcEMsb0RBQUEsQ0FBdkM0QixRQUFBLENBQUFLLFNBQVMsQ0FBQ2IsSUFBQSxDQUFBQyxRQUFRLG1DQUVuQ2dCLFdBQStELEVBQy9EekMsdURBQUEsQ0FHOEMsYUFIMUNBLHVEQUFBLENBR0MsY0FGY0ssTUFBQSxDQUFBaUIsUUFBUSwwR0FBekJyQix1REFBQSxDQUE4RTs7SUFBbkR5QyxJQUFJLEVBQUMsR0FBRzs7YUFBVWxCLElBQUEsQ0FBQUMsUUFBUSxlQUFBRSxNQUFBO0lBQUE7a0ZBQVJILElBQUEsQ0FBQUMsUUFBUSxxRUFDckR4Qix1REFBQSxDQUEwRCxPQUExRDBDLFdBQTBELEVBQUF2QyxvREFBQSxDQUE1Qm9CLElBQUEsQ0FBQUMsUUFBUSxpQ0FDbkN6Qix1REFBQSxDQUFvQyxNQUFwQzRDLFdBQW9DLEVBQUF4QyxvREFBQSxDQUFab0IsSUFBQSxDQUFBcUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDbENqQyxTQUFNO0FBQW1COztFQUN2QixTQUFNO0FBQU07OEJBQ2Y3Qyx1REFBQSxDQUErQjtFQUExQixTQUFNO0FBQWE7O0VBQ3JCLFNBQU07QUFBVTs7O0VBQ2EsU0FBTTs7Ozs7RUFPakMsU0FBTTtBQUFPOzs7OytCQUdkQSx1REFBQSxDQUEwQixXQUF2QixxQkFBbUI7K0JBQ3RCQSx1REFBQSxDQUErRztFQUE1RyxTQUFNO0FBQXFCLEdBQUMsOEVBQTRFOytCQUcvR0EsdURBQUEsQ0FBK0I7RUFBMUIsU0FBTTtBQUFhOzs7OzsyREFsQjVCQyx1REFBQSxDQW9CTSxPQXBCTkMsVUFvQk0sR0FuQkpGLHVEQUFBLENBa0JNLE9BbEJORyxVQWtCTSxHQWpCSkssVUFBK0IsRUFDL0JSLHVEQUFBLENBQWdELEtBQWhEZ0IsVUFBZ0QsRUFBQVosb0RBQUEsQ0FBMUJDLE1BQUEsQ0FBQXlDLElBQUksQ0FBQ0MsVUFBVSxDQUFDOUIsSUFBSSxrQkFDakNaLE1BQUEsQ0FBQXlDLElBQUksQ0FBQ0UsT0FBTywrREFBckIvQyx1REFBQSxDQUE4SCxLQUE5SGlCLFVBQThILHdEQUEzRSxzQ0FBb0MsR0FBQWxCLHVEQUFBLENBQW1DO0lBQTdCbUIsU0FBcUIsRUFBYmQsTUFBQSxDQUFBeUMsSUFBSSxDQUFDRTt5S0FDMUcvQyx1REFBQSxDQUtNUSx5Q0FBQSxRQUFBQywrQ0FBQSxDQUxjc0IsUUFBQSxDQUFBaUIsTUFBTSxZQUFkM0MsSUFBSTs2REFBaEJMLHVEQUFBLENBS00sY0FKSkQsdURBQUEsQ0FBc0IsWUFBQUksb0RBQUEsQ0FBaEJFLElBQUksQ0FBQ1csSUFBSSxrQkFDSlgsSUFBSSxDQUFDSyxRQUFRLEtBQUtJLFNBQVMsc0RBQXRDZCx1REFBQSxDQUFpRTs7TUFBekJrQixTQUFrQixFQUFWYixJQUFJLENBQUM0Qzs4RkFDckRDLGdEQUFBLENBQXlEQyxtQkFBQTs7TUFBdkM5QyxJQUFJLEVBQUVBLElBQUk7TUFBRWdCLFFBQVEsRUFBQzt3Q0FDeEMrQixnREFBQSxDQUF1REMsd0JBQUE7TUFBdkNDLE9BQU8sRUFBRWpELElBQUksQ0FBQ2lEOztvQ0FFL0J2RCx1REFBQSxDQU1NLE9BTk53RCxVQU1NLEdBTEtuRCxNQUFBLENBQUF5QyxJQUFJLENBQUNXLEtBQUssK0RBQW5CeEQsdURBQUEsQ0FBZ0UsS0FBQW1DLFVBQUEsRUFBbEMsa0JBQWdCLEdBQUFoQyxvREFBQSxDQUFFQyxNQUFBLENBQUF5QyxJQUFJLENBQUNXLEtBQUssdUVBQzFEeEQsdURBQUEsQ0FHV1EseUNBQUE7SUFBQVcsR0FBQTtFQUFBLElBRlRrQixXQUEwQixFQUMxQkMsV0FBK0csaUNBR25IbUIsV0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ2xCOUIsU0FBTTtBQUFtQjs7RUFDdkIsU0FBTTtBQUFNOzs7Ozs7O0VBR21CLFNBQU07Ozs4QkFHcEMxRCx1REFBQSxDQUVLLDBCQURIQSx1REFBQSxDQUFtQixZQUFmLFlBQVUsZ0JBQUtBLHVEQUFBLENBQWUsWUFBWCxHQUFNLGdCQUFLQSx1REFBQSxDQUFjLFlBQVYsT0FBSyxnQkFBS0EsdURBQUEsQ0FBZSxZQUFYLEdBQU0sZ0JBQUtBLHVEQUFBLENBQWMsWUFBVixPQUFLOztFQUlwRSxTQUFNO0FBQWE7O0VBQ2pCMkQsT0FBTyxFQUFDO0FBQUc7OytCQUttRTNELHVEQUFBLENBQTJCO0VBQXZCMkQsT0FBTyxFQUFDO0FBQUcsR0FBQyxHQUFNOytCQUs5RzNELHVEQUFBLENBQXNFO0VBQW5FLFNBQU07QUFBUSxHQUFDLGtEQUFnRDs7RUFDL0QsU0FBTTtBQUFROzs7MkRBeEJ2QkMsdURBQUEsQ0E4Qk0sT0E5Qk5DLFVBOEJNLEdBN0JKRix1REFBQSxDQTRCTSxPQTVCTkcsVUE0Qk0sR0EzQk9xQixJQUFBLENBQUFpQyxLQUFLLCtEQUFoQnhELHVEQUFBLENBeUJNLE9BQUFPLFVBQUEsR0F4QkpSLHVEQUFBLENBQXlDLFlBQXRDQSx1REFBQSxDQUFrQztJQUE1Qm1CLFNBQW9CLEVBQVpkLE1BQUEsQ0FBQXlDLElBQUksQ0FBQ2M7eUNBQ2J2RCxNQUFBLENBQUF5QyxJQUFJLENBQUNFLE9BQU8sK0RBQXJCL0MsdURBQUEsQ0FBMEgsS0FBMUhpQixVQUEwSCx3REFBM0Usc0NBQW9DLEdBQUFsQix1REFBQSxDQUFtQztJQUE3Qm1CLFNBQXFCLEVBQWJkLE1BQUEsQ0FBQXlDLElBQUksQ0FBQ0U7a0hBRXRHaEQsdURBQUEsQ0FnQlEsZ0JBZk5xQixVQUVLLHlEQUVMcEIsdURBQUEsQ0FTV1EseUNBQUEsUUFBQUMsK0NBQUEsQ0FUa0JjLElBQUEsQ0FBQWlDLEtBQUssQ0FBQzdDLFVBQVUsWUFBNUJDLFFBQVE7dUtBQ3ZCYix1REFBQSxDQUVLLE1BRkx3RCxVQUVLLEdBREh4RCx1REFBQSxDQUFzQyxNQUF0Q29DLFVBQXNDLEVBQUFoQyxvREFBQSxDQUFwQlMsUUFBUSxDQUFDSSxJQUFJLGtCQUFPakIsdURBQUEsQ0FBNkIsWUFBQUksb0RBQUEsQ0FBdkJTLFFBQVEsQ0FBQ2dELE1BQU0sSUFBRSxHQUFDLGlCQUFLN0QsdURBQUEsQ0FBMkIsWUFBQUksb0RBQUEsQ0FBckJTLFFBQVEsQ0FBQzRDLEtBQUssMkVBR3pGeEQsdURBQUEsQ0FHS1EseUNBQUEsUUFBQUMsK0NBQUEsQ0FIMENzQixRQUFBLENBQUE4QixXQUFXLENBQUNqRCxRQUFRLGFBQWxDa0MsVUFBVTsrREFBM0M5Qyx1REFBQSxDQUdLO1FBSEQsU0FBTSxlQUFlO1FBQThDbUIsR0FBRyxFQUFFMkIsVUFBVSxDQUFDckI7VUFDckYxQix1REFBQSxDQUFnRixhQUE1RUEsdURBQUEsQ0FBdUU7UUFBbkUrRCxJQUFJLEVBQUV2QyxJQUFBLENBQUF3QyxJQUFJLGtCQUFrQmpCLFVBQVUsQ0FBQ3JCOzhEQUFPcUIsVUFBVSxDQUFDOUIsSUFBSSx3QkFBQXFCLFdBQUEsS0FDckV0Qyx1REFBQSxDQUFxRCxZQUFBSSxvREFBQSxDQUEvQzZELElBQUksQ0FBQ0MsS0FBSyxDQUFDbkIsVUFBVSxDQUFDYyxNQUFNLGVBQWEsR0FBQyxpQkFBSzdELHVEQUFBLENBQTZCLFlBQUFJLG9EQUFBLENBQXZCMkMsVUFBVSxDQUFDVSxLQUFLLGtCQUFPbEIsV0FBMkI7O3NDQUtuSG1CLFdBQXNFLEVBQ3RFMUQsdURBQUEsQ0FBd0csS0FBeEd3QyxXQUF3RyxFQUF0RixrQkFBZ0IsR0FBQXBDLG9EQUFBLENBQUVvQixJQUFBLENBQUFpQyxLQUFLLENBQUNBLEtBQUssSUFBRSxVQUFRLEdBQUFyRCxvREFBQSxDQUFFb0IsSUFBQSxDQUFBaUMsS0FBSyxDQUFDVSxTQUFTLElBQUUsbUJBQWlCLEdBQUEvRCxvREFBQSxDQUFFb0IsSUFBQSxDQUFBNEMsR0FBRyxrQkFDbEdwRSx1REFBQSxDQUF3QyxZQUFyQ0EsdURBQUEsQ0FBaUM7SUFBM0JtQixTQUFtQixFQUFYZCxNQUFBLENBQUF5QyxJQUFJLENBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ3pCdkIsU0FBTTtBQUFrQjs7Ozs7O0VBRU8sU0FBTTs7O0VBQ2pDLFNBQU07QUFBVTs7RUFDZCxTQUFNO0FBQVE7Ozs7OzJEQUp6QnBFLHVEQUFBLENBWU0sT0FaTkMsVUFZTSxHQVhPc0IsSUFBQSxDQUFBOEMsUUFBUSxDQUFDQyxNQUFNLDBEQUExQnRFLHVEQUFBLENBVU0sT0FBQUUsVUFBQSxHQVRPcUIsSUFBQSxDQUFBOEMsUUFBUSxDQUFDQyxNQUFNLDBEQUExQnRFLHVEQUFBLENBS00sT0FMTk8sVUFLTSxHQUpKUix1REFBQSxDQUErRixLQUEvRmdCLFVBQStGLEdBQTNFaEIsdURBQUEsQ0FBdUUsV0FBQUksb0RBQUEsQ0FBbEU0QixRQUFBLENBQUF3QyxPQUFPLENBQUNoRCxJQUFBLENBQUE4QyxRQUFRLFFBQU0sMENBQXdDLG1CQUN2RnRFLHVEQUFBLENBRU0sT0FGTmtCLFVBRU0sMERBREpqQix1REFBQSxDQUEyQ1EseUNBQUEsUUFBQUMsK0NBQUEsQ0FBNUJjLElBQUEsQ0FBQThDLFFBQVEsWUFBYkcsQ0FBQzs2REFBWHhFLHVEQUFBLENBQTJDLFdBQUFHLG9EQUFBLENBQWhCNEIsUUFBQSxDQUFBd0MsT0FBTyxDQUFDQyxDQUFDOzZGQUd4Q3hFLHVEQUFBLENBRU0sT0FBQXlFLFVBQUEsR0FESjFFLHVEQUFBLENBQStCLFdBQUFJLG9EQUFBLENBQTFCNEIsUUFBQSxDQUFBd0MsT0FBTyxDQUFDaEQsSUFBQSxDQUFBOEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FIK0I1Qjs7Ozs7OztBQU9DLGlFQUFlO0VBQ2ZLLEtBQUssRUFBRTtJQUNOckUsSUFBSSxFQUFFO01BQUMsV0FBUyxDQUFDO0lBQUMsQ0FBQztJQUNuQmdCLFFBQVEsRUFBRTtNQUFDLFdBQVM7SUFBSztFQUMxQixDQUFDO0VBQ0NzRCxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7RUFDekJDLEtBQUssRUFBRTtJQUNOdkUsSUFBSSxFQUFFLFNBQUFBLEtBQVVzQixLQUFLLEVBQUU7TUFDdEIsSUFBSSxDQUFDa0QsSUFBSSxDQUFDLENBQUM7SUFDWjtFQUNELENBQUM7RUFDREMsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBWTtJQUNqQixPQUFPO01BQ050RCxRQUFRLEVBQUUsQ0FBQyxDQUFDO01BQ1pvQixLQUFLLEVBQUU7SUFDUjtFQUNELENBQUM7RUFDRG1DLE9BQU8sV0FBQUEsUUFBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDRixJQUFJLENBQUMsQ0FBQztFQUNaLENBQUM7RUFDREcsT0FBTyxFQUFFO0lBQ1JILElBQUksV0FBQUEsS0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDckQsUUFBTyxHQUFJLENBQUMsQ0FBQztNQUFBLElBQUF5RCxTQUFBLEdBQUFDLDBCQUFBLENBQ0csSUFBSSxDQUFDN0UsSUFBSSxDQUFDSyxRQUFRLENBQUNDLFVBQVU7UUFBQXdFLEtBQUE7TUFBQTtRQUFsRCxLQUFBRixTQUFBLENBQUFHLENBQUEsTUFBQUQsS0FBQSxHQUFBRixTQUFBLENBQUFJLENBQUEsSUFBQUMsSUFBQSxHQUFvRDtVQUFBLElBQTNDMUUsUUFBTyxHQUFBdUUsS0FBQSxDQUFBeEQsS0FBQTtVQUNmLElBQUk0RCxVQUFRLEdBQUksSUFBSSxDQUFDbEYsSUFBSSxDQUFDbUIsUUFBUSxDQUFDWixRQUFRLENBQUNhLEdBQUcsQ0FBQztVQUNoRCxJQUFJOEQsVUFBUSxLQUFNekUsU0FBUyxFQUFFO1lBQzVCeUUsVUFBUSxHQUFJLENBQUM7VUFDZDtVQUVLLElBQUksQ0FBQy9ELFFBQVEsQ0FBQ1osUUFBUSxDQUFDYSxHQUFHLElBQUk4RCxVQUFRO1FBQzVDO01BQUEsU0FBQUMsR0FBQTtRQUFBUCxTQUFBLENBQUFRLENBQUEsQ0FBQUQsR0FBQTtNQUFBO1FBQUFQLFNBQUEsQ0FBQVMsQ0FBQTtNQUFBO01BRUEsSUFBSUgsU0FBUSxHQUFJLElBQUksQ0FBQ2xGLElBQUksQ0FBQ21CLFFBQVEsQ0FBQyxTQUFTLENBQUM7TUFDN0MsSUFBSStELFNBQVEsS0FBTXpFLFNBQVMsRUFBRTtRQUM1QnlFLFNBQVEsR0FBSSxDQUFDO01BQ2Q7TUFFSSxJQUFJLENBQUMvRCxRQUFRLENBQUMsU0FBUyxJQUFJK0QsU0FBUTtNQUV2QyxJQUFJSSxVQUFTLEdBQUksSUFBSSxDQUFDdEYsSUFBSSxDQUFDbUIsUUFBUSxDQUFDLGNBQWMsQ0FBQztNQUNuRCxJQUFJbUUsVUFBUyxLQUFNN0UsU0FBUyxFQUFFO1FBQzdCNkUsVUFBUyxHQUFJLEVBQUU7TUFDaEI7TUFFSSxJQUFJLENBQUNuRSxRQUFRLENBQUMsY0FBYyxJQUFJbUUsVUFBUztNQUU3QyxJQUFJQyxPQUFNLEdBQUksSUFBSSxDQUFDdkYsSUFBSSxDQUFDbUIsUUFBUSxDQUFDLFVBQVUsQ0FBQztNQUM1QyxJQUFJb0UsT0FBTSxLQUFNOUUsU0FBUyxFQUFFO1FBQzFCOEUsT0FBTSxHQUFJLEVBQUU7TUFDYjtNQUVJLElBQUksQ0FBQ3BFLFFBQVEsQ0FBQyxVQUFVLElBQUlvRSxPQUFNO01BRXRDLElBQUksQ0FBQzVELE9BQU8sQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNEQSxPQUFPLFdBQUFBLFFBQUEsRUFBRztNQUNULElBQUlZLEtBQUksR0FBSSxDQUFDLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQyxTQUFTLENBQUM7TUFBQSxJQUFBcUUsVUFBQSxHQUFBWCwwQkFBQSxDQUNoQixJQUFJLENBQUM3RSxJQUFJLENBQUNLLFFBQVEsQ0FBQ0MsVUFBVTtRQUFBbUYsTUFBQTtNQUFBO1FBQWxELEtBQUFELFVBQUEsQ0FBQVQsQ0FBQSxNQUFBVSxNQUFBLEdBQUFELFVBQUEsQ0FBQVIsQ0FBQSxJQUFBQyxJQUFBLEdBQW9EO1VBQUEsSUFBM0MxRSxRQUFPLEdBQUFrRixNQUFBLENBQUFuRSxLQUFBO1VBQ2ZpQixLQUFJLElBQUssSUFBSSxDQUFDcEIsUUFBUSxDQUFDWixRQUFRLENBQUNhLEdBQUcsQ0FBQztRQUNyQztNQUFBLFNBQUErRCxHQUFBO1FBQUFLLFVBQUEsQ0FBQUosQ0FBQSxDQUFBRCxHQUFBO01BQUE7UUFBQUssVUFBQSxDQUFBSCxDQUFBO01BQUE7TUFFQTlDLEtBQUksSUFBSyxJQUFJLENBQUN2QyxJQUFJLENBQUNLLFFBQVEsQ0FBQ3FGLElBQUk7TUFDaEMsSUFBSW5ELEtBQUksR0FBSSxDQUFDLEVBQUU7UUFDZEEsS0FBSSxHQUFJLENBQUM7TUFDVjtNQUNBQSxLQUFJLElBQUssSUFBSSxDQUFDdkMsSUFBSSxDQUFDQyxVQUFVO01BQzdCLElBQUksQ0FBQ3NDLEtBQUksR0FBSUEsS0FBSztNQUVsQixJQUFJLENBQUNvRCxLQUFLLENBQUMsZUFBZSxFQUFFO1FBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ3hFLFFBQVE7UUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDb0I7TUFBSyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNEUixTQUFTLFdBQUFBLFVBQUNkLE1BQU0sRUFBRTtNQUNqQixJQUFJQSxNQUFLLEtBQU0sQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sRUFBRTtNQUNWLE9BQU87UUFDTixPQUFPLENBQUNBLE1BQU07TUFDZjtJQUNEO0VBQ0Q7QUFDRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckdxRTtBQUNuQjtBQUVuRCxJQUFNNkUsV0FBVSxHQUFJQyxJQUFJLENBQUNELFdBQVc7O0FBRXBDOzs7Ozs7QUFNQSxpRUFBZTtFQUNkLFNBQVMsRUFBRUEsV0FBVztFQUN0QnpCLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQztFQUNmMkIsVUFBVSxFQUFFO0lBQ1hDLFlBQVksRUFBRUwsdUVBQXFCO0lBQ25DdkYsUUFBUSxFQUFFd0YsOERBQVdBO0VBQ3RCLENBQUM7RUFDQ0ssUUFBUSxFQUFFO0lBQ1J2RCxNQUFNLFdBQUFBLE9BQUEsRUFBRztNQUNQLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUNHLE1BQU0sQ0FBQ3dELE1BQU0sQ0FBQyxVQUFDbkcsSUFBSSxFQUFLO1FBQ3ZDLE9BQU9BLElBQUksQ0FBQzRDLElBQUcsS0FBTW5DLFNBQVE7TUFDL0IsQ0FBQztJQUNIO0VBQ0YsQ0FBQztFQUNIaUUsT0FBTyxXQUFBQSxRQUFBLEVBQUc7SUFBQSxJQUFBMEIsS0FBQTtJQUNULElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSSxHQUFJLElBQUksQ0FBQzlELElBQUksQ0FBQ0MsVUFBVSxDQUFDOEQsU0FBUSxHQUFJLGFBQVksR0FBSSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUVyRyxJQUFNQyxJQUFHLEdBQUksQ0FDWjtNQUNDL0YsSUFBSSxFQUFFLFFBQVE7TUFBRWdHLEtBQUssRUFBRSxTQUFBQSxNQUFBLEVBQU07UUFDNUJDLE1BQU0sQ0FBQ0MsUUFBTyxHQUFJVCxLQUFJLENBQUNVLEtBQUssQ0FBQ3BELElBQUcsR0FBSSxZQUFZO01BQ2pEO0lBQ0QsRUFDQTtJQUVELElBQUksQ0FBQ3FELE9BQU8sQ0FBQ0MsT0FBTyxDQUFDTixJQUFJLENBQUM7RUFDM0I7QUFDRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzVCRixJQUFNWixXQUFVLEdBQUlDLElBQUksQ0FBQ0QsV0FBVzs7QUFFcEM7Ozs7Ozs7QUFPQSxpRUFBZTtFQUNiLFNBQVMsRUFBRUEsV0FBVztFQUN0QnpCLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQztFQUNmTSxPQUFPLEVBQUU7SUFDUG5CLFdBQVcsV0FBQUEsWUFBQ2pELFFBQVEsRUFBRTtNQUNwQixPQUFPQSxRQUFRLENBQUNpRCxXQUFXLENBQUMyQyxNQUFNLENBQUMsVUFBQzFELFVBQVUsRUFBSztRQUNqRCxPQUFPQSxVQUFVLENBQUNjLE1BQUssR0FBSTtNQUM3QixDQUFDO0lBQ0g7RUFDRixDQUFDO0VBQ0RrQixJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO0lBQ2hCLE9BQU87TUFDTHRCLEtBQUssRUFBRSxJQUFJO01BQ1hXLEdBQUcsRUFBRTtJQUNQO0VBQ0YsQ0FBQztFQUNEWSxPQUFPLFdBQUFBLFFBQUEsRUFBRztJQUNSLElBQUksQ0FBQzRCLFFBQVEsQ0FBQyxhQUFZLEdBQUksSUFBSSxDQUFDRSxJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDLENBQUM7O0lBRXREOztJQUVBLElBQUksQ0FBQ3RELEtBQUksR0FBSSxJQUFJLENBQUNYLElBQUk7SUFDdEIsSUFBSSxJQUFJLENBQUNXLEtBQUssQ0FBQ1UsU0FBUSxHQUFJLENBQUMsRUFBRTtNQUM1QixJQUFJLENBQUNDLEdBQUUsR0FBSSxJQUFHLEdBQUksQ0FBQyxJQUFJLENBQUNYLEtBQUssQ0FBQ0EsS0FBSSxHQUFJLElBQUksQ0FBQ0EsS0FBSyxDQUFDVSxTQUFRLEdBQUksR0FBRyxFQUFFb0QsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJO0lBQ3JGO0VBQ0Y7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ25EQyxpRUFBZTtFQUNYNUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDO0VBQ2xCSSxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO0lBQ2IsT0FBTztNQUNIVCxRQUFRLEVBQUU7SUFDZDtFQUNKLENBQUM7RUFDRE8sS0FBSyxFQUFFO0lBQ0h0QixPQUFPLEVBQUUsU0FBQUEsUUFBU2lFLEVBQUUsRUFBRUMsRUFBRSxFQUFFO01BQ3RCLElBQUksQ0FBQ25ELFFBQU8sR0FBSSxJQUFJLENBQUNmLE9BQU8sQ0FBQ21FLEtBQUssQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xEO0VBQ0osQ0FBQztFQUNEM0MsT0FBTyxXQUFBQSxRQUFBLEVBQUc7SUFDUixJQUFHLElBQUksQ0FBQ3pCLE9BQU0sS0FBTXhDLFNBQVMsRUFBRTtNQUMzQixJQUFJLENBQUN1RCxRQUFPLEdBQUksSUFBSSxDQUFDZixPQUFPLENBQUNtRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUNsRDtFQUNGLENBQUM7RUFDRDFDLE9BQU8sRUFBRTtJQUNMVCxPQUFPLFdBQUFBLFFBQUNqQixPQUFPLEVBQUU7TUFDYixJQUFNcUUsTUFBSyxHQUFJLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUN2RSxPQUFPLENBQUNxRSxNQUFNLENBQUM7TUFDbEUsSUFBTUcsVUFBUyxHQUFJSCxNQUFLLEtBQU0sSUFBRyxHQUFJQSxNQUFNLENBQUNiLFdBQVcsQ0FBQyxJQUFJLFNBQVM7TUFDckUsSUFBTWlCLEdBQUUsR0FBSSxJQUFJLENBQUNaLEtBQUssQ0FBQ2EsYUFBYSxDQUFDQyxZQUFZLENBQUMzRSxPQUFPLENBQUM0RSxJQUFJLEVBQUUsT0FBTyxJQUMvRCxNQUFLLEdBQ0xKLFVBQVU7TUFFbEIsT0FBT0MsR0FBRztJQUNkO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0M4QztBQUN6QjtBQUV4QixJQUFHLENBQUMzQixJQUFJLENBQUNnQyxNQUFNLEVBQUU7RUFDYmhDLElBQUksQ0FBQ2dDLE1BQU0sR0FBR0QsNERBQWEsQ0FBQ0UsTUFBTSxDQUFDakMsSUFBSSxDQUFDO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMK0M7QUFDYTtBQUNsQjtBQUNPO0FBRTFDLElBQU0rQixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBYyxDQUN4QyxDQUFDO0FBRURBLGFBQWEsQ0FBQ0UsTUFBTSxHQUFHLFVBQVNLLElBQUksRUFBRTtFQUVsQyxJQUFNTixNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFjLENBQzFCLENBQUM7RUFFRE0sSUFBSSxDQUFDQyxLQUFLLENBQUMsWUFBTTtJQUNiTCwyREFBTyxDQUFDRCxNQUFNLENBQUMseUJBQXlCLEVBQUUsa0JBQWtCLEVBQUVFLGlFQUFrQixFQUFFRSxrRUFBTyxDQUFDO0lBQzFGSCwyREFBTyxDQUFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRUcsd0RBQVMsRUFBRUMsa0VBQU8sQ0FBQztFQUNqRSxDQUFDLENBQUM7RUFFRixPQUFPTCxNQUFNO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUM2TjtBQUNqQjtBQUM1TSw4QkFBOEIscUxBQTJCLENBQUMsOExBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFIQUFxSCxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcscURBQXFELHVCQUF1QixvQkFBb0IsS0FBSyxPQUFPLHlCQUF5Qix3QkFBd0IsS0FBSyxrQkFBa0IsdUJBQXVCLEtBQUssZ0JBQWdCLDhCQUE4QixnQ0FBZ0MsV0FBVyxrQkFBa0IsMkJBQTJCLE9BQU8sS0FBSyxxQkFBcUI7QUFDN25CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCdkM7QUFDdU47QUFDakI7QUFDTztBQUM3TSw0Q0FBNEMsb0lBQTRDO0FBQ3hGLDhCQUE4QixxTEFBMkIsQ0FBQyw4TEFBcUM7QUFDL0YseUNBQXlDLHdMQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1OQUFtTixXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLHFCQUFxQixXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxV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QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIrRTtBQUN0QjtBQUNMOztBQUVuRSxDQUE2Rjs7QUFFb0c7QUFDak0saUNBQWlDLDRMQUFlLENBQUMsMEZBQU0sYUFBYSx3R0FBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlQXNzaWdubWVudC52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0dyYWRlc0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/Zjg2OCIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvZ3JhZGVzL19ncmFkZXMuc2NzcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT9jMTgyIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9ncmFkZXMvX2dyYWRlcy5zY3NzP2U1ZDciLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWU/NGRiNCIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZT82NjRlIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlPzE1NjAiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/ZTEwMiIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZT9kMmNiIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlP2IyM2YiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9Vc2VyL0dyYWRlcy52dWU/OTRhZSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT81ODkyIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXRpbC9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP2UxMjAiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9IYW5kYm9vay9IYW5kYm9vay52dWU/ODY3OCIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1VzZXIvR3JhZGVBc3NpZ25tZW50LnZ1ZT9jOWYyIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlP2VhMGIiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2dyYWRlcy9qcy9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/YTlmOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHRhYmxlIGNsYXNzPVwiY2wtaGFuZGJvb2tcIj5cbiAgICAgIDx0cj48dGg+Q2F0ZWdvcnk8YnI+TXVsdGlwbGllcjoge3tpdGVtLm11bHRpcGxpZXJ9fTwvdGg+PHRoPkRlZHVjdGlvbjxicj4wIHRvIG1heDwvdGg+PC90cj5cbiAgICAgIDx0ciB2LWZvcj1cImNhdGVnb3J5IGluIGl0ZW0uaGFuZGJvb2suY2F0ZWdvcmllc1wiPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjYXRlZ29yeS5ydWJyaWMgIT09IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsLXRvZ2dsZSBjbC1zaW5nbGUtc3BhY2VcIj48c3Bhbj48YT57e2NhdGVnb3J5Lm5hbWV9fTwvYT48L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbC1ydWJyaWNibG9ja1wiPjxkaXYgdi1odG1sPVwiY2F0ZWdvcnkucnVicmljXCI+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+e3tjYXRlZ29yeS5uYW1lfX08L3RlbXBsYXRlPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFyZWFkb25seVwiPlxuICAgICAgICAgICAgPGlucHV0IHYtZm9yPVwiZGVkdWN0IGluIChjYXRlZ29yeS5kZWR1Y3QrMSlcIiB2LW1vZGVsPVwibWV0YWRhdGFbY2F0ZWdvcnkudGFnXVwiIDp2YWx1ZT1cImRlZHVjdC0xXCIgdHlwZT1cInJhZGlvXCIgQGNoYW5nZT1cImNvbXB1dGVcIj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxzcGFuIHYtZWxzZT57e2RlZHVjdGlvbihtZXRhZGF0YVtjYXRlZ29yeS50YWddKX19PC9zcGFuPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxpbnB1dCB2LWlmPVwiIXJlYWRvbmx5XCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibWV0YWRhdGFbJ19tYW51YWxfdGV4dCddXCI+XG4gICAgICAgICAgPHNwYW4gdi1lbHNlPnt7bWV0YWRhdGFbJ19tYW51YWxfdGV4dCddfX08L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImNlbnRlclwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiFyZWFkb25seVwiPlxuICAgICAgICAgIDxpbnB1dCB2LWZvcj1cImRlZHVjdCBpbiA1XCIgdi1tb2RlbD1cIm1ldGFkYXRhWydfbWFudWFsJ11cIiA6dmFsdWU9XCJkZWR1Y3QtMVwiIHR5cGU9XCJyYWRpb1wiIEBjaGFuZ2U9XCJjb21wdXRlXCI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIHYtZWxzZT57e2RlZHVjdGlvbihtZXRhZGF0YVsnX21hbnVhbCddKX19PC9zcGFuPlxuICAgICAgPC90ZD48L3RyPlxuICAgICAgPHRyIGNsYXNzPVwiY2wtaW50ZXJuYWxcIj48dGg+Q29tbWVudDwvdGg+PHRoPkRlZHVjdGlvbjwvdGg+PC90cj5cbiAgICAgIDx0cj48dGQ+XG4gICAgICAgIDx0ZXh0YXJlYSB2LWlmPVwiIXJlYWRvbmx5XCIgcm93cz1cIjNcIiB2LW1vZGVsPVwibWV0YWRhdGFbJ19jb21tZW50J11cIj48L3RleHRhcmVhPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiIHYtZWxzZT57e21ldGFkYXRhWydfY29tbWVudCddfX08L2Rpdj5cbiAgICAgIDwvdGQ+PHRkIGNsYXNzPVwiY2wtZGVkdWN0XCI+e3t0b3RhbH19PC90ZD48L3RyPlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0LyoqXG4gICAqIEhhbmRib29rIGVkaXRvci92aWV3aW5nIFZ1ZSBjb21wb25lbnRcbiAgICpcbiAgICogVXNlIGJ5IGJvdGggdGhlIHN0dWRlbnQgZ3JhZGUgcHJlc2VudGF0aW9uIHBhZ2UgYW5kIHRoZVxuICAgKiBhc3NpZ25tZW50IGdyYWRpbmcgcGFnZS5cbiAgICogQGNvbnN0cnVjdG9yIEhhbmRib29rVnVlXG4gICAqL1xuICBleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGl0ZW06IHtkZWZhdWx0OiB7fX0sXG5cdFx0XHRyZWFkb25seToge2RlZmF1bHQ6IGZhbHNlfVxuXHRcdH0sXG4gICAgZW1pdDogWydoYW5kYm9vay1kYXRhJ10sXG5cdFx0d2F0Y2g6IHtcblx0XHRcdGl0ZW06IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnRha2UoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1ldGFkYXRhOiB7fSxcblx0XHRcdFx0dG90YWw6IDBcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1vdW50ZWQoKSB7XG5cdFx0XHR0aGlzLnRha2UoKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHRha2UoKSB7XG5cdFx0XHRcdHRoaXMubWV0YWRhdGEgPSB7fTtcblx0XHRcdFx0Zm9yIChsZXQgY2F0ZWdvcnkgb2YgdGhpcy5pdGVtLmhhbmRib29rLmNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRsZXQgY2F0UG9pbnRzID0gdGhpcy5pdGVtLm1ldGFkYXRhW2NhdGVnb3J5LnRhZ107XG5cdFx0XHRcdFx0aWYgKGNhdFBvaW50cyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRjYXRQb2ludHMgPSAwO1xuXHRcdFx0XHRcdH1cblxuICAgICAgICAgIHRoaXMubWV0YWRhdGFbY2F0ZWdvcnkudGFnXSA9IGNhdFBvaW50c1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGNhdFBvaW50cyA9IHRoaXMuaXRlbS5tZXRhZGF0YVsnX21hbnVhbCddO1xuXHRcdFx0XHRpZiAoY2F0UG9pbnRzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjYXRQb2ludHMgPSAwO1xuXHRcdFx0XHR9XG5cbiAgICAgICAgdGhpcy5tZXRhZGF0YVsnX21hbnVhbCddID0gY2F0UG9pbnRzXG5cblx0XHRcdFx0bGV0IG1hbnVhbFRleHQgPSB0aGlzLml0ZW0ubWV0YWRhdGFbJ19tYW51YWxfdGV4dCddO1xuXHRcdFx0XHRpZiAobWFudWFsVGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0bWFudWFsVGV4dCA9ICcnO1xuXHRcdFx0XHR9XG5cbiAgICAgICAgdGhpcy5tZXRhZGF0YVsnX21hbnVhbF90ZXh0J10gPSBtYW51YWxUZXh0XG5cblx0XHRcdFx0bGV0IGNvbW1lbnQgPSB0aGlzLml0ZW0ubWV0YWRhdGFbJ19jb21tZW50J107XG5cdFx0XHRcdGlmIChjb21tZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjb21tZW50ID0gJyc7XG5cdFx0XHRcdH1cblxuICAgICAgICB0aGlzLm1ldGFkYXRhWydfY29tbWVudCddID0gY29tbWVudFxuXG5cdFx0XHRcdHRoaXMuY29tcHV0ZSgpO1xuXHRcdFx0fSxcblx0XHRcdGNvbXB1dGUoKSB7XG5cdFx0XHRcdGxldCB0b3RhbCA9IC10aGlzLm1ldGFkYXRhWydfbWFudWFsJ107XG5cdFx0XHRcdGZvciAobGV0IGNhdGVnb3J5IG9mIHRoaXMuaXRlbS5oYW5kYm9vay5jYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0dG90YWwgLT0gdGhpcy5tZXRhZGF0YVtjYXRlZ29yeS50YWddO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG90YWwgKz0gdGhpcy5pdGVtLmhhbmRib29rLmZyZWU7XG5cdFx0XHRcdGlmICh0b3RhbCA+IDApIHtcblx0XHRcdFx0XHR0b3RhbCA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dG90YWwgKj0gdGhpcy5pdGVtLm11bHRpcGxpZXI7XG5cdFx0XHRcdHRoaXMudG90YWwgPSB0b3RhbDtcblxuXHRcdFx0XHR0aGlzLiRlbWl0KCdoYW5kYm9vay1kYXRhJywgeydtZXRhZGF0YSc6IHRoaXMubWV0YWRhdGEsICd0b3RhbCc6IHRoaXMudG90YWx9KTtcblx0XHRcdH0sXG5cdFx0XHRkZWR1Y3Rpb24oZGVkdWN0KSB7XG5cdFx0XHRcdGlmIChkZWR1Y3QgPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIC1kZWR1Y3Q7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZ3JhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjbC1hdXRvYmFja1wiPjwvZGl2PlxuICAgICAgPHAgY2xhc3M9XCJjbC10aXRsZVwiPnt7anNvbi5hc3NpZ25tZW50Lm5hbWV9fTwvcD5cbiAgICAgIDxwIHYtaWY9XCJqc29uLmRpc3B1dGUgIT09IG51bGxcIiBjbGFzcz1cImNsLWRpc3B1dGVcIj5QbGVhc2UgZGlyZWN0IGFsbCBncmFkaW5nIGlzc3VlcyB0byA8c3BhbiB2LWh0bWw9XCJqc29uLmRpc3B1dGVcIj48L3NwYW4+PC9wPlxuICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gZ3JhZGVzXCI+XG4gICAgICAgIDxoMj57e2l0ZW0ubmFtZX19PC9oMj5cbiAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5oYW5kYm9vayA9PT0gdW5kZWZpbmVkXCIgdi1odG1sPVwiaXRlbS5odG1sXCI+PC9kaXY+XG4gICAgICAgIDxoYW5kYm9vayB2LWVsc2UgOml0ZW09XCJpdGVtXCIgcmVhZG9ubHk9XCJ0cnVlXCI+PC9oYW5kYm9vaz5cbiAgICAgICA8Z3JhZGUtaGlzdG9yeSA6aGlzdG9yeT1cIml0ZW0uaGlzdG9yeVwiPjwvZ3JhZGUtaGlzdG9yeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImdyYWRlXCI+XG4gICAgICAgIDxwIHYtaWY9XCJqc29uLmdyYWRlICE9PSBudWxsXCI+Q29tcHV0ZWQgR3JhZGU6IHt7anNvbi5ncmFkZX19PC9wPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgIDxwPkdyYWRlIE5vdCBBdmFpbGFibGU8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXIgc21hbGwgbm90aWNlXCI+R3JhZGVzIGFyZSBub3QgYXZhaWxhYmxlIHVudGlsIGFsbCBwYXJ0cyBvZiB0aGUgYXNzaWdubWVudCBoYXZlIGJlZW4gZ3JhZGVkLjwvcD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNsLWF1dG9iYWNrXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEdyYWRlSGlzdG9yeUNvbXBvbmVudCBmcm9tICcuLi9VdGlsL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWUnO1xuXHRpbXBvcnQgSGFuZGJvb2tWdWUgZnJvbSAnLi4vSGFuZGJvb2svSGFuZGJvb2sudnVlJztcblxuXHRjb25zdCBVc2VyVnVlQmFzZSA9IFNpdGUuVXNlclZ1ZUJhc2U7XG5cblx0LyoqXG5cdCAqIFRoZSBhc3NpZ25tZW50IGdyYWRpbmcgcGFnZSBmb3IgcHJlc2VudGF0aW9uIGZvciBhIHVzZXJcblx0ICpcblx0ICogL2NsL2dyYWRlLzphc3NpZ25tZW50XG5cdCAqIEBjb25zdHJ1Y3RvciBHcmFkZUFzc2lnbm1lbnRWdWVcblx0ICovXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHQnZXh0ZW5kcyc6IFVzZXJWdWVCYXNlLFxuXHRcdHByb3BzOiBbJ2pzb24nXSxcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHRncmFkZUhpc3Rvcnk6IEdyYWRlSGlzdG9yeUNvbXBvbmVudCxcblx0XHRcdGhhbmRib29rOiBIYW5kYm9va1Z1ZVxuXHRcdH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGdyYWRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbi5ncmFkZXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaHRtbCAhPT0gdW5kZWZpbmVkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0dGhpcy4kcm9vdC5zZXRUaXRsZSgnOiAgJyArIHRoaXMuanNvbi5hc3NpZ25tZW50LnNob3J0TmFtZSArICcgR3JhZGUgZm9yICcgKyB0aGlzLnVzZXIuZGlzcGxheU5hbWUoKSk7XG5cblx0XHRcdGNvbnN0IG1lbnUgPSBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnR3JhZGVzJywgY2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuJHNpdGUucm9vdCArICcvY2wvZ3JhZGVzJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF07XG5cblx0XHRcdHRoaXMuJHBhcmVudC5zZXRNZW51KG1lbnUpO1xuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGVudCBjbC1ncmFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxuICAgICAgPGRpdiB2LWlmPVwiZ3JhZGUgIT09IG51bGxcIj5cbiAgICAgICAgPHA+PHNwYW4gdi1odG1sPVwianNvbi5iZWZvcmVcIj48L3NwYW4+PC9wPlxuICAgICAgICA8cCB2LWlmPVwianNvbi5kaXNwdXRlICE9PSBudWxsXCIgY2xhc3M9XCJjZW50ZXJcIj5QbGVhc2UgZGlyZWN0IGFsbCBncmFkaW5nIGlzc3VlcyB0byA8c3BhbiB2LWh0bWw9XCJqc29uLmRpc3B1dGVcIj48L3NwYW4+PC9wPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+QXNzaWdubWVudDwvdGg+PHRoPiZuYnNwOzwvdGg+PHRoPkdyYWRlPC90aD48dGg+Jm5ic3A7PC90aD48dGg+R3JhZGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjYXRlZ29yeSBpbiBncmFkZS5jYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJjbC1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj57e2NhdGVnb3J5Lm5hbWV9fTwvdGQ+PHRkPnt7Y2F0ZWdvcnkucG9pbnRzfX0lPC90ZD48dGQ+e3tjYXRlZ29yeS5ncmFkZX19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImNsLWFzc2lnbm1lbnRcIiB2LWZvcj1cImFzc2lnbm1lbnQgaW4gYXNzaWdubWVudHMoY2F0ZWdvcnkpXCIgOmtleT1cImFzc2lnbm1lbnQudGFnXCI+XG4gICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cInJvb3QgKyAnL2NsL2dyYWRlLycgKyBhc3NpZ25tZW50LnRhZ1wiPnt7YXNzaWdubWVudC5uYW1lfX08L2E+PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt7TWF0aC5yb3VuZChhc3NpZ25tZW50LnBvaW50cyAqIDEwKSAvIDEwfX0lPC90ZD48dGQ+e3thc3NpZ25tZW50LmdyYWRlfX08L3RkPjx0ZCBjb2xzcGFuPVwiMlwiPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBlYWNoIGFzc2lnbm1lbnQgZm9yIG1vcmUgZ3JhZGluZyBkZXRhaWw8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q29tcHV0ZWQgR3JhZGU6IHt7Z3JhZGUuZ3JhZGV9fSBvdXQgb2Yge3tncmFkZS5hdmFpbGFibGV9fSBhdmFpbGFibGUgcG9pbnRze3twZXJ9fTwvcD5cbiAgICAgICAgPHA+PHNwYW4gdi1odG1sPVwianNvbi5hZnRlclwiPjwvc3Bhbj48L3A+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IFVzZXJWdWVCYXNlID0gU2l0ZS5Vc2VyVnVlQmFzZTtcblxuLyoqXG4gKiBUaGUgY291cnNlIGdyYWRpbmcgcGFnZSBmb3IgcHJlc2VudGF0aW9uIG9mIGFsbCBncmFkZXMgZm9yIGEgdXNlclxuICpcbiAqIC9jbC9ncmFkZXNcbiAqIEBjb25zdHJ1Y3RvciBHcmFkZXNWdWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICdleHRlbmRzJzogVXNlclZ1ZUJhc2UsXG4gIHByb3BzOiBbJ2pzb24nXSxcbiAgbWV0aG9kczoge1xuICAgIGFzc2lnbm1lbnRzKGNhdGVnb3J5KSB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkuYXNzaWdubWVudHMuZmlsdGVyKChhc3NpZ25tZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBhc3NpZ25tZW50LnBvaW50cyA+IDBcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyYWRlOiBudWxsLFxuICAgICAgcGVyOiAnJ1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnNldFRpdGxlKCdHcmFkZXMgZm9yICcgKyB0aGlzLnVzZXIuZGlzcGxheU5hbWUoKSk7XG5cbiAgICAvLyAgdGhpcy5zZXRUaXRsZSgnOiBHcmFkZXMgJyk7XG5cbiAgICB0aGlzLmdyYWRlID0gdGhpcy5qc29uO1xuICAgIGlmICh0aGlzLmdyYWRlLmF2YWlsYWJsZSA+IDApIHtcbiAgICAgIHRoaXMucGVyID0gJyAoJyArICh0aGlzLmdyYWRlLmdyYWRlIC8gdGhpcy5ncmFkZS5hdmFpbGFibGUgKiAxMDApLnRvRml4ZWQoMSkgKyAnJSknO1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjbC1ncmFkZS1oaXN0b3J5XCI+XG4gICAgPGRpdiB2LWlmPVwiaGlzdG9yeTIubGVuZ3RoID4gMFwiPlxuICAgICAgPGRpdiB2LWlmPVwiaGlzdG9yeTIubGVuZ3RoID4gMVwiIGNsYXNzPVwiY2wtdG9nZ2xlXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZXhwYW5kZXJcIj48YT57e2Rpc3BsYXkoaGlzdG9yeTJbMF0pfX0gLyBFeHBhbmQgZm9yIGFkZGl0aW9uYWwgZ3JhZGluZyBoaXN0b3J5PC9hPjwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyYWRlc1wiPlxuICAgICAgICAgIDxwIHYtZm9yPVwiaCBpbiBoaXN0b3J5MlwiPnt7ZGlzcGxheShoKX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgIDxwPnt7ZGlzcGxheShoaXN0b3J5MlswXSl9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBwcm9wczogWydoaXN0b3J5J10sXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBoaXN0b3J5MjogW11cbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICBoaXN0b3J5OiBmdW5jdGlvbih0bywgZm0pIHtcbiAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5MiA9IHRoaXMuaGlzdG9yeS5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYodGhpcy5oaXN0b3J5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeTIgPSB0aGlzLmhpc3Rvcnkuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgZGlzcGxheShoaXN0b3J5KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGdyYWRlciA9IHRoaXMuJHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zdGFmZiddKGhpc3RvcnkuZ3JhZGVyKTtcbiAgICAgICAgICAgICAgY29uc3QgZ3JhZGVyTmFtZSA9IGdyYWRlciAhPT0gbnVsbCA/IGdyYWRlci5kaXNwbGF5TmFtZSgpIDogXCJJbnZhbGlkXCI7XG4gICAgICAgICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgoaGlzdG9yeS50aW1lLCAnc2hvcnQnKSArXG4gICAgICAgICAgICAgICAgICAgICAgJyBieSAnICtcbiAgICAgICAgICAgICAgICAgICAgICBncmFkZXJOYW1lO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG4gIGRpdi5jbC1ncmFkZS1oaXN0b3J5IHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMWVtIDA7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICB9XG5cbiAgcC5leHBhbmRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBkaXYuZ3JhZGVzIHtcbiAgICBwYWRkaW5nOiAycHggMCAycHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmZmRkO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAycHggMCAwIDA7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIiwiaW1wb3J0IHtHcmFkZXNGYWN0b3J5fSBmcm9tICcuL2pzL0dyYWRlc0ZhY3RvcnknO1xuaW1wb3J0ICcuL19ncmFkZXMuc2Nzcyc7XG5cbmlmKCFTaXRlLkdyYWRlcykge1xuICAgIFNpdGUuR3JhZGVzID0gR3JhZGVzRmFjdG9yeS5jcmVhdGUoU2l0ZSk7XG59XG5cbiIsImltcG9ydCB7UGFnZVZ1ZX0gZnJvbSAnc2l0ZS1jbC9qcy9WdWUvUGFnZVZ1ZSc7XG5pbXBvcnQgR3JhZGVBc3NpZ25tZW50VnVlIGZyb20gJy4vVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlJztcbmltcG9ydCBHcmFkZXNWdWUgZnJvbSAnLi9Vc2VyL0dyYWRlcy52dWUnO1xuaW1wb3J0IFBhZ2VOYXYgZnJvbSAnc2l0ZS1jbC9qcy9WdWUvUGFnZU5hdi52dWUnO1xuXG5leHBvcnQgY29uc3QgR3JhZGVzRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xufVxuXG5HcmFkZXNGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcblxuICAgIGNvbnN0IEdyYWRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIH1cblxuICAgIHNpdGUucmVhZHkoKCkgPT4ge1xuICAgICAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlLWFzc2lnbm1lbnQnLCAnQXNzaWdubWVudCBHcmFkZScsIEdyYWRlQXNzaWdubWVudFZ1ZSwgUGFnZU5hdik7XG4gICAgICAgIFBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtZ3JhZGVzJywgJ0dyYWRlcycsIEdyYWRlc1Z1ZSwgUGFnZU5hdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gR3JhZGVzO1xufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtZDQ2NmQxOTQyOS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuOC4xLTMwZDg0YjRjZjEtN2MxNzg0MjQ3Yi56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1kNDY2ZDE5NDI5LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi44LjEtMzBkODRiNGNmMS03YzE3ODQyNDdiLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpdi5jbC1ncmFkZS1oaXN0b3J5W2RhdGEtdi0xNzdmYWE1M10ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDFlbSAwO1xufVxucFtkYXRhLXYtMTc3ZmFhNTNdIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuODVlbTtcbn1cbnAuZXhwYW5kZXJbZGF0YS12LTE3N2ZhYTUzXSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5kaXYuZ3JhZGVzW2RhdGEtdi0xNzdmYWE1M10ge1xuICBwYWRkaW5nOiAycHggMCAycHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZmZkZDtcbn1cbmRpdi5ncmFkZXMgcFtkYXRhLXYtMTc3ZmFhNTNdIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAycHggMCAwIDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0FBQUo7QUFFRTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBQ05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuICBkaXYuY2wtZ3JhZGUtaGlzdG9yeSB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjogMWVtIDA7XFxuICB9XFxuICBwIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gIH1cXG5cXG4gIHAuZXhwYW5kZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbiAgZGl2LmdyYWRlcyB7XFxuICAgIHBhZGRpbmc6IDJweCAwIDJweCAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmZmRkO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMnB4IDAgMCAwO1xcbiAgICB9XFxuICB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtZDQ2NmQxOTQyOS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuOC4xLTMwZDg0YjRjZjEtN2MxNzg0MjQ3Yi56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1kNDY2ZDE5NDI5LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi44LjEtMzBkODRiNGNmMS03YzE3ODQyNDdiLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWQ0NjZkMTk0MjkvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjguMS0zMGQ4NGI0Y2YxLTdjMTc4NDI0N2IuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zaXRlL2ltZy95ZWxsb3dwYWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgZGl2LmNsLXNob3csIGRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgZGl2LmNvbW1lbnQsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50IGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgZGl2LmNvbW1lbnQge1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcbn1cblxuZGl2LmNsLWdyYWRlcyB0ZC5yb2xlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuZGl2LmNsLWdyYWRlciBmb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGVyLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNWVtO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGVyLWl0ZW0gaDIge1xuICBtYXJnaW4tdG9wOiAtMC4yNWVtO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGVyLWl0ZW0tbG9ja2VkIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1MHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQ6ICNmOGZmZjg7XG59XG5kaXYuY2wtZ3JhZGVyIGEubGluay1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBwYWRkaW5nOiAwIDJweDtcbn1cbmRpdi5jbC1ncmFkZXIgcC5jbC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMWVtIDAgMCAwO1xufVxuZGl2LmNsLWdyYWRlciBwLmNsLWRpc3B1dGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbmRpdi5jbC1ncmFkZXIgcC5jbC1yb2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZGl2LmNsLWdyYWRlciBwLmNsLXJvbGUtc3RhZmYge1xuICBjb2xvcjogI2M0MTQyNTtcbn1cbmRpdi5jbC1ncmFkZXIgcC5jbC1kdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNjNDE0MjU7XG59XG5kaXYuY2wtZ3JhZGVyIGJ1dHRvbi5jbC1ncmFkZXItYnV0dG9uIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5kaXYuY2wtZ3JhZGVyIGEuY2wtZXh0cmEtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWNhdGVnb3J5IHRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWNhdGVnb3J5IHRkOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmRpdi5jbC1ncmFkZXIgdHIuY2wtYXNzaWdubWVudCB0ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuZGl2LmNsLWdyYWRlciB0ci5jbC1hc3NpZ25tZW50IHRkOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAzZW07XG59XG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBsYWJlbCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmxhYmVsLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgbGFiZWwsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYubGFiZWwge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBsYWJlbCBhLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYubGFiZWwgYSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGxhYmVsIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYubGFiZWwgYSB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmNvbW1lbnQsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYuY29tbWVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmNvbW1lbnQgdGV4dGFyZWEsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYuY29tbWVudCB0ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50IGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgZGl2LmNvbW1lbnQge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJweDtcbn1cbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5wb2ludHMsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA1ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDVweCA1cHggMCAwO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBpbnB1dCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cyBkaXYudmFsdWUsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIGlucHV0LCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnBvaW50cyBkaXYudmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5wb2ludHMgc3Bhbi5ub3QsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIHNwYW4ubm90IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnZhbHVlLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnZhbHVlIHtcbiAgcGFkZGluZzogMnB4IDFweDtcbn1cbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi52YWx1ZSBhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LnZhbHVlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sge1xuICB3aWR0aDogOTAlO1xufVxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0ZDpsYXN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRoOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAycHg7XG4gIG1hcmdpbjogMCAycHg7XG59XG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGQuY2wtZGVkdWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayBkaXYuY29tbWVudCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDAuM2VtIDA7XG59XG5kaXYuY2wtZ3JhZGVyIHAuY2wtcnVicmljLWV4cGFuZCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZThmN2YzO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpmaXJzdC1jaGlsZCwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWw6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcDpsYXN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIGxpLml0ZW0sIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHAuaXRlbSwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgdWwuaXRlbXMgbGkge1xuICBjb2xvcjogIzkwMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgbGkuaXRlbTpob3ZlciwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcC5pdGVtOmhvdmVyLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bC5pdGVtcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjYzAwMDAwO1xufVxuZGl2LmNsLWdyYWRlciB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmRpdi5jbC1ncmFkZXIgdGV4dGFyZWEueWVsbG93LXBhZCB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbmRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufVxuZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGUgcDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpYyBkaXYuY2wtc2hvdyB7XG4gIG1hcmdpbjogMWVtIDA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBtaW4taGVpZ2h0OiA4ZW07XG59XG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgdGV4dGFyZWEge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBtYXJnaW46IDFlbSAwO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA4ZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvc2l0ZS9zYXNzL21vZHVsZXMvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi92ZW5kb3IvY2wvZ3JhZGVzL19ncmFkZXMuc2Nzc1wiLFwid2VicGFjazovLy4vdmVuZG9yL2NsL2dyYWRlcy9zYXNzL3BhcnRpYWxzL19ncmFkaW5nLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0ZBO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FDL0VGOztBQ0RFO0VBQ0UsbUJBQUE7QURJSjs7QUNDRTtFQUNFLGtCQUFBO0FERUo7QUNDRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRENKO0FDQ0k7RUFDRSxtQkFBQTtBRENOO0FDR0U7RUFDRSx3QkFBQSxFQUFBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURESjtBQ0lFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURGSjtBQ0tFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QURISjtBQ01FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FESko7QUNPRTtFQUNFLGtCQUFBO0FETEo7QUNRRTtFQUNFLGNGaENHO0FDMEJQO0FDU0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRnZDRztBQ2dDUDtBQ1VFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURSSjtBQ1dFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEVEo7QUNhSTtFQUNFLGlCQUFBO0FEWE47QUNjSTtFQUNFLGdCQUFBO0FEWk47QUNpQkk7RUFDRSxpQkFBQTtBRGZOO0FDa0JJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBRGhCTjtBQ29CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEbEJKO0FDb0JJO0VBQ0Usa0JBQUE7QURsQk47QUNvQk07RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QURsQlI7QUNzQkk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QURwQk47QUNzQk07RUFDRSxjQUFBO0VBQ0EsV0FBQTtBRHBCUjtBQ3VCTTtFQUVFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEdEJSO0FDMEJJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEeEJOO0FDMEJNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUR4QlI7QUMyQk07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FEekJSO0FDNkJJO0VBQ0UsZ0JBQUE7QUQzQk47QUM0Qk07RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUQxQlI7QUMrQkU7RUFDRSxVQUFBO0FEN0JKO0FDK0JJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FEN0JOO0FDZ0NJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRDlCTjtBQ2lDSTtFQUNFLFdBQUE7QUQvQk47QUNrQ0k7RUFDRSxXQUFBO0FEaENOO0FDbUNJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRGpDTjtBQ29DSTtFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRG5DTjtBQ3VDRTtFQUNFLG9CQUFBO0FEckNKO0FDd0NFO0VBQ0UsbUJGbE1pQjtFRW1NakIsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRHRDSjtBQ3dDSTtFQUNFLGFBQUE7QUR0Q047QUN5Q0k7RUFDRSxnQkFBQTtBRHZDTjtBQzBDSTtFQUNFLGNGdktvQjtFRXdLcEIsZUFBQTtBRHhDTjtBQzJDSTtFQUNFLGNGM0txQjtBQ2tJM0I7QUM2Q0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FEM0NKO0FDOENFO0VBQ0UsbURBQUE7QUQ1Q0o7QUMrQ0U7RUFDRSwyQkFBQTtBRDdDSjtBQytDSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUQ3Q047QUNvREk7RUFFRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEbkROO0FDc0RJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEcEROXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFRoZSBtYWpvciBjb2xvcnNcXHJcXG4vLyBXZSBoYXZlIGEgcHJpbWFyeSBjb2xvciwgdHdvIHNlY29uZGFyeSBjb2xvcnMsIGFuZCBhIGNvbXBsZW1lbnRhcnkgY29sb3IuXFxyXFxuJGFjY2VudDogIzYwN0Q4QjtcXHJcXG5cXHJcXG4kdG9hc3QtYmFja2dyb3VuZDogIzE1MTUxNTtcXHJcXG4kdG9hc3QtdGV4dDogd2hpdGU7XFxyXFxuXFxyXFxuJGhlYWRlci1iYWNrZ3JvdW5kOiAjNTM1MDU0O1xcclxcbiRoZWFkZXItdGV4dDogI2VlZWVlZTtcXHJcXG5cXHJcXG4vLyBUaGUgbWFqb3IgY29sb3JzXFxyXFxuLy8gV2UgaGF2ZSBhIHByaW1hcnkgY29sb3IsIHR3byBzZWNvbmRhcnkgY29sb3JzLCBhbmQgYSBjb21wbGVtZW50YXJ5IGNvbG9yLlxcclxcbiRwcmltYXJ5OiAjMDA3MjNmO1xcclxcbiRsaWdodC1wcmltYXJ5OiAjNDRhMjZiO1xcclxcbiR2ZXJ5LWxpZ2h0LXByaW1hcnk6ICNlOGY3ZjM7XFxyXFxuJGRhcmstcHJpbWFyeTogIzAwNTIyMztcXHJcXG4kcHJpbWFyeS10ZXh0OiAjMjEyMTIxO1xcclxcblxcclxcbiRzZWNvbmRhOiAjMDA5MDllO1xcclxcbiRzZWNvbmRiOiAjZmNhZjE3O1xcclxcbiRzZWNvbmRjOiAjYzg5YTU4OyAvLyAjZThkOWI1O1xcclxcblxcclxcbiRjb21wOiAjYzQxNDI1O1xcclxcbiRibGluZDogI2VmYzZmZjtcXHJcXG4kY29tcC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzU3MDEwMiwgIzk2MDYwNiwgIzU3MDEwMik7XFxyXFxuJGNvbXAtYm9yZGVyOiAjYzdiZGJiO1xcclxcblxcclxcbi8vIE1lbnVzXFxyXFxuJGZvY3VzOiAjMDA4MTgzO1xcclxcbiRtZW51LWJhY2tncm91bmQ6ICNlOGU4ZTg7XFxyXFxuJG1lbnUtaG92ZXI6ICNkMGQwZDA7XFxyXFxuJG1lbnUtY29sb3I6IGJsYWNrO1xcclxcblxcclxcbi8vIFBhZ2UgYmFja2dyb3VuZFxcclxcbiRiYWNrZ3JvdW5kOiAjZWVlZWVlO1xcclxcblxcclxcbi8vIE5hdlxcclxcbiRuYXYtY29sb3I6IHdoaXRlO1xcclxcbiRuYXYtYmFja2dyb3VuZDogdXJsKCdpbWcvbmF2X3BhdHRlcm4ucG5nJyk7XFxyXFxuJG5hdi0yLWNvbG9yOiAjZmZmZjk5O1xcclxcbiRuYXYtMi1iYWNrZ3JvdW5kOiB1cmwoJ2ltZy9uYXZfcGF0dGVybi0yLnBuZycpO1xcclxcblxcclxcbi8vIFRhYmxlc1xcclxcbiR0YWJsZS1ncmFkaWVudC1mcm9tOiAjMjA0YzQyO1xcclxcbiR0YWJsZS1ncmFkaWVudC10bzogIzM4OWI1NDtcXHJcXG5cXHJcXG4vLyBEaWFsb2cgYm94ZXNcXHJcXG4kZGlhbG9nLWdyYWRpZW50LWZyb206ICMyMDRjNDI7XFxyXFxuJGRpYWxvZy1ncmFkaWVudC10bzogIzM4OWI1NDtcXHJcXG4kZGlhbG9nLWJhci1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuLy8gTGluayBjb2xvcnNcXHJcXG4kbGluazogIzgwODA4MDtcXHJcXG4kdmlzaXRlZDogIzk2ODQ0MzsgIC8vICNiMDlkNWI7XFxyXFxuJGhvdmVyOiAjMzM2NmNjO1xcclxcblxcclxcbiR2ZXJ5LWxpZ2h0LXByaW1hcnktbGluazogIzkwMDAwMDtcXHJcXG4kdmVyeS1saWdodC1wcmltYXJ5LWhvdmVyOiAjYzAwMDAwO1xcclxcblxcclxcblxcclxcbiRwcmltYXJ5LWxpbms6IHdoaXRlO1xcclxcbiRwcmltYXJ5LXZpc2l0ZWQ6ICNkZGRkZGQ7XFxyXFxuJHNlY29uZGItdmlzaXRlZDogIzU1NTU1NTtcXHJcXG4kYXV0b2JhY2stbGluazogIzg4MjIyMjtcXHJcXG4kYXV0b2JhY2stbGluay1ob3ZlcjogI2NjMjIyMjtcXHJcXG5cXHJcXG4kc2hhZG93LXg6IDNweDtcXHJcXG4kc2hhZG93LXk6IDNweDtcXHJcXG4kc2hhZG93LXJhZGl1czogOHB4O1xcclxcbiRzaGFkb3ctY29sb3I6ICNjY2M7XFxyXFxuXFxyXFxuJHRvZ2dsZS1saW5rLWhvdmVyLWNvbG9yOiAjMDA2NjAwO1xcclxcblxcclxcbi8vIEJveGVzXFxyXFxuJGJveC1ib3JkZXItY29sb3I6ICNiZGJkYmQ7XFxyXFxuXFxyXFxuLy8gQ2FyZHNcXHJcXG4kY2FyZC1oZWFkaW5nLWJhY2tncm91bmQ6ICNmMmYyZjI7XFxyXFxuJGNhcmQtYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcclxcblxcclxcbiVzaGFkb3cge1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93LXggJHNoYWRvdy15ICRzaGFkb3ctcmFkaXVzICRzaGFkb3ctY29sb3I7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3cteCAkc2hhZG93LXkgJHNoYWRvdy1yYWRpdXMgJHNoYWRvdy1jb2xvcjtcXHJcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3cteCAkc2hhZG93LXkgJHNoYWRvdy1yYWRpdXMgJHNoYWRvdy1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJW5vc2hhZG93IHtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljIGRpdi5jbC1zaG93LCBkaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIGRpdi5jb21tZW50LCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYuY29tbWVudCBkaXYuY29tbWVudCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5jb21tZW50IGRpdi5jb21tZW50IHtcXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2NjYztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNjY2M7XFxufVxcblxcbmRpdi5jbC1ncmFkZXMgdGQucm9sZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5kaXYuY2wtZ3JhZGVyIGZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZXItaXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlci1pdGVtIGgyIHtcXG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlci1pdGVtLWxvY2tlZCB7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogNTBweDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQ6ICNmOGZmZjg7XFxufVxcbmRpdi5jbC1ncmFkZXIgYS5saW5rLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIHBhZGRpbmc6IDAgMnB4O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAxZW0gMCAwIDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgcC5jbC1kaXNwdXRlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuZGl2LmNsLWdyYWRlciBwLmNsLXJvbGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHAuY2wtcm9sZS1zdGFmZiB7XFxuICBjb2xvcjogI2M0MTQyNTtcXG59XFxuZGl2LmNsLWdyYWRlciBwLmNsLWR1ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICNjNDE0MjU7XFxufVxcbmRpdi5jbC1ncmFkZXIgYnV0dG9uLmNsLWdyYWRlci1idXR0b24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLWdyYWRlciBhLmNsLWV4dHJhLWxpbmsge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgcGFkZGluZy10b3A6IDFlbTtcXG59XFxuZGl2LmNsLWdyYWRlciB0ci5jbC1jYXRlZ29yeSB0ZCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuZGl2LmNsLWdyYWRlciB0ci5jbC1jYXRlZ29yeSB0ZDpmaXJzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHRyLmNsLWFzc2lnbm1lbnQgdGQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbmRpdi5jbC1ncmFkZXIgdHIuY2wtYXNzaWdubWVudCB0ZDpmaXJzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgbGFiZWwsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5sYWJlbCwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGxhYmVsLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmxhYmVsIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgbGFiZWwgYSwgZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmxhYmVsIGEsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBsYWJlbCBhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmxhYmVsIGEge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmNvbW1lbnQsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYuY29tbWVudCB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5jb21tZW50IHRleHRhcmVhLCBkaXYuY2wtZ3JhZGVyIGRpdi5ncmFkZXIgZGl2LmNvbW1lbnQgdGV4dGFyZWEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LmNvbW1lbnQgZGl2LmNvbW1lbnQsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYuY29tbWVudCBkaXYuY29tbWVudCB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtZ3JhZGUgZGl2LnBvaW50cywgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5wb2ludHMge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNDVweCA1cHggMCAwO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYucG9pbnRzIGlucHV0LCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYucG9pbnRzIGRpdi52YWx1ZSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi5wb2ludHMgaW5wdXQsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIGRpdi52YWx1ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi5wb2ludHMgc3Bhbi5ub3QsIGRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlciBkaXYucG9pbnRzIHNwYW4ubm90IHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLWdyYWRlIGRpdi52YWx1ZSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi52YWx1ZSB7XFxuICBwYWRkaW5nOiAycHggMXB4O1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ncmFkZSBkaXYudmFsdWUgYSwgZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGVyIGRpdi52YWx1ZSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHRhYmxlLmNsLWhhbmRib29rIHRkOmxhc3QtY2hpbGQsIGRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgdGg6bGFzdC1jaGlsZCB7XFxuICB3aWR0aDogMXB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwIDJweDtcXG4gIG1hcmdpbjogMCAycHg7XFxufVxcbmRpdi5jbC1ncmFkZXIgdGFibGUuY2wtaGFuZGJvb2sgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayB0ZC5jbC1kZWR1Y3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuZGl2LmNsLWdyYWRlciB0YWJsZS5jbC1oYW5kYm9vayBkaXYuY29tbWVudCB7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOWE5YTk7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbjogMC4zZW0gMDtcXG59XFxuZGl2LmNsLWdyYWRlciBwLmNsLXJ1YnJpYy1leHBhbmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHtcXG4gIGJhY2tncm91bmQ6ICNlOGY3ZjM7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCAjODA4MDgwIHNvbGlkO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayBwOmZpcnN0LWNoaWxkLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayBwOmxhc3QtY2hpbGQsIGRpdi5jbC1ncmFkZXIgZGl2LmNsLXJ1YnJpY2Jsb2NrIHVsOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgbGkuaXRlbSwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcC5pdGVtLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bC5pdGVtcyBsaSB7XFxuICBjb2xvcjogIzkwMDAwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgbGkuaXRlbTpob3ZlciwgZGl2LmNsLWdyYWRlciBkaXYuY2wtcnVicmljYmxvY2sgcC5pdGVtOmhvdmVyLCBkaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWNibG9jayB1bC5pdGVtcyBsaTpob3ZlciB7XFxuICBjb2xvcjogI2MwMDAwMDtcXG59XFxuZGl2LmNsLWdyYWRlciB0ZXh0YXJlYSB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIHRleHRhcmVhLnllbGxvdy1wYWQge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi8uLi8uLi9zaXRlL2ltZy95ZWxsb3dwYWQucG5nXFxcIik7XFxufVxcbmRpdi5jbC1ncmFkZXIgZGl2LmdyYWRlIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuZGl2LmNsLWdyYWRlciBkaXYuZ3JhZGUgcDpmaXJzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgZGl2LmNsLXNob3cge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgbWluLWhlaWdodDogOGVtO1xcbn1cXG5kaXYuY2wtZ3JhZGVyIGRpdi5jbC1ydWJyaWMgdGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4ZW07XFxufVwiLFwiQGltcG9ydCAnfnNpdGUtY2wvc2Fzcy9tb2R1bGVzL2NvbG9ycyc7XFxuXFxuZGl2LmNsLWdyYWRlcyB7XFxuICB0ZC5yb2xlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG59XFxuXFxuZGl2LmNsLWdyYWRlciB7XFxuICBmb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgZGl2LmNsLWdyYWRlci1pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcXG5cXG4gICAgaDIge1xcbiAgICAgIG1hcmdpbi10b3A6IC0wLjI1ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIGRpdi5jbC1ncmFkZXItaXRlbS1sb2NrZWQge1xcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgYmFja2dyb3VuZDogI2Y4ZmZmODtcXG4gIH1cXG5cXG4gIGEubGluay1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICBwYWRkaW5nOiAwIDJweDtcXG4gIH1cXG5cXG4gIHAuY2wtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDFlbSAwIDAgMDtcXG4gIH1cXG5cXG4gIHAuY2wtZGlzcHV0ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgcC5jbC1yb2xlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgcC5jbC1yb2xlLXN0YWZmIHtcXG4gICAgY29sb3I6ICRjb21wO1xcbiAgfVxcblxcbiAgcC5jbC1kdWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgY29sb3I6ICRjb21wO1xcbiAgfVxcblxcbiAgYnV0dG9uLmNsLWdyYWRlci1idXR0b24ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIGEuY2wtZXh0cmEtbGluayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMC41ZW07XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICB9XFxuXFxuICB0ci5jbC1jYXRlZ29yeSB7XFxuICAgIHRkIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgfVxcblxcbiAgdHIuY2wtYXNzaWdubWVudCB7XFxuICAgIHRkIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgZGl2LmNsLWdyYWRlLCBkaXYuZ3JhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIGxhYmVsLCBkaXYubGFiZWwge1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG4gICAgICBhIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGRpdi5jb21tZW50IHtcXG4gICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xcblxcbiAgICAgIHRleHRhcmVhIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcblxcbiAgICAgIGRpdi5jb21tZW50IHtcXG4gICAgICAgIEBleHRlbmQgJXNoYWRvdztcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTlhOWE5O1xcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBkaXYucG9pbnRzIHtcXG4gICAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgICB3aWR0aDogNWVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA0NXB4IDVweCAwIDA7XFxuXFxuICAgICAgaW5wdXQsIGRpdi52YWx1ZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgfVxcblxcbiAgICAgIHNwYW4ubm90IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGRpdi52YWx1ZSB7XFxuICAgICAgcGFkZGluZzogMnB4IDFweDtcXG4gICAgICBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIHRhYmxlLmNsLWhhbmRib29rIHtcXG4gICAgd2lkdGg6IDkwJTtcXG5cXG4gICAgdGQ6bGFzdC1jaGlsZCwgdGg6bGFzdC1jaGlsZCB7XFxuICAgICAgd2lkdGg6IDFweDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgcGFkZGluZzogMCAycHg7XFxuICAgICAgbWFyZ2luOiAwIDJweDtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICB0ZXh0YXJlYSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgdGQuY2wtZGVkdWN0IHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgfVxcblxcbiAgICBkaXYuY29tbWVudCB7XFxuICAgICAgQGV4dGVuZCAlc2hhZG93O1xcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E5YTlhOTtcXG4gICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgIG1hcmdpbjogMC4zZW0gMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgcC5jbC1ydWJyaWMtZXhwYW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxuICB9XFxuXFxuICBkaXYuY2wtcnVicmljYmxvY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAkdmVyeS1saWdodC1wcmltYXJ5O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcblxcbiAgICBwOmZpcnN0LWNoaWxkLCB1bDpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICBwOmxhc3QtY2hpbGQsIHVsOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgbGkuaXRlbSwgcC5pdGVtLCB1bC5pdGVtcyBsaSB7XFxuICAgICAgY29sb3I6ICR2ZXJ5LWxpZ2h0LXByaW1hcnktbGluaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbGkuaXRlbTpob3ZlciwgcC5pdGVtOmhvdmVyLCB1bC5pdGVtcyBsaTpob3ZlciB7XFxuICAgICAgY29sb3I6ICR2ZXJ5LWxpZ2h0LXByaW1hcnktaG92ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbiAgdGV4dGFyZWEueWVsbG93LXBhZCB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vc2l0ZS9pbWcveWVsbG93cGFkLnBuZycpO1xcbiAgfVxcblxcbiAgZGl2LmdyYWRlIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBwOmZpcnN0LWNoaWxkIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgZGl2LmNsLXJ1YnJpYyB7XFxuXFxuXFxuICAgIGRpdi5jbC1zaG93IHtcXG4gICAgICBAZXh0ZW5kICVzaGFkb3c7XFxuICAgICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgICBtaW4taGVpZ2h0OiA4ZW07XFxuICAgIH1cXG5cXG4gICAgdGV4dGFyZWEge1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtaW4taGVpZ2h0OiA4ZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtOGMyNjI4MGE0Zi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjMtMmU4YmJlZWFjNC1mNTljOTUzZjU2LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtOGMyNjI4MGE0Zi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjMtMmU4YmJlZWFjNC1mNTljOTUzZjU2LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtOGMyNjI4MGE0Zi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjMtMmU4YmJlZWFjNC1mNTljOTUzZjU2LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtOGMyNjI4MGE0Zi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjMtMmU4YmJlZWFjNC1mNTljOTUzZjU2LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWQ0NjZkMTk0MjkvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjguMS0zMGQ4NGI0Y2YxLTdjMTc4NDI0N2IuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC01OGMxMDBjNTE1LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMi4yLWZhNmQxNDJkNWUtNTRlYTM4MGU2My56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLnlhcm4vY2FjaGUvcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS01LjAuMC05YjQ0MTA2N2M5LTZkNDgzNzMzYTQuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC05NzFkNjU2ZDFkLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEzLjMuMi04MmJmZWFlNzQ2LTczOTRhOGQxYjguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVszXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODQxMDQ4N2NkYi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3N2ZhYTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1kNDY2ZDE5NDI5LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi44LjEtMzBkODRiNGNmMS03YzE3ODQyNDdiLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtNThjMTAwYzUxNS8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy55YXJuL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNS4wLjAtOWI0NDEwNjdjOS02ZDQ4MzczM2E0LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtOTcxZDY1NmQxZC8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMy4zLjItODJiZmVhZTc0Ni03Mzk0YThkMWI4LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbM10hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTg0MTA0ODdjZGIvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4yLjItZmE2ZDE0MmQ1ZS01NGVhMzgwZTYzLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzdmYWE1MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC04YzI2MjgwYTRmLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMy0yZThiYmVlYWM0LWY1OWM5NTNmNTYuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC04YzI2MjgwYTRmLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMy0yZThiYmVlYWM0LWY1OWM5NTNmNTYuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1kNDY2ZDE5NDI5LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi44LjEtMzBkODRiNGNmMS03YzE3ODQyNDdiLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8ueWFybi9jYWNoZS9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTUuMC4wLTliNDQxMDY3YzktNmQ0ODM3MzNhNC56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zYXNzLWxvYWRlci12aXJ0dWFsLTk3MWQ2NTZkMWQvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTMuMy4yLTgyYmZlYWU3NDYtNzM5NGE4ZDFiOC56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzNdIS4vX2dyYWRlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWQ0NjZkMTk0MjkvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjguMS0zMGQ4NGI0Y2YxLTdjMTc4NDI0N2IuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy55YXJuL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNS4wLjAtOWI0NDEwNjdjOS02ZDQ4MzczM2E0LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtOTcxZDY1NmQxZC8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMy4zLjItODJiZmVhZTc0Ni03Mzk0YThkMWI4LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbM10hLi9fZ3JhZGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC03MTgzMDUzYWI0LzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMy1jYmY0ZGEyMWRmLWIxNjhkZGU1YjguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC01OGMxMDBjNTE1LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMi4yLWZhNmQxNDJkNWUtNTRlYTM4MGU2My56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODQxMDQ4N2NkYi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyZGFiNzdmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC03MTgzMDUzYWI0LzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMy1jYmY0ZGEyMWRmLWIxNjhkZGU1YjguemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC01OGMxMDBjNTE1LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMi4yLWZhNmQxNDJkNWUtNTRlYTM4MGU2My56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODQxMDQ4N2NkYi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjJiMGIyMFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNzE4MzA1M2FiNC8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjMtY2JmNGRhMjFkZi1iMTY4ZGRlNWI4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtNThjMTAwYzUxNS8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTg0MTA0ODdjZGIvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4yLjItZmE2ZDE0MmQ1ZS01NGVhMzgwZTYzLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0dyYWRlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjcwNDE5ZTBcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTcxODMwNTNhYjQvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4zLWNiZjRkYTIxZGYtYjE2OGRkZTViOC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTU4YzEwMGM1MTUvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4yLjItZmE2ZDE0MmQ1ZS01NGVhMzgwZTYzLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC04NDEwNDg3Y2RiLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMi4yLWZhNmQxNDJkNWUtNTRlYTM4MGU2My56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9HcmFkZUhpc3RvcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3N2ZhYTUzJnNjb3BlZD10cnVlXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNzE4MzA1M2FiNC8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjMtY2JmNGRhMjFkZi1iMTY4ZGRlNWI4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODQxMDQ4N2NkYi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vSGFuZGJvb2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTcxODMwNTNhYjQvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4zLWNiZjRkYTIxZGYtYjE2OGRkZTViOC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTg0MTA0ODdjZGIvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4yLjItZmE2ZDE0MmQ1ZS01NGVhMzgwZTYzLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTcxODMwNTNhYjQvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4zLWNiZjRkYTIxZGYtYjE2OGRkZTViOC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTg0MTA0ODdjZGIvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4yLjItZmE2ZDE0MmQ1ZS01NGVhMzgwZTYzLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0dyYWRlQXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNzE4MzA1M2FiNC8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjMtY2JmNGRhMjFkZi1iMTY4ZGRlNWI4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODQxMDQ4N2NkYi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTcxODMwNTNhYjQvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4zLWNiZjRkYTIxZGYtYjE2OGRkZTViOC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTg0MTA0ODdjZGIvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4yLjItZmE2ZDE0MmQ1ZS01NGVhMzgwZTYzLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNzE4MzA1M2FiNC8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjMtY2JmNGRhMjFkZi1iMTY4ZGRlNWI4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODQxMDQ4N2NkYi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTcxODMwNTNhYjQvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4zLWNiZjRkYTIxZGYtYjE2OGRkZTViOC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTg0MTA0ODdjZGIvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4yLjItZmE2ZDE0MmQ1ZS01NGVhMzgwZTYzLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNzE4MzA1M2FiNC8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjMtY2JmNGRhMjFkZi1iMTY4ZGRlNWI4LnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODQxMDQ4N2NkYi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtOGMyNjI4MGE0Zi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjMtMmU4YmJlZWFjNC1mNTljOTUzZjU2LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1kNDY2ZDE5NDI5LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi44LjEtMzBkODRiNGNmMS03YzE3ODQyNDdiLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtNThjMTAwYzUxNS8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy55YXJuL2NhY2hlL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNS4wLjAtOWI0NDEwNjdjOS02ZDQ4MzczM2E0LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtOTcxZDY1NmQxZC8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMy4zLjItODJiZmVhZTc0Ni03Mzk0YThkMWI4LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbM10hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLTg0MTA0ODdjZGIvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4yLjItZmE2ZDE0MmQ1ZS01NGVhMzgwZTYzLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzdmYWE1MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmRhYjc3ZlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9IYW5kYm9vay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtODQxMDQ4N2NkYi8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjIuMi1mYTZkMTQyZDVlLTU0ZWEzODBlNjMuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL0hhbmRib29rL0hhbmRib29rLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2MmRhYjc3ZlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzYyZGFiNzdmJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjJkYWI3N2YnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hhbmRib29rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmRhYjc3ZlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2MmRhYjc3ZicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjJiMGIyMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlQXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC04NDEwNDg3Y2RiLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMi4yLWZhNmQxNDJkNWUtNTRlYTM4MGU2My56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZUFzc2lnbm1lbnQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjVmMmIwYjIwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNWYyYjBiMjAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1ZjJiMGIyMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVBc3NpZ25tZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjJiMGIyMFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1ZjJiMGIyMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vR3JhZGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzA0MTllMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC04NDEwNDg3Y2RiLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMi4yLWZhNmQxNDJkNWUtNTRlYTM4MGU2My56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInZlbmRvci9jbC9ncmFkZXMvanMvVXNlci9HcmFkZXMudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjI3MDQxOWUwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMjcwNDE5ZTAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcyNzA0MTllMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JhZGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzA0MTllMFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcyNzA0MTllMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzdmYWE1MyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3N2ZhYTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC04NDEwNDg3Y2RiLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMi4yLWZhNmQxNDJkNWUtNTRlYTM4MGU2My56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0xNzdmYWE1M1wiXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvZ3JhZGVzL2pzL1V0aWwvR3JhZGVIaXN0b3J5Q29tcG9uZW50LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxNzdmYWE1M1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzE3N2ZhYTUzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMTc3ZmFhNTMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyYWRlSGlzdG9yeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc3ZmFhNTMmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMTc3ZmFhNTMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX3RvRGlzcGxheVN0cmluZyIsIiRwcm9wcyIsIml0ZW0iLCJtdWx0aXBsaWVyIiwiX2hvaXN0ZWRfMyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiaGFuZGJvb2siLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJydWJyaWMiLCJ1bmRlZmluZWQiLCJfaG9pc3RlZF80IiwibmFtZSIsIl9ob2lzdGVkXzUiLCJpbm5lckhUTUwiLCJrZXkiLCJfaG9pc3RlZF83IiwicmVhZG9ubHkiLCJkZWR1Y3QiLCJfY3R4IiwibWV0YWRhdGEiLCJ0YWciLCIkZXZlbnQiLCJ2YWx1ZSIsInR5cGUiLCJvbkNoYW5nZSIsIl9jYWNoZSIsIiRvcHRpb25zIiwiY29tcHV0ZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2hvaXN0ZWRfOSIsImRlZHVjdGlvbiIsIl9ob2lzdGVkXzEwIiwiX2hvaXN0ZWRfMTEiLCJfaG9pc3RlZF8xMyIsIl9ob2lzdGVkXzE0Iiwicm93cyIsIl9ob2lzdGVkXzE1IiwiX2hvaXN0ZWRfMTYiLCJ0b3RhbCIsImpzb24iLCJhc3NpZ25tZW50IiwiZGlzcHV0ZSIsImdyYWRlcyIsImh0bWwiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X2hhbmRib29rIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9ncmFkZV9oaXN0b3J5IiwiaGlzdG9yeSIsIl9ob2lzdGVkXzgiLCJncmFkZSIsIl9ob2lzdGVkXzEyIiwiY29sc3BhbiIsImJlZm9yZSIsInBvaW50cyIsImFzc2lnbm1lbnRzIiwiaHJlZiIsInJvb3QiLCJNYXRoIiwicm91bmQiLCJhdmFpbGFibGUiLCJwZXIiLCJhZnRlciIsImhpc3RvcnkyIiwibGVuZ3RoIiwiZGlzcGxheSIsImgiLCJfaG9pc3RlZF82IiwicHJvcHMiLCJlbWl0Iiwid2F0Y2giLCJ0YWtlIiwiZGF0YSIsIm1vdW50ZWQiLCJtZXRob2RzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImNhdFBvaW50cyIsImVyciIsImUiLCJmIiwibWFudWFsVGV4dCIsImNvbW1lbnQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiZnJlZSIsIiRlbWl0IiwiR3JhZGVIaXN0b3J5Q29tcG9uZW50IiwiSGFuZGJvb2tWdWUiLCJVc2VyVnVlQmFzZSIsIlNpdGUiLCJjb21wb25lbnRzIiwiZ3JhZGVIaXN0b3J5IiwiY29tcHV0ZWQiLCJmaWx0ZXIiLCJfdGhpcyIsIiRyb290Iiwic2V0VGl0bGUiLCJzaG9ydE5hbWUiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJtZW51IiwiY2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIiRzaXRlIiwiJHBhcmVudCIsInNldE1lbnUiLCJ0b0ZpeGVkIiwidG8iLCJmbSIsInNsaWNlIiwicmV2ZXJzZSIsImdyYWRlciIsIiRzdG9yZSIsImdldHRlcnMiLCJncmFkZXJOYW1lIiwic3RyIiwiVGltZUZvcm1hdHRlciIsImFic29sdXRlVU5JWCIsInRpbWUiLCJHcmFkZXNGYWN0b3J5IiwiR3JhZGVzIiwiY3JlYXRlIiwiUGFnZVZ1ZSIsIkdyYWRlQXNzaWdubWVudFZ1ZSIsIkdyYWRlc1Z1ZSIsIlBhZ2VOYXYiLCJzaXRlIiwicmVhZHkiXSwic291cmNlUm9vdCI6IiJ9