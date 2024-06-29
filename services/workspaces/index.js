const { workspaceModel } = require("../../schema/index");

module.exports.workspace_services = {
  create_workspace: (payload) => {
    try {
      return workspaceModel.insertMany(payload);
    } catch (error) {
      throw error;
    }
  },

  get_all_workspaces: (id = undefined) => {
    try {
      if (id) {
        console.log("ID", id);
        return workspaceModel.find({
          members: id,
        });
      } else {
        return workspaceModel.find();
      }
    } catch (error) {
      throw error;
    }
  },

  get_workspace: ({ field, value }) => {
    try {
      console.log("{ field, value }", { field, value });
      return workspaceModel.findById({ _id: value });
    } catch (error) {
      throw error;
    }
  },

  delete_workspace: ({ field, value }) => {
    try {
      return workspaceModel.deleteOne({ [field]: value });
    } catch (error) {
      throw error;
    }
  },

  update_workspace: (payload) => {
    try {
      const { id, ...data } = payload;

      return workspaceModel.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw error;
    }
  },
};
