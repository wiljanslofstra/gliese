var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'assets/build/javascript');
var mainPath = path.resolve(__dirname, 'assets/javascript', 'main.js');
var uglify = new webpack.optimize.UglifyJsPlugin({ minimize: true });
var gutil         = require("gulp-util");
var table = require('text-table');

module.exports = {
  debug: true,
  entry: [ mainPath ],
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
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/, // include .js files
        exclude: [/node_modules/, /vendor/], // exclude any and all files in the node_modules folder
        loader: "jshint-loader"
      }
    ]
  },
  jshint: {
    emitErrors: false,
    failOnHint: false,

    // custom reporter function
    reporter: function(result, param1, param2) {
      var ret = table(result.map(function (err, i) {
        var isError = err.code && err.code[0] === 'E';

        return [
          '',
          gutil.colors.gray('line ' + err.line),
          gutil.colors.gray('col ' + err.character),
          isError ? gutil.colors.red(err.reason) : gutil.colors.blue(err.reason)
        ];
      }));

      console.log(ret);
    }
  },
  plugins: [],
  // plugins: [uglify],
};

