import { nodeTranslator, translationParser } from '../nodeTranslator';

const loadSampleButton = document.querySelector('.editor__actions--sample');
const translateJsonButton = document.querySelector('.editor__actions--translate');

let language = 'en';

const EDITOR_PANELS = {
    JSON_PANEL: document.querySelector('.editor__input--json'),
    TRANSLATION_PANEL: document.querySelector('.editor__input--translations'),
    PREVIEW_PANEL: document.querySelector('.editor__input--preview')
};


const loadExampleData = () => {
    const json = [
        {type: 'div', value: 'Hello World', attributes: {hello: 'world', src: 'test'}, children: [
            {type: 'h1', value: 'test'},
            {type: 'p', value: 'hello world', children: [{type: 'h1', value: 'hello'}]}]
        }
    ];


    setJsonPanelContent(json);
};

const getJsonPanelContent = () => {
    return JSON.parse(EDITOR_PANELS.JSON_PANEL.value);
};


const translateJson = () => {
    const {elements, translations} = nodeTranslator(getJsonPanelContent(), language);

    setJsonPanelContent(elements);

    setTranslationPanelContent(translations);

    setPreviewPanelContent(translationParser(elements, translations, language));
};

loadSampleButton.onclick = loadExampleData;
translateJsonButton.onclick = translateJson;

EDITOR_PANELS.TRANSLATION_PANEL.oninput = () => {
    const translations = getTranslationPanelContent();

    setPreviewPanelContent(translationParser(getJsonPanelContent(), translations, language));

};

EDITOR_PANELS.JSON_PANEL.oninput = () => {
    const translations = getTranslationPanelContent();
    const elements = getJsonPanelContent();

    setPreviewPanelContent(translationParser(elements, translations, language));
};


const setJsonPanelContent = json => {
    EDITOR_PANELS.JSON_PANEL.value =  JSON.stringify(json, null, 2);
};

const getTranslationPanelContent = () => {
    return JSON.parse(EDITOR_PANELS.TRANSLATION_PANEL.value);
};
const setTranslationPanelContent = json => {
    EDITOR_PANELS.TRANSLATION_PANEL.value = JSON.stringify(json, null, 2);
};

const setPreviewPanelContent = json => {
    EDITOR_PANELS.PREVIEW_PANEL.value = JSON.stringify(json, null, 2);
};