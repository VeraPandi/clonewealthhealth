import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import enLocale from "date-fns/locale/en-US";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const localeMap = {
   en: enLocale,
};

const DatePickers = ({ name, event, value }) => {
   const [locale, setLocale] = useState("en");
   const [datePickerValue, setDatePickerValue] = useState(new Date());

   return (
      <LocalizationProvider
         dateAdapter={AdapterDateFns}
         adapterLocale={localeMap[locale]}
      >
         <Stack margin="16px 0">
            <DatePicker
               value={datePickerValue}
               onChange={(newValue) => setDatePickerValue(newValue)}
               renderInput={(params) => <TextField {...params} />}
            />
         </Stack>
      </LocalizationProvider>
   );
};

export default DatePickers;
