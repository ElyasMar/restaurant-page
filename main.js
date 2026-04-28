/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg.png */ \"./src/assets/images/bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg2.png */ \"./src/assets/images/bg2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n\n:root {\n  --gold:       #C9A96E;\n  --gold-light: #E8C98A;\n  --cream:      #F5EFE4;\n  --dark:       #0E0B08;\n  --dark-mid:   #1A1410;\n  --text-light: rgba(245, 239, 228, 0.75);\n  --font-serif: 'Cormorant Garamond', Georgia, serif;\n  --font-sans:  'Montserrat', sans-serif;\n}\n\nhtml { scroll-behavior: smooth; font-size: 16px; }\n\nbody {\n  font-family: var(--font-sans);\n  background: var(--dark);\n  color: var(--cream);\n  overflow-x: hidden;\n}\n\n#navbar {\n  position: fixed;\n  top: 0; left: 0; right: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 3rem;\n  height: 76px;\n  background: rgba(14, 11, 8, 0.15);\n  backdrop-filter: blur(18px) saturate(140%);\n  -webkit-backdrop-filter: blur(18px) saturate(140%);\n  border-bottom: 1px solid rgba(201, 169, 110, 0.12);\n  transition: background 0.4s ease, box-shadow 0.4s ease;\n}\n\n#navbar.scrolled {\n  background: rgba(14, 11, 8, 0.82);\n  box-shadow: 0 4px 40px rgba(0,0,0,0.5);\n}\n\n.nav-logo {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  text-decoration: none;\n  cursor: default;\n}\n\n.logo-symbol {\n  color: var(--gold);\n  font-size: 1.1rem;\n  animation: spin-slow 8s linear infinite;\n}\n\n@keyframes spin-slow {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n.logo-text {\n  font-family: var(--font-serif);\n  font-size: 1.35rem;\n  font-weight: 400;\n  letter-spacing: 0.12em;\n  color: var(--cream);\n}\n\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 2.5rem;\n}\n\n.nav-link {\n  font-family: var(--font-sans);\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--text-light);\n  text-decoration: none;\n  position: relative;\n  padding-bottom: 2px;\n  transition: color 0.25s;\n}\n\n.nav-link::after {\n  content: '';\n  position: absolute;\n  bottom: -2px; left: 0;\n  width: 0; height: 1px;\n  background: var(--gold);\n  transition: width 0.3s ease;\n}\n\n.nav-link:hover { color: var(--cream); }\n.nav-link:hover::after { width: 100%; }\n\n.nav-cta {\n  font-family: var(--font-sans);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: var(--dark);\n  background: var(--gold);\n  padding: 0.6rem 1.4rem;\n  border: 1px solid var(--gold);\n  transition: background 0.25s, color 0.25s;\n}\n\n.nav-cta:hover {\n  background: transparent;\n  color: var(--gold);\n}\n\n.nav-hamburger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n}\n\n.nav-hamburger span {\n  display: block;\n  width: 24px; height: 1.5px;\n  background: var(--cream);\n  transition: transform 0.3s, opacity 0.3s;\n}\n\n.mobile-menu {\n  display: none;\n  position: fixed;\n  top: 76px; left: 0; right: 0;\n  background: rgba(14, 11, 8, 0.96);\n  backdrop-filter: blur(20px);\n  z-index: 999;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n  border-bottom: 1px solid rgba(201,169,110,0.15);\n  transform: translateY(-10px);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s, transform 0.3s;\n}\n\n.mobile-menu.open {\n  display: flex;\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: all;\n}\n\n.mobile-link {\n  font-family: var(--font-sans);\n  font-size: 0.75rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--text-light);\n  text-decoration: none;\n  padding: 1.2rem 2rem;\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px solid rgba(201,169,110,0.08);\n  transition: color 0.2s;\n}\n\n.mobile-link:hover { color: var(--gold); }\n\n.mobile-link--cta {\n  color: var(--gold);\n  font-weight: 600;\n}\n\n.section {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.section::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n\n.section--hero {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n.section--hero::before {\n  background: linear-gradient(\n    to bottom,\n    rgba(14,11,8,0.3) 0%,\n    rgba(14,11,8,0.5) 60%,\n    rgba(14,11,8,0.85) 100%\n  );\n}\n\n.hero-content {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  max-width: 700px;\n  padding: 2rem;\n  animation: fadeUp 1.2s ease both;\n}\n\n@keyframes fadeUp {\n  from { opacity: 0; transform: translateY(30px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.hero-eyebrow {\n  font-family: var(--font-sans);\n  font-size: 0.65rem;\n  letter-spacing: 0.35em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 1.5rem;\n}\n\n.hero-title {\n  font-family: var(--font-serif);\n  font-size: clamp(3.5rem, 9vw, 7rem);\n  font-weight: 300;\n  line-height: 1.05;\n  color: var(--cream);\n  margin-bottom: 1.5rem;\n}\n\n.hero-title em {\n  font-style: italic;\n  color: var(--gold-light);\n}\n\n.hero-sub {\n  font-size: 0.8rem;\n  letter-spacing: 0.15em;\n  color: var(--text-light);\n  margin-bottom: 2.5rem;\n  text-transform: uppercase;\n}\n\n.hero-btn {\n  display: inline-block;\n  font-family: var(--font-sans);\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: var(--dark);\n  background: var(--gold);\n  padding: 1rem 2.5rem;\n  border: 1px solid var(--gold);\n  transition: background 0.3s, color 0.3s;\n}\n\n.hero-btn:hover {\n  background: transparent;\n  color: var(--gold);\n}\n\n.scroll-hint {\n  position: absolute;\n  bottom: 2.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.6rem;\n  animation: fadeUp 1.6s 0.5s ease both;\n}\n\n.scroll-hint span {\n  font-size: 0.55rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--gold);\n}\n\n.scroll-line {\n  width: 1px;\n  height: 40px;\n  background: linear-gradient(to bottom, var(--gold), transparent);\n  animation: scroll-pulse 2s ease-in-out infinite;\n}\n\n@keyframes scroll-pulse {\n  0%   { transform: scaleY(0); transform-origin: top; }\n  50%  { transform: scaleY(1); transform-origin: top; }\n  51%  { transform: scaleY(1); transform-origin: bottom; }\n  100% { transform: scaleY(0); transform-origin: bottom; }\n}\n\n.section--story {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  align-items: center;\n}\n\n.section--story::before {\n  background: linear-gradient(\n    135deg,\n    rgba(14,11,8,0.92) 0%,\n    rgba(14,11,8,0.65) 60%,\n    rgba(14,11,8,0.85) 100%\n  );\n}\n\n.story-inner {\n  position: relative;\n  z-index: 1;\n  max-width: 680px;\n  padding: 6rem 2rem;\n}\n\n.story-tag {\n  font-size: 0.6rem;\n  letter-spacing: 0.4em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 1.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n\n.story-tag::before {\n  content: '';\n  display: block;\n  width: 30px; height: 1px;\n  background: var(--gold);\n}\n\n.story-title {\n  font-family: var(--font-serif);\n  font-size: clamp(2.4rem, 5vw, 4rem);\n  font-weight: 300;\n  line-height: 1.1;\n  color: var(--cream);\n  margin-bottom: 2rem;\n}\n\n.story-title em {\n  font-style: italic;\n  color: var(--gold-light);\n}\n\n.story-text {\n  font-family: var(--font-serif);\n  font-size: 1.2rem;\n  font-weight: 300;\n  line-height: 1.85;\n  color: rgba(245,239,228,0.82);\n  white-space: pre-line;\n  margin-bottom: 3rem;\n}\n\n.story-stats {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  padding-top: 2.5rem;\n  border-top: 1px solid rgba(201,169,110,0.2);\n}\n\n.stat { text-align: center; }\n\n.stat-number {\n  display: block;\n  font-family: var(--font-serif);\n  font-size: 2.2rem;\n  font-weight: 300;\n  color: var(--gold);\n  letter-spacing: 0.05em;\n}\n\n.stat-label {\n  display: block;\n  font-size: 0.58rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--text-light);\n  margin-top: 0.3rem;\n}\n\n.stat-divider {\n  width: 1px;\n  height: 40px;\n  background: rgba(201,169,110,0.25);\n}\n\n.section--about {\n  background: var(--dark-mid);\n  position: relative;\n  overflow: hidden;\n}\n\n.section--about::after {\n  content: '';\n  position: absolute;\n  width: 700px; height: 700px;\n  border-radius: 50%;\n  border: 1px solid rgba(201,169,110,0.08);\n  top: 50%; left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\n.about-inner {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  max-width: 600px;\n  padding: 2rem;\n}\n\n.about-label {\n  font-size: 0.6rem;\n  letter-spacing: 0.4em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 1.5rem;\n}\n\n.about-title {\n  font-family: var(--font-serif);\n  font-size: clamp(3rem, 6vw, 5.5rem);\n  font-weight: 300;\n  line-height: 1.05;\n  color: var(--cream);\n  margin-bottom: 1.5rem;\n}\n\n.about-title em {\n  font-style: italic;\n  color: var(--gold-light);\n}\n\n.about-text {\n  font-family: var(--font-serif);\n  font-size: 1.15rem;\n  font-weight: 300;\n  color: var(--text-light);\n  line-height: 1.8;\n  margin-bottom: 2.5rem;\n}\n\n.about-btn {\n  display: inline-block;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: var(--gold);\n  border: 1px solid rgba(201,169,110,0.5);\n  padding: 1rem 2.8rem;\n  transition: background 0.3s, color 0.3s, border-color 0.3s;\n}\n\n.about-btn:hover {\n  background: var(--gold);\n  color: var(--dark);\n  border-color: var(--gold);\n}\n\n@media (max-width: 768px) {\n  #navbar { padding: 0 1.5rem; }\n  .nav-links { display: none; }\n  .nav-hamburger { display: flex; }\n\n  .story-stats { flex-direction: column; gap: 1.2rem; }\n  .stat-divider { width: 40px; height: 1px; }\n\n  .section { background-attachment: scroll; }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/images/bg.png"
/*!**********************************!*\
  !*** ./src/assets/images/bg.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"503fe694eeb522fce4ee.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/bg.png?\n}");

/***/ },

