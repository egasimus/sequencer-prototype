module.exports = function controller (Model) {
  const Tone = require('./tone')(Model)
  const Command = require('./command')(Model, Tone)
  const Time = require('./frame')(Model).start()
  const Keyboard = require('./keyboard')(Model, Command)
  return { Tone, Command, Time, Keyboard }
}
