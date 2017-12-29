module.exports = {
  commands: {},
  defineCommand
}

function defineCommand (name, callback) {
  module.exports.commands[name] = callback
  return module.exports
}

const model = require('../Model')

defineCommand('Toggle Play', () => {
  model.playing = !model.playing
})

defineCommand('Toggle Loop', () => {
  model.looping = !model.looping
})

defineCommand('Undo') 
defineCommand('Redo')

defineCommand('Add Marker', () => {
  model.markers.push(model.playhead)
})

defineCommand('Append')  
defineCommand('Overdub')
