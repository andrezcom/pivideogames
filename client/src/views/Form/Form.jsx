import React, {useState, useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {createVideoGame} from "../../redux/actions";
import styles from './Form.module.css';

const Formulario = () => {
    const dispatch = useDispatch();

    const [genres, setGenres] = useState([]);
    const plataformas = [
        'Xbox',
        'PS1',
        'PS2',
        'Nintendo',
        'PC'
    ];

    useEffect(() => {
        axios.get('http://localhost:3001/genres').then((response1) => {
            setGenres(response1.data);
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);



    const [data, setData] = useState({
        nombre: "",
        descripcion: "",
        plataformas: [],
        imagen: "",
        lanzamiento: "",
        rating: "",
        genres: []
    });

    const [errors, setErrors] = useState({
        nombre: "",
        descripcion: "",
        plataformas: "",
        imagen: "",
        lanzamiento: "",
        rating: "",
        genres: ""
    });

    const validar = (data) => {
        let errors = {};

        if (data.nombre === "") {
            errors.nombre = "Ingese nombre menor a 15 caracteres";
        }

        if (data.descripcion.length < 10) {
            errors.descripcion = "Descripción demasiado corta";
        }

        if (data.plataformas.length === 0) {
            errors.plataformas = "Mínimo 1 plataforma";
        }

        if (!/https?:\/\/.*\.(?:png|jpg|gif|bmp|svg|jpeg)/i.test(data.imagen)) {
            errors.imagen = "Escribe la URL de la imagen correctamente";
        }

        if (data.lanzamiento === "") {
            errors.lanzamiento = "Escribe un dato de lanzamiento";
        }

        if (data.rating < 0 || data.rating > 5) {
            errors.rating = "Rating debe estar entre 0 y 5";
        }

        if (data.genres.length === 0) {
            errors.genres = "Mínimo 1 género";
        }

        return errors;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

        if (name === "genres" || name === "plataformas") {
            setData((prevData) => {
                const array = [...prevData[name]]; // Create a copy of the array from the state

                if (array.includes(value)) { // If the value is already in the array, remove it
                    const index = array.indexOf(value);
                    array.splice(index, 1);
                } else { // If the value is not in the array, add it
                    array.push(value);
                }

                return {
                    ...prevData,
                    [name]: array, // Update the array in the state
                };
            });
        } else {
            setData({
                ...data,
                [name]: value
            });
        }

        const newErrors = validar({
            ...data,
            [name]: value
        });

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const formErrors = validar(data);
        setErrors(formErrors);

        
        if (Object.values(formErrors).every((error) => error === "")) { 
            dispatch(createVideoGame(data));
        }
    };


    return (
        <div className={
            styles.contenedorPrincipal
        }>
            <div className={
                styles.formulario
            }>
                <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text"
                        className={
                            styles.input
                        }
                        name="nombre"
                        onChange={handleChange}/> {
                    errors.nombre ? <p className={
                        styles.error
                    }>
                        {
                        errors.nombre
                    }</p> : null
                }

                    <label>Descripción:</label>
                    <input type="text"
                        className={
                            styles.input
                        }
                        name="descripcion"
                        onChange={handleChange}/> {
                    errors.descripcion ? <p className={
                        styles.error
                    }>
                        {
                        errors.descripcion
                    }</p> : null
                }

                    <label>Plataformas:</label>
                    <select name="plataformas"
                        onChange={handleChange}>
                        {
                        plataformas.map((plataforma, index) => (
                            <option key={index}
                                value={plataforma}>
                                {plataforma} </option>
                        ))
                    } </select>

                    <label>Imagen:</label>
                    <input type="text"
                        className={
                            styles.input
                        }
                        name="imagen"
                        onChange={handleChange}/> {
                    errors.imagen ? <p className={
                        styles.error
                    }>
                        {
                        errors.imagen
                    }</p> : null
                }

                    <label>Lanzamiento:</label>
                    <input type="text"
                        className={
                            styles.input
                        }
                        name="lanzamiento"
                        onChange={handleChange}/> {
                    errors.lanzamiento ? <p className={
                        styles.error
                    }>
                        {
                        errors.lanzamiento
                    }</p> : null
                }

                    <label>Rating:</label>
                    <input type="text"
                        className={
                            styles.input
                        }
                        name="rating"
                        onChange={handleChange}/> {
                    errors.rating ? <p className={
                        styles.error
                    }>
                        {
                        errors.rating
                    }</p> : null
                }

                    <label>Géneros:</label>
                    <select name="genres"
                        onChange={handleChange}>
                        {
                        genres.map((genre) => (
                            <option key={
                                    genre.id
                                }
                                value={
                                    genre.nombre
                            }>
                                {
                                genre.nombre
                            } </option>
                        ))
                    } </select>

                    <button type="submit"
                        className={
                            styles.button
                        }
                        disabled={
                            Object.values(errors).some((error) => error !== "")
                    }>
                        Crear Video
                    </button>
                </form>
            </div>

            <div className={
                styles.contenedorListas
            }>

                <div className={
                    styles.listaPlatforms
                }>
                    <h4>plataformas</h4>
                    {
                    data.plataformas.map((plataforma, index) => (
                        <div key={index}>
                            {plataforma}</div>
                    ))
                } </div>
                <h4>Generos</h4>
                <div className={
                    styles.listaGenres
                }>
                    {
                    data.genres.map((genre, index) => (
                        <div key={index}>
                            {genre}</div>
                    ))
                } </div>

            </div>
        </div>
    );
};

export default Formulario;
