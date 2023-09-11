import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderedRating } from "../../redux/actions";

const OrderedRating = () => {
  const [boolean, setBoolean] = useState(false);
  const dispatch = useDispatch();

  const handleButton = () => {
    const newValue = !boolean; // Invertir el valor actual
    setBoolean(newValue); // Actualizar el estado
    dispatch(orderedRating(newValue)); // Enviar el nuevo valor al estado global
  };

  return (
    <div className="container">
      <button onClick={handleButton}>{boolean ? "5 -> 0" : "0 -> 5"}</button>
    </div>
  );
};

export default OrderedRating;
