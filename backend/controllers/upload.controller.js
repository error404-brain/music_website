const uploadService = require('../services/upload.services');

exports.uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Không có ảnh nào được tải lên');
  }

  try {
    const image = await uploadService.saveImage(req.file);
    res.json({ message: 'Tải ảnh thành công!', file: req.file, image });
  } catch (error) {
    console.error('Lỗi khi lưu ảnh vào cơ sở dữ liệu:', error);
    res.status(500).send(error.message);
  }
};

exports.uploadMusic = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Không có nhạc nào được tải lên');
  }

  try {
    const audio = await uploadService.saveMusic(req.file);
    res.json({ message: 'Tải nhạc thành công!', file: req.file, audio });
  } catch (error) {
    console.error('Lỗi khi lưu nhạc vào cơ sở dữ liệu:', error);
    res.status(500).send(error.message);
  }
};
