const express = require('express');
const cors = require('cors');
const fs = require('fs');
const db = require('./databases/Sequelize');
const uploadRoutes = require('./Routes/upload.route');
const songRoutes = require('./Routes/song.route'); 


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 
app.use(express.static('public'));


app.use('/api', uploadRoutes);
app.use('/api/songs', songRoutes); 
app.use('/uploadImage', express.static('uploadImage'));
app.use('/uploadMusic', express.static('uploadMusic'));

// Tạo thư mục upload nếu chưa tồn tại
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
// db.sequelize.sync({ force: true })
// .then(() => {
//   console.log('Cơ sở dữ liệu đã được đồng bộ hóa lại hoàn toàn!');
// })
// .catch((err) => {
//   console.error('Lỗi khi đồng bộ hóa cơ sở dữ liệu:', err);
// });
