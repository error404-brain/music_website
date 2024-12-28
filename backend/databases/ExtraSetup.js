module.exports = async (db) => {
    const { Genre, Song, AudioFile, ImageFile } = db;
  
    // Mối quan hệ giữa Genre và Song
    Genre.hasMany(Song, { foreignKey: 'genreId' });
    Song.belongsTo(Genre, { foreignKey: 'genreId' });
  
    // Mối quan hệ giữa Song và AudioFile
    Song.hasOne(AudioFile, { foreignKey: 'songId' });
    AudioFile.belongsTo(Song, { foreignKey: 'songId' });
  
    // Mối quan hệ giữa Song và ImageFile
    Song.hasOne(ImageFile, { foreignKey: 'songId' });
    ImageFile.belongsTo(Song, { foreignKey: 'songId' });
  
    console.log('Các mối quan hệ đã được thiết lập!');
  };
  