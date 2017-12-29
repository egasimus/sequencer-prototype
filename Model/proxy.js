module.exports = function model (initial) {

  const observers = new Map()

  const data = Object.assign({}, initial)

  return new Proxy(data, { get, set })

  function get (target, property, receiver) {
    if (property === 'observe') return observe
    return target[property]
  }

  function observe (component) {
    component.on('mount', () =>
      observers.set(component, () => {
        if (!component.state) component.state = {}
        component.setState(data)
      }))
    component.on('destroy', () => observers.delete(component))
  }

  function set (target, property, value, receiver) {
    target[property] = value
    observers.forEach(observer => observer())
    return true
  }

}
