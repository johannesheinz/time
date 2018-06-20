"use strict";

/* HTML DOM elements */
var timeElement = document.getElementById('time');

/* Refresh date every x milliseconds */
var refreshRate = 333;

/**
 * Display the current local time. Refreshes at the specified rate.
 */
function displayTime() {

    var now = new Date();
    
    var hours = addPadding(now.getHours());
    var minutes = addPadding(now.getMinutes());
    var seconds = addPadding(now.getSeconds());

    timeElement.innerHTML = hours + ":" + minutes + ":" + seconds;

    /* Repeat self every third of a second */
    setTimeout(displayTime, refreshRate);
}

/**
 * Adds a trailing zero in front of numbers less than 10
 * in order to always display two characters.
 */
function addPadding(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

/* Start timer after document has been loaded completely. */
window.onload = displayTime;
