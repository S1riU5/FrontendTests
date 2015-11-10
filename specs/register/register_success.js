describe('register success', function() {
	it('should display a success message', function() {
	    var register = require('../../objects/Register.js');
	    register.get();
	    register.setEmail('test@test.com');
	    register.setFirstname('max');
	    register.setLastname('mustermann');
	    //TODO get a serialcode which is always available
	    register.setSerial('123');
	    register.clickCreateAccountButton();
	    //TODO get success message from coder
	    expect(register.getSuccessMessage()).toBe('Your account has been created successfully. You can now log in');
	});
});