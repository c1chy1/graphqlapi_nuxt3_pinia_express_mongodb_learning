const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    filename: String,
    path: String
})

const Photo = mongoose.model('Photo', schema)


exports.Photo = Photo
