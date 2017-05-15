const translationParser = (elements, translations, language) => {
    return elements.map(e => {
        const isContainer = e.hasOwnProperty('children');

        e.value = translations[language][e.value];

        if(isContainer){
            e.children = translationParser(e.children, translations, language);
        }

        return e;
    });
};

export default translationParser;