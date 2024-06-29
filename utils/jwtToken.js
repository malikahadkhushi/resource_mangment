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
    console.log("Token received:", token);

    if (!token) throw new Error("You are not authorized");

    const decoded = jwt.decode(token);
    console.log("Decoded Token:", decoded);

    if (!decoded) return { isExpire: true, decoded: null };

    // Check if token is expired
    if (decoded.exp < Math.floor(Date.now() / 1000)) {
      console.log("Token is expired.");
      return { isExpire: true, decoded: null };
    }

    return { isExpire: false, decoded: decoded };

    // Verify the token
    // return new Promise((resolve, reject) => {
    //   jwt.verify(token, "MY_SECRET_KEY", (err, verifiedToken) => {
    //     if (err) {
    //       if (err.name === "TokenExpiredError") {
    //         console.log("Token is expired.");
    //         return resolve({ isExpire: true, decoded: null });
    //       } else if (err.name === "JsonWebTokenError") {
    //         console.log("Invalid token:", err.message);
    //         return resolve({ isExpire: true, decoded: null });
    //       } else {
    //         console.log("Error:", err.message);
    //         return resolve({ isExpire: true, decoded: null });
    //       }
    //     }
    //     resolve({ isExpire: false, decoded: verifiedToken });
    //   });
    // });
  } catch (error) {
    console.log("Error:", error.message);
    return { isExpire: true, decoded: null };
  }
};

module.exports.decoded_token = (token) => {
  try {
    if (!token) throw new Error("You are not authorized");
    const decoded = jwt?.decode(token, "MY_SECRET_KEY");
    return decoded;
  } catch (error) {
    throw error;
  }
};
