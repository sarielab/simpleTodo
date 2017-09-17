const mongoose = require('mongoose')
const Schema = mongoose.Schema
let taskSchema = new Schema({
  status: {
    type: String,
    default: 'Backlog'
  },
  title: {
    type: String,
    required: [true, '{PATH} must be filled']
  },
  descr: {
    type: String,
    required: [true, '{PATH} must be filled']
  },
  poin: {
    type: Number,
    min: [1, 'Too few {PATH}'],
    required: [true, '{PATH} must be filled']
  },
  PIC: {
    type: String,
    required: [true, '{PATH} must be filled']
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
})

let Task = mongoose.model('Task',taskSchema)

module.exports = Task