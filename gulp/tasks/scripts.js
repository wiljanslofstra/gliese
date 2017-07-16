/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.js');

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

gulp.task('scripts', scripts);

module.exports = scripts;
