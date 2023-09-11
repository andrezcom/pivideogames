import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createVideoGame } from "../../redux/actions";

const Formulario = () => {
    const generos = useSelector(state => state.generos)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGeneros())
        },[])

    const [state, setState] = useState({
        nombre: '',
        descripcion: '',
        plataformas: [],
        imagen: '',
        lanzamiento: '',
        rating: 0.0,
        genres: []
    });

    const [errors, setErrors] = useState({
        nombre: '',
        descripcion: '',
        plataformas: [],
        imagen: '',
        lanzamiento: '',
        rating: 0.0,
        genres: []
    });

    const validar = (data) => {
        let errors = {};

        if (data.nombre === '') {
            console.log(data);
            errors.nombre = "Nombre requerido";
        }

        if (data.descripcion.length < 10) {
            errors.descripcion = "descripcion demasiado corta";
        }

        if (data.plataformas === 0) {
            errors.plataformas = "dificultad demasiado corta";
        }

        if (data.lanzamiento === "Ninguna") {
            errors.lanzamiento = "dificultad demasiado corta";
        }

        if (data.rating.length < 1) {
            errors.rating = "dificultad demasiado corta";
        }
        return errors;
    };

    // const disableFunction = () => {
    //     let disabledAux = true;
    //     for (let err in error) {
    //         if (error[err] === "")
    //             disabledAux = false;
    //          else {
    //             disabledAux = true;
    //             break;
    //         }
    //     }
    //     return disabledAux;
    // }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.nombre && !errors.dificultad && !errors.descripcion && !errors.plataformas && !errors.rating) {
            console.log("ok");
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre:
                </label>
                <input type="text" name="nombre"
                    onChange={handleChange}/> {
                errors.nombre ? <p>{
                    errors.nombre
                }</p> : null
            }


                <label htmlFor="">descripcion:
                </label>
                <input type="text" name="descripcion"
                    onChange={handleChange}/> {
                errors.descripcion ? <p>{
                    errors.descripcion
                }</p> : null
            }

                <label>plataformas:
                </label>


                <label htmlFor="">imagen:
                </label>
                <input type="text" name="imagen"
                    onChange={handleChange}/> {
                errors.imagen ? <p>{
                    errors.imagen
                }</p> : null
            }
                <label htmlFor="">lanzamiento:
                </label>
                <input type="text" name="lanzamiento"
                    onChange={handleChange}/> {
                errors.lanzamiento ? <p>{
                    errors.lanzamiento
                }</p> : null
            }
                <label htmlFor="">rating:
                </label>
                <input type="text" name="rating"
                    onChange={handleChange}/> {
                errors.rating ? <p>{
                    errors.rating
                }</p> : null
            }
                <label htmlFor="">genres:
                </label>
                <input type="text" name="genres"
                    onChange={handleChange}/> {
                errors.genres ? <p>{
                    errors.genres
                }</p> : null
            }

                {/* <button onClick={handlerAsociar}>Asociar Paises</button> */}
                <button type="submit">Crear Actividad</button>
            </form>
        </div>
    );
};

export default Formulario;
// const handlerAsociar = (e) => {
//     setState({
//         ...state,
//         countiesID: [
//             ...state.countiesID,
//             e.target.value
//         ]
//     });
//     setErrors(validar({
//         ...state,
//         countiesID: [
//             ...state.countiesID,
//             e.target.value
//         ]
//     }));
// };

//     setErrors(validar({
//         ...state,
//         [e.target.name]: e.target.value
//     }));
// };
