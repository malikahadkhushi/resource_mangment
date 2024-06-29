const { issues_services } = require("../../services/index");

module.exports.create_issue = async (req, res) => {
  try {
    const payload = req.body;
    const response = await issues_services.create_issue(payload);
    if (response) {
      res
        .status(201)
        .json({ messae: "Issue created successfully!", data: response });
    } else {
      res
        .status(201)
        .json({ messae: "Issue created unsuccessfully!", data: response });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", data: error.message });
  }
};

module.exports.get_issues = async (req, res) => {
  try {
    const Issues = await issues_services.get_all_issues();
    if (Issues.length) {
      res.status(200).json({ message: "successfull", data: Issues });
    } else {
      res.status(404).json({ message: "no Issues exist", data: Issues });
    }
  } catch (error) {
    console.log("Error", error.message);
    res
      .status(500)
      .json({ message: "something went wrong", data: error.message });
  }
};

module.exports.get_issue = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = await issues_services.get_issue({
      field: "_id",
      value: _id,
    });
    if (response) {
      res.status(200).json({ message: "successfull!", data: response });
    } else {
      res.status(200).json({ message: "no issue found!", data: response });
    }
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ message: "something went wrong !", data: error.message });
  }
};

module.exports.update_issue = async (req, res) => {
  try {
    const payload = req.body;
    const response = await issues_services.update_issue(payload);
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

module.exports.delete_issue = async (req, res) => {
  try {
    const { _id } = req.params;

    const response = await issues_services.delete_issue({
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
