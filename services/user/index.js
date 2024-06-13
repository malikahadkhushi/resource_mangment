const { userModal } = require("../../schema/index");
module.exports.user_services = {
  get_user: ({ field, value }) => {
    try {
      return userModal.findOne({ [field]: value });
    } catch (error) {
      throw error;
    }
  },

  create_user: (payload) => {
    try {
      return userModal.insertMany(payload);
    } catch (error) {
      throw error;
    }
  },

  update_user: (payload) => {
    try {
      const { id, ...data } = payload;
      return userModal.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw error;
    }
  },

  compare_code: (password, code) => {
    if (code.length < 6) throw new Error("Code should be 6 digit");
    return password === code;
  },
};
