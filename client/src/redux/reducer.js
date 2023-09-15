const initialState = {
    videoGames: [],
    allvideoGames: [],
    videoGamesFiltrados: [],
    generos: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL":
            return {videoGames: action.payload, allvideoGames: action.payload};

        case "ORDERED":
            {
                const sortedvideoGames = [...state.allvideoGames].sort((a, b) => {
                    if (action.payload) {
                        return a.nombre.localeCompare(b.nombre);
                    } else {
                        return b.nombre.localeCompare(a.nombre);
                    }
                });
                return {
                    ...state,
                    allvideoGames: sortedvideoGames
                };
            }
        case "ORDERED_RATING":
            {
                const sortedvideoGames = [...state.allvideoGames].sort((a, b) => {
                    if (action.payload) {
                        return b.rating - a.rating;
                    } else {
                        return a.rating - b.rating;
                    }
                });
                return {
                    ...state,
                    allvideoGames: sortedvideoGames
                };
            }

        case "FILTER_GENRE":
            if (action.payload === "All") {
                return {
                    ...state,
                    allvideoGames: [...state.videoGames],
                    videoGamesFiltrados: [...state.videoGames]

                };
            } else {
                return {
                    ...state,
                    allvideoGames: state.videoGames.filter((videoGame) => videoGame.genres.includes(action.payload)),
                    videoGamesFiltrados: state.videoGames.filter((videoGame) => videoGame.genres.includes(action.payload))
                };
            }
        case "FILTER_RATING":
            return {
                ...state,
                allvideoGames: state.videoGamesFiltrados.filter((game) => game.rating >= action.payload)
            };

        case "SEARCH_VIDEO":
            return {
                ...state,
                allvideoGames: state.videoGames.filter((videoGame) => videoGame.nombre.toUpperCase().includes(action.payload))
            }

        case "FILTER_ORIGIN":
            function isUUID(uuid) {
                let regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/g;
                return regex.test(uuid);
            }

            if (action.payload === "All") {
                return {
                    ...state,
                    allvideoGames: [...state.videoGames],
                    videoGamesFiltrados: [...state.videoGames]

                };
            }
            if (action.payload === "BD") {

                return {
                    ...state,
                    allvideoGames: state.videoGames.filter((videoGame) => isUUID(videoGame.id))
                };

            }
            if (action.payload === "API") {

                return {
                    ...state,
                    allvideoGames: state.videoGames.filter((videoGame) => ! isUUID(videoGame.id))
                };
            }

        default:
            return {
                ...state
            };
    }
};

export default rootReducer;
