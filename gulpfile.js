/*jslint node: true */
/*global require */

'use strict';

var HOST = 'localhost:2000/Gliese/';
var CSS_PATH = './assets/css/';
var JS = './assets/js/';
var IMG = './assets/img/';

var gulp = require('gulp');
var gutil = require('gulp-util');
//var del = require('del');
//var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var exec = require('child_process').exec;
var notify = require('gulp-notify');
var argv = require('yargs').argv;

// sass
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var sourcemaps = require('gulp-sourcemaps');

// BrowserSync
var browserSync = require('browser-sync');

// image optimization
var imagemin = require('gulp-imagemin');

// linting
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// testing/mocha
var mocha = require('gulp-mocha');

// gulp build --production
var production = !!argv.production;

// determine if we're doing a build
// and if so, bypass the livereload
//var build = argv._.length ? argv._[0] === 'build' : false;
//var watch = argv._.length ? argv._[0] === 'watch' : true;

// ----------------------------
// Error notification methods
// ----------------------------
var beep = function() {
  var os = require('os');
  var file = 'gulp/error.wav';
  if (os.platform() === 'linux') {
	// linux
	exec("aplay " + file);
  } else {
	// mac
	console.log("afplay " + file);
	exec("afplay " + file);
  }
};

var handleError = function(task) {
  return function(err) {
	beep();
	
	  notify.onError({
		message: task + ' failed, check the logs..',
		sound: false
	  })(err);
	
	gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
  };
};

// --------------------------
// CUSTOM TASK METHODS
// --------------------------
var tasks = {
  // --------------------------
  // SASS (libsass)
  // --------------------------
  sass: function() {
	return gulp.src(CSS_PATH + '*.scss')
	  // sourcemaps + sass + error handling
	  .pipe(gulpif(!production, sourcemaps.init()))
	  .pipe(sass({
		sourceComments: !production,
		outputStyle: production ? 'compressed' : 'nested'
	  }))
	  .on('error', handleError('SASS'))
	  // generate .maps
	  .pipe(gulpif(!production, sourcemaps.write({
		'includeContent': false,
		'sourceRoot': '.'
	  })))
	  // autoprefixer
	  .pipe(gulpif(!production, sourcemaps.init({
		'loadMaps': true
	  })))
	  .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
	  // we don't serve the source files
	  // so include scss content inside the sourcemaps
	  .pipe(sourcemaps.write({
		'includeContent': true
	  }))
	  // write sourcemaps to a specific directory
	  // give it a file and save
	  .pipe(gulp.dest(CSS_PATH));
  },
  // --------------------------
  // linting
  // --------------------------
  lintjs: function() {
	return gulp.src([
		'gulpfile.js',
		JS + 'app.js',
		JS + 'core.js',
		JS + 'modules/*.js',
		JS + 'views/*.js',
	  ]).pipe(jshint())
	  .pipe(jshint.reporter(stylish))
	  .on('error', function() {
		beep();
	  });
  },
  // --------------------------
  // Optimize asset images
  // --------------------------
  optimize: function() {
	return gulp.src(IMG + '**/*.{gif,jpg,png,svg}')
	  .pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		// png optimization
		optimizationLevel: production ? 3 : 1
	  }))
	  .pipe(gulp.dest(IMG + 'dist/'));
  },
  // --------------------------
  // Testing with mocha
  // --------------------------
  test: function() {
	return gulp.src('./client/**/*test.js', {read: false})
	  .pipe(mocha({
		'ui': 'bdd',
		'reporter': 'spec'
	  })
	);
  },
};

gulp.task('browser-sync', function() {
	browserSync({
		proxy: HOST
	});
});

gulp.task('reload-sass', ['sass'], function(){
  browserSync.reload();
});

gulp.task('reload-js', function(){
  browserSync.reload();
});

// --------------------------
// CUSTOMS TASKS
// --------------------------
gulp.task('sass', tasks.sass);
gulp.task('lint:js', tasks.lintjs);
gulp.task('optimize', tasks.optimize);
gulp.task('test', tasks.test);

// --------------------------
// DEV/WATCH TASK
// --------------------------
gulp.task('watch', ['sass', 'browser-sync'], function() {

  gulp.watch(CSS_PATH + '**/*.scss', ['reload-sass']);
  gulp.watch(JS + '**/*.js', ['lint:js', 'reload-js']);

  gutil.log(gutil.colors.bgGreen('Watching for changes...'));

});

// build task
gulp.task('build', [
  'sass'
]);

gulp.task('default', ['watch']);
