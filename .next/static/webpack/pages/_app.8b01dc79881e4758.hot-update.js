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

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#B4CBD9', '#202023')(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            'section-title': {\n                textDecoration: 'underline',\n                fontSize: 20,\n                textUnderLineOffset: 6,\n                textDecorationColor: '#525252',\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#1D4044', '#ff63c3')(props),\n                textUnderLineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'Heebo'\"\n};\nvar colors = {\n    glassTeal: '#88ccca'\n};\nvar config = {\n    initialColorMode: 'dark',\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QztBQUNEO0FBRTdDLEdBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFDZEMsTUFBTSxFQUFFQyxRQUFRLENBQVJBLEtBQUs7UUFBSSxNQUNoQixDQURpQixDQUFDO1lBQ2pCQyxJQUFJLEVBQUUsQ0FBQztnQkFDTEMsRUFBRSxFQUFFTCw0REFBSSxDQUFFLENBQVMsVUFBRSxDQUFTLFVBQUVHLEtBQUs7WUFDdkMsQ0FBQztRQUNILENBQUM7O0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0csVUFBVSxHQUFHLENBQUM7SUFDbEJDLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLFFBQVEsRUFBRSxDQUFDO1lBQ1QsQ0FBZSxnQkFBRSxDQUFDO2dCQUNoQkMsY0FBYyxFQUFFLENBQVc7Z0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG1CQUFtQixFQUFFLENBQVM7Z0JBQzlCQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO1lBQ2pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMQyxTQUFTLEVBQUVkLFFBQVEsQ0FBUkEsS0FBSztZQUFJLE1BQ3JCLENBRHNCLENBQUM7Z0JBQ3BCZSxLQUFLLEVBQUVsQiw0REFBSSxDQUFDLENBQVMsVUFBRSxDQUFTLFVBQUVHLEtBQUs7Z0JBQ3ZDUSxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hCLENBQUM7O0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNRLEtBQUssR0FBRyxDQUFDO0lBQ2JDLE9BQU8sRUFBRSxDQUFTO0FBQ3BCLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2RDLFNBQVMsRUFBRSxDQUFTO0FBQ3RCLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2RDLGdCQUFnQixFQUFFLENBQU07SUFDeEJDLGtCQUFrQixFQUFFLElBQUk7QUFDMUIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsS0FBSyxHQUFHM0IsNkRBQVcsQ0FBQyxDQUFDO0lBQ3pCd0IsTUFBTSxFQUFOQSxNQUFNO0lBQ050QixNQUFNLEVBQU5BLE1BQU07SUFDTkssVUFBVSxFQUFWQSxVQUFVO0lBQ1ZlLE1BQU0sRUFBTkEsTUFBTTtJQUNORixLQUFLLEVBQUxBLEtBQUs7QUFDUCxDQUFDO0FBRUQsK0RBQWVPLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xuICAgIGJvZHk6IHtcbiAgICAgIGJnOiBtb2RlKCAnI0I0Q0JEOScsICcjMjAyMDIzJykocHJvcHMpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBIZWFkaW5nOiB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgICdzZWN0aW9uLXRpdGxlJzoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgdGV4dFVuZGVyTGluZU9mZnNldDogNixcbiAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcbiAgICAgICAgbWFyZ2luVG9wOiAzLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDQsXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBMaW5rOiB7XG4gICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xuICAgICAgY29sb3I6IG1vZGUoJyMxRDQwNDQnLCAnI2ZmNjNjMycpKHByb3BzKSxcbiAgICAgIHRleHRVbmRlckxpbmVPZmZzZXQ6IDMsXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBmb250cyA9IHtcbiAgaGVhZGluZzogXCInSGVlYm8nXCJcbn1cblxuY29uc3QgY29sb3JzID0ge1xuICBnbGFzc1RlYWw6ICcjODhjY2NhJ1xufVxuXG5jb25zdCBjb25maWcgPSB7XG4gIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXG59XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb25maWcsXG4gIHN0eWxlcyxcbiAgY29tcG9uZW50cyxcbiAgY29sb3JzLFxuICBmb250c1xufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsInRleHRVbmRlckxpbmVPZmZzZXQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dERlY29yYXRpb25UaGlja25lc3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJMaW5rIiwiYmFzZVN0eWxlIiwiY29sb3IiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJnbGFzc1RlYWwiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});