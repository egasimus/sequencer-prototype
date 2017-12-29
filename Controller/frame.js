const SECOND = 1000
const MINUTE = 60000

module.exports = (Model) => {

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

    let since = t - Model.lastFrame
    let advance = Model.playing ? (Model.tempo / MINUTE / Model.beats) : 0
    let playhead = (Model.playhead + since * advance) % 1

    Object.assign(Model, {
      lastFrame: t,
      fps: SECOND / since,
      playhead
    })

    id = requestAnimationFrame(tick)

  }

}
