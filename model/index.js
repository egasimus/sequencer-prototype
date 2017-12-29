module.exports = new Proxy({

  __observers__: [],

  fps: 0,
  lastFrame: 0,

  tempo: 140,
  beats: 4,

  playing: true,
  playhead: 0,
  looping: true,
  markers: [],

}, {

  set (target, property, value, receiver) {
    target[property] = value
    target.__observers__.forEach(observer=>observer())
    return true
  }

})
