const express = require('express');
const path = require('path');

const app = express();

// serve the frontend folder exactly as before
app.use(express.static(path.join(__dirname, 'frontend')));

// original API route
app.get('/api/hello', (req, res) => {
  res.send('Hello World');
});

module.exports = app;   