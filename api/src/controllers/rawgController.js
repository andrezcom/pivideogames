const axios = require('axios');
const {Genre} = require('../db');

const API_KEY = 'f04b5929b4f34da5a2e297a9d2768c1e';
const RAWG_API_URL = 'https://api.rawg.io/api/genres';
const pageSize = 40;


async function loadGenres() {
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
    loadGenres
};
