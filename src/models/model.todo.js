const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  done: {
    type: Boolean,
    required: false,
    default: false,
  },
})

module.exports = mongoose.model('todo', todoSchema)
