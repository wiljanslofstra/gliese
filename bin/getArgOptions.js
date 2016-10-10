module.exports = function(args) {
  var options = {};

  args.forEach(function(arg) {
    if (arg.indexOf('=') >= 0) {
      const split = arg.split('=');
      const key = split[0].toLowerCase();
      const val = split[1].toLowerCase();

      options[key] = val;
    }
  });

  return options;
};