/***/ "./src/assets/images/bg2.png"
/*!***********************************!*\
  !*** ./src/assets/images/bg2.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"dc8e3ef0c64d732fd323.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/bg2.png?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n// Content\nconst contentDiv = document.getElementById(\"content\");\ncontentDiv.textContent = `Our signature steak and burger selection is built for those who appreciate quality without compromise. From tender, flame-grilled steaks bursting with deep, smoky flavor to juicy, handcrafted burgers layered with fresh, high-quality ingredients — every element is designed to elevate your dining experience.`;\n\n// Navbar scroll effect\nconst navbar = document.getElementById(\"navbar\");\nwindow.addEventListener(\"scroll\", () => {\n  navbar.classList.toggle(\"scrolled\", window.scrollY > 60);\n});\n\n// Mobile hamburger\nconst hamburger = document.getElementById(\"hamburger\");\nconst mobileMenu = document.getElementById(\"mobileMenu\");\n\nhamburger.addEventListener(\"click\", () => {\n  mobileMenu.classList.toggle(\"open\");\n});\n\n// Close mobile menu when a link is clicked\nmobileMenu.querySelectorAll(\".mobile-link\").forEach(link => {\n  link.addEventListener(\"click\", () => mobileMenu.classList.remove(\"open\"));\n});\n\n// Fade-in sections on scroll\nconst observer = new IntersectionObserver(\n  (entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.style.opacity = \"1\";\n        entry.target.style.transform = \"translateY(0)\";\n      }\n    });\n  },\n  { threshold: 0.15 }\n);\n\ndocument.querySelectorAll(\".story-inner, .about-inner\").forEach(el => {\n  el.style.opacity = \"0\";\n  el.style.transform = \"translateY(28px)\";\n  el.style.transition = \"opacity 0.9s ease, transform 0.9s ease\";\n  observer.observe(el);\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;