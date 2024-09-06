const utils = require("./utils");
const { LookForCaptcha } = require('./captchaSolver');
const {PlaceLogo} = require('./UImodul');



(function () {
    'use strict';

    if (utils.isNeptunPage() && utils.isLoginPage()) {
        // Set up a Mutation Observer to watch for changes in the DOM

        //Prevent npu to press login after the user too
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const $abortLoginLink = $('#abortLogin > a');
                if ($abortLoginLink.length) {
                    $abortLoginLink[0].click();
                }
            }
        });
        console.log("LookForCaptcha");
        PlaceLogo();
        LookForCaptcha();
    }
})();