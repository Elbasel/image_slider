/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ========== START Dark Mode Colors ========== */\n:root {\n    --primary-color: #181a1b;\n    --secondary-color: #2b2f31;\n    --blue: #004daa;\n    --text-color: #d8d4cf;\n    --caption-color: #e8e6e3;\n    --main-font: 'Montserrat', sans-serif;\n    --animation-duration: 1000ms;\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\n\nbody {\n    height: 100vh;\n    width: 100vw;\n\n    overflow-x: hidden;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    background-color: var(--primary-color);\n}\n\n.img-slider {\n    width: 100%;\n    height: 600px;\n\n    position: relative;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    overflow: hidden;\n}\n\n.img-slider.preload * {\n    transition: none !important;\n}\n\nimg {\n    border-radius: 24px;\n}\n\n.img-div {\n    width: 50%;\n    height: 80%;\n\n    position: absolute;\n\n    border: 1px solid white;\n    border-radius: 24px;\n\n    background-size: cover;\n}\n\n/* Next Classes */\n\n.from-invisible-to-left {\n    animation: from-invisible-to-left var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-left-to-center {\n    animation: from-left-to-center var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-center-to-right {\n    animation: from-center-to-right var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-right-to-invisible {\n    animation: from-right-to-invisible var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n/* Next Animations */\n\n@keyframes from-invisible-to-left {\n    0% {\n        /* transform: translateX(-1000px) translateY(800px) rotate(-100deg); */\n        top: 1000px;\n        left: -1000px;\n        transform: rotate(-40deg);\n        opacity: 0;\n    }\n    100% {\n        top: 50%;\n        left: -30%;\n        transform: rotate(-20deg);\n        opacity: 1;\n    }\n}\n\n@keyframes from-left-to-center {\n    0% {\n        top: 50%;\n        left: -30%;\n        transform: rotate(-20deg);\n    }\n    100% {\n        top: 60px;\n        left: 342px;\n        transform: rotate(0);\n    }\n}\n\n@keyframes from-center-to-right {\n    0% {\n        top: 60px;\n        left: 342px;\n        transform: rotate(0);\n    }\n    100% {\n        top: 50%;\n        left: 80%;\n        transform: rotate(20deg);\n    }\n}\n\n@keyframes from-right-to-invisible {\n    0% {\n        top: 50%;\n        left: 80%;\n        transform: rotate(20deg);\n    }\n    100% {\n        top: 2000px;\n        left: 2000px;\n        transform: rotate(40deg);\n    }\n}\n\n.arrow-img-div {\n    height: 50px;\n    width: 50px;\n    z-index: 3;\n    position: absolute;\n    top: 20%;\n    transition: background 400ms, transform 400ms;\n}\n\n#left-arrow-img-div {\n    left: 18%;\n    /* transform: rotate(-30deg); */\n}\n\n#left-arrow-img-div:hover {\n    transform: rotate(-30deg) scale(1.1);\n}\n\n#left-arrow-img-div:active {\n    transform: rotate(-30deg) scale(1.5);\n}\n\n#right-arrow-img-div {\n    right: 18%;\n    transform: rotate(180deg);\n}\n\n#right-arrow-img-div:hover {\n    transform: rotate(210deg) scale(1.1);\n}\n\n#right-arrow-img-div:active {\n    transform: rotate(210deg) scale(1.5);\n}\n\n/* .right-img-div {\n    background-color: yellow;\n    left: 80%;\n    top: 50%;\n    transform: rotate(20deg);\n}\n\n.left-img-div {\n    background-color: black;\n\n    left: -30%;\n    top: 50%;\n    transform: rotate(-20deg);\n}\n\n.center-img-div {\n    background-color: red;\n    top: 60px;\n    left: 342px;\n    transform: rotate(0);\n}\n\n.meter {\n    position: fixed;\n    width: 100%;\n    height: 3px;\n    background-color: white;\n    z-index: 4;\n}\n\n#meter1 {\n    top: 38%;\n}\n\n#meter2 {\n    top: 50%;\n}\n\n.slide-in-from-right {\n    animation: slide-in-from-right 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n@keyframes rotate-out-2-bl-cw {\n    0% {\n        transform: rotate(0);\n        transform-origin: 0 100%;\n        opacity: 1;\n    }\n    100% {\n        transform: rotate(45deg);\n        transform-origin: 0 100%;\n        opacity: 0;\n    }\n}\n\n@keyframes slide-in-from-right {\n    0% {\n        transform: translateX(-1000px) translateY(800px) rotate(-100deg);\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0) translateY(0) rotate(-20deg);\n        opacity: 1;\n    }\n} */\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA,iDAAiD;AACjD;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;IACrB,wBAAwB;IACxB,qCAAqC;IACrC,4BAA4B;AAChC;;AAEA,+CAA+C;AAC/C;mEACmE;;AAEnE;IACI,aAAa;IACb,YAAY;;IAEZ,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;IAEvB,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,aAAa;;IAEb,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;;IAEX,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;;IAEnB,sBAAsB;AAC1B;;AAEA,iBAAiB;;AAEjB;IACI;qDACiD;AACrD;;AAEA;IACI;qDACiD;AACrD;;AAEA;IACI;qDACiD;AACrD;;AAEA;IACI;qDACiD;AACrD;;AAEA,oBAAoB;;AAEpB;IACI;QACI,sEAAsE;QACtE,WAAW;QACX,aAAa;QACb,yBAAyB;QACzB,UAAU;IACd;IACA;QACI,QAAQ;QACR,UAAU;QACV,yBAAyB;QACzB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,QAAQ;QACR,UAAU;QACV,yBAAyB;IAC7B;IACA;QACI,SAAS;QACT,WAAW;QACX,oBAAoB;IACxB;AACJ;;AAEA;IACI;QACI,SAAS;QACT,WAAW;QACX,oBAAoB;IACxB;IACA;QACI,QAAQ;QACR,SAAS;QACT,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,QAAQ;QACR,SAAS;QACT,wBAAwB;IAC5B;IACA;QACI,WAAW;QACX,YAAY;QACZ,wBAAwB;IAC5B;AACJ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,6CAA6C;AACjD;;AAEA;IACI,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAgEG","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');\n\n/* ========== START Dark Mode Colors ========== */\n:root {\n    --primary-color: #181a1b;\n    --secondary-color: #2b2f31;\n    --blue: #004daa;\n    --text-color: #d8d4cf;\n    --caption-color: #e8e6e3;\n    --main-font: 'Montserrat', sans-serif;\n    --animation-duration: 1000ms;\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\n\nbody {\n    height: 100vh;\n    width: 100vw;\n\n    overflow-x: hidden;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    background-color: var(--primary-color);\n}\n\n.img-slider {\n    width: 100%;\n    height: 600px;\n\n    position: relative;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    overflow: hidden;\n}\n\n.img-slider.preload * {\n    transition: none !important;\n}\n\nimg {\n    border-radius: 24px;\n}\n\n.img-div {\n    width: 50%;\n    height: 80%;\n\n    position: absolute;\n\n    border: 1px solid white;\n    border-radius: 24px;\n\n    background-size: cover;\n}\n\n/* Next Classes */\n\n.from-invisible-to-left {\n    animation: from-invisible-to-left var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-left-to-center {\n    animation: from-left-to-center var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-center-to-right {\n    animation: from-center-to-right var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-right-to-invisible {\n    animation: from-right-to-invisible var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n/* Next Animations */\n\n@keyframes from-invisible-to-left {\n    0% {\n        /* transform: translateX(-1000px) translateY(800px) rotate(-100deg); */\n        top: 1000px;\n        left: -1000px;\n        transform: rotate(-40deg);\n        opacity: 0;\n    }\n    100% {\n        top: 50%;\n        left: -30%;\n        transform: rotate(-20deg);\n        opacity: 1;\n    }\n}\n\n@keyframes from-left-to-center {\n    0% {\n        top: 50%;\n        left: -30%;\n        transform: rotate(-20deg);\n    }\n    100% {\n        top: 60px;\n        left: 342px;\n        transform: rotate(0);\n    }\n}\n\n@keyframes from-center-to-right {\n    0% {\n        top: 60px;\n        left: 342px;\n        transform: rotate(0);\n    }\n    100% {\n        top: 50%;\n        left: 80%;\n        transform: rotate(20deg);\n    }\n}\n\n@keyframes from-right-to-invisible {\n    0% {\n        top: 50%;\n        left: 80%;\n        transform: rotate(20deg);\n    }\n    100% {\n        top: 2000px;\n        left: 2000px;\n        transform: rotate(40deg);\n    }\n}\n\n.arrow-img-div {\n    height: 50px;\n    width: 50px;\n    z-index: 3;\n    position: absolute;\n    top: 20%;\n    transition: background 400ms, transform 400ms;\n}\n\n#left-arrow-img-div {\n    left: 18%;\n    /* transform: rotate(-30deg); */\n}\n\n#left-arrow-img-div:hover {\n    transform: rotate(-30deg) scale(1.1);\n}\n\n#left-arrow-img-div:active {\n    transform: rotate(-30deg) scale(1.5);\n}\n\n#right-arrow-img-div {\n    right: 18%;\n    transform: rotate(180deg);\n}\n\n#right-arrow-img-div:hover {\n    transform: rotate(210deg) scale(1.1);\n}\n\n#right-arrow-img-div:active {\n    transform: rotate(210deg) scale(1.5);\n}\n\n/* .right-img-div {\n    background-color: yellow;\n    left: 80%;\n    top: 50%;\n    transform: rotate(20deg);\n}\n\n.left-img-div {\n    background-color: black;\n\n    left: -30%;\n    top: 50%;\n    transform: rotate(-20deg);\n}\n\n.center-img-div {\n    background-color: red;\n    top: 60px;\n    left: 342px;\n    transform: rotate(0);\n}\n\n.meter {\n    position: fixed;\n    width: 100%;\n    height: 3px;\n    background-color: white;\n    z-index: 4;\n}\n\n#meter1 {\n    top: 38%;\n}\n\n#meter2 {\n    top: 50%;\n}\n\n.slide-in-from-right {\n    animation: slide-in-from-right 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n@keyframes rotate-out-2-bl-cw {\n    0% {\n        transform: rotate(0);\n        transform-origin: 0 100%;\n        opacity: 1;\n    }\n    100% {\n        transform: rotate(45deg);\n        transform-origin: 0 100%;\n        opacity: 0;\n    }\n}\n\n@keyframes slide-in-from-right {\n    0% {\n        transform: translateX(-1000px) translateY(800px) rotate(-100deg);\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0) translateY(0) rotate(-20deg);\n        opacity: 1;\n    }\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n    font-size: 14px;\n    /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n    font-family: var(--main-font);\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;;;IAGI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;;;;;;;;;;IAUI,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB","sourcesContent":["html {\n    box-sizing: border-box;\n    font-size: 14px;\n    /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n    font-family: var(--main-font);\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/left-arrow-blue.png":
/*!****************************************!*\
  !*** ./src/assets/left-arrow-blue.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACZklEQVRoge3XwUsUYRjH8e8zkxUGlQTZjgbhHyBBXRIvsSslWAexEAIvu6aVBHVf2EPnqKDEViWiQ9AShJKFawmKXYqgY4cSWnftZodS2OZ9O0Wzq7kz0qwbvJ/jO8/C79ln5933BcMwDMMwDMOoQIIUO6/GzqL0MLBL0INLsf5MSLkCs/wWHpoZ60TpDOAABzQyHF6s4Hb4KXJm7rehdQao8yz/DCfS1lScSHM23Yq2JoF6z7IS4Wp4sYLbtJHG7HiLQl4ADd51DdeXooknoSYL6K+NNL4cPmijpoCId100yUIscTv0ZAFtuGu1TI/sWxN7FjhaVn43H4sPVSFXYOsm4kyM1K+JPUlZEwKP8vNfauq98CqZyLG3I3XLK/YzDZ1ldRN5O9fNyVRN7VRefyaSSlmFFfvh+iZkgVW3t5abAM9EnJnRe2gubWeYLVhUIpeXo/EpCyAyPXrjP2wC4IilVRp+/7Qs9LbG+QcsgEI0kUSoqbOTT581kgDPWSs/lxty2psbgN6y4jeuu7Pj66m+79VMGJR311KR/W6f1jwvqzlh28XHvE75OmBul5I/xHfHB4r2nr09wFxpme5y3KYHpFK+j/3Vti5Yru386m7tngHelz6RC0774TtVyhXYht/wp46Bb65bPA18LH2irzRl08kq5Aps06tuY3a8xUbNU3YC1iLXCtH4rVCTBVTxzt6cTbcqZJbSO4nSWp8rdPQ/DS9aMBVf3lys/wOiuoAf3s+JyM3wYgXnaxfKRy8uKJEeoOhZtsOJtDW+t9PlaHxKUN3AIpATzWB4sQzDMAzDMAwjBL8AKj+n0lGfQAgAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/assets/left-arrow-grey.png":
/*!****************************************!*\
  !*** ./src/assets/left-arrow-grey.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACWElEQVRoge3XPWsUURTG8f8ZDUKISAgIO5X4AYKwZAs7ixQRXzBEEWx3LrsSLOwDU1gbFDTs3BRCtDL4gsFYBoVokUHwC5hCJrVFXCQmxyaG2WzizqzMZoX7K8+9xXOYuWfugOM4juM4juN0IHk2B0FwRUTmgBMiUms0GosF5crNy7oxCIIJEVkEfGBEVeeKi5VfpkaCIDi/28RAqvyrmEjd6dhItVodFZElYDBV3gHuFJaqC39tpF6vn/U87x0wnK6r6t0oip4XmiynQxup1Wqnt7e3l4FSui4iM9baB4Uny+nAqWWMOQWsAOf2LT2Komi68FRdaHsixphBYIn2Jp76vt9X5yKt5YkYYwaA18DEvn1vfN+fDMOwryZV2l4jYRh6SZI8A27u27MKjEdR9KOnyXLaa8QY8xioH2GWbqyr6m1r7bIHYIy5x//XBMAZEbGwe9hVVY82z7/zAKy1M0Bf3Z0y+ioiVYDjfyq+708nSTJM+2H/2Gw2xxcWFjZ7mTCvtvGrqq9E5GLLJpGlUql0rZ/Hb8sHMYqiraGhoSkR+ZCuq+qljY2NJ2EYZr7291pbsNnZ2aaqXgY+p+uqeitJkoc9S5bTsYOKcRz/HBsbe6mqV4GR1FKlXC7vxHH8vjfxsjuwEYC1tbXNSqXyVlVvACdTSxfK5fL3OI4/FR8vu47/7NVqddTzvBVa/0l2ROR6o9F4UVy0fDoe3vn5+S+qeglI37U8Vb1fXKz8Mk0ha+2qqk4BW6nyoa/lUcg8Tq21y6o6CawD34BaYakcx3Ecx3Ecpwi/ARzSs9Ke9CKTAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/assets/airplane.jpg":
/*!*********************************!*\
  !*** ./src/assets/airplane.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "663de842475730199ff3.jpg";

/***/ }),

