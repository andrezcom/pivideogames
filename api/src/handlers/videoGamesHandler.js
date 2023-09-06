// handlers/rawgHandler.js

const videoGamesController = require('../controllers/videoGamesController');


async function getGamesApi(req, res) {
    try {
        const gamesApi = await videoGamesController.loadGames();
        res.json(gamesApi);
    } catch (error) {
        res.status(500).json({error: 'Error mientras se obtiene informacion de video games.'});
    }
}

// GET | /videogames/:idVideogame

async function getByID(req, res) {
    id = req.params.id
    try {
        const videoXID = await videoGamesController.searchID(id);
        res.json(videoXID);
    } catch (error) {
        res.status(500).json({error: 'Error al obti¿ener informacion de ID video game.'});
    }
}

async function getByQuery(req, res) {
    nombre = req.query.search
    try {
        const videoXName = await videoGamesController.searchQuery(nombre);
        res.json(videoXName);
    } catch (error) {
        res.status(500).json({error: 'Error al obti¿ener informacion de nombre de video game'});
    }
}


async function postVideoGames(req, res) {
    const {
        nombre,
        descripcion,
        plataformas,
        imagen,
        lanzamiento,
        rating,
        genres
    } = req.body;
    console.log("req.body");
    try {
        const newVideo = await videoGamesController.createVideoGame(nombre, descripcion, plataformas, imagen, lanzamiento, rating, genres);
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({error: 'Error al crear el videojuego'});
    }
}


module.exports = {
    getGamesApi,
    getByID,
    getByQuery,
    postVideoGames
}
