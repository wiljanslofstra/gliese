var gulp = require('gulp'),
	gutil = require('gulp-util'),
	cache = require('gulp-cache'),
	compass = require('gulp-compass'),
	imagemin = require('gulp-imagemin'),
	jshint = require('gulp-jshint'),
	minify = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	rjs = require('gulp-requirejs'),
	bowerPath = "../bower_components/"

gulp.task('default', function() {
	gulp.run('styles', 'scripts');
});

gulp.task('watch', function() {

});

gulp.task('styles', function() {
	return gulp.src('sass/main.scss')
		.pipe(compass({ config_file: './config.rb' }))
		.pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('css/'))

		.pipe(rename({ suffix: '.min'} ))
		.pipe(minify())
		.pipe(gulp.dest('css/'));
});

gulp.task('scripts', function() {
	gulp.run('requirejs');

	return gulp.src('js/build.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter)
});

gulp.task('requirejs', function() {
	rjs({
		name: 'main',
		baseUrl: './js',
		out: 'build.js',
		paths: {
	        jquery:         bowerPath + 'jquery/jquery',
	        bootstrap:      bowerPath + 'bootstrap-sass/vendor/assets/javascripts/bootstrap',
	        underscore:     bowerPath + 'underscore/underscore',
	        backbone:       bowerPath + 'backbone/backbone',
	        text:           bowerPath + 'requirejs-text/text'
	    },
	    // Dependencies
	    shim: {
	        bootstrap: {
	            deps: ['jquery'],
	            exports: 'Bootstrap'
	        },
	        underscore: {
	            exports: '_'
	        },
	        backbone: {
	            deps: ['underscore'],
	            exports: 'Backbone'
	        }
	    }
	})
	.pipe(gulp.dest('js/'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(uglify())
	.pipe(gulp.dest('js/'));
});