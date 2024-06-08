const userModal = require("../../schema/user/index");
module.exports.user_services = {
  login: ({ email }) => {
    try {
      return userModal.findOne({ email: email });
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

  get_user_by_email: (email) => {
    try {
      return userModal.findOne({ email: email });
    } catch (error) {
      throw error;
    }
  },

  get_user_by_username: (username) => {
    try {
      return userModal.findOne({ username: username });
    } catch (error) {
      throw error;
    }
  },

  get_user_by_id: (id) => {
    try {
      return userModal.findById({ _id: id });
    } catch (error) {
      throw error;
    }
  },
};
