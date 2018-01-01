import nodeTranslator from "../src/nodeTranslator";

test("basic strings should be stored in object with keys starting in 0", () => {
  const language = "en";

  const jsonElements = [
    {
      type: "h1",
      value: "First",
      children: [
        {
          type: "span",
          value: "Hello World"
        }
      ]
    }
  ];

  const { elements, translations } = nodeTranslator(jsonElements, language);

  expect(elements).toEqual([
    {
      type: "h1",
      value: 0,
      children: [
        {
          type: "span",
          value: 1
        }
      ]
    }
  ]);

  expect(translations).toEqual({
    en: {
      0: "First",
      1: "Hello World"
    }
  });
});

test("the same string get the same translation key", () => {
  const language = "en";

  const jsonElements = [
    {
      type: "ul",
      value: "my list",
      children: [
        {
          type: "li",
          value: "list item"
        },
        {
          type: "li",
          value: "list item"
        }
      ]
    },
    {
      type: "h3",
      value: "Test String",
      children: [
        {
          type: "h2",
          value: "Test String"
        }
      ]
    }
  ];

  const { elements, translations } = nodeTranslator(jsonElements, language);

  expect(elements).toEqual([
    {
      type: "ul",
      value: 0,
      children: [
        {
          type: "li",
          value: 1
        },
        {
          type: "li",
          value: 1
        }
      ]
    },
    {
      type: "h3",
      value: 2,
      children: [
        {
          type: "h2",
          value: 2
        }
      ]
    }
  ]);

  expect(translations).toEqual({
    en: {
      0: "my list",
      1: "list item",
      2: "Test String"
    }
  });
});
