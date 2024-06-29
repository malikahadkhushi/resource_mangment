const { verify_token, decoded_token } = require("../../utils/jwtToken");
const { user_services } = require("../../services/index");

const verify_user_payload = (req, res, next) => {
  try {
    const { username, email, password, role, designation } = req.body;

    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;

    // Check if any of the fields are empty or contain only whitespace
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !role.trim() ||
      !designation.trim()
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if email matches the regex
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Check if password matches the regex
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Password must contain at least one uppercase letter, one special character, and be at least 8 characters long",
      });
    }

    // If all checks pass, move to the next middleware
    next();
  } catch (error) {
    next(error);
  }
};

const verify_login_payload = (req, res, next) => {
  try {
    const { email = "", password = "" } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;

    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if email matches the regex
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Check if password matches the regex
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error: "Invalid Password format",
      });
    }
    next();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

const check_user_existence = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const getUserByUsername = await user_services.get_user({
      field: "username",
      value: username,
    });
    const getUserByEmail = await user_services.get_user({
      field: "email",
      value: email,
    });

    if (getUserByUsername && getUserByEmail) {
      res.status(409).json({ error: "username and email already in used!" });
    } else if (getUserByUsername) {
      res.status(409).json({ error: "username already in used!" });
    } else if (getUserByEmail) {
      res.status(409).json({ error: "email already in used!" });
    } else {
      next();
    }
  } catch (error) {
    throw error;
  }
};

const token_verification = (roles) => {
  return async (req, res, next) => {
    try {
      const accessToken = req.headers["authorization"];
      console.log("aceesstoken", accessToken);
      if (!accessToken) {
        return res
          .status(403)
          .json({ message: "You are not authorized, please login!" });
      }

      // const bearer = accessToken.split(" ");
      // if (bearer.length !== 2 || bearer[0] !== "Bearer") {
      //   return res.status(400).json({ message: "Invalid token format" });
      // }

      // const bearerToken = bearer[1];
      // console.log("bearerToken", bearerToken);

      const { isExpire, decoded } = verify_token(accessToken);

      if (isExpire) {
        return res
          .status(401)
          .json({ message: "You are not authorized to perform this action" });
      }

      const { data } = decoded;
      const hasRequiredRole = roles.some((role) => data._doc.role === role);

      if (!hasRequiredRole) {
        return res
          .status(403)
          .json({ message: "Forbidden: You do not have the permissions" });
      }

      next();
    } catch (error) {
      console.log("Error:", error.message);
      res.status(500).json({ message: "Something went wrong!" });
    }
  };
};
module.exports = {
  verify_user_payload,
  check_user_existence,
  verify_login_payload,
  token_verification,
};
