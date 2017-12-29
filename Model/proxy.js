module.exports = function model (initial) {

  const observers = new Map()

  const data = Object.assign({}, initial)

  return new Proxy(initial, { get, set })

  function get (target, property, receiver) {
    if (property === 'observe') return observe
    return target[property]
  }

  function observe (component) {
    component.on('mount', () =>
      observers.set(component,
        () => component.forceUpdate()))
    component.on('destroy', () =>
      observers.delete(component))
  }

  function set (target, property, value, receiver) {
    target[property] = value
    observers.forEach(observer => observer())
    return true
  }

}
