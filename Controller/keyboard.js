module.exports = {
  emitter: new (require('eventemitter3'))(),
  mappings: [],
  mapKey,
  dispatch
}

window.addEventListener('keydown', dispatch)

mapKey('p', 'Toggle Play')
mapKey('l', 'Toggle Loop')
mapKey('u', 'Undo')
mapKey('r', 'Redo')
mapKey('m', 'Add Marker')
mapKey('a', 'Append')
mapKey('o', 'Overdub')
mapKey('Escape', 'Hide Piano')

function mapKey (key, command) {
  module.exports.mappings.push([key, command])
  return module.exports
}

function dispatch (event) {
  module.exports.mappings.some(([mapping, command]) => {
    if (mapping === event.key) {
      console.debug(mapping, command)
      require('./command').execute(command, event)
      return true
    }
  })
}
