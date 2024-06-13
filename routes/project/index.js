const { create_project } = require("../../controlleres/project");

const express = require("express");

const project_router = express.Router();

project_router.post("/create-project", create_project);

module.exports = project_router;
