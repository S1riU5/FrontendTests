exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    implicitWaitTimeout: 500,
    emailMockServer:'local@ceventis.com',
    passwordMockServer: 'password',

	 multiCapabilities: [
        {
            'browserName': 'chrome',
        }
        ,
        {
            'browserName': 'firefox',
        }
    ],

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
suites: {
        login: ['specs/login/login_success.js', 'specs/login/login_no_success.js'],
        admin: ['specs/admin/invite_collaborator_generate_code_success.js', 'specs/admin/invite_collaborator_success.js'],
        register: ['specs/register/register_no_success.js'],
        forgotpwd: ['specs/forgotpwd/forgot_password_success.js', 'specs/forgotpwd/forgot_password_no_success.js'],
        devices: ['specs/devices/device_overview_functionality.js'],
        deviceView:['specs/devices/device_view_page.js'],
        deviceEdit:['specs/devices/device_edit_page.js']
},

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
}


