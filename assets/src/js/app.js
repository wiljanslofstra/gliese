/**
 * App.js
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com>
 */

/* jshint undef: true, unused: true */
/* global ENV, PAGE, define, require */

define('app', [], function() {
    
    'use strict';

    var init = function() {
        if (ENV === 'development') {
            console.info('Development server');
        }

        console.log('App.js loaded');

        if (typeof PAGE !== 'undefined' && PAGE && PAGE !== '') {
            require(['views/' + PAGE], function(View) {
                View.init();
            });
        }
    };

    return {
        init: init
    };
});
