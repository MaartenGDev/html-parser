import nodeTranslator from '../nodeTranslator';

const loadSampleButton = document.querySelector('.editor__actions--sample');
const translateJsonButton = document.querySelector('.editor__actions--translate');

const EDITOR_PANELS = {
    JSON_PANEL: document.querySelector('.editor__input--json'),
    TRANSLATION_PANEL: document.querySelector('.editor__input--translations')
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
    setTranslationPanelContent(nodeTranslator(getJsonPanelContent()));
};

loadSampleButton.onclick = loadExampleData;
translateJsonButton.onclick = translateJson;



const setJsonPanelContent = json => {
    EDITOR_PANELS.JSON_PANEL.value =  JSON.stringify(json, null, 2);
};

const setTranslationPanelContent = json => {
    EDITOR_PANELS.TRANSLATION_PANEL.value = JSON.stringify(json, null, 2);
};