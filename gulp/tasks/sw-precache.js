/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const path = require('path');
const swPrecache = require('sw-precache');

function swPrecacheFn(cb) {
  swPrecache.write(path.resolve(process.env.PWD, 'service-worker.js'), {
    staticFileGlobs: [
      path.resolve(process.env.PWD, 'assets/dist/**/*.{js,css}'),
      path.resolve(process.env.PWD, 'assets/dist/fonts/**/*.{woff2}'),
      path.resolve(process.env.PWD, 'assets/dist/images/**/*.{jpg,png,gif,svg}'),
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
