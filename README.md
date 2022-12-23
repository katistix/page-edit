# Page Edit

A bookmarklet that enables you to change the contents of any web page.

## Features

- Toggle on/off with a simple toast notification
- Display a clickable warning at the bottom of the page to tell when you are in editable mode

## How to use the bookmarklet?

You just need to create a new bookmark and insert this code inside the URL field:

```js
javascript:(()=>{if("undefined"!=typeof KATISTIX_PAGE_EDITABLE)toggleEditable();else{let e="\n    .toast {\n        height: 50px;\n        width: 100%;\n        position: fixed;\n        left: 0;\n        right: 0;\n        bottom: -50px;\n        background: #000;\n        color: #fff;\n        text-align: center;\n        font-size: 20px;\n        line-height: 50px;\n        z-index: 9999;\n        opacity: 0.8;\n        transition: all 0.5s ease;\n    }\n    .show {\n        bottom: 0px;\n    }\n    .editableWarning {\n        padding: 5px 10px;\n        position: fixed;\n        bottom: 20px;\n        left: 20px;\n        height: 30px;\n        background: #f7c034;\n        color: #000;\n        text-align: center;\n        line-height: 30px;\n        z-index: 9999;\n        border-radius: 5px;\n        cursor: pointer;\n    }\n    ";const n=2e3;function loadCss(){let n=document.createElement("style");n.innerHTML=e,document.head.appendChild(n)}function toggleEditable(){loadCss(),toggleWarning();let e="true"==document.body.contentEditable?"false":"true";document.body.contentEditable=e,showToast("true"==e?"Editable mode enabled.":"Editable mode disabled.")}function toggleWarning(){if(document.body.getElementsByClassName("editableWarning").length>0){document.body.getElementsByClassName("editableWarning")[0].remove()}else{let e=document.createElement("div");e.classList.add("editableWarning"),e.onclick=toggleEditable,e.innerHTML="Editable mode is enabled. Click to disable.",document.body.appendChild(e)}}function showToast(e){let t=document.createElement("div");t.classList.add("toast"),t.innerHTML=e,document.body.appendChild(t),setTimeout((function(){t.classList.add("show")}),100),setTimeout((function(){t.classList.remove("show")}),n),setTimeout((function(){t.remove()}),n+500)}toggleEditable()}})();
```

This code defines the necessary functions and calls the `toggleEditable()` function.

If the script is already loaded, there will no longer be function definitions

## Future updates and known bugs

- The function definitions might not be useful, will convert the code to plain sequence instead of defining functions and then calling them
- Will fix CSS formatting, right now it includes spaces and tabs too, this only takes space
