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
___CSS_LOADER_EXPORT___.push([module.id, "/* ========== START Dark Mode Colors ========== */\n:root {\n    --primary-color: #181a1b;\n    --secondary-color: #2b2f31;\n    --blue: #004daa;\n    --text-color: #d8d4cf;\n    --caption-color: #e8e6e3;\n    --main-font: 'Montserrat', sans-serif;\n    --animation-duration: 1000ms;\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\n\nbody {\n    height: 100vh;\n    width: 100vw;\n\n    overflow-x: hidden;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    background-color: var(--primary-color);\n}\n\n.img-slider {\n    width: 100%;\n    height: 600px;\n\n    position: relative;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    overflow: hidden;\n}\n\n.img-slider.preload * {\n    transition: none !important;\n}\n\nimg {\n    border-radius: 24px;\n}\n\n.img-div {\n    width: 50%;\n    height: 80%;\n\n    position: absolute;\n\n    border: 1px solid white;\n    border-radius: 24px;\n\n    background-size: cover;\n}\n\n/* Next Classes */\n\n.from-invisible-to-left {\n    animation: from-invisible-to-left var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-left-to-center {\n    animation: from-left-to-center var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-center-to-right {\n    animation: from-center-to-right var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-right-to-invisible {\n    animation: from-right-to-invisible var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n/* Next Animations */\n\n@keyframes from-invisible-to-left {\n    0% {\n        /* transform: translateX(-1000px) translateY(800px) rotate(-100deg); */\n        top: 1000px;\n        left: -1000px;\n        transform: rotate(-40deg);\n        opacity: 0;\n    }\n    100% {\n        top: 50%;\n        left: -30%;\n        transform: rotate(-20deg);\n        opacity: 1;\n    }\n}\n\n@keyframes from-left-to-center {\n    0% {\n        top: 50%;\n        left: -30%;\n        transform: rotate(-20deg);\n    }\n    100% {\n        top: 60px;\n        left: 342px;\n        transform: rotate(0);\n    }\n}\n\n@keyframes from-center-to-right {\n    0% {\n        top: 60px;\n        left: 342px;\n        transform: rotate(0);\n    }\n    100% {\n        top: 50%;\n        left: 80%;\n        transform: rotate(20deg);\n    }\n}\n\n@keyframes from-right-to-invisible {\n    0% {\n        top: 50%;\n        left: 80%;\n        transform: rotate(20deg);\n    }\n    100% {\n        top: 2000px;\n        left: 2000px;\n        transform: rotate(40deg);\n    }\n}\n\n.arrow-img-div {\n    height: 50px;\n    width: 50px;\n    z-index: 3;\n    position: absolute;\n    top: 20%;\n    transition: background 400ms, transform 400ms;\n}\n\n#left-arrow-img-div {\n    left: 18%;\n    /* transform: rotate(-30deg); */\n}\n\n#left-arrow-img-div:hover {\n    transform: rotate(-30deg) scale(1.1);\n}\n\n#left-arrow-img-div:active {\n    transform: rotate(-30deg) scale(1.5);\n}\n\n#right-arrow-img-div {\n    right: 18%;\n    transform: rotate(180deg);\n}\n\n#right-arrow-img-div:hover {\n    transform: rotate(210deg) scale(1.1);\n}\n\n#right-arrow-img-div:active {\n    transform: rotate(210deg) scale(1.5);\n}\n\n/* ==================================================================== */\n\n.img-div {\n    transition: transform 1s, top 1s, left 1s;\n}\n\n.right-img-div {\n    background-color: yellow;\n    left: 80%;\n    top: 50%;\n    transform: rotate(20deg);\n    /* background-image: url('../assets/airplane.jpg'); */\n}\n\n.left-img-div {\n    background-color: black;\n\n    left: -30%;\n    top: 50%;\n    transform: rotate(-20deg);\n    /* background-image: url('../assets/city.jpg'); */\n}\n\n.center-img-div {\n    background-color: red;\n    top: 60px;\n    left: 342px;\n    transform: rotate(0);\n    /* background-image: url('../assets/desolate_forest.webp'); */\n}\n\n.meter {\n    position: fixed;\n    width: 100%;\n    height: 3px;\n    background-color: white;\n    z-index: 4;\n}\n\n#meter1 {\n    top: 38%;\n}\n\n#meter2 {\n    top: 50%;\n}\n\n.slide-in-from-right {\n    animation: slide-in-from-right 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n@keyframes rotate-out-2-bl-cw {\n    0% {\n        transform: rotate(0);\n        transform-origin: 0 100%;\n        opacity: 1;\n    }\n    100% {\n        transform: rotate(45deg);\n        transform-origin: 0 100%;\n        opacity: 0;\n    }\n}\n\n@keyframes slide-in-from-right {\n    0% {\n        transform: translateX(-1000px) translateY(800px) rotate(-100deg);\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0) translateY(0) rotate(-20deg);\n        opacity: 1;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA,iDAAiD;AACjD;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;IACrB,wBAAwB;IACxB,qCAAqC;IACrC,4BAA4B;AAChC;;AAEA,+CAA+C;AAC/C;mEACmE;;AAEnE;IACI,aAAa;IACb,YAAY;;IAEZ,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;;IAEvB,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,aAAa;;IAEb,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;;IAEX,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;;IAEnB,sBAAsB;AAC1B;;AAEA,iBAAiB;;AAEjB;IACI;qDACiD;AACrD;;AAEA;IACI;qDACiD;AACrD;;AAEA;IACI;qDACiD;AACrD;;AAEA;IACI;qDACiD;AACrD;;AAEA,oBAAoB;;AAEpB;IACI;QACI,sEAAsE;QACtE,WAAW;QACX,aAAa;QACb,yBAAyB;QACzB,UAAU;IACd;IACA;QACI,QAAQ;QACR,UAAU;QACV,yBAAyB;QACzB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,QAAQ;QACR,UAAU;QACV,yBAAyB;IAC7B;IACA;QACI,SAAS;QACT,WAAW;QACX,oBAAoB;IACxB;AACJ;;AAEA;IACI;QACI,SAAS;QACT,WAAW;QACX,oBAAoB;IACxB;IACA;QACI,QAAQ;QACR,SAAS;QACT,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,QAAQ;QACR,SAAS;QACT,wBAAwB;IAC5B;IACA;QACI,WAAW;QACX,YAAY;QACZ,wBAAwB;IAC5B;AACJ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,6CAA6C;AACjD;;AAEA;IACI,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA,yEAAyE;;AAEzE;IACI,yCAAyC;AAC7C;;AAEA;IACI,wBAAwB;IACxB,SAAS;IACT,QAAQ;IACR,wBAAwB;IACxB,qDAAqD;AACzD;;AAEA;IACI,uBAAuB;;IAEvB,UAAU;IACV,QAAQ;IACR,yBAAyB;IACzB,iDAAiD;AACrD;;AAEA;IACI,qBAAqB;IACrB,SAAS;IACT,WAAW;IACX,oBAAoB;IACpB,6DAA6D;AACjE;;AAEA;IACI,eAAe;IACf,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,wEAAwE;AAC5E;;AAEA;IACI;QACI,oBAAoB;QACpB,wBAAwB;QACxB,UAAU;IACd;IACA;QACI,wBAAwB;QACxB,wBAAwB;QACxB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,gEAAgE;QAChE,UAAU;IACd;IACA;QACI,qDAAqD;QACrD,UAAU;IACd;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');\n\n/* ========== START Dark Mode Colors ========== */\n:root {\n    --primary-color: #181a1b;\n    --secondary-color: #2b2f31;\n    --blue: #004daa;\n    --text-color: #d8d4cf;\n    --caption-color: #e8e6e3;\n    --main-font: 'Montserrat', sans-serif;\n    --animation-duration: 1000ms;\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\n\nbody {\n    height: 100vh;\n    width: 100vw;\n\n    overflow-x: hidden;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    background-color: var(--primary-color);\n}\n\n.img-slider {\n    width: 100%;\n    height: 600px;\n\n    position: relative;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    overflow: hidden;\n}\n\n.img-slider.preload * {\n    transition: none !important;\n}\n\nimg {\n    border-radius: 24px;\n}\n\n.img-div {\n    width: 50%;\n    height: 80%;\n\n    position: absolute;\n\n    border: 1px solid white;\n    border-radius: 24px;\n\n    background-size: cover;\n}\n\n/* Next Classes */\n\n.from-invisible-to-left {\n    animation: from-invisible-to-left var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-left-to-center {\n    animation: from-left-to-center var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-center-to-right {\n    animation: from-center-to-right var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n.from-right-to-invisible {\n    animation: from-right-to-invisible var(--animation-duration)\n        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n}\n\n/* Next Animations */\n\n@keyframes from-invisible-to-left {\n    0% {\n        /* transform: translateX(-1000px) translateY(800px) rotate(-100deg); */\n        top: 1000px;\n        left: -1000px;\n        transform: rotate(-40deg);\n        opacity: 0;\n    }\n    100% {\n        top: 50%;\n        left: -30%;\n        transform: rotate(-20deg);\n        opacity: 1;\n    }\n}\n\n@keyframes from-left-to-center {\n    0% {\n        top: 50%;\n        left: -30%;\n        transform: rotate(-20deg);\n    }\n    100% {\n        top: 60px;\n        left: 342px;\n        transform: rotate(0);\n    }\n}\n\n@keyframes from-center-to-right {\n    0% {\n        top: 60px;\n        left: 342px;\n        transform: rotate(0);\n    }\n    100% {\n        top: 50%;\n        left: 80%;\n        transform: rotate(20deg);\n    }\n}\n\n@keyframes from-right-to-invisible {\n    0% {\n        top: 50%;\n        left: 80%;\n        transform: rotate(20deg);\n    }\n    100% {\n        top: 2000px;\n        left: 2000px;\n        transform: rotate(40deg);\n    }\n}\n\n.arrow-img-div {\n    height: 50px;\n    width: 50px;\n    z-index: 3;\n    position: absolute;\n    top: 20%;\n    transition: background 400ms, transform 400ms;\n}\n\n#left-arrow-img-div {\n    left: 18%;\n    /* transform: rotate(-30deg); */\n}\n\n#left-arrow-img-div:hover {\n    transform: rotate(-30deg) scale(1.1);\n}\n\n#left-arrow-img-div:active {\n    transform: rotate(-30deg) scale(1.5);\n}\n\n#right-arrow-img-div {\n    right: 18%;\n    transform: rotate(180deg);\n}\n\n#right-arrow-img-div:hover {\n    transform: rotate(210deg) scale(1.1);\n}\n\n#right-arrow-img-div:active {\n    transform: rotate(210deg) scale(1.5);\n}\n\n/* ==================================================================== */\n\n.img-div {\n    transition: transform 1s, top 1s, left 1s;\n}\n\n.right-img-div {\n    background-color: yellow;\n    left: 80%;\n    top: 50%;\n    transform: rotate(20deg);\n    /* background-image: url('../assets/airplane.jpg'); */\n}\n\n.left-img-div {\n    background-color: black;\n\n    left: -30%;\n    top: 50%;\n    transform: rotate(-20deg);\n    /* background-image: url('../assets/city.jpg'); */\n}\n\n.center-img-div {\n    background-color: red;\n    top: 60px;\n    left: 342px;\n    transform: rotate(0);\n    /* background-image: url('../assets/desolate_forest.webp'); */\n}\n\n.meter {\n    position: fixed;\n    width: 100%;\n    height: 3px;\n    background-color: white;\n    z-index: 4;\n}\n\n#meter1 {\n    top: 38%;\n}\n\n#meter2 {\n    top: 50%;\n}\n\n.slide-in-from-right {\n    animation: slide-in-from-right 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n@keyframes rotate-out-2-bl-cw {\n    0% {\n        transform: rotate(0);\n        transform-origin: 0 100%;\n        opacity: 1;\n    }\n    100% {\n        transform: rotate(45deg);\n        transform-origin: 0 100%;\n        opacity: 0;\n    }\n}\n\n@keyframes slide-in-from-right {\n    0% {\n        transform: translateX(-1000px) translateY(800px) rotate(-100deg);\n        opacity: 0;\n    }\n    100% {\n        transform: translateX(0) translateY(0) rotate(-20deg);\n        opacity: 1;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/desolate_forest.webp":
/*!*****************************************!*\
  !*** ./src/assets/desolate_forest.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5ef1465eb3ee58bc88c.webp";

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
/* harmony import */ var _assets_desolate_forest_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/desolate_forest.webp */ "./src/assets/desolate_forest.webp");
/* harmony import */ var _assets_city_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/city.jpg */ "./src/assets/city.jpg");
/* harmony import */ var _assets_airplane_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/airplane.jpg */ "./src/assets/airplane.jpg");
/* harmony import */ var _assets_left_arrow_grey_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/left-arrow-grey.png */ "./src/assets/left-arrow-grey.png");
/* harmony import */ var _assets_left_arrow_blue_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/left-arrow-blue.png */ "./src/assets/left-arrow-blue.png");




