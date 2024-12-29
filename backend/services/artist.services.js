const db = require('../databases/Sequelize');
const { Artist } = db;

exports.getAllArtists = async () => {
    return await Artist.findAll();
};

exports.getArtistById = async (id) => {
    return await Artist.findByPk(id);
};
