import nodeTranslator from '../src/nodeTranslator';

test('basic strings should be stored in object with keys starting in 0', () => {
    const language = 'en';

    const jsonElements = [
        {
            type: 'h1',
            value: 'First',
            children: [
                {
                    type: 'span',
                    value: 'Hello World'
                }
            ]
        }
    ];

    const {elements, translations} = nodeTranslator(jsonElements, language);

    expect(elements).toEqual([{
        type: 'h1',
        value: 0,
        children: [
            {
                type: 'span',
                value: 1
            }
        ]
    }]);

    expect(translations).toEqual({
        "en": {
            0: 'First',
            1: 'Hello World'
        }
    });
});

