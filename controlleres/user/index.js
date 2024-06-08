const { user_services } = require("../../services/index");
const {
  generate_hash_password,
  compare_password,
} = require("../../utils/hashPassword");
const { jwt_token_generator } = require("../../utils/jwtToken");

module.exports.create_user = async (req, res) => {
  try {
    const payload = req.body;
    const { password } = payload;
    const hash = await generate_hash_password(password);
    payload.password = hash;
    const response = await user_services.create_user(payload);
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

    const user = await user_services.login({ email });
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
      res.status(401).json({ message: "login unsucsessfull!" });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "some thing went wrong!" });
  }
};
