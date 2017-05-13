let json = [
    {
        type: 'div',
        value: 'Hello World',
        attributes: {
            hello: 'world',
            src: 'test'
        },
        children: [
            {
                type: 'h1',
                value: 'test'
            },
            {
                type: 'p',
                value: 'hello world',
                children: [{
                    type: 'h1',
                    value: 'hello'
                }]
            }
        ]
    }
];

const jsonParser = (elements) => {
    return elements.map(e => {
        const isContainer = e.hasOwnProperty('children');

        const {type, value, attributes} = e;

        if (isContainer) {
            const children = jsonParser(e.children);

            return htmlElement(type, value + children, attributes);
        }

        return htmlElement(type, value, attributes);
    }).join('');
};

const htmlElement = (type, content, attributes = []) => {
    const htmlAttributes = Object.keys(attributes)
        .map(key => ` ${key}="${attributes[key]}"`)
        .join('');

    return `<${type}${htmlAttributes}>${content}</${type}>`;
};