// import urban from './assets/urban.jpg'





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

const imageSlider = document.querySelector('.img-slider')
const leftArrowDiv = document.querySelector('#left-arrow-img-div')
const rightArrowDiv = document.querySelector('#right-arrow-img-div')

// document.querySelector('.left-img-div').style.backgroundImage = `url(${city})`
// document.querySelector(
//     '.center-img-div',
// ).style.backgroundImage = `url(${airplane})`

const images = [_assets_city_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_airplane_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_desolate_forest_webp__WEBPACK_IMPORTED_MODULE_2__]
let counter = 0

const leftImgDiv = document.querySelector('.left-img-div')
const centerImgDiv = document.querySelector('.center-img-div')
const rightImgDiv = document.querySelector('.right-img-div')

leftImgDiv.style.backgroundImage = `url(${images.at(counter)})`
centerImgDiv.style.backgroundImage = `url(${images.at(counter + 1)})`
rightImgDiv.style.backgroundImage = `url(${images.at(counter + 2)})`

function next() {
    counter += 1

    if (counter === images.length) counter = 0

    const leftImgDiv = document.querySelector('.left-img-div')
    const centerImgDiv = document.querySelector('.center-img-div')
    const rightImgDiv = document.querySelector('.right-img-div')

    const rightDivs = document.querySelectorAll('.right-img-div')
    for (let i = 0; i < rightDivs.length; i += 1) {
        if (i > 0) {
            setTimeout(() => {
                rightDivs[i].remove()
            }, 1000)
        }
    }

    const newLeftImgDiv = document.createElement('div')
    newLeftImgDiv.style.backgroundImage = `url(${images.at(counter)})`
    newLeftImgDiv.classList.add('img-div')
    newLeftImgDiv.classList.add('left-img-div')
    newLeftImgDiv.classList.add('slide-in-from-right')
    imageSlider.appendChild(newLeftImgDiv)

    leftImgDiv.classList.remove('left-img-div')
    leftImgDiv.classList.add('center-img-div')
    // leftImgDiv.style.backgroundImage = `url(${images.at(counter + 2)})`

    centerImgDiv.classList.remove('center-img-div')
    centerImgDiv.classList.add('right-img-div')
    // leftImgDiv.style.backgroundImage = `url(${images.at(counter + 1)})`

    setTimeout(() => {
        rightImgDiv.remove()
    }, 1000)

    animateElement(
        rightImgDiv,
        'slide-out-to-right',
        1100,
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    )
}

