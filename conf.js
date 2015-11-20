exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

	 multiCapabilities: [{
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
    register: ['specs/register/create_account_no_success.js'],
    devices: ['specs/devices/device_click_edit_button.js']
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  },
  implicitWaitTimeout: 1000
};