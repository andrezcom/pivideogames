
import axios from "axios"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterGenre } from "../../redux/actions";




const FilterGenres = () => {
  const [genres, setGenres] = useState([{id:0, nombre:'All'}]);
  const dispatch = useDispatch();

    useEffect(() => {
      axios.get('http://localhost:3001/genres').then((response1) => {
        setGenres([...genres,...response1.data]);

      }).catch((error) => {
        console.error("Error fetching data:", error);
      });

    }, []);


    const handleFilter = (e) => {
        dispatch(filterGenre(e.target.value));
    };


    return (
        <div className="filter">
            <h3>Filter by Genres</h3>
            <br/>
            <select onChange={handleFilter}>
                {
                genres.map((genre, index) => (
                    <option key={index}
                        value={genre.nombre}>
                        {genre.nombre} </option>
                ))
            } </select>
        </div>
    );
};
export default FilterGenres;
