/* eslint-disable */
const pkg = require('./package.json');
const webpack = require('webpack');
const path = require('path');

// Paths
const buildPath = path.resolve(__dirname, 'assets/build');
const entryPath = path.resolve(__dirname, 'assets/javascript', 'main');
const polyfillPath = path.resolve(__dirname, 'assets/javascript', 'polyfills');

// Plugins
const uglify = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  comments: false,
});

module.exports = function(options) {
  // Default plugins
  const plugins = [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.jQuery': 'jquery',
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
    })
  ];

  // If running in production we will add some plugins
  if (options === 'production') {
    plugins.push(uglify);
  }

  return {
    entry: {
      bundle: entryPath,
      polyfills: polyfillPath,
    },
    devtool: (options === 'development') ? 'eval-source-map' : 'source-map',
    output: {
      path: buildPath,
      filename: '[name].js'
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
