const {
  create_user,
  login,
  get_user,
  get_users,
  update_user,
  delete_user,
  send_code,
  compare_code,
  reset_password,
} = require("../../controlleres/users/index");
const {
  verify_user_payload,
  check_user_existence,
  verify_login_payload,
  token_verification,
} = require("../../middleware/user/index");
const express = require("express");

const user_router = express.Router();

user_router.post(
  "/create-user",
  token_verification(["Super Admin", "Admin"]),
  verify_user_payload,
  check_user_existence,
  create_user
);

user_router.post("/get-user", token_verification(["Super Admin", "Admin", "Member"]), get_user);
user_router.get("/get-users", token_verification(["Super Admin", "Admin", "Member"]), get_users);
user_router.put(
  "/update-user",
  token_verification(["Super Admin", "Admin"]),
  update_user
);
user_router.delete("/delete-user/:id", token_verification(["Super Admin", "Admin"]), delete_user);
user_router.post("/login", verify_login_payload, login);
user_router.post("/send-code", send_code);
user_router.post("/compare-code", compare_code);
user_router.post("/reset-password", reset_password);

module.exports = user_router;
