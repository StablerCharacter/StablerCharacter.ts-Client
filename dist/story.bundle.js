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

/***/ "./src/story.ts":
/*!**********************!*\
  !*** ./src/story.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dialog\": () => (/* binding */ Dialog),\n/* harmony export */   \"Branch\": () => (/* binding */ Branch),\n/* harmony export */   \"Chapter\": () => (/* binding */ Chapter),\n/* harmony export */   \"StoryManager\": () => (/* binding */ StoryManager),\n/* harmony export */   \"GameManager\": () => (/* binding */ GameManager)\n/* harmony export */ });\nclass Dialog {\n    constructor(content, ...events) {\n        this.content = content;\n        this.events = events;\n    }\n}\nclass Branch {\n    constructor(...dialogs) {\n        this.dialogIndex = 0;\n        this.dialogs = dialogs;\n    }\n    getCurrentDialog() {\n        return this.dialogs[this.dialogIndex];\n    }\n    nextDialog() {\n        if (++this.dialogIndex >= this.dialogs.length) {\n            return undefined;\n        }\n        return this.dialogs[this.dialogIndex];\n    }\n    addDialog(dialog) {\n        this.dialogs.push(dialog);\n    }\n}\nclass Chapter {\n    constructor(name, branches = {}, entryBranchName = \"main\") {\n        this.name = name;\n        this.branches = branches;\n        this.entryBranchName = entryBranchName;\n    }\n    getCurrentDialog() {\n        return this.branches[this.entryBranchName].getCurrentDialog();\n    }\n    nextDialog() {\n        return this.branches[this.entryBranchName].nextDialog();\n    }\n    addBranch(branchName, branch) {\n        this.branches[branchName] = branch;\n    }\n}\nclass StoryManager {\n    constructor(...chapters) {\n        this.chapterIndex = 0;\n        this.chapters = chapters;\n    }\n    addChapter(chapter) {\n        this.chapters.push(chapter);\n    }\n    setChapters(...chapters) {\n        this.chapters = chapters;\n    }\n    getCurrentDialog() {\n        return this.chapters[this.chapterIndex].getCurrentDialog();\n    }\n    nextDialog() {\n        return this.chapters[this.chapterIndex].nextDialog();\n    }\n}\nclass GameManager {\n    constructor(storyManager, ...scenes) {\n        this.storyManager = storyManager;\n        this.scenes = scenes;\n    }\n}\n\n\n//# sourceURL=webpack://StablerCharacterts/./src/story.ts?");

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
/******/ 	__webpack_modules__["./src/story.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	__webpack_exports__ = __webpack_exports__["default"].subModule;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});