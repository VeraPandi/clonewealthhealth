import React from "react";
import TextField from "@mui/material/TextField";

const Textfield = ({ name, value, event, type, error, helpertext }) => {
   return value ? (
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
   ) : (
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
         error={error}
         helperText={helpertext}
         onChange={event}
         margin="normal"
      />
   );
};

export default Textfield;
