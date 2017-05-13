const jsonField = document.querySelector('.editor__window--json');
const htmlField = document.querySelector('.editor__window--html');

document.onkeydown = e => {
    const {target} = e;

    if (e.key === "Tab") {
        const {value, selectionStart, selectionEnd} = target;

        target.value = value.substring(0, selectionEnd) + '\t' + value.substring(selectionEnd);

        target.selectionStart = target.selectionEnd = selectionStart + 1;

        event.preventDefault();
    }

};

jsonField.oninput = () => {
    setHtmlFieldContent(jsonParser(getJsonFieldContent()));
};

document.querySelector('.editor__actions--sample').onclick = e => {
    let json = [
        {type: 'div', value: 'Hello World', attributes: { hello: 'world', src: 'test' }, children: [
            { type: 'h1', value: 'test'},
            { type: 'p', value: 'hello world',
                children: [{ type: 'h1',value: 'hello' }]}
            ]
        }
    ];


    setJsonFieldContent(json);
    setHtmlFieldContent(jsonParser(json));
};

const getJsonFieldContent = () => {
    return JSON.parse(jsonField.value);
};

const setJsonFieldContent = json => {
    jsonField.value = JSON.stringify(json, null, 2);
};

const setHtmlFieldContent = content => {
    htmlField.innerHTML = content;
};