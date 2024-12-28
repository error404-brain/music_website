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
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
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
