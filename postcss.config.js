module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 version', 'ie >= 9', 'iOS >= 7', 'android >= 4.1']
    })
  ]
}
