var sass = require('node-sass');
var path = require('path');
var fs = require('fs');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var chalk = require('chalk');
var stylelint = require('./stylelint');
var notification = require('./notification');
var createStats = require('./create-stats');

const ENV = process.env.NODE_ENV;

// Paths
var sassPath = path.resolve(__dirname, '../assets/sass', 'main.scss');
var outputPath = path.resolve(__dirname, '../assets/build', 'main.css');
var mapPath = path.resolve(__dirname, '../assets/build', 'main.css.map');

// Options
var autoprefixerOptions = {
  browsers: [
    'last 2 version',
    'ie >= 8',
    'iOS >= 7',
    'android >= 4.1'
  ]
};

var postCSSPlugins = [
  autoprefixer(autoprefixerOptions),
];

if (ENV === 'production') {
  // postCSSPlugins.push();
}

/**
 * Run PostCSS on the given CSS string
 * @param  {String} css     String of CSS
 * @param  {Array}  plugins PostCSS plugin to run the CSS through
 * @return {Promise}
 */
function postCSS(css, plugins) {
  return postcss(plugins)
    .process(css, {
      from: outputPath,
      to: outputPath,
      map: { inline: false },
    })
    .then(function (result) {
      fs.writeFileSync(outputPath, result.css);

      var filename = outputPath.split('/').pop();

      outputStats(outputPath);

      notification('success', `${filename} compiled successfully`);

      if (result.map) {
        fs.writeFileSync(mapPath, result.map);
      }
    });
}

/**
 * Output the stats about the given file to the console
 * @param  {String} filePath Path where the file can be found
 * @return {Void}
 */
function outputStats(filePath) {
  // Get all statistics for the given file
  const stats = fs.statSync(filePath);

  // Transform the bytes value to a kilobytes value
  const sizeInKb = (stats.size / 1000).toFixed(1);

  // Get only the filename from the complete path
  const fileName = filePath.split('/').pop();

  // Build a stats table and output to the console
  createStats({
    asset: fileName,
    size: `${sizeInKb}kb`
  }, 'asset');
}

/**
 * Output Sass errors to the console and notify the user
 * @param  {Object} err Sass error object
 * @return {Void}
 */
function outputSassError(err) {
  // Send a complete error message to the console
  console.log(chalk.red(err.formatted));

  // Send a notification with a short message
  notification('error', err.message);
}

/**
 * Run all Sass related tasks like linting, compiling and PostCSS
 * @return {Void}
 */
module.exports = function() {
  // Run Stylelint on all our Sass files
  stylelint();

  // Compile the Sass
  sass.render({
    file: sassPath,
    outFile: outputPath,
    outputStyle: (ENV === 'production') ? 'compressed' : 'nested',
  }, function(error, result) {
    if (error) {
      outputSassError(error);
      return;
    }

    // Run the compiled Sass through PostCSS
    postCSS(result.css, postCSSPlugins);
  });
};
