!function(n){function Q(U){if(F[U])return F[U].exports;var l=F[U]={i:U,l:!1,exports:{}};return n[U].call(l.exports,l,l.exports,Q),l.l=!0,l.exports}var F={};Q.m=n,Q.c=F,Q.i=function(n){return n},Q.d=function(n,F,U){Q.o(n,F)||Object.defineProperty(n,F,{configurable:!1,enumerable:!0,get:U})},Q.n=function(n){var F=n&&n.__esModule?function(){return n.default}:function(){return n};return Q.d(F,"a",F),F},Q.o=function(n,Q){return Object.prototype.hasOwnProperty.call(n,Q)},Q.p="",Q(Q.s=5)}([,,function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getTranslation = function getTranslation(value, language, translations) {\n  if (!translations.hasOwnProperty(language)) {\n    translations[language] = {};\n  }\n  var translationIndex = Object.keys(translations[language]).find(function (x) {\n    return translations[language][x] === value;\n  });\n\n  var hasTranslation = translationIndex !== undefined;\n  var nextKey = Object.keys(translations[language]).length;\n\n  if (hasTranslation) {\n    return { translationId: parseInt(translationIndex), translations: translations };\n  }\n\n  translations[language][nextKey] = value;\n\n  return { translationId: nextKey, translations: translations };\n};\n\nvar replaceNodeValueWithTranslation = function replaceNodeValueWithTranslation(elements, language, translations) {\n  debugger;\n\n  return elements.map(function (e) {\n    var isContainer = e.hasOwnProperty('children');\n\n    var _getTranslation = getTranslation(e.value, language, translations),\n        translationId = _getTranslation.translationId;\n\n    e.value = translationId;\n\n    if (isContainer) {\n      e.children = replaceNodeValueWithTranslation(e.children, language, translations);\n    }\n\n    return e;\n  });\n};\n\nexports.default = function (elements, language) {\n  var translations = {};\n\n  return {\n    elements: replaceNodeValueWithTranslation(elements, language, translations),\n    translations: translations\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbm9kZVRyYW5zbGF0b3IuanM/ZGRkMCJdLCJuYW1lcyI6WyJnZXRUcmFuc2xhdGlvbiIsInZhbHVlIiwibGFuZ3VhZ2UiLCJ0cmFuc2xhdGlvbnMiLCJoYXNPd25Qcm9wZXJ0eSIsInRyYW5zbGF0aW9uSW5kZXgiLCJPYmplY3QiLCJrZXlzIiwiZmluZCIsIngiLCJoYXNUcmFuc2xhdGlvbiIsInVuZGVmaW5lZCIsIm5leHRLZXkiLCJsZW5ndGgiLCJ0cmFuc2xhdGlvbklkIiwicGFyc2VJbnQiLCJyZXBsYWNlTm9kZVZhbHVlV2l0aFRyYW5zbGF0aW9uIiwiZWxlbWVudHMiLCJtYXAiLCJpc0NvbnRhaW5lciIsImUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFrQkMsWUFBbEIsRUFBbUM7QUFDeEQsTUFBSSxDQUFDQSxhQUFhQyxjQUFiLENBQTRCRixRQUE1QixDQUFMLEVBQTRDO0FBQzFDQyxpQkFBYUQsUUFBYixJQUF5QixFQUF6QjtBQUNEO0FBQ0QsTUFBTUcsbUJBQW1CQyxPQUFPQyxJQUFQLENBQVlKLGFBQWFELFFBQWIsQ0FBWixFQUFvQ00sSUFBcEMsQ0FBeUM7QUFBQSxXQUFLTCxhQUFhRCxRQUFiLEVBQXVCTyxDQUF2QixNQUE4QlIsS0FBbkM7QUFBQSxHQUF6QyxDQUF6Qjs7QUFFQSxNQUFNUyxpQkFBaUJMLHFCQUFxQk0sU0FBNUM7QUFDQSxNQUFNQyxVQUFVTixPQUFPQyxJQUFQLENBQVlKLGFBQWFELFFBQWIsQ0FBWixFQUFvQ1csTUFBcEQ7O0FBRUEsTUFBSUgsY0FBSixFQUFvQjtBQUNsQixXQUFPLEVBQUNJLGVBQWVDLFNBQVNWLGdCQUFULENBQWhCLEVBQTRDRixjQUFjQSxZQUExRCxFQUFQO0FBQ0Q7O0FBRURBLGVBQWFELFFBQWIsRUFBdUJVLE9BQXZCLElBQWtDWCxLQUFsQzs7QUFFQSxTQUFPLEVBQUNhLGVBQWVGLE9BQWhCLEVBQXlCVCxjQUFjQSxZQUF2QyxFQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBLElBQU1hLGtDQUFrQyxTQUFsQ0EsK0JBQWtDLENBQUNDLFFBQUQsRUFBV2YsUUFBWCxFQUFxQkMsWUFBckIsRUFBc0M7QUFDNUU7O0FBRUEsU0FBT2MsU0FBU0MsR0FBVCxDQUFhLGFBQUs7QUFDdkIsUUFBTUMsY0FBY0MsRUFBRWhCLGNBQUYsQ0FBaUIsVUFBakIsQ0FBcEI7O0FBRHVCLDBCQUdDSixlQUFlb0IsRUFBRW5CLEtBQWpCLEVBQXdCQyxRQUF4QixFQUFrQ0MsWUFBbEMsQ0FIRDtBQUFBLFFBR2hCVyxhQUhnQixtQkFHaEJBLGFBSGdCOztBQUt2Qk0sTUFBRW5CLEtBQUYsR0FBVWEsYUFBVjs7QUFFQSxRQUFJSyxXQUFKLEVBQWlCO0FBQ2ZDLFFBQUVDLFFBQUYsR0FBYUwsZ0NBQWdDSSxFQUFFQyxRQUFsQyxFQUE0Q25CLFFBQTVDLEVBQXNEQyxZQUF0RCxDQUFiO0FBQ0Q7O0FBRUQsV0FBT2lCLENBQVA7QUFDRCxHQVpNLENBQVA7QUFhRCxDQWhCRDs7a0JBa0JlLFVBQUNILFFBQUQsRUFBV2YsUUFBWCxFQUF3QjtBQUNyQyxNQUFNQyxlQUFlLEVBQXJCOztBQUVBLFNBQU87QUFDTGMsY0FBVUQsZ0NBQWdDQyxRQUFoQyxFQUEwQ2YsUUFBMUMsRUFBb0RDLFlBQXBELENBREw7QUFFTEEsa0JBQWNBO0FBRlQsR0FBUDtBQUlELEMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFRyYW5zbGF0aW9uID0gKHZhbHVlLCBsYW5ndWFnZSwgdHJhbnNsYXRpb25zKSA9PiB7XG4gIGlmICghdHJhbnNsYXRpb25zLmhhc093blByb3BlcnR5KGxhbmd1YWdlKSkge1xuICAgIHRyYW5zbGF0aW9uc1tsYW5ndWFnZV0gPSB7fVxuICB9XG4gIGNvbnN0IHRyYW5zbGF0aW9uSW5kZXggPSBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdKS5maW5kKHggPT4gdHJhbnNsYXRpb25zW2xhbmd1YWdlXVt4XSA9PT0gdmFsdWUpXG5cbiAgY29uc3QgaGFzVHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbkluZGV4ICE9PSB1bmRlZmluZWRcbiAgY29uc3QgbmV4dEtleSA9IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9uc1tsYW5ndWFnZV0pLmxlbmd0aFxuXG4gIGlmIChoYXNUcmFuc2xhdGlvbikge1xuICAgIHJldHVybiB7dHJhbnNsYXRpb25JZDogcGFyc2VJbnQodHJhbnNsYXRpb25JbmRleCksIHRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zfVxuICB9XG5cbiAgdHJhbnNsYXRpb25zW2xhbmd1YWdlXVtuZXh0S2V5XSA9IHZhbHVlXG5cbiAgcmV0dXJuIHt0cmFuc2xhdGlvbklkOiBuZXh0S2V5LCB0cmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc31cbn1cblxuY29uc3QgcmVwbGFjZU5vZGVWYWx1ZVdpdGhUcmFuc2xhdGlvbiA9IChlbGVtZW50cywgbGFuZ3VhZ2UsIHRyYW5zbGF0aW9ucykgPT4ge1xuICBkZWJ1Z2dlcjtcblxuICByZXR1cm4gZWxlbWVudHMubWFwKGUgPT4ge1xuICAgIGNvbnN0IGlzQ29udGFpbmVyID0gZS5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKVxuXG4gICAgY29uc3Qge3RyYW5zbGF0aW9uSWR9ID0gZ2V0VHJhbnNsYXRpb24oZS52YWx1ZSwgbGFuZ3VhZ2UsIHRyYW5zbGF0aW9ucylcblxuICAgIGUudmFsdWUgPSB0cmFuc2xhdGlvbklkXG5cbiAgICBpZiAoaXNDb250YWluZXIpIHtcbiAgICAgIGUuY2hpbGRyZW4gPSByZXBsYWNlTm9kZVZhbHVlV2l0aFRyYW5zbGF0aW9uKGUuY2hpbGRyZW4sIGxhbmd1YWdlLCB0cmFuc2xhdGlvbnMpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnRzLCBsYW5ndWFnZSkgPT4ge1xuICBjb25zdCB0cmFuc2xhdGlvbnMgPSB7fVxuXG4gIHJldHVybiB7XG4gICAgZWxlbWVudHM6IHJlcGxhY2VOb2RlVmFsdWVXaXRoVHJhbnNsYXRpb24oZWxlbWVudHMsIGxhbmd1YWdlLCB0cmFuc2xhdGlvbnMpLFxuICAgIHRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25vZGVUcmFuc2xhdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==")},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar translationParser = function translationParser(elements, translations, language) {\n    return elements.map(function (e) {\n        var isContainer = e.hasOwnProperty('children');\n\n        e.value = translations[language][e.value];\n\n        if (isContainer) {\n            e.children = translationParser(e.children, translations, language);\n        }\n\n        return e;\n    });\n};\n\nexports.default = translationParser;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNsYXRpb25QYXJzZXIuanM/MTM1ZSJdLCJuYW1lcyI6WyJ0cmFuc2xhdGlvblBhcnNlciIsImVsZW1lbnRzIiwidHJhbnNsYXRpb25zIiwibGFuZ3VhZ2UiLCJtYXAiLCJpc0NvbnRhaW5lciIsImUiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsUUFBRCxFQUFXQyxZQUFYLEVBQXlCQyxRQUF6QixFQUFzQztBQUM1RCxXQUFPRixTQUFTRyxHQUFULENBQWEsYUFBSztBQUNyQixZQUFNQyxjQUFjQyxFQUFFQyxjQUFGLENBQWlCLFVBQWpCLENBQXBCOztBQUVBRCxVQUFFRSxLQUFGLEdBQVVOLGFBQWFDLFFBQWIsRUFBdUJHLEVBQUVFLEtBQXpCLENBQVY7O0FBRUEsWUFBR0gsV0FBSCxFQUFlO0FBQ1hDLGNBQUVHLFFBQUYsR0FBYVQsa0JBQWtCTSxFQUFFRyxRQUFwQixFQUE4QlAsWUFBOUIsRUFBNENDLFFBQTVDLENBQWI7QUFDSDs7QUFFRCxlQUFPRyxDQUFQO0FBQ0gsS0FWTSxDQUFQO0FBV0gsQ0FaRDs7a0JBY2VOLGlCIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0cmFuc2xhdGlvblBhcnNlciA9IChlbGVtZW50cywgdHJhbnNsYXRpb25zLCBsYW5ndWFnZSkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50cy5tYXAoZSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ29udGFpbmVyID0gZS5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKTtcblxuICAgICAgICBlLnZhbHVlID0gdHJhbnNsYXRpb25zW2xhbmd1YWdlXVtlLnZhbHVlXTtcblxuICAgICAgICBpZihpc0NvbnRhaW5lcil7XG4gICAgICAgICAgICBlLmNoaWxkcmVuID0gdHJhbnNsYXRpb25QYXJzZXIoZS5jaGlsZHJlbiwgdHJhbnNsYXRpb25zLCBsYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0aW9uUGFyc2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmFuc2xhdGlvblBhcnNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=")},,function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _nodeTranslator2 = __webpack_require__(2);\n\nvar _nodeTranslator3 = _interopRequireDefault(_nodeTranslator2);\n\nvar _translationParser = __webpack_require__(3);\n\nvar _translationParser2 = _interopRequireDefault(_translationParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar loadSampleButton = document.querySelector('.editor__actions--sample');\nvar translateJsonButton = document.querySelector('.editor__actions--translate');\nvar languageInput = document.querySelector('.form__input--language');\nvar setLanguageButton = document.querySelector('.editor__actions--set-language');\n\nvar EDITOR_PANELS = {\n    JSON_PANEL: document.querySelector('.editor__input--json'),\n    TRANSLATION_PANEL: document.querySelector('.editor__input--translations'),\n    PREVIEW_PANEL: document.querySelector('.editor__input--preview')\n};\n\nvar loadExampleData = function loadExampleData() {\n    var json = [{ type: 'div', value: 'Hello World', attributes: { hello: 'world', src: 'test' }, children: [{ type: 'h1', value: 'test' }, { type: 'p', value: 'hello world', children: [{ type: 'h1', value: 'hello' }] }]\n    }];\n\n    setJsonPanelContent(json);\n};\n\nvar getJsonPanelContent = function getJsonPanelContent() {\n    return JSON.parse(EDITOR_PANELS.JSON_PANEL.value);\n};\n\nvar translateJson = function translateJson() {\n    var _nodeTranslator = (0, _nodeTranslator3.default)(getJsonPanelContent(), getLanguage()),\n        elements = _nodeTranslator.elements,\n        translations = _nodeTranslator.translations;\n\n    setJsonPanelContent(elements);\n\n    setTranslationPanelContent(translations);\n\n    setPreviewPanelContent((0, _translationParser2.default)(elements, translations, getLanguage()));\n};\n\nloadSampleButton.onclick = loadExampleData;\ntranslateJsonButton.onclick = translateJson;\nsetLanguageButton.onclick = function () {\n    var translations = getTranslationPanelContent();\n\n    setPreviewPanelContent((0, _translationParser2.default)(getJsonPanelContent(), translations, getLanguage()));\n};\n\nEDITOR_PANELS.TRANSLATION_PANEL.oninput = function () {\n    var translations = getTranslationPanelContent();\n\n    setPreviewPanelContent((0, _translationParser2.default)(getJsonPanelContent(), translations, getLanguage()));\n};\n\nEDITOR_PANELS.JSON_PANEL.oninput = function () {\n    var translations = getTranslationPanelContent();\n    var elements = getJsonPanelContent();\n\n    setPreviewPanelContent((0, _translationParser2.default)(elements, translations, getLanguage()));\n};\n\nvar getLanguage = function getLanguage() {\n    return languageInput.value;\n};\n\nvar setJsonPanelContent = function setJsonPanelContent(json) {\n    EDITOR_PANELS.JSON_PANEL.value = JSON.stringify(json, null, 2);\n};\n\nvar getTranslationPanelContent = function getTranslationPanelContent() {\n    return JSON.parse(EDITOR_PANELS.TRANSLATION_PANEL.value);\n};\nvar setTranslationPanelContent = function setTranslationPanelContent(json) {\n    EDITOR_PANELS.TRANSLATION_PANEL.value = JSON.stringify(json, null, 2);\n};\n\nvar setPreviewPanelContent = function setPreviewPanelContent(json) {\n    EDITOR_PANELS.PREVIEW_PANEL.value = JSON.stringify(json, null, 2);\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby90cmFuc2xhdGlvbi5qcz9iNWU3Il0sIm5hbWVzIjpbImxvYWRTYW1wbGVCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0cmFuc2xhdGVKc29uQnV0dG9uIiwibGFuZ3VhZ2VJbnB1dCIsInNldExhbmd1YWdlQnV0dG9uIiwiRURJVE9SX1BBTkVMUyIsIkpTT05fUEFORUwiLCJUUkFOU0xBVElPTl9QQU5FTCIsIlBSRVZJRVdfUEFORUwiLCJsb2FkRXhhbXBsZURhdGEiLCJqc29uIiwidHlwZSIsInZhbHVlIiwiYXR0cmlidXRlcyIsImhlbGxvIiwic3JjIiwiY2hpbGRyZW4iLCJzZXRKc29uUGFuZWxDb250ZW50IiwiZ2V0SnNvblBhbmVsQ29udGVudCIsIkpTT04iLCJwYXJzZSIsInRyYW5zbGF0ZUpzb24iLCJnZXRMYW5ndWFnZSIsImVsZW1lbnRzIiwidHJhbnNsYXRpb25zIiwic2V0VHJhbnNsYXRpb25QYW5lbENvbnRlbnQiLCJzZXRQcmV2aWV3UGFuZWxDb250ZW50Iiwib25jbGljayIsImdldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50Iiwib25pbnB1dCIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXpCO0FBQ0EsSUFBTUMsc0JBQXNCRixTQUFTQyxhQUFULENBQXVCLDZCQUF2QixDQUE1QjtBQUNBLElBQU1FLGdCQUFpQkgsU0FBU0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBdkI7QUFDQSxJQUFNRyxvQkFBb0JKLFNBQVNDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQTFCOztBQUVBLElBQU1JLGdCQUFnQjtBQUNsQkMsZ0JBQVlOLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBRE07QUFFbEJNLHVCQUFtQlAsU0FBU0MsYUFBVCxDQUF1Qiw4QkFBdkIsQ0FGRDtBQUdsQk8sbUJB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TCxDQUFlcEIsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFwQztBQUNILENBRkQiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlVHJhbnNsYXRvciBmcm9tICcuLi9ub2RlVHJhbnNsYXRvcic7XG5pbXBvcnQgdHJhbnNsYXRpb25QYXJzZXIgZnJvbSAnLi4vdHJhbnNsYXRpb25QYXJzZXInO1xuXG5jb25zdCBsb2FkU2FtcGxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9fYWN0aW9ucy0tc2FtcGxlJyk7XG5jb25zdCB0cmFuc2xhdGVKc29uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9fYWN0aW9ucy0tdHJhbnNsYXRlJyk7XG5jb25zdCBsYW5ndWFnZUlucHV0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pbnB1dC0tbGFuZ3VhZ2UnKTtcbmNvbnN0IHNldExhbmd1YWdlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9fYWN0aW9ucy0tc2V0LWxhbmd1YWdlJyk7XG5cbmNvbnN0IEVESVRPUl9QQU5FTFMgPSB7XG4gICAgSlNPTl9QQU5FTDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9faW5wdXQtLWpzb24nKSxcbiAgICBUUkFOU0xBVElPTl9QQU5FTDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9faW5wdXQtLXRyYW5zbGF0aW9ucycpLFxuICAgIFBSRVZJRVdfUEFORUw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX2lucHV0LS1wcmV2aWV3Jylcbn07XG5cblxuY29uc3QgbG9hZEV4YW1wbGVEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBbXG4gICAgICAgIHt0eXBlOiAnZGl2JywgdmFsdWU6ICdIZWxsbyBXb3JsZCcsIGF0dHJpYnV0ZXM6IHtoZWxsbzogJ3dvcmxkJywgc3JjOiAndGVzdCd9LCBjaGlsZHJlbjogW1xuICAgICAgICAgICAge3R5cGU6ICdoMScsIHZhbHVlOiAndGVzdCd9LFxuICAgICAgICAgICAge3R5cGU6ICdwJywgdmFsdWU6ICdoZWxsbyB3b3JsZCcsIGNoaWxkcmVuOiBbe3R5cGU6ICdoMScsIHZhbHVlOiAnaGVsbG8nfV19XVxuICAgICAgICB9XG4gICAgXTtcblxuXG4gICAgc2V0SnNvblBhbmVsQ29udGVudChqc29uKTtcbn07XG5cbmNvbnN0IGdldEpzb25QYW5lbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoRURJVE9SX1BBTkVMUy5KU09OX1BBTkVMLnZhbHVlKTtcbn07XG5cblxuY29uc3QgdHJhbnNsYXRlSnNvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7ZWxlbWVudHMsIHRyYW5zbGF0aW9uc30gPSBub2RlVHJhbnNsYXRvcihnZXRKc29uUGFuZWxDb250ZW50KCksIGdldExhbmd1YWdlKCkpO1xuXG4gICAgc2V0SnNvblBhbmVsQ29udGVudChlbGVtZW50cyk7XG5cbiAgICBzZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCh0cmFuc2xhdGlvbnMpO1xuXG4gICAgc2V0UHJldmlld1BhbmVsQ29udGVudCh0cmFuc2xhdGlvblBhcnNlcihlbGVtZW50cywgdHJhbnNsYXRpb25zLCBnZXRMYW5ndWFnZSgpKSk7XG59O1xuXG5sb2FkU2FtcGxlQnV0dG9uLm9uY2xpY2sgPSBsb2FkRXhhbXBsZURhdGE7XG50cmFuc2xhdGVKc29uQnV0dG9uLm9uY2xpY2sgPSB0cmFuc2xhdGVKc29uO1xuc2V0TGFuZ3VhZ2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBnZXRUcmFuc2xhdGlvblBhbmVsQ29udGVudCgpO1xuXG4gICAgc2V0UHJldmlld1BhbmVsQ29udGVudCh0cmFuc2xhdGlvblBhcnNlcihnZXRKc29uUGFuZWxDb250ZW50KCksIHRyYW5zbGF0aW9ucywgZ2V0TGFuZ3VhZ2UoKSkpO1xufTtcblxuRURJVE9SX1BBTkVMUy5UUkFOU0xBVElPTl9QQU5FTC5vbmlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IGdldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50KCk7XG5cbiAgICBzZXRQcmV2aWV3UGFuZWxDb250ZW50KHRyYW5zbGF0aW9uUGFyc2VyKGdldEpzb25QYW5lbENvbnRlbnQoKSwgdHJhbnNsYXRpb25zLCBnZXRMYW5ndWFnZSgpKSk7XG5cbn07XG5cbkVESVRPUl9QQU5FTFMuSlNPTl9QQU5FTC5vbmlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IGdldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50KCk7XG4gICAgY29uc3QgZWxlbWVudHMgPSBnZXRKc29uUGFuZWxDb250ZW50KCk7XG5cbiAgICBzZXRQcmV2aWV3UGFuZWxDb250ZW50KHRyYW5zbGF0aW9uUGFyc2VyKGVsZW1lbnRzLCB0cmFuc2xhdGlvbnMsIGdldExhbmd1YWdlKCkpKTtcbn07XG5cbmNvbnN0IGdldExhbmd1YWdlID0gKCkgPT4ge1xuICAgIHJldHVybiBsYW5ndWFnZUlucHV0LnZhbHVlO1xufTtcblxuY29uc3Qgc2V0SnNvblBhbmVsQ29udGVudCA9IGpzb24gPT4ge1xuICAgIEVESVRPUl9QQU5FTFMuSlNPTl9QQU5FTC52YWx1ZSA9ICBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKTtcbn07XG5cbmNvbnN0IGdldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEVESVRPUl9QQU5FTFMuVFJBTlNMQVRJT05fUEFORUwudmFsdWUpO1xufTtcbmNvbnN0IHNldFRyYW5zbGF0aW9uUGFuZWxDb250ZW50ID0ganNvbiA9PiB7XG4gICAgRURJVE9SX1BBTkVMUy5UUkFOU0xBVElPTl9QQU5FTC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpO1xufTtcblxuY29uc3Qgc2V0UHJldmlld1BhbmVsQ29udGVudCA9IGpzb24gPT4ge1xuICAgIEVESVRPUl9QQU5FTFMuUFJFVklFV19QQU5FTC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVtby90cmFuc2xhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=")}]);