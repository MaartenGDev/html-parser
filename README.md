# Html Parser
A tool to convert `html` to `JSON` and `JSON` to `html`.

## Convert JSON to html

```js
const json = `
[
  {
    "type": "div",
    "value": "",
    "children": [
      {
        "type": "h1",
        "value": "test",
        "attributes": {
          "data-translation-id": "46"
        }
      },
      {
        "type": "section",
        "value": "section text",
        "children": [
          {
            "type": "h1",
            "value": "hello"
          }
        ]
      }
    ]
  }
]`;

const html = jsonParser(json)
console.log(html);
```
## Result
```html
<div><h1 data-translation-id="46">test</h1>
    <section>section text<h1>hello</h1></section>
</div>
```

## Convert HTML to JSON
```html
<body class="app">

<h1>My Parser</h1>
<p>It works!</p>

<footer>
    <h3>The footer</h3>
    <p>Copyright!</p>
</footer>
</body>
```
```js
const root = document.querySelector('.app');

console.log(htmlParser(root.children));
```

## Result
```json
[
  {
    "type": "h1",
    "value": "",
    "attributes": {}
  },
  {
    "type": "p",
    "value": "",
    "attributes": {}
  },
  {
    "type": "footer",
    "value": "",
    "attributes": {},
    "children": [
      {
        "type": "h3",
        "value": "",
        "attributes": {}
      },
      {
        "type": "p",
        "value": "",
        "attributes": {}
      }
    ]
  },
  {
    "type": "script",
    "value": "",
    "attributes": {
      "src": "htmlParser.js"
    }
  }
]
```

