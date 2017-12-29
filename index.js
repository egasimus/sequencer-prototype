const Model = require('./Model')
const Controller = require('./Controller')(Model)
const View = require('./View')(document.body, Model)

console.debug(module.exports = { Model, View, Controller })

