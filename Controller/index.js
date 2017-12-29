module.exports = function controller (Model) {
  const Command = require('./command')(Model)
  const Time = require('./frame')(Model).start()
  const Keyboard = require('./keyboard')(Model, Command)
  return { Command, Time, Keyboard }
}
