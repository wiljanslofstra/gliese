/**
 * Config
 * @constructor
 */

var inDevelopment = true,
    version = ((inDevelopment) ? (new Date()).getTime() : 1);

requirejs.config({
    /** Set the vendor folder as base path */
    baseUrl: 'js/vendor',

    /** Prevent caching of scripts by appending the date */
    urlArgs: "v=" + version,

    /** Paths to scripts. Relative to the baseUrl */
    paths: {
        app: '../app',
        jquery: 'jquery/dist/jquery.min',
        modernizr: 'modernizr/modernizr',
        velocity: 'velocity/jquery.velocity',
        velocityUI: 'velocity/velocity.ui'
    },

    /** Configuration for non-AMD scripts */
    shim: {
        'velocity': ['jquery'],
        'velocityUI': ['velocity']
    }
});

/** Beginning of the app, require base scripts and the App */
require(['app', 'jquery', 'modernizr'], function (App) {
    'use strict';

    if (inDevelopment) {
        console.log('Warning: JS cache is disabled');
    }

    /** Call the init method on the App module */
    App.init();
});