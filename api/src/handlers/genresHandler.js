const genreController = require('../controllers/genreController');


async function getGenre(req, res) {
    try {
        const genres = await genreController.loadGenre();
        res.json(genres);
    } catch (error) {
        res.status(500).json({error: 'Error mientras se obtiene information de generos de video games.'});
    }
}

module.exports = {getGenre};