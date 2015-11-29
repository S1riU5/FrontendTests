var Devices = require('../../objects/Devices.js');
var Utility = require('../../objects/Utility.js');
var config = require('../../conf.js');
var editPage = require('../../objects/DeviceEditPage.js');




describe('device edit page tests',function(){

    browser.driver.manage().timeouts().implicitlyWait(config.config.implicitWaitTimeout);

    beforeEach(function () {
        console.log('-------------------------> before');
        Utility.login();
    });

    afterEach(function () {
        Utility.logout();
        console.log('------------------------->  after');
    });

    it('saving a device should redirect to the device page',function(){
        deviceEditPage = new editPage();
        deviceEditPage.get(2);
        deviceEditPage.fillInNewInputFieldsOnDeviceSection("Label1","Name","1234-5678-93","Comment");
        deviceEditPage.selectDropdownsFromDeviceSection(1,1,1);
        deviceEditPage.setMaintenanceSection(1,"2015-01-01");
        deviceEditPage.setNotificationSection(1,"info@ceventis.com");
        expect(browser.getLocationAbsUrl()).toBe('/devices/2/edit');
        deviceEditPage.clickSaveButton();
        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/devices');


    });

});