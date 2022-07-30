import React from "react";
import TextField from "@mui/material/TextField";

const TextFields = ({ name, value, event, type }) => {
   return (
      <TextField
         sx={{
            // Outline and label color
            "& .MuiInputLabel-root.Mui-focused": { color: "#000" },
            "& .MuiOutlinedInput-root.Mui-focused": {
               "& > fieldset": {
                  borderColor: "#93ad18",
               },
            },
         }}
         id={name}
         type={type}
         label={name}
         value={value}
         onChange={event}
         margin="normal"
      />
   );
};

export default TextFields;
