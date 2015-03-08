/**
 * Home.js
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com>
 */
/*global define */
define(['backbone'], function (Backbone) {
	'use strict';

	var HomeView = Backbone.View.extend({
		el: 'body',

		events: {
			'click .btn': 'btnClick',
			'change .selector': 'selectChange'
		},

		someVariable: true
	});

	var homeView = new HomeView();

	return HomeView;
});
