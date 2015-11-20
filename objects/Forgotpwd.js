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
    var divError = element(by.id('serial_error'));

    this.get = function() {
        browser.get(URLLIVE);
    };

    this.setEmail = function(name) {
        emailInput.sendKeys(name);
    };

    this.clickResetPasswordButton = function() {
        resetPasswordButton.click().then(function(){
            browser.driver.sleep(1000);
        });
    };

    this.getErrorMessage = function() {
        return divError.getText();
    };
};
module.exports = new Register();