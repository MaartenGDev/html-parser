import htmlParser from '../htmlParser';
import jsonParser from '../jsonParser';

const loadSampleButton = document.querySelector('.editor__actions--sample');

const EDITOR_PANELS = {
    JSON_PANEL: document.querySelector('.editor__input--json'),
    HTML_PANEL: document.querySelector('.editor__input--html'),
    PREVIEW_PANEL: document.querySelector('.editor__content--preview')
};


document.onkeydown = e => {
    const {target} = e;

    if (e.key === "Tab") {
        const {value, selectionStart, selectionEnd} = target;

        target.value = value.substring(0, selectionEnd) + '\t' + value.substring(selectionEnd);

        target.selectionStart = target.selectionEnd = selectionStart + 1;

        event.preventDefault();
    }

};

EDITOR_PANELS.JSON_PANEL.oninput = () => {
    setHtmlPanelContent(jsonParser(getJsonPanelContent()));
    setPreviewPanelContent(getHtmlPanelContent());
};

EDITOR_PANELS.HTML_PANEL.oninput = () => {
    setPreviewPanelContent(getHtmlPanelContent());
    setJsonPanelContent(htmlParser(EDITOR_PANELS.PREVIEW_PANEL.children))
};

const loadExampleData = () => {
    const json = [
        {type: 'div', value: 'Hello World', attributes: {hello: 'world', src: 'test'}, children: [
            {type: 'h1', value: 'test'},
            {type: 'p', value: 'hello world', children: [{type: 'h1', value: 'hello'}]}]
        }
    ];


    setJsonPanelContent(json);

    const html = jsonParser(json);

    setHtmlPanelContent(html);
    setPreviewPanelContent(html);
};

loadSampleButton.onclick = loadExampleData;



const getHtmlPanelContent = () => {
    return EDITOR_PANELS.HTML_PANEL.value;
};


const getJsonPanelContent = () => {
    return JSON.parse(EDITOR_PANELS.JSON_PANEL.value);
};

const setJsonPanelContent = json => {
    EDITOR_PANELS.JSON_PANEL.value = JSON.stringify(json, null, 2);
};

const setHtmlPanelContent = content => {
    EDITOR_PANELS.HTML_PANEL.value = content;
};

const setPreviewPanelContent = content => {
    EDITOR_PANELS.PREVIEW_PANEL.innerHTML = content;
};