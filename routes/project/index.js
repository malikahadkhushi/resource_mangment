const {
  create_project,
  get_projects,
  get_project,
  delete_project,
  update_project,
} = require("../../controlleres/project");
const { token_verification } = require("../../middleware/user/index");

const express = require("express");
const project_router = express.Router();

project_router.post("/create-project", create_project);
project_router.get("/get-projects", token_verification, get_projects);
project_router.get("/get-project/:_id", token_verification, get_project);
project_router.put("/update-project", token_verification, update_project);
project_router.delete(
  "/delete-project/:_id",
  token_verification,
  delete_project
);

module.exports = project_router;
