/*jslint node: true */
/*global require */
'use strict';

var paths = {
	css: 'assets/css/',
	js: 'assets/js/',
	jsTests: 'assets/js/tests/',
	img: 'assets/img',
	testUrl: 'http://www.wiljanslofstra.com/'
};

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	argv = require('yargs').argv,

	autoprefixer = require('autoprefixer-core'),
	stylish = require('jshint-stylish'),

	production = !!argv.production,

	WebPageTest = require('webpagetest'),

	a11y = require('a11y'),
	logSymbols = require('log-symbols'),
	psi = require('psi');

// --------------------------
// CUSTOM TASK METHODS
// --------------------------
var tasks = {
    
    // --------------------------
    // SASS (libsass)
    // --------------------------
    sass: function() {
        return gulp.src(paths.css + '*.scss')
            
            // sourcemaps + sass + error handling
            .pipe($.if(!production, $.sourcemaps.init()))
            .pipe($.sass({
                sourceComments: !production,
                outputStyle: production ? 'compressed' : 'nested',
                errLogToConsole: true
            }))

            // generate .maps
            .pipe($.if(!production, $.sourcemaps.write({
                'includeContent': false,
                'sourceRoot': '.'
            })))

            // autoprefixer
            .pipe($.if(!production, $.sourcemaps.init({
                'loadMaps': true
            })))
            .pipe($.postcss([autoprefixer({
                browsers: ['last 2 versions']
            })]))

            // we don't serve the source files
            // so include scss content inside the sourcemaps
            .pipe($.sourcemaps.write({
                'includeContent': true
            }))

            // write sourcemaps to a specific directory
            // give it a file and save
            .pipe(gulp.dest(paths.css));
    },

    // --------------------------
    // Linting
    // --------------------------
    lintjs: function() {
        return gulp.src([
                'gulpfile.js',
                paths.js + 'app.js',
                paths.js + 'core.js',
                paths.js + 'modules/*.js',
                paths.js + 'views/*.js',
            ]).pipe($.jshint())
            .pipe($.jshint.reporter(stylish))
            .on('error', function() {});
    },

    // --------------------------
    // Optimize asset images
    // --------------------------
    optimize: function() {
        return gulp.src(paths.img + '**/*.{gif,jpg,png,svg}')
            .pipe($.imagemin({
                progressive: true,
                svgoPlugins: [{
                    removeViewBox: false
                }],
                // png optimization
                optimizationLevel: production ? 3 : 1
            }))
            .pipe(gulp.dest(paths.img + 'dist/'));
    },

    // --------------------------
    // Testing with mocha
    // --------------------------
    test: function() {
        return gulp.src(paths.jsTests + '*.js', {
                read: false
            })
            .pipe($.mocha({
                'ui': 'bdd',
                'reporter': 'spec'
            }));
    },

    // --------------------------
    // WebPageTest
    // --------------------------
    wpt: function () {
    	var wpt = new WebPageTest('www.webpagetest.org', '<API_KEY>');

    	wpt.runTest(paths.testUrl, {
    		location: 'Amsterdam:Chrome'
    	}, function(err, data) {
			console.log(err || data);
		});
    },

    // --------------------------
    // A11Y Accessibility
    // --------------------------
    accessibility: function () {
    	var passes = '';
    	var failures = '';

    	return a11y(paths.testUrl, function (err, reports) {
    		if (err) {
    			console.log(err);
    		} else {
    			reports.audit.forEach(function (el) {
			        if (el.result === 'PASS') {
			            passes += logSymbols.success + ' ' + el.heading + '\n';
			        }

			        if (el.result === 'FAIL') {
			            failures += logSymbols.error + ' ' + el.heading + '\n';
			            failures += el.elements + '\n\n';
			        }
			    });

			    console.log(passes);
			    console.log(failures);
    		}
    	});
    },

    // --------------------------
    // PageSpeed Insights
    // --------------------------
    psi: function() {
    	psi.output(paths.testUrl, {
    		strategy: 'mobile',
    		threshold: 80,
    		//key: ''
    	}, function (err) {
			console.log(err || 'done');
		});
    }
};

gulp.task('browser-sync', function() {
    $.livereload.listen();
});

// --------------------------
// CUSTOMS TASKS
// --------------------------
gulp.task('sass', tasks.sass);
gulp.task('lint:js', tasks.lintjs);
gulp.task('optimize', tasks.optimize);
gulp.task('test', tasks.test);
gulp.task('wpt', tasks.wpt);
gulp.task('accessibility', tasks.accessibility);
gulp.task('psi', tasks.psi);

// --------------------------
// DEV/WATCH TASK
// --------------------------
gulp.task('watch', ['sass', 'browser-sync'], function() {

    gulp.watch(paths.css + '**/*.scss', ['sass']);
    gulp.watch(paths.js + '**/*.js', ['lint:js']);

    gulp.watch([
        paths.css + '**/*.css',
        paths.js + '**/*.js',
        '**/*.php'
    ]).on('change', $.livereload.changed);

    $.util.log(logSymbols.success + ' ' + $.util.colors.bgGreen('Watching for changes...'));

});

// build task
gulp.task('build', [
    'sass'
]);

gulp.task('default', ['watch']);
