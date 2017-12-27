document.body.innerHTML = ''

require('./index.styl')

require('./components/app')
  .renderSync({ name: 'Krali Marko &co.' })
  .appendTo(document.body)
