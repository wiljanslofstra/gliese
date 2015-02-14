/**
 * Core.js
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com>
 */
/*global require, BASE, BASE_URL */

var BOWER_PATH = '../bower_components/';
var ENV = (BASE_URL.indexOf('localhost') >= 0) ? 'development' : 'production';

require.config({
    baseUrl: 'assets/js',
    urlArgs: (ENV === 'development') ? "v=" +  (new Date()).getTime() : '',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery:         BOWER_PATH + 'jquery-legacy/dist/jquery',
        underscore:     BOWER_PATH + 'underscore/underscore',
        backbone:       BOWER_PATH + 'backbone/backbone',
        slick:          BOWER_PATH + 'slick-carousel/slick/slick',
        velocity:       BOWER_PATH + 'velocity/velocity',
        velocityUi:     BOWER_PATH + 'velocity/velocity.ui'
    }
});

require([
    'backbone',
    'app'
], function (Backbone) {
    
    'use strict';
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            'page.php': 'page',
            '': 'home',

            // Catch all other routes
            '*path': 'home'
        },

        home: function() {
            require(['views/home']);
        },

        page: function() {
            console.log('page');
        }
    });

    // Instantiate router
    window.router = new AppRouter();

    Backbone.history.start({
        pushState: true,
        root: BASE
    });

});
