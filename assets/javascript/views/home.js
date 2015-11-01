/* jshint node: true */
"use strict";

var $ = require('jquery');

function HomeView() {
  $('body').append("Hello world!");
}

module.exports = HomeView;
