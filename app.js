const express = require('express'); // Import Express framework
const path = require('path'); // Import path module for working with file paths
const app = express(); // Create an Express application
const port = 3000; // Define the port number for the server

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Load book data from JSON file
const MINIPROJECT1 = require('./data/books.json');

// API endpoint to return book data as JSON
app.get('/api/books', (req, res) => {
  res.json(MINIPROJECT1);
});

// Serve the main HTML file when visiting the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});