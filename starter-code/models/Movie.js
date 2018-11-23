const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
},
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    versionKey: false
  })

module.exports = mongoose.model('Movie', movieSchema)