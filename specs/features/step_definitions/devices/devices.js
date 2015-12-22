var steps = function(){
    var devices = require('../../../../objects/cucumberDevices.js');
    var login = require('../../../../objects/cucumberLogin.js');

    this.Given(/^I am on the device page$/, function (callback) {
         login.get(this,function(){
                setTimeout(callback,1000);
         });

        devices.get(this,function(){
           setTimeout(callback,10000);
        });
    });

    this.When(/^I enter a search string$/, function (callback) {
      devices.search(this,'Label#1',function(){
         setTimeout(callback,10000);
      });
    });

    this.When(/^Submit the serch form$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I should see a list of matching devices$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.When(/^I enter a valid email into the email field$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.When(/^I enter a valid password into the password field$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.When(/^I click the submit button$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Then(/^I should be logged in$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.When(/^Bla hallo$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });


};

module.exports = steps;