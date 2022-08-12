/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/cloud-bg.jpg */ "./src/assets/cloud-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DynaPuff:wght@500&family=Poppins&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: inherit;\n}\n\nhtml {\n  font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  overflow-x: hidden;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") #17609b;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.blur-bg {\n  backdrop-filter: blur(2px);\n  box-shadow: 2px 2px 5px -2px #222;\n}\n\nnav {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 16px;\n  height: 10%;\n}\nnav h1 {\n  font-size: 1.3rem;\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.6666666667), rgba(238, 238, 238, 0.6666666667), rgba(255, 255, 255, 0.6666666667));\n  border-radius: 999px;\n  padding: 5px 15px;\n  color: #222;\n}\nnav h1 sub {\n  font-size: 0.8rem;\n}\nnav form {\n  color: #222;\n}\nnav form input,\nnav form button {\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.6666666667), rgba(238, 238, 238, 0.6666666667), rgba(255, 255, 255, 0.6666666667));\n  border: 0;\n}\nnav form input {\n  padding: 5px 10px;\n  font-size: 1.2rem;\n  border-radius: 999px;\n  margin-right: 5px;\n}\nnav form input::placeholder {\n  color: #222;\n}\nnav form button {\n  height: calc(1.2rem + 10px);\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n  min-height: 80%;\n}\nmain > h1 {\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  font-size: 2.2rem;\n}\n\n#app {\n  width: max(600px, 50%);\n  height: 400px;\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.6666666667), rgba(238, 238, 238, 0.6666666667), rgba(255, 255, 255, 0.6666666667));\n  padding: 16px;\n  border-radius: 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n#app .weather {\n  align-self: center;\n  justify-self: stretch;\n  border-right: 1px solid #222;\n}\n#app .weather img {\n  display: block;\n  margin: 0 auto;\n}\n#app .weather p {\n  text-align: center;\n}\n#app .weather p:first-of-type {\n  font-size: 2rem;\n  font-family: \"DynaPuff\", cursive;\n}\n#app .weather p:last-of-type {\n  font-size: 1rem;\n  font-weight: bold;\n}\n#app .stats {\n  grid-column: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 32px;\n  padding-left: 32px;\n}\n#app .stats i {\n  font-size: 2rem;\n  margin-right: 20px;\n  text-align: center;\n}\n#app .stats p {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n#credits {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  font-weight: bold;\n  font-size: 0.7rem;\n}\n\n@media (max-width: 700px) {\n  nav {\n    flex-direction: column;\n    align-items: center;\n    gap: 32px;\n  }\n  nav form {\n    width: 70%;\n    display: flex;\n  }\n  nav form input {\n    flex: 90%;\n  }\n  nav h1 {\n    width: 100%;\n    border-radius: 0;\n  }\n  main {\n    height: auto;\n  }\n  #app {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr auto;\n    height: auto;\n    gap: 32px;\n    padding: 32px 0;\n    width: 90%;\n  }\n  #app .weather {\n    border-right: 0;\n  }\n  #app .stats {\n    grid-column: 1;\n    grid-row: 2;\n    flex-direction: row;\n    gap: 0;\n  }\n  #app .stats p {\n    flex: 10%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n  #app .stats p i {\n    margin-right: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/main.scss"],"names":[],"mappings":"AAIA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,cAAA;AAFF;;AAKA;EACE,kCAAA;AAFF;;AAKA;EACE,aAAA;EACA,kBAAA;EACA,2DAAA;EACA,sBAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;AAFF;;AAKA;EACE,eAAA;AAFF;;AAKA;EACE,0BAAA;EACA,iCAAA;AAFF;;AAKA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,8BAAA;EACA,aAAA;EACA,WAAA;AAFF;AAIE;EACE,iBAAA;EACA,2IA1CgB;EA2ChB,oBAAA;EACA,iBAAA;EACA,WAAA;AAFJ;AAII;EACE,iBAAA;AAFN;AAME;EACE,WAAA;AAJJ;AAMI;;EAEE,2IAzDc;EA0Dd,SAAA;AAJN;AAOI;EACE,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,iBAAA;AALN;AAOM;EACE,WAAA;AALR;AASI;EACE,2BAAA;EACA,iBAAA;EACA,kBAAA;AAPN;;AAYA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,SAAA;EACA,eAAA;AATF;AAWE;EACE,WAAA;EACA,yBAAA;EACA,iBAAA;AATJ;;AAaA;EACE,sBAAA;EACA,aAAA;EACA,2IAlGkB;EAmGlB,aAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;AAVF;AAYE;EACE,kBAAA;EACA,qBAAA;EACA,4BAAA;AAVJ;AAYI;EACE,cAAA;EACA,cAAA;AAVN;AAaI;EACE,kBAAA;AAXN;AAcI;EACE,eAAA;EACA,gCAAA;AAZN;AAeI;EACE,eAAA;EACA,iBAAA;AAbN;AAiBE;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,SAAA;EACA,kBAAA;AAfJ;AAiBI;EACE,eAAA;EACA,kBAAA;EACA,kBAAA;AAfN;AAkBI;EACE,iBAAA;EACA,iBAAA;AAhBN;;AAqBA;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,iBAAA;AAlBF;;AAqBA;EACE;IACE,sBAAA;IACA,mBAAA;IACA,SAAA;EAlBF;EAoBE;IACE,UAAA;IACA,aAAA;EAlBJ;EAoBI;IACE,SAAA;EAlBN;EAsBE;IACE,WAAA;IACA,gBAAA;EApBJ;EAwBA;IACE,YAAA;EAtBF;EAyBA;IACE,0BAAA;IACA,4BAAA;IACA,YAAA;IACA,SAAA;IACA,eAAA;IACA,UAAA;EAvBF;EAyBE;IACE,eAAA;EAvBJ;EA0BE;IACE,cAAA;IACA,WAAA;IACA,mBAAA;IACA,MAAA;EAxBJ;EA0BI;IACE,SAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,SAAA;EAxBN;EA0BM;IACE,eAAA;EAxBR;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@500&family=Poppins&display=swap');\r\n\r\n$transparent-white: linear-gradient(45deg, #fffa, #eeea, #fffa);\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  color: inherit;\r\n}\r\n\r\nhtml {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  overflow-x: hidden;\r\n  background: url('../assets/cloud-bg.jpg') #17609b;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.blur-bg {\r\n  backdrop-filter: blur(2px);\r\n  box-shadow: 2px 2px 5px -2px #222;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  padding: 16px;\r\n  height: 10%;\r\n\r\n  h1 {\r\n    font-size: 1.3rem;\r\n    background: $transparent-white;\r\n    border-radius: 999px;\r\n    padding: 5px 15px;\r\n    color: #222;\r\n\r\n    sub {\r\n      font-size: 0.8rem;\r\n    }\r\n  }\r\n\r\n  form {\r\n    color: #222;\r\n\r\n    input,\r\n    button {\r\n      background: $transparent-white;\r\n      border: 0;\r\n    }\r\n\r\n    input {\r\n      padding: 5px 10px;\r\n      font-size: 1.2rem;\r\n      border-radius: 999px;\r\n      margin-right: 5px;\r\n\r\n      &::placeholder {\r\n        color: #222;\r\n      }\r\n    }\r\n\r\n    button {\r\n      height: calc(1.2rem + 10px);\r\n      aspect-ratio: 1/1;\r\n      border-radius: 50%;\r\n    }\r\n  }\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  min-height: 80%;\r\n\r\n  > h1 {\r\n    color: #fff;\r\n    text-shadow: 2px 2px #000;\r\n    font-size: 2.2rem;\r\n  }\r\n}\r\n\r\n#app {\r\n  width: max(600px, 50%);\r\n  height: 400px;\r\n  background: $transparent-white;\r\n  padding: 16px;\r\n  border-radius: 10px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n\r\n  .weather {\r\n    align-self: center;\r\n    justify-self: stretch;\r\n    border-right: 1px solid #222;\r\n\r\n    img {\r\n      display: block;\r\n      margin: 0 auto;\r\n    }\r\n\r\n    p {\r\n      text-align: center;\r\n    }\r\n\r\n    p:first-of-type {\r\n      font-size: 2rem;\r\n      font-family: 'DynaPuff', cursive;\r\n    }\r\n\r\n    p:last-of-type {\r\n      font-size: 1rem;\r\n      font-weight: bold;\r\n    }\r\n  }\r\n\r\n  .stats {\r\n    grid-column: 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    gap: 32px;\r\n    padding-left: 32px;\r\n\r\n    i {\r\n      font-size: 2rem;\r\n      margin-right: 20px;\r\n      text-align: center;\r\n    }\r\n\r\n    p {\r\n      font-size: 1.2rem;\r\n      font-weight: bold;\r\n    }\r\n  }\r\n}\r\n\r\n#credits {\r\n  position: absolute;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  font-weight: bold;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  nav {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 32px;\r\n\r\n    form {\r\n      width: 70%;\r\n      display: flex;\r\n\r\n      input {\r\n        flex: 90%;\r\n      }\r\n    }\r\n\r\n    h1 {\r\n      width: 100%;\r\n      border-radius: 0;\r\n    }\r\n  }\r\n\r\n  main {\r\n    height: auto;\r\n  }\r\n\r\n  #app {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr auto;\r\n    height: auto;\r\n    gap: 32px;\r\n    padding: 32px 0;\r\n    width: 90%;\r\n\r\n    .weather {\r\n      border-right: 0;\r\n    }\r\n\r\n    .stats {\r\n      grid-column: 1;\r\n      grid-row: 2;\r\n      flex-direction: row;\r\n      gap: 0;\r\n\r\n      p {\r\n        flex: 10%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        gap: 10px;\r\n\r\n        i {\r\n          margin-right: 0;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UI = (() => {
  const container = document.querySelector('#app');
  const iconUrl = ' http://openweathermap.org/img/wn/';

  const updateLocation = (newLocation) => {
    document.querySelector(
      '#cityName'
    ).textContent = `Weather in ${newLocation}`;
  };

  const createWeatherCard = ({
    temp,
    icon,
    description,
    humidity,
    clouds,
    windSpeed,
  }) => {
    document.querySelector('#icon').src = `${iconUrl}${icon}@4x.png`;
    document.querySelector('#temp').textContent = temp;
    document.querySelector('#description').textContent = description;
    document.querySelector('#humidity').textContent = `${humidity}%`;
    document.querySelector('#clouds').textContent = `${clouds}%`;
    document.querySelector('#wind').textContent = `${windSpeed} km/h`;
  };

  return { createWeatherCard, updateLocation };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");


