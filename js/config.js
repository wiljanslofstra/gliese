/**
 * Config
 * @constructor
 */

var inDevelopment = true,
    version = ((inDevelopment) ? (new Date()).getTime() : 1),
    vendorDir = '../vendor/';

requirejs.config({
    /** Set the vendor folder as base path */
    baseUrl: 'js/modules',

    /** Prevent caching of scripts by appending the date */
    urlArgs: "v=" + version,

    /** Paths to scripts. Relative to the baseUrl */
    paths: {
        app: 'app',
        jquery: vendorDir + 'jquery/dist/jquery.min',
        modernizr: vendorDir + 'modernizr',
        velocity: vendorDir + 'velocity/jquery.velocity',
        velocityUI: vendorDir + 'velocity/velocity.ui'
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