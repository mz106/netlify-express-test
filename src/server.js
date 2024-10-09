"use-strict";
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const { Router } = require("express");

const netlifyRouter = Router();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "App is runnning" });
});

app.use("/.netlify/functions/api", netlifyRouter);

module.exports = app;
module.exports.handler = serverless(app);
