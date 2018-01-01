let $ = module.exports = {
  tempo: 140,
  sample: {},
  sequence: {},
  track: []
}

$.sample[35] = './absolutely-insane-kikdrum.wav'

$.sequence['beat'] = {
  length: "0:1:0",
  events: {
    "0:0:0": 35
  }
}

$.sequence['offbeat'] = {
  length: "0:1:0",
  events: {
    "0:0:8": 46
  }
}

$.track[0] = [ $.sequence.beat ]

$.track[1] = [ $.sequence.offbeat ]

$.track[2] = [ $.sequence.offbeat ]
