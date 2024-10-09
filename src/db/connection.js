const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "mysql",
  dialectModule: require("mysql2"),
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate();

console.log("db is working");

module.exports = sequelize;
