const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Guide = sequelize.define("Guide", {
  continent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  airport: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attractions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Guide;
