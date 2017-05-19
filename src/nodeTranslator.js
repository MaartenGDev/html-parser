let translationsStorage = {};

const getTranslation = (value, language) => {
    if(!translationsStorage.hasOwnProperty(language)){
        translationsStorage[language] = {};
    }
    const translationIndex = Object.keys(translationsStorage[language]).find(x => translationsStorage[language][x] === value);

    const hasTranslation = translationIndex !== undefined;
    const nextKey = Object.keys(translationsStorage[language]).length;

    if(hasTranslation){
        return {translationId: parseInt(translationIndex), translations: translationsStorage};
    }

    translationsStorage[language][nextKey] = value;

    return {translationId: nextKey, translations: translationsStorage};
};

const replaceNodeValueWithTranslation = (elements, language) => {
    debugger;
    return elements.map(e => {
        const isContainer = e.hasOwnProperty('children');

        const {translationId} = getTranslation(e.value, language);

        e.value = translationId;

        if(isContainer){
            e.children = replaceNodeValueWithTranslation(e.children, language);
        }

        return e;
    });
};

export default (elements, language) => {
    return {
        elements: replaceNodeValueWithTranslation(elements, language),
        translations: translationsStorage
    };
};

