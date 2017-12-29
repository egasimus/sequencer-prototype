require('./Controller')(require('./Model'))
require('./View')(document.body, require('./Model'))
