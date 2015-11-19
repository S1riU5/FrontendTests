var ViewDevice = function(){


    var headding = element(by.css('h3.m-n'));
    var deviceSection = element(by.tagName('fieldset')).row(0);
    var maintain = element(by.css('div.fieldset-form m-b-md')).row(0);
    var notification = element(by.css('div.fieldset-form m-b-md')).row(1);

    this.compareHeadding = function(compareValue){
        expect(headding).toBe(compareValue);
        //expect(login.getErrorMessage()).toBe('Invalid credentials');

    }

    this.compareCategory = function(compareValue){
        var deviceCategory = deviceSection.element(by.css())
        expect()
    }

};


module.exports = ViewDevice;