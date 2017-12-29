const Model = require('./Model')
console.debug(Model)
require('./Controller')(Model)
require('./View')(document.body, Model)
