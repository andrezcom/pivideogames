// const initialState = {
//     videoGames: [],
//     allvideoGames: [],
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "GET_ALL":
//         return {
//           videoGames: action.payload,
//           allvideoGames: action.payload,
//         };
//       case "ORDERED": {
//         const sortedvideoGames = [...state.videoGames].sort((a, b) => {
//           if (action.payload) {
//             return a.nombre.localeCompare(b.nombre);
//           } else {
//             return b.nombre.localeCompare(a.nombre);
//           }
//         });
//         return { ...state, videoGames: sortedvideoGames };
//       }
  
//     //   case "FILER_GENRE":
//     //     if (action.payload === "All") {
//     //       return {
//     //         ...state,
//     //         videoGames: [...state.allvideoGames],
//     //       };
//     //     } else {
//     //       return {
//     //         ...state,
//     //         videoGames: state.allvideoGames.filter(
//     //           (genre) => country.continente === action.payload
//     //         ),
//     //       };
//     //     }
  
//         case "CREATE_VIDEO_GAME":
//           // No realizas cambios en el estado directamente en el reducer.
//           // Realiza las solicitudes y actualizaciones en las acciones y efectos.
//           return state;
  
//       default:
//         return { ...state };
//     }
//   };
  
//   export default rootReducer;
  