/***/ "./src/assets/city.jpg":
/*!*****************************!*\
  !*** ./src/assets/city.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f2238810525683291d7.jpg";

/***/ }),

/***/ "./src/assets/urban.jpg":
/*!******************************!*\
  !*** ./src/assets/urban.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "137761023af05831ffce.jpg";

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _assets_city_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/city.jpg */ "./src/assets/city.jpg");
/* harmony import */ var _assets_urban_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/urban.jpg */ "./src/assets/urban.jpg");
/* harmony import */ var _assets_airplane_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/airplane.jpg */ "./src/assets/airplane.jpg");
/* harmony import */ var _assets_left_arrow_grey_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/left-arrow-grey.png */ "./src/assets/left-arrow-grey.png");
/* harmony import */ var _assets_left_arrow_blue_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/left-arrow-blue.png */ "./src/assets/left-arrow-blue.png");


// import desolateForest from './assets/desolate_forest.webp'







function animateElement(
    element,
    animation,
    duration,
    easeing = 'ease-in-out',
    direction = 'normal',
    delay = 0,
) {
    let keyFrames = []
    if (animation === 'slide-in-from-left') {
        keyFrames = [
            {
                transform:
                    'translateX(-1000px) translateY(800px) rotate(-100deg)',
                opacity: 0,
            },
            {
                transform: 'translateX(0) translateY(0) rotate(-20deg)',
                opacity: 1,
            },
        ]
    } else if (animation === 'slide-out-to-right') {
        keyFrames = [
            {
                // transform:
                // 'translateX(-1000px) translateY(800px) rotate(-100deg)',
                opacity: 1,
            },
            {
                transform:
                    'translateX(1000px) translateY(800px) rotate(100deg)',
                opacity: 0,
            },
        ]
    }

    element.animate(keyFrames, {
        duration,
        easeing,
        direction,
        delay,
    })
}

