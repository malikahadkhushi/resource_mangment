const { user_services } = require("../../services/index");
const {
  generate_hash_password,
  compare_password,
} = require("../../utils/hashPassword");
const { jwt_token_generator } = require("../../utils/jwtToken");
const {
  notify_created_user,
  send_password_reset_email,
} = require("../../emailTemplates/emailTemplates");
const generateSixDigitCode = require("../../utils/generateSixDigitCode");

module.exports.create_user = async (req, res) => {
  try {
    const payload = req.body;
    const { password } = payload;
    const hash = await generate_hash_password(password);
    payload.password = hash;
    const response = await user_services.create_user(payload);
    if (response) {
      notify_created_user(payload.email);
    }
    res
      .status(200)
      .json({ message: "user created successfull", data: response });
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    const user = await user_services.get_user({ email });
    if (user?.password) {
      const response = await compare_password({
        password,
        hash: user.password,
      });
      const token = jwt_token_generator(user);
      if (response) {
        res.status(200).json({
          message: "login sucsessfull!",
          data: token,
        });
      } else {
        res.status(401).json({ message: "incorrect password", data: response });
      }
    } else {
      res.status(401).json({ message: "incorrect email" });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "some thing went wrong!" });
  }
};

module.exports.send_code = async (req, res) => {
  try {
    const { email } = req.body;
    const code = generateSixDigitCode();
    const payload = {
      email: email,
      password: code,
    };
    const response = await user_services.update_user(payload);
    if (response) {
      send_password_reset_email(email, code);
      res.status(200).json({ message: "code set to password" });
    } else {
      res.status(204).json({ message: "code is not set to password" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "something went wrong!" });
  }
};

module.exports.compare_code = async (req, res) => {
  try {
    const { email, code } = req.body;
    const response = await user_services.get_user_by_email(email);
    const isCompare = user_services.compare_code(response.password, code);
    console.log("isCompare", isCompare);

    if (isCompare) {
      res.status(200).json({ message: "code matched" });
    } else {
      res.status(401).json({ message: "code not matched" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.reset_password = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashPassword = await generate_hash_password(password);
    const payload = {
      email: email,
      password: hashPassword,
    };
    const response = await user_services.update_user(payload);
    if (response) {
      res.status(200).json({ message: "reset password successfully!" });
    } else {
      res.status(401).json({ message: "reset password is unsuccessfull" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "something went wrong!" });
  }
};
