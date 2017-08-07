// Server Dependencies
const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://test:password@ds127993.mlab.com:27993/feed-to-facebook', {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});

require('./models/Post');
const postControllers = require('./controllers/postControllers');

// Express Instance
let app = express();
let router = express.Router;

// Set Port
const PORT = process.env.PORT || 7777;

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Grab public folder and Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("./public"));

// ------------------ Routes -------------------------------

// Main route
app.get('/', postControllers.getPosts);

// Create routes
app.get('/create', postControllers.renderCreate);

app.post('/create', postControllers.createPost);

app.get('/playlist/:name', postControllers.singlePost);

// Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});