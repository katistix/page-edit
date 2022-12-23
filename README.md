# Page Edit

A bookmarklet that enables you to change the contents of any web page.

## Features

- Toggle on/off with a simple toast notification

## How to use the bookmarklet?

You just need to create a new bookmark and insert this code inside the URL field:

```js
javascript:(()=>{if("undefined"!=typeof KATISTIX_PAGE_EDITABLE)console.log("Script already added."),toggleEditable();else{let e="\n .toast {\n height: 50px;\n width: 100%;\n position: fixed;\n left: 0;\n right: 0;\n bottom: -50px;\n background: #000;\n color: #fff;\n text-align: center;\n font-size: 20px;\n line-height: 50px;\n z-index: 9999;\n opacity: 0.8;\n transition: all 0.5s ease;\n }\n .show {\n bottom: 0px;\n }\n ";const t=2e3;function loadCss(){let t=document.createElement("style");t.innerHTML=e,document.head.appendChild(t)}function toggleEditable(){loadCss();let e="true"==document.body.contentEditable?"false":"true";console.log(e),document.body.contentEditable=e,showToast("true"==e?"Editable mode enabled.":"Editable mode disabled.")}function showToast(e){let n=document.createElement("div");n.classList.add("toast"),n.innerHTML=e,document.body.appendChild(n),setTimeout((function(){n.classList.add("show")}),100),setTimeout((function(){n.classList.remove("show")}),t),setTimeout((function(){n.remove()}),t+500)}toggleEditable()}})();
```

This code defines the necessary functions and calls the `toggleEditable()` function.

If the script is already loaded, there will no longer be function definitions

## Future updates and known bugs

- The function definitions might not be useful, will convert tha code to plain sequence instead of defining functions and then calling them
- Will add a badge that's always visible when in edit mode
