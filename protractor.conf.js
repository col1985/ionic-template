var Reporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  allScriptsTimeout: 11000,
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  specs: ['./e2e/**/*.e2e-spec.ts'],
  baseUrl: 'http://localhost:8100', // review when development starts
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {
    // setup test server
    require('ts-node').register({
      project: 'e2e'
    });

    require('connect')().use(require('serve-static')('www')).listen(8100);
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new Reporter());
  }

}
