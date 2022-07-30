import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SelectMenu = ({
   array,
   name,
   id,
   event,
   value,
   width,
   placeholder,
   height,
   margin,
}) => {
   return (
      <Box
         component="form"
         sx={{
            "& > :not(style)": {
               width: { width },
               height: { height },
               margin: { margin },
            },
            // Outline and label color
            "& .MuiInputLabel-root.Mui-focused": { color: "#000" },
            "& .MuiOutlinedInput-root.Mui-focused": {
               "& > fieldset": {
                  borderColor: "#93ad18",
               },
            },
         }}
         noValidate
         autoComplete="off"
      >
         <FormControl sx={{ width: { width }, height: { height } }}>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
               id={id}
               value={value}
               onChange={event}
               label={name}
               placeholder={placeholder}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               {array.map((item, i) => (
                  <MenuItem key={item} value={item}>
                     {item}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   );
};

export default SelectMenu;
