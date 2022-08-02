import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

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
   error,
   helpertext,
}) => {
   return value ? (
      <Box
         component="form"
         sx={{
            "& > :not(style)": {
               width: { width },
               height: { height },
               margin: { margin },
            },
            // Outline and label color
            "& .MuiInputLabel-root": { color: "#0009" },
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
            <InputLabel
               sx={error ? { color: "#d32f2f" } : { color: "#0009" }}
               id="demo-simple-select-label"
            >
               {name}
            </InputLabel>
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
               {array.map((item) => (
                  <MenuItem key={item} value={item}>
                     {item}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </Box>
   ) : (
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
            <InputLabel
               sx={error ? { color: "#d32f2f" } : { color: "#0009" }}
               id="demo-simple-select-label"
            >
               {name}
            </InputLabel>
            <Select
               id={id}
               value={value}
               error={error}
               onChange={event}
               label={name}
               placeholder={placeholder}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               {array.map((item) => (
                  <MenuItem key={item} value={item}>
                     {item}
                  </MenuItem>
               ))}
            </Select>

            <FormHelperText sx={{ color: "#d32f2f" }}>
               {helpertext}
            </FormHelperText>
         </FormControl>
      </Box>
   );
};

export default SelectMenu;
