define([
	'jquery',
	'backbone',
	'underscore',
	'views/IndexView'
], function($, Backbone, _, IndexView) {
	var router = Backbone.Router.extend({
		initialize: function() {
			Backbone.history.start();
		},

		routes: {
			"": "index"
		},

		index: function() {
			new IndexView();
		}
	});

	return router;
});