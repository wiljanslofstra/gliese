/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const swPrecache = require('sw-precache');
const abs = require('../utils/abs');

function swPrecacheFn(cb) {
  swPrecache.write(abs('service-worker.js'), {
    staticFileGlobs: [
      abs('assets/dist/**/*.{js,css}'),
      abs('assets/dist/fonts/**/*.{woff2}'),
      abs('assets/dist/images/**/*.{jpg,png,gif,svg}'),
    ],
  }, (err) => {
    if (err) {
      console.error(err);
      cb();
      return;
    }

    console.log('Successfully written service-worker.js');
    cb();
  });
}

gulp.task('swprecache', swPrecacheFn);

module.exports = swPrecacheFn;
