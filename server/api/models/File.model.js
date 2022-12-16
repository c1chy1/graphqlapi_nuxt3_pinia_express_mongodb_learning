const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  encoding: String,

  photoUrl: {
    type: String,
    trim: true,
  },
}
)

schema.virtual('id').get(function () {
  return this._id
})


const File = mongoose.model('File', schema, 'files')

module.exports = File


