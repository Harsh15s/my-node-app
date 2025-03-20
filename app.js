const express = require('express');
const app = express();

// Allow the port to be set via an environment variable, default to 3000
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

function add(a, b) {
  return a + b;
}

module.exports = { add };

