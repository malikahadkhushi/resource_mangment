const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.jwt_token_generator = (user) => {
  const { password, ...payload } = user;

  const token = jwt.sign(
    {
      data: payload,
    },
    "MY_SERCRET_KEY",
    { expiresIn: "1d" }
  );
  payload.token = token;
  return token;
};

module.exports.verify_token = (token) => {
  try {
    console.log("token", token);
    const decoded = jwt.decode(token, "MY_SECRET_KEY");
    console.log("Decoded Token:", decoded);

    // Check if token is expired
    if (decoded.exp < Math.floor(Date.now() / 1000)) {
      console.log("Token is expired.");
      return true;
    }

    // Add more checks if needed...

    // If all checks pass, return true
    return false;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("Token is expired.");
    } else if (error.name === "JsonWebTokenError") {
      console.log("Invalid token:", error.message);
    } else {
      console.log("Error:", error.message);
    }
    return false;
  }
};
