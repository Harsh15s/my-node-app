const express = require('express');
const app = express();

// Simple route for testing
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

module.exports = app; // Export app for testing

