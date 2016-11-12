var sass = require('node-sass');
var path = require('path');
var fs = require('fs');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var stylelint = require('./stylelint');

const ENV = process.env.NODE_ENV;

// Paths
var sassPath = path.resolve(__dirname, '../assets/sass', 'main.scss');
var outputPath = path.resolve(__dirname, '../assets/build', 'main.css');
var mapPath = path.resolve(__dirname, '../assets/build', 'main.css.map');

// Options
var autoprefixerOptions = { browsers: ['last 2 version', 'ie >= 8', 'iOS >= 7', 'android >= 4.1'] };
// var cssnanoOptions = { autoprefixer: false, discardComments: { removeAllButFirst: true } };

var postCSSPlugins = [
  autoprefixer(autoprefixerOptions),
];

if (ENV === 'production') {
  // postCSSPlugins.push();
}

function postCSS(css, plugins) {
  return postcss(plugins)
    .process(css, {
      from: outputPath,
      to: outputPath,
      map: { inline: false },
    })
    .then(function (result) {
      fs.writeFileSync(outputPath, result.css);

      if (result.map) {
        fs.writeFileSync(mapPath, result.map);
      }
    });
}

module.exports = function() {
  stylelint();

  sass.render({
    file: sassPath,
    outFile: outputPath,
    outputStyle: (ENV === 'production') ? 'compressed' : 'nested',
  }, function(error, result) {
    if (error) {
      console.log(error);
      return;
    }

    postCSS(result.css, postCSSPlugins);
  });
};
