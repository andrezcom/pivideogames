const axios = require('axios');
const {Videogame, Genre} = require('../db');

const API_KEY = '340023d79eaf4537a530456e098c90bc';
const RAWG_API_URL = 'https://api.rawg.io/api/games';


async function videoGamesOfBD() {
    try {
        const videoGamesBD = await Videogame.findAll()
        return videoGamesBD;
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({message: 'Internal server error'});
    }
}


async function loadGames() {
    const pageSize = 40;
    let games = [];
    try {


        for (let page = 1; games.length < 100; page++) {
            const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=${pageSize}&page=${page}`);
            games = [
                ... games,
                ... response.data.results
            ];
        }
        const response = await axios.get(`${RAWG_API_URL}?key=${API_KEY}`);
        const videoGames = [];

        for (const gameInfo of games) {
            const platforms = [];
            const genres = [];
            for (let i = 0; i < gameInfo.platforms.length; i++) {
                platforms.push(gameInfo.platforms[i].platform.name);
            }
            for (let i = 0; i < gameInfo.genres.length; i++) {
                genres.push(gameInfo.genres[i].name);
            }
            videoGames.push({
                id: gameInfo.id,
                nombre: gameInfo.name,
                descripcion: '',
                plataformas: platforms,
                imagen: gameInfo.background_image,
                lanzamiento: gameInfo.released,
                rating: gameInfo.rating,
                genres: genres
            })
        }

        return videoGames;
    } catch (error) {
        throw new Error('Error al cargar los videojuegos.');
    }
}

async function searchID(id) {
    try {
        const response = await axios.get(`${RAWG_API_URL}/${id}?key=${API_KEY}`);
        console.log('params');
        return response.data;
    } catch (error) {
        throw new Error('Error al buscar el id del videojuego en la API.');
    }


}


async function searchQuery(nombre) {
    try {
        console.log('query: ', nombre);
        const response = await axios.get(`${RAWG_API_URL}?search=${nombre}&key=${API_KEY}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Error al buscar el nombre del videojuego en la API.');
    }


}

async function createVideoGame(nombre, descripcion, plataformas, imagen, lanzamiento, rating, genres) {
    console.log(nombre, descripcion, plataformas, imagen, lanzamiento, rating, genres);
    try {
        const newVideoGame = await Videogame.create({
            nombre,
            descripcion,
            plataformas,
            imagen,
            lanzamiento,
            rating,
            genres
        });

        const foundGenres = await Genre.findAll({
            where: {
                nombre: genres
            }
        });

        await newVideoGame.addGenres(foundGenres);

        return {message: 'Videojuego creado exitosamente'};
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear el videojuego');
    }
}


module.exports = {
    loadGames,
    searchID,
    searchQuery,
    createVideoGame
};