// Test if the script was already added.
if (typeof KATISTIX_PAGE_EDITABLE !== 'undefined') {
    // If it was, then toggle the editable state.
    toggleEditable();
}
else {

    // If it wasn't, then add the script.
    const KATISTIX_PAGE_EDITABLE = true; // Declare that the script was added.

    let KATISTIX_PAGE_EDITABLE_CSS = `
    .toast {
        height: 50px;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: -50px;
        background: #000;
        color: #fff;
        text-align: center;
        font-size: 20px;
        line-height: 50px;
        z-index: 9999;
        opacity: 0.8;
        transition: all 0.5s ease;
    }
    .show {
        bottom: 0px;
    }
    .editableWarning {
        padding: 5px 10px;
        position: fixed;
        bottom: 20px;
        left: 20px;
        height: 30px;
        background: #f7c034;
        color: #000;
        text-align: center;
        line-height: 30px;
        z-index: 9999;
        border-radius: 5px;
        cursor: pointer;
    }
    `;

    const TOASTDURATION = 2000;

    function loadCss() {
        let style = document.createElement("style");
        style.innerHTML = KATISTIX_PAGE_EDITABLE_CSS;
        document.head.appendChild(style);
    }

    function toggleEditable() {
        // This line loads the CSS into the page.
        loadCss();

        // This line toggles the warning.
        toggleWarning();


        // This line determines whether the body is editable or not,
        // and sets the variable editableState to the opposite value.
        let editableState = "true" == document.body.contentEditable ? "false" : "true";
        // console.log(editableState);
        document.body.contentEditable = editableState;

        if (editableState == "true") {
            showToast("Editable mode enabled.");
        } else {
            showToast("Editable mode disabled.");
        }
    }

    // This function adds a warning to the bottom of the page.
    function toggleWarning() {
        let warningExists = document.body.getElementsByClassName("editableWarning").length > 0;
        // If the warning is already on the page, then remove it.
        if (warningExists) {
            let warning = document.body.getElementsByClassName("editableWarning")[0];
            warning.remove();
        }
        // If the warning is not on the page, then add it.
        else {
            let warning = document.createElement("div");
            warning.classList.add("editableWarning");
            warning.onclick = toggleEditable;
            warning.innerHTML = "Editable mode is enabled. Click to disable.";
            document.body.appendChild(warning);
        }
    }



    // A function that displays a nice toast message on the page for x seconds.
    function showToast(message) {
        let toast = document.createElement("div");
        toast.classList.add("toast");
        toast.innerHTML = message;
        document.body.appendChild(toast);
        // Wait 0.1 seconds before showing the toast.
        setTimeout(function () {
            toast.classList.add("show");
        }, 100);

        // Wait 3 seconds before removing the toast.
        setTimeout(function () {
            toast.classList.remove("show");
        }, TOASTDURATION);

        // Wait 3.5 seconds before removing the toast.
        setTimeout(function () {
            toast.remove();
        }, TOASTDURATION + 500);
    }

    toggleEditable();
}
