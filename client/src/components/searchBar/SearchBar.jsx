import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {searchVideo} from "../../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [nombre, setNombre] = useState('');

    const handleChange = (event) => {
        setNombre(() => {
            const nuevoNombre = event.target.value;
            dispatch(searchVideo(nuevoNombre));
            return nuevoNombre;
        });
    };
    return (
        <div>
            <input type='search'
                value={nombre}
                onChange={handleChange}/>
        </div>
    );
};

export default SearchBar;
