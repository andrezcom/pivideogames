import React from 'react';
import style from './Card.module.css'

function Card({videoGame}) {
    const {
        id,
        nombre,
        descripcion,
        plataformas,
        imagen,
        lanzamiento,
        rating,
        genres
    } = videoGame;
    return (
        <div className={style.contenedor}>
          <p>{id}</p>
          <img src={imagen} alt={nombre}/>
          <p>{nombre}</p>
          <p>{rating}</p>
          {genres.map((genre, index) => (
            <React.Fragment key={index}>
              <p>{genre}</p>

            </React.Fragment>
          ))}
        </div>
      );
      
}

export default Card
