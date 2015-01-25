
'use strict';

/* jshint node: true */

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');

var paths = {
    css: 'assets/css',
    js: 'assets/js',
    jsVendor: 'assets/js/vendor',
    bower: 'assets/js/bower_components',
    img: 'assets/img'
};

gulp.task('styles', function() {
    return gulp.src(paths.css + '/*.scss')
        .pipe(sass({ style: 'nested' }))
            .on('error', function (err) { console.log(err.message ); })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(paths.css))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(paths.css))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
    // concat plugins
    return gulp.src([
            paths.bower + '/jquery-legacy/dist/jquery.js',
            paths.bower + '/velocity/velocity.js',
            paths.bower + '/velocity/velocity.ui.js',
            paths.bower + '/slick-carousel/slick/slick.js',
            paths.bower + '/matchMedia/matchMedia.js',
            paths.bower + '/console-polyfill/index.js'
        ])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest(paths.jsVendor))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jsVendor));
});

gulp.task('scripts_hint', function() {
    return gulp.src([
            paths.js + '/modules/**/*.js',
            paths.js + '/views/**/*.js',
            paths.js + '/app.js',
            './gulpfile.js'
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('images', function() {
    return gulp.src([paths.img + '/**/*', '!' + paths.img + '/dist'])
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest(paths.img + '/dist'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'images');
});

gulp.task('watch', function() {
    gulp.watch(paths.css + '/**/*.scss', ['styles']);
    gulp.watch(paths.js + '/**/*.js', ['scripts_hint']);
    gulp.watch(paths.img + '/**/*', ['images']);

    livereload.listen();

    gulp.watch([
        paths.css + '*.css',
        paths.js + '**/*.js',
        '*.php'
    ]).on('change', livereload.changed);
});
