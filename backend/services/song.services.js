const db = require('../databases/Sequelize');
const { Song, Genre, AudioFile, ImageFile } = db;

exports.getAllSongs = async () => {
    return await Song.findAll({
      include: [
        {
          model: Genre,
          as: 'genre',
          attributes: ['name'], 
        },
        {
          model: AudioFile,
          as: 'audioFile',
          attributes: ['filePath'], 
        },
        {
          model: ImageFile,
          as: 'imageFile',
          attributes: ['filePath'], 
        },
      ],
    });
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
