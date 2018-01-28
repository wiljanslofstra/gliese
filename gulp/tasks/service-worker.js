/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const workbox = require('workbox-build');
const abs = require('../utils/abs');
const dist = abs();

function serviceWorker() {
  return workbox.generateSW({
    globDirectory: dist,
    globPatterns: ['assets/dist/**/*.{js,css}'],
    swDest: `${dist}/service-worker.js`,
    clientsClaim: true,
    skipWaiting: true,
  }).then(() => {
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn(`Service worker generation failed: ${error}`);
  });
}

gulp.task('service-worker', serviceWorker);

module.exports = serviceWorker;
