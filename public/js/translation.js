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
eval("\n\nvar _nodeTranslator2 = __webpack_require__(2);\n\nvar loadSampleButton = document.querySelector('.editor__actions--sample');\nvar translateJsonButton = document.querySelector('.editor__actions--translate');\n\nvar language = 'en';\n\nvar EDITOR_PANELS = {\n    JSON_PANEL: document.querySelector('.editor__input--json'),\n    TRANSLATION_PANEL: document.querySelector('.editor__input--translations'),\n    PREVIEW_PANEL: document.querySelector('.editor__input--preview')\n};\n\nvar loadExampleData = function loadExampleData() {\n    var json = [{ type: 'div', value: 'Hello World', attributes: { hello: 'world', src: 'test' }, children: [{ type: 'h1', value: 'test' }, { type: 'p', value: 'hello world', children: [{ type: 'h1', value: 'hello' }] }]\n    }];\n\n    setJsonPanelContent(json);\n};\n\nvar getJsonPanelContent = function getJsonPanelContent() {\n    return JSON.parse(EDITOR_PANELS.JSON_PANEL.value);\n};\n\nvar translateJson = function translateJson() {\n    var _nodeTranslator = (0, _nodeTranslator2.nodeTranslator)(getJsonPanelContent(), language),\n        elements = _nodeTranslator.elements,\n        translations = _nodeTranslator.translations;\n\n    setJsonPanelContent(elements);\n\n    setTranslationPanelContent(translations);\n\n    setPreviewPanelContent((0, _nodeTranslator2.translationParser)(elements, translations, language));\n};\n\nloadSampleButton.onclick = loadExampleData;\ntranslateJsonButton.onclick = translateJson;\n\nEDITOR_PANELS.TRANSLATION_PANEL.oninput = function () {\n    var translations = getTranslationPanelContent();\n\n    setPreviewPanelContent((0, _nodeTranslator2.translationParser)(getJsonPanelContent(), translations, language));\n};\n\nEDITOR_PANELS.JSON_PANEL.oninput = function () {\n    var translations = getTranslationPanelContent();\n    var elements = getJsonPanelContent();\n\n    setPreviewPanelContent((0, _nodeTranslator2.translationParser)(elements, translations, language));\n};\n\nvar setJsonPanelContent = function setJsonPanelContent(json) {\n    EDITOR_PANELS.JSON_PANEL.value = JSON.stringify(json, null, 2);\n};\n\nvar getTranslationPanelContent = function getTranslationPanelContent() {\n    return JSON.parse(EDITOR_PANELS.TRANSLATION_PANEL.value);\n};\nvar setTranslationPanelContent = function setTranslationPanelContent(json) {\n    EDITOR_PANELS.TRANSLATION_PANEL.value = JSON.stringify(json, null, 2);\n};\n\nvar setPreviewPanelContent = function setPreviewPanelContent(json) {\n    EDITOR_PANELS.PREVIEW_PANEL.value = JSON.stringify(json, null, 2);\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby90cmFuc2xhdGlvbi5qcz9iNWU3Il0sIm5hbWVzIjpbImxvYWRTYW1wbGVCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmFuc2xhdGVKc29uQnV0dG9uIiwibGFuZ3VhZ2UiLCJFRElUT1JfUEFORUxTIiwiSlNPTl9QQU5FTCIsIlRSQU5TTEFUSU9OX1BBTkVMIiwiUFJFVklFV19QQU5FTCIsImxvYWRFeGFtcGxlRGF0YSIsImpzb24iLCJ0eXBlIiwidmFsdWUiLCJhdHRyaWJ1dGVzIiwiaGVsbG8iLCJzcmMiLCJjaGlsZHJlbiIsInNldEpzb25QYW5lbENvbnRlbnQiLCJnZXRKc29uUGFuZWxDb250ZW50IiwiSlNPTiIsInBhcnNlIiwidHJhbnNsYXRlSnNvbiIsImVsZW1lbnRzIiwidHJhbnNsYXRpb25zIiwic2V0VHJhbnNsYXRpb25QYW5lbENvbnRlbnQiLCJzZXRQcmV2aWV3UGFuZWxDb250ZW50Iiwib25jbGljayIsIm9uaW5wdXQiLCJnZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUJDLFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXpCO0FBQ0EsSUFBTUMsc0JBQXNCRixTQUFTQyxhQUFULENBQXVCLDZCQUF2QixDQUE1Qjs7QUFFQSxJQUFJRSxXQUFXLElBQWY7O0FBRUEsSUFBTUMsZ0JBQWdCO0FBQ2xCQyxnQkFBWUwsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FETTtBQUVsQkssdUJBQW1CTixTQUFTQyxhQUFULENBQXVCLDhCQUF2QixDQUZEO0FBR2xCTSxtQkFBZVAsU0FBU0MsYUFBVCxDQUF1Qix5QkFBdkI7QUFIRyxDQUF0Qjs7QUFPQSxJQUFNTyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDMUIsUUFBTUMsT0FBTyxDQUNULEVBQUNDLE1BQU0sS0FBUCxFQUFjQyxPQUFPLGFBQXJCLEVBQW9DQyxZQUFZLEVBQUNDLE9BQU8sT0FBUixFQUFpQkMsS0FBSyxNQUF0QixFQUFoRCxFQUErRUMsVUFBVSxDQUNyRixFQUFDTCxNQUFNLElBQVAsRUFBYUMsT0FBTyxNQUFwQixFQURxRixFQUVyRixFQUFDRCxNQUFNLEdBQVAsRUFBWUMsT0FBTyxhQUFuQixFQUFrQ0ksVUFBVSxDQUFDLEVBQUNMLE1BQU0sSUFBUCxFQUFhQyxPQUFPLE9BQXBCLEVBQUQsQ0FBNUMsRUFGcUY7QUFBekYsS0FEUyxDQUFiOztBQVFBSyx3QkFBb0JQLElBQXBCO0FBQ0gsQ0FWRDs7QUFZQSxJQUFNUSxzQkFBc0IsU0FBdEJBLG1CQUFzQixHQUFNO0FBQzlCLFdBQU9DLEtBQUtDLEtBQUwsQ0FBV2YsY0FBY0MsVUFBZCxDQUF5Qk0sS0FBcEMsQ0FBUDtBQUNILENBRkQ7O0FBS0EsSUFBTVMsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFNO0FBQUEsMEJBQ1MscUNBQWVILHFCQUFmLEVBQXNDZCxRQUF0QyxDQURUO0FBQUEsUUFDakJrQixRQURpQixtQkFDakJBLFFBRGlCO0FBQUEsUUFDUEMsWUFETyxtQkFDUEEsWUFETzs7QUFHeEJOLHdCQUFvQkssUUFBcEI7O0FBRUFFLCtCQUEyQkQsWUFBM0I7O0FBRUFFLDJCQUF1Qix3Q0FBa0JILFFBQWxCLEVBQTRCQyxZQUE1QixFQUEwQ25CLFFBQTFDLENBQXZCO0FBQ0gsQ0FSRDs7QUFVQUosaUJBQWlCMEIsT0FBakIsR0FBMkJqQixlQUEzQjtBQUNBTixvQkFBb0J1QixPQUFwQixHQUE4QkwsYUFBOUI7O0FBRUFoQixjQUFjRSxpQkFBZCxDQUFnQ29CLE9BQWhDLEdBQTBDLFlBQU07QUFDNUMsUUFBTUosZUFBZUssNEJBQXJCOztBQUVBSCwyQkFBdUIsd0NBQWtCUCxxQkFBbEIsRUFBeUNLLFlBQXpDLEVBQXVEbkIsUUFBdkQsQ0FBdkI7QUFFSCxDQUxEOztBQU9BQyxjQUFjQyxVQUFkLENBQXlCcUIsT0FBekIsR0FBbUMsWUFBTTtBQUNyQyxRQUFNSixlQUFlSyw0QkFBckI7QUFDQSxRQUFNTixXQUFXSixxQkFBakI7O0FBRUFPLDJCQUF1Qix3Q0FBa0JILFFBQWxCLEVBQTRCQyxZQUE1QixFQUEwQ25CLFFBQTFDLENBQXZCO0FBQ0gsQ0FMRDs7QUFRQSxJQUFNYSxzQkFBc0IsU0FBdEJBLG1CQUFzQixPQUFRO0FBQ2hDWixrQkFBY0MsVUFBZCxDQUF5Qk0sS0FBekIsR0FBa0NPLEtBQUtVLFNBQUwsQ0FBZW5CLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FBbEM7QUFDSCxDQUZEOztBQUlBLElBQU1rQiw2QkFBNkIsU0FBN0JBLDBCQUE2QixHQUFNO0FBQ3JDLFdBQU9ULEtBQUtDLEtBQUwsQ0FBV2YsY0FBY0UsaUJBQWQsQ0FBZ0NLLEtBQTNDLENBQVA7QUFDSCxDQUZEO0FBR0EsSUFBTVksNkJBQTZCLFNBQTdCQSwwQkFBNkIsT0FBUTtBQUN2Q25CLGtCQUFjRSxpQkFBZCxDQUFnQ0ssS0FBaEMsR0FBd0NPLEtBQUtVLFNBQUwsQ0FBZW5CLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FBeEM7QUFDSCxDQUZEOztBQUlBLElBQU1lLHlCQUF5QixTQUF6QkEsc0JBQXlCLE9BQVE7QUFDbkNwQixrQkFBY0csYUFBZCxDQUE0QkksS0FBNUIsR0FBb0NPLEtBQUtVLFNBQUwsQ0FBZW5CLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FBcEM7QUFDSCxDQUZEIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub2RlVHJhbnNsYXRvciwgdHJhbnNsYXRpb25QYXJzZXIgfSBmcm9tICcuLi9ub2RlVHJhbnNsYXRvcic7XG5cbmNvbnN0IGxvYWRTYW1wbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19hY3Rpb25zLS1zYW1wbGUnKTtcbmNvbnN0IHRyYW5zbGF0ZUpzb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19hY3Rpb25zLS10cmFuc2xhdGUnKTtcblxubGV0IGxhbmd1YWdlID0gJ2VuJztcblxuY29uc3QgRURJVE9SX1BBTkVMUyA9IHtcbiAgICBKU09OX1BBTkVMOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19pbnB1dC0tanNvbicpLFxuICAgIFRSQU5TTEFUSU9OX1BBTkVMOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19pbnB1dC0tdHJhbnNsYXRpb25zJyksXG4gICAgUFJFVklFV19QQU5FTDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9faW5wdXQtLXByZXZpZXcnKVxufTtcblxuXG5jb25zdCBsb2FkRXhhbXBsZURhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QganNvbiA9IFtcbiAgICAgICAge3R5cGU6ICdkaXYnLCB2YWx1ZTogJ0hlbGxvIFdvcmxkJywgYXR0cmlidXRlczoge2hlbGxvOiAnd29ybGQnLCBzcmM6ICd0ZXN0J30sIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7dHlwZTogJ2gxJywgdmFsdWU6ICd0ZXN0J30sXG4gICAgICAgICAgICB7dHlwZTogJ3AnLCB2YWx1ZTogJ2hlbGxvIHdvcmxkJywgY2hpbGRyZW46IFt7dHlwZTogJ2gxJywgdmFsdWU6ICdoZWxsbyd9XX1dXG4gICAgICAgIH1cbiAgICBdO1xuXG5cbiAgICBzZXRKc29uUGFuZWxDb250ZW50KGpzb24pO1xufTtcblxuY29uc3QgZ2V0SnNvblBhbmVsQ29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShFRElUT1JfUEFORUxTLkpTT05fUEFORUwudmFsdWUpO1xufTtcblxuXG5jb25zdCB0cmFuc2xhdGVKc29uID0gKCkgPT4ge1xuICAgIGNvbnN0IHtlbGVtZW50cywgdHJhbnNsYXRpb25zfSA9IG5vZGVUcmFuc2xhdG9yKGdldEpzb25QYW5lbENvbnRlbnQoKSwgbGFuZ3VhZ2UpO1xuXG4gICAgc2V0SnNvblBhbmVsQ29udGVudChlbGVtZW50cyk7XG5cbiAgICBzZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCh0cmFuc2xhdGlvbnMpO1xuXG4gICAgc2V0UHJldmlld1BhbmVsQ29udGVudCh0cmFuc2xhdGlvblBhcnNlcihlbGVtZW50cywgdHJhbnNsYXRpb25zLCBsYW5ndWFnZSkpO1xufTtcblxubG9hZFNhbXBsZUJ1dHRvbi5vbmNsaWNrID0gbG9hZEV4YW1wbGVEYXRhO1xudHJhbnNsYXRlSnNvbkJ1dHRvbi5vbmNsaWNrID0gdHJhbnNsYXRlSnNvbjtcblxuRURJVE9SX1BBTkVMUy5UUkFOU0xBVElPTl9QQU5FTC5vbmlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IGdldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50KCk7XG5cbiAgICBzZXRQcmV2aWV3UGFuZWxDb250ZW50KHRyYW5zbGF0aW9uUGFyc2VyKGdldEpzb25QYW5lbENvbnRlbnQoKSwgdHJhbnNsYXRpb25zLCBsYW5ndWFnZSkpO1xuXG59O1xuXG5FRElUT1JfUEFORUxTLkpTT05fUEFORUwub25pbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBnZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCgpO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0SnNvblBhbmVsQ29udGVudCgpO1xuICAgIFxuICAgIHNldFByZXZpZXdQYW5lbENvbnRlbnQodHJhbnNsYXRpb25QYXJzZXIoZWxlbWVudHMsIHRyYW5zbGF0aW9ucywgbGFuZ3VhZ2UpKTtcbn07XG5cblxuY29uc3Qgc2V0SnNvblBhbmVsQ29udGVudCA9IGpzb24gPT4ge1xuICAgIEVESVRPUl9QQU5FTFMuSlNPTl9QQU5FTC52YWx1ZSA9ICBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKTtcbn07XG5cbmNvbnN0IGdldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEVESVRPUl9QQU5FTFMuVFJBTlNMQVRJT05fUEFORUwudmFsdWUpO1xufTtcbmNvbnN0IHNldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50ID0ganNvbiA9PiB7XG4gICAgRURJVE9SX1BBTkVMUy5UUkFOU0xBVElPTl9QQU5FTC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpO1xufTtcblxuY29uc3Qgc2V0UHJldmlld1BhbmVsQ29udGVudCA9IGpzb24gPT4ge1xuICAgIEVESVRPUl9QQU5FTFMuUFJFVklFV19QQU5FTC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVtby90cmFuc2xhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);