const mongoose = require('mongoose')

const types = mongoose.SchemaTypes

const FileSchema = new mongoose.Schema({
  filename: types.String,
  mimetype: types.String,
  encoding: types.String
})

FileSchema.virtual('id').get(function () {
  return this._id
})


const File = mongoose.model('File', FileSchema, 'files')
module.exports = File
