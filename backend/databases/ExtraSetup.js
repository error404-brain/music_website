module.exports = async (db) => {
    const { Genre, Song, AudioFile, ImageFile } = db;
  
    // Mối quan hệ giữa Genre và Song
    Genre.hasMany(Song, { foreignKey: 'genreId' });
    Song.belongsTo(Genre, { foreignKey: 'genreId', as: 'genre' }); 
  
    // Song.js
    Song.belongsTo(AudioFile, { foreignKey: 'audioFileId', as: 'audioFile' });
    AudioFile.belongsTo(Song, { foreignKey: 'songId' });
  
    // Mối quan hệ giữa Song và ImageFile
    Song.belongsTo(ImageFile, { foreignKey: 'imageFileId', as: 'imageFile' }); // alias 'imageFile'
    ImageFile.belongsTo(Song, { foreignKey: 'songId' });
  
    console.log('Các mối quan hệ đã được thiết lập!');
  };
  