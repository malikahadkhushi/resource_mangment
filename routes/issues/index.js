const {
  create_issue,
  get_issues,
  get_issue,
  delete_issue,
  update_issue,
} = require("../../controlleres/issues");
const { token_verification } = require("../../middleware/user/index");

const express = require("express");
const issue_router = express.Router();

issue_router.post(
  "/create-issue",
  token_verification(["Super Admin", "Admin"]),
  create_issue
);
issue_router.get(
  "/get-issues",
  token_verification(["Super Admin", "Admin", "Member"]),
  get_issues
);
issue_router.get(
  "/get-issue/:_id",
  token_verification(["Super Admin", "Admin", "Member"]),
  get_issue
);
issue_router.put(
  "/update-issue",
  token_verification(["Super Admin", "Admin"]),
  update_issue
);
issue_router.delete(
  "/delete-issue/:_id",
  token_verification(["Super Admin", "Admin"]),
  delete_issue
);

module.exports = issue_router;
