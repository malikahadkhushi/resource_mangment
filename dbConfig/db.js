const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_DB_URL;
mongoose
  .connect(url)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
