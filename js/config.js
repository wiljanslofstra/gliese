var inDevelopment = true,
    version = ((inDevelopment) ? (new Date()).getTime() : 1),
    controllerEl = document.getElementById('wrapper'),
    controller = (controllerEl === null) ? false : controllerEl.getAttribute('data-controller');

var paths = {
    vendor: 'vendor/',
    modules: 'modules/',
    bower: 'bower_components/',
    controllers: 'controllers/'
};

// Require.js configuration
requirejs.config({
    baseUrl: 'js',
    urlArgs: 'v=' + version,

    paths: {
        app: paths.modules + 'app',
        jquery: paths.bower + 'jquery/dist/jquery.min',
        modernizr: paths.vendor + 'modernizr',
        velocity: paths.bower + 'velocity/jquery.velocity',
        velocityUI: paths.bower + 'velocity/velocity.ui'
    },

    shim: {
        'velocity': ['jquery'],
        'velocityUI': ['velocity']
    }
});

// Load custom controller js
if (controllerEl !== null) {
    require([paths.controllers + controller]);
    if (inDevelopment) { console.log('Controller: %s', controller); } 
}

// Load general app logic
require(['app'], function (App) {
    'use strict';
    App.init();
});
