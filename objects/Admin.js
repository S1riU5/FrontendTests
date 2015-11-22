var Admin = function() {
    /**
     * Staging and Live enviroment URL's
     */
    var URLLIVE ='http://devicereg.herokuapp.com/#/admin';
    var URL ='http://localhost:9000/#/admin';

    /**
     * All Elements
     */
    var emailInput = element(by.css('form[name=inviteForm] input[name=email]'));
    var firstNameInput = element(by.css('form[name=inviteForm] input[name=firstName]'));
    var lastNameInput = element(by.css('form[name=inviteForm] input[name=lastName]'));
    var addAnotherLink = element(by.linkText('+ Add another'));
    var generateCodeButton = element.all(by.css('[type=submit]')).get(1);
    var inviteButton = element.all(by.css('[type=submit]')).get(0);
    var generatedCodeDiv = element.all(by.css('div.wrapper-xs b b-2x b-primaryd')).get(0);


    /**
     * Open up the browser with the Log in URL selected URL staging
     */
    this.get = function() {
        browser.get(URLLIVE);
    };

    this.setEmail = function(email) {
        emailInput.sendKeys(email);
    };

    this.setFirstName = function(firstName) {
        firstNameInput.sendKeys(firstName);
    };

    this.setLastName = function(lastName) {
        lastNameInput.sendKeys(lastName);
    };

    this.clickGenerateCode = function() {
        generateCodeButton.click();
    };

    this.clickInvite = function() {
        inviteButton.click();
    };

    this.clickAddAnother = function() {
        addAnotherLink.click();
    };

};
module.exports = new Login();