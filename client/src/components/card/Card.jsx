import React from 'react';
import style from './Card.module.css'
import {useNavigate} from 'react-router-dom';

function Card({videoGame}) {
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate(`/detail/${id}`)
    }
    const {
        id,
        nombre,
        imagen,
        rating,
        genres
    } = videoGame;
    return (
        <div className={
                style.contenedor
            }
            onClick={handleClick}>
            <p>{id}</p>
            <img src={imagen}
                alt={nombre}/>
            <p>{nombre}</p>
            <p>{rating}</p>
            {
            genres.map((genre, index) => (
                <React.Fragment key={index}>
                    <p>{genre}</p>

                </React.Fragment>
            ))
        } </div>
    );

}

export default Card
