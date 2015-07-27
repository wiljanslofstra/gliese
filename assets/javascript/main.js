/**
 * Main.js
 * @module main
 * @type {object}
 */
var config = require('./config.js');
var Home = require('./views/home.js');
require('imports?this=>window!modernizr');

var home = new Home();
