const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Artist  = sequelize.define('Artist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageFileId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Artist;
};
