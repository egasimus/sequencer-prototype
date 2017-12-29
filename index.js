document.body.innerHTML = ''

require('./index.styl')

window.addEventListener('keydown', require('./controller/keyboard').dispatch)

require('./view/app')
  .render({ name: 'Krali Marko &co.' })
  .then(result => {
    result.appendTo(document.body)
    console.log(result.getComponent())
  })
