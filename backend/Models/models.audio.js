// models/audioFile.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const AudioFile = sequelize.define('AudioFile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    format: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
  });

  return AudioFile;
};
