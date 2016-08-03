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
      "css/transforms",
      "css/transforms3d",
      "css/vhunit",
      "css/gradients",
      "geolocation",
      "serviceworker",
      "storage/localstorage",
      "touchevents",
      "inputtypes"
    ]
  }, function (result) {
    fs.writeFile('assets/javascript/vendor/modernizr.custom.js', result);
  });
};
