var Login = function() {
  var emailInput = element(by.model('user.email'));
  var passwordInput = element(by.model('user.pass'));
  //TODO ID instead of css class
  var loginButton = element(by.css('.btn'));
  //TODO ID instead of ng-binding
  var divError = element(by.css('.ng-binding'));
  //TODO ID instead of linkText
  var createAccountLink = element(by.linkText('Create an Account'));

  this.get = function() {
    browser.get('http://devicereg.herokuapp.com/');
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