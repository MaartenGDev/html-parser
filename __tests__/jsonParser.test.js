import jsonParser from "../src/jsonParser";

test("should be converted to h1 element", () => {
  const elements = [
    {
      type: "h1",
      value: "my title",
      attributes: {},
      children: []
    }
  ];

  expect(jsonParser(elements)).toEqual(`<h1>my title</h1>`);
});

test("list should be generated correctly", () => {
  const elements = [
    {
      type: "ul",
      value: "",
      children: [
        {
          type: "li",
          value: "List Item"
        },
        {
          type: "li",
          value: "Second Item"
        }
      ]
    }
  ];

  expect(jsonParser(elements)).toEqual(
    `<ul><li>List Item</li><li>Second Item</li></ul>`
  );
});

test("attributes should be added to the html elmement", () => {
  const elements = [
    {
      type: "div",
      value: "",
      attributes: {
        "data-translation-id": 46,
        "data-div-name": "MyFirst Div"
      },
      children: [
        {
          type: "header",
          value: "",
          children: [
            {
              type: "script",
              value: "",
              attributes: {
                src: "example.js"
              }
            }
          ]
        }
      ]
    }
  ];

  expect(jsonParser(elements)).toEqual(
    `<div data-translation-id="46" data-div-name="MyFirst Div"><header><script src="example.js"></script></header></div>`
  );
});

test("text of parent element should be inserted before child nodes", () => {
  const elements = [
    {
      type: "section",
      value: "test section",
      children: [
        {
          type: "p",
          value: "Lorem Ipsum"
        }
      ]
    }
  ];

  expect(jsonParser(elements)).toEqual(
    `<section>test section<p>Lorem Ipsum</p></section>`
  );
});

test("node without value property should default to empty string", () => {
  const elements = [
    {
      type: "h1"
    }
  ];

  expect(jsonParser(elements)).toEqual(`<h1></h1>`);
});
