const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const { createMarkup } = require('./markupController');

// Code for feed creation
const Feed = require('feed');
const fs = require('fs');
const rssPathJSON = `${__dirname}/../public/rss/rssfeed.json`;
const rssPathXML = `${__dirname}/../public/rss/rssfeed.xml`;

const feed = new Feed({
	title: 'Playlist Palace',
	description: 'RSS Feed for newly created playlists on Playlist Palace',
	image: 'Image URL',
	link: 'http://playlistpalace.com',
	updated: new Date(),
	feedLinks: {
		json: 'http://playlistpalace.com/rss/rssfeed.json',
		xml: 'http://playlistpalace.com/rss/rssfeed.xml'
	}
});

function addToFeed(post, markup) {
	feed.addItem({
			title: post.playlist_name,
			image: post.image,
			content: markup
	});

  const rssDocJSON = feed.json1();
  const rssDocXML = feed.rss2();

	fs.writeFile(rssPathJSON, rssDocJSON, (err) => {
		if(err) { return console.log(err); }
	});

	fs.writeFile(rssPathXML, rssDocXML, (err) => {
		if(err) { return console.log(err); }
	});
}
// End code for feed creation


exports.renderCreate = (req, res) => {
  res.render('create');
}

exports.createPost = async (req, res) => {
	const post = await (new Post(req.body)).save();
	const fullPost = await Post.findOne({ playlist_name: req.body.playlist_name});
	const markup = await createMarkup(fullPost);
	const feedPost = await addToFeed(fullpost, markup);
  res.redirect('/');
}

exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.render('index', { posts }, addToFeed(posts));
}

exports.singlePost = async (req, res) => {
	const post = await Post.findOne({ _id: req.params.id });
	res.render('single-playlist', { post });
}