// function next() {
//     const leftDiv = document.createElement('div')
//     leftDiv.classList.add('img-div')
//     leftDiv.classList.add('from-invisible-to-left')
//     leftDiv.style.backgroundImage = `url(${airplane})`
//     imageSlider.appendChild(leftDiv)

//     const centerDiv = document.createElement('div')
//     centerDiv.classList.add('img-div')
//     centerDiv.classList.add('from-left-to-center')
//     centerDiv.style.backgroundImage = `url(${city})`
//     imageSlider.appendChild(centerDiv)

//     const rightDiv = document.createElement('div')
//     rightDiv.classList.add('img-div')
//     rightDiv.classList.add('from-center-to-right')
//     rightDiv.style.backgroundImage = `url(${city})`
//     imageSlider.appendChild(rightDiv)

//     const disappearingDiv = document.createElement('div')
//     disappearingDiv.classList.add('img-div')
//     disappearingDiv.classList.add('from-right-to-invisible')
//     disappearingDiv.style.backgroundImage = `url(${airplane})`
//     disappearingDiv.addEventListener('animationend', () => {
//         disappearingDiv.remove()
//     })
//     imageSlider.appendChild(disappearingDiv)

//     rightArrowDiv.addEventListener('click', () => {
//         leftDiv.remove()
//         centerDiv.remove()
//         rightDiv.remove()
//     })
// }

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

})();


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLDRDQUE0QyxtRUFBUyxDQUFDO0FBQ3RELDZDQUE2QyxtRUFBUyxDQUFDOztBQUV2RDtBQUNBLDJDQUEyQyxtRUFBUyxDQUFDO0FBQ3JELENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSwyQ0FBMkMsbUVBQVMsQ0FBQztBQUNyRCxDQUFDOztBQUVEO0FBQ0EsNENBQTRDLG1FQUFTLENBQUM7QUFDdEQsQ0FBQzs7QUFFRDtBQUNBLDRDQUE0QyxtRUFBUyxDQUFDO0FBQ3RELENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvYXNzZXRzL2xlZnQtYXJyb3ctYmx1ZS5wbmciLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9hc3NldHMvbGVmdC1hcnJvdy1ncmV5LnBuZyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0BlbGJhc2VsNjE5L3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT0gU1RBUlQgRGFyayBNb2RlIENvbG9ycyA9PT09PT09PT09ICovXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktY29sb3I6ICMxODFhMWI7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMmIyZjMxO1xcbiAgICAtLWJsdWU6ICMwMDRkYWE7XFxuICAgIC0tdGV4dC1jb2xvcjogI2Q4ZDRjZjtcXG4gICAgLS1jYXB0aW9uLWNvbG9yOiAjZThlNmUzO1xcbiAgICAtLW1haW4tZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICAtLWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IEVORCBEYXJrIE1vZGUgQ29sb3JzID09PT09PT09PT0gKi9cXG4vKiBUbyB1c2UgYmFja2dyb3VuZCBpbWFnZXMgdGhvdXJnaCAgdXJsLCB1c2UgaXQgaW4gSmF2YXNjaXBydCB1c2luZyBcXG5pbXBvcnQgYXNzZXQgc3RhdG1lbnQgYW5kIGUuc3R5bGUuYmFja2dyb3VuZCA9IGAke2ltcG9ydGVkSW1hZ2V9YCAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaW1nLXNsaWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW1nLXNsaWRlci5wcmVsb2FkICoge1xcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbi5pbWctZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIE5leHQgQ2xhc3NlcyAqL1xcblxcbi5mcm9tLWludmlzaWJsZS10by1sZWZ0IHtcXG4gICAgYW5pbWF0aW9uOiBmcm9tLWludmlzaWJsZS10by1sZWZ0IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbilcXG4gICAgICAgIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBmb3J3YXJkcztcXG59XFxuXFxuLmZyb20tbGVmdC10by1jZW50ZXIge1xcbiAgICBhbmltYXRpb246IGZyb20tbGVmdC10by1jZW50ZXIgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKVxcbiAgICAgICAgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGZvcndhcmRzO1xcbn1cXG5cXG4uZnJvbS1jZW50ZXItdG8tcmlnaHQge1xcbiAgICBhbmltYXRpb246IGZyb20tY2VudGVyLXRvLXJpZ2h0IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbilcXG4gICAgICAgIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBmb3J3YXJkcztcXG59XFxuXFxuLmZyb20tcmlnaHQtdG8taW52aXNpYmxlIHtcXG4gICAgYW5pbWF0aW9uOiBmcm9tLXJpZ2h0LXRvLWludmlzaWJsZSB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pXFxuICAgICAgICBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgZm9yd2FyZHM7XFxufVxcblxcbi8qIE5leHQgQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgZnJvbS1pbnZpc2libGUtdG8tbGVmdCB7XFxuICAgIDAlIHtcXG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KSB0cmFuc2xhdGVZKDgwMHB4KSByb3RhdGUoLTEwMGRlZyk7ICovXFxuICAgICAgICB0b3A6IDEwMDBweDtcXG4gICAgICAgIGxlZnQ6IC0xMDAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogLTMwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZnJvbS1sZWZ0LXRvLWNlbnRlciB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogLTMwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDYwcHg7XFxuICAgICAgICBsZWZ0OiAzNDJweDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZnJvbS1jZW50ZXItdG8tcmlnaHQge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDYwcHg7XFxuICAgICAgICBsZWZ0OiAzNDJweDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA4MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmcm9tLXJpZ2h0LXRvLWludmlzaWJsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogODAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAyMDAwcHg7XFxuICAgICAgICBsZWZ0OiAyMDAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxuICAgIH1cXG59XFxuXFxuLmFycm93LWltZy1kaXYge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zLCB0cmFuc2Zvcm0gNDAwbXM7XFxufVxcblxcbiNsZWZ0LWFycm93LWltZy1kaXYge1xcbiAgICBsZWZ0OiAxOCU7XFxuICAgIC8qIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7ICovXFxufVxcblxcbiNsZWZ0LWFycm93LWltZy1kaXY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbiNsZWZ0LWFycm93LWltZy1kaXY6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKSBzY2FsZSgxLjUpO1xcbn1cXG5cXG4jcmlnaHQtYXJyb3ctaW1nLWRpdiB7XFxuICAgIHJpZ2h0OiAxOCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbiNyaWdodC1hcnJvdy1pbWctZGl2OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKSBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jcmlnaHQtYXJyb3ctaW1nLWRpdjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpIHNjYWxlKDEuNSk7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmltZy1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIHRvcCAxcywgbGVmdCAxcztcXG59XFxuXFxuLnJpZ2h0LWltZy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGxlZnQ6IDgwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYWlycGxhbmUuanBnJyk7ICovXFxufVxcblxcbi5sZWZ0LWltZy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgbGVmdDogLTMwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2NpdHkuanBnJyk7ICovXFxufVxcblxcbi5jZW50ZXItaW1nLWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdG9wOiA2MHB4O1xcbiAgICBsZWZ0OiAzNDJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2Rlc29sYXRlX2ZvcmVzdC53ZWJwJyk7ICovXFxufVxcblxcbi5tZXRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuI21ldGVyMSB7XFxuICAgIHRvcDogMzglO1xcbn1cXG5cXG4jbWV0ZXIyIHtcXG4gICAgdG9wOiA1MCU7XFxufVxcblxcbi5zbGlkZS1pbi1mcm9tLXJpZ2h0IHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1mcm9tLXJpZ2h0IDEuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1vdXQtMi1ibC1jdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbi1mcm9tLXJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpIHRyYW5zbGF0ZVkoODAwcHgpIHJvdGF0ZSgtMTAwZGVnKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKSByb3RhdGUoLTIwZGVnKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsaURBQWlEO0FBQ2pEO0lBQ0ksd0JBQXdCO0lBQ3hC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bnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qID09PT09PT09PT0gU1RBUlQgRGFyayBNb2RlIENvbG9ycyA9PT09PT09PT09ICovXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktY29sb3I6ICMxODFhMWI7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMmIyZjMxO1xcbiAgICAtLWJsdWU6ICMwMDRkYWE7XFxuICAgIC0tdGV4dC1jb2xvcjogI2Q4ZDRjZjtcXG4gICAgLS1jYXB0aW9uLWNvbG9yOiAjZThlNmUzO1xcbiAgICAtLW1haW4tZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICAtLWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IEVORCBEYXJrIE1vZGUgQ29sb3JzID09PT09PT09PT0gKi9cXG4vKiBUbyB1c2UgYmFja2dyb3VuZCBpbWFnZXMgdGhvdXJnaCAgdXJsLCB1c2UgaXQgaW4gSmF2YXNjaXBydCB1c2luZyBcXG5pbXBvcnQgYXNzZXQgc3RhdG1lbnQgYW5kIGUuc3R5bGUuYmFja2dyb3VuZCA9IGAke2ltcG9ydGVkSW1hZ2V9YCAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uaW1nLXNsaWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW1nLXNsaWRlci5wcmVsb2FkICoge1xcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbi5pbWctZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIE5leHQgQ2xhc3NlcyAqL1xcblxcbi5mcm9tLWludmlzaWJsZS10by1sZWZ0IHtcXG4gICAgYW5pbWF0aW9uOiBmcm9tLWludmlzaWJsZS10by1sZWZ0IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbilcXG4gICAgICAgIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBmb3J3YXJkcztcXG59XFxuXFxuLmZyb20tbGVmdC10by1jZW50ZXIge1xcbiAgICBhbmltYXRpb246IGZyb20tbGVmdC10by1jZW50ZXIgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKVxcbiAgICAgICAgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGZvcndhcmRzO1xcbn1cXG5cXG4uZnJvbS1jZW50ZXItdG8tcmlnaHQge1xcbiAgICBhbmltYXRpb246IGZyb20tY2VudGVyLXRvLXJpZ2h0IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbilcXG4gICAgICAgIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBmb3J3YXJkcztcXG59XFxuXFxuLmZyb20tcmlnaHQtdG8taW52aXNpYmxlIHtcXG4gICAgYW5pbWF0aW9uOiBmcm9tLXJpZ2h0LXRvLWludmlzaWJsZSB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pXFxuICAgICAgICBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgZm9yd2FyZHM7XFxufVxcblxcbi8qIE5leHQgQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgZnJvbS1pbnZpc2libGUtdG8tbGVmdCB7XFxuICAgIDAlIHtcXG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KSB0cmFuc2xhdGVZKDgwMHB4KSByb3RhdGUoLTEwMGRlZyk7ICovXFxuICAgICAgICB0b3A6IDEwMDBweDtcXG4gICAgICAgIGxlZnQ6IC0xMDAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogLTMwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZnJvbS1sZWZ0LXRvLWNlbnRlciB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogLTMwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDYwcHg7XFxuICAgICAgICBsZWZ0OiAzNDJweDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZnJvbS1jZW50ZXItdG8tcmlnaHQge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDYwcHg7XFxuICAgICAgICBsZWZ0OiAzNDJweDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA4MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmcm9tLXJpZ2h0LXRvLWludmlzaWJsZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogODAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAyMDAwcHg7XFxuICAgICAgICBsZWZ0OiAyMDAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxuICAgIH1cXG59XFxuXFxuLmFycm93LWltZy1kaXYge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zLCB0cmFuc2Zvcm0gNDAwbXM7XFxufVxcblxcbiNsZWZ0LWFycm93LWltZy1kaXYge1xcbiAgICBsZWZ0OiAxOCU7XFxuICAgIC8qIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7ICovXFxufVxcblxcbiNsZWZ0LWFycm93LWltZy1kaXY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpIHNjYWxlKDEuMSk7XFxufVxcblxcbiNsZWZ0LWFycm93LWltZy1kaXY6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKSBzY2FsZSgxLjUpO1xcbn1cXG5cXG4jcmlnaHQtYXJyb3ctaW1nLWRpdiB7XFxuICAgIHJpZ2h0OiAxOCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbiNyaWdodC1hcnJvdy1pbWctZGl2OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKSBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jcmlnaHQtYXJyb3ctaW1nLWRpdjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpIHNjYWxlKDEuNSk7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmltZy1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIHRvcCAxcywgbGVmdCAxcztcXG59XFxuXFxuLnJpZ2h0LWltZy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGxlZnQ6IDgwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYWlycGxhbmUuanBnJyk7ICovXFxufVxcblxcbi5sZWZ0LWltZy1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gICAgbGVmdDogLTMwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2NpdHkuanBnJyk7ICovXFxufVxcblxcbi5jZW50ZXItaW1nLWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdG9wOiA2MHB4O1xcbiAgICBsZWZ0OiAzNDJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2Rlc29sYXRlX2ZvcmVzdC53ZWJwJyk7ICovXFxufVxcblxcbi5tZXRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuI21ldGVyMSB7XFxuICAgIHRvcDogMzglO1xcbn1cXG5cXG4jbWV0ZXIyIHtcXG4gICAgdG9wOiA1MCU7XFxufVxcblxcbi5zbGlkZS1pbi1mcm9tLXJpZ2h0IHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1mcm9tLXJpZ2h0IDEuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1vdXQtMi1ibC1jdyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbi1mcm9tLXJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpIHRyYW5zbGF0ZVkoODAwcHgpIHJvdGF0ZSgtMTAwZGVnKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKSByb3RhdGUoLTIwZGVnKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgLyogY29sb3Itc2NoZW1lOiBkYXJrOyAqL1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7OztJQUdJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOzs7Ozs7Ozs7O0lBVUksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIC8qIGNvbG9yLXNjaGVtZTogZGFyazsgKi9cXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxub2wsXFxudWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ1prbEVRVlJvZ2UzWHdVc1VZUmpIOGU4emt4VUdsUVRaamdiaEh5QkJYUkl2c1NzbFdBZXhFQUl2dTZhVkJIVmYyRVBucUtERVZpV2lROUFTaEpLRmF3bUtYWXFnWTRjU1duZnRab2RTMk9aOU8wV3pxN2t6MHF3YnZKL2pPOC9DNzlsbjU5MzNCY013RE1Nd0RNT29RSUlVTzYvR3pxTDBNTEJMMElOTHNmNU1TTGtDcy93V0hwb1o2MFRwRE9BQUJ6UXlIRjZzNEhiNEtYSm03cmVoZFFhbzh5ei9EQ2ZTMWxTY1NITTIzWXEySm9GNno3SVM0V3A0c1lMYnRKSEc3SGlMUWw0QURkNTFEZGVYb29rbm9TWUw2SytOTkw0Y1BtaWpwb0NJZDEwMHlVSXNjVHYwWkFGdHVHdTFUSS9zV3hON0ZqaGFWbjQzSDRzUFZTRlhZT3NtNGt5TTFLK0pQVWxaRXdLUDh2TmZhdXE5OENxWnlMRzNJM1hMSy9ZekRaMWxkUk41TzlmTnlWUk43VlJlZnlhU1NsbUZGZnZoK2laa2dWVzN0NWFiQU05RW5KblJlMmd1YldlWUxWaFVJcGVYby9FcEN5QXlQWHJqUDJ3QzRJaWxWUnArLzdRczlMYkcrUWNzZ0VJMGtVU29xYk9UVDU4MWtnRFBXU3MvbHh0eTJwc2JnTjZ5NGpldXU3UGo2Nm0rNzlWTUdKUjMxMUtSL1c2ZjFqd3ZxemxoMjhYSHZFNzVPbUJ1bDVJL3hIZkhCNHIybnIwOXdGeHBtZTV5M0tZSHBGSytqLzNWdGk1WXJ1Mzg2bTd0bmdIZWx6NlJDMDc3NFR0VnloWFlodC93cDQ2QmI2NWJQQTE4TEgyaXJ6UmwwOGtxNUFwczA2dHVZM2E4eFViTlUzWUMxaUxYQ3RINHJWQ1RCVlR4enQ2Y1RiY3FaSmJTTzRuU1dwOHJkUFEvRFM5YU1CVmYzbHlzL3dPaXVvQWYzcytKeU0zd1lnWG5heGZLUnk4dUtKRWVvT2hadHNPSnREVyt0OVBsYUh4S1VOM0FJcEFUeldCNHNRekRNQXpETUF3akJMOEFLaituMGxHZlFBZ0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNXRWxFUVZSb2dlM1hQV3NVVVJURzhmOFpEVUtJU0FnSU81WDRBWUt3WkFzN2l4UVJYekJFRVd4M0xyc1NMT3dEVTFnYkZEVHMzQlJDdERMNGdzRllCb1Zva1VId0M1aENKclZGWENRbXh5YUcyV3ppenF6TVpvWDdLOCs5eFhPWXVXZnVnT000anVNNGp1TjBJSGsyQjBGd1JVVG1nQk1pVW1zMEdvc0Y1Y3JOeTdveENJSUpFVmtFZkdCRVZlZUtpNVZmcGthQ0lEaS8yOFJBcXZ5cm1FamQ2ZGhJdFZvZEZaRWxZREJWM2dIdUZKYXFDMzl0cEY2dm4vVTg3eDB3bks2cjZ0MG9pcDRYbWl5blF4dXAxV3FudDdlM2w0RlN1aTRpTTliYUI0VW55K25BcVdXTU9RV3NBT2YyTFQyS29taTY4RlJkYUhzaXhwaEJZSW4ySnA3NnZ0OVg1eUt0NVlrWVl3YUExOERFdm4xdmZOK2ZETU93cnlaVjJsNGpZUmg2U1pJOEEyN3UyN01LakVkUjlLT255WExhYThRWTh4aW9IMkdXYnF5cjZtMXI3YklIWUl5NXgvL1hCTUFaRWJHd2U5aFZWWTgyejcvekFLeTFNMEJmM1oweStpb2lWWURqZnlxKzcwOG5TVEpNKzJILzJHdzJ4eGNXRmpaN21UQ3Z0dkdycXE5RTVHTExKcEdsVXFsMHJaL0hiOHNITVlxaXJhR2hvU2tSK1pDdXErcWxqWTJOSjJFWVpyNzI5MXBic05uWjJhYXFYZ1krcCt1cWVpdEprb2M5UzViVHNZT0tjUnovSEJzYmU2bXFWNEdSMUZLbFhDN3Z4SEg4dmpmeHNqdXdFWUMxdGJYTlNxWHlWbFZ2QUNkVFN4Zks1ZkwzT0k0L0ZSOHZ1NDcvN05WcWRkVHp2QlZhLzBsMlJPUjZvOUY0VVZ5MGZEb2Uzdm41K1MrcWVnbEkzN1U4VmIxZlhLejhNazBoYSsycXFrNEJXNm55b2EvbFVjZzhUcTIxeTZvNkNhd0QzNEJhWWFrY3gzRWN4M0VjcHdpL0FSelNzOUtlOUNLVEFBQUFBRWxGVGtTdVFtQ0NcIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKHR5cGVvZiBpbXBvcnQubWV0YS51cmwgPT09IFwic3RyaW5nXCIpIHNjcmlwdFVybCA9IGltcG9ydC5tZXRhLnVybFxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Nzcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4vY3NzL2luZGV4LmNzcydcbmltcG9ydCBkZXNvbGF0ZUZvcmVzdCBmcm9tICcuL2Fzc2V0cy9kZXNvbGF0ZV9mb3Jlc3Qud2VicCdcbmltcG9ydCBjaXR5IGZyb20gJy4vYXNzZXRzL2NpdHkuanBnJ1xuLy8gaW1wb3J0IHVyYmFuIGZyb20gJy4vYXNzZXRzL3VyYmFuLmpwZydcbmltcG9ydCBhaXJwbGFuZSBmcm9tICcuL2Fzc2V0cy9haXJwbGFuZS5qcGcnXG5cbmltcG9ydCBncmV5QXJyb3cgZnJvbSAnLi9hc3NldHMvbGVmdC1hcnJvdy1ncmV5LnBuZydcbmltcG9ydCBibHVlQXJyb3cgZnJvbSAnLi9hc3NldHMvbGVmdC1hcnJvdy1ibHVlLnBuZydcblxuZnVuY3Rpb24gYW5pbWF0ZUVsZW1lbnQoXG4gICAgZWxlbWVudCxcbiAgICBhbmltYXRpb24sXG4gICAgZHVyYXRpb24sXG4gICAgZWFzZWluZyA9ICdlYXNlLWluLW91dCcsXG4gICAgZGlyZWN0aW9uID0gJ25vcm1hbCcsXG4gICAgZGVsYXkgPSAwLFxuKSB7XG4gICAgbGV0IGtleUZyYW1lcyA9IFtdXG4gICAgaWYgKGFuaW1hdGlvbiA9PT0gJ3NsaWRlLWluLWZyb20tbGVmdCcpIHtcbiAgICAgICAga2V5RnJhbWVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zbGF0ZVgoLTEwMDBweCkgdHJhbnNsYXRlWSg4MDBweCkgcm90YXRlKC0xMDBkZWcpJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCkgcm90YXRlKC0yMGRlZyknLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSBlbHNlIGlmIChhbmltYXRpb24gPT09ICdzbGlkZS1vdXQtdG8tcmlnaHQnKSB7XG4gICAgICAgIGtleUZyYW1lcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06XG4gICAgICAgICAgICAgICAgLy8gJ3RyYW5zbGF0ZVgoLTEwMDBweCkgdHJhbnNsYXRlWSg4MDBweCkgcm90YXRlKC0xMDBkZWcpJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2xhdGVYKDEwMDBweCkgdHJhbnNsYXRlWSg4MDBweCkgcm90YXRlKDEwMGRlZyknLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgZWxlbWVudC5hbmltYXRlKGtleUZyYW1lcywge1xuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzZWluZyxcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBkZWxheSxcbiAgICB9KVxufVxuXG5jb25zdCBpbWFnZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctc2xpZGVyJylcbmNvbnN0IGxlZnRBcnJvd0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWFycm93LWltZy1kaXYnKVxuY29uc3QgcmlnaHRBcnJvd0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodC1hcnJvdy1pbWctZGl2JylcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtaW1nLWRpdicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjaXR5fSlgXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuLy8gICAgICcuY2VudGVyLWltZy1kaXYnLFxuLy8gKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YWlycGxhbmV9KWBcblxuY29uc3QgaW1hZ2VzID0gW2NpdHksIGFpcnBsYW5lLCBkZXNvbGF0ZUZvcmVzdF1cbmxldCBjb3VudGVyID0gMFxuXG5jb25zdCBsZWZ0SW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtaW1nLWRpdicpXG5jb25zdCBjZW50ZXJJbWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VudGVyLWltZy1kaXYnKVxuY29uc3QgcmlnaHRJbWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtaW1nLWRpdicpXG5cbmxlZnRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlcy5hdChjb3VudGVyKX0pYFxuY2VudGVySW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZXMuYXQoY291bnRlciArIDEpfSlgXG5yaWdodEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VzLmF0KGNvdW50ZXIgKyAyKX0pYFxuXG5mdW5jdGlvbiBuZXh0KCkge1xuICAgIGNvdW50ZXIgKz0gMVxuXG4gICAgaWYgKGNvdW50ZXIgPT09IGltYWdlcy5sZW5ndGgpIGNvdW50ZXIgPSAwXG5cbiAgICBjb25zdCBsZWZ0SW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtaW1nLWRpdicpXG4gICAgY29uc3QgY2VudGVySW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbnRlci1pbWctZGl2JylcbiAgICBjb25zdCByaWdodEltZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1pbWctZGl2JylcblxuICAgIGNvbnN0IHJpZ2h0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaWdodC1pbWctZGl2JylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0RGl2cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJpZ2h0RGl2c1tpXS5yZW1vdmUoKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0xlZnRJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5ld0xlZnRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlcy5hdChjb3VudGVyKX0pYFxuICAgIG5ld0xlZnRJbWdEaXYuY2xhc3NMaXN0LmFkZCgnaW1nLWRpdicpXG4gICAgbmV3TGVmdEltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LWltZy1kaXYnKVxuICAgIG5ld0xlZnRJbWdEaXYuY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4tZnJvbS1yaWdodCcpXG4gICAgaW1hZ2VTbGlkZXIuYXBwZW5kQ2hpbGQobmV3TGVmdEltZ0RpdilcblxuICAgIGxlZnRJbWdEaXYuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdC1pbWctZGl2JylcbiAgICBsZWZ0SW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlci1pbWctZGl2JylcbiAgICAvLyBsZWZ0SW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZXMuYXQoY291bnRlciArIDIpfSlgXG5cbiAgICBjZW50ZXJJbWdEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY2VudGVyLWltZy1kaXYnKVxuICAgIGNlbnRlckltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1pbWctZGl2JylcbiAgICAvLyBsZWZ0SW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZXMuYXQoY291bnRlciArIDEpfSlgXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmlnaHRJbWdEaXYucmVtb3ZlKClcbiAgICB9LCAxMDAwKVxuXG4gICAgYW5pbWF0ZUVsZW1lbnQoXG4gICAgICAgIHJpZ2h0SW1nRGl2LFxuICAgICAgICAnc2xpZGUtb3V0LXRvLXJpZ2h0JyxcbiAgICAgICAgMTEwMCxcbiAgICAgICAgJ2N1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KScsXG4gICAgKVxufVxuXG4vLyBmdW5jdGlvbiBuZXh0KCkge1xuLy8gICAgIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGxlZnREaXYuY2xhc3NMaXN0LmFkZCgnaW1nLWRpdicpXG4vLyAgICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdmcm9tLWludmlzaWJsZS10by1sZWZ0Jylcbi8vICAgICBsZWZ0RGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHthaXJwbGFuZX0pYFxuLy8gICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGxlZnREaXYpXG5cbi8vICAgICBjb25zdCBjZW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGNlbnRlckRpdi5jbGFzc0xpc3QuYWRkKCdpbWctZGl2Jylcbi8vICAgICBjZW50ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZnJvbS1sZWZ0LXRvLWNlbnRlcicpXG4vLyAgICAgY2VudGVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjaXR5fSlgXG4vLyAgICAgaW1hZ2VTbGlkZXIuYXBwZW5kQ2hpbGQoY2VudGVyRGl2KVxuXG4vLyAgICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2ltZy1kaXYnKVxuLy8gICAgIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2Zyb20tY2VudGVyLXRvLXJpZ2h0Jylcbi8vICAgICByaWdodERpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2l0eX0pYFxuLy8gICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKHJpZ2h0RGl2KVxuXG4vLyAgICAgY29uc3QgZGlzYXBwZWFyaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBkaXNhcHBlYXJpbmdEaXYuY2xhc3NMaXN0LmFkZCgnaW1nLWRpdicpXG4vLyAgICAgZGlzYXBwZWFyaW5nRGl2LmNsYXNzTGlzdC5hZGQoJ2Zyb20tcmlnaHQtdG8taW52aXNpYmxlJylcbi8vICAgICBkaXNhcHBlYXJpbmdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2FpcnBsYW5lfSlgXG4vLyAgICAgZGlzYXBwZWFyaW5nRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbi8vICAgICAgICAgZGlzYXBwZWFyaW5nRGl2LnJlbW92ZSgpXG4vLyAgICAgfSlcbi8vICAgICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChkaXNhcHBlYXJpbmdEaXYpXG5cbi8vICAgICByaWdodEFycm93RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICBsZWZ0RGl2LnJlbW92ZSgpXG4vLyAgICAgICAgIGNlbnRlckRpdi5yZW1vdmUoKVxuLy8gICAgICAgICByaWdodERpdi5yZW1vdmUoKVxuLy8gICAgIH0pXG4vLyB9XG5cbmxlZnRBcnJvd0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Z3JleUFycm93fSlgXG5yaWdodEFycm93RGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtncmV5QXJyb3d9KWBcblxubGVmdEFycm93RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgbGVmdEFycm93RGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7Ymx1ZUFycm93fSlgXG59KVxuXG5yaWdodEFycm93RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5leHQoKVxufSlcblxubGVmdEFycm93RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgbGVmdEFycm93RGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7Z3JleUFycm93fSlgXG59KVxuXG5yaWdodEFycm93RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgcmlnaHRBcnJvd0Rpdi5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2JsdWVBcnJvd30pYFxufSlcblxucmlnaHRBcnJvd0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIHJpZ2h0QXJyb3dEaXYuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtncmV5QXJyb3d9KWBcbn0pXG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGltYWdlU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZWxvYWQnKVxufSwgMTAwKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9