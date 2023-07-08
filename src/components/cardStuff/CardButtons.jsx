import React, { useContext, useState } from "react";
// no podia pasarle el ButtonOutlinedDefault que tenia ahi modularizado en la carpeta /buttons. simplemente no me funcionaba las funcionas 'handle'
import ButtonOutlinedDefault from "../buttons/ButtonOutlinedDefault";
import { Input, Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";

const CardButtons = () => {
  const [count, setCount] = useContext(CartContext);
  const [state, setState] = useState(0);
  
  const handleAddClick = () => {
    setCount(count + 1);
    setState(state + 1);
  };
  const handleLessClick = () => {
    setCount(count - 1);
    setState(state - 1);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button variant="outlined" onClick={handleLessClick}>
        -1
      </Button>

      <Input
        type="number"
        style={{ width: "4.5rem", height: "2.2rem", textAlign: "center" }}
        value={state}
      />
      <Button variant="outlined" onClick={handleAddClick}>
        +1
      </Button>
    </div>
  );
};

export default CardButtons;
