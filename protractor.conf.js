const Reporter = require('jasmine-spec-reporter').SpecReporter;
const cfg = require('./tests/test-config');

exports.config = {
  allScriptsTimeout: cfg.timeout,
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--disable-gpu'
      ]
    },
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false,
    defaultTimeoutInterval: 40000,
    print: function () { }
  },
  specs: ['./tests/e2e/**/*.e2e-spec.ts'],
  // specs: ['./src/**/*.spec.ts'],
  baseUrl: 'http://localhost:8100', // review when development starts
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {

    // setup test server
    require('ts-node').register({
      project: 'tests/e2e/tsconfig.json'
    });

    require('connect')().use(require('serve-static')(cfg.dist)).listen(cfg.port);
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new Reporter({ spec: { displayStacktrace: false } }));
  }

}
