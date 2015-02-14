/**
 * Home.js
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com>
 */
/*global define */
define('views/home', ['backbone'], function (Backbone) {
	'use strict';

	var HomeModel = Backbone.Model.extend({
		defaults: {
			'name': 'Hello'
		},
		initialize: function () {
			this.on('change:name', this.alertName);
		},
		alertName: function() {
			alert('Name: ' + this.get('name'));
		}
	});

	var HomeView = Backbone.View.extend({
		el: 'body',

		events: {
			'click .btn': 'btnClick',
			'change .selector': 'selectChange'
		},

		btnClick: function (e) {
			e.preventDefault();
			console.log('With the click of a button');

			this.model.set({'name': 'Hello world'});
		},

		selectChange: function (e) {
			var $el = $(e.currentTarget),
				val = $el.val();

			this.model.set({'name': val});
		}
	});

	var homeModel = new HomeModel();
	var homeView = new HomeView({ model: homeModel });

	return homeView;
});