const weather = (() => {
  const apiKey = 'f46fa8417e7f5e44d9e30fbf014bc441';
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const geocodinUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  let unit = 'metric';

  const getWeatherData = async (coords) => {
    try {
      const response = await fetch(
        `${weatherUrl}?lat=${coords.lat}&lon=${coords.lon}&units=${unit}&appid=${apiKey}`
      );
      const data = await response.json();

      const displayData = {
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        clouds: data.clouds.all,
        windSpeed: data.wind.speed,
      };

      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].createWeatherCard(displayData);
    } catch (err) {
      console.log(err);
    }
  };

  const getCoords = async (city) => {
    try {
      const response = await fetch(`${geocodinUrl}?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      const coords = { lat: data[0].lat, lon: data[0].lon };
      const name = data[0].name;

      _UI__WEBPACK_IMPORTED_MODULE_0__["default"].updateLocation(name);

      getWeatherData(coords);
    } catch (err) {
      console.log(err);
    }
  };

  const getWeather = (city) => {
    getCoords(city);
  };

  return { getWeather };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


/***/ }),

/***/ "./src/assets/cloud-bg.jpg":
/*!*********************************!*\
  !*** ./src/assets/cloud-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c06f992058dba307288.jpg";

/***/ })

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");



const app = (() => {
  document.querySelector('#searchCity').onsubmit = function (ev) {
    ev.preventDefault();
    const city = this.city.value;
    _modules_weather__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather(city);
    this.reset();
  };

  _modules_weather__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather('Iasi');
})();

})();

/******/ })()
;
//# sourceMappingURL=bundle.78424ce0e4ed9315294b.js.map