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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignupForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction SignupForm() {\n    _s();\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        value: \"\"\n    });\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        value: \"\"\n    });\n    const handleSignup = async ()=>{\n        try {\n            const response = await fetch(\"/api/users/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userName,\n                    password\n                })\n            });\n            if (response.ok) {\n                // Signup successful, handle the response as needed\n                console.log(await response.json());\n            } else {\n                // Signup failed, handle the error response\n                const errorData = await response.json();\n                console.error(\"Signup failed:\", errorData);\n            }\n        } catch (error) {\n            console.error(\"Signup failed:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"row justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"col-3 align-self-center rounded border bg-white p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"signUpForm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-label\",\n                                        htmlFor: \"userName\",\n                                        children: \"Username:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"form-control\",\n                                        id: \"userName\",\n                                        value: userName,\n                                        onChange: (e)=>setUserName(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"password\",\n                                        className: \"form-label\",\n                                        children: \"Password:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        className: \"form-control\",\n                                        id: \"password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: handleSignup,\n                                className: \"btn btn-danger\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-secondary mb-0 pt-3\",\n                                children: [\n                                    \"Already have an account? Click here to\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        children: \"Log In.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexb\\\\Documents\\\\BOOTCAMP\\\\react-password-tracker\\\\react-password-tracker\\\\src\\\\pages\\\\signup\\\\index.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupForm, \"hSytaNc6p7zSz3woJx482hEFk7M=\");\n_c = SignupForm;\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVpQztBQUNKO0FBVWQsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBZ0I7UUFDdERLLE9BQU87SUFDVDtJQUNBLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBZ0I7UUFDdERLLE9BQU87SUFDVDtJQUVBLE1BQU1HLGVBQWU7UUFDbkIsSUFBSTtZQUNGLE1BQU1DLFdBQXFCLE1BQU1DLE1BQU0sZUFBZTtnQkFDcERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQlo7b0JBQ0FHO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJRyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2YsbURBQW1EO2dCQUNuREMsUUFBUUMsR0FBRyxDQUFDLE1BQU1ULFNBQVNVLElBQUk7WUFDakMsT0FBTztnQkFDTCwyQ0FBMkM7Z0JBQzNDLE1BQU1DLFlBQXFCLE1BQU1YLFNBQVNVLElBQUk7Z0JBQzlDRixRQUFRSSxLQUFLLENBQUMsa0JBQWtCRDtZQUNsQztRQUNGLEVBQUUsT0FBT0MsT0FBZ0I7WUFDdkJKLFFBQVFJLEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2xDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNEO1lBQVFDLFdBQVU7c0JBQ2pCLDRFQUFDRDtnQkFBUUMsV0FBVTs7a0NBQ2pCLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBS0YsV0FBVTs7MENBQ2QsOERBQUNHO2dDQUFJSCxXQUFVOztrREFDYiw4REFBQ0k7d0NBQU1KLFdBQVU7d0NBQWFLLFNBQVE7a0RBQVc7Ozs7OztrREFHakQsOERBQUNDO3dDQUNDQyxNQUFLO3dDQUNMUCxXQUFVO3dDQUNWUSxJQUFHO3dDQUNIMUIsT0FBUUY7d0NBQ1I2QixVQUFVLENBQUNDLElBQU03QixZQUFZNkIsRUFBRUMsTUFBTSxDQUFDN0IsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUcvQyw4REFBQ3FCO2dDQUFJSCxXQUFVOztrREFDYiw4REFBQ0k7d0NBQU1DLFNBQVE7d0NBQVdMLFdBQVU7a0RBQWE7Ozs7OztrREFHakQsOERBQUNNO3dDQUNDQyxNQUFLO3dDQUNMUCxXQUFVO3dDQUNWUSxJQUFHO3dDQUNIMUIsT0FBT0M7d0NBQ1AwQixVQUFVLENBQUNDLElBQU0xQixZQUFZMEIsRUFBRUMsTUFBTSxDQUFDN0IsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUcvQyw4REFBQzhCO2dDQUNDTCxNQUFLO2dDQUNMTSxTQUFTNUI7Z0NBQ1RlLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ2M7Z0NBQUVkLFdBQVU7O29DQUEyQjtvQ0FDQztrREFDdkMsOERBQUN0QixrREFBSUE7d0NBQUNxQyxNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdCO0dBaEZ3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ251cC9pbmRleC50c3g/ZDNjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW50ZXJmYWNlIHVzZXJuYW1lU3RhdGUge1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBwYXNzd29yZFN0YXRlIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWdudXBGb3JtICgpIHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlPHVzZXJuYW1lU3RhdGU+KHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH0pO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8cGFzc3dvcmRTdGF0ZT4oe1xyXG4gICAgdmFsdWU6ICcnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ251cCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy9cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB1c2VyTmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIFNpZ251cCBzdWNjZXNzZnVsLCBoYW5kbGUgdGhlIHJlc3BvbnNlIGFzIG5lZWRlZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2lnbnVwIGZhaWxlZCwgaGFuZGxlIHRoZSBlcnJvciByZXNwb25zZVxyXG4gICAgICAgIGNvbnN0IGVycm9yRGF0YTogdW5rbm93biA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbnVwIGZhaWxlZDpcIiwgZXJyb3JEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlNpZ251cCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLTMgYWxpZ24tc2VsZi1jZW50ZXIgcm91bmRlZCBib3JkZXIgYmctd2hpdGUgcC01XCI+XHJcbiAgICAgICAgICA8aDI+U2lnbnVwPC9oMj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNpZ25VcEZvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIiBodG1sRm9yPVwidXNlck5hbWVcIj5cclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0ge3VzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbnVwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IG1iLTAgcHQtM1wiPlxyXG4gICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBDbGljayBoZXJlIHRve1wiIFwifVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+TG9nIEluLjwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiU2lnbnVwRm9ybSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ2YWx1ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTaWdudXAiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwianNvbiIsImVycm9yRGF0YSIsImVycm9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signup/index.tsx\n"));

/***/ })

});