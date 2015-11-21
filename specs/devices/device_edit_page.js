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
        deviceEditPage.selectCategory(0);
        deviceEditPage.selectDeviceGroup(1);
        deviceEditPage.selectMedium(0);
        deviceEditPage.addLable("My Label");
        deviceEditPage.addDesignation("My Designation");
        deviceEditPage.addSerialNumber("123123123");
        deviceEditPage.addComment("Hey This is my Comment");
        //deviceEditPage.toggleMaintenanceMode();
        //deviceEditPage.selectMaintenanceInterval(1);
        //eviceEditPage.setPeriodStart('01.01.2017');
        deviceEditPage.toggleNotificationMode();
        deviceEditPage.selectReminder(0);
        deviceEditPage.setNotificationEmail('info@example.com')

    });

});