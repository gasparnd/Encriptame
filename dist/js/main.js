/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nwindow.addEventListener('load', _routes_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst About = () => {\r\n\tconst view = `\r\n\t\t<section class=\"about\">\t\r\n\t\t\t<div class=\"wrapper\">\t\t\t\r\n\t\t\t\t<h1>What is Encriptame</h1>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tEncriptame is a web site where you can encrypt & decrypt messages. Mainly to send your friends or share in Twitter. Remember that we only decrypt messages that was encrypt by us.\r\n\t\t\t\t</p>\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t`\r\n\treturn view\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Home = () => {\r\n\tconst view = `\r\n\t\t<section class=\"hero\">\r\n\t\t\t<div class=\"wrapper\">\r\n\t\t\t\t<h1>Encrypt your message so that no one sees it.</h1>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<section class=\"encypt-wrapperr\">\r\n\t\t\t<div class=\"wrapper\">\t\t\t\r\n\t\t\t\t<h2 class=\"encrypt-wrapper-title\">Place your Message <span>(only 144 characters)</span></h2>\r\n\t\t\t\t<div class=\"encrypt\">\r\n\t\t\t\t\t<textarea maxlength=\"144\" id=\"textArea\" placeholder=\"Write your Message/Paste a Message\"></textarea>\t\t\t\r\n\t\t\t\t\t<div class=\"buttons\">\r\n\t\t\t\t\t\t<button class=\"button encrypt\"  id=\"encryptButton\">Encrypt</button>\r\n\t\t\t\t\t\t<button class=\"button decrypt\" id=\"decryptButton\">Decrypt</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\t\t\t\r\n\t\t\t</div>\t\t\r\n\t\t</section>\r\n\t`\r\n\treturn view\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/message.js":
/*!******************************!*\
  !*** ./src/pages/message.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/pages/message.js?");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/message */ \"./src/pages/message.js\");\n/* harmony import */ var _pages_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_message__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _templates_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/Footer */ \"./src/templates/Footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst routes = {\r\n\t'/': _pages_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n\t'About': _pages_About__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\t'Message': _pages_message__WEBPACK_IMPORTED_MODULE_2___default.a\r\n}\r\n\r\nconst router = async () => {\r\n\tconst header =  false || document.getElementById('header')\r\n\tconst content =  false || document.getElementById('content')\r\n\tconst footer =  false || document.getElementById('footer')\r\n\r\n\theader.innerHTML = await Object(_templates_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n\tfooter.innerHTML = await Object(_templates_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/routes.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/styles.css?");

/***/ }),

/***/ "./src/templates/Footer.js":
/*!*********************************!*\
  !*** ./src/templates/Footer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Footer = () => {\r\n\tconst view = `\r\n\t\t<p>\r\n\t\t\tCreate whit ❤ by <a target=\"_blank\" href=\"https://www.twitter.com/gasparnd\">@gasparnd</a>\r\n\t\t</p>\r\n\t`\r\n\treturn view\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/templates/Footer.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Header = () => {\r\n\tconst view = `\r\n\t\t<div class=\"wrapper\">\r\n\t\t\t<a href=\"about.html\">About</a>\r\n\t\t</div>\r\n\t`\r\n\treturn view\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/templates/Header.js?");

/***/ })

/******/ });