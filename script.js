function transformTerms() {
    const str = document.getElementById("initialTextArea").value;
    /* Regular expression */
    const re = /(.*\S)/gi;
    /* The p tags to be added around each line*/
    const subst = "<p>$1</p>";
    /* Adds regex to the variable that contains the initial text area
    and saves it on the variable result*/
    const result = str.replace(re, subst);
    /* The Result Text Area receives the formatted text */
    document.getElementById("resultTextArea").innerHTML = result;
  }

  function copyToClipboard() {
    /* Gets the text field */
    const textToBeCopied = document.getElementById("resultTextArea");
    /* Selects the textarea */
    textToBeCopied.select();
    /* For mobile devices */
    textToBeCopied.setSelectionRange(0, 99999);
    /* Executes command to copy the text inside the textarea */
    document.execCommand("copy");
  }
