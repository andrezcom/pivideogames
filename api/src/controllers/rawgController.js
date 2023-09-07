const axios = require('axios');
const {Genre} = require('../db');

const API_KEY = '340023d79eaf4537a530456e098c90bc';
const RAWG_API_URL = 'https://api.rawg.io/api/genres';
const pageSize = 40;


async function loadGames() {
    try {
        const response = await axios.get(`${RAWG_API_URL}?key=${API_KEY}&page_size=${pageSize}`);
        const gamesInfo = response.data.results;
        const genreNames = [];

        for (const gameInfo of gamesInfo) {
            console.log(gameInfo.name);
            genreNames.push(gameInfo.name);
        }

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
