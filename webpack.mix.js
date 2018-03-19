const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDevelopment = process.env.NODE_ENV === 'development';

mix
  .js('assets/src/javascript/main.js', 'assets/dist/javascript/')
  .js('assets/src/javascript/polyfills.js', 'assets/dist/javascript/')
  .js('assets/src/javascript/formValidation.js', 'assets/dist/javascript/')
  .webpackConfig({
    resolve: {
      alias: {
        modernizr: path.resolve(__dirname, 'assets/src/javascript/vendor/modernizr.custom.js'),
        lodash: path.resolve(__dirname, 'assets/src/javascript/vendor/lodash.custom.js'),
        jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.slim.js'),
      },
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: path.resolve(__dirname, 'assets/dist/javascript/report.html'),
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
        Button: 'exports-loader?Button!bootstrap/js/dist/button',
        Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
        Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
        Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
        Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
        Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
        Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
        Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
        Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
        Util: 'exports-loader?Util!bootstrap/js/dist/util',
      }),
    ],
    output: {
      publicPath: '/',
      chunkFilename: 'assets/dist/javascript/[name].[chunkhash].js',
    },
  });

mix.autoload({
  jQuery: 'jquery',
  $: 'jquery',
  'window.jQuery': 'jquery',
  Popper: ['popper.js', 'default'],
  Util: 'exports-loader?Util!bootstrap/js/dist/util',
  Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
});

mix
  .sass('assets/src/sass/main.scss', 'assets/dist/css/')
  .sass('assets/src/sass/bootstrap-datepicker.scss', 'assets/dist/css/')
  .options({
    processCssUrls: false,
  });

mix.copyDirectory('assets/src/fonts/', 'assets/dist/fonts/')
  .copyDirectory('assets/src/images/', 'assets/dist/images/')
  .copyDirectory('assets/src/icons/', 'assets/dist/icons/');

mix.setPublicPath('/');

mix.version();

if (isDevelopment) {
  mix.sourceMaps();
  mix.browserSync('gliese.localhost');
}
