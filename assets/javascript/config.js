/**
 * Config
 * @frontend Wiljan Slofstra <wiljanslofstra@gmail.com>
 */

BASE = BASE.replace(/\/?$/, '/');

var config = {
  DEV: true,
  BASE_URL: BASE,
  JS_URL: BASE + "/assets/javascript"
};

if (config.DEV) {
  console.log("Development mode. On base: " + config.BASE_URL);
}

module.exports = config;
