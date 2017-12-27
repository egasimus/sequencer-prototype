document.body.innerHTML = ''

require('./index.styl')

require('./components/app')
  .render({ name: 'Krali Marko &co.' })
  .then(result => {
    result.appendTo(document.body)
    console.log(result.getComponent())
  })
