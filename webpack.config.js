var hjsConfig = require('hjs-webpack');
var config = hjsConfig({
  in: "assets/javascript/app.js",
  out: "assets/build",

  // Don't generate index.html file
  html: false,

  output: {
    filename: 'app.js'
  },

  // Make the assets available at localhost:9000
  port: 9000
});

// Add eslint to loaders
config.module.loaders.push({
  test: /(\.jsx|\.js)$/,
  loader: "eslint-loader",
  exclude: /node_modules/
});

module.exports = config;
