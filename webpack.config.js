/* eslint-disable */
const pkg = require('./package.json');
const webpack = require('webpack');
const path = require('path');
const getArgOptions = require('./bin/getArgOptions');

const options = getArgOptions(process.argv.slice(2));

const ENV = (typeof options.env !== 'undefined') ? options.env : 'development';
const DEBUG = (ENV === 'development');
const VERBOSE = false;

// Paths
const buildPath = path.resolve(__dirname, 'assets/build');
const entryPath = path.resolve(__dirname, 'assets/javascript', 'main');

// Plugins
const uglify = new webpack.optimize.UglifyJsPlugin({ minimize: true });
const providePlugin = new webpack.ProvidePlugin({
  jQuery: 'jquery',
  $: 'jquery',
  'window.jQuery': 'jquery',
});
var dedupe = new webpack.optimize.DedupePlugin();
var occurrenceOrder = new webpack.optimize.OccurrenceOrderPlugin(true);

const plugins = [
  providePlugin,
];

if (ENV === 'production') {
  plugins.push(dedupe, occurrenceOrder, uglify);
}

module.exports = {
  entry: [ entryPath ],
  devtool: (ENV === 'development') ? 'eval-source-map' : 'source-map',
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
    noParse: ['jquery', 'modernizr', 'bootstrap-datepicker', 'parsleyjs'],
    loaders: [
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
