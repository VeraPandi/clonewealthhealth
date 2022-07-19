import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import enLocale from "date-fns/locale/fr";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const localeMap = {
   en: enLocale,
};

const DatePickers = ({ name, event, value }) => {
   return (
      <LocalizationProvider
         dateAdapter={AdapterDateFns}
         adapterLocale={localeMap["en"]}
      >
         <TextField
            id={name}
            type="date"
            label={name}
            value={value}
            InputLabelProps={{ shrink: true }}
            onChange={event}
         />
      </LocalizationProvider>
   );
};

export default DatePickers;
