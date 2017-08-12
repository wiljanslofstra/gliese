/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const abs = require('../utils/abs');

function fonts() {
  return gulp.src(abs('assets/src/fonts/**/*.{ttf,woff,woff2,eot,svg}'))
    .pipe(gulp.dest(abs('assets/dist/fonts')));
}

gulp.task('static', gulp.parallel(fonts));

module.exports = {
  fonts,
};
