const { user_router, workspace_router } = require("./routes/index");
const express = require("express");
const cors = require("cors");
require("./dbConfig/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", user_router);
app.use("/", workspace_router);

app.listen(process.env.PORT, () => {
  try {
    console.log(`server is running on ${process.env.PORT}`);
  } catch (error) {
    console.error(error);
  }
});
