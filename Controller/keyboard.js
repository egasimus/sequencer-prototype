const Keyboard = module.exports = {
  emitter: new (require('eventemitter3'))(),
  modes: {},
  mode,
  dispatch
}

window.addEventListener('keydown', dispatch)

const model = require('../Model')

Keyboard.mode(model.keyboardMode = 'Navigation')
  .key('p', 'Toggle Play')
  .key('l', 'Toggle Loop')
  .key('u', 'Undo')
  .key('r', 'Redo')
  .key('m', 'Add Marker')
  .key('a', 'Append')
  .key('o', 'Overdub')
  .key('Escape', 'Set Keyboard Mode', 'Piano')

Keyboard.mode('Piano')
  .key('z', 'Play Note', 'C0')
  .key('x', 'Play Note', 'D0')
  .key('c', 'Play Note', 'E0')
  .key('v', 'Play Note', 'F0')
  .key('b', 'Play Note', 'G0')
  .key('n', 'Play Note', 'A0')
  .key('m', 'Play Note', 'B0')
  .key('a', 'Play Note', 'C#0')
  .key('d', 'Play Note', 'D#0')
  .key('g', 'Play Note', 'F#0')
  .key('h', 'Play Note', 'G#0')
  .key('j', 'Play Note', 'A#0')
  .key('Escape', 'Set Keyboard Mode', 'Navigation')

function mode (name) {
  Keyboard.modes[name] = Keyboard.modes[name] || []
  const mode = {
    key (code, command, ...args) {
      Keyboard.modes[name].push([code, command, args])
      return mode
    }
  }
  return mode
}

function dispatch (event) {
  const currentMode = Keyboard.modes[model.keyboardMode]
  if (!currentMode) return

  currentMode.some(([mapping, command, args]) => {
    if (mapping === event.key) {
      console.debug(mapping, command)
      require('../')
      require('./command').execute(command, event, ...args)
      return true
    }
  })
}
