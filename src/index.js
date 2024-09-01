const utils = require("./utils");
const { LookForCaptcha } = require('./captchaSolver');
const {PlaceLogo} = require('./UImodul');



(function () {
    'use strict';

    if (utils.isNeptunPage() && utils.isLoginPage()) {
        // Set up a Mutation Observer to watch for changes in the DOM
        console.log("LookForCaptcha");
        PlaceLogo();
        LookForCaptcha();
    }
})();