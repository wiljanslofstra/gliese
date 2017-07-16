/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const path = require('path');

function fonts() {
  return gulp.src(path.resolve(process.env.PWD, 'assets/src/fonts/**/*.{ttf,woff,woff2,eot,svg}'))
    .pipe(gulp.dest(path.resolve(process.env.PWD, 'assets/dist/fonts')));
}

gulp.task('static', gulp.parallel(fonts));

module.exports = {
  fonts,
};
