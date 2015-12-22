var pc = require('protractor-cucumber');

var steps = function(){
    var seleniumAddress = 'https://localhost:4444/wd/hub';
    var options = {
        browser: 'chrome',
        timeout: 10000
    };
    this.World = pc.world(seleniumAddress,options)
    this.After(function (scenario,callback){
        this.quit(callback);
    });
};

module.exports = steps;