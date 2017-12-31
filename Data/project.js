let $ = module.exports

$.tempo = 140

$.sample = {
  35: './absolutely-insane-kikdrum.wav'
}

$.sequence = {
  beat: {
    length: "0:1:0",
    events: {
      "0:0:0": [35]
    }
  },
  offbeat: {
    length: "0:1:0",
    events: {
      "0:0:8": [46]
    }
  }
}

$.tracks = {
  kick: {
    sequence: [ $.sequence.beat ]
  },
  hat: {
    sequence: [ $.sequence.offbeat ]
  }
}
