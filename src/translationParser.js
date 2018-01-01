// @flow

import type { JsonNode } from "./types/JsonNode";

const translationParser = (
  elements: Array<JsonNode>,
  translations: Object,
  language: string
): Array<JsonNode> => {
  return elements.map(e => {
    const isContainer = e.hasOwnProperty("children") && e.children.length > 0;

    e.value = translations[language][e.value];

    if (isContainer) {
      e.children = translationParser(e.children, translations, language);
    }

    return e;
  });
};

export default translationParser;
