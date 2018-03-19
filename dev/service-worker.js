const workbox = require('workbox-build');
const path = require('path');

const root = path.resolve(__dirname, '..');
const glob = 'assets/dist/**/*.{js,css}';
const outputPath = path.resolve(root, 'service-worker.js');

function serviceWorker() {
  return workbox.generateSW({
    globDirectory: root,
    globPatterns: [glob],
    swDest: outputPath,
    clientsClaim: true,
    skipWaiting: true,
  }).then(() => {
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn(`Service worker generation failed: ${error}`);
  });
}

serviceWorker();
