var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-ruby-sass'),
	minify = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	path = require('path');

// SASS compiling & reloading
gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass({
        	compass: true,
        	noCache: true,
        	quiet: true
        }))
        .pipe(gulp.dest('./css'));
});

// Minify CSS files
gulp.task('minify', function() {
	gulp.src('./css/*.css')
		.pipe(minify({
			keepSpecialComments: 0
		}))
		.pipe(gulp.dest('./css/min'));
});

gulp.task('uglify', function() {
  	gulp.src('./js/*.js')
      	.pipe(uglify())
      	.pipe(gulp.dest('./js/dist'));
});

gulp.task('imagemin', function () {
    gulp.src('./img/**/*')
        .pipe(imagemin({
        	progressive: true
        }))
        .pipe(gulp.dest('./img/dist'));
});

// Watching files for changes before reloading
gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', function() {
		gulp.run('sass');
	});
});


// Default functionality includes server with livereload and watching
gulp.task('default', function(){
	gulp.run(
		'sass',
		'watch'
	);
});

// Build functionality with cleaning, moving, compiling, etc.
gulp.task('build', function(){
	gulp.run(
		'sass',
		'minify',
		'uglify',
		'imagemin'
	);
});


