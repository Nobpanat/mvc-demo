// models/item.js
// Import mongoose for database interaction
const mongoose = require('mongoose');

// Define the schema for an item
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

// Export the model based on the schema
module.exports = mongoose.model('Item', itemSchema);
