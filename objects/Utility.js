var Login = require('./Login.js');

var Utility = function(){

    this.login = function(){
        Login.login();
    };

    this.logout = function(){
        Login.logout();
    };

};


module.exports = new Utility();