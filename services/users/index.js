const userModal = require("../../schema/users/index");
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
    try {
      return userModal.insertMany(payload);
    } catch (error) {
      throw error;
    }
  },

  update_user: (payload) => {
    try {
      const { field, value, ...data } = payload;
      return userModal.findOneAndUpdate({ [field]: value }, data, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  },

  compare_code: async (password, code, email) => {
    if (code.length < 6) throw new Error("Code should be 6 digit");
    const isCompare = password == code;
    if (isCompare) {
      await userModal.findOneAndUpdate(
        { email: email },
        { isConfirmed: true },
        {
          new: true,
        }
      );
    }
    return password == code;
  },
};
