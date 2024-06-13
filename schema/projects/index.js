const mongoose = require("mongoose");

const project = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    work_space: String,
    start_date: Date,
    image: String,
    end_date: Date,
    create_at: Date,
    update_at: Date,
    status: String,
    members: Array,
    tags: Array,
  },
  {
    timestamps: true,
  }
);

const projectModel = mongoose.model("projects", project);

module.exports = projectModel;
