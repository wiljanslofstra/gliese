/* eslint-disable prefer-rest-params */

const path = require('path');

module.exports = function abs() {
  const args = [process.env.PWD].concat(Array.from(arguments));
  return path.resolve.apply(this, args);
};
