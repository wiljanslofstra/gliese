# Gliese
Front-end boilerplate using:
- [Sass](http://sass-lang.com/)
- [Webpack 3](http://webpack.github.io/) with Babel
- [ESLint](http://eslint.org/) with [Airbnb's ESLint configuration](https://github.com/airbnb/javascript)
- Custom Modernizr and Lodash builds
- SW-Precache

## Get started
- ```npm install``` or ```yarn install```
- Change path and URL in ```system/config.php```
- Change project data in ```package.json```
- ```npm start``` or ```yarn start```

## Commands
```bash
# Development
yarn start

# Development with watch mode
yarn start-watch

# Production
yarn run production

# Production with watch mode
yarn run production-watch

# Generate a custom Modernizr build, the options can be set in bin/modernizr.js
yarn run build:modernizr

# Generate a custom lodash build, the optins can be set in the package.json
yarn run build:lodash

# Analyse Javascript with ESLint
yarn run analyse:eslint

# Generate SVG spritesheet from SVG icons
yarn run build:icons
```

## BrowserSync

BrowserSync is built-in, but not enabled by default. To enable it, go to ```gulp/config/paths.js```, set ```browserSync.enabled``` to ```true``` and add a proxy URL.

You can also use any of the other BrowserSync modes, the ```browserSync``` object is directly passed to BrowserSync. For all options checkout [the BrowserSync docs](https://www.browsersync.io/docs/options).

## Module dependencies

To prevent the package.json (and your node_modules folder) from turning into a
enormous list of dependencies I've a list for what you need to use each module.

- filter: ```yarn add react react-dom qs form-serialize jump.js```
- maps: ```yarn add google-maps```
- autocomplete: ```yarn add awesomplete normalize-for-search```
- jumpToElement: ```yarn add jump.js```
- uploadField: ```yarn add blueimp-file-upload```
- datepicker: ```yarn add bootstrap-datepicker```
