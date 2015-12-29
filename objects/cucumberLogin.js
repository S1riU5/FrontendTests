var CucumberLogin = function () {
};

var assert = require('cucumber-assert');

CucumberLogin.prototype.url = 'http://localhost:9000/#/login';

CucumberLogin.prototype.get = function (sut, callback) {
    sut.browser.get(this.url).then(function (result) {
        callback(result);
    });
};

CucumberLogin.prototype.isLoginFormEmailFiledPresent = function (sut, callback) {
    sut.browser.isElementPresent(sut.by.css('form[name=login] input[name=email')).then(function (result) {
        callback(result);
    });
};

CucumberLogin.prototype.isLoginFormPasswordFiledPresent = function (sut, callback) {
    sut.browser.isElementPresent(sut.by.css('form[name=login] input[name=password')).then(function (result) {
        callback(result);
    });
};

CucumberLogin.prototype.enterEmail = function (sut, email, callback) {
    sut.browser.findElement(sut.by.css('form[name=login] input[name=email')).then(function (elem) {
        callback(elem.sendKeys(email));
    });
};

CucumberLogin.prototype.enterPassword = function (sut, password, callback) {
    sut.browser.findElement(sut.by.css('form[name=login] input[name=password')).then(function (elem) {
        callback(elem.sendKeys(password));
    });
};

CucumberLogin.prototype.submitForm = function (sut, callback) {
    sut.browser.findElement(sut.by.css('[type=submit]')).then(function (elem) {
        callback(elem.click());
    });

};


CucumberLogin.prototype.isLoggedIn = function (sut, callback) {

    sut.browser.getCurrentUrl().then(function (url) {

        //url.should.equal("http://localhost:9000/#/device");
        assert.equal(url,'http://localhost:9000/',callback,"my assert");

    });
}

module.exports = new CucumberLogin();