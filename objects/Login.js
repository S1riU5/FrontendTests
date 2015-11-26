var Login = function () {
    /**
     * Staging and Live enviroment URL's
     */
    var URLLIVE = 'http://devicereg.herokuapp.com/#/login';
    var URL = 'http://localhost:9000/#/login';


    /**
     * All Elements
     */
    var emailInput = element(by.css('form[name=login] input[name=email]'));
    var passwordInput = element(by.css('form[name=login] input[name=password]'));
    var emailError = element(by.css('form[name=login] div[valdr-message]'));
    var loginError = element(by.css('div[role=alert]'));
    var loginButton = element(by.css('[type=submit]'));
    var createAccountLink = element(by.linkText('Create an Account'));
    var forgotPasswordLink = element(by.linkText('Forgot password?'));
    var userbar = element(by.css('a.dropdown-toggle'));
    var logoutLink = element(by.linkText('Logout'));

    /**
     * Open up the browser with the Log in URL selected URL staging
     */
    this.get = function () {
        browser.get(URL);
    };

    /**
     * Fills the email input with a given string.
     *
     * @param email which should fill the Input
     */
    this.setEmail = function (name) {
        emailInput.sendKeys(name);
    };

    /**
     * Fills the password input with a given string.
     *
     * @param password which should fill the Input
     */
    this.setPassword = function (password) {
        passwordInput.sendKeys(password);
    };

    /**
     * Clicks the 'Login' button
     */
    this.clickLoginButton = function () {
        loginButton.click();
    };

    /**
     * Loggs out the user
     */
    this.logout = function () {
        this.get();
        userbar.click();
        logoutLink.click();
    };

    /**
     * Clicks the 'Create an Account' link
     */
    this.clickCreateAccount = function () {
        createAccountLink.click();
    };

    /**
     * Clicks the 'Forgot password?' link
     */
    this.forgotPasswordLink = function () {
        forgotPasswordLink.click();
    };

    /**
     * Returns the error message text
     *
     * @returns the error message text
     */
    this.getLogInErrorMessage = function () {
        return loginError.getText();
    };

    /**
     * Loggs the user in with default values
     */
    this.loginNoInput = function () {
        var conf = require('../conf.js');
        this.get();
        this.setEmail(conf.config.emailMockServer);
        this.setPassword(conf.config.passwordMockServer);
        this.clickLoginButton();
    };

    /**
     * Loggs the user in with given email and password
     *
     * @param email of the user which should log in
     * @param password of the user which should log in
     */
    this.login = function (email, password) {
        this.get();
        this.setEmail(email);
        this.setPassword(password);
        this.clickLoginButton();
    };
};
module.exports = new Login();