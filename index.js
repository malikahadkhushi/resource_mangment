const {
  user_router,
  workspace_router,
  project_router,
  issue_router,
} = require("./routes/index");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./dbConfig/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/", user_router);
app.use("/", workspace_router);
app.use("/", project_router);
app.use("/", issue_router);

app.listen(process.env.PORT, () => {
  try {
    console.log(`server is running on ${process.env.PORT}`);
  } catch (error) {
    console.error(error);
  }
});
