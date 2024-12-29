const fs = require('fs');
const path = require('path');
const songService = require('../services/song.services');

// Lấy tất cả bài hát
// Lấy tất cả bài hát
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await songService.getAllSongs();  // Đảm bảo rằng songService trả về đúng dữ liệu
    if (songs && songs.length > 0) {
      const songList = songs.map((song) => ({
        id: song.id,
        title: song.title,
        artist: song.songArtist ? song.songArtist.name : null,  // Dùng alias 'songArtist'
        genre: song.genre?.name || 'Unknown',
        audioFile: song.audioFile?.filePath || null,
        imageFile: song.imageFile?.filePath || null,
      }));
      res.json(songList);
    } else {
      res.status(404).json({ error: 'No songs found' });
    }
  } catch (error) {
    console.error('Error retrieving songs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Lấy bài hát theo ID
exports.getSongbyId = async (req, res) => {
  try {
    const song = await songService.getSongById(req.params.id);
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  } catch (error) {
    console.error('Error retrieving song:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Lấy bài hát theo title
exports.getSongbyTitle = async (req, res) => {
  try {
    const song = await songService.getSongByTitle(req.params.title);
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  } catch (error) {
    console.error('Error retrieving song:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Lấy bài hát theo artist
exports.getSongbyArtist = async (req, res) => {
  try {
    const song = await songService.getSongByArtist(req.params.artist);
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  } catch (error) {
    console.error('Error retrieving song:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Tạo bài hát mới
exports.createSong = async (req, res) => {
  try {
    const newSong = await songService.createSong(req.body);
    res.status(201).json(newSong);
  } catch (error) {
    console.error('Error creating song:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Cập nhật bài hát
exports.updateSong = async (req, res) => {
  try {
    const updatedSong = await songService.updateSong(req.params.id, req.body);
    if (updatedSong) {
      res.json(updatedSong);
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  } catch (error) {
    console.error('Error updating song:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Xóa bài hát
exports.deleteSong = async (req, res) => {
  try {
    const deletedSong = await songService.deleteSong(req.params.id);
    if (deletedSong) {
      res.json({ message: 'Song deleted successfully' });
    } else {
      res.status(404).json({ error: 'Song not found' });
    }
  } catch (error) {
    console.error('Error deleting song:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Lấy ảnh bài hát
exports.getImage = (req, res) => {
  const fileName = req.params.fileName;  // Lấy tên tệp ảnh từ URL
  const filePath = path.join(__dirname, '../uploadImage', fileName);  // Đường dẫn đến tệp ảnh

  // Kiểm tra xem ảnh có tồn tại không
  fs.exists(filePath, (exists) => {
    if (exists) {
      res.sendFile(filePath);  // Gửi tệp ảnh về cho client
    } else {
      res.status(404).json({ error: 'Image file not found' });  // Nếu không tìm thấy ảnh, trả lỗi 404
    }
  });
};

// Lấy nhạc bài hát
exports.getAudio = (req, res) => {
  const fileName = req.params.fileName;  // Lấy tên tệp nhạc từ URL
  const filePath = path.join(__dirname, '../uploadMusic', fileName);  // Đường dẫn đến tệp nhạc

  // Kiểm tra xem nhạc có tồn tại không
  fs.exists(filePath, (exists) => {
    if (exists) {
      res.sendFile(filePath);  // Gửi tệp nhạc về cho client
    } else {
      res.status(404).json({ error: 'Audio file not found' });  // Nếu không tìm thấy nhạc, trả lỗi 404
    }
  });
};

// Phát nhạc
exports.playMusic = (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, '../uploadMusic', fileName);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error playing music:', err);
      res.status(404).json({ error: 'Music file not found' });
    }
  });
};
