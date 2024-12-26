const { Sequelize } = require('sequelize'); 
const dbConfig = require('../config/db.config'); 

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
