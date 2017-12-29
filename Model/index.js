module.exports = new Proxy({

  __observers__: new Map(),

  fps: 0,
  lastFrame: 0,

  notes: require('../Data/drums.js'),
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
  },

  get (target, property, receiver) {
    if (property === 'observe') return observe(target)
    return target[property]
  }

})

function observe (target) {
  return (component) => {
    component.on('mount', () =>
      target.__observers__.set(component,
        () => component.forceUpdate()))
    component.on('destroy', () =>
      target.__observers__.delete(component))
  }
}
