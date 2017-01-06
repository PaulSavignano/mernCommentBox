'use strict'

// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const Comment = require('./model/comments');

// Create instances
const app = express();
const router = express.Router();

// Set port
const port = process.env.API_PORT || 3001;
mongoose.connect(config.dbUri);

// Configure API to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// Routes
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!' });
});

router.route('/comments')
  .get(function(req, res) {
    Comment.find(function(err, comments) {
      if (err) {
        res.send(err);
      } else {
        res.json(comments);
      }
    });
  })
  .post(function(req, res) {
    const comment = new Comment();
    comment.author = req.body.author;
    comment.text = req.body.text;
    comment.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Comment successfully added!' });
      }
    });
  });

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
