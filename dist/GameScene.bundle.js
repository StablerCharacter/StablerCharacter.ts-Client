/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StablerCharacterts"] = factory();
	else
		root["StablerCharacterts"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classicEngine/GameScene.ts":
/*!****************************************!*\
  !*** ./src/classicEngine/GameScene.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameScene\": () => (/* binding */ GameScene)\n/* harmony export */ });\nclass GameScene {\n    constructor(options = {}) {\n        this.onStoryEnd = options.onStoryEnd;\n    }\n    nextDialog() {\n        const dialog = this.storyManager.nextDialog();\n        if (dialog == undefined) {\n            this.onStoryEnd();\n            return;\n        }\n        this.dialog.innerHTML = dialog.content;\n        dialog.events.forEach(event => event.invoke());\n    }\n    render(game, storyManager) {\n        game.style.height = \"97.655vh\";\n        this.storyManager = storyManager;\n        this.dialog = document.createElement(\"p\");\n        this.dialog.id = \"dialog\";\n        this.dialog.innerHTML = storyManager.getCurrentDialog().content;\n        game.appendChild(this.dialog);\n        const continueButton = document.createElement(\"button\");\n        continueButton.id = \"continue\";\n        continueButton.innerText = \"Continue\";\n        continueButton.addEventListener(\"click\", () => {\n            this.nextDialog();\n        });\n        game.appendChild(continueButton);\n    }\n}\n\n\n//# sourceURL=webpack://StablerCharacterts/./src/classicEngine/GameScene.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/classicEngine/GameScene.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	__webpack_exports__ = __webpack_exports__["default"].subModule;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});