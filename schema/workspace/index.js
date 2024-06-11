const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  description: {
    type: String,
  },
  created_by: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const workspace = mongoose.model("workspaces", workspaceSchema);

module.exports = workspace;