// document.querySelector('').src = desolateForest
// document.querySelector('#left-arrow-grey').src = leftArrowGrey
// document.querySelector('#left-arrow-blue').src = leftArrowBlue
// document
//     .querySelector('#left-arrow-grey')
//     .addEventListener('mouseenter', (e) => {
//         e.target.src = leftArrowBlue
//     })

const imageSlider = document.querySelector('.img-slider')
const leftArrowDiv = document.querySelector('#left-arrow-img-div')
const rightArrowDiv = document.querySelector('#right-arrow-img-div')

// function next() {
//     const leftImgDiv = document.querySelector('.left-img-div')
//     const centerImgDiv = document.querySelector('.center-img-div')
//     const rightImgDiv = document.querySelector('.right-img-div')

//     const newLeftImgDiv = document.createElement('div')
//     newLeftImgDiv.classList.add('img-div')
//     newLeftImgDiv.classList.add('left-img-div')
//     newLeftImgDiv.classList.add('slide-in-from-right')
//     imageSlider.appendChild(newLeftImgDiv)

//     leftImgDiv.classList.remove('left-img-div')
//     leftImgDiv.classList.add('center-img-div')

//     centerImgDiv.classList.remove('center-img-div')
//     centerImgDiv.classList.add('right-img-div')

//     setTimeout(() => {
//         imageSlider.removeChild(rightImgDiv)
//     }, 1000)

