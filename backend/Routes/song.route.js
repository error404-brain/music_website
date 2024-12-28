const express = require('express');
const songController = require('../controllers/song.controller');

const router = express.Router();

// Các route bài hát
router.get('/', songController.getAllSongs);  // Lấy tất cả bài hát
router.get('/:id', songController.getSongbyId);  // Lấy bài hát theo ID
router.get('/title/:title', songController.getSongbyTitle);  // Lấy bài hát theo title
router.get('/artist/:artist', songController.getSongbyArtist);  // Lấy bài hát theo artist
router.post('/', songController.createSong);  // Thêm bài hát mới
router.put('/:id', songController.updateSong);  // Cập nhật bài hát
router.delete('/:id', songController.deleteSong);  // Xóa bài hát
// Route lấy ảnh bài hát
router.get('/image/:fileName', songController.getImage);  // Lấy ảnh bài hát
// Route lấy nhạc bài hát
router.get('/audio/:fileName', songController.getAudio);  // Lấy nhạc bài hát
// Route phát nhạc
router.get('/play/:fileName', songController.playMusic);  // Phát nhạc

module.exports = router;
