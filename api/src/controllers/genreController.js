const {Genre} = require('../db');

async function loadGenre() {
    try {
        const genres = await Genre.findAll()
        return genres;
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = {
    loadGenre
}
