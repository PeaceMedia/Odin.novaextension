const IssuesProvider = require("./IssuesProvider.js");

exports.activate = function() {
    // Do work when the extension is activated
    console.info('Odin extension for Nova activated.');

    nova.assistants.registerIssueAssistant('odin', new IssuesProvider());

}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
    console.info('Odin extension for Nova deactivated.');
}
