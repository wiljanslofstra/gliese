/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const abs = require('../utils/abs');

const src = abs(global.PATHS.images.src, global.PATHS.images.ext);
const dest = abs(global.PATHS.images.dest);

function images() {
  return gulp.src(src)
    .pipe(changed(dest))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({ plugins: [{ removeViewBox: true }] }),
    ]))
    .pipe(gulp.dest(dest));
}

gulp.task('images', images);

module.exports = images;
