import htmlParser from '../src/htmlParser';

const parser = new DOMParser();

test('should return h1 json object', () => {
    const rootElement = parser
        .parseFromString(`<main class="app"><h1>test</h1></main>`, "text/html")
        .querySelector('.app');


    expect(htmlParser(rootElement.children)).toEqual([{
        type: 'h1',
        value: 'test',
        attributes: {}
    }]);
});

test('section with html attributes is serialized correctly', () => {
    const rootElement = parser
        .parseFromString(`<main class="app"><section data-translation-id="35" data-section-type="header">test</section></main>`, "text/html")
        .querySelector('.app');


    expect(htmlParser(rootElement.children)).toEqual([{
        type: 'section',
        value: 'test',
        attributes: {
            "data-translation-id": "35",
            "data-section-type": "header"
        }
    }]);

});

test('element with empty content returns empty string', () => {
    const rootElement = parser
        .parseFromString(`<main class="app"><section></section></main>`, "text/html")
        .querySelector('.app');

    expect(htmlParser(rootElement.children)).toEqual([{
        type: 'section',
        value: '',
        attributes: {}
    }]);
});

test('spacing in node value gets removed', () => {
    const rootElement = parser
        .parseFromString(`<main class="app"><section>spacing </section></main>`, "text/html")
        .querySelector('.app');

    expect(htmlParser(rootElement.children)).toEqual([{
        type: 'section',
        value: 'spacing',
        attributes: {}
    }]);
});

test('spacing in node value gets removed', () => {
    const rootElement = parser
        .parseFromString(`<main class="app"><nav>hello <h1 class="brand">My Brand</h1></nav></main>`, "text/html")
        .querySelector('.app');

    expect(htmlParser(rootElement.children)).toEqual([{
        type: 'nav',
        value: 'hello',
        attributes: {},
        children: [
            {
                type: 'h1',
                value: 'My Brand',
                attributes: {
                    class: "brand"
                }
            }
        ]
    }]);
});

test('header with links is serialized correctly', () => {
    const rootElement = parser
        .parseFromString(`<main class="app"><header><ul><li>Test</li><li>Test2</li></ul></header></main>`, "text/html")
        .querySelector('.app');

    expect(htmlParser(rootElement.children)).toEqual([{
        type: 'header',
        value: '',
        attributes: {},
        children: [{
            type: 'ul',
            value: '',
            attributes: {},
            children: [
                {
                    type: 'li',
                    value: 'Test',
                    attributes: {}
                },
                {
                    type: 'li',
                    value: 'Test2',
                    attributes: {}
                }
            ],
        }]
    }]);
});