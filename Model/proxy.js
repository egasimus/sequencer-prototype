module.exports = function model (initial) {

  const observers = new Map()

  const data = Object.assign({}, initial)

  return new Proxy(data, { get, set })

  function get (target, property, receiver) {
    switch (property) {
      case 'observe': return (key, cb) => observers.set(key, cb)
      case 'stopObserving': return (key) => observers.delete(key)
      default: return target[property]
    }
  }

  function set (target, property, value, receiver) {
    target[property] = value
    observers.forEach(observer => observer(target, property, value))
    return true
  }

}

// TODO
//if (false) {V
  //get (target, property) {
    //if (property === 'observe') {
      //return (cb) => {
        //let key = Symbol()
        //observers.set(key, cb)
        //return () => {
          //observers.delete(key)
        //}
      //}
    //} else return target[property]
  //}

  //component {
    //onCreate({ model }) {
      //this.on('destroy', model.observe(this.setState.bind(this)))
    //}
  //}
//}
