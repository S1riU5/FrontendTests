var Login = require('./Login.js');
var config = require('../conf');

var Utility = function(){

    var email = config.config.credentials.Live.admin.email;
    var password = config.config.credentials.Live.admin.password;

    this.login = function(){
        Login.login(email,password);
        expect(browser.getLocationAbsUrl()).toBe('/devices');
    };

    this.logout = function(){
        Login.logout();
    };
};

module.exports = new Utility();