module.exports = function (host, model) {
  require('../Theme/index.styl')
  require('./App')
    .render({ model })
    .then(result => {
      host.innerHTML = ''
      result.appendTo(host)
      console.log(result.getComponent())
    })
}
