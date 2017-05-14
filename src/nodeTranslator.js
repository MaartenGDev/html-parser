const translations = [];

const getTranslation = value => {
    const translationIndex = translations.findIndex(x => x === value);
    const hasTranslation = translationIndex !== -1;

    if(hasTranslation){
        return translationIndex;
    }

    return translations.push(value) - 1;
};

const nodeTranslator = (elements) => {
    return elements.map(e => {
        const isContainer = e.hasOwnProperty('children');

        e.value = getTranslation(e.value);

        if (isContainer) {
            const children = nodeTranslator(e.children);

            return e;
        }
        return e;
    });
};


export default nodeTranslator;