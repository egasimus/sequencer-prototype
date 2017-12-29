const MINUTE = 60000

module.exports = function (model) {

  requestAnimationFrame(animate)

  function animate (t) {
    let since = t - model.lastFrame
    let advance = model.playing ? (model.tempo / MINUTE / model.beats) : 0
    let playhead = (model.playhead + since * advance) % 1

    Object.assign(model, {
      lastFrame: t,
      fps: 1000 / since,
      playhead
    })

    requestAnimationFrame(animate)
  }

}
