const chalk = require('chalk');
const swPrecache = require('sw-precache');

module.exports = function() {
  swPrecache.write('service-worker.js', {
    staticFileGlobs: [
      'assets/build/**/*.{js,css}',
      'assets/fonts/**/*.{ttf,woff,woff2}',
      'assets/images/**/*.{jpg,png,gif,svg}',
    ],
  }, (err) => {
    if (err) {
      console.log(chalk.red(err));
      return;
    }

    console.log(chalk.green('Successfully written service-worker.js'));
  });
};
