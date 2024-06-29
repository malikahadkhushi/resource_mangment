const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  project: String,
  workspace: String,
  title: String,
  description: String,
  priority: String,
  start_date: Date,
  target_date: Date,
  completed_at: Date,
  created_by: String,
  updated_by: String,
  state: String,
  assignees: Array,
  tag: Array,
});

const issueModel = mongoose.model("issues", issueSchema);

module.exports = issueModel;
