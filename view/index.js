module.exports = function (host) {
  require('./index.styl')
  require('./app')
    .render(require('../model'))
    .then(result => {
      result.appendTo(host)
      console.log(result.getComponent())
    })
}
