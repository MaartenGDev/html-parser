// @flow
import type {JsonNode} from './types/JsonNode';

const jsonParser = (elements: Array<JsonNode>) => {
  return elements.map(e => {
    const isContainer = e.hasOwnProperty('children') && e.children.length > 0
    const {type, value = '', attributes = {}} = e

    if (isContainer) {
      const children = jsonParser(e.children)

      return htmlElement(type, value + children, attributes)
    }

    return htmlElement(type, value, attributes)
  }).join('')
}

const htmlElement = (type, content, attributes) => {
  const htmlAttributes = Object.keys(attributes)
    .map(key => ` ${key}="${attributes[key]}"`)
    .join('')

  return `<${type}${htmlAttributes}>${content}</${type}>`
}

export default jsonParser