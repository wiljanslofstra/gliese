var BOWER_PATH = '../bower_components/';
var JS_PATH = '../js/';

require.config({
    baseUrl: '../js/',
    urlArgs: (new Date()).getTime(),
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
        },
        mocha: {
            exports: 'mocha'
        }
    },
    paths: {
        'jquery':         BOWER_PATH + 'jquery-legacy/dist/jquery',
        'underscore':     BOWER_PATH + 'underscore/underscore',
        'backbone':       BOWER_PATH + 'backbone/backbone',
        'slick':          BOWER_PATH + 'slick-carousel/slick/slick',
        'velocity':       BOWER_PATH + 'velocity/velocity',
        'velocityUi':     BOWER_PATH + 'velocity/velocity.ui',

        'mocha':          BOWER_PATH + 'mocha/mocha',
        'chai':           BOWER_PATH + 'chai/chai',
        'chaiJquery':    BOWER_PATH + 'chai-jquery/chai-jquery',

        'home':           JS_PATH + 'views/home'
    }
});

define(function(require) {
    var chai = require('chai');
    var mocha = require('mocha');
    require('backbone');
    require('jquery');
    var chaiJquery = require('chaiJquery');

    // Chai
    window.should = chai.should();
    window.expect = chai.expect;
    window.assert = chai.assert;
    chai.use(chaiJquery);

    mocha.setup('bdd');

    require([
        'specs/home-tests.js',
    ], function(require) {
        mocha.run();
    });
 
});

