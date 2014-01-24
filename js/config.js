{
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    // paths is relative to the baseUrl
    paths: {
        jquery:         config.bower + 'jquery/jquery',
        bootstrap:      config.bower + 'bootstrap-sass/vendor/assets/javascripts/bootstrap',
        underscore:     config.bower + 'underscore/underscore',
        backbone:       config.bower + 'backbone/backbone',
        text:           config.bower + 'requirejs-text/text'
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
}