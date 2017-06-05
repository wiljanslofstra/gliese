
function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

if (process.argv.length > 2) {
  const start = new Date();
  const fn = require(`./${process.argv[2]}.js`);
  console.log(`[${format(start)}] Run '${process.argv[2]}'...`);
  fn();
}
