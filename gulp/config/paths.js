module.exports = {
  dest: 'assets/dist',
  src: 'assets/src',

  manifest: {
    dest: 'assets/dist',
    base: 'assets/dist',
    css: 'css-manifest.json',
    js: 'js-manifest.json',
  },

  browserSync: {
    enabled: true,
    proxy: false, // e.g. localhost:3000 or project.localhost
    open: false,
    notify: false,
    port: 1234,
  },

  sass: {
    src: 'assets/src/sass',
    dest: 'assets/dist/css',
    ext: '**/*.scss',
  },

  js: {
    src: 'assets/src/javascript',
    dest: 'assets/dist/javascript',
    dest_definitions: 'assets/dist/javascript/definitions',
    ext: '**/*.js',
  },

  html: {
    src: '',
    ext: '**/*.{html,php,twig}',
  },

  images: {
    src: 'assets/src/images',
    dest: 'assets/dist/images',
    ext: '**/*.{png,jpg,svg,gif,ico,webp}',
  },

  icons: [
    {
      src: 'assets/src/icons/src',
      dest: 'assets/src/icons',
      prefix: '.icon-%s',
    },
  ],

  modernizr: {
    dest: 'assets/src/javascript/vendor/modernizr.custom.js',
  },
};
