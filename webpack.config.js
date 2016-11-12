/* eslint-disable */
const pkg = require('./package.json');
const webpack = require('webpack');
const path = require('path');

// Paths
const buildPath = path.resolve(__dirname, 'assets/build');
const entryPath = path.resolve(__dirname, 'assets/javascript', 'main');

// Plugins
const uglify = new webpack.optimize.UglifyJsPlugin({ minimize: true });
var dedupe = new webpack.optimize.DedupePlugin();

// Default plugins
const plugins = [
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    'window.jQuery': 'jquery',
  })
];

module.exports = function(options) {
  // If running in production we will add some plugins
  if (options === 'production') {
    plugins.push(dedupe, uglify);
  }

  return {
    entry: [ entryPath ],
    devtool: (options === 'development') ? 'eval-source-map' : 'source-map',
    output: {
      path: buildPath,
      filename: 'bundle.js'
    },
    resolve: {
      alias: {
        modernizr: path.join(__dirname, 'assets/javascript/vendor/modernizr.custom.js'),
        lodash: path.join(__dirname, 'assets/javascript/vendor/lodash.custom.js'),
        jquery: path.join(__dirname, 'node_modules/jquery/dist/jquery.js'),
      }
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader'],
        },
        {
          test: /\.js?$/,
          exclude: [/node_modules/, /vendor/],
          loaders: ['eslint-loader'],
        },
      ],
    },
    externals: {
      // 'jquery': 'jQuery',
    },
    plugins: plugins,
    target: 'web',
  };
};
/* eslint-enable */
