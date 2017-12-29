module.exports = (Model) => {

  const Command = {
    commands: {},
    define,
    execute
  }

  define('Toggle Play', () => { Model.playing = !Model.playing })
  define('Toggle Loop', () => { Model.looping = !Model.looping })
  define('Undo')
  define('Redo')
  define('Add Marker', () => { Model.markers.push(Model.playhead) })
  define('Append', () => { execute('Show Piano') })
  define('Overdub', () => { execute('Show Piano') })
  define('Show Piano', () => { Model.showPiano = true })
  define('Hide Piano', () => { Model.showPiano = false })

  define('Set Keyboard Mode', (event, mode) => {
    Model.keyboardMode = mode
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
