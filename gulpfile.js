var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	sass = require('gulp-ruby-sass'),
    plugins = gulpLoadPlugins(),
    gulpif = require('gulp-if');
    //sprite = require('css-sprite').stream;

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

gulp.task('imgmin', function() {
	gulp.src('build/img/*.{jpg,png,gif}', {read: false})
        .pipe(plugins.clean());

	return gulp.src('img/**/*.{jpg,png,gif}')
		.pipe(plugins.imagemin({
			optimizationLevel: 3
		}))
		.pipe(gulp.dest('build/img'));
});

// gulp.task('sprites', function () {
// 	return gulp.src('img/sprite-src/*.png')
// 		.pipe(sprite({
// 			name: 'sprite.png',
// 			style: '_sprite.scss',
// 			cssPath: '../img',
// 			processor: 'scss'
// 		}))
// 	.pipe(gulpif('*.png', gulp.dest('build/img/'), gulp.dest('css/modules/')))
// });

gulp.task('default', function () {
   gulp.run(['css', 'js']);
});

gulp.task('watch', ['css', 'js'], function() {
	gulp.watch('css/*.scss', ['css']);
	gulp.watch('js/**/*.js', ['js']);
});