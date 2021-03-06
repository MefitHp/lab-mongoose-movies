const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
},
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    versionKey: false
  })

module.exports = mongoose.model('Celebrity', celebritySchema)