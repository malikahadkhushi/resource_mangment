const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.jwt_token_generator = (user) => {
  const { password, ...payload } = user;

  const token = jwt.sign(
    {
      data: payload,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  payload.token = token;
  return token;
};

module.exports.verify_token = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (error) {
    throw error;
  }
};
