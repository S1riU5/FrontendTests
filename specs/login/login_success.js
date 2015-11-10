describe('login success', function() {
	it('should login', function() {
	    var login = require('../../objects/Login.js');
	    var devices = require('../../objects/Devices.js');
	    login.get();
	    login.setEmail('admin@ceventis.com');
	    login.setPassword('password');
	    login.clickLoginButton();
	    expect(browser.getLocationAbsUrl()).toBe('/devices');
	    devices.logout();
	});
});