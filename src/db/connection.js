const { Sequelize } = require("sequelize");

const database = process.env.DATABASE || "";
const username = process.env.USERNAME || "";
const password = process.env.PASSWORD || "";

const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "",
  dialectModule: require("pg"),
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true, // Adjust if you're using SSL
    },
  },
});

sequelize.authenticate();

console.log("db is working");

module.exports = sequelize;
