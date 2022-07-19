import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STATESNAME, STATESCODE } from "../../services/STATES.js";
import { MOCK_DATA } from "../../services/MOCK_DATA.js";
import { DEPARTMENTS } from "../../services/DEPARTMENTS.js";
import { employeeAdded } from "../../features/slices.js";
import { selectAllEmployees } from "../../features/slices";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SelectMenu from "./SelectMenu.jsx";
import Buttons from "./Buttons.jsx";
import TextFields from "./TextFields.jsx";
import DatePickers from "./DatePickers.jsx";

const Form = () => {
   const dispatch = useDispatch();
   const employees = useSelector(selectAllEmployees);

   const [id, setId] = useState(0);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [startDate, setStartDate] = useState("");
   const [department, setDepartment] = useState("");
   const [dateOfBirth, setDateOfBirth] = useState("");
   const [streetAddress, setStreetAddress] = useState("");
   const [cityAddress, setCityAddress] = useState("");
   const [stateAddress, setStateAddress] = useState("");
   //    const [stateCode, setStateCode] = useState("");
   const [codeAddress, setCodeAddress] = useState("");

   const onIdChanged = () => setId(employees.length + 1);
   const onFirstNameChanged = (e) => setFirstName(e.target.value);
   const onLastNameChanged = (e) => setLastName(e.target.value);
   const onStartDateChanged = (e) => setStartDate(e.target.value);
   const onDepartmentChanged = (e) => setDepartment(e.target.value);
   const ondateOfBirthChanged = (e) => setDateOfBirth(e.target.value);
   const onstreetAddressChanged = (e) => setStreetAddress(e.target.value);
   const oncityAddressChanged = (e) => setCityAddress(e.target.value);
   const onstateAddressChanged = (e) => setStateAddress(e.target.value);
   //    const onstateCodeChanged = (e) => setStateCode(e.target.value);
   const oncodeAddressChanged = (e) => setCodeAddress(e.target.value);

   //Format Date
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
   //

   const onSavePostClicked = () => {
      if (
         firstName &&
         lastName &&
         startDate &&
         department &&
         dateOfBirth &&
         streetAddress &&
         cityAddress &&
         stateAddress &&
         //  stateCode &&
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
               stateAddress,
               //    stateCode,
               codeAddress,
            })
         );
         setFirstName("");
         setLastName("");
         setStartDate("");
         setDepartment("");
         setDateOfBirth("");
         setStreetAddress("");
         setCityAddress("");
         setStateAddress("");
         //  setStateCode("");
         setCodeAddress("");
      }
   };

   return (
      <div className="form">
         <div className="identity">
            <h4>Identity</h4>
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
            <DatePickers
               name="Date Of Birth"
               value={dateOfBirth}
               event={ondateOfBirthChanged}
            />
         </div>

         <div className="address">
            <h4>Address</h4>
            <TextFields
               type="text"
               name="Street"
               value={streetAddress}
               event={onstreetAddressChanged}
            />
            <TextFields
               type="text"
               name="City"
               value={cityAddress}
               event={oncityAddressChanged}
            />
            <SelectMenu
               width={320}
               array={STATESNAME}
               name="State"
               value={stateAddress}
               //    length={stateCode}
               //    placeholder={stateCode}
               event={onstateAddressChanged}
            />
            <TextFields
               type="text"
               name="Zip Code"
               value={codeAddress}
               event={oncodeAddressChanged}
            />
         </div>

         <div className="status">
            <h4>Status</h4>
            <DatePickers
               name="Start Date"
               value={startDate}
               event={onStartDateChanged}
            />
            <SelectMenu
               width={520}
               array={DEPARTMENTS}
               name="Department"
               value={department}
               event={onDepartmentChanged}
            />
         </div>

         <div className="buttons">
            <Stack spacing={2} direction="row">
               <Buttons
                  type="contained"
                  name="Save"
                  event={onSavePostClicked}
               />
               <Buttons type="outlined" name="Reset" />
            </Stack>
         </div>
      </div>
   );
};

export default Form;
