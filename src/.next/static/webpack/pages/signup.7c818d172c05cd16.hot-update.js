"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup/index.tsx":
/*!********************************!*\
  !*** ./pages/signup/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignupForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction SignupForm() {\n    _s();\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        value: \"\"\n    });\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        value: \"\"\n    });\n    const handleSignup = async ()=>{\n        console.log();\n        try {\n            const response = await fetch(\"/api/users/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userName: userName.value,\n                    password: password.value\n                })\n            });\n            if (response.ok) {\n                // Signup successful, handle the response as needed\n                console.log(await response.json());\n            } else {\n                // Signup failed, handle the error response\n                const errorData = await response.json();\n                console.error(\"Signup failed:\", errorData);\n            }\n        } catch (error) {\n            console.error(\"Signup failed:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"row justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"col-3 align-self-center rounded border bg-white p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"signUpForm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        htmlFor: \"userName\",\n                                        children: \"Username:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"form-control\",\n                                        id: \"userName\",\n                                        value: userName.value,\n                                        onChange: (e)=>setUserName({\n                                                value: e.target.value\n                                            })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"password\",\n                                        className: \"form-label\",\n                                        children: \"Password:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        className: \"form-control\",\n                                        id: \"password\",\n                                        value: password.value,\n                                        onChange: (e)=>setPassword({\n                                                value: e.target.value\n                                            })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: handleSignup,\n                                className: \"btn btn-danger\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-secondary mb-0 pt-3\",\n                                children: [\n                                    \"Already have an account? Click here to\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: \"Log In.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupForm, \"a0aTt42JgvkNmHKOBhW0igYGQ7I=\");\n_c = SignupForm;\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBVWQsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBZ0I7UUFBRUssT0FBTztJQUFHO0lBQ3BFLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBZ0I7UUFBRUssT0FBTztJQUFHO0lBRXBFLE1BQU1HLGVBQWU7UUFDbkJDLFFBQVFDLEdBQUc7UUFFWCxJQUFJO1lBQ0YsTUFBTUMsV0FBcUIsTUFBTUMsTUFBTSxlQUFlO2dCQUNwREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CZCxVQUFVQSxTQUFTRSxLQUFLO29CQUN4QkMsVUFBVUEsU0FBU0QsS0FBSztnQkFDMUI7WUFDRjtZQUVBLElBQUlNLFNBQVNPLEVBQUUsRUFBRTtnQkFDZixtREFBbUQ7Z0JBQ25EVCxRQUFRQyxHQUFHLENBQUMsTUFBTUMsU0FBU1EsSUFBSTtZQUNqQyxPQUFPO2dCQUNMLDJDQUEyQztnQkFDM0MsTUFBTUMsWUFBcUIsTUFBTVQsU0FBU1EsSUFBSTtnQkFDOUNWLFFBQVFZLEtBQUssQ0FBQyxrQkFBa0JEO1lBQ2xDO1FBQ0YsRUFBRSxPQUFPQyxPQUFnQjtZQUN2QlosUUFBUVksS0FBSyxDQUFDLGtCQUFrQkE7UUFDbEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0Q7WUFBUUMsV0FBVTtzQkFDakIsNEVBQUNEO2dCQUFRQyxXQUFVOztrQ0FDakIsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUFLRixXQUFVOzswQ0FDZCw4REFBQ0c7Z0NBQUlILFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FBTUosV0FBVTt3Q0FBYUssU0FBUTtrREFBVzs7Ozs7O2tEQUdqRCw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xQLFdBQVU7d0NBQ1ZRLElBQUc7d0NBQ0gxQixPQUFPRixTQUFTRSxLQUFLO3dDQUNyQjJCLFVBQVUsQ0FBQ0MsSUFBTTdCLFlBQVk7Z0RBQUVDLE9BQU80QixFQUFFQyxNQUFNLENBQUM3QixLQUFLOzRDQUFDOzs7Ozs7Ozs7Ozs7MENBR3pELDhEQUFDcUI7Z0NBQUlILFdBQVU7O2tEQUNiLDhEQUFDSTt3Q0FBTUMsU0FBUTt3Q0FBV0wsV0FBVTtrREFBYTs7Ozs7O2tEQUdqRCw4REFBQ007d0NBQ0NDLE1BQUs7d0NBQ0xQLFdBQVU7d0NBQ1ZRLElBQUc7d0NBQ0gxQixPQUFPQyxTQUFTRCxLQUFLO3dDQUNyQjJCLFVBQVUsQ0FBQ0MsSUFBTTFCLFlBQVk7Z0RBQUVGLE9BQU80QixFQUFFQyxNQUFNLENBQUM3QixLQUFLOzRDQUFDOzs7Ozs7Ozs7Ozs7MENBR3pELDhEQUFDOEI7Z0NBQ0NMLE1BQUs7Z0NBQ0xNLFNBQVM1QjtnQ0FDVGUsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDYztnQ0FBRWQsV0FBVTs7b0NBQTJCO29DQUNDO2tEQUN2Qyw4REFBQ3RCLGtEQUFJQTt3Q0FBQ3FDLE1BQUs7a0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0I7R0E5RXdCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwL2luZGV4LnRzeD9kM2NjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBVc2VybmFtZVN0YXRlIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFzc3dvcmRTdGF0ZSB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwRm9ybSgpIHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPFVzZXJuYW1lU3RhdGU+KHsgdmFsdWU6ICcnIH0pO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8UGFzc3dvcmRTdGF0ZT4oeyB2YWx1ZTogJycgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ251cCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzLycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIFNpZ251cCBzdWNjZXNzZnVsLCBoYW5kbGUgdGhlIHJlc3BvbnNlIGFzIG5lZWRlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2lnbnVwIGZhaWxlZCwgaGFuZGxlIHRoZSBlcnJvciByZXNwb25zZVxyXG4gICAgICAgIGNvbnN0IGVycm9yRGF0YTogdW5rbm93biA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdTaWdudXAgZmFpbGVkOicsIGVycm9yRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1NpZ251cCBmYWlsZWQ6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtMyBhbGlnbi1zZWxmLWNlbnRlciByb3VuZGVkIGJvcmRlciBiZy13aGl0ZSBwLTVcIj5cclxuICAgICAgICAgIDxoMj5TaWdudXA8L2gyPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2lnblVwRm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIGh0bWxGb3I9XCJ1c2VyTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaWdudXB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgbWItMCBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IENsaWNrIGhlcmUgdG97JyAnfVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+TG9nIEluLjwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiU2lnbnVwRm9ybSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ2YWx1ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTaWdudXAiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwianNvbiIsImVycm9yRGF0YSIsImVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signup/index.tsx\n"));

/***/ })

});