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
    var generatedCodeDiv = element.all(by.css('div.row')).get(6);
    var successMessage =

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
     * Fills the firstName input with a given string.
     *
     * @param firstName which should fill the Input
     */
    this.setFirstName = function(firstName) {
        firstNameInput.sendKeys(firstName);
    };

    /**
     * Fills the lastName input with a given string.
     *
     * @param lastName which should fill the Input
     */
    this.setLastName = function(lastName) {
        lastNameInput.sendKeys(lastName);
    };

    /**
     * Clicks the 'Generate Code' button
     */
    this.clickGenerateCode = function() {
        generateCodeButton.click();
    };

    /**
     * Clicks the 'Invite' button
     */
    this.clickInvite = function() {
        inviteButton.click();
    };

    /**
     * Clicks the 'Invite' link
     */
    this.clickAddAnother = function() {
        addAnotherLink.click();
    };

    /**
     * Counts the characters of the generated invitation code
     *
     * @returns the number of characters of the code
     */
    this.getGeneratedCodeLength = function() {
        return generatedCodeDiv.getText().length;
    };

    /**
     * Returns the success message text
     *
     * @returns the success message text
     */
    this.getSuccessInviteMessage = function() {
        return successMessage.getText();
    };


};
module.exports = new Admin();