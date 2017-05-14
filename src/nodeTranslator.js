let translations = {};

const getTranslationId = (value, language) => {
    if(!translations.hasOwnProperty(language)){
        translations[language] = {};
    }
    const translationIndex = Object.keys(translations[language]).find(x => translations[language][x] === value);

    const hasTranslation = translationIndex !== undefined;
    const nextKey = Object.keys(translations[language]).length;

    if(hasTranslation){
        return translationIndex;
    }


    translations[language][nextKey] = value;

    return nextKey;
};

const replaceNodeValueWithTranslation = (elements, language) => {
    return elements.map(e => {
        const isContainer = e.hasOwnProperty('children');

        e.value = getTranslationId(e.value, language);

        if(isContainer){
            e.children = replaceNodeValueWithTranslation(e.children, language);
        }

        return e;
    });
};

export const nodeTranslator = (elements, language) => {
    elements = replaceNodeValueWithTranslation(elements, language);

    return {
        elements,
        translations
    };
};

export const translationParser = (elements, translations, language) => {
    return elements.map(e => {
        const isContainer = e.hasOwnProperty('children');

        e.value = translations[language][e.value];

        if(isContainer){
            e.children = translationParser(e.children, translations, language);
        }

        return e;
    });
};

