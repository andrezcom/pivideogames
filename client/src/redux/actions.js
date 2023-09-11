import axios from "axios";

export const GET_ALL = "GET_ALL";
export const ORDERED = "ORDERED";
export const ORDERED_RATING = "ORDERED_RATING";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_RATING = "FILTER_RATING";
export const CREATE_VIDEO_GAME = "CREATE_VIDEO_GAME";

export const getAll = (videoGames) => {
    return {type: GET_ALL, payload: videoGames};
};

export const getGenres = (genres) => {
    return {type: GET_GENRES, payload: genres};
};
export const ordered = (ordered) => {
    return {type: ORDERED, payload: ordered};
};

export const orderedRating = (ordered) => {
  return {type: ORDERED_RATING, payload: ordered};
};

export const filterGenre = (genre) => {
    return {type: FILTER_GENRE, payload: genre};
};

export const filterRating = (rating) => {
  rating = parseFloat(rating);
  console.log(typeof(rating));
    return {type: FILTER_RATING, payload: rating};
};

export const createVideoGame = (videoGame) => {
    return(dispatch) => {
        axios.post("http://localhost:3001/games", videoGame).then((response) => {
            console.log(response.data);
            // Despacha una acción para actualizar el estado si es necesario.
            dispatch(getAll(response.data));
        }).catch((error) => {
            console.error("Error creating activity:", error);
        });
    };
};
