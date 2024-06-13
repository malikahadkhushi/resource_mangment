const userModal = require("../../schema/user/index");
module.exports.user_services = {
  get_user: ({ field, value }) => {
    try {
      return userModal.findOne({ [field]: value });
    } catch (error) {
      throw error;
    }
  },

  get_users: () => {
    try {
      return userModal.find();
    } catch (error) {
      throw error;
    }
  },

  delete_user: ({ field, value }) => {
    try {
      return userModal.deleteOne({ [field]: value });
    } catch (error) {
      throw error;
    }
  },

  create_user: (payload) => {
    console.log("Payload", payload);
    try {
      return userModal.insertMany(payload);
    } catch (error) {
      throw error;
    }
  },

  update_user: (payload) => {
    try {
      const { _id, ...data } = payload;
      return userModal.findByIdAndUpdate(_id, data, { new: true });
    } catch (error) {
      throw error;
    }
  },

  compare_code: (password, code) => {
    if (code.length < 6) throw new Error("Code should be 6 digit");
    return password === code;
  },
};
