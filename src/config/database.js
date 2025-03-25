const { Sequelize } = require("sequelize");
const path = require('path');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, `../../${process.env.DB_NAME}.sqlite`),
  logging: false
});

module.exports = db;