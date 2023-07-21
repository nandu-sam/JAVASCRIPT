// Requiring module
const mongoose = require("mongoose");
 
// Items modal Schema
const itemsSchema = new mongoose.Schema({
  name: String,
});
 
// Lists modal Schema
const listSchema = {
  name: String,
  items: [itemsSchema],
};
 
// Creating model objects
const Item = mongoose.model("Item", itemsSchema);
const List = mongoose.model("List", listSchema);
 
// Creating the default items array!
const item1 = new Item({
  name: "Eat Food.",
});
const item2 = new Item({
  name: "Drink Water.",
});
const item3 = new Item({
  name: "Keep coding!!!",
});
 
const defaultItems = [item1, item2, item3];
 
// Exporting our model objects and an array
module.exports = {
  Item,
  List,
  listSchema,
  defaultItems
};