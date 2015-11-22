var Admin = require('../../objects/Admin.js');
var Utility = require('../../objects/Utility.js');
var config = require('../../conf.js');

describe('invite a collaborator',function(){

    beforeEach(function () {
        console.log('-------------------------> before');
        Utility.login();
    });

    afterEach(function () {
        Utility.logout();
        console.log('------------------------->  after');
    });

    it('should get a success message',function(){
        Admin.get();
        expect(browser.getLocationAbsUrl()).toBe('/admin');
        Admin.setEmail("test@test.de");
        Admin.setFirstName("Max");
        Admin.setLastName("Mustermann");
        Admin.clickInvite();
       // expect(Admin.getSuccessInviteMessage()).toBe("Collaborator has been successfully added.");
    });

});