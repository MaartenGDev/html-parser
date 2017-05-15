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

    return {translationId: nextKey, translations};
};

const replaceNodeValueWithTranslation = (elements, language) => {
    return elements.map(e => {
        const isContainer = e.hasOwnProperty('children');

        const {translationId, translations} = getTranslationId(e.value, language);

        e.value = translationId;

        if(isContainer){
            e.children = replaceNodeValueWithTranslation(e.children, language, translations);
        }

        return e;
    });
};

export default (elements, language) => {
    return {
        elements: replaceNodeValueWithTranslation(elements, language),
        translations
    };
};

