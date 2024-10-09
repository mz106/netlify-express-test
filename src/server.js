"use-strict";
const express = require("express");
// const serverless = require("serverless-http");
const cors = require("cors");
const { Router } = require("express");

// const port = process.env.PORT || 5002;

const netlifyRouter = Router();
const userRouter = require("./users/routes");
const User = require("./users/model");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/.netlify/functions/api/", (req, res) => {
  res.status(200).json({ message: "App is runnning" });
});

app.get("/.netlify/functions/api/health", (req, res) => {
  res.status(200).json({ message: "App is healthy" });
});

// app.use("/.netlify/functions/api", netlifyRouter);
app.use("/.netlify/functions/api", userRouter);

// app.listen(port, () => {
//   console.log(`server running on port ${port}`);
// });

const syncTables = () => {
  User.sync();
};

syncTables();

module.exports = app;
// module.exports.handler = serverless(app);
