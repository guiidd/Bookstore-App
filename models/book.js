var mongoose = require('mongoose');

// Genre Schema
var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true //validation
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema); //permits access from outside

// Get Books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

// Get Book By Id
module.exports.getBookByID = function(id, callback){
    Book.findById(id, callback);
}

// Add Books
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}

// Update Books
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Books
module.exports.deleteBook = function(id, callback){
    var query = {_id: id};
    Book.remove(query, callback);
}