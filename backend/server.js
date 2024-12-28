const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const db = require('./databases/Sequelize');
const uploadRoutes = require('./Routes/upload.route');  // Import routes mới

const PORT = 3000;
app.use(cors());
app.use(express.static('public'));

// Sử dụng routes
app.use('/api', uploadRoutes);
app.use('/uploadImage', express.static('uploadImage'));


const uploadImageDir = 'uploadImage/';
const uploadMusicDir = 'uploadMusic/';

if (!fs.existsSync(uploadImageDir)) {
  fs.mkdirSync(uploadImageDir, { recursive: true });
}

if (!fs.existsSync(uploadMusicDir)) {
  fs.mkdirSync(uploadMusicDir, { recursive: true });
}

app.listen(PORT, (error) => {
  if (!error) {
    console.log('Server đã chạy thành công trên cổng ' + PORT);
  } else {
    console.log('Lỗi khi khởi động server:', error);
  }
});

// Đồng bộ cơ sở dữ liệu
// db.sequelize.sync({ force: false }) 
//   .then(() => {
//     console.log('Cơ sở dữ liệu đã được đồng bộ hóa thành công!');
//   })
//   .catch((err) => {
//     console.error('Lỗi khi đồng bộ cơ sở dữ liệu:', err);
//   });
