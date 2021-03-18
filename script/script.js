tinymce.init({
    selector: '#initialTextArea',
    setup: function (editor) {
        editor.on('input', function (e) {
            transformTerms();
        });
        editor.on('ExecCommand', function (e) {
            console.log('The ' + e.command + ' command was fired.');
            transformTerms();
        });
    },
});

function transformTerms() {
    result = tinyMCE.get('initialTextArea').getContent({ format: 'html' });
    /* Adds the formatted text to the Result Text Area */
    document.getElementById('resultTextArea').innerHTML = result;
}

function copyToClipboard() {
    /* Gets the text field */
    const textToBeCopied = document.getElementById('resultTextArea');
    /* Selects the textarea */
    textToBeCopied.select();
    /* Sets the start and end positions of the current text selection for mobile devices */
    textToBeCopied.setSelectionRange(0, 99999);
    /* Executes command to copy the text inside the textarea */
    document.execCommand('copy');
}
