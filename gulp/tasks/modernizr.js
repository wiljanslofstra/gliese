const gulp = require('gulp');
const modernizr = require('modernizr');
const fs = require('fs');
const abs = require('../utils/abs');

function modernizrFn(cb) {
  modernizr.build({
    minify: true,
    options: [
      'mq',
      'setClasses',
    ],
    'feature-detects': [
      'css/flexbox',
      'css/transforms3d',
      // 'css/vhunit',
      'touchevents',
      // 'inputtypes',
      // 'test/dom/dataset',
      // 'test/dom/classList',
      'test/requestanimationframe',
    ],
  }, (result) => {
    fs.writeFile(abs(global.PATHS.modernizr.dest), result);
    cb();
  });
}

gulp.task('modernizr', modernizrFn);

module.exports = modernizrFn;
