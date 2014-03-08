var gulp = require('gulp'),

	// Server plugins
	express = require('express'),
	refresh = require('gulp-livereload'),
	lrserver = require('tiny-lr')(),
	livereload = require('connect-livereload'),

	// Other plugins
	open = require('gulp-open'),
	concat = require('gulp-concat'),
	sass = require('gulp-ruby-sass'),
	rimraf = require('gulp-rimraf'),
	minify = require('gulp-minify-css'),
	htmlbuild = require('gulp-htmlbuild'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	path = require('path'),

	// Server settings
	lrport = 35729,
	serverport = 5000;


// Server configuration with livereload enabled
var server = express();
server.use(livereload({
	port: lrport
}));
server.use(express.static(path.resolve('./')));



// Server initiation and livereload, opens server in browser
gulp.task('serve', function() {
	server.listen(serverport);
	lrserver.listen(lrport, function(err) {
		if (err) {
			return;
		}
	});

	gulp.src('./index.html')
	    .pipe(open('', {
	    	url: 'http://localhost:' + serverport
	    }));
});



// SASS compiling & reloading
gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass({
        	compass: true,
        	noCache: true,
        	quiet: true
        }))
        .pipe(gulp.dest('./css'))
        .pipe(refresh(lrserver));
});


// Clear 'dist' directory, then minifying, copying, processing, uglifying, etc for build
// gulp.task('remove', function() {
// 	gulp.src('./css/min/bootstrap.css')
// 		.pipe(rimraf());
// });

gulp.task('minify', function() {
	gulp.src('./css/*.css')
		.pipe(minify({
			keepSpecialComments: 0
		}))
		.pipe(gulp.dest('./css/min'));
});

// gulp.task('scripts', function() {
// 	gulp.src('./prod/js/header/*.js')
// 		.pipe(concat('header.js'))
// 		.pipe(gulp.dest('./dist/js'));
// });
 
// gulp.task('html', function() {
// 	gulp.src("./prod/**/*.html")
// 		.pipe(htmlbuild({
// 			js: function (files, callback) {
// 	      		gulp.run('scripts');
// 	      		callback(null, [ '/js/header.js' ]);
// 	    	}
// 	  	}))
// 	  	.pipe(gulp.dest("./dist"));
// });

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
        .pipe(gulp.dest('./dist/img'));
});



// Watching files for changes before reloading
gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', function() {
		gulp.run('sass');
	});

	gulp.watch('./css/main.css', function() {
		gulp.src('./css/main.css')
			.pipe(refresh(lrserver));
	});

	gulp.watch('./img/**/*', function() {
		gulp.src('./img/**/*')
		    .pipe(refresh(lrserver));
	});
	gulp.watch('./js/**/*.js', function() {
		gulp.src('./js/prod/**/*.js')
		    .pipe(refresh(lrserver));

	});
	gulp.watch('./**/*.html', function() {
		gulp.src('./**/*.html')
		    .pipe(refresh(lrserver));
	});
});


// Default functionality includes server with livereload and watching
gulp.task('default', function(){
	gulp.run(
		'sass',
		'serve',
		'watch'
	);
});

// Build functionality with cleaning, moving, compiling, etc.
gulp.task('build', [
		// 'remove'
	], function(){
	gulp.run(
		'sass',
		'minify',
		// 'html',
		'uglify',
		'imagemin'
	);
});