// Global variables
var config = {
    version: '0.1',
    environment: 'development' // or production
},
cacheBust = (config.environment === 'development') ? "bust=" + (new Date()).getTime() : "";

// Configuration for Require.js
requirejs.config({
    urlArgs: cacheBust,
    //By default load any module IDs from js/lib
    baseUrl: 'js/app',
    // paths is relative to the baseUrl
    paths: {
        jquery: '../../bower_components/jquery/jquery',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
        underscore: '../../bower_components/underscore/underscore',
        backbone: '../../bower_components/backbone/backbone',
        text: '../../bower_components/requirejs-text/text'
    },
    // Dependencies
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        }
    }
});

// Start the main app logic
define([
    'module',
    'jquery',
    'bootstrap',
    'router'
], function (module, $, Bootstrap, Router) {
    console.debug('Gliese %s', config.version);
    new Router();
});