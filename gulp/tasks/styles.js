/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sassLint = require('gulp-sass-lint');
const rev = require('gulp-rev');
const abs = require('../utils/abs');

const errors = require('../utils/errors.js');

const src = abs(global.PATHS.sass.src, global.PATHS.sass.ext);
const dest = abs(global.PATHS.sass.dest);

const plugins = [
  autoprefixer(),
];

if (global.PRODUCTION) {
  plugins.push(cssnano());
}

function styles() {
  return gulp.src(src)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(gulpif(!global.PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', errors))
    .pipe(postcss(plugins))
    .pipe(gulpif(!global.PRODUCTION, sourcemaps.write()))
    .pipe(rev())
    .pipe(gulp.dest(dest))
    .pipe(rev.manifest({
      path: global.PATHS.manifest.css,
    }))
    .pipe(gulp.dest(abs(global.PATHS.manifest.dest)));
}

gulp.task('styles', styles);

module.exports = styles;
