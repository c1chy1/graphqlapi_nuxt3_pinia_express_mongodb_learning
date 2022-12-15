const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  encoding: String,
  photo: {
    type: String,
    trim: true,
  },
})

schema.virtual('id').get(function () {
  return this._id
})


const File = mongoose.model('File', schema, 'files')


exports.File = File

