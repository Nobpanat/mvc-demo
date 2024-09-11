// controllers/itemController.js
// Import the Item model
const Item = require('../models/item');

// Controller function to display all items
exports.getItems = async (req, res) => {
  try {
    // Fetch all items from the database
    const items = await Item.find({});
    // Render the index view with the list of items
    res.render('index', { items });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Controller function to add a new item
exports.addItem = async (req, res) => {
  try {
    // Create a new item with data from the request body
    const newItem = new Item({ name: req.body.name });
    // Save the new item to the database
    await newItem.save();
    // Redirect to the homepage after saving
    res.redirect('/');
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Controller function to delete an item
exports.deleteItem = async (req, res) => {
  try {
    // Delete an item by its ID
    await Item.findByIdAndDelete(req.params.id);
    // Redirect to the homepage after deletion
    res.redirect('/');
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).send('Internal Server Error');
  }
};
