const $ = window.jQuery;

// Verify that we are indeed on a Neptun page
function isNeptunPage() {
    return document.title.toLowerCase().indexOf("neptun.net") !== -1;
}

// Returns whether we are on the login page
function isLoginPage() {
    return $("td.login_left_side").size() > 0;
}

module.exports = {
    isNeptunPage,
    isLoginPage,
};
