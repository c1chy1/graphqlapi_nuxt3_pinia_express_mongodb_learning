const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  encoding: String,
}
)

schema.virtual('id').get(function () {
  return this._id
})


const File = mongoose.model('File', schema, 'files')

module.exports = File


