const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

// Khởi tạo kết nối Sequelize
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


const db = {};
db.Sequelize = Sequelize; 
db.sequelize = sequelize; 

db.Genre = require('../Models/models.Genre')(sequelize);
db.Song = require('../Models/models.Song')(sequelize);
db.AudioFile = require('../Models/models.audio')(sequelize);  
db.ImageFile = require('../Models/models.imageFile')(sequelize);  
// Thiết lập các mối quan hệ
require('./ExtraSetup')(db);

module.exports = db;