//     animateElement(
//         rightImgDiv,
//         'slide-out-to-right',
//         1100,
//         'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     )
// }

function next() {
    const leftDiv = document.createElement('div')
    leftDiv.classList.add('img-div')
    leftDiv.classList.add('from-invisible-to-left')
    leftDiv.style.backgroundImage = `url(${_assets_airplane_jpg__WEBPACK_IMPORTED_MODULE_4__})`
    imageSlider.appendChild(leftDiv)

    const centerDiv = document.createElement('div')
    centerDiv.classList.add('img-div')
    centerDiv.classList.add('from-left-to-center')
    centerDiv.style.backgroundImage = `url(${_assets_city_jpg__WEBPACK_IMPORTED_MODULE_2__})`
    imageSlider.appendChild(centerDiv)

    const rightDiv = document.createElement('div')
    rightDiv.classList.add('img-div')
    rightDiv.classList.add('from-center-to-right')
    rightDiv.style.backgroundImage = `url(${_assets_urban_jpg__WEBPACK_IMPORTED_MODULE_3__})`
    imageSlider.appendChild(rightDiv)

    const disappearingDiv = document.createElement('div')
    disappearingDiv.classList.add('img-div')
    disappearingDiv.classList.add('from-right-to-invisible')
    disappearingDiv.style.backgroundImage = `url(${_assets_airplane_jpg__WEBPACK_IMPORTED_MODULE_4__})`
    disappearingDiv.addEventListener('animationend', () => {
        disappearingDiv.remove()
    })
    imageSlider.appendChild(disappearingDiv)

    rightArrowDiv.addEventListener('click', () => {
        leftDiv.remove()
        centerDiv.remove()
        rightDiv.remove()
    })
}

leftArrowDiv.style.backgroundImage = `url(${_assets_left_arrow_grey_png__WEBPACK_IMPORTED_MODULE_5__["default"]})`
rightArrowDiv.style.backgroundImage = `url(${_assets_left_arrow_grey_png__WEBPACK_IMPORTED_MODULE_5__["default"]})`

leftArrowDiv.addEventListener('mouseenter', () => {
    leftArrowDiv.style.background = `url(${_assets_left_arrow_blue_png__WEBPACK_IMPORTED_MODULE_6__["default"]})`
})

rightArrowDiv.addEventListener('click', () => {
    next()
})

leftArrowDiv.addEventListener('mouseleave', () => {
    leftArrowDiv.style.background = `url(${_assets_left_arrow_grey_png__WEBPACK_IMPORTED_MODULE_5__["default"]})`
})

rightArrowDiv.addEventListener('mouseenter', () => {
    rightArrowDiv.style.background = `url(${_assets_left_arrow_blue_png__WEBPACK_IMPORTED_MODULE_6__["default"]})`
})

rightArrowDiv.addEventListener('mouseleave', () => {
    rightArrowDiv.style.background = `url(${_assets_left_arrow_grey_png__WEBPACK_IMPORTED_MODULE_5__["default"]})`
})

setTimeout(() => {
    imageSlider.classList.remove('preload')
}, 100)

