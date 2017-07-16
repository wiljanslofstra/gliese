const gulp = require('gulp');
const path = require('path');

// Setup paths
process.env.PWD = process.env.PWD || path.resolve(process.cwd(), '../');
global.PATHS = require('./config/paths.js');
global.PRODUCTION = (process.env.NODE_ENV === 'production');

// Require all tasks
require('./tasks/clean');
require('./tasks/styles');
require('./tasks/scripts');
require('./tasks/static');
require('./tasks/images');
require('./tasks/icons');
require('./tasks/modernizr');
require('./tasks/sw-precache');

// Build workflow
const build = gulp.series('clean', gulp.parallel('styles', 'scripts', 'static', 'images'));

// Watch tasks
gulp.task('watch', gulp.series([
  'scripts', () => {
    gulp.watch(path.resolve(process.env.PWD, global.PATHS.js.src), 'scripts');
  },
]));

gulp.task('default', build);
