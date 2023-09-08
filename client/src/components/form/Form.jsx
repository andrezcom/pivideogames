import React from "react";

// import { createActivity } from "../../redux/actions";
// import { useDispatch } from "react-redux";

const [state, setState] = React.useState({
	nombre: '',
	descripcion: '',
	plataformas: '',
	imagen: '',
	lanzamiento: '',
	rating: '',
	genres: []
});

const [errors, setErrors] = React.useState({
	nombre: '',
	descripcion: '',
	plataformas: [],
	imagen: '',
	lanzamiento: '',
	rating: '',
	genres: []
});

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
// const handleChange = (e) => {
//     setState({
//         ...state,
//         [e.target.name]: e.target.value
//     });

//     setErrors(validar({
//         ...state,
//         [e.target.name]: e.target.value
//     }));
// };
const validar = (data) => {
    let errors = {};

    if (data.nombre.length < 1) {
        console.log(data);
        errors.nombre = "Nombre demasiado corto";
    }

    if (data.descripcion.length < 10) {
        errors.dificultad = "dificultad demasiado corta";
    }

    if (data.duracion === 0) {
        errors.duracion = "duracion deben ser diferente a 0";
    }

    if (data.temporada === "Ninguna") {
        errors.temporada = "Escoja una temporada";
    }

    if (data.countiesID.length < 1) {
        errors.temporada = "Debe asociar un país minimo";
    }
    return errors;
};

const Formulario = () => { // const dispatch = useDispatch();

    const dificultades = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5"
    ];
    const duraciones = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.nombre && !errors.dificultad && !errors.duracion && !errors.temporada && !errors.countiesID) {
            console.log("ok");
            // dispatch(createActivity(state));
        }
    };

    return (
        <div>
            <form action=""
                onSubmit={handleSubmit}>
                <label htmlFor="">Nombre:
                </label>
                <input type="text" name="nombre"
                    onChange={handleChange}/> {
                errors.nombre ? <p>{
                    errors.nombre
                }</p> : null
            }
                <label htmlFor="">dificultad:
                </label>
                <select onChange={handleChange}>
                    {
                    dificultades.map((dificultad) => (
                        <option key={dificultad}
                            value={dificultad}>
                            {dificultad} </option>
                    ))
                } </select>
                {
                errors.dificultad ? <p>{
                    errors.dificultad
                }</p> : null
            }
                <label htmlFor="">duracion:
                </label>
                <select onChange={handleChange}>
                    {
                    duraciones.map((duracion) => (
                        <option key={duracion}
                            value={duracion}>
                            {duracion} </option>
                    ))
                } </select>
                {
                errors.duracion ? <p>{
                    errors.duracion
                }</p> : null
            }
                <label htmlFor="">temporada:
                </label>
                <input type="text" name="temporada"
                    onChange={handleChange}/> {
                errors.temporada ? <p>{
                    errors.temporada
                }</p> : null
            }
                <input type="text" name="countiesID"
                    onChange={handleChange}/> {
                errors.countiesID ? <p>{
                    errors.countiesID
                }</p> : null
            }
                <button onClick={handlerAsociar}>Asociar Paises</button>
                <button type="submit">Crear Actividad</button>
            </form>
        </div>
    );
};

export default Formulario;
