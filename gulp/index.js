/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const path = require('path');
const browserSync = require('browser-sync');

// Setup paths
const PWD = process.env.PWD || path.resolve(process.cwd(), '../');
const PATHS = require('./config/paths.js');

process.env.PWD = PWD;
global.PATHS = PATHS;
global.PRODUCTION = (process.env.NODE_ENV === 'production');

const browserSyncEnabled = PATHS.browserSync.enabled;

require('./tasks/clean');
require('./tasks/styles');
require('./tasks/scripts');
require('./tasks/static');
require('./tasks/images');
require('./tasks/icons');
require('./tasks/modernizr');
require('./tasks/sw-precache');

const build = gulp.series('clean', gulp.parallel('styles', 'scripts', 'static', 'images', 'icons'));

const watchJSPath = path.resolve(PWD, PATHS.js.src, PATHS.js.ext);
const watchSassPath = path.resolve(PWD, PATHS.sass.src, PATHS.sass.ext);
const watchImgPath = path.resolve(PWD, PATHS.images.src, PATHS.images.ext);
const watchHTMLPath = path.resolve(PWD, PATHS.html.src, PATHS.html.ext);
const watchIconsPath = path.resolve(PWD, PATHS.icons.src, PATHS.icons.ext);
const watchFontsPath = path.resolve(PWD, PATHS.fonts.src, PATHS.fonts.ext);

const reload = (cb) => {
  if (browserSyncEnabled) {
    browserSync.reload();
  }
  cb();
};

const watchFn = () => {
  if (browserSyncEnabled) {
    const options = Object.assign({}, PATHS.browserSync);
    delete options.enabled;
    browserSync.init(options);
  }

  gulp.watch(watchJSPath, gulp.series('scripts', reload));
  gulp.watch(watchSassPath, gulp.series('styles', reload));
  gulp.watch(watchImgPath, gulp.series('images'));
  gulp.watch(watchIconsPath, gulp.series('icons'));
  gulp.watch(watchFontsPath, gulp.series('static'));
  gulp.watch(watchHTMLPath).on('change', browserSync.reload);
};

gulp.task('watch', gulp.series(build, watchFn));

gulp.task('default', build);
