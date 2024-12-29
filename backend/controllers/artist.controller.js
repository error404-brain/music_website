const fs = require('fs');
const path = require('path');
const artistService = require('../services/artist.services');
const uploadService = require('../services/upload.services');

const getAllArtists = async (req, res) => {
    try {
        const artist = await artistService.getAllArtists();
        const artistList = artist.map((artist) => ({
            id: artist.id,
            name: artist.name,
            imageFile: artist.imageFile?.filePath || null,
        }));
        res.json(artistList);
    } 
    catch (error) 
    {
        console.error('Error retrieving artists:', error);
        res.status(500).json({ error: 'Internal server error' });
    } 
};

const getArtistById = async (req, res) => {
    try {
        const artist = await artistService.getArtistById(req.params.id);
        if (artist) {
            res.json(artist);
        } else {
            res.status(404).json({ error: 'Artist not found' });
        }
    } catch (error) {
        console.error('Error retrieving artist:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};