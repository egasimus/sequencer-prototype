'use strict'

const ROOT = (...args) =>
  require('path').resolve(__dirname, '..', '..', ...args)

module.exports = {
  target: 'web',
  context: ROOT(),
  entry: ROOT('index.js'),
  resolve: { extensions: [ '.js', '.marko' ] },
  module: { loaders: [ { test: /\.marko$/, loader: 'marko-loader' } ] },
  output: { path: ROOT('dist'), filename: 'bundle.js' },
  devServer: { publicPath: '/', overlay: true },
  plugins: [ new (require('html-webpack-plugin'))() ],
}
