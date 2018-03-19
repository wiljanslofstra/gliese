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

BrowserSync is built into Laravel Mix. You can change the proxy URL in ```webpack.mix.js```.

## Add modules

In the last year I've built a few JavaScript components that are being used across projects. A lot of them are not necessary in every project. But they were still available in the code at all times.

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

## Google Tag Manager

This boilerplate is best used in combination with Google Tag Manager. A few events are built-in:

### Timing

Two timing events are send by default. 'Page load' will be triggered when the whole page is loaded (including images etc.) and 'DOM interactive' is triggered when the page is usable. Both are collected with the Performance API.

GTM has to handle the event ```timing``` and the variables ```timing_name``` and ```timing_value```.

### Errors

Any runtime errors that occur in JS are catched and send into GTM. The event that is triggered is ```error_event```. The data is stored in the following variables:

- ```error_name```
- ```error_message```
- ```error_stack```

### General events

All other events are being send to a general events action. For this to work the event ```general_event``` needs to be handled in GTM. This event is accompanied by a few variables:

- ```general_event_category```
- ```general_event_action```
- ```general_event_label```
- ```general_event_value```
