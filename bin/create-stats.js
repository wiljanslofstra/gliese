var chalk = require('chalk');

/**
 * Pad a string with the string defined in 'pad'
 * @param  {String}  pad     Where to pad the str with
 * @param  {String}  str     String to pad
 * @param  {Boolean} padLeft Set to true to pad on the left and false for right
 * @return {String}          Padded string
 */
function pad(pad, str, padLeft) {
  if (typeof str === 'undefined')
    return pad;
  if (padLeft) {
    return (pad + str).slice(-pad.length);
  } else {
    return (str + pad).substring(0, pad.length);
  }
}

/**
 * Simple method to uppercase the first letter of a string
 * @param  {String} string String to uppercase the first letter of
 * @return {String}        String with a uppercase first letter
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Try to replicate the logging of Webpack
 * @param  {Object} obj          Object to output, where keys are the table heads
 * @param  {String} highlightKey Key to highlight in bold green color
 * @return {Void}
 */
module.exports = function(obj, highlightKey) {
  var head = [];
  var body = [];

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      var val = obj[prop];
      var valLength = val.length;

      // Pad the head with spaces to right align it on the table column
      var padLabel = pad(Array(valLength + 1).join(' '), capitalizeFirstLetter(prop), true);

      // Add the label to the table head
      head.push(padLabel);

      // Add the value to the table body, and highlight if highlightKey matches this key
      body.push((highlightKey && highlightKey === prop) ? chalk.green(chalk.bold(val)) : val);
    }
  }

  // Log it to the console with some breaks between for clarity
  var output = chalk.bold(head.join(' '));
  output += '\r\n';
  output += body.join(' ');

  console.log(output);
};
