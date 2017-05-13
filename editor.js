document.onkeydown = e => {
    const {target} = e;

    if (e.key === "Tab") {
        const {value, selectionStart, selectionEnd} = target;

        target.value = value.substring(0, selectionEnd) + '\t' + value.substring(selectionEnd);

        target.selectionStart = target.selectionEnd = selectionStart + 1;

        event.preventDefault();
    }

};

document.querySelector('.editor__window--json').oninput = e => {
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
    return JSON.parse(document.querySelector('.editor__window--json').value);
};

const setJsonFieldContent = json => {
    document.querySelector('.editor__window--json').value = JSON.stringify(json, null, 2);
};

const setHtmlFieldContent = content => {
    document.querySelector('.editor__window--html').innerHTML = content;
};