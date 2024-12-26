const { Sequelize } = require('sequelize'); // Correct way to import Sequelize

const dbConfig = require('../config/db.config'); // Import database config

// Create Sequelize instance and connect to the database
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Kết nối tới cơ sở dữ liệu thành công!');
  })
  .catch((err) => {
    console.error('Lỗi khi kết nối tới cơ sở dữ liệu:', err);
  });

module.exports = sequelize; 
