var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	sass = require('gulp-ruby-sass'),
    plugins = gulpLoadPlugins();

gulp.task('js', function() {
	gulp.src(['js/config.js'])
		.pipe(plugins.uglify())
		.pipe(gulp.dest('build/js'));

	gulp.src('js/modules/**/*.js')
		.pipe(plugins.uglify())
		.pipe(gulp.dest('build/js/modules'));

	return gulp.src('js/vendor/**/*.js')
		.pipe(gulp.dest('build/js/vendor'));
});

gulp.task('css', function() {
	return gulp.src('css/*.scss')
        .pipe(sass({
        	style: 'compressed'
        }))
        .pipe(plugins.rename({ 
        	suffix: '.min' 
        }))
        .pipe(plugins.filesize())
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['css', 'js'], function () {
   // Your default task
});

gulp.task('watch', ['css', 'js'], function() {
	gulp.watch('css/*.scss', ['css']);
	gulp.watch('js/**/*.js', ['js']);
});