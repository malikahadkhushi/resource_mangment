const { create_user, login } = require("../../controlleres/user/index");
const {
  verify_user_payload,
  check_user_existence,
  verify_login_payload,
} = require("../../middleware/user/index");
const express = require("express");

const user_router = express.Router();

user_router.post(
  "/create_user",
  verify_user_payload,
  check_user_existence,
  create_user
);

user_router.post("/login", verify_login_payload, login);

module.exports = user_router;
