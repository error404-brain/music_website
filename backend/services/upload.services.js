const db = require('../databases/Sequelize');
const { ImageFile, AudioFile } = db;

/**
 * Lưu thông tin file ảnh vào cơ sở dữ liệu
 * @param {Object} file - Đối tượng file từ multer
 * @returns {Object} - Đối tượng ảnh đã lưu trong cơ sở dữ liệu
 */
exports.saveImage = async (file) => {
  try {
    const image = await ImageFile.create({
      filePath: file.path,
      format: file.mimetype,
      size: file.size,
    });
    return image;
  } catch (error) {
    console.error('Lỗi khi lưu ảnh vào cơ sở dữ liệu:', error);
    throw new Error('Lỗi khi lưu ảnh vào cơ sở dữ liệu');
  }
};

/**
 * Lưu thông tin file nhạc vào cơ sở dữ liệu
 * @param {Object} file - Đối tượng file từ multer
 * @returns {Object} - Đối tượng nhạc đã lưu trong cơ sở dữ liệu
 */
exports.saveMusic = async (file) => {
  try {
    const audio = await AudioFile.create({
      filePath: file.path,
      format: file.mimetype,
      size: file.size,
    });
    return audio;
  } catch (error) {
    console.error('Lỗi khi lưu nhạc vào cơ sở dữ liệu:', error);
    throw new Error('Lỗi khi lưu nhạc vào cơ sở dữ liệu');
  }
};
