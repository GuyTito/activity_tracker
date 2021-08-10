(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_activity_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Show.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
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
  computed: {
    moment: function (_moment) {
      function moment() {
        return _moment.apply(this, arguments);
      }

      moment.toString = function () {
        return _moment.toString();
      };

      return moment;
    }(function () {
      return moment;
    }),
    activity: function activity() {
      var _this = this;

      var activity = this.$store.state.activities.filter(function (activity) {
        return activity.id == _this.$route.params.id;
      });
      return activity[0];
    }
  }
});

/***/ }),

/***/ "./resources/js/views/activity/Show.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/activity/Show.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_5ef435a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=5ef435a4& */ "./resources/js/views/activity/Show.vue?vue&type=template&id=5ef435a4&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/activity/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Show_vue_vue_type_template_id_5ef435a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_5ef435a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/activity/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/activity/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/activity/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/activity/Show.vue?vue&type=template&id=5ef435a4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/activity/Show.vue?vue&type=template&id=5ef435a4& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5ef435a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5ef435a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5ef435a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=5ef435a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Show.vue?vue&type=template&id=5ef435a4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Show.vue?vue&type=template&id=5ef435a4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/activity/Show.vue?vue&type=template&id=5ef435a4& ***!
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
  return _c("div", { staticClass: "container" }, [
    _vm.activity
      ? _c(
          "div",
          [
            _c("p", [
              _c("span", { staticClass: "fw-bold" }, [_vm._v("Activity:")]),
              _vm._v(" " + _vm._s(_vm.activity.activity) + " ")
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", { staticClass: "fw-bold" }, [_vm._v("Status:")]),
              _vm._v(" " + _vm._s(_vm.activity.status) + " ")
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", { staticClass: "fw-bold" }, [_vm._v("Remark:")]),
              _vm._v(" " + _vm._s(_vm.activity.remark) + " ")
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", { staticClass: "fw-bold" }, [_vm._v("Created By:")]),
              _vm._v(" " + _vm._s(_vm.activity.user && _vm.activity.user.name))
            ]),
            _vm._v(" "),
            _c("p", [
              _c("span", { staticClass: "fw-bold" }, [_vm._v("Date Created:")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm
                      .moment(_vm.activity.created_at)
                      .format("D-MMM-YYYY h:mm:ss a")
                  )
              )
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary mb-3",
                attrs: {
                  to: "/activity/edit/" + _vm.activity.id,
                  role: "button"
                }
              },
              [_vm._v("Update")]
            ),
            _vm._v(" "),
            _vm.activity.activity_updates &&
            _vm.activity.activity_updates.length
              ? _c("div", [
                  _c(
                    "table",
                    {
                      staticClass: "table table-hover table-sm table-bordered"
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.activity.activity_updates, function(
                          item,
                          counter
                        ) {
                          return _c("tr", { key: item.id }, [
                            _c("td", [_vm._v(_vm._s(counter + 1))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.update))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.user.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm
                                    .moment(item.created_at)
                                    .format("D-MMM-YYYY h:mm:ss a")
                                )
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ])
              : _c("div", [_vm._v("No updates made for this activity.")])
          ],
          1
        )
      : _c(
          "div",
          [
            _vm._v("\n    Activity does not exist.\n    "),
            _c("router-link", { attrs: { to: "/activity/create" } }, [
              _vm._v("Create one.")
            ])
          ],
          1
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Updates")]),
        _vm._v(" "),
        _c("th", [_vm._v("Updated By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Time")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);