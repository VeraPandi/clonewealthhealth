import { createSlice } from "@reduxjs/toolkit";
import { MOCK_DATA } from "../services/MOCK_DATA";
const initialState = MOCK_DATA;

const employeesSlice = createSlice({
   name: "employees",
   initialState,
   reducers: {
      employeeAdded(state, action) {
         state.push(action.payload);
      },
   },
});

export const selectAllEmployees = (state) => state.employees;
export const { employeeAdded } = employeesSlice.actions;
export default employeesSlice.reducer;
