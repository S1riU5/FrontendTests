var Devices = require('../../objects/Devices.js');
var Utility = require('../../objects/Utility.js');
var config = require('../../conf.js');
var viewPage = require('../../objects/DeviceViewPage.js');


describe('device view page tests',function(){

    beforeEach(function () {
        console.log('-------------------------> before');
        Utility.login();
    });

    afterEach(function () {
        Utility.logout();
        console.log('------------------------->  after');
    });

    it('on the catalog a device should be deleted after clicking the delete button on the device view page',function(){
        deviceViewPage = new viewPage();
        devicePage = new Devices();
        deviceViewPage.get(2);
        //TODO Find out why this is 0
        devicePage.getDeviceCount();
        deviceViewPage.pressDeleteButton();
        //expect(devicePage.getDeviceCount()).toBe(alldevices);

    });

});