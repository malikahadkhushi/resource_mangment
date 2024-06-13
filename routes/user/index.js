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
} = require("../../controlleres/user/index");
const {
  verify_user_payload,
  check_user_existence,
  verify_login_payload,
  token_verification,
} = require("../../middleware/user/index");
const express = require("express");

const user_router = express.Router();

user_router.post(
  "/create_user",
  token_verification,
  verify_user_payload,
  check_user_existence,
  create_user
);

user_router.post("/get-user", get_user);
user_router.get("/get-users", get_users);
user_router.put("/update-user", update_user);
user_router.delete("/delete-user/:id", delete_user);
user_router.post("/login", verify_login_payload, login);
user_router.post("/send-code", send_code);
user_router.post("/compare-code", compare_code);
user_router.post("/reset_password", reset_password);

module.exports = user_router;
