(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_activity_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activity: {},
      selected_status: '',
      remark: ''
    };
  },
  mounted: function mounted() {
    var _this$activity$status;

    if (!this.$store.state.token) {
      this.$router.push("/login");
    }

    var activities = JSON.parse(JSON.stringify(this.$store.state.activities));
    var lookup = {};

    for (var i = 0, len = activities.length; i < len; i++) {
      lookup[activities[i].id] = activities[i];
    }

    this.activity = lookup[this.$route.params.id];
    this.selected_status = (_this$activity$status = this.activity.status) !== null && _this$activity$status !== void 0 ? _this$activity$status : '';
  },
  methods: {
    onUpdate: function onUpdate() {
      var _this = this;

      this.activity.status = this.selected_status;
      this.activity.remark = this.remark;
      var data = this.activity;
      data = Object.assign({
        'updator_id': this.$store.state.user.id
      }, data);
      axios.put("/api/activity/".concat(this.activity.id), data, {
        headers: {
          Authorization: "Bearer ".concat(this.$store.state.token)
        }
      }).then(function (response) {
        _this.$store.dispatch("fetchAllActivities");

        _this.$router.push("/activity/show/".concat(_this.activity.id));
      })["catch"](function (err) {
        alert("Oops! " + err.response.data.message);
        return;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/activity/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/activity/Edit.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_443529bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=443529bb& */ "./resources/js/views/activity/Edit.vue?vue&type=template&id=443529bb&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/activity/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_443529bb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_443529bb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/activity/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/activity/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/activity/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/activity/Edit.vue?vue&type=template&id=443529bb&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/activity/Edit.vue?vue&type=template&id=443529bb& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_443529bb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_443529bb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_443529bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=443529bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Edit.vue?vue&type=template&id=443529bb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Edit.vue?vue&type=template&id=443529bb&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Edit.vue?vue&type=template&id=443529bb& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _vm.activity
      ? _c("div", [
          _c("h2", [_vm._v(_vm._s(_vm.activity.activity))]),
          _vm._v(" "),
          _c("p", [
            _vm._v(_vm._s(_vm.activity.user && _vm.activity.user.name))
          ]),
          _vm._v(
            "\n    what if an activity does not exist and any number is placed in the url?\n\n    "
          ),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onUpdate.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selected_status,
                      expression: "selected_status"
                    }
                  ],
                  attrs: { name: "status", id: "status" },
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
                      _vm.selected_status = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { domProps: { value: _vm.activity.status } }, [
                    _vm._v(_vm._s(_vm.activity.status))
                  ]),
                  _vm._v(" "),
                  _vm.activity.status == "Pending"
                    ? _c("option", { attrs: { value: "Done" } }, [
                        _vm._v("Done")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.activity.status == "Done"
                    ? _c("option", { attrs: { value: "Pending" } }, [
                        _vm._v("Pending")
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.remark,
                    expression: "remark"
                  }
                ],
                attrs: {
                  type: "text",
                  name: "remark",
                  id: "remark",
                  placeholder: "Input remark"
                },
                domProps: { value: _vm.remark },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.remark = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("button", { attrs: { type: "submit" } }, [_vm._v("Update")])
            ]
          )
        ])
      : _c(
          "div",
          [
            _vm._v("\n    Activity does not exist. "),
            _c("router-link", { attrs: { to: "/activity/create" } }, [
              _vm._v("Create one.")
            ])
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);