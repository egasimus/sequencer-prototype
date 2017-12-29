module.exports = (model) => {

  const Command = {
    commands: {},
    define,
    execute
  }

  define('Toggle Play', () => { model.playing = !model.playing })
  define('Toggle Loop', () => { model.looping = !model.looping })
  define('Undo')
  define('Redo')
  define('Add Marker', () => { model.markers.push(model.playhead) })
  define('Append', () => { execute('Show Piano') })
  define('Overdub', () => { execute('Show Piano') })
  define('Show Piano', () => { model.showPiano = true })
  define('Hide Piano', () => { model.showPiano = false })

  define('Set Keyboard Mode', (event, mode) => {
    model.keyboardMode = mode
    if (mode === 'Piano') {
      execute('Show Piano')
    } else {
      execute('Hide Piano')
    }
  })

  return Command

  function define (name, callback) {
    Command.commands[name] = callback
    return Command
  }

  function execute(cmd, ...args) {
    return Command.commands[cmd] && Command.commands[cmd](...args)
  }

}
