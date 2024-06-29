const { project_services } = require("../../services/index");

module.exports.create_project = async (req, res) => {
  try {
    const payload = req.body;
    const response = await project_services.create(payload);
    if (response) {
      res
        .status(201)
        .json({ messae: "Project created successfully!", data: response });
    } else {
      res
        .status(201)
        .json({ messae: "Project created unsuccessfully!", data: response });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", data: error.message });
  }
};

module.exports.get_projects = async (req, res) => {
  try {
    const Projects = await project_services.get_all_projects();
    if (Projects.length) {
      res.status(200).json({ message: "successfull", data: Projects });
    } else {
      res.status(404).json({ message: "no Projects exist", data: Projects });
    }
  } catch (error) {
    console.log("Error", error.message);
    res
      .status(500)
      .json({ message: "something went wrong", data: error.message });
  }
};

module.exports.get_project = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = await project_services.get_project({
      field: "_id",
      value: _id,
    });
    if (response) {
      res.status(200).json({ message: "successfull!", data: response });
    } else {
      res.status(200).json({ message: "no project found!", data: response });
    }
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ message: "something went wrong !", data: error.message });
  }
};

module.exports.update_project = async (req, res) => {
  try {
    const payload = req.body;
    const response = await project_services.update_project(payload);
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

module.exports.delete_project = async (req, res) => {
  try {
    const { _id } = req.params;

    const response = await project_services.delete_project({
      field: "_id",
      value: _id,
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
