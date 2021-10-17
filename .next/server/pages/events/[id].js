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
exports.id = "pages/events/[id]";
exports.ids = ["pages/events/[id]"];
exports.modules = {

/***/ "./pages/events/[id].js":
/*!******************************!*\
  !*** ./pages/events/[id].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/runner/CS5513-Week08-rochinmartin/pages/events/[id].js\";\n\n\n\n\n\n\nconst SingleEvent = ({\n  itemData\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n        children: [\" \", itemData.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        children: [\" \", itemData.date]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst getServerSideProps = (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUserTokenSSR)({\n  whenUnauthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_LOGIN\n})(async ({\n  AuthUser,\n  params\n}) => {\n  // get id from url and make a db query\n  const db = (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getFirebaseAdmin)().firestore();\n  const doc = await db.collection(\"events\").doc(params.id).get();\n  let itemData;\n\n  if (!doc.empty) {\n    //document found\n    let docData = doc.data();\n    itemData = {\n      id: doc.id,\n      name: docData.name,\n      date: docData.date.toDate().toDateString()\n    };\n  } else {\n    //no docs found\n    itemData = null;\n  } // return data\n\n\n  return {\n    props: {\n      itemData\n    }\n  };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUser)({\n  whenUnauthedAfterInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_LOGIN,\n  whenUnauthedBeforeInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_LOGIN\n})(SingleEvent));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1TLFdBQVcsR0FBRyxDQUFDO0FBQUNDLEVBQUFBO0FBQUQsQ0FBRCxLQUFnQjtBQUVsQyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBQSx3QkFBV0EsUUFBUSxDQUFDQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFBLHdCQUFRRCxRQUFRLENBQUNFLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQSxrQkFERjtBQVVELENBWkQ7O0FBY08sTUFBTUMsa0JBQWtCLEdBQUdSLHdFQUFvQixDQUNwRDtBQUNFUyxFQUFBQSxZQUFZLEVBQUVSLDRFQUE0QlM7QUFENUMsQ0FEb0QsQ0FBcEIsQ0FLaEMsT0FBTztBQUFFQyxFQUFBQSxRQUFGO0FBQVlDLEVBQUFBO0FBQVosQ0FBUCxLQUErQjtBQUM3QjtBQUNBLFFBQU1DLEVBQUUsR0FBR1gsb0VBQWdCLEdBQUdZLFNBQW5CLEVBQVg7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUYsRUFBRSxDQUFDRyxVQUFILENBQWMsUUFBZCxFQUF3QkQsR0FBeEIsQ0FBNEJILE1BQU0sQ0FBQ0ssRUFBbkMsRUFBdUNDLEdBQXZDLEVBQWxCO0FBRUEsTUFBSWIsUUFBSjs7QUFDQSxNQUFHLENBQUNVLEdBQUcsQ0FBQ0ksS0FBUixFQUFjO0FBQ1o7QUFDQSxRQUFJQyxPQUFPLEdBQUdMLEdBQUcsQ0FBQ00sSUFBSixFQUFkO0FBQ0FoQixJQUFBQSxRQUFRLEdBQUc7QUFDVFksTUFBQUEsRUFBRSxFQUFFRixHQUFHLENBQUNFLEVBREM7QUFFVFgsTUFBQUEsSUFBSSxFQUFFYyxPQUFPLENBQUNkLElBRkw7QUFHVEMsTUFBQUEsSUFBSSxFQUFFYSxPQUFPLENBQUNiLElBQVIsQ0FBYWUsTUFBYixHQUFzQkMsWUFBdEI7QUFIRyxLQUFYO0FBS0QsR0FSRCxNQVFPO0FBQ0w7QUFDQWxCLElBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0QsR0FqQjRCLENBa0I3Qjs7O0FBQ0EsU0FBTTtBQUNKbUIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xuQixNQUFBQTtBQURLO0FBREgsR0FBTjtBQUtELENBN0IrQixDQUEzQjtBQWdDUCxpRUFBZU4sZ0VBQVksQ0FDekI7QUFDRTBCLEVBQUFBLHFCQUFxQixFQUFFeEIsNEVBRHpCO0FBRUV5QixFQUFBQSxzQkFBc0IsRUFBRXpCLDRFQUE0QlM7QUFGdEQsQ0FEeUIsQ0FBWixDQUtiTixXQUxhLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vcGFnZXMvZXZlbnRzL1tpZF0uanM/NzAwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhVc2VyLCB3aXRoQXV0aFVzZXIsIHdpdGhBdXRoVXNlclRva2VuU1NSLCBBdXRoQWN0aW9uIH0gZnJvbSAnbmV4dC1maXJlYmFzZS1hdXRoJztcbmltcG9ydCB7IGdldEZpcmViYXNlQWRtaW4gfSBmcm9tICduZXh0LWZpcmViYXNlLWF1dGgnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbmNvbnN0IFNpbmdsZUV2ZW50ID0gKHtpdGVtRGF0YX0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleD5cbiAgICAgICAgPEhlYWRpbmc+IHtpdGVtRGF0YS5uYW1lfTwvSGVhZGluZz5cbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4PlxuICAgICAgICA8VGV4dD4ge2l0ZW1EYXRhLmRhdGV9PC9UZXh0PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhBdXRoVXNlclRva2VuU1NSKFxuICB7XG4gICAgd2hlblVuYXV0aGVkOiBBdXRoQWN0aW9uLlJFRElSRUNUX1RPX0xPR0lOXG4gIH1cbikoXG4gIGFzeW5jICh7IEF1dGhVc2VyLCBwYXJhbXN9KSA9PiB7XG4gICAgLy8gZ2V0IGlkIGZyb20gdXJsIGFuZCBtYWtlIGEgZGIgcXVlcnlcbiAgICBjb25zdCBkYiA9IGdldEZpcmViYXNlQWRtaW4oKS5maXJlc3RvcmUoKTtcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiZXZlbnRzXCIpLmRvYyhwYXJhbXMuaWQpLmdldCgpO1xuXG4gICAgbGV0IGl0ZW1EYXRhO1xuICAgIGlmKCFkb2MuZW1wdHkpe1xuICAgICAgLy9kb2N1bWVudCBmb3VuZFxuICAgICAgbGV0IGRvY0RhdGEgPSBkb2MuZGF0YSgpO1xuICAgICAgaXRlbURhdGEgPSB7XG4gICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgIG5hbWU6IGRvY0RhdGEubmFtZSxcbiAgICAgICAgZGF0ZTogZG9jRGF0YS5kYXRlLnRvRGF0ZSgpLnRvRGF0ZVN0cmluZygpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvL25vIGRvY3MgZm91bmRcbiAgICAgIGl0ZW1EYXRhID0gbnVsbDtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGRhdGFcbiAgICByZXR1cm57XG4gICAgICBwcm9wczoge1xuICAgICAgICBpdGVtRGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aFVzZXIoXG4gIHtcbiAgICB3aGVuVW5hdXRoZWRBZnRlckluaXQ6IEF1dGhBY3Rpb24uUkVESVJFQ1RfVE9fTE9HSU4sXG4gICAgd2hlblVuYXV0aGVkQmVmb3JlSW5pdDogQXV0aEFjdGlvbi5SRURJUkVDVF9UT19MT0dJTixcbiAgfVxuKShTaW5nbGVFdmVudCkiXSwibmFtZXMiOlsiRmxleCIsIkhlYWRpbmciLCJUZXh0IiwidXNlQXV0aFVzZXIiLCJ3aXRoQXV0aFVzZXIiLCJ3aXRoQXV0aFVzZXJUb2tlblNTUiIsIkF1dGhBY3Rpb24iLCJnZXRGaXJlYmFzZUFkbWluIiwiZmlyZWJhc2UiLCJTaW5nbGVFdmVudCIsIml0ZW1EYXRhIiwibmFtZSIsImRhdGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJ3aGVuVW5hdXRoZWQiLCJSRURJUkVDVF9UT19MT0dJTiIsIkF1dGhVc2VyIiwicGFyYW1zIiwiZGIiLCJmaXJlc3RvcmUiLCJkb2MiLCJjb2xsZWN0aW9uIiwiaWQiLCJnZXQiLCJlbXB0eSIsImRvY0RhdGEiLCJkYXRhIiwidG9EYXRlIiwidG9EYXRlU3RyaW5nIiwicHJvcHMiLCJ3aGVuVW5hdXRoZWRBZnRlckluaXQiLCJ3aGVuVW5hdXRoZWRCZWZvcmVJbml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[id].js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-firebase-auth");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/events/[id].js"));
module.exports = __webpack_exports__;

})();