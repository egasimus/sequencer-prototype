'use strict'

const ROOT = (...args) =>
  require('path').resolve(__dirname, '..', '..', ...args)

module.exports = {
  target: 'web',
  context: ROOT(),
  entry: ROOT('index.js'),
  resolve: { extensions: [ '.js', '.marko' ] },
  module: { loaders: [
    { test: /\.marko$/, loader: 'marko-loader' },
    { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
  ] },
  output: { path: ROOT('Build', 'dist'), filename: 'bundle.js' },
  devServer: {
    publicPath: '/',
    contentBase: ROOT('Data'),
    overlay: true,
  },
  plugins: [ new (require('html-webpack-plugin'))() ],
}
