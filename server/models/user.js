const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
  },
  password: {
      type: String
  }
});

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;