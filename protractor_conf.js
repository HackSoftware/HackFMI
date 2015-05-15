// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:9000/#',
  framework: 'mocha',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/teams-findteam.spec.js'],

  // Options to be passed to Chai-node.
  mochaOpts: {
    reporter: "spec",
    slow: 3000,
    timeout: 30000
  }
};
