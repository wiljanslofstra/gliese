/**
 * Module name
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com
 * @return {function} init
 */

/* jshint undef: true, unused: true */
/* global define */

define('modules/module', [], function() {
	
	'use strict';

	var init = function() {
		console.log('Modules/module.js loaded');
	};

	return {
		init: init
	};
});