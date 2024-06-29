const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  isConfirmed: Boolean,
  email: String,
  password: String,
  role: String,
  designation: String,
  selectedWorkspace: String,
});

const userModal = mongoose.model("users", userSchema);

module.exports = userModal;
