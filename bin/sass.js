/* eslint-disable import/no-extraneous-dependencies */

const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const chalk = require('chalk');
const notification = require('./notification');

const ENV = process.env.NODE_ENV;

const postCSSPlugins = [
  autoprefixer(),
];

if (ENV === 'production') {
  // postCSSPlugins.push();
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
 * Run PostCSS on the given CSS string
 * @param  {String} css     String of CSS
 * @param  {Array}  plugins PostCSS plugin to run the CSS through
 * @return {Promise}
 */
function postCSS(css, plugins, file) {
  return postcss(plugins)
    .process(css, {
      from: file.out,
      to: file.out,
      map: { inline: false },
    })
    .then((result) => {
      fs.writeFileSync(file.out, result.css);

      const filename = file.out.split('/').pop();

      notification('success', `${filename} compiled successfully`);

      if (result.map) {
        fs.writeFileSync(file.map, result.map);
      }
    });
}

/**
 * Run all Sass related tasks like linting, compiling and PostCSS
 * @return {Void}
 */
module.exports = () => {
  const files = [
    {
      in: path.resolve(__dirname, '../assets/sass', 'main.scss'),
      out: path.resolve(__dirname, '../assets/build', 'main.css'),
      map: path.resolve(__dirname, '../assets/build', 'main.css.map'),
    }, {
      in: path.resolve(__dirname, '../assets/sass', 'ie9.scss'),
      out: path.resolve(__dirname, '../assets/build', 'ie9.css'),
      map: path.resolve(__dirname, '../assets/build', 'ie9.css.map'),
    },
  ];

  const outputStyle = (ENV === 'production') ? 'compressed' : 'expanded';

  files.forEach((file) => {
    // Compile the Sass
    sass.render({
      file: file.in,
      outFile: file.out,
      outputStyle,
    }, (error, result) => {
      if (error) {
        outputSassError(error);
        return;
      }

      // Run the compiled Sass through PostCSS
      postCSS(result.css, postCSSPlugins, file);
    });
  });
};
