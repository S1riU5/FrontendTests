var Login = function() {
  var emailInput = element(by.css('form[name=login] input[name=email]'));
  var passwordInput = element(by.css('form[name=login] input[name=password]'));
  var emailError = element(by.css('form[name=login] div[valdr-message]'));
  var loginError = element(by.css('div[role=alert]'));
  var loginButton = element(by.css('[type=submit]'));
  var createAccountLink = element(by.linkText('Create an Account'));
  var userbar = element(by.css('a.dropdown-toggle'));
  var logoutLink = element(by.linkText('Logout'));
  this.get = function() {
    browser.get('http://localhost:9000/#/login');
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


  //TODO do something like before each this
  /**
   * Loggs out the user
   */
  this.logout = function(){
    this.get();
    userbar.click();
    //expect(browser.getLocationAbsUrl()).toBe('/devices/test');
    logoutLink.click();
    browser.waitForAngular();

  };

  this.clickCreateAccount = function() {
    createAccountLink.click();
  };

  this.getErrorMessage = function() {
    return divError.getText();
  };

  this.login = function(){
    this.get();
    this.setEmail('admin@ceventis.com');
    this.setPassword('password');
    this.clickLoginButton();
    browser.waitForAngular();

  };

  this.login = function(email, password){
    this.get();
    this.setEmail(email);
    this.setPassword(password);
    this.clickLoginButton();
  };

};
module.exports = new Login();