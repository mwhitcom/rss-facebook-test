const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.renderCreate = (req, res) => {
  res.render('create');
}

exports.createPost = async (req, res) => {
  const post = await (new Post(req.body)).save();
  res.redirect('/');
}

exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.render('index', { posts });
}