requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/vendor',

    // Prevent cache (only for development)
    // urlArgs: "bust=" + (new Date()).getTime(),

    // Gives error if module doesn't call define()
    // enforceDefine: true,

    paths: {
        app: '../app',
        jquery: 'jquery/dist/jquery.min',
        modernizr: 'modernizr/modernizr',
        velocity: 'Velocity.js/jquery.velocity'
    },
    shim: {
    	// 'bootstrap': {
    	// 	deps: ['jquery'],
    	// 	exports: 'Bootstrap'
    	// }
    }
});

// Start the main app logic.
define(['jquery', 'modernizr', 'app'], function ($, Modernizr, app) {
    app.init();
});