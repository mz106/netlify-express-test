"use-strict";
const express = require("express");
// const serverless = require("serverless-http");
const cors = require("cors");
// const { Router } = require("express");

const port = process.env.PORT || 5001;

// const netlifyRouter = Router();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "App is runnning" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App is healthy" });
});

// app.use("/.netlify/functions/api", netlifyRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

// module.exports = app;
// module.exports.handler = serverless(app);
