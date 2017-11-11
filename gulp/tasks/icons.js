/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const cheerio = require('gulp-cheerio');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const path = require('path');

function icons() {
  const svgs = gulp
    .src(path.resolve(global.PATHS.icons.src, global.PATHS.icons.ext))
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(imagemin())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(cheerio({
      run: ($) => {
        $('svg')
          .attr('style', 'position: absolute')
          .attr('width', 0)
          .attr('height', 0);
      },
      parserOptions: { xmlMode: true },
    }))
    .pipe(rename({ basename: 'sprite' }))
    .pipe(gulp.dest(global.PATHS.icons.dest));

  return svgs;
}

gulp.task('icons', icons);

module.exports = icons;
