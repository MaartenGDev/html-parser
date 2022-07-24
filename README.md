[![Build Status](https://travis-ci.org/MaartenGDev/html-parser.svg?branch=master)](https://travis-ci.org/MaartenGDev/html-parser)
[![Coverage Status](https://coveralls.io/repos/github/MaartenGDev/html-parser/badge.svg?branch=master)](https://coveralls.io/github/MaartenGDev/html-parser?branch=master)

# Html Parser
A tool to convert `html` to `JSON` and `JSON` to `html`.

## Demo
- [Try json-to-html feature online](https://maartengdev.github.io/html-parser/)
- [Try translation feature online](https://maartengdev.github.io/html-parser/translation.html)

## Convert JSON to html

```js
import jsonParser from './jsonParser';

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
### Result
```html
<div><h1 data-translation-id="46">test</h1>
    <section>section text<h1>hello</h1></section>
</div>
```

## Convert HTML to JSON
```html
<main class="app">
    <h1>My Parser</h1>
    <p>It works!</p>

    <footer>
        my footer text
        <h3>The footer</h3>
        <p>Copyright!</p>
    </footer>
</main>
```
```js
import htmlParser from './htmlParser';

const root = document.querySelector('.app');

console.log(JSON.stringify(htmlParser(root.children)));
```

### Result
```json
[
  {
    "type": "h1",
    "value": "My Parser",
    "attributes": {}
  },
  {
    "type": "p",
    "value": "It works!",
    "attributes": {}
  },
  {
    "type": "footer",
    "value": "my footer text",
    "attributes": {},
    "children": [
      {
        "type": "h3",
        "value": "The footer",
        "attributes": {}
      },
      {
        "type": "p",
        "value": "Copyright!",
        "attributes": {}
      }
    ]
  }
]
```

# Getting started

## HTML to json 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body class="app">

<h1>My Parser</h1>
<p>It works!</p>

<footer>
    my footer text
    <h3>The footer</h3>
    <p>Copyright!</p>
</footer>
<script src="htmlParser.js"></script>
<script>
    const root = document.querySelector('.app');

    console.log(JSON.stringify(htmlParser(root.children), null, 2));
</script>
</body>
</html>
```

## JSON to HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
<main class="app"></main>

<script src="jsonParser.js"></script>
<script>
    const data = [
        {
            type: "section",
            children: [
                {
                    type: "h1",
                    value: "My Title"
                },
                {
                    type: "p",
                    value: "my description"
                }
            ]
        }
    ];

    const html = jsonParser(data);

    document.querySelector('.app').innerHTML = html;
</script>

</body>
</html>
```
