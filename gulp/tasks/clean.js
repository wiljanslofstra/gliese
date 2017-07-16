/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const path = require('path');
const del = require('del');

function clean(cb) {
  del([
    path.resolve(process.env.PWD, global.PATHS.dest),
  ], {
    force: true,
  }).then(() => {
    cb();
  });
}

gulp.task('clean', clean);

module.exports = clean;
