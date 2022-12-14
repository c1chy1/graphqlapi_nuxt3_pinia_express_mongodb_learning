const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    }
})
const Author = mongoose.model('Author', AuthorSchema, 'authors')
module.exports = Author
