var gulp = require('gulp'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
	minify = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename'),
	rimraf = require('gulp-rimraf'),
	path = require('path');

var dist_folder = './dist/';
var config = {
	// JS Source files
	js_files: './js/*.js',
	js_vendor: './js/vendor/*.js',
	js_all: './js/**/*.js',

	// SASS/CSS Source files
	sass: './sass/**/*.scss',
	ie_files: './css/ie/*',

	// Image Source files
	img_files: './img/**/*',

	// Distribution
	img_dist: dist_folder + 'img',
	ie_files_dist: dist_folder + 'css/ie',
	css_dist: dist_folder + 'css',
	js_dist: dist_folder + 'js'
}

// SASS compiling & reloading
gulp.task('sass', function () {
    return gulp.src(config.sass)
        .pipe(compass({
        	sass: 'sass',
        	css: 'dist/css',
        	style: 'expanded',
        	relative: true,
        	comments: false,
        	require: ['sass-globbing']
        }))
        .on('error', function(err) {
        	console.log(err.message)
        })
        .pipe(gulp.dest(config.css_dist))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minify({
			keepSpecialComments: 0
		}))
        .pipe(gulp.dest(config.css_dist))
        .pipe(notify({ message: 'Gliese: Sassed.' }));
});

gulp.task('move', function() {
	// Move IE files to the dist folder
    return gulp.src(config.ie_files)
    	.pipe(gulp.dest(config.ie_files_dist));
})

gulp.task('scripts', function() {
  	gulp.src(config.js_files)
  		.pipe(gulp.dest(config.js_dist))
  		.pipe(rename({ suffix: '.min' }))
      	.pipe(uglify())
      	.pipe(gulp.dest(config.js_dist));

    // Concatenate all scripts inside vendor to vendor.js and minify
    return gulp.src(config.js_vendor)
    	.pipe(concat('vendor.js'))
    	.pipe(gulp.dest(config.js_dist))
  		.pipe(rename({ suffix: '.min' }))
      	.pipe(uglify())
      	.pipe(gulp.dest(config.js_dist))
      	.pipe(notify({ message: 'Gliese: Scripts executed.' }));
});

gulp.task('imagemin', function () {
    return gulp.src(config.img_files)
        .pipe(imagemin({ optimizationLevel: 4, progressive: true }))
        .pipe(gulp.dest(config.img_dist))
        .pipe(notify({ message: 'Gliese: Imagemin executed.' }));
});

gulp.task('clean', function() {
  	// Cleans all folders before compiling everything again
  	return gulp.src([config.css_dist, config.js_dist, config.img_dist], {read: false})
    	.pipe(rimraf())
    	.pipe(notify({ message: 'Gliese: Cleaned out.' }));
});

gulp.task('default', ['clean'], function(){
	// Run initial tasks
	gulp.start('imagemin', 'sass', 'scripts', 'move');
});

gulp.task('watch', function() {
	gulp.watch(config.sass, ['sass']);
	gulp.watch(config.js_all, ['scripts']);
	gulp.watch(config.img, ['imagemin']);
});
