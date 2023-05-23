const { defineConfig } = require('@vue/cli-service')
const pagesConfig = require('./src/entry/pages.config.js')

module.exports = defineConfig({
  publicPath: './',
  pages: pagesConfig,
  transpileDependencies: true
})
