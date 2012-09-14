/*!
 * Open Terminal Here mixin for Chocolat
 * WTFPL 2 Licensed
 */

var exec = require('child_process').exec;

Hooks.addMenuItem('Go/Open Terminal Here', 'cmd+shift+o', function () {
  if (!Document.current() || !Document.current().path()) {
    Alert.show('Whoops!', 'A file must be open for this to work.', ['Dammit']);
    return;
  }

  var filePath = Document.current().path(),
      fileName = Document.current().displayName(),
      dirPath = filePath.replace(fileName, '');

  exec('open -a Terminal "' + dirPath + '"');
});
