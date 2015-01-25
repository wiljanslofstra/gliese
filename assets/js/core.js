/**
 * App.js
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com>
 */

/* jshint undef: true, unused: true */
/* global ENV */

var App = function() {
    
    'use strict';

    function init() {
        console.log('init');
    }

    // Exports
    return {
        init: init
    };
    
}();

App.init();
