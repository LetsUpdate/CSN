const utils = require("./utils");
const { LookForCaptcha } = require('./captchaSolver');


function waitForKeyElements(
    selectorOrFunction,
    callback,
    checkFrequencyInMs = 300,
    timeoutInMs = 30000
) {
    let startTimeInMs = Date.now();

    function check() {
        let found =
            typeof selectorOrFunction === "function"
                ? selectorOrFunction()
                : document.querySelector(selectorOrFunction);

        if (found) {
            callback(found);
        } else if (Date.now() - startTimeInMs < timeoutInMs) {
            setTimeout(check, checkFrequencyInMs);
        }
    }

    check();
}

(function () {
    'use strict';
    console.log("Hello from main.user.js    ");


    if (utils.isNeptunPage() && utils.isLoginPage()) {
        // Set up a Mutation Observer to watch for changes in the DOM
        console.log("LookForCaptcha");
        LookForCaptcha();
    }
})();