const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: process.env.DB_STORAGE,
    logging: false,
});

module.exports = sequelize;
