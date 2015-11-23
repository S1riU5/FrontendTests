var Register = function() {

    /**
     * Staging and Live enviroment URL's
     */
    var URLLIVE ='http://devicereg.herokuapp.com/#/register';
    var URL ='http://localhost:9000/#/register';
    //TODO get correct Code
    var invitationCode = 111;

    var firstnameInput = element(by.model('user.firstname'));
    var lastnameInput = element(by.model('user.lastname'));
    var emailInput = element(by.model('user.email'));
    var serialInput = element(by.model('user.serial'));
    //TODO ID instead of css class
    var createAccountButton = element(by.css('.btn'));
    //TODO check if correct ID
    var divError = element(by.id('serial_error'));

    this.get = function() {
        browser.get(URLLIVE);
    };

    this.setEmail = function(name) {
        emailInput.sendKeys(name);
    };

    this.setFirstname = function(name) {
        firstnameInput.sendKeys(name);
    };

    this.setLastname = function(name) {
        lastnameInput.sendKeys(name);
    };

    this.setSerial = function(name) {
        serialInput.sendKeys(name);
    };

    this.clickCreateAccountButton = function() {
        createAccountButton.click().then(function(){
            browser.driver.sleep(1000);
        });
    };

    this.getErrorMessage = function() {
        return divError.getText();
    };

    this.getInvCode = function() {
        return invitationCode;
    };

};
module.exports = new Register();