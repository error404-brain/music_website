const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Song = sequelize.define('Song', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artistId: { 
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    audioFileId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    imageFileId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });

  return Song;
};
