const {
  create_workspace,
  get_workspaces,
  get_workspace,
  update_workspace,
  delete_workspace,
  get_user_workspaces,
} = require("../../controlleres/workspaces/index");

const { token_verification } = require("../../middleware/user/index");

const express = require("express");
const workspace_router = express.Router();

workspace_router.post(
  "/create-workspace",
  token_verification(["Super Admin", "Admin"]),
  create_workspace
);
workspace_router.post(
  "/get-user-workspaces",
  token_verification(["Super Admin", "Admin", "Member"]),
  get_user_workspaces
);

workspace_router.get(
  "/get-workspaces",
  token_verification(["Super Admin", "Admin", "Member"]),
  get_workspaces
);
workspace_router.get(
  "/get-workspace/:id",
  token_verification(["Super Admin", "Admin"]),
  get_workspace
);
workspace_router.put(
  "/update-workspace",
  token_verification(["Super Admin", "Admin", "Member"]),
  update_workspace
);
workspace_router.delete(
  "/delete-workspace/:id",
  token_verification(["Super Admin", "Admin", "Member"]),
  delete_workspace
);

module.exports = workspace_router;
