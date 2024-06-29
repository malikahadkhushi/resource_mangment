const { issueModel } = require("../../schema/index");

module.exports.issues_services = {
  create_issue: (payload) => {
    try {
      return issueModel.insertMany(payload);
    } catch (error) {
      throw error;
    }
  },

  get_all_issues: () => {
    try {
      return issueModel.find({});
    } catch (error) {
      throw error;
    }
  },

  get_issue: ({ field, value }) => {
    try {
      return issueModel.find({ [field]: value });
    } catch (error) {
      throw error;
    }
  },

  delete_issue: ({ field, value }) => {
    try {
      return issueModel.deleteMany({ [field]: value });
    } catch (error) {
      throw error;
    }
  },

  update_issue: (payload) => {
    try {
      const { _id, ...data } = payload;

      return issueModel.findByIdAndUpdate(_id, data, { new: true });
    } catch (error) {
      throw error;
    }
  },
};
