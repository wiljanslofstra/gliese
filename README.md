# Gliese

## What is Gliese?
Gliese is a development framework that uses
- [Bootstrap](http://getbootstrap.com/) JS/CSS
- [Require.js](http://requirejs.org/) as module loader
- [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/)
- [Bower](https://github.com/bower/bower) package manager

## How to run Gliese?
Install [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/) then
```	
compass watch
```

To install/update components, install [Bower](https://github.com/bower/bower) on your system.

## Before production
- [Customize Bootstrap JS/CSS](http://getbootstrap.com/customize/)
- [Custom Modernizr](http://modernizr.com/download/)
- Uncomment and setup Google Analytics in index.html
- Change the variable environment in main.js to 'production'


## Cross-browser?
All modern browsers and IE8+.

### Need support for IE8?
Include the v1 version of jQuery instead of the v2.

and add this in the `<head>` of your page
```
<!--[if lte IE 8]>
    <script src="bower_components/respond/dest/respond.min.js"></script>
<![endif]-->
```

## What's next
- [ ] Add Grunt for compiling sass/compass and build tasks