const { commands } = require('./command')

window.addEventListener('keydown', dispatch)

module.exports = {
  emitter: new (require('eventemitter3'))(),
  mappings: [],
  mapKey,
  dispatch
}

mapKey('p', 'Toggle Play')
mapKey('l', 'Toggle Loop')
mapKey('u', 'Undo')
mapKey('r', 'Redo')
mapKey('m', 'Add Marker')
mapKey('a', 'Append')
mapKey('o', 'Overdub')

function mapKey (key, command) {
  module.exports.mappings.push([key, command])
  return module.exports
}

function dispatch (event) {
  const key = event.key.toLowerCase()
  module.exports.mappings.some(([mapping, command]) => {
    if (mapping === key) {
      console.log(mapping, command)
      module.exports.emitter.emit(command, event)
      return true
    }
  })
}
