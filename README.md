# Gliese

## What is Gliese?
Gliese is a development framework that uses
- [Bootstrap](http://getbootstrap.com/) JS/SASS
- [Gulp](http://gulpjs.com/) build system
- [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/)
- [Sassaparilla](http://sass.fffunction.co/) mixins and placeholders
- [Bower](https://github.com/bower/bower) package manager

## Install
- [Node.js](http://nodejs.org/)
- [RVM](http://www.rvm.io/)
- Ruby (with RVM)
- [RubyGems](http://rubygems.org/pages/download) if ```gem``` is not doing anything.

After the above:
```
npm install gulp bower
gem install sass compass sass-globbing
```
and to run and setup the project
```
bower install
npm install
gulp
```

## Gulp
Gulp has two main commands:
- ```gulp``` will build/minify/concatenate/uglify your files
- ```gulp watch``` will watch images/scripts/styles for changes and compile/minify accordingly.
All compiled/minified files will be outputted in the ```dist``` folder.

## Sassaparilla mixins
```
// List styles ===
unordered
unordered-inside
ordered
ordered-inside
no-bullet

// Transitions ===
_transition($prop:all, $duration:0.2s, $timing:ease-in-out, $delay:0s)

// Link styles ===
link-active-styles

// Vertical align ===
vertical-align

// Responsive ===
respond-to($media-min, $IE9: true) { @content }
respond-to-max($media-max, $IE9: true) { @content }
respond-to-min-max($media-min, $media-max, $IE9: true) { @content }

// Retina ===
image-2x($image, $width, $height)

// HEX to rgba ===
rgba($color, $value)

// Grid ===
grid_columns($columns)
grid

```

## Sassaparilla placeholders
```
// Show / hides
%is-hidden
%is-shown-block
%is-shown-inline

// Type and rhythm
%is-uppercase
%is-lowercase
%is-titlecase
%no-leader
%no-trailer

// Clearfixes
%clearfix
%pie-clearfix

// Images
%max-width
```
