const { Sequelize } = require("sequelize");

const database = process.env.DATABASE || "";
const username = process.env.USERNAME || "";
const password = process.env.PASSWORD || "";

const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "mysql",
  dialectModule: require("mysql2"),
});

sequelize.authenticate();

console.log("db is working");

module.exports = sequelize;
