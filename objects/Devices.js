var Devices = function () {

    var URL = 'http://localhost:9000/#/devices';
    var URLLIVE = 'http://devicereg.herokuapp.com/#/login';
    var expandNavSpan = element(by.css('.caret'));
    var logoutLink = element(by.linkText('Logout'));
    var createDevicee = element(by.css('button[ui-sref="app.device.new"]'));
    var allDevices = element.all(by.tagName('md-card'));
    var deviceBody = element();


    /**
     * Take in the login object to build the preconditions
     *
     * @type {Login|exports|module.exports}
     */
    var login = require('./Login.js');

    /**
     * clicks the edit button on a specific element
     *
     * @param position number of the current element
     */
    this.selectSingleDeviceEdit = function (position) {
        allDevices.get(position).element(by.linkText('EDIT')).click();
    };

    /**
     * Select one device and returns an object with the device preview data
     *
     * @param position
     * @returns {{name: *, serialNumber: (XMLList|*), category: (XMLList|*), group: (XMLList|*)}}
     */
    this.getDeviceInformations = function(position){

        var currentDevice = allDevices.get(position).element(by.tagName('ul')).all(by.tagName('li'));
        return {
            serialNumber: currentDevice.get(0).getText(),
            category: currentDevice.get(1).getText(),
            group: currentDevice.get(2).getText()

        };
    };

    /**
     * clicks the view button on a specific element
     *
     * @param position position of the current position
     */
    this.selectSingleDeviceView = function (position) {
        allDevices.get(position).element(by.linkText('VIEW')).click();

    };

    /**
     * Delete the device on position
     *
     * @param position
     */
    this.deleteSingleDevice = function (position) {
        allDevices.get(position).element(by.css('button .md-icon-button md-button .md-ink-ripple')).click();
    };


    /**
     * Counts the devices on the page
     *
     * @returns the number of displayed devices
     */
    this.deviceCount = function () {

        console.log(allDevices.count());
        return allDevices.count();

    };


    /**
     * logging in and navigates to the device page
     */
    this.get = function () {
        browser.get(URL);





    };

    /**
     * Expands the nav bar
     */
    this.expandNav = function () {
        expandNavSpan.click();
    };

    /**
     * TODO Refactor the before step
     *
     * Loggs out the user
     */
    this.logout = function () {
        expandNavSpan.click();
        logoutLink.click();
    };
};
/**
 * Make the Device object visible to other files
 *
 * @type {Function}
 */
module.exports = Devices;