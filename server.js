'use strict'

// Dependencies
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Create instances
const app = express();
const router = express.Router();

// Set port
const port = process.env.API_PORT || 3001;

// Configure API to use body-parser
app.use(bodyParser.urlencode({ extended: true }));
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

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
