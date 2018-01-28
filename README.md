# Gliese
Front-end boilerplate using:
- [Sass](http://sass-lang.com/)
- [Webpack 3](http://webpack.github.io/) with Babel
- [ESLint](http://eslint.org/) with [Airbnb's ESLint configuration](https://github.com/airbnb/javascript)
- Custom Modernizr and Lodash builds
- Workbox for Service Worker creation

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

## Add modules

In the last year I've built a few JavaScript components that are being used across projects. A lot of them
however are not required for every project. But they were still available in the code at all times.

To keep things clean, and make it easy to add prebuilt components I've added a CLI command to add
components on-the-fly. All available components are defined in ```/dev/modules/```. You can install
them using:

```
yarn run add-module {MODULE_NAME}
// or
npm run add-module {MODULE_NAME}
```

So to add something like a datepicker:

```
yarn run add-module datepicker
```
