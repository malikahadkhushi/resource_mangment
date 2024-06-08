const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  designation: String,
});

const userModal = mongoose.model("users", userSchema);

module.exports = userModal;
