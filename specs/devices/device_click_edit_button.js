var Device = require('../../objects/Devices.js');
var Utility = require('../../objects/Utility.js');

describe('edit device button link', function () {


    beforeEach(function () {
        Utility.login();
    });


    (function () {
        console.log('after');
    });

    it('should display an error message', function () {
        var device = new Device();
        device.get();
        device.selectSingleDeviceEdit(2);
        //unclear how to check url
        expect(browser.getLocationAbsUrl()).toBe('/devices/3/edit');
    });

});


