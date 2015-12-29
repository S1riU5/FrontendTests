var CucumberDevices = function(){
};


//var URL = 'http://localhost:9000/#/devices';
//var URLLIVE = 'http://devicereg.herokuapp.com/#/login';
//var expandNavSpan = element(by.css('.caret'));
//var logoutLink = element(by.linkText('Logout'));
//var createDevice = element(by.css('button[href="#/devices/new"]'));
//var allDevices = element.all(by.tagName('md-card'));
//var deviceBody = element();


CucumberDevices.prototype.init = function(sut){

    this.sut = sut;
};

CucumberDevices.prototype.url ='http://localhost:9000/#/devices';

CucumberDevices.prototype.logout = function(){
  this.sut.browser.element(this.sut.by.css('.caret'))
};

CucumberDevices.prototype.get = function(sut,callback){
    sut.browser.get(this.url).then(function(result){
        callback(result);
    });
};

CucumberDevices.prototype.search = function(sut,searchTerm,callback){

    sut.browser.findElement(sut.by.model('devFilter.search')).then(function(result){
        callback(result);
    });
};

CucumberDevices.prototype.selectSingleDeviceEdit = function(sut,position,callback){

    sut.browser.findElement()
};


module.exports = new CucumberDevices();