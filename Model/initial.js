module.exports = {

  //GUI: {
    //FPS: 0,
    //Now: 0,
    //KeyboardMode: null
  //},

  fps: 0,
  now: 0,

  notes: require('../Data/drums.js'),
  // TODO project: require('../Data/project.lml'),
  project: require('../Data/project.js'),
  tempo: 140,
  beats: 4,

  playing: false,
  playhead: 0,
  looping: true,
  markers: [],

}
