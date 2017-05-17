import translationParser from '../src/translationParser';

test('h1 content should contain content of translation item with specified id', () => {
    const language = 'en';

    const elements = [{
        type: 'h1',
        value: 0
    }];

    const translations = {
        en: {
            0: 'hello world'
        }
    };

    expect(translationParser(elements, translations, language)).toEqual([
        {
            type: "h1",
            value: "hello world"
        }
    ]);

});

test('h1 content should contain content of translation item with specified id', () => {
    const language = 'en';

    const elements = [{
        type: 'h1',
        value: 2
    }];

    const translations = {
        en: {
            0: 'hello world',
            2: "testing world"
        }
    };

    expect(translationParser(elements, translations, language)).toEqual([
        {
            type: "h1",
            value: "testing world"
        }
    ]);
});

test('nested children with translation id get replaced with correct translation value', () => {
    const language = 'en';

    const elements = [{
        type: 'section',
        value: 2,
        children: [
            {
                type: 'p',
                value: 1
            }
        ]
    }];

    const translations = {
        en: {
            1: 'second text',
            2: 'first text'
        }
    };

    expect(translationParser(elements, translations, language)).toEqual([
        {
            type: 'section',
            value: 'first text',
            children: [
                {
                    type: 'p',
                    value: 'second text'
                }
            ]
        }
    ]);
});

