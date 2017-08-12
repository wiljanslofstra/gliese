/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const path = require('path');

// Setup paths
const PWD = process.env.PWD || path.resolve(process.cwd(), '../');
const PATHS = require('./config/paths.js');

process.env.PWD = PWD;
global.PATHS = PATHS;
global.PRODUCTION = (process.env.NODE_ENV === 'production');

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

const watchFn = () => {
  gulp.watch(watchJSPath, gulp.series('scripts'));
  gulp.watch(watchSassPath, gulp.series('styles'));
  gulp.watch(watchImgPath, gulp.series('images'));
};

gulp.task('watch', gulp.series(build, watchFn));

gulp.task('default', build);
