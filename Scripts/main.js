const IssuesProvider = require("./IssuesProvider.js");
const Ols = require("./Ols.js");

var olsInstance = null;

exports.activate = function() {
    // Do work when the extension is activated
    console.info('Odin extension for Nova activated.');

    nova.assistants.registerIssueAssistant('odin', new IssuesProvider());

    olsInstance = new Ols();
    olsInstance.start();
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
    if (olsInstance !== null) {
      olsInstance.stop();
    }

    console.info('Odin extension for Nova deactivated.');
}
