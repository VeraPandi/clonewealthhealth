import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickers = () => {
   const [selectedDate, setSelectedDate] = useState(null);

   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <Stack margin="16px 0">
            <DatePicker
               label="Date Picker"
               renderInput={(params) => <TextField {...params} />}
               value={selectedDate}
               onChange={(newValue) => setSelectedDate(newValue)}
            />
         </Stack>
      </LocalizationProvider>
   );
};

export default DatePickers;
