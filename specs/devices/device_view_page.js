var Devices = require('../../objects/Devices.js');
var Utility = require('../../objects/Utility.js');
var config = require('../../conf.js');
var viewPage = require('../../objects/DeviceViewPage.js');


describe('device view page tests', function () {


    beforeEach(function () {
        console.log('-------------------------> before');
        Utility.login();
    });

    afterEach(function () {
        Utility.logout();
        console.log('------------------------->  after');
    });

    it('on the catalog a device should be deleted after clicking the ' +
        'delete button on the device view page', function () {
        deviceViewPage = new viewPage();
        devicePage = new Devices();
        //devicePage.get();
        //var count = devicePage.getDeviceCount();
        deviceViewPage.get(2);
        //console.log(deviceCount.test);
        deviceViewPage.pressDeleteButton();
        expect(devicePage.deviceCount()).toBe(8)


    });

    it('should redirect to the correct edit view by pressing the edit button', function () {
        deviceViewPage = new viewPage();
        deviceViewPage.get(2);
        deviceViewPage.pressEditButton();
        expect(browser.getLocationAbsUrl()).toBe('device/'+deviceViewPage.getPosition())
    });

});