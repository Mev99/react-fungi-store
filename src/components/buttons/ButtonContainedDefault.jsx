import React from "react";
import { Button } from "@mui/material";

const ButtonContainedDefault = ({ text }) => {
  return (
    <div>
      <Button variant="contained">{text}</Button>
    </div>
  );
};

export default ButtonContainedDefault;
