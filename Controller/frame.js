const SECOND = 1000
const MINUTE = 60000

module.exports = (model) => {

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

    let since = t - model.lastFrame
    let advance = model.playing ? (model.tempo / MINUTE / model.beats) : 0
    let playhead = (model.playhead + since * advance) % 1

    Object.assign(model, {
      lastFrame: t,
      fps: SECOND / since,
      playhead
    })

    id = requestAnimationFrame(tick)

  }

}
