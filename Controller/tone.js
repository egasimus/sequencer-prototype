module.exports = (Model) => {

  const key = Symbol()
  Model.observe(key, modelUpdated)

  const Tone = require('tone')

  const drums = new Tone.Players({
    35: '/Data/Bass-Drum-1.wav',
    40: '/Data/Ensoniq-ESQ-1-Snare.wav',
    44: '/Data/Ensoniq-SQ-1-Closed-Hi-Hat.wav',
    46: '/Data/Ensoniq-SQ-1-Open-Hi-Hat.wav',
    49: '/Data/Crash-Cymbal-1.wav'
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
