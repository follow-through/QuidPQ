const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemId: { type: String, required: true, unique: true },
  createdAt: { type:Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);
