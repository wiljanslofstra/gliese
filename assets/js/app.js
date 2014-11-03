define('app', [], function() {
    var init = function() {
        if (ENV === 'development') {
            console.info('Development server');
        }

        console.log('App.js loaded');

        if (typeof PAGE !== 'undefined' && PAGE && PAGE !== '') {
            require(['views/' + PAGE], function(View) {
                View.init();
            });
        }
    };

    return {
        init: init
    }
});
