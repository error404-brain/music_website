const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');  
const db = require('./databases/database.js');


const PORT = 3000;
app.use(cors());
app.use(express.static('public'));

const uploadImageDir = 'uploadImage/';
const uploadMusicDir = 'uploadMusic/';

if (!fs.existsSync(uploadImageDir)) {
    fs.mkdirSync(uploadImageDir, { recursive: true });
}

if (!fs.existsSync(uploadMusicDir)) {
    fs.mkdirSync(uploadMusicDir, { recursive: true });
}


const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadImageDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const musicStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadMusicDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploadImage = multer({ storage: imageStorage });
const uploadMusic = multer({ storage: musicStorage });


app.post('/uploadImage', uploadImage.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Không có ảnh nào được tải lên');
    }
    console.log('Ảnh đã tải lên:', req.file);
    res.json({ message: 'Tải ảnh thành công!', file: req.file });
});


app.post('/uploadMusic', uploadMusic.single('music'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Không có nhạc nào được tải lên');
    }
    console.log('Nhạc đã tải lên:', req.file);
    res.json({ message: 'Tải nhạc thành công!', file: req.file });
});


app.listen(PORT, (error) => {
    if (!error) {
        console.log('Server đã chạy thành công trên cổng ' + PORT);
    } else {
        console.log('Lỗi khi khởi động server:', error);
    }
});

db.sequelize.sync({ force: false })
  .then(() => {
    console.log('Đồng bộ cơ sở dữ liệu thành công.');
  })
  .catch((err) => {
    console.error('Lỗi khi đồng bộ cơ sở dữ liệu:', err);
  });