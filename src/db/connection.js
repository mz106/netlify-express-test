const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "mysql",
});

sequelize.authenticate();

console.log("db is working");

module.exports = sequelize;
