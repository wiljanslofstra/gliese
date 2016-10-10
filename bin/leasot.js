var fs = require('fs');
var leasot = require('leasot');
var glob = require('glob');
var path = require('path');

var file = './assets/javascript/main.js';

const paths = [
  'assets/javascript/**/*.js',
  'assets/sass/**/*.scss',
  'templates/**/*.php',
  'system/**/*.php',
];

function runLeasot(files) {
  // Parse all files and map the parsed data to an array
  var allComments = files.map((file) => {
    var content = fs.readFileSync(file, 'utf8');

    var ext = path.extname(file);

    return leasot.parse({
      ext: ext,
      content: content,
      fileName: file,
      customTags: null,
      withInlineFiles: true,
      withIncludedFiles: true,
    });

  // Filter out all empty files
  }).filter(function (item) {
    return item && item.length;

  // Reduce all files to an array
  }).reduce(function (items, item) {
    return items.concat(item);
  }, []);

  // Report all comments
  var output = leasot.reporter(allComments, {
    reporter: 'table',
  });

  console.log(output);
}

module.exports = function() {
  glob('{' + paths.join(',') + '}', {}, function (err, files) {
    runLeasot(files);
  });
}
