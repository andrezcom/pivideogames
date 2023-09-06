const axios = require('axios');
const {Genre} = require('../db');

const API_KEY = '340023d79eaf4537a530456e098c90bc';
const RAWG_API_URL = 'https://api.rawg.io/api/games';
const pageSize = 40;
const page = 1;

async function loadGames() {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=${pageSize}&page=${page}`);
        const gamesInfo = response.data.results;
        const genres = new Set();

        for (const gameInfo of gamesInfo) {
            for (let i = 0; i < gameInfo.genres.length; i++) {
                genres.add(gameInfo.genres[i].name);
            }
        }

        const genreNames = [... genres]; // Convierte el Set a un array

        const genrePromises = genreNames.map(async (nombre) => {
            await Genre.findOrCreate({where: {
                    nombre
                }, defaults: {
                    nombre
                }});

        });

        await Promise.all(genrePromises);

        return response.data;
    } catch (error) {
        throw new Error('Error al guardar los géneros en la BD.');
    }
}

module.exports = {
    loadGames
};
