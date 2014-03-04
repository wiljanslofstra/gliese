(function(w){
	function App() {
		
	}

	App.prototype.init = function() {
		console.debug('Your app is running!');
	};

	var app = new App();
	app.init();

})(window);