import htmlParser from '../src/htmlParser';

const parser = new DOMParser();
const doc = parser.parseFromString(`<main class="app"><h1>test</h1></main>`, "text/html");

const rootElement = doc.querySelector('.app');

test('should return h1 json object', () => {

    expect(htmlParser(rootElement.children)).toEqual([{
        attributes: {},
        type: 'h1',
        value: 'test'
    }]);
});