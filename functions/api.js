"use-strict";
require("dotenv").config();
const serverless = require("serverless-http");

const { app, syncTables } = require("../src/server");

const port = process.env.PORT || 5001;

app.listen(port, () => {
  syncTables();
  console.log(`Local app listening on port ${port}!`);
});

module.exports.handler = serverless(app);
