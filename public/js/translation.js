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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar translations = [];\n\nvar getTranslation = function getTranslation(value) {\n    var translationIndex = translations.findIndex(function (x) {\n        return x === value;\n    });\n    var hasTranslation = translationIndex !== -1;\n\n    if (hasTranslation) {\n        return translationIndex;\n    }\n\n    return translations.push(value) - 1;\n};\n\nvar nodeTranslator = function nodeTranslator(elements) {\n    return elements.map(function (e) {\n        var isContainer = e.hasOwnProperty('children');\n\n        e.value = getTranslation(e.value);\n\n        if (isContainer) {\n            var children = nodeTranslator(e.children);\n\n            return e;\n        }\n        return e;\n    });\n};\n\nexports.default = nodeTranslator;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbm9kZVRyYW5zbGF0b3IuanM/ZGRkMCJdLCJuYW1lcyI6WyJ0cmFuc2xhdGlvbnMiLCJnZXRUcmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uSW5kZXgiLCJmaW5kSW5kZXgiLCJ4IiwidmFsdWUiLCJoYXNUcmFuc2xhdGlvbiIsInB1c2giLCJub2RlVHJhbnNsYXRvciIsImVsZW1lbnRzIiwibWFwIiwiaXNDb250YWluZXIiLCJlIiwiaGFzT3duUHJvcGVydHkiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxlQUFlLEVBQXJCOztBQUVBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsUUFBUztBQUM1QixRQUFNQyxtQkFBbUJGLGFBQWFHLFNBQWIsQ0FBdUI7QUFBQSxlQUFLQyxNQUFNQyxLQUFYO0FBQUEsS0FBdkIsQ0FBekI7QUFDQSxRQUFNQyxpQkFBaUJKLHFCQUFxQixDQUFDLENBQTdDOztBQUVBLFFBQUdJLGNBQUgsRUFBa0I7QUFDZCxlQUFPSixnQkFBUDtBQUNIOztBQUVELFdBQU9GLGFBQWFPLElBQWIsQ0FBa0JGLEtBQWxCLElBQTJCLENBQWxDO0FBQ0gsQ0FURDs7QUFXQSxJQUFNRyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNqQyxXQUFPQSxTQUFTQyxHQUFULENBQWEsYUFBSztBQUNyQixZQUFNQyxjQUFjQyxFQUFFQyxjQUFGLENBQWlCLFVBQWpCLENBQXBCOztBQUVBRCxVQUFFUCxLQUFGLEdBQVVKLGVBQWVXLEVBQUVQLEtBQWpCLENBQVY7O0FBRUEsWUFBSU0sV0FBSixFQUFpQjtBQUNiLGdCQUFNRyxXQUFXTixlQUFlSSxFQUFFRSxRQUFqQixDQUFqQjs7QUFFQSxtQkFBT0YsQ0FBUDtBQUNIO0FBQ0QsZUFBT0EsQ0FBUDtBQUNILEtBWE0sQ0FBUDtBQVlILENBYkQ7O2tCQWdCZUosYyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdHJhbnNsYXRpb25zID0gW107XG5cbmNvbnN0IGdldFRyYW5zbGF0aW9uID0gdmFsdWUgPT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uSW5kZXggPSB0cmFuc2xhdGlvbnMuZmluZEluZGV4KHggPT4geCA9PT0gdmFsdWUpO1xuICAgIGNvbnN0IGhhc1RyYW5zbGF0aW9uID0gdHJhbnNsYXRpb25JbmRleCAhPT0gLTE7XG5cbiAgICBpZihoYXNUcmFuc2xhdGlvbil7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbkluZGV4O1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2xhdGlvbnMucHVzaCh2YWx1ZSkgLSAxO1xufTtcblxuY29uc3Qgbm9kZVRyYW5zbGF0b3IgPSAoZWxlbWVudHMpID0+IHtcbiAgICByZXR1cm4gZWxlbWVudHMubWFwKGUgPT4ge1xuICAgICAgICBjb25zdCBpc0NvbnRhaW5lciA9IGUuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJyk7XG5cbiAgICAgICAgZS52YWx1ZSA9IGdldFRyYW5zbGF0aW9uKGUudmFsdWUpO1xuXG4gICAgICAgIGlmIChpc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlVHJhbnNsYXRvcihlLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVUcmFuc2xhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ub2RlVHJhbnNsYXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _nodeTranslator = __webpack_require__(2);\n\nvar _nodeTranslator2 = _interopRequireDefault(_nodeTranslator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar loadSampleButton = document.querySelector('.editor__actions--sample');\nvar translateJsonButton = document.querySelector('.editor__actions--translate');\n\nvar EDITOR_PANELS = {\n    JSON_PANEL: document.querySelector('.editor__input--json'),\n    TRANSLATION_PANEL: document.querySelector('.editor__input--translations')\n};\n\nvar loadExampleData = function loadExampleData() {\n    var json = [{ type: 'div', value: 'Hello World', attributes: { hello: 'world', src: 'test' }, children: [{ type: 'h1', value: 'test' }, { type: 'p', value: 'hello world', children: [{ type: 'h1', value: 'hello' }] }]\n    }];\n\n    setJsonPanelContent(json);\n};\n\nvar getJsonPanelContent = function getJsonPanelContent() {\n    return JSON.parse(EDITOR_PANELS.JSON_PANEL.value);\n};\n\nvar translateJson = function translateJson() {\n    setTranslationPanelContent((0, _nodeTranslator2.default)(getJsonPanelContent()));\n};\n\nloadSampleButton.onclick = loadExampleData;\ntranslateJsonButton.onclick = translateJson;\n\nvar setJsonPanelContent = function setJsonPanelContent(json) {\n    EDITOR_PANELS.JSON_PANEL.value = JSON.stringify(json, null, 2);\n};\n\nvar setTranslationPanelContent = function setTranslationPanelContent(json) {\n    EDITOR_PANELS.TRANSLATION_PANEL.value = JSON.stringify(json, null, 2);\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby90cmFuc2xhdGlvbi5qcz9iNWU3Il0sIm5hbWVzIjpbImxvYWRTYW1wbGVCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmFuc2xhdGVKc29uQnV0dG9uIiwiRURJVE9SX1BBTkVMUyIsIkpTT05fUEFORUwiLCJUUkFOU0xBVElPTl9QQU5FTCIsImxvYWRFeGFtcGxlRGF0YSIsImpzb24iLCJ0eXBlIiwidmFsdWUiLCJhdHRyaWJ1dGVzIiwiaGVsbG8iLCJzcmMiLCJjaGlsZHJlbiIsInNldEpzb25QYW5lbENvbnRlbnQiLCJnZXRKc29uUGFuZWxDb250ZW50IiwiSlNPTiIsInBhcnNlIiwidHJhbnNsYXRlSnNvbiIsInNldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50Iiwib25jbGljayIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CQyxTQUFTQyxhQUFULENBQXVCLDBCQUF2QixDQUF6QjtBQUNBLElBQU1DLHNCQUFzQkYsU0FBU0MsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBNUI7O0FBRUEsSUFBTUUsZ0JBQWdCO0FBQ2xCQyxnQkFBWUosU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FETTtBQUVsQkksdUJBQW1CTCxTQUFTQyxhQUFULENBQXVCLDhCQUF2QjtBQUZELENBQXRCOztBQU1BLElBQU1LLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQixRQUFNQyxPQUFPLENBQ1QsRUFBQ0MsTUFBTSxLQUFQLEVBQWNDLE9BQU8sYUFBckIsRUFBb0NDLFlBQVksRUFBQ0MsT0FBTyxPQUFSLEVBQWlCQyxLQUFLLE1BQXRCLEVBQWhELEVBQStFQyxVQUFVLENBQ3JGLEVBQUNMLE1BQU0sSUFBUCxFQUFhQyxPQUFPLE1BQXBCLEVBRHFGLEVBRXJGLEVBQUNELE1BQU0sR0FBUCxFQUFZQyxPQUFPLGFBQW5CLEVBQWtDSSxVQUFVLENBQUMsRUFBQ0wsTUFBTSxJQUFQLEVBQWFDLE9BQU8sT0FBcEIsRUFBRCxDQUE1QyxFQUZxRjtBQUF6RixLQURTLENBQWI7O0FBUUFLLHdCQUFvQlAsSUFBcEI7QUFDSCxDQVZEOztBQVlBLElBQU1RLHNCQUFzQixTQUF0QkEsbUJBQXNCLEdBQU07QUFDOUIsV0FBT0MsS0FBS0MsS0FBTCxDQUFXZCxjQUFjQyxVQUFkLENBQXlCSyxLQUFwQyxDQUFQO0FBQ0gsQ0FGRDs7QUFLQSxJQUFNUyxnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLCtCQUEyQiw4QkFBZUoscUJBQWYsQ0FBM0I7QUFDSCxDQUZEOztBQUlBaEIsaUJBQWlCcUIsT0FBakIsR0FBMkJkLGVBQTNCO0FBQ0FKLG9CQUFvQmtCLE9BQXBCLEdBQThCRixhQUE5Qjs7QUFJQSxJQUFNSixzQkFBc0IsU0FBdEJBLG1CQUFzQixPQUFRO0FBQ2hDWCxrQkFBY0MsVUFBZCxDQUF5QkssS0FBekIsR0FBa0NPLEtBQUtLLFNBQUwsQ0FBZWQsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFsQztBQUNILENBRkQ7O0FBSUEsSUFBTVksNkJBQTZCLFNBQTdCQSwwQkFBNkIsT0FBUTtBQUN2Q2hCLGtCQUFjRSxpQkFBZCxDQUFnQ0ksS0FBaEMsR0FBd0NPLEtBQUtLLFNBQUwsQ0FBZWQsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUF4QztBQUNILENBRkQiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlVHJhbnNsYXRvciBmcm9tICcuLi9ub2RlVHJhbnNsYXRvcic7XG5cbmNvbnN0IGxvYWRTYW1wbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19hY3Rpb25zLS1zYW1wbGUnKTtcbmNvbnN0IHRyYW5zbGF0ZUpzb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19hY3Rpb25zLS10cmFuc2xhdGUnKTtcblxuY29uc3QgRURJVE9SX1BBTkVMUyA9IHtcbiAgICBKU09OX1BBTkVMOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19pbnB1dC0tanNvbicpLFxuICAgIFRSQU5TTEFUSU9OX1BBTkVMOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19pbnB1dC0tdHJhbnNsYXRpb25zJylcbn07XG5cblxuY29uc3QgbG9hZEV4YW1wbGVEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBbXG4gICAgICAgIHt0eXBlOiAnZGl2JywgdmFsdWU6ICdIZWxsbyBXb3JsZCcsIGF0dHJpYnV0ZXM6IHtoZWxsbzogJ3dvcmxkJywgc3JjOiAndGVzdCd9LCBjaGlsZHJlbjogW1xuICAgICAgICAgICAge3R5cGU6ICdoMScsIHZhbHVlOiAndGVzdCd9LFxuICAgICAgICAgICAge3R5cGU6ICdwJywgdmFsdWU6ICdoZWxsbyB3b3JsZCcsIGNoaWxkcmVuOiBbe3R5cGU6ICdoMScsIHZhbHVlOiAnaGVsbG8nfV19XVxuICAgICAgICB9XG4gICAgXTtcblxuXG4gICAgc2V0SnNvblBhbmVsQ29udGVudChqc29uKTtcbn07XG5cbmNvbnN0IGdldEpzb25QYW5lbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoRURJVE9SX1BBTkVMUy5KU09OX1BBTkVMLnZhbHVlKTtcbn07XG5cblxuY29uc3QgdHJhbnNsYXRlSnNvbiA9ICgpID0+IHtcbiAgICBzZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudChub2RlVHJhbnNsYXRvcihnZXRKc29uUGFuZWxDb250ZW50KCkpKTtcbn07XG5cbmxvYWRTYW1wbGVCdXR0b24ub25jbGljayA9IGxvYWRFeGFtcGxlRGF0YTtcbnRyYW5zbGF0ZUpzb25CdXR0b24ub25jbGljayA9IHRyYW5zbGF0ZUpzb247XG5cblxuXG5jb25zdCBzZXRKc29uUGFuZWxDb250ZW50ID0ganNvbiA9PiB7XG4gICAgRURJVE9SX1BBTkVMUy5KU09OX1BBTkVMLnZhbHVlID0gIEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpO1xufTtcblxuY29uc3Qgc2V0VHJhbnNsYXRpb25QYW5lbENvbnRlbnQgPSBqc29uID0+IHtcbiAgICBFRElUT1JfUEFORUxTLlRSQU5TTEFUSU9OX1BBTkVMLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZW1vL3RyYW5zbGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);