const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    authorId: {
        type: String
    }
})
const Book = mongoose.model('Book', BookSchema, 'books')
module.exports = Book
