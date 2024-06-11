const { workspace_services } = require("../../services/index");
module.exports.create_workspace = async (req, res) => {
  try {
    const payload = req.body;
    const response = await workspace_services.create_workspace(payload);
    if (response) {
      res
        .status(201)
        .json({ message: "workspace created !", response: response });
    } else {
      res
        .status(409)
        .json({ message: "workspace not created !", response: response });
    }
  } catch (error) {
    console.log("ERror", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports.get_workspaces = async (req, res) => {
  try {
    const workspaces = await workspace_services.get_all_workspaces();
    if (workspaces.length) {
      res.status(200).json({ message: "successfull", data: workspaces });
    } else {
      res
        .status(404)
        .json({ message: "no workspaces exist", data: workspaces });
    }
  } catch (error) {
    console.log("Error", error.message);
    res
      .status(500)
      .json({ message: "some thing went wrong", data: workspaces });
  }
};

module.exports.get_workspace = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await workspace_services.get_workspace({
      field: "name",
      value: id,
    });
    if (response) {
      res.status(200).json({ message: "successfull !", data: response });
    } else {
      res.status(200).json({ message: "no workspace found !", data: response });
    }
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ message: "something went wrong !", data: error.message });
  }
};

module.exports.update_workspace = async (req, res) => {
  try {
    const payload = req.body;
    const response = await workspace_services.update_workspace(payload);
    console.log("response", response);
    if (response) {
      res.status(200).json({ message: "updated successfully", data: response });
    } else {
      res
        .status(200)
        .json({ message: "updated unsuccessfully", data: response });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !", data: error.message });
  }
};

module.exports.delete_workspace = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await workspace_services.delete_workspace({
      field: "_id",
      value: id,
    });
    if (response) {
      res.status(200).json({ message: "deleted successfully", data: response });
    } else {
      res
        .status(200)
        .json({ message: "deleted unsuccessfully", data: response });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong !", data: error.message });
  }
};
