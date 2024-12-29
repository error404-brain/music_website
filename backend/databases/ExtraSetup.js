module.exports = async (db) => {
    const { Genre, Song, AudioFile, ImageFile ,Artist} = db;
  
    // Mối quan hệ giữa Genre và Song
    Genre.hasMany(Song, { foreignKey: 'genreId' });
    Song.belongsTo(Genre, { foreignKey: 'genreId', as: 'genre' }); 
  
    // Song.js
    Song.belongsTo(AudioFile, { foreignKey: 'audioFileId', as: 'audioFile' });
    AudioFile.belongsTo(Song, { foreignKey: 'songId' });
  
    // Mối quan hệ giữa Song và ImageFile
    Song.belongsTo(ImageFile, { foreignKey: 'imageFileId', as: 'imageFile' }); // alias 'imageFile'
    ImageFile.belongsTo(Song, { foreignKey: 'songId' });

    Artist.hasMany(Song, { foreignKey: 'artist' });
    Song.belongsTo(Artist, { foreignKey: 'artistId', as: 'songArtist' });  



    Artist.belongsTo(ImageFile, { foreignKey: 'imageFileId', as: 'imageFile' });
    ImageFile.belongsTo(Artist, { foreignKey: 'artistId' });
  
    console.log('Các mối quan hệ đã được thiết lập!');
  };
  