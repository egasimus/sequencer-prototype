document.body.innerHTML = ''
require('./controller')(require('./model'))
require('./view')(document.body)
