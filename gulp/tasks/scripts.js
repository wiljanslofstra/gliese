/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.js');
const fs = require('fs');
const abs = require('../utils/abs');

const manifestPath = abs(global.PATHS.manifest.dest, global.PATHS.manifest.js);

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

    const json = stats.toJson();

    const info = stats.toString({
      colors: true,
    });

    console.log(info);

    writeRevs(json.entrypoints); // eslint-disable-line

    cb();
  });
}

function formatData(data) {
  return JSON.stringify(data, null, '  ');
}

function writeManifest(obj) {
  return new Promise((resolve, reject) => {
    // Try to create file if it doesn't exist
    fs.writeFile(manifestPath, formatData(obj), { flag: 'wx' }, (err) => {
      // If an error is returned, it's probably because file already exists
      if (err) {
        reject(obj);
      }

      resolve(obj);
    });
  });
}

function mergeManifest(obj) {
  return new Promise((resolve, reject) => {
    // Read the existing manifest
    fs.readFile(manifestPath, (readErr, data) => {
      if (readErr) {
        reject(readErr);
      }

      // Get contents, make it an object and merge it with our new revisions
      const json = data.toString();
      const fileObj = JSON.parse(json);
      const merge = Object.assign({}, fileObj, obj);

      // Write the new revisions to file
      fs.writeFile(manifestPath, formatData(merge), (err) => {
        if (err) {
          reject(err);
        }

        resolve();
      });
    });
  });
}

function writeRevs(entries) {
  const obj = {};

  Object.keys(entries).forEach((bundle) => {
    obj[`${bundle}.js`] = entries[bundle].assets[0];
  });

  writeManifest(obj)
    .catch(mergeManifest);
}

gulp.task('scripts', scripts);

module.exports = scripts;
