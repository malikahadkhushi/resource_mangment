const { projectModel } = require("../../schema/index");

module.exports.project_service = {
  create: (payload) => {
    try {
      return projectModel.insertMany(payload);
    } catch (error) {
      throw error;
    }
  },
};
