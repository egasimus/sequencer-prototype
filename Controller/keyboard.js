const Keyboard = module.exports = {
  emitter: new (require('eventemitter3'))(),
  modes: {},
  mode,
  dispatch
}

window.addEventListener('keydown', dispatch)

const DEFAULT_MODE = 'navigation'
const model = require('../Model')
model.inputMode = DEFAULT_MODE

Keyboard.mode(DEFAULT_MODE)
  .key('p', 'Toggle Play')
  .key('l', 'Toggle Loop')
  .key('u', 'Undo')
  .key('r', 'Redo')
  .key('m', 'Add Marker')
  .key('a', 'Append')
  .key('o', 'Overdub')
  .key('Escape', 'Hide Piano')

function mode (name) {
  Keyboard.modes[name] = Keyboard.modes[name] || []
  const mode = {
    key (code, command) {
      Keyboard.modes[name].push([code, command])
      return mode
    }
  }
  return mode
}

function dispatch (event) {
  const currentMode = Keyboard.modes[model.inputMode]
  if (!currentMode) return

  currentMode.some(([mapping, command]) => {
    if (mapping === event.key) {
      console.debug(mapping, command)
      require('../')
      require('./command').execute(command, event)
      return true
    }
  })
}
