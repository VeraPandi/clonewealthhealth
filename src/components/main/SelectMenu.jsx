import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SelectMenu = ({
   array,
   name,
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
         }}
         noValidate
         autoComplete="off"
      >
         <FormControl sx={{ width: { width }, height: { height } }}>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id={`demo-simple-select ${name}`}
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
