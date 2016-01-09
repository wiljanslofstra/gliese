var webpack = require('webpack');
var webpackConfig = require('../webpack.config');

module.exports = function() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).watch({ // watch options:
      aggregateTimeout: 300, // wait so long for more changes
      poll: true // use polling instead of native watchers
    }, (err, stats) => {
      if (err) {
        return reject(err);
      }

      console.log(stats.toString(webpackConfig.stats));

      resolve();
    });
  });
}
