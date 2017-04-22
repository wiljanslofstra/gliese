const brotli = require('brotli');
const fs = require('fs');
const path = require('path');

const buildPath = path.resolve(__dirname, '../assets/build');
const allowedExtensions = ['.js', '.css'];

module.exports = () => {
  fs.readdir(buildPath, (err, files) => {
    files.forEach((file) => {
      const ext = path.extname(file);

      if (allowedExtensions.indexOf(ext) >= 0) {
        const filePath = path.resolve(buildPath, file);
        const fileContents = fs.readFileSync(filePath);
        const compressed = brotli.compress(fileContents, true);

        fs.writeFileSync(`${filePath}.br`, new Buffer(compressed));
      }
    });
  });
};
