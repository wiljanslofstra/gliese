/**
 * Home
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com>
 * @return {function} init
 */

/* jshint undef: true, unused: true */
/* global define */

define('views/home', ['modules/module'], function(ModuleName) {
    
    'use strict';

    var init = function() {
        console.log('Home.js loaded');
        
        ModuleName.init();
    };

    return {
        init: init
    };
});
