"use strict";

/* JavaScript key codes */
var keyO = 79;
var keyB = 66;
var keyW = 87;
var keyD = 68;
var keyL = 76;

/* HTML DOM elements */
var bodyElement = document.getElementById('main');

/**
 * Adjusts the CSS class of the timer depending on the pressed key.
 */
function changeTheme(keyCode) {

    switch (keyCode) {
        case keyO:
            // Original theme
            bodyElement.className = 'original';
            break;
        case keyB:
            // Black theme
            bodyElement.className = 'black';
            break;
        case keyW:
            // White theme
            bodyElement.className = 'white';
            break;
        case keyD:
            // Solarized Dark theme
            bodyElement.className = 'dark';
            break;
        case keyL:
            // Solarized Light theme
            bodyElement.className = 'light';
            break;
        default:
            // Don't change theme
    }
}

/**
 * Registers the keyboard listener after the document has loaded.
 */
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

        /* Register keyboard listener */
        window.onkeyup = function (event) {
            var key = event.keyCode ? event.keyCode : event.which;
            changeTheme(key);
        }
    }
}
