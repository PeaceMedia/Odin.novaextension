const IssuesProvider = require("./IssuesProvider.js");
const Ols = require("./Ols.js");

var olsInstance = null;

exports.activate = function() {
    // Do work when the extension is activated
    console.info('Odin extension for Nova activated.');

    if (nova.config.get("biz.peacemedia.odin-for-nova.provide-issues") === true) {
      console.info('Initiating issues provider');
      nova.assistants.registerIssueAssistant('odin', new IssuesProvider());
    }

    if (nova.config.get("biz.peacemedia.odin-for-nova.use-ols") === true) {
      console.info('Initiating OLS');
      olsInstance = new Ols();
      olsInstance.start();
    }
};

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
    if (olsInstance !== null) {
      olsInstance.stop();
    }

    console.info('Odin extension for Nova deactivated.');
};
