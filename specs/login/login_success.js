describe('login success', function() {
	it('should login', function() {
	    var login = require('../../objects/Login.js');
	    login.get();
	    //login.setEmail('admin@ceventis.com');
	    //login.setPassword('password');
	    //login.clickLoginButton();
		login.login('admin@ceventis.com', 'password');
	    expect(browser.getLocationAbsUrl()).toBe('/devices');

	});
});