/**
 * Module name
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com
 * @return {function} init
 */
define('modules/module', [], function() {
	var init = function() {
		console.log('Modules/module.js loaded');
	};

	return {
		init: init
	};
});