/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const path = require('path');

function fonts() {
  return gulp.src(path.resolve(global.PATHS.fonts.src, global.PATHS.fonts.ext))
    .pipe(gulp.dest(global.PATHS.fonts.dest));
}

gulp.task('static', gulp.parallel(fonts));

module.exports = {
  fonts,
};
