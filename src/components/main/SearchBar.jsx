import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MOCK_DATA } from "../../services/MOCK_DATA";

const SearchBar = ({ array }) => {
   return (
      <Autocomplete
         disablePortal
         id="combo-box-demo"
         options={array.map((option) => option.lastName)}
         sx={{ width: 300 }}
         renderInput={(params) => (
            <TextField {...params} label="Search an employee" />
         )}
      />
   );
};

export default SearchBar;
