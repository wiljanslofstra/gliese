var _ = require('lodash');
var fs = require('fs-extra');
var path = require('path');

var mapping = {
  '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.standalone.css': '../assets/sass/vendor/_bootstrap-datepicker.scss',
  '../node_modules/slick-carousel/slick/slick.scss': '../assets/sass/vendor/_slick-carousel.scss',
};

module.exports = function() {
  _.each(mapping, function(dest, src) {
    src = path.resolve(__dirname, src);
    dest = path.resolve(__dirname, dest);

    fs.copy(src, dest, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Copied ${path.basename(src)} to ${path.basename(dest)}`);
      }
    });
  });
};
