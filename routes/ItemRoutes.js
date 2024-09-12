const express = require("express");
const route = express.Router();
const itemController = require("../controllers/itemController");


route.get('/', itemController.getItems);            // Route to display all items
route.post('/add-item', itemController.addItem);    // Route to add a new item
route.post('/delete-item/:id', itemController.deleteItem); // Route to delete an item


module.exports = route;