module.exports = function controller (model) {
  require('./command')
  require('./frame')(model)
  require('./keyboard')
}
