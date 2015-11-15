var Device = require('../../objects/Devices.js');
var Utility = require('../../objects/Utility.js');
var config = require('../../conf.js');


describe('edit device button link', function () {

    beforeEach(function () {
        browser.driver.manage().timeouts().implicitlyWait(1000);

        console.log('-------------------------> before');
        Utility.login();
        browser.waitForAngular();
    });

    afterEach(function () {
        Utility.logout();
        browser.waitForAngular();
        console.log('------------------------->  after');
    });

    it('should display an error message', function () {
        device = new Device();
        device.get();
        browser.waitForAngular();
        device.selectSingleDeviceEdit(2);
        //unclear how to check url
        expect(browser.getLocationAbsUrl()).toBe('/devices/3/edit');
    });


    it('should display the coorect informations by clickong on the view button',function(){
        test = new Device();
        test.get();

    });

});


