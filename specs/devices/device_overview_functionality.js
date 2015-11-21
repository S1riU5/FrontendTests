var Devices = require('../../objects/Devices.js');
var Utility = require('../../objects/Utility.js');
var config = require('../../conf.js');


describe('Device overview page', function () {
    browser.driver.manage().timeouts().implicitlyWait(config.config.implicitWaitTimeout);

    beforeEach(function () {
        console.log('-------------------------> before');
        Utility.login();
    });

    afterEach(function () {
        Utility.logout();
        console.log('------------------------->  after');
    });

    it('should open the device edit page by clicking on the EDIT link', function () {
        device = new Devices();
        device.get();
        device.selectSingleDeviceEdit(2);
        expect(browser.getLocationAbsUrl()).toBe('/devices/3/edit');
    });


    it('should delete a device by clicking on the delete icon',function(){
        devicePage = new Devices();
        devicePage.get();
        expect(devicePage.getDeviceCount()).toBe(9);
        devicePage.deletDevice(2);
        expect(devicePage.getDeviceCount()).toBe(8);
    });

    it('should open the device view Page by clicking on the VIEW link',function(){
        devicePage = new Devices();
        devicePage.get();
        devicePage.selectSingleDeviceView(2);
        expect(browser.getLocationAbsUrl()).toBe('/devices/3');

    });

    it('should display the Create  Device Form by clicking on the New Device button',function(){
        devicePage = new Devices();
        devicePage.get();
        devicePage.clickCreateNewDevice();
        expect(browser.getLocationAbsUrl()).toBe('/devices/new');
        //devicePage.get();
    });

});


