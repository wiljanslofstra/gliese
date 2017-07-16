# Gliese
Front-end boilerplate using:
- [Sass](http://sass-lang.com/)
- [Webpack 2](http://webpack.github.io/) with Babel
- [ESLint](http://eslint.org/) with [Airbnb's ESLint configuration](https://github.com/airbnb/javascript)
- Custom Modernizr and Lodash builds
- SW-Precache
- OneSignal push notifications support

## Get started
- ```npm install``` or ```yarn install```
- Change path and URL in ```system/config.php```
- Change project data in ```package.json```
- ```npm start``` or ```yarn start```

## Commands
```bash
# Development. Watches Sass and JS for changes and outputs in /assets/dist
yarn start

# Production. Watches Sass and JS for changes and outputs in /assets/dist. Production will
# uglify, dedupe and generate sourcemaps for Javascript and minify CSS.
yarn run production

# Generate a custom Modernizr build, the options can be set in bin/modernizr.js
yarn run build:modernizr

# Generate a custom lodash build, the optins can be set in the package.json
yarn run build:lodash

# Analyse Javascript with ESLint
yarn run analyse:eslint

# Generate SVG spritesheet from SVG icons
yarn run build:icons
```
