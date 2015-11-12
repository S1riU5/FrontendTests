var CreateDevicePage = function() {

    //Device section
    //TODO Discuss about id's or model binding
    var deviceCat = element(by.model('parant.device.category')); // not sure if this works
    var deviceDesignation = element(by.css('form[name=login] input[name=password]'));
    var deviceGroup = element(by.css('form[name=login] div[valdr-message]'))
    var serialNumber = element(by.css('div[role=alert]'));
    var processMedium = element(by.css('form[type=submit]'));
    var Comment = element(by.linkText('Create an Account'));
    var lable = element();




    this.get = function() {
        browser.get('http://localhost:9000/#/devices/new');
    };

    this.setEmail = function(name) {
        emailInput.sendKeys(name);
    };

    this.setPassword = function(name) {
        passwordInput.sendKeys(name);
    };

    this.clickLoginButton = function() {
        loginButton.click();
    };

    this.clickLoginButton = function() {
        loginButton.click();
    };

    this.clickCreateAccount = function() {
        createAccountLink.click();
    };

    this.getErrorMessage = function() {
        return divError.getText();
    };

};
module.exports = new Login();