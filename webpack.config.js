var pkg =               require('./package.json');

var webpack =           require('webpack');
var path =              require('path');
var gutil =             require("gulp-util");
var table =             require('text-table');

// Paths
var buildPath =         path.resolve(__dirname, 'assets/build/javascript');
var entryPath =         path.resolve(__dirname, 'assets/javascript', 'main.js');

var bannerText = ['/*!',
  ' * ' + pkg.name,
  ' * @version v' + pkg.version,
  ' * @link ' + pkg.homepage,
  ' * @author ' + pkg.author,
  ' */',
  ''].join('\n');

// Plugins
var uglify =            new webpack.optimize.UglifyJsPlugin({ minimize: true });
var banner =            new webpack.BannerPlugin(bannerText, { raw: true, entryOnly: true });

module.exports = {
  debug: true,
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
    noParse: [/jquery/],
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
  plugins: [
    //uglify,
    banner
  ],
  // plugins: [uglify],
};

