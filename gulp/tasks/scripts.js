/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.js');
const rev = require('gulp-rev');
const del = require('del');
const abs = require('../utils/abs');

const compiler = webpack(webpackConfig());

function scripts(cb) {
  compiler.run((err, stats) => {
    if (err) {
      console.error(err.stack || err);

      if (err.details) {
        console.error(err.details);
      }

      cb();
      return;
    }

    const info = stats.toString({
      colors: true,
    });

    console.log(info);

    cb();
  });
}

function scriptsRev(cb) {
  console.log('test');
  cb();
}

gulp.task('scripts', gulp.series(scripts, scriptsRev));

module.exports = scripts;
