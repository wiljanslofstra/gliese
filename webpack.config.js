var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'assets/build/javascript');
var mainPath = path.resolve(__dirname, 'assets/javascript', 'main.js');

var uglify = new webpack.optimize.UglifyJsPlugin({ minimize: true });

var config = {
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
    ]
  },
  plugins: [],
  // plugins: [uglify],
};

module.exports = config;
