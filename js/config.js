// Warning! Set inDevelopment to false in production
var inDevelopment = true,
    version = 1;

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/vendor',

    // Prevent cache (only for development)
    urlArgs: "v=" + ((inDevelopment) ? (new Date()).getTime() : version),

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