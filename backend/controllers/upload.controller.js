const db = require('../databases/Sequelize');
const { ImageFile, AudioFile } = db;

exports.uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Không có ảnh nào được tải lên');
  }

  try {
    // Lưu thông tin ảnh vào cơ sở dữ liệu
    const image = await ImageFile.create({
      filePath: req.file.path,
      format: req.file.mimetype,
      size: req.file.size,
    });

    res.json({ message: 'Tải ảnh thành công!', file: req.file, image });
  } catch (error) {
    console.error('Lỗi khi lưu ảnh vào cơ sở dữ liệu:', error);
    res.status(500).send('Lỗi khi lưu ảnh vào cơ sở dữ liệu');
  }
};

exports.uploadMusic = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Không có nhạc nào được tải lên');
  }

  try {
    // Lưu thông tin file nhạc vào cơ sở dữ liệu
    const audio = await AudioFile.create({
      filePath: req.file.path,
      format: req.file.mimetype,
      size: req.file.size,
    });

    res.json({ message: 'Tải nhạc thành công!', file: req.file, audio });
  } catch (error) {
    console.error('Lỗi khi lưu nhạc vào cơ sở dữ liệu:', error);
    res.status(500).send('Lỗi khi lưu nhạc vào cơ sở dữ liệu');
  }
};
