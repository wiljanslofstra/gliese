/* eslint-disable */
const pkg = require('./package.json');
const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Paths
const buildPath = path.resolve(__dirname, 'assets/build');
const entryPath = path.resolve(__dirname, 'assets/javascript', 'main');

// Plugins
const uglify = new webpack.optimize.UglifyJsPlugin({ minimize: true });
var dedupe = new webpack.optimize.DedupePlugin();

const plugins = [
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    'window.jQuery': 'jquery',
  }),
  new ExtractTextPlugin({
    filename: 'main.css',
    allChunks: true,
  }),
];

module.exports = function(options) {
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
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: [{
              loader: 'css',
              query: {
                sourceMap: true,
              },
            }, {
              loader: 'sass',
              query: {
                outputStyle: (options === 'development') ? 'nested' : 'compressed',
              },
            }, {
              loader: 'postcss',
            }]
          })
        }
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
