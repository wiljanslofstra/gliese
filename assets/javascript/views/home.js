/* jshint node: true */

var $ = require('jquery');

function HomeView() {
  this.text = "Hello world!";
  this.render();
}

HomeView.prototype.shout = function() {
  var text = this.text.toUpperCase();
  return text;
};

HomeView.prototype.render = function() {
  console.log("HomeView outputs: " + this.shout());
};

module.exports = HomeView;