next()

})();


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpREFBUSxDQUFDO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2Q0FBSSxDQUFDO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw4Q0FBSyxDQUFDO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxpREFBUSxDQUFDO0FBQzVEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNENBQTRDLG1FQUFTLENBQUM7QUFDdEQsNkNBQTZDLG1FQUFTLENBQUM7O0FBRXZEO0FBQ0EsMkNBQTJDLG1FQUFTLENBQUM7QUFDckQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDJDQUEyQyxtRUFBUyxDQUFDO0FBQ3JELENBQUM7O0FBRUQ7QUFDQSw0Q0FBNEMsbUVBQVMsQ0FBQztBQUN0RCxDQUFDOztBQUVEO0FBQ0EsNENBQTRDLG1FQUFTLENBQUM7QUFDdEQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9hc3NldHMvbGVmdC1hcnJvdy1ibHVlLnBuZyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Fzc2V0cy9sZWZ0LWFycm93LWdyZXkucG5nIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PSBTVEFSVCBEYXJrIE1vZGUgQ29sb3JzID09PT09PT09PT0gKi9cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzE4MWExYjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyYjJmMzE7XFxuICAgIC0tYmx1ZTogIzAwNGRhYTtcXG4gICAgLS10ZXh0LWNvbG9yOiAjZDhkNGNmO1xcbiAgICAtLWNhcHRpb24tY29sb3I6ICNlOGU2ZTM7XFxuICAgIC0tbWFpbi1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIC0tYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxufVxcblxcbi8qID09PT09PT09PT0gRU5EIERhcmsgTW9kZSBDb2xvcnMgPT09PT09PT09PSAqL1xcbi8qIFRvIHVzZSBiYWNrZ3JvdW5kIGltYWdlcyB0aG91cmdoICB1cmwsIHVzZSBpdCBpbiBKYXZhc2NpcHJ0IHVzaW5nIFxcbmltcG9ydCBhc3NldCBzdGF0bWVudCBhbmQgZS5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7aW1wb3J0ZWRJbWFnZX1gICovXFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5pbWctc2xpZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWctc2xpZGVyLnByZWxvYWQgKiB7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XFxuXFxuLmltZy1kaXYge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG5cXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogTmV4dCBDbGFzc2VzICovXFxuXFxuLmZyb20taW52aXNpYmxlLXRvLWxlZnQge1xcbiAgICBhbmltYXRpb246IGZyb20taW52aXNpYmxlLXRvLWxlZnQgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKVxcbiAgICAgICAgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGZvcndhcmRzO1xcbn1cXG5cXG4uZnJvbS1sZWZ0LXRvLWNlbnRlciB7XFxuICAgIGFuaW1hdGlvbjogZnJvbS1sZWZ0LXRvLWNlbnRlciB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pXFxuICAgICAgICBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgZm9yd2FyZHM7XFxufVxcblxcbi5mcm9tLWNlbnRlci10by1yaWdodCB7XFxuICAgIGFuaW1hdGlvbjogZnJvbS1jZW50ZXItdG8tcmlnaHQgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKVxcbiAgICAgICAgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGZvcndhcmRzO1xcbn1cXG5cXG4uZnJvbS1yaWdodC10by1pbnZpc2libGUge1xcbiAgICBhbmltYXRpb246IGZyb20tcmlnaHQtdG8taW52aXNpYmxlIHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbilcXG4gICAgICAgIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBmb3J3YXJkcztcXG59XFxuXFxuLyogTmV4dCBBbmltYXRpb25zICovXFxuXFxuQGtleWZyYW1lcyBmcm9tLWludmlzaWJsZS10by1sZWZ0IHtcXG4gICAgMCUge1xcbiAgICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpIHRyYW5zbGF0ZVkoODAwcHgpIHJvdGF0ZSgtMTAwZGVnKTsgKi9cXG4gICAgICAgIHRvcDogMTAwMHB4O1xcbiAgICAgICAgbGVmdDogLTEwMDBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiAtMzAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmcm9tLWxlZnQtdG8tY2VudGVyIHtcXG4gICAgMCUge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiAtMzAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogNjBweDtcXG4gICAgICAgIGxlZnQ6IDM0MnB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmcm9tLWNlbnRlci10by1yaWdodCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogNjBweDtcXG4gICAgICAgIGxlZnQ6IDM0MnB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDgwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZyb20tcmlnaHQtdG8taW52aXNpYmxlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA4MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDIwMDBweDtcXG4gICAgICAgIGxlZnQ6IDIwMDBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcXG4gICAgfVxcbn1cXG5cXG4uYXJyb3ctaW1nLWRpdiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXMsIHRyYW5zZm9ybSA0MDBtcztcXG59XFxuXFxuI2xlZnQtYXJyb3ctaW1nLWRpdiB7XFxuICAgIGxlZnQ6IDE4JTtcXG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTsgKi9cXG59XFxuXFxuI2xlZnQtYXJyb3ctaW1nLWRpdjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZykgc2NhbGUoMS4xKTtcXG59XFxuXFxuI2xlZnQtYXJyb3ctaW1nLWRpdjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpIHNjYWxlKDEuNSk7XFxufVxcblxcbiNyaWdodC1hcnJvdy1pbWctZGl2IHtcXG4gICAgcmlnaHQ6IDE4JTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuI3JpZ2h0LWFycm93LWltZy1kaXY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbiNyaWdodC1hcnJvdy1pbWctZGl2OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZykgc2NhbGUoMS41KTtcXG59XFxuXFxuLyogLnJpZ2h0LWltZy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGxlZnQ6IDgwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXG59XFxuXFxuLmxlZnQtaW1nLWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbiAgICBsZWZ0OiAtMzAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcXG59XFxuXFxuLmNlbnRlci1pbWctZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB0b3A6IDYwcHg7XFxuICAgIGxlZnQ6IDM0MnB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG59XFxuXFxuLm1ldGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG4jbWV0ZXIxIHtcXG4gICAgdG9wOiAzOCU7XFxufVxcblxcbiNtZXRlcjIge1xcbiAgICB0b3A6IDUwJTtcXG59XFxuXFxuLnNsaWRlLWluLWZyb20tcmlnaHQge1xcbiAgICBhbmltYXRpb246IHNsaWRlLWluLWZyb20tcmlnaHQgMS4xcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLW91dC0yLWJsLWN3IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWZyb20tcmlnaHQge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCkgdHJhbnNsYXRlWSg4MDBweCkgcm90YXRlKC0xMDBkZWcpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtMjBkZWcpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxpREFBaUQ7QUFDakQ7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyw0QkFBNEI7QUFDaEM7O0FBRUEsK0NBQStDO0FBQy9DO21FQUNtRTs7QUFFbkU7SUFDSSxhQUFhO0lBQ2IsWUFBWTs7SUFFWixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7O0lBRVgsa0JBQWtCOztJQUVsQix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixzQkFBc0I7QUFDMUI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJO3FEQUNpRDtBQUNyRDs7QUFFQTtJQUNJO3FEQUNpRDtBQUNyRDs7QUFFQTtJQUNJO3FEQUNpRDtBQUNyRDs7QUFFQTtJQUNJO3FEQUNpRDtBQUNyRDs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0k7UUFDSSxzRUFBc0U7UUFDdEUsV0FBVztRQUNYLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsVUFBVTtRQUNWLHlCQUF5QjtRQUN6QixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksUUFBUTtRQUNSLFVBQVU7UUFDVix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLFNBQVM7UUFDVCxXQUFXO1FBQ1gsb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxXQUFXO1FBQ1gsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsU0FBUztRQUNULHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxRQUFRO1FBQ1IsU0FBUztRQUNULHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiA9PT09PT09PT09IFNUQVJUIERhcmsgTW9kZSBDb2xvcnMgPT09PT09PT09PSAqL1xcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMTgxYTFiO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJiMmYzMTtcXG4gICAgLS1ibHVlOiAjMDA0ZGFhO1xcbiAgICAtLXRleHQtY29sb3I6ICNkOGQ0Y2Y7XFxuICAgIC0tY2FwdGlvbi1jb2xvcjogI2U4ZTZlMztcXG4gICAgLS1tYWluLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgLS1hbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG59XFxuXFxuLyogPT09PT09PT09PSBFTkQgRGFyayBNb2RlIENvbG9ycyA9PT09PT09PT09ICovXFxuLyogVG8gdXNlIGJhY2tncm91bmQgaW1hZ2VzIHRob3VyZ2ggIHVybCwgdXNlIGl0IGluIEphdmFzY2lwcnQgdXNpbmcgXFxuaW1wb3J0IGFzc2V0IHN0YXRtZW50IGFuZCBlLnN0eWxlLmJhY2tncm91bmQgPSBgJHtpbXBvcnRlZEltYWdlfWAgKi9cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmltZy1zbGlkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmltZy1zbGlkZXIucHJlbG9hZCAqIHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbn1cXG5cXG4uaW1nLWRpdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogODAlO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4vKiBOZXh0IENsYXNzZXMgKi9cXG5cXG4uZnJvbS1pbnZpc2libGUtdG8tbGVmdCB7XFxuICAgIGFuaW1hdGlvbjogZnJvbS1pbnZpc2libGUtdG8tbGVmdCB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pXFxuICAgICAgICBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgZm9yd2FyZHM7XFxufVxcblxcbi5mcm9tLWxlZnQtdG8tY2VudGVyIHtcXG4gICAgYW5pbWF0aW9uOiBmcm9tLWxlZnQtdG8tY2VudGVyIHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbilcXG4gICAgICAgIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBmb3J3YXJkcztcXG59XFxuXFxuLmZyb20tY2VudGVyLXRvLXJpZ2h0IHtcXG4gICAgYW5pbWF0aW9uOiBmcm9tLWNlbnRlci10by1yaWdodCB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pXFxuICAgICAgICBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgZm9yd2FyZHM7XFxufVxcblxcbi5mcm9tLXJpZ2h0LXRvLWludmlzaWJsZSB7XFxuICAgIGFuaW1hdGlvbjogZnJvbS1yaWdodC10by1pbnZpc2libGUgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKVxcbiAgICAgICAgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGZvcndhcmRzO1xcbn1cXG5cXG4vKiBOZXh0IEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIGZyb20taW52aXNpYmxlLXRvLWxlZnQge1xcbiAgICAwJSB7XFxuICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCkgdHJhbnNsYXRlWSg4MDBweCkgcm90YXRlKC0xMDBkZWcpOyAqL1xcbiAgICAgICAgdG9wOiAxMDAwcHg7XFxuICAgICAgICBsZWZ0OiAtMTAwMHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IC0zMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZyb20tbGVmdC10by1jZW50ZXIge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IC0zMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiA2MHB4O1xcbiAgICAgICAgbGVmdDogMzQycHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZyb20tY2VudGVyLXRvLXJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgICAgdG9wOiA2MHB4O1xcbiAgICAgICAgbGVmdDogMzQycHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogODAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZnJvbS1yaWdodC10by1pbnZpc2libGUge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDgwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMjAwMHB4O1xcbiAgICAgICAgbGVmdDogMjAwMHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAgICB9XFxufVxcblxcbi5hcnJvdy1pbWctZGl2IHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA0MDBtcywgdHJhbnNmb3JtIDQwMG1zO1xcbn1cXG5cXG4jbGVmdC1hcnJvdy1pbWctZGl2IHtcXG4gICAgbGVmdDogMTglO1xcbiAgICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpOyAqL1xcbn1cXG5cXG4jbGVmdC1hcnJvdy1pbWctZGl2OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKSBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jbGVmdC1hcnJvdy1pbWctZGl2OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZykgc2NhbGUoMS41KTtcXG59XFxuXFxuI3JpZ2h0LWFycm93LWltZy1kaXYge1xcbiAgICByaWdodDogMTglO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4jcmlnaHQtYXJyb3ctaW1nLWRpdjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZykgc2NhbGUoMS4xKTtcXG59XFxuXFxuI3JpZ2h0LWFycm93LWltZy1kaXY6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKSBzY2FsZSgxLjUpO1xcbn1cXG5cXG4vKiAucmlnaHQtaW1nLWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgbGVmdDogODAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbn1cXG5cXG4ubGVmdC1pbWctZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICAgIGxlZnQ6IC0zMCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbn1cXG5cXG4uY2VudGVyLWltZy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHRvcDogNjBweDtcXG4gICAgbGVmdDogMzQycHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbn1cXG5cXG4ubWV0ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcblxcbiNtZXRlcjEge1xcbiAgICB0b3A6IDM4JTtcXG59XFxuXFxuI21ldGVyMiB7XFxuICAgIHRvcDogNTAlO1xcbn1cXG5cXG4uc2xpZGUtaW4tZnJvbS1yaWdodCB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tZnJvbS1yaWdodCAxLjFzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUtb3V0LTItYmwtY3cge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4tZnJvbS1yaWdodCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KSB0cmFuc2xhdGVZKDgwMHB4KSByb3RhdGUoLTEwMGRlZyk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCkgcm90YXRlKC0yMGRlZyk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIC8qIGNvbG9yLXNjaGVtZTogZGFyazsgKi9cXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTs7Ozs7Ozs7OztJQVVJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAvKiBjb2xvci1zY2hlbWU6IGRhcms7ICovXFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbm9sLFxcbnVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNaa2xFUVZSb2dlM1h3VXNVWVJqSDhlOHpreFVHbFFUWmpnYmhIeUJCWFJJdnNTc2xXQWV4RUFJdnU2YVZCSFZmMkVQbnFLREVWaVdpUTlBU2hKS0Zhd21LWFlxZ1k0Y1NXbmZ0Wm9kUzJPWjlPMFd6cTdrejBxd2J2Si9qTzgvQzc5bG41OTMzQmNNd0RNTXdETU9vUUlJVU82L0d6cUwwTUxCTDBJTkxzZjVNU0xrQ3Mvd1dIcG9aNjBUcERPQUFCelF5SEY2czRIYjRLWEptN3JlaGRRYW84eXovRENmUzFsU2NTSE0yM1lxMkpvRjZ6N0lTNFdwNHNZTGJ0SkhHN0hpTFFsNEFEZDUxRGRlWG9va25vU1lMNksrTk5MNGNQbWlqcG9DSWQxMDB5VUlzY1R2MFpBRnR1R3UxVEkvc1d4TjdGamhhVm40M0g0c1BWU0ZYWU9zbTRreU0xSytKUFVsWkV3S1A4dk5mYXVxOThDcVp5TEczSTNYTEsvWXpEWjFsZFJONU85Zk55VlJON1ZSZWZ5YVNTbG1GRmZ2aCtpWmtnVlczdDVhYkFNOUVuSm5SZTJndWJXZVlMVmhVSXBlWG8vRXBDeUF5UFhyalAyd0M0SWlsVlJwKy83UXM5TGJHK1Fjc2dFSTBrVVNvcWJPVFQ1ODFrZ0RQV1NzL2x4dHkycHNiZ042eTRqZXV1N1BqNjZtKzc5Vk1HSlIzMTFLUi9XNmYxand2cXpsaDI4WEh2RTc1T21CdWw1SS94SGZIQjRyMm5yMDl3RnhwbWU1eTNLWUhwRksrai8zVnRpNVlydTM4Nm03dG5nSGVsejZSQzA3NzRUdFZ5aFhZaHQvd3A0NkJiNjViUEExOExIMmlyelJsMDhrcTVBcHMwNnR1WTNhOHhVYk5VM1lDMWlMWEN0SDRyVkNUQlZUeHp0NmNUYmNxWkpiU080blNXcDhyZFBRL0RTOWFNQlZmM2x5cy93T2l1b0FmM3MrSnlNM3dZZ1huYXhmS1J5OHVLSkVlb09oWnRzT0p0RFcrdDlQbGFIeEtVTjNBSXBBVHpXQjRzUXpETUF6RE1Bd2pCTDhBS2orbjBsR2ZRQWdBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDV0VsRVFWUm9nZTNYUFdzVVVSVEc4ZjhaRFVLSVNBZ0lPNVg0QVlLd1pBczdpeFFSWHpCRUVXeDNMcnNTTE93RFUxZ2JGRFRzM0JSQ3RETDRnc0ZZQm9Wb2tVSHdDNWhDSnJWRlhDUW14eWFHMld6aXpxek1ab1g3SzgrOXhYT1l1V2Z1Z09NNGp1TTRqdU4wSUhrMkIwRndSVVRtZ0JNaVVtczBHb3NGNWNyTnk3b3hDSUlKRVZrRWZHQkVWZWVLaTVWZnBrYUNJRGkvMjhSQXF2eXJtRWpkNmRoSXRWb2RGWkVsWURCVjNnSHVGSmFxQzM5dHBGNnZuL1U4N3gwd25LNnI2dDBvaXA0WG1peW5ReHVwMVdxbnQ3ZTNsNEZTdWk0aU05YmFCNFVueStuQXFXV01PUVdzQU9mMkxUMktvbWk2OEZSZGFIc2l4cGhCWUluMkpwNzZ2dDlYNXlLdDVZa1lZd2FBMThERXZuMXZmTitmRE1Pd3J5WlYybDRqWVJoNlNaSThBMjd1MjdNS2pFZFI5S09ueVhMYWE4UVk4eGlvSDJHV2JxeXI2bTFyN2JJSFlJeTV4Ly9YQk1BWkViR3dlOWhWVlk4Mno3L3pBS3kxTTBCZjNaMHkraW9pVllEamZ5cSs3MDhuU1RKTSsySC8yR3cyeHhjV0ZqWjdtVEN2dHZHcnFxOUU1R0xMSnBHbFVxbDByWi9IYjhzSE1ZcWlyYUdob1NrUitaQ3VxK3FsalkyTkoyRVlacjcyOTFwYnNObloyYWFxWGdZK3ArdXFlaXRKa29jOVM1YlRzWU9LY1J6L0hCc2JlNm1xVjRHUjFGS2xYQzd2eEhIOHZqZnhzanV3RVlDMXRiWE5TcVh5VmxWdkFDZFRTeGZLNWZMM09JNC9GUjh2dTQ3LzdOVnFkZFR6dkJWYS8wbDJST1I2bzlGNFVWeTBmRG9lM3ZuNStTK3FlZ2xJMzdVOFZiMWZYS3o4TWswaGErMnFxazRCVzZueW9hL2xVY2c4VHEyMXk2bzZDYXdEMzRCYVlha2N4M0VjeDNFY3B3aS9BUnpTczlLZTlDS1RBQUFBQUVsRlRrU3VRbUNDXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmICh0eXBlb2YgaW1wb3J0Lm1ldGEudXJsID09PSBcInN0cmluZ1wiKSBzY3JpcHRVcmwgPSBpbXBvcnQubWV0YS51cmxcbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9jc3MvcmVzZXQuY3NzJ1xuaW1wb3J0ICcuL2Nzcy9pbmRleC5jc3MnXG4vLyBpbXBvcnQgZGVzb2xhdGVGb3Jlc3QgZnJvbSAnLi9hc3NldHMvZGVzb2xhdGVfZm9yZXN0LndlYnAnXG5pbXBvcnQgY2l0eSBmcm9tICcuL2Fzc2V0cy9jaXR5LmpwZydcbmltcG9ydCB1cmJhbiBmcm9tICcuL2Fzc2V0cy91cmJhbi5qcGcnXG5pbXBvcnQgYWlycGxhbmUgZnJvbSAnLi9hc3NldHMvYWlycGxhbmUuanBnJ1xuXG5pbXBvcnQgZ3JleUFycm93IGZyb20gJy4vYXNzZXRzL2xlZnQtYXJyb3ctZ3JleS5wbmcnXG5pbXBvcnQgYmx1ZUFycm93IGZyb20gJy4vYXNzZXRzL2xlZnQtYXJyb3ctYmx1ZS5wbmcnXG5cbmZ1bmN0aW9uIGFuaW1hdGVFbGVtZW50KFxuICAgIGVsZW1lbnQsXG4gICAgYW5pbWF0aW9uLFxuICAgIGR1cmF0aW9uLFxuICAgIGVhc2VpbmcgPSAnZWFzZS1pbi1vdXQnLFxuICAgIGRpcmVjdGlvbiA9ICdub3JtYWwnLFxuICAgIGRlbGF5ID0gMCxcbikge1xuICAgIGxldCBrZXlGcmFtZXMgPSBbXVxuICAgIGlmIChhbmltYXRpb24gPT09ICdzbGlkZS1pbi1mcm9tLWxlZnQnKSB7XG4gICAgICAgIGtleUZyYW1lcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2xhdGVYKC0xMDAwcHgpIHRyYW5zbGF0ZVkoODAwcHgpIHJvdGF0ZSgtMTAwZGVnKScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtMjBkZWcpJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uID09PSAnc2xpZGUtb3V0LXRvLXJpZ2h0Jykge1xuICAgICAgICBrZXlGcmFtZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgIC8vICd0cmFuc2xhdGVYKC0xMDAwcHgpIHRyYW5zbGF0ZVkoODAwcHgpIHJvdGF0ZSgtMTAwZGVnKScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgICAgICAndHJhbnNsYXRlWCgxMDAwcHgpIHRyYW5zbGF0ZVkoODAwcHgpIHJvdGF0ZSgxMDBkZWcpJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH1cblxuICAgIGVsZW1lbnQuYW5pbWF0ZShrZXlGcmFtZXMsIHtcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2VpbmcsXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgZGVsYXksXG4gICAgfSlcbn1cblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignJykuc3JjID0gZGVzb2xhdGVGb3Jlc3Rcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWFycm93LWdyZXknKS5zcmMgPSBsZWZ0QXJyb3dHcmV5XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdC1hcnJvdy1ibHVlJykuc3JjID0gbGVmdEFycm93Qmx1ZVxuLy8gZG9jdW1lbnRcbi8vICAgICAucXVlcnlTZWxlY3RvcignI2xlZnQtYXJyb3ctZ3JleScpXG4vLyAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZSkgPT4ge1xuLy8gICAgICAgICBlLnRhcmdldC5zcmMgPSBsZWZ0QXJyb3dCbHVlXG4vLyAgICAgfSlcblxuY29uc3QgaW1hZ2VTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXNsaWRlcicpXG5jb25zdCBsZWZ0QXJyb3dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdC1hcnJvdy1pbWctZGl2JylcbmNvbnN0IHJpZ2h0QXJyb3dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQtYXJyb3ctaW1nLWRpdicpXG5cbi8vIGZ1bmN0aW9uIG5leHQoKSB7XG4vLyAgICAgY29uc3QgbGVmdEltZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWltZy1kaXYnKVxuLy8gICAgIGNvbnN0IGNlbnRlckltZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZW50ZXItaW1nLWRpdicpXG4vLyAgICAgY29uc3QgcmlnaHRJbWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtaW1nLWRpdicpXG5cbi8vICAgICBjb25zdCBuZXdMZWZ0SW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBuZXdMZWZ0SW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2ltZy1kaXYnKVxuLy8gICAgIG5ld0xlZnRJbWdEaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC1pbWctZGl2Jylcbi8vICAgICBuZXdMZWZ0SW1nRGl2LmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWluLWZyb20tcmlnaHQnKVxuLy8gICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKG5ld0xlZnRJbWdEaXYpXG5cbi8vICAgICBsZWZ0SW1nRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQtaW1nLWRpdicpXG4vLyAgICAgbGVmdEltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjZW50ZXItaW1nLWRpdicpXG5cbi8vICAgICBjZW50ZXJJbWdEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY2VudGVyLWltZy1kaXYnKVxuLy8gICAgIGNlbnRlckltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1pbWctZGl2JylcblxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICBpbWFnZVNsaWRlci5yZW1vdmVDaGlsZChyaWdodEltZ0Rpdilcbi8vICAgICB9LCAxMDAwKVxuXG4vLyAgICAgYW5pbWF0ZUVsZW1lbnQoXG4vLyAgICAgICAgIHJpZ2h0SW1nRGl2LFxuLy8gICAgICAgICAnc2xpZGUtb3V0LXRvLXJpZ2h0Jyxcbi8vICAgICAgICAgMTEwMCxcbi8vICAgICAgICAgJ2N1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KScsXG4vLyAgICAgKVxuLy8gfVxuXG5mdW5jdGlvbiBuZXh0KCkge1xuICAgIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxlZnREaXYuY2xhc3NMaXN0LmFkZCgnaW1nLWRpdicpXG4gICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdmcm9tLWludmlzaWJsZS10by1sZWZ0JylcbiAgICBsZWZ0RGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHthaXJwbGFuZX0pYFxuICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGxlZnREaXYpXG5cbiAgICBjb25zdCBjZW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNlbnRlckRpdi5jbGFzc0xpc3QuYWRkKCdpbWctZGl2JylcbiAgICBjZW50ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZnJvbS1sZWZ0LXRvLWNlbnRlcicpXG4gICAgY2VudGVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjaXR5fSlgXG4gICAgaW1hZ2VTbGlkZXIuYXBwZW5kQ2hpbGQoY2VudGVyRGl2KVxuXG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2ltZy1kaXYnKVxuICAgIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2Zyb20tY2VudGVyLXRvLXJpZ2h0JylcbiAgICByaWdodERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJiYW59KWBcbiAgICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChyaWdodERpdilcblxuICAgIGNvbnN0IGRpc2FwcGVhcmluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGlzYXBwZWFyaW5nRGl2LmNsYXNzTGlzdC5hZGQoJ2ltZy1kaXYnKVxuICAgIGRpc2FwcGVhcmluZ0Rpdi5jbGFzc0xpc3QuYWRkKCdmcm9tLXJpZ2h0LXRvLWludmlzaWJsZScpXG4gICAgZGlzYXBwZWFyaW5nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHthaXJwbGFuZX0pYFxuICAgIGRpc2FwcGVhcmluZ0Rpdi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIGRpc2FwcGVhcmluZ0Rpdi5yZW1vdmUoKVxuICAgIH0pXG4gICAgaW1hZ2VTbGlkZXIuYXBwZW5kQ2hpbGQoZGlzYXBwZWFyaW5nRGl2KVxuXG4gICAgcmlnaHRBcnJvd0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGVmdERpdi5yZW1vdmUoKVxuICAgICAgICBjZW50ZXJEaXYucmVtb3ZlKClcbiAgICAgICAgcmlnaHREaXYucmVtb3ZlKClcbiAgICB9KVxufVxuXG5sZWZ0QXJyb3dEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2dyZXlBcnJvd30pYFxucmlnaHRBcnJvd0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Z3JleUFycm93fSlgXG5cbmxlZnRBcnJvd0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIGxlZnRBcnJvd0Rpdi5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2JsdWVBcnJvd30pYFxufSlcblxucmlnaHRBcnJvd0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXh0KClcbn0pXG5cbmxlZnRBcnJvd0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIGxlZnRBcnJvd0Rpdi5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2dyZXlBcnJvd30pYFxufSlcblxucmlnaHRBcnJvd0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIHJpZ2h0QXJyb3dEaXYuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtibHVlQXJyb3d9KWBcbn0pXG5cbnJpZ2h0QXJyb3dEaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICByaWdodEFycm93RGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7Z3JleUFycm93fSlgXG59KVxuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpbWFnZVNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJylcbn0sIDEwMClcblxubmV4dCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=