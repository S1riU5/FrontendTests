var ViewDevice = function(){


    var URLLIVE;
    //Note the postfix has to be  a number
    var URLDEV = 'http://localhost:9000/#/devices/';

    var headding = element(by.css('h3.m-n'));
    var deviceSection = element.all(by.tagName('fieldset')).get(0);
    var maintain = element.all(by.css('div.fieldset-form m-b-md')).get(1);
    var notification = element.all(by.css('div.fieldset-form m-b-md')).get(2);
    var position;

    /**
     * Buttons and clickable stuff
     */

    var deleteButton = element(by.css('button.btn-danger'));
    var editButton = element(by.css('button[href="#/devices/'+position+'/edit"]'));



    /**
     * navigates to a specific device vie page
     *
     * @param position of the device
     */
    this.get = function(position){
        browser.get(URLDEV+position);
        this.position = position;
    };


    /**
     * Press the delete button
     */
    this.pressDeleteButton = function(){
        deleteButton.click();
    };

    /**
     * Press the Edit button
     */
    this.pressEditButton = function(){
        editButton.click();
    };


    //
    //this.compareHeadding = function(compareValue){
    //    expect(headding).toBe(compareValue);
    //    //expect(login.getErrorMessage()).toBe('Invalid credentials');
    //
    //};
    //
    //this.compareCategory = function(compareValue){
    //    var deviceCategory = deviceSection.element(by.css())
    //    expect()
    //};

};


module.exports = ViewDevice;