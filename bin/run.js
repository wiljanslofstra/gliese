
function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(fn, options) {
  const start = new Date();
  console.log(`[${format(start)}] Starting '${options.name}'...`);
  fn(options);
}

if (process.argv.length > 2) {
  delete require.cache[__filename];
  run(require('./' + process.argv[2] + '.js'), { name: process.argv[2] });
}

module.exports = run;
