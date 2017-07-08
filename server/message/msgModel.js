const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const msgSchema = new Schema({
  msgId: { type: String, required: true, unique: true },
  createdAt: { type:Date, default: Date.now },
  msgContent: { type: String, required: true }
});

module.exports = mongoose.model('Item', itemSchema);