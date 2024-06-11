const {
  create_workspace,
  get_workspaces,
  get_workspace,
  update_workspace,
  delete_workspace,
} = require("../../controlleres/workspace/index");

const { token_verification } = require("../../middleware/user/index");

const express = require("express");
const workspace_router = express.Router();

workspace_router.post(
  "/create-workspace",
  token_verification,
  create_workspace
);
workspace_router.get("/get-workspaces", token_verification, get_workspaces);
workspace_router.get("/get-workspace/:id", token_verification, get_workspace);
workspace_router.put("/update-workspace", token_verification, update_workspace);
workspace_router.delete(
  "/delete-workspace/:id",
  token_verification,
  delete_workspace
);

module.exports = workspace_router;
