

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterRating } from '../../redux/actions';


function FilterRating() {

  const [maxRatings, setmaxRatings] = useState(0.0);

  const dispatch = useDispatch();

  const handlemaxRatingsChange = (e) => {
    setmaxRatings(e.target.value);
    dispatch(filterRating(e.target.value));
  };

  return (
    <div>
      <div>
        
        <p>Rating desde {maxRatings} hasta 5</p>

        <input 
        className='range'
          type="range"
          onChange={handlemaxRatingsChange}
          min={0}
          max={5}
          step={0.1}
          value={maxRatings}
          
        ></input>
      </div>
    </div>
  );
}

export default FilterRating;
