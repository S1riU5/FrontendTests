var Devices = function() {
  //TODO ID instead of css class
  var expandNavSpan = element(by.css('.caret'));
  //TODO ID instead of linkText
  var logoutLink = element(by.linkText('Logout'));
  var login = require('./Login.js');

  this.get = function() {
    login.get();
    login.setEmail('admin@ceventis.com');
    login.setPassword('password');
    login.login();
  };

  this.expandNav = function() {
    expandNavSpan.click();
  };

  this.logout = function() {
    expandNavSpan.click();
    logoutLink.click();
  };
};
module.exports = new Devices();