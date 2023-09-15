import { useState } from "react";
import { useDispatch } from "react-redux";
import { ordered } from "../../redux/actions";

const Ordered = () => {
  const [boolean, setBoolean] = useState(false);
  const dispatch = useDispatch();

  const handleButton = () => {
    const newValue = !boolean;
    setBoolean(newValue); 
    dispatch(ordered(newValue));
  };

  return (
    <div className="container">
      <button onClick={handleButton}>{boolean ? "Z -> A" : "A -> Z"}</button>
    </div>
  );
};

export default Ordered;
