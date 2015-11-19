var Devices = require('../../objects/Devices.js');
var Utility = require('../../objects/Utility.js');
var config = require('../../conf.js');


describe('edit device button link', function () {
    browser.driver.manage().timeouts().implicitlyWait(config.config.implicitWaitTimeout);

    beforeEach(function () {
        console.log('-------------------------> before');
        Utility.login();
    });

    afterEach(function () {
        Utility.logout();
        console.log('------------------------->  after');
    });

    it('should display an error message', function () {
        device = new Devices();
        device.get();
        device.selectSingleDeviceEdit(2);
        //unclear how to check url
        expect(browser.getLocationAbsUrl()).toBe('/devices/3/edit');
    });


    it('should display the coorect informations by clickong on the view button',function(){
        devicePage = new Devices();
        devicePage.get();

        var deviceData = devicePage.getDeviceInformations(2);
        console.log(deviceData.serialNumber);
        //console.log(expect(deviceData.serialNumber).toBe('test'));
        //console.log(expect(deviceData.serialNumber).toBe("test"));
        //Split deviceData by ":"
        //if this works click view button for device
        // on positon 2 and compare
        // deviceData with view page

    });

});


