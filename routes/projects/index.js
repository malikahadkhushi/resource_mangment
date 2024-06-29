const {
  create_project,
  get_projects,
  get_project,
  delete_project,
  update_project,
} = require("../../controlleres/projects");
const { token_verification } = require("../../middleware/user/index");

const express = require("express");
const project_router = express.Router();

project_router.post(
  "/create-project",
  token_verification(["Super Admin", "Admin"]),
  create_project
);
project_router.get(
  "/get-projects",
  token_verification(["Super Admin", "Admin", "Member"]),
  get_projects
);
project_router.get(
  "/get-project/:_id",
  token_verification(["Super Admin", "Admin", , "Member"]),
  get_project
);
project_router.put(
  "/update-project",
  token_verification(["Super Admin", "Admin"]),
  update_project
);
project_router.delete(
  "/delete-project/:_id",
  token_verification(["Super Admin", "Admin"]),
  delete_project
);

module.exports = project_router;
