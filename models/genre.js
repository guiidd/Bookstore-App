var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
   name:{
       type: String,
       required: true //validation
   },
   create_date:{
       type: Date,
       default: Date.now
   }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema); //permits access from outside

// Get Genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

// Add Genres
module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}

// Update Genres
module.exports.updateGenre = function(id, genre, options, callback){
    var query = {_id: id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete Genres
module.exports.deleteGenre = function(id, callback){
    var query = {_id: id};
    Genre.remove(query, callback);
}