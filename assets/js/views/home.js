
var App = App || {};

App.Home = function() {

	'use strict';

	function init() {
		console.log('home');
	}

	return {
		init: init
	};
	
}();

App.Home.init();
