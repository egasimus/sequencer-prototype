module.exports = {
  commands: {},
  define,
  execute
}

function define (name, callback) {
  module.exports.commands[name] = callback
  return module.exports
}

function execute(command, ...args) {
  return module.exports.commands[command] &&
    module.exports.commands[command](...args)
}

const model = require('../Model')

define('Toggle Play', () => {
  model.playing = !model.playing
})

define('Toggle Loop', () => {
  model.looping = !model.looping
})

define('Undo') 
define('Redo')

define('Add Marker', () => {
  model.markers.push(model.playhead)
})

define('Append')  
define('Overdub')
