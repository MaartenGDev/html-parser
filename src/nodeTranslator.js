let translationsStorage = {};

const getTranslation = (value, language) => {
    if(!translationsStorage.hasOwnProperty(language)){
        translationsStorage[language] = {};
    }
    const translationIndex = Object.keys(translations[language]).find(x => translationsStorage[language][x] === value);

    const hasTranslation = translationIndex !== undefined;
    const nextKey = Object.keys(translationsStorage[language]).length;

    if(hasTranslation){
        return translationIndex;
    }

    translationsStorage[language][nextKey] = value;

    return {translationId: nextKey, translations: translationsStorage};
};

const replaceNodeValueWithTranslation = (elements, language) => {
    return elements.map(e => {
        const isContainer = e.hasOwnProperty('children');

        const {translationId, translations} = getTranslation(e.value, language);

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

