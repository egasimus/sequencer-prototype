module.exports = (Model, Command) => {

  const Keyboard = {
    emitter: new (require('eventemitter3'))(),
    modes: {},
    mode,
    dispatch
  }

  window.addEventListener('keydown', dispatch)

  Keyboard.mode(Model.keyboardMode = 'Navigation')
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
      key (code, cmd, ...args) {
        Keyboard.modes[name].push([code, cmd, args])
        return mode
      }
    }
    return mode
  }

  function dispatch (event) {
    const currentMode = Keyboard.modes[Model.keyboardMode]
    if (!currentMode) return

    currentMode.some(([mapping, cmd, args]) => {
      if (mapping === event.key) {
        console.debug(mapping, cmd)
        require('../')
        Command.execute(cmd, event, ...args)
        return true
      }
    })
  }

}
