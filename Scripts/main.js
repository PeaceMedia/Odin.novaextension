exports.activate = function() {
    // Do work when the extension is activated
    console.info('Odin extension for Nova activated.');
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
    console.info('Odin extension for Nova deactivated.');
}

class IssuesProvider {

  constructor() {
  }

  provideIssues(editor) {
    if (editor.document.length === 0) {
      // Document not ready to read - bail out
      return [];
    }

    return new Promise(function(resolve, reject) {
      let issues = new IssueCollection();
      let output = '';

      let processOptions = {
        args: ['odin', 'test', nova.workspace.path, '-json-errors']
      }

      const process = new Process('/usr/bin/env', processOptions);

      process.onStderr(function(line) {
        // If there's some way to get the output of the process from within
        // the onDidExit handler, I'm not smart enough to figure it out, so
        // this stupid workaround.
        // Also, note that the output is going to stderr for some reason
        // despite the "issues" being normal output when we request it.
        output += line;
      });


      process.onDidExit(async function(exitStatus) {
        // Exit status 1 happens when errors are found
        if (exitStatus !== 0 && exitStatus !== 1) {
          console.error('Unexpected status code: ' + exitStatus);
          reject();
        }

        const json = JSON.parse(output);

        json.errors.forEach(function(error) {
          // Ignore if there's no position.
          if (error.pos === null/* || error.pos.file !== editor.document.path*/) {
            // console.log('skipping irrelevant file', errors.pos.file ?? '(none)');
            return;
          }

          const issue = new Issue();
          issue.message = error.msgs.join('\n');
          // error.type seems to always be "warning" even if it's a fatal
          // error? It's possible for something to actually be an "error"
          // though…
          // https://github.com/odin-lang/Odin/blob/f040e29c1cc08cc63ac5fcf5d45cf03ba1ac8f6b/src/error.cpp#L953-L957
          issue.severity = error.type === 'warning' ? IssueSeverity.Warning : IssueSeverity.Error;

          let filePath = editor.document.path;
          if (error.pos === null) {
            // One of the errors for which this will be the case is "Empty
            // directory that contains no .odin files." Let's just print info
            // on the first code line
            issue.line = 1;
            issue.column = 1;
          } else {
            issue.line = error.pos.line;
            issue.endLine = error.pos.line;
            issue.column = error.pos.column;
            issue.endColumn = error.pos.end_column;
            filePath = error.pos.file;
          }

          const uri = 'file://' + filePath;
          issues.append(uri, [issue]);

        });

        resolve(issues);
      });

      try {
        // console.log('About to launch process');
        process.start()
      } catch (e) {
        console.error('error:', e);
        reject(e);
      }
    });
  }
}

nova.assistants.registerIssueAssistant('odin', new IssuesProvider());
