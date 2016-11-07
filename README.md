# Gliese
Front-end boilerplate using:
- [Sass](http://sass-lang.com/)
- [Webpack 2](http://webpack.github.io/) with Babel
- NPM as task-runner
- [Parker](https://github.com/katiefenn/parker) to analyse CSS
- [ESLint](http://eslint.org/) to lint Javascript with [Airbnb's ESLint configuration](https://github.com/airbnb/javascript)
- Custom Modernizr and Lodash builds
- SVG spritesheets with [SVGO](https://github.com/svg/svgo) and [Spritesh](https://github.com/edenspiekermann/sprite.sh)

## Get started
- ```npm install``` or ```yarn install```
- Change path in ```system/config.php```
- Change project data in ```package.json```
- ```npm start``` or ```yarn start```

## Commands
```bash
# Development. Watches Sass and JS for changes and outputs in /assets/build
yarn start

# Production. Watches Sass and JS for changes and outputs in /assets/build. Production will
# uglify, dedupe and generate sourcemaps for Javascript and minify CSS.
yarn run production

# Generate a custom Modernizr build, the options can be set in bin/modernizr.js
yarn run build:modernizr

# Generate a custom lodash build, the optins can be set in the package.json
yarn run build:lodash

# Analyse CSS with Parker, will output things like specificity, number of selectors etc.
yarn run analyse:parker

# Analyse Javascript with ESLint
yarn run analyse:eslint

# Generate a list of TODOS
yarn run analyse:todo

# Generate SVG spritesheet from icons (with spritesh) in /assets/images/icons-src to
# /assets/images/icons, you could change the paths in package.json. Before creating the sprite
# it will also remove unnecessary information from the SVG files with SVGO
yarn run build:icons
```
