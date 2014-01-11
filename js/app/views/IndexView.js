define([
	'jquery',
	'backbone',
	'models/IndexModel',
	'text!templates/indexTemplate.html'
], function($, Backbone, model, template) {
	
	var IndexView = Backbone.View.extend({
		
		el: '.script-list',

		events: {

		},
		
		initialize: function() {
			this.render();
		},
		
		render: function() {
			var options = {
				scripts: [
					'jQuery',
					'Bootstrap',
					'Underscore',
					'RequireJS',
					'Backbone'
				]
			};

			this.template = _.template(template, options);

			this.$el.html(this.template);

			return this;
		}

	});

	return IndexView;

});