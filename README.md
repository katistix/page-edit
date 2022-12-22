# Page Edit

A bookmarklet that enables you to change the contents of any web page.

## Features

- Toggle on/off with a simple toast notification

## How to use the bookmarklet?

You just need to create a new bookmark and insert inside the URL field this code:

```javascript
javascript: void (document.body.appendChild(
  document.createElement("script")
).src = "https://cdn.statically.io/gh/katistix/page-edit/main/script.js");
```

This loads a the `script.js` file from this repo and calls the `toggleEditable` function.

If the script is already loaded, there will no longer be function definitions

## Future updates and known bugs

- The script is still technically loaded each time you press the bookmarklet, this needs a fix to improve efficiency.
- Will move all the code inside the bookmarklet code, no external code loading, to avoid CORS errors
- Will add a badge that's allways visible when in edit mode
