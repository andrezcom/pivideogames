import React from 'react'
import {useDispatch} from 'react-redux';
import { origin } from '../../redux/actions';

export const FilterOrigen = () => {

    const dispatch = useDispatch();

    const handleFilter = (e) => {
        console.log(e.target.value);
        dispatch(origin(e.target.value));
    };


    const opciones = ['All', 'BD', 'API']
    return (<div className="container">
        <select onChange={handleFilter}> {
            opciones.map((opcion, index) => (<option key={index}
                value={opcion}> {opcion} </option>))
        } </select>
    </div>);
}
