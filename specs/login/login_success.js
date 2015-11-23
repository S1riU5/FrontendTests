var Utility = require('../../objects/Utility.js');

describe('login success', function() {
	it('should login', function() {
	    var login = require('../../objects/Login.js');
	    login.get();
		login.login('admin@ceventis.com', 'password');
	    expect(browser.getLocationAbsUrl()).toBe('/devices');
	});

	afterEach(function () {
		Utility.logout();
		console.log('------------------------->  after');
	});
});