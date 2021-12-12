"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeToggleButton = function() {\n    _s();\n    var toggleColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)().toggleColorMode;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        exitBeforeEnter: true,\n        initial: false,\n        __source: {\n            fileName: \"/Users/eli/Developer/portfolio/components/theme-toggle-button.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            style: {\n                display: 'inline-block'\n            },\n            initial: {\n                y: -20,\n                opacity: 0\n            },\n            animate: {\n                y: 0,\n                opacity: 1\n            },\n            exit: {\n                y: 20,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.2\n            },\n            __source: {\n                fileName: \"/Users/eli/Developer/portfolio/components/theme-toggle-button.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                \"aria-label\": \"Toggle theme\",\n                colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"pink\", \"teal\"),\n                icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n                })),\n                onClick: toggleColorMode,\n                __source: {\n                    fileName: \"/Users/eli/Developer/portfolio/components/theme-toggle-button.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: _this\n            })\n        }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'))\n    }));\n};\n_s(ThemeToggleButton, \"pCB/HNB8FhZAEYh1hiUHUsp1udk=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDdUI7QUFDMUI7OztBQUVwRCxHQUFLLENBQUNPLGlCQUFpQixHQUFHLFFBQzFCLEdBRGdDLENBQUM7O0lBQy9CLEdBQUssQ0FBR0MsZUFBZSxHQUFLTCw4REFBWSxHQUFoQ0ssZUFBZTtJQUV2QixNQUFNLHNFQUNIUiwwREFBZTtRQUFDUyxlQUFlO1FBQUNDLE9BQU8sRUFBRSxLQUFLOzs7Ozs7O3VGQUM1Q1QscURBQVU7WUFDVFcsS0FBSyxFQUFFLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUFjO1lBQUMsQ0FBQztZQUVsQ0gsT0FBTyxFQUFFLENBQUM7Z0JBQUNJLENBQUMsR0FBRyxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztZQUFDLENBQUM7WUFDL0JDLE9BQU8sRUFBRSxDQUFDO2dCQUFDRixDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7WUFBQyxDQUFDO1lBQzdCRSxJQUFJLEVBQUUsQ0FBQztnQkFBQ0gsQ0FBQyxFQUFFLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO1lBQUMsQ0FBQztZQUMzQkcsVUFBVSxFQUFFLENBQUM7Z0JBQUNDLFFBQVEsRUFBRSxHQUFHO1lBQUMsQ0FBQzs7Ozs7OzsyRkFFNUJqQix3REFBVTtnQkFDVGtCLENBQVUsYUFBQyxDQUFjO2dCQUN6QkMsV0FBVyxFQUFFakIsbUVBQWlCLENBQUMsQ0FBTSxPQUFFLENBQU07Z0JBQzdDa0IsSUFBSSxFQUFFbEIsbUVBQWlCLHNFQUFFRSxzREFBUTt5RkFBTUQscURBQU87O2dCQUM5Q2tCLE9BQU8sRUFBRWYsZUFBZTs7Ozs7Ozs7V0FWckJKLG1FQUFpQixDQUFDLENBQU8sUUFBRSxDQUFNOztBQWU5QyxDQUFDO0dBdEJLRyxpQkFBaUI7O1FBQ09KLDBEQUFZOzs7S0FEcENJLGlCQUFpQjtBQXdCdkIsK0RBQWVBLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlLWJ1dHRvbi5qcz9jY2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuXG5jb25zdCBUaGVtZVRvZ2dsZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXIgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cbiAgICAgICAga2V5PXt1c2VDb2xvck1vZGVWYWx1ZSgnbGlnaHQnLCAnZGFyaycpfVxuICAgICAgICBpbml0aWFsPXt7IHk6IC0yMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgZXhpdD17eyB5OiAyMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgID5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIHRoZW1lXCJcbiAgICAgICAgICBjb2xvclNjaGVtZT17dXNlQ29sb3JNb2RlVmFsdWUoXCJwaW5rXCIsIFwidGVhbFwiKX1cbiAgICAgICAgICBpY29uPXt1c2VDb2xvck1vZGVWYWx1ZSg8TW9vbkljb24gLz4sIDxTdW5JY29uIC8+KX1cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgICAgID48L0ljb25CdXR0b24+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZUJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTdW5JY29uIiwiTW9vbkljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXJpYS1sYWJlbCIsImNvbG9yU2NoZW1lIiwiaWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n");

/***/ })

});