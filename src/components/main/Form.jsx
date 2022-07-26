import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STATESNAME } from "../../services/STATES.js";
import { DEPARTMENTS } from "../../services/DEPARTMENTS.js";
import { employeeAdded, selectAllEmployees } from "../../features/slices.js";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import SelectMenu from "./SelectMenu.jsx";
import Buttons from "./Buttons.jsx";
import TextFields from "./TextFields.jsx";
import DatePickers from "./DatePickers.jsx";
import Subtitle from "../header/Subtitle.jsx";

const Form = () => {
   const dispatch = useDispatch();
   const employees = useSelector(selectAllEmployees);

   const [id, setId] = useState(0);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [startDate, setStartDate] = useState(null);
   const [department, setDepartment] = useState("");
   const [dateOfBirth, setDateOfBirth] = useState(null);
   const [streetAddress, setStreetAddress] = useState("");
   const [cityAddress, setCityAddress] = useState("");
   const [stateNameAddress, setStateNameAddress] = useState("");
   const [codeAddress, setCodeAddress] = useState("");

   const onIdChanged = () => setId(0);
   const onFirstNameChanged = (e) => setFirstName(e.target.value);
   const onLastNameChanged = (e) => setLastName(e.target.value);
   const onStartDateChanged = (e) => setStartDate(e.target.value);
   const onDepartmentChanged = (e) => setDepartment(e.target.value);
   const onDateOfBirthChanged = (e) => setDateOfBirth(e.target.value);
   const onStreetAddressChanged = (e) => setStreetAddress(e.target.value);
   const onCityAddressChanged = (e) => setCityAddress(e.target.value);
   const onStateNameAddressChanged = (e) => setStateNameAddress(e.target.value);
   const onCodeAddressChanged = (e) => setCodeAddress(e.target.value);

   const onSaveEmployee = () => {
      if (
         firstName &&
         lastName &&
         startDate &&
         department &&
         dateOfBirth &&
         streetAddress &&
         cityAddress &&
         stateNameAddress &&
         codeAddress
      ) {
         dispatch(
            employeeAdded({
               id: employees.length + 1,
               firstName,
               lastName,
               startDate: formatDate(new Date(startDate)),
               department,
               dateOfBirth: formatDate(new Date(dateOfBirth)),
               streetAddress,
               cityAddress,
               stateNameAddress,
               codeAddress,
            })
         );

         setFirstName("");
         setLastName("");
         setStartDate(null);
         setDepartment("");
         setDateOfBirth(null);
         setStreetAddress("");
         setCityAddress("");
         setStateNameAddress("");
         setCodeAddress("");
      }
   };

   const onResetFields = () => {
      setFirstName("");
      setLastName("");
      setStartDate(null);
      setDepartment("");
      setDateOfBirth(null);
      setStreetAddress("");
      setCityAddress("");
      setStateNameAddress("");
      setCodeAddress("");
   };

   // List of options displayed in the select menu
   const stateNameArray = STATESNAME.map((item, i) => item.stateName);

   // Get the state code to display in the placeholder
   const match = STATESNAME.find((obj) => obj.stateName === stateNameAddress);

   // Format date
   function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
   }
   function formatDate(date) {
      return [
         padTo2Digits(date.getMonth() + 1),
         padTo2Digits(date.getDate()),
         date.getFullYear(),
      ].join("/");
   }

   return (
      <section className="form-wrapper">
         <Subtitle subtitle="Create Employee" />

         <div className="form">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
               <div className="identity-fields">
                  <h3>Identity</h3>
                  <TextFields
                     type="text"
                     name="First Name"
                     value={firstName}
                     event={onFirstNameChanged}
                  />
                  <TextFields
                     type="text"
                     name="Last Name"
                     value={lastName}
                     event={onLastNameChanged}
                  />
                  <Stack margin="16px 0">
                     <DatePicker
                        label="Date Picker"
                        renderInput={(params) => <TextField {...params} />}
                        value={dateOfBirth}
                        onChange={(newValue) => setDateOfBirth(newValue)}
                     />
                  </Stack>
               </div>

               <div className="address-fields">
                  <h3>Address</h3>
                  <TextFields
                     type="text"
                     name="Street"
                     value={streetAddress}
                     event={onStreetAddressChanged}
                  />
                  <TextFields
                     type="text"
                     name="City"
                     value={cityAddress}
                     event={onCityAddressChanged}
                  />
                  <SelectMenu
                     height=""
                     width="100%"
                     margin="16px 0 8px"
                     array={stateNameArray}
                     name="State"
                     value={stateNameAddress}
                     event={onStateNameAddressChanged}
                     placeholder={match && match.stateCode}
                  />
                  <TextFields
                     type="text"
                     name="Zip Code"
                     value={codeAddress}
                     event={onCodeAddressChanged}
                  />
               </div>

               <div className="status-fields">
                  <h3>Status</h3>
                  <div className="fields">
                     <Stack margin="16px 0">
                        <DatePicker
                           label="Date Picker"
                           renderInput={(params) => <TextField {...params} />}
                           value={startDate}
                           onChange={(newValue) => setStartDate(newValue)}
                        />
                     </Stack>
                     <SelectMenu
                        height="56px"
                        width="100%"
                        margin=""
                        array={DEPARTMENTS}
                        name="Department"
                        value={department}
                        event={onDepartmentChanged}
                        placeholder=""
                     />
                  </div>
               </div>

               <div className="buttons">
                  <Stack spacing={2} direction="row">
                     <Buttons
                        className="submit-btn"
                        name="Save"
                        type="button"
                        event={onSaveEmployee}
                     />
                     <Buttons
                        className="reset-btn"
                        name="Reset"
                        type="button"
                        event={onResetFields}
                     />
                  </Stack>
               </div>
            </LocalizationProvider>
         </div>
      </section>
   );
};

export default Form;
