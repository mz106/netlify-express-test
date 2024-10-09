const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
