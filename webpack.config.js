/* eslint-disable */
var pkg = require('./package.json');
var webpack = require('webpack');
var path = require('path');

// Paths
var buildPath = path.resolve(__dirname, 'assets/build');
var entryPath = path.resolve(__dirname, 'assets/javascript', 'main.react');

const DEBUG = true;
const VERBOSE = false;

// Plugins
var uglify = new webpack.optimize.UglifyJsPlugin({ minimize: true });

module.exports = {
  entry: [ entryPath ],
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      modernizr: path.join(__dirname, 'assets/javascript/vendor/modernizr.js')
    }
  },
  module: {
    noParse: ['jquery'],
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
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
  plugins: [
    // uglify,
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },
};
/* eslint-enable */
