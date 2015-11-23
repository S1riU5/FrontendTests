var Login = require('./Login.js');

var Utility = function(){

    this.login = function(){
        Login.login();
        expect(browser.getLocationAbsUrl()).toBe('/devices');
    };

    this.logout = function(){
        Login.logout();
    };
};

module.exports = new Utility();