/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_hero.js":
/*!*************************!*\
  !*** ./src/js/_hero.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
gsap.timeline().to(".hero__descr", {
  opacity: 1,
  duration: 0.5,
  ease: "power2.out"
}).to(".hero__descr", {
  y: 0,
  duration: 1,
  ease: "power4.out",
  force3D: true
}).to(".hero__content", {
  opacity: 1,
  duration: 0.8,
  ease: "power2.out"
}, "-=0.5").to(".hero__content", {
  y: 0,
  duration: 1,
  ease: "power4.out"
}, "-=0.7").to(".hero__img", {
  opacity: 1,
  duration: 1,
  ease: "power2.out"
}, "-=0.7").to(".hero__img", {
  scale: 1,
  duration: 1.2,
  ease: "power4.out"
}, "-=0.8");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hero.js */ "./src/js/_hero.js");
// import './_components.js';

/******/ })()
;
//# sourceMappingURL=main.js.map