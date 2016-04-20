/**
 * Created by Drake on 4/20/2016.
 */
exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        'e2e/*.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3001/',

    framework: 'jasmine',
    directConnet: true,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};