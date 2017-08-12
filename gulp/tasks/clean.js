/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const del = require('del');
const abs = require('../utils/abs');

function clean(cb) {
  del([
    abs(global.PATHS.dest),
  ], {
    force: true,
  }).then(() => {
    cb();
  });
}

gulp.task('clean', clean);

module.exports = clean;
