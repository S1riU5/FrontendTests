var Devices = function () {

    var URL = 'http://localhost:9000/#/devices';
    var URLLIVE = 'http://devicereg.herokuapp.com/#/login';
    var expandNavSpan = element(by.css('.caret'));
    var logoutLink = element(by.linkText('Logout'));
    var createDevice = element(by.css('button[href="#/devices/new"]'));
    var allDevices = element.all(by.tagName('md-card'));
    var deviceBody = element();


    /**
     * Take in the login object to build the preconditions
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
    this.getDeviceInformations = function (position) {
        var currentDevice = allDevices.get(position).element(by.tagName('ul')).all(by.tagName('li'));
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
     * returns the Number of all visible Device Objects
     *
     * TODO Refactor this method*
     *
     */
    this.getDeviceCount = function () {
        return allDevices.count();
    };

    //function getTextFromElement(tempObject) {
    //    $('a.some-link').getText().then(function (txt) {
    //        tempObject.textFromFirstPage = txt;
    //    });
    //}


    /**
     * Clicks on the create new device button
     */
    this.clickCreateNewDevice = function () {
        createDevice.click();
    };

    /**
     * delete a specific device
     *
     * @param position of the device
     */
    this.deletDevice = function (position) {
        allDevices.get(position).element(by.css('md-icon[md-font-icon="mdi mdi-delete-variant"]')).click();
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
     * Logs out the user
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