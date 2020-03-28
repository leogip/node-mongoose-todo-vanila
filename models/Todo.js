const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  compleated: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Todo', schema)
