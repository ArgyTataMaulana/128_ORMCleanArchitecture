const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelPath = path.join(__dirname, 'komik.js');
const KomikModel = require(modelPath);
db.Komik = KomikModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
