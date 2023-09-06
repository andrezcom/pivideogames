const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
	getGamesApi,
	getByQuery,
	getByID,
	postVideoGames,
} = require("../handlers/videoGamesHandler");

const {
	getGenre,
} = require("../handlers/genresHandler");

// const {
// 	crearActivity,
// 	getAllActivity,
// } = require("../handlers/HandlerActivities");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/games", getGamesApi);
router.get("/games/:id", getByID);
router.get("/videogames", getByQuery);
router.post("/games", postVideoGames);
router.get("/genres", getGenre);
module.exports = router;
