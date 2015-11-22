var Forgotpwd = function() {

    /**
     * Staging and Live enviroment URL's
     */
    var URLLIVE ='http://devicereg.herokuapp.com/#/forgotpwd';
    var URL ='http://localhost:9000/#/forgotpwd';

    var emailInput = element(by.model('user.email'));
    //TODO ID instead of css class
    var resetPasswordButton = element(by.css('.btn'));
    //TODO check if correct ID
    var divError = element(by.id('incorrect_email'));
    //TODO check if correct ID
    var divSuccess = element(by.id('success_message'));

    /**
     * Open up the browser with the Log in URL selected URL staging
     */
    this.get = function() {
        browser.get(URLLIVE);
    };

    /**
     * Fills the email input with a given string.
     *
     * @param email which should fill the Input
     */
    this.setEmail = function(email) {
        emailInput.sendKeys(email);
    };

    /**
     * Clicks the 'Reset Password' button
     */
    this.clickResetPasswordButton = function() {
        resetPasswordButton.click();
    };

    /**
     * Returns the error message text
     *
     * @returns the error message text
     */
    this.getErrorMessage = function() {
        return divError.getText();
    };

    /**
     * Returns the success message text
     *
     * @returns the success message text
     */
    this.getSuccessMessage = function() {
        return divSuccess.getText();
    };
};
module.exports = new Forgotpwd();