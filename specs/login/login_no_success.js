describe('login no success', function() {
	it('should display an error message', function() {
		var login = require('../../objects/Login.js');
	    login.get();
	    login.setEmail('wrong@email.com');
	    login.setPassword('wrongPassword');
	    login.clickLoginButton();
	    expect(login.getErrorMessage()).toBe('Invalid credentials');
	});
});