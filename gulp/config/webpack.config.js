/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const abs = require('../utils/abs');

// Paths
const buildPath = abs(global.PATHS.js.dest);

const uglify = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  comments: false,
});

module.exports = () => {
  // Default plugins
  const allPlugins = [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ];

  // If running in production we will add some plugins
  if (global.PRODUCTION) {
    allPlugins.push(uglify);
  }

  if (!global.PRODUCTION) {
    allPlugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }));
  }

  return {
    context: abs(global.PATHS.js.src),
    cache: true,
    entry: {
      bundle: './main.js',
      polyfills: './polyfills.js',
    },
    devtool: (global.PRODUCTION) ? 'source-map' : 'cheap-module-eval-source-map',
    output: {
      path: buildPath,
      filename: '[name]-[hash].js',
    },
    resolve: {
      alias: {
        modernizr: abs(global.PATHS.js.src, 'vendor/modernizr.custom.js'),
        lodash: abs(global.PATHS.js.src, 'vendor/lodash.custom.js'),
        jquery: abs('node_modules/jquery/dist/jquery.slim.js'),
        'jquery-ui/ui/widget': abs('node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules(?!(\/|\\)(autotrack|domutils))/,
          loader: 'babel-loader',
        }, {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
      ],
    },
    plugins: allPlugins,
  };
};
