
# Gliese
Front-end starter project

## Using
- [Webpack](http://webpack.github.io/) with [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack)
- [React](https://facebook.github.io/react/)
- [ESLint](http://eslint.org/)
- [Sass](http://sass-lang.com/)
- [Sass-lint](https://github.com/sasstools/sass-lint)
- [Browsersync](http://www.browsersync.io/) for Sass

## Usage
- Install [Node.JS](https://nodejs.org/download/)
- ```npm install```
- Change path in ```system/config.php```
- Change your information in ```package.json```

### Usage without Browserync
- ```npm run watch```

### Usage with Browserync
- Change your proxy settings or other settings for Browsersync in ```package.json``` (in scripts.server)
- ```npm start```

### Other commands
```bash
# Start Browsersync to listen to css changes
npm run server

# Watch Sass files and build to assets/build
npm run sass:watch

# Lint Sass files
npm run sass:lint

# Watch Javascript using Webpack-dev-server
npm run js:watch

# Build Javascript using Webpack
npm run js:build

# Start Sass watch and Webpack-dev-server
npm run watch

# Start Sass watch, Webpack-dev-server and Browsersync
npm run start
```

## Roadmap
- [ ] Update Babel to version 6
- [ ] Fix issue with hot-reload json not loading from the correct host
- [ ] Add more prebuild Sass elements
- [ ] Add tests, Karma?
- [ ] Add Autoprefixer
- [ ] Sass-lint on file change
