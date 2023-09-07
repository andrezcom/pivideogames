const axios = require('axios');
const {Videogame, Genre} = require('../db');

const API_KEY = '340023d79eaf4537a530456e098c90bc';
const RAWG_API_URL = 'https://api.rawg.io/api/games';


async function loadGames() {
    const pageSize = 40;
    let games = [];
    const videoGames = [];

    try {

        for (let page = 1; games.length < 100; page++) {
            const response = await axios.get(`${RAWG_API_URL}?key=${API_KEY}&page_size=${pageSize}&page=${page}`);
            games = [
                ... games,
                ... response.data.results
            ];
        }

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

        const videoGamesBD = await Videogame.findAll({
            include: [
                {
                    model: Genre,
                    attributes: ['nombre']
                }
            ]
        });

        for (const gameInfo of videoGamesBD) {
            const genres = [];

            for (let i = 0; i < gameInfo.genres.length; i++) {
                genres.push(gameInfo.genres[i].nombre);
            }
            videoGames.push({
                id: gameInfo.id,
                nombre: gameInfo.nombre,
                descripcion: '',
                imagen: gameInfo.imagen,
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
