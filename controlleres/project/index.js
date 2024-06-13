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
