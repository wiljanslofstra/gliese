/**
 * App.js
 * @author Wiljan Slofstra <wiljanslofstra@gmail.com>
 */
/*global define */
define('app', ['backbone'], function (Backbone) {
	'use strict';

	var AppView = Backbone.View.extend({
		el: 'body'
	});

	var app = new AppView();

	return app;
});
