import { useState } from "react";
import { useDispatch } from "react-redux";
import { ordered } from "../../redux/actions";

const Ordered = () => {
  const [boolean, setBoolean] = useState(false);
  const dispatch = useDispatch();

  const handleButton = () => {
    const newValue = !boolean; // Invertir el valor actual
    setBoolean(newValue); // Actualizar el estado
    dispatch(ordered(newValue)); // Enviar el nuevo valor al estado global
  };

  return (
    <div className="container">
      {console.log(boolean)}
      <button onClick={handleButton}>{boolean ? "Z -> A" : "A -> Z"}</button>
    </div>
  );
};

export default Ordered;
