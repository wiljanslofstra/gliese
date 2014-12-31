
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
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('styles', function() {
    return gulp.src('assets/src/css/*.scss')
        .pipe(sass({ style: 'nested' }))
            .on('error', function (err) { console.log(err.message ); })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('assets/dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('assets/dist/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
    // concat plugins
    gulp.src([
            'assets/src/js/bower_components/jquery-legacy/dist/jquery.js',
            'assets/src/js/bower_components/velocity/velocity.js',
            'assets/src/js/bower_components/velocity/velocity.ui.js'
        ])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('assets/dist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('assets/dist/js'));

    gulp.src('assets/src/js/**/*.js')
        .pipe(gulp.dest('assets/dist/js'));

    return gulp.src([
            'assets/src/js/modules/**/*.js',
            'assets/src/js/views/**/*.js',
            'assets/src/js/app.js',
            'gulpfile.js'
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('images', function() {
    return gulp.src('assets/src/img/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('assets/dist/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['assets/dist/css', 'assets/dist/js', 'assets/dist/img'], cb);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

gulp.task('watch', function() {
    gulp.watch('assets/src/css/**/*.scss', ['styles']);
    gulp.watch('assets/src/js/**/*.js', ['scripts']);
    gulp.watch('assets/src/img/**/*', ['images']);

    livereload.listen();
    gulp.watch(['assets/dist/**/*']).on('change', livereload.changed);
});
