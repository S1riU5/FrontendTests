var Login = require('../../objects/Login.js');
var Forgotpwd = require('../../objects/Forgotpwd.js');

describe('resend password no success', function() {

    beforeEach(function () {
        console.log('-------------------------> before');
        Login.get();
        Login.forgotPasswordLink();
        expect(browser.getLocationAbsUrl()).toBe('/forgotpwd');
    });

    it('should display a error message',function(){
        Forgotpwd.setEmail("wrong@email.de")
        Forgotpwd.clickResetPasswordButton();
        expect(Forgotpwd.getErrorMessage()).toBe("Your email is not registered.");
    });
});