module.exports = {
  emitter: new (require('eventemitter3'))(),
  commands: {},
  defineCommand,
  mappings: [],
  mapKey,
  dispatch
}

mapKey('p', defineCommand('Toggle Play'))
mapKey('l', defineCommand('Toggle Loop'))
mapKey('u', defineCommand('Undo'))
mapKey('r', defineCommand('Redo'))
mapKey('m', defineCommand('Add Marker'))
mapKey('a', defineCommand('Append'))
mapKey('o', defineCommand('Overdub'))

function defineCommand (command) {
  module.exports.commands[command] = Symbol(command)
  return command
}

function mapKey (key, command) {
  if (!module.exports.commands[command]) {
    throw new Error(`can't map ${key} to unknown command ${command}`)
  } else {
    module.exports.mappings.push([key, module.exports.commands[command]])
  }
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
