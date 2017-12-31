module.exports = (Model) => {

  const key = Symbol()
  Model.observe(key, modelUpdated)

  const Tone = require('tone')

  const drums = new Tone.Players({
    35: '/absolutely-insane-kikdrum.wav',
  }).toMaster()

  const loop = new Tone.Part(
    playSample,
    Model.notes.map(convert)
  ).start(0)
  loop.loop = true

  const transport = Tone.Transport
  transport.bpm.value = Model.tempo

  const Engine = {
    drums,
    loop,
    transport,
    playSample
  }

  return Engine

  function modelUpdated (data, key, value) {
    if (key === 'playing') {
      value
        ? Engine.transport.start()
        : Engine.transport.stop()
    }
  }

  function playSample (time, note) {
    drums.get(note).start()
  }

  function convert (event) {
    return [toPPQ(event[0]), event[1]]
  }

  function toPPQ (bar) {
    return bar * Model.beats * Tone.Transport.PPQ + 'i'
  }

}
