const { Videogame, Genre } = require('../db');


const videoGames = [
    {
        nombre: 'Game 1',
        descripcion: 'Description 1',
        plataformas: 'Platform 1',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 1',
        rating: 'Rating 1',
        genres: ["Action", "Adventure"]
    },
    {
        nombre: 'Game 2',
        descripcion: 'Description 2',
        plataformas: 'Platform 2',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 2',
        rating: 'Rating 2',
        genres: ["Adventure", "RPG"]
    },
    {
        nombre: 'Game 3',
        descripcion: 'Description 3',
        plataformas: 'Platform 3',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 3',
        rating: 'Rating 3',
        genres: ["RPG", "Shooter"]
    },
    {
        nombre: 'Game 4',
        descripcion: 'Description 4',
        plataformas: 'Platform 4',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 4',
        rating: 'Rating 4',
        genres: ["Shooter", "Puzzle"]
    }, {
        nombre: 'Game 5',
        descripcion: 'Description 5',
        plataformas: 'Platform 5',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 5',
        rating: 'Rating 5',
        genres: ["Puzzle", "Massively Multiplayer"]
    }, {
        nombre: 'Game 6',
        descripcion: 'Description 6',
        plataformas: 'Platform 6',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 6',
        rating: 'Rating 6',
        genres: ["Massively Multiplayer", "Indie"]
    }, {
        nombre: 'Game 7',
        descripcion: 'Description 7',
        plataformas: 'Platform 7',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 7',
        rating: 'Rating 7',
        genres: ["Indie", "Platformer"]
    }, {
        nombre: 'Game 8',
        descripcion: 'Description 8',
        plataformas: 'Platform 8',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 8',
        rating: 'Rating 8',
        genres: ["Platformer", "Action"]
    }, {
        nombre: 'Game 9',
        descripcion: 'Description 9',
        plataformas: 'Platform 9',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 9',
        rating: 'Rating 9',
        genres: ["Action", "Puzzle"]
    }, {
        nombre: 'Game 10',
        descripcion: 'Description 10',
        plataformas: 'Platform 10',
        imagen: 'https://assets.xboxservices.com/assets/c0/c0/c0c0ce2f-6d78-4414-99e6-63c51277ae8b.jpg?n=Xbox-360-Games_Sharing-Image_200x200.jpg',
        lanzamiento: 'Release 10',
        rating: 'Rating 10',
        genres: ["Shooter", "Indie"]
    },
]

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

        return { message: 'Videojuego creado exitosamente' };
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear el videojuego');
    }
}

async function videoGamesToBD(res) {

        for (const video of videoGames) {
            const newVideo = await createVideoGame(
                video.nombre,
                video.descripcion,
                video.plataformas,
                video.imagen,
                video.lanzamiento,
                video.rating,
                video.genres
            );
            console.log(newVideo);
        }

}

module.exports = {
    videoGamesToBD
}
