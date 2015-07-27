/**
 * gulpfile.js
 **/
var gulp          = require("gulp");
var browserSync   = require("browser-sync");
var reload        = require("browser-sync").reload;
var sass          = require("gulp-sass");
var sourcemaps    = require("gulp-sourcemaps");
var autoprefixer  = require("gulp-autoprefixer");
var minifyCSS     = require("gulp-minify-css");
var uglify        = require("gulp-uglify");
var jshint        = require("gulp-jshint");
var gutil         = require("gulp-util");
var webpack       = require("webpack");
var rename        = require("gulp-rename");
var webpackConfig = require("./webpack.config");

var assets = "assets";
var config = {
  browserSync: {
    proxy: 'localhost:2000/Gliese-new',
    open: false
  },
  sass: {
    src: assets + "/sass/**/*.{sass,scss}",
    dest: assets + '/build/css',
  }
};

gulp.task("webpack", function(callback) {
  // run webpack
  var compiler = webpack(webpackConfig);

  compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
  }, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    var statsJson = stats.toJson();
    gutil.log(gutil.colors.blue("[Webpack] Bundled in:"), statsJson.time + "ms");
  });

  callback();
});

// JSHINT
gulp.task('js:hint', function() {
  return gulp.src(config.js.watch)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// SASS
gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      precision: 8
    }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 version', 'ie >= 8', 'iOS >= 7', 'android >= 4.1'] }))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(minifyCSS({
      advanced: false
    }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(reload({ stream:true }));
});

gulp.task('browserSync', function() {
  browserSync(config.browserSync);
});

gulp.task('watch', ['sass', 'webpack', 'browserSync'], function() {
  gulp.watch(config.sass.src, ['sass']);
  //gulp.watch(config.js.watch, ['js:hint']);
});

gulp.task('default', ['watch']);
