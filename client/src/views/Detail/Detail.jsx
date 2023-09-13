import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Detail () {
  const [videoXID, setVideoXID] = useState({});
  const [descripcion, setDescripcion] = useState();
  
  const allvideoGames = useSelector(state => state.allvideoGames);
  const { id } = useParams();

  function isUUID(uuid) {
    let regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/g;
    return regex.test(uuid);
  } 

  useEffect(() => {
    const game = allvideoGames.find((game) => game.id.toString() === id.toString());
    setVideoXID(game);

    if (!isUUID(id)) {
      axios
        .get(`http://localhost:3001/games/${id}`)
        .then((response) => {
          setDescripcion(response.data.description);
        })
        .catch((error) => {});
    } else {
      setDescripcion(game?.descripcion);
    }
  }, [id]); // Add `id` as a dependency

  console.log(videoXID);
      
    return (
        <div>
        <p>{id}</p>
        <p>{videoXID.nombre}</p>
        <p>{videoXID.lanzamiento}</p>
        <p>{videoXID.rating}</p>
        <p>{descripcion}</p>
        {
          videoXID.genres && videoXID.genres.map((genre, index) => (
            <React.Fragment key={index}>
              <p>{genre}</p>
            </React.Fragment>
          ))
        }
        {
          videoXID.plataformas && videoXID.plataformas.map((plataforma, index) => (
            <React.Fragment key={index}>
              <p>{plataforma}</p>
            </React.Fragment>
          ))
        }
        <img src={videoXID.imagen} />
      </div>
    )
}

export default Detail