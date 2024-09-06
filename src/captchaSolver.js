const { solveCaptcha } = require('./captchaSolverApi');
const { SetState, LogoState } = require('./UImodul');

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
    return $("button.ui-button").filter(function () {
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

function scanForElementText(element, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const intervalTime = 100; // Interval time in milliseconds
        let elapsedTime = 0;

        const interval = setInterval(() => {
            if (element === null) { return; }
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
let tryes = 0;
async function StartSolving(imgsrc) {

    if (tryes > 4) {
        SetState(LogoState.error);
        return;
    }
    SetState(LogoState.solving);
    tryes++;


    const captchaImage = getCaptchaImage();
    const loginButton = getNewLoginButton();
    const captchaInput = getCaptchaInput()
    const captchaRefreshIcon = getCaptchaRefreshIcon();

    try {
        console.log('Solving captcha...');
        await new Promise((resolve) => setTimeout(resolve, 100));
        let captchaSolution;
        if (imgsrc === captchaImage[0].src) {
            captchaSolution = await solveCaptcha(captchaImage[0]);
        } else {
            console.log('Captcha image changed, terminating...');
            return;
        }


        captchaInput.val(captchaSolution);

        if (imgsrc === captchaImage[0].src) {
            await new Promise((resolve) => setTimeout(resolve, 100));
            loginButton.click();
            console.log('Captcha solved:', captchaSolution);
        } else {
            console.log('Captcha image changed, terminating...');
            return;
        }

        // Ne spammeljük a szervert szét
        await new Promise((resolve) => setTimeout(resolve, 500));


        //Mutotion observer observe the error label
        //if the captcha is invalid the error label will not be empty


        //wait for the error label to appear
        console.log('Waiting for error label...');
        try {
            await scanForElementText(getErrorLabel());
            console.log('Captcha is invalid:', getErrorLabel().text());
            getErrorLabel().text("");
            console.log('waitforCaptchaRefresh');
            captchaRefreshIcon.click();
            return;
        }
        catch (error) {
            if (error === "TIME_OUT") {
                console.log('TimedOut');
            } else {
                console.error('Failed to solve captcha:', error);
            }
            return;
        }

    }
    catch (error) {

        if (error === "HARD_IMAGE") {
            captchaRefreshIcon.click();

        } else {

            console.error('Failed to solve captcha:', error);
            SetState(LogoState.networkError);
            return;
        }
    }
}




function handleImageLoad() {
    console.log('Image loaded:', getCaptchaImage()[0].src);
    StartSolving(getCaptchaImage()[0].src);
}



function LookForCaptcha() {

    const $imgElement = getCaptchaImage();
    const imgElement = $imgElement[0];

    //onbutton click reset tryes
    getFirstLogin().click(function () {
        tryes = 0;
    });

    // Check if the element exists
    if (imgElement) {
        // Create a new MutationObserver
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                    console.log('Image src changed to:', imgElement.src);


                    // Attach a load event listener to ensure the image is loaded
                    $imgElement.off('load').on('load', function () {
                        if (this.complete && this.naturalWidth > 0) {
                            handleImageLoad();
                        }
                    });

                    // Also handle the case where the image might already be cached
                    // if (imgElement.complete && imgElement.naturalWidth > 0) {
                    //     console.log('Image loaded from cache:', imgElement.src);
                    //     handleImageLoad();
                    // }


                }
            });
        });

        // Start observing the image element for changes in its attributes
        observer.observe(imgElement, {
            attributes: true // Listen for attribute changes
        });
    } else {
        console.error('Image element not found');
    }

    console.log('Observing document body for changes...');
}



module.exports = { LookForCaptcha };