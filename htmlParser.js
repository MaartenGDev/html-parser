const root = document.querySelector('.app');

const isTextNode = x => x.nodeType === Node.TEXT_NODE;

const getNodeValue = x => x !== null ? x.trim() : '';

const getAttributes = node => {
    return Object.keys(node.attributes).reduce((attributes, currentAttributeKey) => {
        const attribute = node.attributes[currentAttributeKey];

        attributes[attribute.name] = attribute.nodeValue;

        return attributes;
    }, {});
};

const parser = nodes => {
    return [...nodes].map(node => {
        const isContainer = node.children.length > 0 && !isTextNode(node.children[0]);

        if (isContainer) {
            return {
                type: node.localName,
                value: getNodeValue(node.nodeValue),
                attributes: getAttributes(node),
                children: parser(node.children)
            };
        }

        return {
            type: node.localName,
            value: getNodeValue(node.children.length ? node.children[0].data : ''),
            attributes: getAttributes(node)
        };
    });
};

console.log(JSON.stringify(parser(root.children), null, 2));