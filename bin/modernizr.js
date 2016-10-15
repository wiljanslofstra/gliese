var modernizr = require("modernizr");
var fs = require('fs');

module.exports = function() {
  modernizr.build({
    "minify": true,
    "options": [
      "mq",
      "setClasses"
    ],
    "feature-detects": [
      "css/flexbox",
      "css/transforms3d",
      "css/vhunit",
      "touchevents",
      "inputtypes",
      "test/dom/dataset",
      "test/dom/classList",
      "test/requestanimationframe",
    ]
  }, function (result) {
    fs.writeFile('assets/javascript/vendor/modernizr.custom.js', result);
  });
};
