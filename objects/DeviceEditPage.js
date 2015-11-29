var EditDevice = function () {

    /**
     * Constants
     * @type {number}
     */
    var CATEGORY_POSITION = 0;
    var DEVICEGROUP_POSITION = 1;
    var MEDIUM_POSITION = 2;
    var INTERVAL_POSITION = 3;
    var REMINDER_POSITION = 4;


    /**
     * Toggle buttons
     * @type {number}
     */
    var MAINTENANCE_TOGGLE = 0;
    var NOTIFICATION_TOGGLE = 1;


    /**
     * ID of the current device
     */
    var position;
    /**
     * URL section
     * @type {string}
     */
    var URL = 'http://localhost:9000/#/devices/';


    /**
     *  Web elements present on the device edit page
     */
    var saveButton = element(by.css('button.btn.btn-primary.m-r-sm'));
    var clearButton = element(by.css('button.btn.btn-default'));
    var editDropdowns = element.all(by.css('i.caret.pull-right'));
    var lable = element(by.css('input[name=labels]'));
    var designation = element(by.css('input[name="designation"]'));
    var serialNumber = element(by.css('input[name="serial"]'));
    var comment = element(by.css('textarea[name="comment"]'));
    var periodeStart = element(by.css('input[name="period"]'));
    var email = element(by.css('input[name="email"]'));


    var isMaintenance = false;
    var isNotification = false;

    /**
     * Opens the Edit dive page of an specific device
     *
     * @param position
     */
    this.get = function (position) {
        this.position = position;
        browser.get(URL + position + '/edit');
    };


    /**
     *  select a specific category
     *
     * @param position
     */
    this.selectCategory = function (position) {
        editDropdowns.get(CATEGORY_POSITION).click().then(function () {
            selectDropdowPosition(position);
        });
    };


    /**
     * select a specific device group
     *
     * @param position
     */
    this.selectDeviceGroup = function (position) {
        editDropdowns.get(DEVICEGROUP_POSITION).click();
        selectDropdowPosition(position);

    };


    /**
     * select a specific medium
     *
     * @param position
     */
    this.selectMedium = function (position) {
        editDropdowns.get(MEDIUM_POSITION).click();
        selectDropdowPosition(position);

    };


    /**
     * helper function to select a dropdown option
     * @param position
     */
    var selectDropdowPosition = function (position) {
        browser.sleep(1000);
        element.all(by.css('a.ui-select-choices-row-inner')).get(position).click();

    };

    /**
     * Clicks the save button
     */
    this.clickSaveButton = function () {
        saveButton.click();
    };


    /**
     * clicks the clear button
     */
    this.clickClearButton = function () {
        clearButton.click();
    };


    /**
     * insert a new value into the Label field
     * @param newLable
     */
    this.setLale = function (newLabel) {
        lable.clear();
        lable.sendKeys(newLabel)
    };

    /**
     * Append a label to into the label field
     *
     * @param appendLble
     */
    this.appendLable = function (appendLble) {
        lable.sendKeys(" " + appendLble);
    };

    /**
     * insert a new value into the designation field
     *
     * @param newDesignation
     */
    this.setDesignation = function (newDesignation) {
        designation.clear();
        designation.sendKeys(newDesignation);
    };

    /**
     * Append a string on the designation field
     *
     * @param appendDesignation
     */
    this.appendDesignation = function (appendDesignation) {
        designation.sendKeys(appendDesignation);
    };

    /**
     * insert a new value into the serial number field
     *
     * @param neSerialNumber
     */
    this.setSerialNumber = function (neSerialNumber) {
        serialNumber.clear();
        serialNumber.sendKeys(neSerialNumber);

    };

    /**
     * Append a value on the serial number field
     *
     * @param appendSerialNumber
     */
    this.appendSerialNumber = function (appendSerialNumber) {
        serialNumber.sendKeys(appendSerialNumber);
    };

    /**
     * insert a new value into the comment field
     *
     * @param newComment
     */
    this.setComment = function (newComment) {
        comment.clear();
        comment.sendKeys(newComment);
    };


    /**
     * Append a value on the comment field
     *
     * @param appendComment
     */
    this.appendComment = function (appendComment) {
        comment.sendKeys(appendComment);
    };


    /**
     * Toggles the maintenance section to active or inactive
     */
    this.toggleMaintenanceMode = function () {
        browser.executeScript("$('input[type=checkbox]').first().click()")
    };


    /**
     * Toggles the Notifications section to active or inactive
     */
    this.toggleNotificationMode = function () {
        browser.executeScript("$('input[type=checkbox]').last().click()")
    };

    /**
     * select a specific Maintenance interval
     *
     * @param intervalPosition
     */
    this.selectMaintenanceInterval = function (intervalPosition) {
        editDropdowns.get(INTERVAL_POSITION).click();
        browser.waitForAngular();
        //console.log(expect());
        //selectDropdowPosition(intervalPosition);
    };

    /**
     * insert a date into the
     * @param startDate
     */
    this.setPeriodStart = function (startDate) {
        periodeStart.clear();
        periodeStart.sendKeys(startDate);
    };

    /**
     * Select a Notification reminder interval
     *
     * @param reminderInterval
     */
    this.selectReminder = function (reminderInterval) {
        editDropdowns.get(REMINDER_POSITION).click();
        selectDropdowPosition(reminderInterval);
    };

    /**
     * Insert a new value into the email field
     *
     * @param newEmail
     */
    this.setNotificationEmail = function (newEmail) {
        email.clear();
        email.sendKeys(newEmail);
    };

    /**
     * Append a value on the email field
     *
     * @param appendEmail
     */
    this.appendNotificationEmail = function (appendEmail) {
        email.sendKeys(appendEmail);
    };

    /**
     * Set the values on the device section
     * @param label
     * @param designation
     * @param serial
     * @param comment
     */
    this.fillInNewInputFieldsOnDeviceSection = function (label, designation, serial, comment) {
        this.setLale(label);
        this.setDesignation(designation);
        this.setSerialNumber(serial);
        this.setComment(comment);
    };


    /**
     * Append text to the input fields on the device section
     * @param label
     * @param designation
     * @param serial
     * @param comment
     */
    this.appendToInputFieldsOnDeviceSection = function (label, designation, serial, comment) {
        this.appendLable(label);
        this.appendDesignation(designation);
        this.appendSerialNumber(serial);
        this.appendComment(comment);
    };

    /**
     * Select all dropdowns from the divece section
     * @param categoryPosition
     * @param groupPosition
     * @param mediumPosition
     */
    this.selectDropdownsFromDeviceSection = function (categoryPosition, groupPosition, mediumPosition) {
        this.selectCategory(categoryPosition);
        this.selectDeviceGroup(groupPosition);
        this.selectMedium(mediumPosition);
    };

    /**
     * Set the maintenance section
     * @param interval
     * @param date
     */
    this.setMaintenanceSection = function (interval, date) {

        if (!isMaintenance) {
            isMaintenance = true;
            this.toggleMaintenanceMode();
        }

            this.selectMaintenanceInterval(interval);
            this.setPeriodStart(date);
    };


    /**
     * disables the maintenance section
     */
    this.disableMaintenanceSection = function(){
        if (isMaintenance) {
            isMaintenance = false;
            this.toggleMaintenanceMode();
        }
    };

    /**
     * Set the Notification section
     * @param reminderInterval
     * @param email
     */
    this.setNotificationSection = function(reminderInterval,email){

        if(!isNotification){
            isNotification = true;
            this.toggleNotificationMode();
        }

        this.selectReminder(reminderInterval);
        this.setNotificationEmail(email);
    };

    /**
     * disables the notification section
     */
    this.disableNotifcationSection = function(){
        if(isNotification){
            isNotification = false;
            this.toggleNotificationMode();
        }
    };

};

module.exports = EditDevice;