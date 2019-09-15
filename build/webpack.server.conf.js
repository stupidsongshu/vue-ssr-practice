const path = require('path')
// const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
  // 并且还会在编译 Vue 组件时，
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: 'node',
  entry: path.join(__dirname, '../src/entry-server.js'),
  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
  output: {
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json`
    // new VueSSRServerPlugin()
  ]
})
