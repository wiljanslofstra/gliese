var chalk = require('chalk');

var timings = {};

module.exports = function(name, type) {
  var now = new Date().getTime();

  if (type === 'start') {
    timings[name] = now;
  } else if (type === 'end' && typeof timings[name] !== 'undefined') {
    var diff = now - timings[name];
    console.log(chalk.blue(name + ' took ' + diff + 'ms to finish'));
  }
};
