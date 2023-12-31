import axios from "axios";

export const GET_ALL = "GET_ALL";
export const ORDERED = "ORDERED";
export const ORDERED_RATING = "ORDERED_RATING";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_RATING = "FILTER_RATING";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const CREATE_VIDEO_GAME = "CREATE_VIDEO_GAME";
export const SEARCH_VIDEO = "SEARCH_VIDEO";
export const PAGE_CHANGE = "PAGE_CHANGE";


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

export const searchVideo = (nombre) => {
    return {type: SEARCH_VIDEO, payload: nombre.toUpperCase()};
};

export const origin = (origin) => {
    return {type: FILTER_ORIGIN, payload: origin};
};


export const pageChange = (paginas) => {
    return {type: PAGE_CHANGE, payload: paginas};
};

export const createVideoGame = (videoGame) => {
  return async function(dispatch){
      try {
          console.log(videoGame)
          await axios.post("http://localhost:3001/games/", videoGame)
          alert("Videogame creado con exito.")
      } catch (error) {
          alert(error.response.data.error)
      }
  }
}