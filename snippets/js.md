# JS

## RequestAnimationFrame
```
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


// usage:
// instead of setInterval(render, 16) ....

(function animloop(){
  requestAnimFrame(animloop);
  render();
})();
```

## Require.js Config
```
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',

    // Prevent cache (only for development)
    // urlArgs: "bust=" + (new Date()).getTime(),

    // Gives error if module doesn't call define()
    enforceDefine: true,

    paths: {
        app: '../app',
        jquery: [
        	'//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
        	'jquery'
        ]
    },
    shim: {
    	'bootstrap': {
    		deps: ['jquery'],
    		exports: 'Bootstrap'
    	}
    }
});

// Start the main app logic.
requirejs(['jquery', 'app'], function ($, app) {
    app.init();
});
```
```
define(['jquery'], function($) {
	var init = function() {
	};

	return {
		init: init
	}
});
```

## Logging
```
['log', 'warn'].forEach(function(method) {
  var old = console[method];
  console[method] = function() {
    var stack = (new Error()).stack.split(/\n/);
    // Chrome includes a single "Error" line, FF doesn't.
    if (stack[0].indexOf('Error') === 0) {
      stack = stack.slice(1);
    }
    var args = [].slice.apply(arguments).concat([stack[1].trim()]);
    return old.apply(console, args);
  };
});
```




