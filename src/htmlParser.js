// @flow

const getNodeValue = x => x.trim()

const getTextOfTextNodes = nodes => {
  return nodes
    .filter(x => x.nodeType === Node.TEXT_NODE)
    .map(x => x.data.trim())
    .join('')
}

const getAttributes = node => {
  return Object.keys(node.attributes).reduce((attributes, currentAttributeKey) => {
    const attribute = node.attributes[currentAttributeKey]

    attributes[attribute.name] = attribute.nodeValue

    return attributes
  }, {})
}

const htmlParser = (nodes: Array<Object>) => {
  return [...nodes].map(node => {
    const isContainer = node.children.length

    if (isContainer) {
      return {
        type: node.localName,
        value: getTextOfTextNodes([...node.childNodes]),
        attributes: getAttributes(node),
        children: htmlParser(node.children)
      }
    }

    return {
      type: node.localName,
      value: getNodeValue(node.innerHTML),
      attributes: getAttributes(node)
    }
  })
}

export default htmlParser