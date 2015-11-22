var Forgotpwd = require('../../objects/Forgotpwd.js');
var Login = require('../../objects/Login.js');


describe('resend password success', function() {

    beforeEach(function () {
        console.log('-------------------------> before');
        Login.get();
        Login.forgotPasswordLink();
        expect(browser.getLocationAbsUrl()).toBe('/forgotpwd');
    });

    it('should display a success message',function(){
        Forgotpwd.setEmail("excisting@email.de")
        Forgotpwd.clickResetPasswordButton();
        expect(Forgotpwd.getSuccessMessage()).toBe("You have received an email.");
    });
});