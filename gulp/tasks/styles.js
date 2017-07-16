/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const sass = require('gulp-sass');
const path = require('path');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sassLint = require('gulp-sass-lint');

const errors = require('../utils/errors.js');

const src = path.resolve(process.env.PWD, global.PATHS.sass.src, global.PATHS.sass.ext);
const dest = path.resolve(process.env.PWD, global.PATHS.sass.dest);

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
    .pipe(gulp.dest(dest));
}

gulp.task('styles', styles);

module.exports = styles;
