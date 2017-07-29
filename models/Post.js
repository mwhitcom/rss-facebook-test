const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const postSchema =  new mongoose.Schema({
  playlist_name: {
    type: String,
    trim: true
  },
  genre: {
    type: String,
    trim: true
  },
  spotify_url: {
    type: String,
    trim: true
  },
  itunes_url: {
    type: String,
    trim: true
  },
  create: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', postSchema);