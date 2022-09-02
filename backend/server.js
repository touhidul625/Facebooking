const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const user = require("./routes/user.js");
const { readdirSync } = require("fs");
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECT_URL).then(() => {
  console.log("DATABASE CONNECTED");
});

readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
