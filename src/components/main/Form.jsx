import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STATESNAME } from "../../services/mocks/STATES.js";
import { DEPARTMENTS } from "../../services/mocks/DEPARTMENTS.js";
import { employeeAdded, selectAllEmployees } from "../../features/slices.js";
import store from "../../utils/store.js";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import SelectMenu from "./SelectMenu.jsx";
import Buttons from "./Buttons.jsx";
import Textfield from "./Textfield.jsx";
import Datepicker from "./Datepicker.jsx";
import { Modal } from "react-modal-vpdi";

/**
 * Displays an add employee form
 *
 * States for form submission
 * @const {array} employees - All information about each employee
 * @const {number} - id
 * @const {string} - firstName, lastName, department, streetAddress, cityAddress, stateNameAddress, stateCodeAddress, codeAddress
 * @const {object} - startDate, dateOfBirth
 * @const {array} stateNameArray - Full state names
 * @const {object} matchState - ID, name and code of a selected state
 * @function formatDate - Formats the date of the date picker
 * @const {boolean} error - "True" if an empty field is detected when the form is submitted
 * @const {string} helperText - Empty field error message
 *
 * States for the launch of the modal when an employee is created
 * @const {boolean} modalIsOpen - Modal open state
 * @const {object} currentEmployees - Number of current employees in the store (after submitting a new employee)
 * @const {object} previousEmployees - Number of previous employees in the store (before submitting a new employee)
 *
 * @return {JSX.Element} - Form
 */

const Form = () => {
   const dispatch = useDispatch();
   const employees = useSelector(selectAllEmployees);

   // Form fields :
   const [id, setId] = useState(0);
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [startDate, setStartDate] = useState(null);
   const [department, setDepartment] = useState("");
   const [dateOfBirth, setDateOfBirth] = useState(null);
   const [streetAddress, setStreetAddress] = useState("");
   const [cityAddress, setCityAddress] = useState("");
   const [stateNameAddress, setStateNameAddress] = useState("");
   const [stateCodeAddress, setStateCodeAddress] = useState("");
   const [codeAddress, setCodeAddress] = useState("");
   // Form field error messages :
   const [error, setError] = useState(false);
   const [helperText, setHelperText] = useState("");
   // Modal :
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [currentEmployees, setCurrentEmployees] = useState(store.getState());
   const [previousEmployees, setPreviousEmployees] = useState(store.getState());

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

   // List of options displayed in the select menu
   const stateNameArray = STATESNAME.map((item) => item.stateName);

   // Get the state code to display in the table
   const matchState = STATESNAME.find(
      (obj) => obj.stateName === stateNameAddress
   );

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
               stateCodeAddress: matchState.stateCode,
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
         setStateCodeAddress("");
         setCodeAddress("");

         setError(false);
         setHelperText("");
      } else {
         setError(true);
         setHelperText("This field is empty");
      }

      // States to launch the modal when an employee is created :
      setModalIsOpen(true);
      setCurrentEmployees(store.getState());
      setPreviousEmployees(currentEmployees);
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
      setStateCodeAddress("");
      setCodeAddress("");

      setError(false);
      setHelperText("");
   };

   const closeModal = () => {
      setModalIsOpen(false);
   };

   /**
    * Get a formatted date
    * @function padTo2Digits - Sets a fixed string length for the date
    * @function formatDate - Gets the month, day, and year for the date
    */

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
         <div className="form">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
               <div className="identity-fields">
                  <h3>Identity</h3>
                  <Textfield
                     type="text"
                     name="First Name"
                     value={firstName}
                     error={error}
                     helpertext={helperText}
                     event={onFirstNameChanged}
                  />
                  <Textfield
                     type="text"
                     name="Last Name"
                     value={lastName}
                     error={error}
                     helpertext={helperText}
                     event={onLastNameChanged}
                  />
                  <Datepicker
                     name="Date Of Birth"
                     value={dateOfBirth}
                     setValue={setDateOfBirth}
                     error={error}
                     helpertext={helperText}
                     margin="16px 0"
                     marginError="16px 0"
                  />
               </div>

               <div className="address-fields">
                  <h3>Address</h3>
                  <Textfield
                     type="text"
                     name="Street"
                     value={streetAddress}
                     error={error}
                     helpertext={helperText}
                     event={onStreetAddressChanged}
                  />
                  <Textfield
                     type="text"
                     name="City"
                     value={cityAddress}
                     error={error}
                     helpertext={helperText}
                     event={onCityAddressChanged}
                  />
                  <SelectMenu
                     id="State"
                     height=""
                     width="100%"
                     margin="16px 0 8px"
                     array={stateNameArray}
                     name="State"
                     value={stateNameAddress}
                     error={error}
                     helpertext={helperText}
                     event={onStateNameAddressChanged}
                  />
                  <Textfield
                     type="text"
                     name="Zip Code"
                     value={codeAddress}
                     error={error}
                     helpertext={helperText}
                     event={onCodeAddressChanged}
                  />
               </div>

               <div className="status-fields">
                  <h3>Status</h3>
                  <div className="fields">
                     <Datepicker
                        name="Start Date"
                        value={startDate}
                        setValue={setStartDate}
                        error={error}
                        helpertext={helperText}
                        margin=""
                        marginError=""
                     />
                     <SelectMenu
                        id="Department"
                        height="56px"
                        width="100%"
                        margin=""
                        array={DEPARTMENTS}
                        name="Department"
                        value={department}
                        error={error}
                        helpertext={helperText}
                        event={onDepartmentChanged}
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

                  {modalIsOpen &&
                     currentEmployees.employees.length >
                        previousEmployees.employees.length && (
                        <Modal
                           modalState={modalIsOpen}
                           setModalState={closeModal}
                           text="Employee created!"
                        />
                     )}
               </div>
            </LocalizationProvider>
         </div>
      </section>
   );
};

export default Form;
