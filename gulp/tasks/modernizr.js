const gulp = require('gulp');
const path = require('path');
const modernizr = require('modernizr');
const fs = require('fs');

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
      'css/vhunit',
      'touchevents',
      'inputtypes',
      'test/dom/dataset',
      'test/dom/classList',
      'test/requestanimationframe',
    ],
  }, (result) => {
    fs.writeFile(path.resolve(process.env.PWD, global.PATHS.modernizr.dest), result);
    cb();
  });
}

gulp.task('modernizr', modernizrFn);

module.exports = modernizrFn;
