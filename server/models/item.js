const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
  },
  itemDescription: {
      type: String
  },
  owner: {
      type: String,
      required: true
  }
});

const Item = mongoose.model("Item", itemSchema, "Items");

module.exports = Item;