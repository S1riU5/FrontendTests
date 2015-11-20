describe('login no success', function() {
    it('should display error message', function() {
        var login = require('../../objects/Login.js');
        login.get();
        login.login('wrong@mail.com', 'wrong');
        expect(login.getLogInErrorMessage()).toBe('Invalid credentials');
    });
});