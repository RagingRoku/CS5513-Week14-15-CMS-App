"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth";
exports.ids = ["pages/auth"];
exports.modules = {

/***/ "./components/FirebaseAuth.js":
/*!************************************!*\
  !*** ./components/FirebaseAuth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"react-firebaseui/StyledFirebaseAuth\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/runner/CS5513-Week09-rochinmartin/components/FirebaseAuth.js\";\n\n/* globals window */\n\n\n\n // Note that next-firebase-auth inits Firebase for us,\n// so we don't need to.\n\nconst firebaseAuthConfig = {\n  signInFlow: 'popup',\n  // Auth providers\n  // https://github.com/firebase/firebaseui-web#configure-oauth-providers\n  signInOptions: [{\n    provider: (firebase_app__WEBPACK_IMPORTED_MODULE_3___default().auth.EmailAuthProvider.PROVIDER_ID),\n    requireDisplayName: false\n  }],\n  signInSuccessUrl: '/',\n  credentialHelper: 'none',\n  callbacks: {\n    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl\n    signInSuccessWithAuthResult: () => // Don't automatically redirect. We handle redirects using\n    // `next-firebase-auth`.\n    false\n  }\n};\n\nconst FirebaseAuth = () => {\n  // Do not SSR FirebaseUI, because it is not supported.\n  // https://github.com/firebase/firebaseui-web/issues/213\n  const {\n    0: renderAuth,\n    1: setRenderAuth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (false) {}\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: renderAuth ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default()), {\n      uiConfig: firebaseAuthConfig,\n      firebaseAuth: firebase_app__WEBPACK_IMPORTED_MODULE_3___default().auth()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, undefined) : null\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirebaseAuth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmViYXNlQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFFQSxNQUFNSyxrQkFBa0IsR0FBRztBQUN6QkMsRUFBQUEsVUFBVSxFQUFFLE9BRGE7QUFFekI7QUFDQTtBQUNBQyxFQUFBQSxhQUFhLEVBQUUsQ0FDYjtBQUNFQyxJQUFBQSxRQUFRLEVBQUVKLHdGQURaO0FBRUVRLElBQUFBLGtCQUFrQixFQUFFO0FBRnRCLEdBRGEsQ0FKVTtBQVV6QkMsRUFBQUEsZ0JBQWdCLEVBQUUsR0FWTztBQVd6QkMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFYTztBQVl6QkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1Q7QUFDQUMsSUFBQUEsMkJBQTJCLEVBQUUsTUFDM0I7QUFDQTtBQUNBO0FBTE87QUFaYyxDQUEzQjs7QUFxQkEsTUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekI7QUFDQTtBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QmpCLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxlQUFtQyxFQUVsQztBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQSxzQkFDRTtBQUFBLGNBQ0dpQixVQUFVLGdCQUNULDhEQUFDLDRFQUFEO0FBQ0UsY0FBUSxFQUFFYixrQkFEWjtBQUVFLGtCQUFZLEVBQUVELHdEQUFBO0FBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFMsR0FLUDtBQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBbkJEOztBQXFCQSxpRUFBZWEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvLi9jb21wb25lbnRzL0ZpcmViYXNlQXV0aC5qcz8wNjYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0eWxlZEZpcmViYXNlQXV0aCBmcm9tICdyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aCdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXG5cbi8vIE5vdGUgdGhhdCBuZXh0LWZpcmViYXNlLWF1dGggaW5pdHMgRmlyZWJhc2UgZm9yIHVzLFxuLy8gc28gd2UgZG9uJ3QgbmVlZCB0by5cblxuY29uc3QgZmlyZWJhc2VBdXRoQ29uZmlnID0ge1xuICBzaWduSW5GbG93OiAncG9wdXAnLFxuICAvLyBBdXRoIHByb3ZpZGVyc1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2V1aS13ZWIjY29uZmlndXJlLW9hdXRoLXByb3ZpZGVyc1xuICBzaWduSW5PcHRpb25zOiBbXG4gICAge1xuICAgICAgcHJvdmlkZXI6IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICByZXF1aXJlRGlzcGxheU5hbWU6IGZhbHNlLFxuICAgIH0sXG4gIF0sXG4gIHNpZ25JblN1Y2Nlc3NVcmw6ICcvJyxcbiAgY3JlZGVudGlhbEhlbHBlcjogJ25vbmUnLFxuICBjYWxsYmFja3M6IHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2V1aS13ZWIjc2lnbmluc3VjY2Vzc3dpdGhhdXRocmVzdWx0YXV0aHJlc3VsdC1yZWRpcmVjdHVybFxuICAgIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdDogKCkgPT5cbiAgICAgIC8vIERvbid0IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3QuIFdlIGhhbmRsZSByZWRpcmVjdHMgdXNpbmdcbiAgICAgIC8vIGBuZXh0LWZpcmViYXNlLWF1dGhgLlxuICAgICAgZmFsc2UsXG4gIH0sXG59XG5cbmNvbnN0IEZpcmViYXNlQXV0aCA9ICgpID0+IHtcbiAgLy8gRG8gbm90IFNTUiBGaXJlYmFzZVVJLCBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maXJlYmFzZS9maXJlYmFzZXVpLXdlYi9pc3N1ZXMvMjEzXG4gIGNvbnN0IFtyZW5kZXJBdXRoLCBzZXRSZW5kZXJBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0UmVuZGVyQXV0aCh0cnVlKVxuICAgIH1cbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJBdXRoID8gKFxuICAgICAgICA8U3R5bGVkRmlyZWJhc2VBdXRoXG4gICAgICAgICAgdWlDb25maWc9e2ZpcmViYXNlQXV0aENvbmZpZ31cbiAgICAgICAgICBmaXJlYmFzZUF1dGg9e2ZpcmViYXNlLmF1dGgoKX1cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpcmViYXNlQXV0aFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdHlsZWRGaXJlYmFzZUF1dGgiLCJmaXJlYmFzZSIsImZpcmViYXNlQXV0aENvbmZpZyIsInNpZ25JbkZsb3ciLCJzaWduSW5PcHRpb25zIiwicHJvdmlkZXIiLCJhdXRoIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsInJlcXVpcmVEaXNwbGF5TmFtZSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJjcmVkZW50aWFsSGVscGVyIiwiY2FsbGJhY2tzIiwic2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0IiwiRmlyZWJhc2VBdXRoIiwicmVuZGVyQXV0aCIsInNldFJlbmRlckF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FirebaseAuth.js\n");

/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FirebaseAuth */ \"./components/FirebaseAuth.js\");\n\nvar _jsxFileName = \"/home/runner/CS5513-Week09-rochinmartin/pages/auth.js\";\n\n\n\nconst styles = {\n  content: {\n    padding: `8px 32px`\n  },\n  textContainer: {\n    display: 'flex',\n    justifyContent: 'center',\n    margin: 16\n  }\n};\n\nconst Auth = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n  style: styles.content,\n  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n    children: \"Sign in\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: styles.textContainer,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"This auth page is \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"static\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 27\n      }, undefined), \". It will redirect on the client side if the user is already authenticated.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 17,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUser)({\n  whenAuthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_APP,\n  whenUnauthedBeforeInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.RETURN_NULL,\n  whenUnauthedAfterInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.RENDER\n})(Auth));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNSSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLE9BQU8sRUFBRztBQURILEdBREk7QUFJYkMsRUFBQUEsYUFBYSxFQUFFO0FBQ2JDLElBQUFBLE9BQU8sRUFBRSxNQURJO0FBRWJDLElBQUFBLGNBQWMsRUFBRSxRQUZIO0FBR2JDLElBQUFBLE1BQU0sRUFBRTtBQUhLO0FBSkYsQ0FBZjs7QUFXQSxNQUFNQyxJQUFJLEdBQUcsbUJBQ1g7QUFBSyxPQUFLLEVBQUVQLE1BQU0sQ0FBQ0MsT0FBbkI7QUFBQSwwQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxTQUFLLEVBQUVELE1BQU0sQ0FBQ0csYUFBbkI7QUFBQSwyQkFDRTtBQUFBLG9EQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBUUU7QUFBQSwyQkFDRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQWVBLGlFQUFlTixnRUFBWSxDQUFDO0FBQzFCVyxFQUFBQSxVQUFVLEVBQUVWLDBFQURjO0FBRTFCWSxFQUFBQSxzQkFBc0IsRUFBRVosc0VBRkU7QUFHMUJjLEVBQUFBLHFCQUFxQixFQUFFZCxpRUFBaUJlO0FBSGQsQ0FBRCxDQUFaLENBSVpOLElBSlksQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvLi9wYWdlcy9hdXRoLmpzP2NhNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aEF1dGhVc2VyLCBBdXRoQWN0aW9uIH0gZnJvbSAnbmV4dC1maXJlYmFzZS1hdXRoJ1xuaW1wb3J0IEZpcmViYXNlQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL0ZpcmViYXNlQXV0aCdcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgcGFkZGluZzogYDhweCAzMnB4YCxcbiAgfSxcbiAgdGV4dENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiAxNixcbiAgfSxcbn1cblxuY29uc3QgQXV0aCA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgIDxoMz5TaWduIGluPC9oMz5cbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGV4dENvbnRhaW5lcn0+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBhdXRoIHBhZ2UgaXMgPGI+c3RhdGljPC9iPi4gSXQgd2lsbCByZWRpcmVjdCBvbiB0aGUgY2xpZW50IHNpZGUgaWZcbiAgICAgICAgdGhlIHVzZXIgaXMgYWxyZWFkeSBhdXRoZW50aWNhdGVkLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8RmlyZWJhc2VBdXRoIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aFVzZXIoe1xuICB3aGVuQXV0aGVkOiBBdXRoQWN0aW9uLlJFRElSRUNUX1RPX0FQUCxcbiAgd2hlblVuYXV0aGVkQmVmb3JlSW5pdDogQXV0aEFjdGlvbi5SRVRVUk5fTlVMTCxcbiAgd2hlblVuYXV0aGVkQWZ0ZXJJbml0OiBBdXRoQWN0aW9uLlJFTkRFUixcbn0pKEF1dGgpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoQXV0aFVzZXIiLCJBdXRoQWN0aW9uIiwiRmlyZWJhc2VBdXRoIiwic3R5bGVzIiwiY29udGVudCIsInBhZGRpbmciLCJ0ZXh0Q29udGFpbmVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwiQXV0aCIsIndoZW5BdXRoZWQiLCJSRURJUkVDVF9UT19BUFAiLCJ3aGVuVW5hdXRoZWRCZWZvcmVJbml0IiwiUkVUVVJOX05VTEwiLCJ3aGVuVW5hdXRoZWRBZnRlckluaXQiLCJSRU5ERVIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-firebase-auth");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("react-firebaseui/StyledFirebaseAuth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth.js"));
module.exports = __webpack_exports__;

})();