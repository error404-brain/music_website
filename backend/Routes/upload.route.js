const express = require('express');
const multer = require('multer');
const path = require('path');
const uploadController = require('../controllers/upload.controller');

const router = express.Router();

// Cấu hình lưu trữ ảnh và nhạc
const uploadImage = multer({ storage: multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploadImage/'),
  filename: (req, file, cb) => cb(null, file.originalname),
}) });

const uploadMusic = multer({ storage: multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploadMusic/'),
  filename: (req, file, cb) => cb(null, file.originalname),
}) });

// Các route để upload ảnh và nhạc
router.post('/uploadImage', uploadImage.single('image'), uploadController.uploadImage);
router.post('/uploadMusic', uploadMusic.single('music'), uploadController.uploadMusic);

module.exports = router;
