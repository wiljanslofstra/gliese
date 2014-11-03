/**
 * Home
 * @author  Wiljan Slofstra <wiljanslofstra@gmail.com>
 * @return {function} init
 */
define('views/home', ['modules/module'], function(ModuleName) {
    var init = function() {
        console.log('Home.js loaded');
        
        ModuleName.init();
    };

    return {
        init: init
    }
});
