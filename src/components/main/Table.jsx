import React from "react";
import { useSelector } from "react-redux";
import { selectAllEmployees } from "../../features/slices";
import { DataGrid } from "@mui/x-data-grid";
// import SearchBar from "./SearchBar";
import { MOCK_DATA } from "../../services/MOCK_DATA";

const Table = () => {
   const employees = useSelector(selectAllEmployees);

   const columns = [
      {
         field: "firstName",
         headerName: "First name",
         width: 130,
      },
      {
         field: "lastName",
         headerName: "Last name",
         width: 130,
      },
      {
         field: "startDate",
         headerName: "Start Date",
         width: 130,
      },
      {
         field: "department",
         headerName: "Department",
         width: 130,
      },
      {
         field: "dateOfBirth",
         headerName: "Date of Birth",
         width: 130,
      },
      {
         field: "streetAddress",
         headerName: "Street",
         width: 130,
      },
      { field: "cityAddress", headerName: "City", width: 130 },
      {
         field: "stateAddress",
         headerName: "State",
         width: 130,
      },
      {
         field: "codeAddress",
         headerName: "Zip Code",
         width: 130,
      },
   ];

   return (
      <main>
         <div style={{ height: 300, width: "100%", overflow: "visible" }}>
            {/* <SearchBar array={employees} /> */}
            <DataGrid
               rows={employees}
               columns={columns}
               pageSize={10}
               rowsPerPageOptions={[10, 20, 50]}
            />
         </div>
      </main>
   );
};

// const test = [
//    {
//       lastName: "Gwynne",
//       startDate: "01/04/2013",
//       department: "Engineering",
//    },
//    {
//       lastName: "Dudley",
//       startDate: "05/25/2022",
//       department: "Engineering",
//    },
//    {
//       lastName: "Hills",
//       startDate: "08/25/2010",
//       department: "Legal",
//    },
// ];

export default Table;
