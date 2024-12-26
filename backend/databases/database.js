// model/database.js
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');

const sequelize = new Sequelize({
    host: dbConfig.host,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    dialect: dbConfig.dialect
  });

const db = {};
db.sequelize = sequelize;

require('./extra-setup.js')(sequelize);

module.exports = db;  
