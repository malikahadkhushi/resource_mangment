const bcrypt = require("bcrypt");
module.exports.generate_hash_password = (myPlaintextPassword) => {
  const saltRounds = 10;
  return bcrypt.hash(myPlaintextPassword, saltRounds);
};

module.exports.compare_password = ({ password, hash }) => {
  try {
    return bcrypt.compare(password, hash);
  } catch (error) {
    throw error;
  }
};
