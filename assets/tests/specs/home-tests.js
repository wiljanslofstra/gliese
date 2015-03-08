define(function(require) {
	var Home = require('home');

	describe('Home', function() {
		describe('Home view', function() {
			var home = new Home();

			it('someVariable should be true', function() {
				home.someVariable.should.equal(true);
			});

			it('is expected to equal true', function () {
				expect(home.someVariable).to.equal(true);
			});
		});
	});
});
