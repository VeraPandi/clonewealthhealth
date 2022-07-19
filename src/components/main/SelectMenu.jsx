import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { STATESCODE } from "../../services/STATES";

const SelectMenu = ({ array, name, event, value, width }) => {
   return (
      <Box
         component="form"
         sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
         }}
         noValidate
         autoComplete="off"
      >
         <FormControl variant="filled" sx={{ m: 1, minWidth: { width } }}>
            <InputLabel id="demo-simple-select-filled-label">{name}</InputLabel>
            <Select
               labelId="demo-simple-select-standard-label"
               id={`demo-simple-select-standard ${name}`}
               value={value}
               onChange={event}
               label={name}
               //    data-length={length}
               //    placeholder={placeholder}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               {array.map((item, i) => (
                  <MenuItem key={i} value={item} placeholder={i}>
                     {item}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   );
};

export default SelectMenu;
