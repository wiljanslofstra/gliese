// Global variables
var config = {
    version: '0.1',
    environment: 'development', // or production
    bower: '../bower_components/'
}

// Start the main app logic
define([
    'jquery',
    'bootstrap',
    'app'
], function ($, Bootstrap, App) {
    new App();
});