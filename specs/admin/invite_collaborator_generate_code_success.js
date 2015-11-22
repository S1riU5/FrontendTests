var Admin = require('../../objects/Admin.js');
var Utility = require('../../objects/Utility.js');
var config = require('../../conf.js');

describe('generate a invitation code for collaborators',function(){


    browser.manage().timeouts().pageLoadTimeout(10000);  // 10 seconds
    beforeEach(function () {
        console.log('-------------------------> before');
        Utility.login();
    });

    afterEach(function () {
        Utility.logout();
        console.log('------------------------->  after');
    });

    it('clicking on generate code should display a 36 character long code',function(){
        Admin.get();
        expect(browser.getLocationAbsUrl()).toBe('/admin');
        Admin.clickGenerateCode();
        expect(Admin.getGeneratedCodeLength()).toBe(36);
    });

});