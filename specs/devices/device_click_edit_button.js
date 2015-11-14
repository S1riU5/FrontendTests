var Device = require('../../objects/Devices.js');
var Utility = require('../../objects/Utility.js');
var device = new Device();

describe('edit device button link', function () {


    beforeEach(function () {
        console.log('-------------------------> before');
        Utility.login();

    });

    afterEach(function () {
        Utility.logout();
        console.log('------------------------->  after');
    });

    it('should display an error message', function () {
        device.get();
        device.selectSingleDeviceEdit(2);
        //unclear how to check url
        expect(browser.getLocationAbsUrl()).toBe('/devices/3/edit');
    });


    it('should display the coorect informations by clickong on the view button',function(){
       device.get();
    });

});


