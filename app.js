// app.js
// Import required modules

const express = require('express');
const mongoose = require('mongoose');
const itemController = require('./controllers/itemController');
const itemRoutes = require("./routes/ItemRoutes");

// Initialize Express app
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the public directory
app.use('/public', express.static('public'));

// Define routes for the application
app.use('/',itemRoutes);

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });