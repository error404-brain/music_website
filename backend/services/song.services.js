const db = require('../databases/Sequelize');
const { Song, Genre, AudioFile, ImageFile,Artist } = db;

exports.getAllSongs = async () => {
  try {
    return await Song.findAll({
      include: [
        {
          model: Artist,
          as: 'songArtist',  
        },
        {
          model: Genre,
          as: 'genre',
        },
        {
          model: AudioFile,
          as: 'audioFile',
        },
        {
          model: ImageFile,
          as: 'imageFile',
        },
      ],
    });
  } catch (error) {
    console.error('Error retrieving songs from service:', error);
    throw error;  // Đảm bảo lỗi được ném ra để controller có thể bắt và xử lý
  }
};


exports.getSongById = async (id) => {
  return await db.Song.findByPk(id);
};

exports.getSongByTitle = async (title) => {
  return await db.Song.findOne({ where: { title } });
};

exports.getSongByArtist = async (artist) => {
  return await db.Song.findOne({ where: { artist } });
};

exports.createSong = async (songData) => {
  return await db.Song.create(songData);
};

exports.updateSong = async (id, songData) => {
  const song = await db.Song.findByPk(id);
  if (!song) return null;
  return await song.update(songData);
};

exports.deleteSong = async (id) => {
  const song = await db.Song.findByPk(id);
  if (!song) return null;
  await song.destroy();
  return song;
};
