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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar translations = {};\n\nvar getTranslationId = function getTranslationId(value, language) {\n    if (!translations.hasOwnProperty(language)) {\n        translations[language] = {};\n    }\n    var translationIndex = Object.keys(translations[language]).find(function (x) {\n        return translations[language][x] === value;\n    });\n\n    var hasTranslation = translationIndex !== undefined;\n    var nextKey = Object.keys(translations[language]).length;\n\n    if (hasTranslation) {\n        return translationIndex;\n    }\n\n    translations[language][nextKey] = value;\n\n    return nextKey;\n};\n\nvar replaceNodeValueWithTranslation = function replaceNodeValueWithTranslation(elements, language) {\n    return elements.map(function (e) {\n        var isContainer = e.hasOwnProperty('children');\n\n        e.value = getTranslationId(e.value, language);\n\n        if (isContainer) {\n            e.children = replaceNodeValueWithTranslation(e.children, language);\n        }\n\n        return e;\n    });\n};\n\nvar nodeTranslator = exports.nodeTranslator = function nodeTranslator(elements, language) {\n    elements = replaceNodeValueWithTranslation(elements, language);\n\n    return {\n        elements: elements,\n        translations: translations\n    };\n};\n\nvar translationParser = exports.translationParser = function translationParser(elements, translations, language) {\n    return elements.map(function (e) {\n        var isContainer = e.hasOwnProperty('children');\n\n        e.value = translations[language][e.value];\n\n        if (isContainer) {\n            e.children = translationParser(e.children, translations, language);\n        }\n\n        return e;\n    });\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbm9kZVRyYW5zbGF0b3IuanM/ZGRkMCJdLCJuYW1lcyI6WyJ0cmFuc2xhdGlvbnMiLCJnZXRUcmFuc2xhdGlvbklkIiwidmFsdWUiLCJsYW5ndWFnZSIsImhhc093blByb3BlcnR5IiwidHJhbnNsYXRpb25JbmRleCIsIk9iamVjdCIsImtleXMiLCJmaW5kIiwieCIsImhhc1RyYW5zbGF0aW9uIiwidW5kZWZpbmVkIiwibmV4dEtleSIsImxlbmd0aCIsInJlcGxhY2VOb2RlVmFsdWVXaXRoVHJhbnNsYXRpb24iLCJlbGVtZW50cyIsIm1hcCIsImlzQ29udGFpbmVyIiwiZSIsImNoaWxkcmVuIiwibm9kZVRyYW5zbGF0b3IiLCJ0cmFuc2xhdGlvblBhcnNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJQSxlQUFlLEVBQW5COztBQUVBLElBQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFxQjtBQUMxQyxRQUFHLENBQUNILGFBQWFJLGNBQWIsQ0FBNEJELFFBQTVCLENBQUosRUFBMEM7QUFDdENILHFCQUFhRyxRQUFiLElBQXlCLEVBQXpCO0FBQ0g7QUFDRCxRQUFNRSxtQkFBbUJDLE9BQU9DLElBQVAsQ0FBWVAsYUFBYUcsUUFBYixDQUFaLEVBQW9DSyxJQUFwQyxDQUF5QztBQUFBLGVBQUtSLGFBQWFHLFFBQWIsRUFBdUJNLENBQXZCLE1BQThCUCxLQUFuQztBQUFBLEtBQXpDLENBQXpCOztBQUVBLFFBQU1RLGlCQUFpQkwscUJBQXFCTSxTQUE1QztBQUNBLFFBQU1DLFVBQVVOLE9BQU9DLElBQVAsQ0FBWVAsYUFBYUcsUUFBYixDQUFaLEVBQW9DVSxNQUFwRDs7QUFFQSxRQUFHSCxjQUFILEVBQWtCO0FBQ2QsZUFBT0wsZ0JBQVA7QUFDSDs7QUFHREwsaUJBQWFHLFFBQWIsRUFBdUJTLE9BQXZCLElBQWtDVixLQUFsQzs7QUFFQSxXQUFPVSxPQUFQO0FBQ0gsQ0FqQkQ7O0FBbUJBLElBQU1FLGtDQUFrQyxTQUFsQ0EsK0JBQWtDLENBQUNDLFFBQUQsRUFBV1osUUFBWCxFQUF3QjtBQUM1RCxXQUFPWSxTQUFTQyxHQUFULENBQWEsYUFBSztBQUNyQixZQUFNQyxjQUFjQyxFQUFFZCxjQUFGLENBQWlCLFVBQWpCLENBQXBCOztBQUVBYyxVQUFFaEIsS0FBRixHQUFVRCxpQkFBaUJpQixFQUFFaEIsS0FBbkIsRUFBMEJDLFFBQTFCLENBQVY7O0FBRUEsWUFBR2MsV0FBSCxFQUFlO0FBQ1hDLGNBQUVDLFFBQUYsR0FBYUwsZ0NBQWdDSSxFQUFFQyxRQUFsQyxFQUE0Q2hCLFFBQTVDLENBQWI7QUFDSDs7QUFFRCxlQUFPZSxDQUFQO0FBQ0gsS0FWTSxDQUFQO0FBV0gsQ0FaRDs7QUFjTyxJQUFNRSwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQUNMLFFBQUQsRUFBV1osUUFBWCxFQUF3QjtBQUNsRFksZUFBV0QsZ0NBQWdDQyxRQUFoQyxFQUEwQ1osUUFBMUMsQ0FBWDs7QUFFQSxXQUFPO0FBQ0hZLDBCQURHO0FBRUhmO0FBRkcsS0FBUDtBQUlILENBUE07O0FBU0EsSUFBTXFCLGdEQUFvQixTQUFwQkEsaUJBQW9CLENBQUNOLFFBQUQsRUFBV2YsWUFBWCxFQUF5QkcsUUFBekIsRUFBc0M7QUFDbkUsV0FBT1ksU0FBU0MsR0FBVCxDQUFhLGFBQUs7QUFDckIsWUFBTUMsY0FBY0MsRUFBRWQsY0FBRixDQUFpQixVQUFqQixDQUFwQjs7QUFFQWMsVUFBRWhCLEtBQUYsR0FBVUYsYUFBYUcsUUFBYixFQUF1QmUsRUFBRWhCLEtBQXpCLENBQVY7O0FBRUEsWUFBR2UsV0FBSCxFQUFlO0FBQ1hDLGNBQUVDLFFBQUYsR0FBYUUsa0JBQWtCSCxFQUFFQyxRQUFwQixFQUE4Qm5CLFlBQTlCLEVBQTRDRyxRQUE1QyxDQUFiO0FBQ0g7O0FBRUQsZUFBT2UsQ0FBUDtBQUNILEtBVk0sQ0FBUDtBQVdILENBWk0iLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB0cmFuc2xhdGlvbnMgPSB7fTtcblxuY29uc3QgZ2V0VHJhbnNsYXRpb25JZCA9ICh2YWx1ZSwgbGFuZ3VhZ2UpID0+IHtcbiAgICBpZighdHJhbnNsYXRpb25zLmhhc093blByb3BlcnR5KGxhbmd1YWdlKSl7XG4gICAgICAgIHRyYW5zbGF0aW9uc1tsYW5ndWFnZV0gPSB7fTtcbiAgICB9XG4gICAgY29uc3QgdHJhbnNsYXRpb25JbmRleCA9IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uc1tsYW5ndWFnZV0pLmZpbmQoeCA9PiB0cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdW3hdID09PSB2YWx1ZSk7XG5cbiAgICBjb25zdCBoYXNUcmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uSW5kZXggIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXh0S2V5ID0gT2JqZWN0LmtleXModHJhbnNsYXRpb25zW2xhbmd1YWdlXSkubGVuZ3RoO1xuXG4gICAgaWYoaGFzVHJhbnNsYXRpb24pe1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25JbmRleDtcbiAgICB9XG5cblxuICAgIHRyYW5zbGF0aW9uc1tsYW5ndWFnZV1bbmV4dEtleV0gPSB2YWx1ZTtcblxuICAgIHJldHVybiBuZXh0S2V5O1xufTtcblxuY29uc3QgcmVwbGFjZU5vZGVWYWx1ZVdpdGhUcmFuc2xhdGlvbiA9IChlbGVtZW50cywgbGFuZ3VhZ2UpID0+IHtcbiAgICByZXR1cm4gZWxlbWVudHMubWFwKGUgPT4ge1xuICAgICAgICBjb25zdCBpc0NvbnRhaW5lciA9IGUuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJyk7XG5cbiAgICAgICAgZS52YWx1ZSA9IGdldFRyYW5zbGF0aW9uSWQoZS52YWx1ZSwgbGFuZ3VhZ2UpO1xuXG4gICAgICAgIGlmKGlzQ29udGFpbmVyKXtcbiAgICAgICAgICAgIGUuY2hpbGRyZW4gPSByZXBsYWNlTm9kZVZhbHVlV2l0aFRyYW5zbGF0aW9uKGUuY2hpbGRyZW4sIGxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG5vZGVUcmFuc2xhdG9yID0gKGVsZW1lbnRzLCBsYW5ndWFnZSkgPT4ge1xuICAgIGVsZW1lbnRzID0gcmVwbGFjZU5vZGVWYWx1ZVdpdGhUcmFuc2xhdGlvbihlbGVtZW50cywgbGFuZ3VhZ2UpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIHRyYW5zbGF0aW9uc1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRpb25QYXJzZXIgPSAoZWxlbWVudHMsIHRyYW5zbGF0aW9ucywgbGFuZ3VhZ2UpID0+IHtcbiAgICByZXR1cm4gZWxlbWVudHMubWFwKGUgPT4ge1xuICAgICAgICBjb25zdCBpc0NvbnRhaW5lciA9IGUuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJyk7XG5cbiAgICAgICAgZS52YWx1ZSA9IHRyYW5zbGF0aW9uc1tsYW5ndWFnZV1bZS52YWx1ZV07XG5cbiAgICAgICAgaWYoaXNDb250YWluZXIpe1xuICAgICAgICAgICAgZS5jaGlsZHJlbiA9IHRyYW5zbGF0aW9uUGFyc2VyKGUuY2hpbGRyZW4sIHRyYW5zbGF0aW9ucywgbGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbm9kZVRyYW5zbGF0b3IuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _nodeTranslator2 = __webpack_require__(2);\n\nvar loadSampleButton = document.querySelector('.editor__actions--sample');\nvar translateJsonButton = document.querySelector('.editor__actions--translate');\nvar languageInput = document.querySelector('.form__input--language');\nvar setLanguageButton = document.querySelector('.editor__actions--set-language');\n\nvar EDITOR_PANELS = {\n    JSON_PANEL: document.querySelector('.editor__input--json'),\n    TRANSLATION_PANEL: document.querySelector('.editor__input--translations'),\n    PREVIEW_PANEL: document.querySelector('.editor__input--preview')\n};\n\nvar loadExampleData = function loadExampleData() {\n    var json = [{ type: 'div', value: 'Hello World', attributes: { hello: 'world', src: 'test' }, children: [{ type: 'h1', value: 'test' }, { type: 'p', value: 'hello world', children: [{ type: 'h1', value: 'hello' }] }]\n    }];\n\n    setJsonPanelContent(json);\n};\n\nvar getJsonPanelContent = function getJsonPanelContent() {\n    return JSON.parse(EDITOR_PANELS.JSON_PANEL.value);\n};\n\nvar translateJson = function translateJson() {\n    var _nodeTranslator = (0, _nodeTranslator2.nodeTranslator)(getJsonPanelContent(), getLanguage()),\n        elements = _nodeTranslator.elements,\n        translations = _nodeTranslator.translations;\n\n    setJsonPanelContent(elements);\n\n    setTranslationPanelContent(translations);\n\n    setPreviewPanelContent((0, _nodeTranslator2.translationParser)(elements, translations, getLanguage()));\n};\n\nloadSampleButton.onclick = loadExampleData;\ntranslateJsonButton.onclick = translateJson;\nsetLanguageButton.onclick = function () {\n    var translations = getTranslationPanelContent();\n\n    setPreviewPanelContent((0, _nodeTranslator2.translationParser)(getJsonPanelContent(), translations, getLanguage()));\n};\n\nEDITOR_PANELS.TRANSLATION_PANEL.oninput = function () {\n    var translations = getTranslationPanelContent();\n\n    setPreviewPanelContent((0, _nodeTranslator2.translationParser)(getJsonPanelContent(), translations, getLanguage()));\n};\n\nEDITOR_PANELS.JSON_PANEL.oninput = function () {\n    var translations = getTranslationPanelContent();\n    var elements = getJsonPanelContent();\n\n    setPreviewPanelContent((0, _nodeTranslator2.translationParser)(elements, translations, getLanguage()));\n};\n\nvar getLanguage = function getLanguage() {\n    return languageInput.value;\n};\n\nvar setJsonPanelContent = function setJsonPanelContent(json) {\n    EDITOR_PANELS.JSON_PANEL.value = JSON.stringify(json, null, 2);\n};\n\nvar getTranslationPanelContent = function getTranslationPanelContent() {\n    return JSON.parse(EDITOR_PANELS.TRANSLATION_PANEL.value);\n};\nvar setTranslationPanelContent = function setTranslationPanelContent(json) {\n    EDITOR_PANELS.TRANSLATION_PANEL.value = JSON.stringify(json, null, 2);\n};\n\nvar setPreviewPanelContent = function setPreviewPanelContent(json) {\n    EDITOR_PANELS.PREVIEW_PANEL.value = JSON.stringify(json, null, 2);\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby90cmFuc2xhdGlvbi5qcz9iNWU3Il0sIm5hbWVzIjpbImxvYWRTYW1wbGVCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmFuc2xhdGVKc29uQnV0dG9uIiwibGFuZ3VhZ2VJbnB1dCIsInNldExhbmd1YWdlQnV0dG9uIiwiRURJVE9SX1BBTkVMUyIsIkpTT05fUEFORUwiLCJUUkFOU0xBVElPTl9QQU5FTCIsIlBSRVZJRVdfUEFORUwiLCJsb2FkRXhhbXBsZURhdGEiLCJqc29uIiwidHlwZSIsInZhbHVlIiwiYXR0cmlidXRlcyIsImhlbGxvIiwic3JjIiwiY2hpbGRyZW4iLCJzZXRKc29uUGFuZWxDb250ZW50IiwiZ2V0SnNvblBhbmVsQ29udGVudCIsIkpTT04iLCJwYXJzZSIsInRyYW5zbGF0ZUpzb24iLCJnZXRMYW5ndWFnZSIsImVsZW1lbnRzIiwidHJhbnNsYXRpb25zIiwic2V0VHJhbnNsYXRpb25QYW5lbENvbnRlbnQiLCJzZXRQcmV2aWV3UGFuZWxDb250ZW50Iiwib25jbGljayIsImdldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50Iiwib25pbnB1dCIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUJDLFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXpCO0FBQ0EsSUFBTUMsc0JBQXNCRixTQUFTQyxhQUFULENBQXVCLDZCQUF2QixDQUE1QjtBQUNBLElBQU1FLGdCQUFpQkgsU0FBU0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBdkI7QUFDQSxJQUFNRyxvQkFBb0JKLFNBQVNDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQTFCOztBQUVBLElBQU1JLGdCQUFnQjtBQUNsQkMsZ0JBQVlOLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBRE07QUFFbEJNLHVCQUFtQlAsU0FBU0MsYUFBVCxDQUF1Qiw4QkFBdkIsQ0FGRDtBQUdsQk8sbUJBQWVSLFNBQVNDLGFB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ZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFwQztBQUNILENBRkQiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vZGVUcmFuc2xhdG9yLCB0cmFuc2xhdGlvblBhcnNlciB9IGZyb20gJy4uL25vZGVUcmFuc2xhdG9yJztcblxuY29uc3QgbG9hZFNhbXBsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX2FjdGlvbnMtLXNhbXBsZScpO1xuY29uc3QgdHJhbnNsYXRlSnNvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX2FjdGlvbnMtLXRyYW5zbGF0ZScpO1xuY29uc3QgbGFuZ3VhZ2VJbnB1dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faW5wdXQtLWxhbmd1YWdlJyk7XG5jb25zdCBzZXRMYW5ndWFnZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX2FjdGlvbnMtLXNldC1sYW5ndWFnZScpO1xuXG5jb25zdCBFRElUT1JfUEFORUxTID0ge1xuICAgIEpTT05fUEFORUw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX2lucHV0LS1qc29uJyksXG4gICAgVFJBTlNMQVRJT05fUEFORUw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX2lucHV0LS10cmFuc2xhdGlvbnMnKSxcbiAgICBQUkVWSUVXX1BBTkVMOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19pbnB1dC0tcHJldmlldycpXG59O1xuXG5cbmNvbnN0IGxvYWRFeGFtcGxlRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBqc29uID0gW1xuICAgICAgICB7dHlwZTogJ2RpdicsIHZhbHVlOiAnSGVsbG8gV29ybGQnLCBhdHRyaWJ1dGVzOiB7aGVsbG86ICd3b3JsZCcsIHNyYzogJ3Rlc3QnfSwgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHt0eXBlOiAnaDEnLCB2YWx1ZTogJ3Rlc3QnfSxcbiAgICAgICAgICAgIHt0eXBlOiAncCcsIHZhbHVlOiAnaGVsbG8gd29ybGQnLCBjaGlsZHJlbjogW3t0eXBlOiAnaDEnLCB2YWx1ZTogJ2hlbGxvJ31dfV1cbiAgICAgICAgfVxuICAgIF07XG5cblxuICAgIHNldEpzb25QYW5lbENvbnRlbnQoanNvbik7XG59O1xuXG5jb25zdCBnZXRKc29uUGFuZWxDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEVESVRPUl9QQU5FTFMuSlNPTl9QQU5FTC52YWx1ZSk7XG59O1xuXG5cbmNvbnN0IHRyYW5zbGF0ZUpzb24gPSAoKSA9PiB7XG4gICAgY29uc3Qge2VsZW1lbnRzLCB0cmFuc2xhdGlvbnN9ID0gbm9kZVRyYW5zbGF0b3IoZ2V0SnNvblBhbmVsQ29udGVudCgpLCBnZXRMYW5ndWFnZSgpKTtcblxuICAgIHNldEpzb25QYW5lbENvbnRlbnQoZWxlbWVudHMpO1xuXG4gICAgc2V0VHJhbnNsYXRpb25QYW5lbENvbnRlbnQodHJhbnNsYXRpb25zKTtcblxuICAgIHNldFByZXZpZXdQYW5lbENvbnRlbnQodHJhbnNsYXRpb25QYXJzZXIoZWxlbWVudHMsIHRyYW5zbGF0aW9ucywgZ2V0TGFuZ3VhZ2UoKSkpO1xufTtcblxubG9hZFNhbXBsZUJ1dHRvbi5vbmNsaWNrID0gbG9hZEV4YW1wbGVEYXRhO1xudHJhbnNsYXRlSnNvbkJ1dHRvbi5vbmNsaWNrID0gdHJhbnNsYXRlSnNvbjtcbnNldExhbmd1YWdlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gZ2V0VHJhbnNsYXRpb25QYW5lbENvbnRlbnQoKTtcblxuICAgIHNldFByZXZpZXdQYW5lbENvbnRlbnQodHJhbnNsYXRpb25QYXJzZXIoZ2V0SnNvblBhbmVsQ29udGVudCgpLCB0cmFuc2xhdGlvbnMsIGdldExhbmd1YWdlKCkpKTtcbn07XG5cbkVESVRPUl9QQU5FTFMuVFJBTlNMQVRJT05fUEFORUwub25pbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBnZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCgpO1xuXG4gICAgc2V0UHJldmlld1BhbmVsQ29udGVudCh0cmFuc2xhdGlvblBhcnNlcihnZXRKc29uUGFuZWxDb250ZW50KCksIHRyYW5zbGF0aW9ucywgZ2V0TGFuZ3VhZ2UoKSkpO1xuXG59O1xuXG5FRElUT1JfUEFORUxTLkpTT05fUEFORUwub25pbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBnZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCgpO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0SnNvblBhbmVsQ29udGVudCgpO1xuXG4gICAgc2V0UHJldmlld1BhbmVsQ29udGVudCh0cmFuc2xhdGlvblBhcnNlcihlbGVtZW50cywgdHJhbnNsYXRpb25zLCBnZXRMYW5ndWFnZSgpKSk7XG59O1xuXG5jb25zdCBnZXRMYW5ndWFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbGFuZ3VhZ2VJbnB1dC52YWx1ZTtcbn07XG5cbmNvbnN0IHNldEpzb25QYW5lbENvbnRlbnQgPSBqc29uID0+IHtcbiAgICBFRElUT1JfUEFORUxTLkpTT05fUEFORUwudmFsdWUgPSAgSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMik7XG59O1xuXG5jb25zdCBnZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShFRElUT1JfUEFORUxTLlRSQU5TTEFUSU9OX1BBTkVMLnZhbHVlKTtcbn07XG5jb25zdCBzZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCA9IGpzb24gPT4ge1xuICAgIEVESVRPUl9QQU5FTFMuVFJBTlNMQVRJT05fUEFORUwudmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKTtcbn07XG5cbmNvbnN0IHNldFByZXZpZXdQYW5lbENvbnRlbnQgPSBqc29uID0+IHtcbiAgICBFRElUT1JfUEFORUxTLlBSRVZJRVdfUEFORUwudmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlbW8vdHJhbnNsYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);