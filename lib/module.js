const { resolve } = require('path')

function nuxtHotjar(options) {
  // Disable if hjid missing or
  // In dev mode and no dev forced option
  if (  !options.hjid  ||
        this.options.dev && !options.dev ) {
    return
  }
  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: "hotjar.js",
    options,
    ssr: false
  })
}

module.exports = nuxtHotjar
module.exports.meta = require('../package.json')
