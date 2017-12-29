const Model = require('./Model')
const View = require('./View')(document.body, Model)
const Controller = require('./Controller')(Model)

console.debug(module.exports = { Model, View, Controller })
