import { useDispatch } from "react-redux";
import { filterContinent } from "../../../redux/actions";

const FilterContinent = () => {
  const dispatch = useDispatch();
  const continents = [
    "All",
    "Europe",
    "South America",
    "North America",
    "Africa",
    "Oceania",
    "Asia",
  ];
  const handleFilter = (e) => {
    dispatch(filterContinent(e.target.value));
  };
  return (
    <div className="filter">
      <h3>Filter by Continents</h3>
      <br />
      <select onChange={handleFilter}>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FilterContinent;
