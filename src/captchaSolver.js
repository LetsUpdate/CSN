const {solveCaptcha, convertImageToBase64} = require('./captchaSolverApi');

const $ = window.jQuery; 

//<img class="captchaRefreshIcon" src="App_Themes/Common_Images/refresh.svg" alt="refreshIcon">
function getCaptchaRefreshIcon() {
    return $(".captchaRefreshIcon");
}
//<img class="captchaImage" alt="captchaImage" style="height:85px;width:203px;" src="Captcha.ashx?Page=TWOFACTOR_LOGIN&amp;query=0.10114584349534728">
function getCaptchaImage() {
    return $("#upCaptchaLogin_loginCaptcha > img");
}
//<input id="txtCaptchaLogin" name="Captcha2" type="text" placeholder="Captcha" style="width: 100%;">
function getCaptchaInput() {
    return $("#txtCaptchaLogin");
}
//<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false"><span class="ui-button-text">Belépés</span></button>
//body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.ui-dialog-buttons.ui-draggable > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2)
function getNewLoginButton() {
    // Use a more specific selector to target buttons with text containing 'Belépés' or 'login' (case-insensitive)
    return $("button.ui-button").filter(function() {
        return /belépés|login/i.test($(this).text());
    });
}
//<input orgid="hallgato_default" role="button" type="button" name="btnSubmit" value="Bejelentkezés" onclick="initializePasswordResetModalStep3();return false;__doPostBack('btnSubmit','')" id="btnSubmit" class="login_button">
function getFirstLogin() {
    return $("#btnSubmit");
}

function getErrorLabel() {
    return $("#txtCaptchaLogin-error");
}

function waitForCaptchaRefresh(imageElement,src, interval = 100, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const oldSrc = src;
        const startTime = Date.now();

        const checkCaptcha = () => {
            const currentTime = Date.now();
            if (currentTime - startTime > timeout) {
                reject(new Error('Captcha refresh timeout'));
                return;
            }

            if (imageElement.src !== oldSrc) {
                resolve();
            } else {
                setTimeout(checkCaptcha, interval);
            }
        };

        checkCaptcha();
    });
}

function scanForElementText(element, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const intervalTime = 100; // Interval time in milliseconds
        let elapsedTime = 0;

        const interval = setInterval(() => {
            if(element===null) {return;}
            if (element.text().trim().length > 0) {
                clearInterval(interval);
                resolve(false); // Captcha is invalid
            }

            elapsedTime += intervalTime;
            if (elapsedTime >= timeout) {
                clearInterval(interval);
                reject("TIME_OUT"); // Captcha is valid (no error message appeared within the timeout)
            }
        }, intervalTime);
    });
}

async function StartSolving() {
    const captchaImage = getCaptchaImage();
    const loginButton = getNewLoginButton();
    const captchaInput = getCaptchaInput()
    const captchaRefreshIcon = getCaptchaRefreshIcon();
    for (let i = 0;i<7;i++) {
        try {
            console.log('Solving captcha...');
            const captchaSolution = await solveCaptcha(captchaImage[0]);
            
            
            captchaInput.val(captchaSolution);
            loginButton.click();

            //Mutotion observer observe the error label
            //if the captcha is invalid the error label will not be empty


            //wait for the error label to appear
            console.log('Waiting for error label...');
            try {
                await scanForElementText(getErrorLabel());
                console.log('Captcha is invalid, solving again...');
                getErrorLabel().text("");  
                console.log('waitforCaptchaRefresh');
                src = captchaImage[0].src;
                captchaRefreshIcon.click();
                // wait for the captcha to refresh
                // if the old image is not the same as the new one
                // then we can continue
                await waitForCaptchaRefresh(captchaImage[0],src);
                console.log('Captcha refreshed');
                continue;
            }
            catch (error) {
                if(error === "TIME_OUT") {
                    console.log('TimedOut');
                    return;
                }else {
                    console.error('Failed to solve captcha:', error);
                    return;
                }
                
                return;
            }

        }
        catch (error) {

            if(error === "HARD_IMAGE") {
                captchaRefreshIcon.click();
                await new Promise(resolve => setTimeout(resolve, 1000));
            }else if (error === "BASE64_CONVERSION_FAILED") {
                //wait a bit and try again
                await new Promise(resolve => setTimeout(resolve, 1000));
            }else {
            
            console.error('Failed to solve captcha:', error);
            return;
            } 
        }
    }


}


function waitForDialog() {
    const targetSelector = 'body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.ui-dialog-buttons.ui-draggable';
    const interval = setInterval(() => {
        const targetNode = document.querySelector(targetSelector);
        if (targetNode && window.getComputedStyle(targetNode).display === 'block') {
            console.log('Dialog is shown!');
            StartSolving();
            clearInterval(interval); // Stop checking after the element is shown
        }
    }, 100); // Check every 100 milliseconds
}

function LookForCaptcha() {

        waitForDialog();

    console.log('Observing document body for changes...');
}



module.exports = { LookForCaptcha};