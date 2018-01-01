const SECOND = 1000
const MINUTE = 60000

module.exports = (Model, Audio) => {

  let id

  return {

    start () {
      if (!id) id = requestAnimationFrame(tick)
      return this
    },

    stop () {
      if (id) id = cancelAnimationFrame(id)
      return this
    }

  }

  function tick (t) {

    let since = t - Model.now
    //let advance = Model.playing ? (Model.tempo / MINUTE / Model.beats) : 0
    //let playhead = (Model.playhead + since * advance) % 1

    Object.assign(Model, {
      now: t,
      fps: SECOND / since,
      playhead: (
        Audio.transport.ticks / Audio.transport.PPQ / Audio.transport.timeSignature
      ) % 1
    })

    id = requestAnimationFrame(tick)

  }

}
