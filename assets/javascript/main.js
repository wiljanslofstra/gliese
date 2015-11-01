/* jshint node: true */
"use strict";

require('./config.js');
require('imports?this=>window!modernizr');

var Home = require('./views/home.js');
new Home();
