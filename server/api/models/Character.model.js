const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,

    },
    status: {
        type: String,
    },
    gender: String,
    image: String
})

const Character = mongoose.model('Character', schema)


exports.Character = Character
