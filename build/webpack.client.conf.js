const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, '../src/entry-client.js'),
  output: {
    filename: 'bundle.client.js',
  },
  plugins: [
    // new VueSSRClientPlugin()
  ]
})
