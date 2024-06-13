const { projectModel } = require("../../schema/index");

module.exports.project_services = {
  create_project: (payload) => {
    try {
      return projectModel.insertMany(payload);
    } catch (error) {
      throw error;
    }
  },

  get_all_projects: () => {
    try {
      return projectModel.find({});
    } catch (error) {
      throw error;
    }
  },

  get_project: ({ field, value }) => {
    try {
      return projectModel.find({ [field]: value });
    } catch (error) {
      throw error;
    }
  },

  delete_project: ({ field, value }) => {
    try {
      return projectModel.deleteMany({ [field]: value });
    } catch (error) {
      throw error;
    }
  },

  update_project: (payload) => {
    try {
      const { _id, ...data } = payload;

      return projectModel.findByIdAndUpdate(_id, data, { new: true });
    } catch (error) {
      throw error;
    }
  },
};
