var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var paths = {
	bower: 'js/bower_components',
	bowerExclude: '!js/bower_components/**/*.js',
	vendorExclude: '!js/vendor/**/*.js',
	cleanDir: 'build',
	buildJs: 'build/js',
	buildCss: 'build/css',
	buildImg: 'build/img',
	srcJs: 'js',
	srcCss: 'css',
	srcImg: 'img'
};

/**
 * Javascript
 */
gulp.task('js', function() {
	// Uglify all js except bower components
	gulp.src([paths.srcJs + '/**/*.js', paths.bowerExclude])
		.pipe(plugins.cached('js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(paths.buildJs));

	// Copy bower components to the build directory
	return gulp.src(paths.bower)
		.pipe(gulp.dest(paths.buildJs))
		.pipe(plugins.notify('JS Completed'));
});

/**
 * Sass & css
 */
gulp.task('css', function() {
	// Compile all scss files to css
	return gulp.src(paths.srcCss + '/*.scss')
        .pipe(plugins.rubySass({
        	style: 'compressed', // nested, compact, compressed or expanded
        	precision: 10
        }))
        // Add a .min extension to the file name
        .pipe(plugins.rename({ 
        	suffix: '.min' 
        }))
        // Copy minified css file to the build directory
        .pipe(gulp.dest(paths.buildCss))
        .pipe(plugins.notify('CSS Completed'));
});

/**
 * Images
 */
gulp.task('imgmin', function() {
	// Compress all jpg, png and gif images and copy to the build directory
	return gulp.src(paths.srcImg + '/**/*.{jpg,png,gif}')
		.pipe(plugins.cached('img'))
		.pipe(plugins.imagemin({
			optimizationLevel: 3
		}))
		.pipe(gulp.dest(paths.buildImg));
});

/**
 * Validate Javascript
 */
gulp.task('validateJs', function() {
	return gulp.src([paths.srcJs + '/**/*.js', paths.bowerExclude, paths.vendorExclude])
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});

/**
 * Clean
 */
gulp.task('clean', function() {
	// Clean the whole build directory
	return gulp.src(paths.cleanDir + '/**/*', {read: false})
        .pipe(plugins.clean());
});

/**
 * Default
 */
gulp.task('default', ['clean'], function () {
   gulp.start(['css', 'js']);
});

/**
 * Watch
 */
gulp.task('watch', ['clean'], function() {
	gulp.start(['css', 'js']);
	gulp.watch(paths.srcCss + '/*.scss', ['css']);
	gulp.watch(paths.srcJs + '/**/*.js', ['js']);
});
