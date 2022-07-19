import React from "react";
import Button from "@mui/material/Button";

const Buttons = ({ name, event, type }) => {
   return (
      <Button variant={type} onClick={event}>
         {name}
      </Button>
   );
};

export default Buttons;
