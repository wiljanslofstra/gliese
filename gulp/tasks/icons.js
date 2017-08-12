/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const SVGSpriter = require('svg-sprite');
const abs = require('../utils/abs');

function getFilesInFolder(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

function getFileData(filePath) {
  return new Promise((resolve, reject) => {
    if (path.extname(filePath) !== '.svg') {
      return;
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function addToSprite(spriter, filePath) {
  return new Promise((resolve) => {
    getFileData(filePath)
      .then((data) => {
        spriter.add(filePath, null, data);
        resolve();
      });
  });
}

function compileFiles(spriter, folderPath, files) {
  return new Promise((resolve) => {
    const promises = [];

    files.forEach((file) => {
      const filePath = path.resolve(folderPath, file);
      const added = addToSprite(spriter, filePath, file);
      promises.push(added);
    });

    Promise.all(promises).then(() => {
      resolve();
    });
  });
}

function icons(cb) {
  global.PATHS.icons.forEach((obj) => {
    const folderPath = abs(obj.src);

    const spriter = new SVGSpriter({
      dest: abs(obj.dest),
      mode: {
        symbol: {
          inline: true,
          prefix: obj.prefix,
        },
      },
      shape: {
        id: {
          generator: name => `icon-${path.basename(name, '.svg')}`,
        },
      },
    });

    getFilesInFolder(folderPath)
      .then(files => compileFiles(spriter, folderPath, files))
      .then(() => {
        spriter.compile((err, result) => {
          // Loop through modes, e.g. css, symbol etc.
          Object.keys(result).forEach((mode) => {
            const resource = result[mode];

            // Loop through the data components. e.g. sprite, css etc.
            Object.keys(resource).forEach((type) => {
              const data = resource[type];

              // Create folders recursively for icons
              mkdirp.sync(path.dirname(data.path));

              // Write file
              fs.writeFileSync(data.path, data.contents);
            });
          });

          cb();
        });
      })
      .catch((err) => {
        console.error(err);
        cb();
      });
  });
}

function moveFiles() {
  return gulp.src(abs('assets/src/icons/**/*'))
    .pipe(gulp.dest(abs('assets/dist/icons')));
}

gulp.task('icons', gulp.series(icons, moveFiles));

module.exports = icons;
