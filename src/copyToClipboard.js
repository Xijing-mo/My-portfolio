function copyToClipboard(email, name) {
    console.log("function called");
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(`${name} has been copied to the clipboard!`);
  }