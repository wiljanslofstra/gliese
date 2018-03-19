# Gliese

Front-end boilerplate using:

- Laravel Mix
- [ESLint](http://eslint.org/) with [Airbnb's ESLint configuration](https://github.com/airbnb/javascript)
- Workbox for Service Worker creation

## Get started
- ```npm install``` or ```yarn```
- Change path and URL in ```system/config.php```
- Change project data in ```package.json```
- ```npm run watch``` or ```yarn watch```

## Commands
```bash
# Development
yarn dev

# Development with watch mode
yarn watch

# Production
yarn run production

# Analyse Javascript with ESLint
yarn run analyse:eslint
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
