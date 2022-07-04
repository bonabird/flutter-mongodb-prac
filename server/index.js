// IMPORTS FROM PACKAGES
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin.js");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth.js");

// INITs
const PORT = 3000;
const app = express();
const DB = dotenv.MONGO_URI

//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Conected at port ${PORT}`);
});
