var path = require('path');
var stylelint = require('stylelint');
var chalk = require('chalk');

module.exports = function() {
  stylelint.lint({
    configFile: path.resolve(__dirname, '../.stylelintrc'),
    files: 'assets/sass/**/*.scss',
    syntax: 'scss',
  })
    .then(function(data) {
      data.results.forEach(function(item) {
        var sourceFile = item.source;
        var warnings = item.warnings;

        if (!warnings.length) {
          return;
        }

        console.log('\r\n', item.source);

        warnings.forEach(function(warning) {
          var severity = warning.severity;
          var text = warning.text;
          var errorCoords = chalk.grey(`${warning.line}:${warning.column}`);
          var errorRule = chalk.grey(warning.rule);
          var errorNotice = (severity === 'error') ?
            chalk.red('error') :
            chalk.yellow('warning');

          console.log(`\t${errorCoords} ${errorNotice} ${text} ${errorRule}`);
        });
      });
    })
    .catch(function(err) {
      console.error(err.stack);
    });
};
