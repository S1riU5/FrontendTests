var Login = require('./Login.js');

var Utility = function(){

    this.login = function(){
        Login.login();
    };

    this.logout = function(){

    };

};


module.exports = new Utility();