import nodeTranslator from '../nodeTranslator';
import translationParser from '../translationParser';

const loadSampleButton = document.querySelector('.editor__actions--sample');
const translateJsonButton = document.querySelector('.editor__actions--translate');
const languageInput =  document.querySelector('.form__input--language');
const setLanguageButton = document.querySelector('.editor__actions--set-language');

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
    const {elements, translations} = nodeTranslator(getJsonPanelContent(), getLanguage());

    setJsonPanelContent(elements);

    setTranslationPanelContent(translations);

    setPreviewPanelContent(translationParser(elements, translations, getLanguage()));
};

loadSampleButton.onclick = loadExampleData;
translateJsonButton.onclick = translateJson;
setLanguageButton.onclick = () => {
    const translations = getTranslationPanelContent();

    setPreviewPanelContent(translationParser(getJsonPanelContent(), translations, getLanguage()));
};

EDITOR_PANELS.TRANSLATION_PANEL.oninput = () => {
    const translations = getTranslationPanelContent();

    setPreviewPanelContent(translationParser(getJsonPanelContent(), translations, getLanguage()));

};

EDITOR_PANELS.JSON_PANEL.oninput = () => {
    const translations = getTranslationPanelContent();
    const elements = getJsonPanelContent();

    setPreviewPanelContent(translationParser(elements, translations, getLanguage()));
};

const getLanguage = () => {
    return languageInput.value;
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