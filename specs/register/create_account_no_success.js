describe('register no success', function() {
    it('should display an error message', function() {
        var register = require('../../objects/Register.js');
        register.get();
        register.setEmail('test@test.com');
        register.setFirstname('max');
        register.setLastname('mustermann');
        register.setSerial('123');
        register.clickCreateAccountButton();
        expect(register.getErrorMessage()).toBe('Invalid invitation code.');
    });
});