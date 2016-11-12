var path = require('path');
var stylelint = require('stylelint');
var chalk = require('chalk');

// Path to the .stylelintrc file
var configFilePath = path.resolve(__dirname, '../.stylelintrc');

// Where to find the Sass files
var lintFilesGlob = 'assets/sass/**/*.scss';

/**
 * Output a warning to the console
 * @param  {Object} warning A single Stylelint warning
 * @return {Void}
 */
function outputWarning(warning) {
  // The severity of the warning (either error or warning)
  var severity = warning.severity;

  // Explanation of the current warning
  var text = warning.text;

  // Location of the warning in the source file (column and row numers)
  var errorCoords = chalk.grey(`${warning.line}:${warning.column}`);

  // The linting rule that triggered this warning
  var errorRule = chalk.grey(warning.rule);

  // Add an error label
  var errorNotice = (severity === 'error') ?
    chalk.red('error') :
    chalk.yellow('warning');

  // Output the formatted error line to the console
  console.log(`\t${errorCoords} ${errorNotice} ${text} ${errorRule}`);
}

/**
 * Output a single result, in Stylelint a result is for a single file
 * @param  {Object} item Stylelint result object
 * @return {Void}
 */
function outputResult(item) {
  var sourceFile = item.source;
  var warnings = item.warnings;

  // We don't send the result to the console if no warnings are available
  if (!warnings.length) {
    return;
  }

  // Output the file path
  console.log('\r\n', item.source);

  // Loop through all warnings, and output each one individually
  warnings.forEach(outputWarning);
}

/**
 * Run Stylelint
 * @return {Void}
 */
module.exports = function() {
  stylelint.lint({
    configFile: configFilePath,
    files: lintFilesGlob,
    syntax: 'scss',
  })
    .then(function(data) {
      data.results.forEach(outputResult);
    })
    .catch(function(err) {
      console.error(err.stack);
    });
};
