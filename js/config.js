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
        velocity: 'velocity/jquery.velocity',
        selectivizr: 'selectivizr/selectivizr'
    },
    shim: {
    	'velocity': {
    		deps: ['jquery']
    	}
    }
});

// Start the main app logic.
define(['jquery', 'modernizr', 'app'], function ($, Modernizr, app) {
    if (inDevelopment) console.log('==== Warning: Running in development =====');

    app.init();

    // Polyfill for css pseudo-classes and attribute selectors on <IE9
    if ($('body').hasClass('lt-ie9')) {
        require(['selectivizr']);
    }
});