import React from "react";
import TextField from "@mui/material/TextField";

const TextFields = ({ name, value, event, type }) => {
   return (
      <TextField
         id={name}
         type={type}
         label={name}
         value={value}
         onChange={event}
         margin="normal"
         fullWidth
      />
   );
};

export default TextFields;
