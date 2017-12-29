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

defineCommand('Toggle Loop')
defineCommand('Undo') 
defineCommand('Redo')       
defineCommand('Add Marker')
defineCommand('Append')  
defineCommand('Overdub')
