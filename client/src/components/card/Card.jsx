import style from './Card.module.css'

function Card({videoGame}) {
    const {
        id, nombre, descripcion, plataformas, imagen, lanzamiento, rating, genres
    } = videoGame;
    return (
        <div className={
            style.contenedor
        }>
            <p>{id}</p>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <img src={imagen}/>
            <p>{lanzamiento}</p>
            <p>{rating}</p>
        </div>
    )
}

export default Card
