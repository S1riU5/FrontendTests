
var steps = function () {

    var login = require('../../../../objects/cucumberLogin.js');

    this.Given(/^I am on the homepage$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        login.get(this,function(){
            setTimeout(callback,1000);
        });
    });

    this.Then(/^I should se a login form$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        login.isLoginFormEmailFiledPresent(this,function(){
            setTimeout(callback,1000);
        })

    });



};

module.exports = steps;
