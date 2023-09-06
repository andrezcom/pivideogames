export const GET_ALL = "GET_ALL";
export const ORDERED = "ORDERED";
export const FILER_CONTINENT = "FILER_CONTINENT";
export const FILER_ACTIVITY = "FILER_ACTIVITY";
export const FILTER_POPULATION = "FILTER_POPULATION";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
import axios from "axios";

export const getAll = (videoGames) => {
  return {
    type: GET_ALL,
    payload: videoGames,
  };
};

export const ordered = (ordered) => {
  return {
    type: ORDERED,
    payload: ordered,
  };
};

export const filterContinent = (continente) => {
  return {
    type: FILER_CONTINENT,
    payload: continente,
  };
};

export const filterAtivity = (activity) => {
  return {
    type: FILER_ACTIVITY,
    payload: activity,
  };
};

export const filterPopulation = (population) => {
  return {
    type: FILTER_POPULATION,
    payload: population,
  };
};

export const createActivity = (activityData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/activities", activityData)
      .then((response) => {
        console.log(response.data);
        // Despacha una acción para actualizar el estado si es necesario.
        dispatch(getAll(response.data));
      })
      .catch((error) => {
        console.error("Error creating activity:", error);
      });
  };
};




