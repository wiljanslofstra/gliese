define(['velocity'], function() {
	var init = function() {
		console.log('Up & Running!');

		$('.init-animate').velocity({
			top: '0',
			left: '0',
			opacity: '1'
		}, 750);
	};

	return {
		init: init
	}
});