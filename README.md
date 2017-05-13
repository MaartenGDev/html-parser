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