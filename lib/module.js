const path = require('path')

module.exports = function nuxtHotjar(options) {
  // Disable if env is dev & hjid is absent
  if (
      this.options.dev && 
      process.env.NODE_ENV !== 'production' || 
      !this.options.hjid) {
    return
  }
  // Register plugin
  this.addPlugin({src: path.resolve(__dirname, 'plugin.js'), ssr: false, options})
}

module.exports.meta = require('./package.json')