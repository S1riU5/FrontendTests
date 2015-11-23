describe('register success', function() {
    it('should display a success message', function() {
        var register = require('../../objects/Register.js');
        register.get();
        register.setEmail('test@test.com');
        register.setFirstname('max');
        register.setLastname('mustermann');
        register.setSerial(register.getInvCode());
        register.clickCreateAccountButton();
        //TODO Check success message
        expect(register.getSuccessMessage()).toBe('Your Account has been created.');
    });
});