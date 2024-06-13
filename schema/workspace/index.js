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
  members: {
    type: Array,
  },
  tags: {
    type: Array,
  },
  states: {
    type: Array,
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

const workspaceModel = mongoose.model("workspaces", workspaceSchema);

module.exports = workspaceModel;
