const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  messageContent: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
  },
  owner: {
      type: String,
      required: true
  }
});

const Message = mongoose.model("Message", messageSchema, "Messages");

module.exports = Message;