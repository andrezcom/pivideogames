
import axios from "axios"
import { useState, useEffect } from "react";




const FilterGenres = () => {
  const [genres, setGenres] = useState([{id:0, nombre:'All'}]);


    useEffect(() => {
      axios.get('http://localhost:3001/genres').then((response1) => {
        setGenres([...genres,...response1.data]);
        console.log(response1.data);

      }).catch((error) => {
        console.error("Error fetching data:", error);
      });

    }, []);




console.log(genres);
    // const handleFilter = (e) => {
    //     dispatch(filtergenres(e.target.value));
    // };
    return (
        <div className="filter">
            <h3>Filter by Genres</h3>
            <br/>
            <select>
                {
                genres.map((genre) => (
                    <option key={genre.id}
                        value={genre.nombre}>
                        {genre.nombre} </option>
                ))
            } </select>
        </div>
    );
};
export default FilterGenres;
