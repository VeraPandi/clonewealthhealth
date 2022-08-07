import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllEmployees } from "../../features/slices";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";

/**
 * Displays a table of current employees
 * @const {array} employees - List of all employees displayed in the table
 * @const {array} data - List of filtered employees
 * @const {number} pageSize - Number of rows displayed in the table
 * @const {array} columns - Columns in the table
 * @return {JSX.Element} - Table
 */

const Table = () => {
   const employees = useSelector(selectAllEmployees);

   const [data, setData] = useState(employees);
   const [pageSize, setPageSize] = useState(5);

   const columns = [
      {
         field: "firstName",
         headerName: "First name",
         headerClassName: "firstName",
         width: 150,
      },
      {
         field: "lastName",
         headerName: "Last name",
         headerClassName: "lastName",
         width: 150,
      },
      {
         field: "startDate",
         headerName: "Start Date",
         headerClassName: "startDate",
         width: 150,
      },
      {
         field: "department",
         headerName: "Department",
         headerClassName: "department",
         width: 220,
      },
      {
         field: "dateOfBirth",
         headerName: "Date of Birth",
         headerClassName: "dateOfBirth",
         width: 150,
      },
      {
         field: "streetAddress",
         headerName: "Street",
         headerClassName: "streetAddress",
         width: 240,
      },
      {
         field: "cityAddress",
         headerName: "City",
         headerClassName: "cityAddress",
         width: 160,
      },
      {
         field: "stateNameAddress",
         headerName: "State",
         headerClassName: "stateNameAddress",
         width: 160,
      },
      {
         field: "codeAddress",
         headerName: "Zip Code",
         headerClassName: "codeAddress",
         width: 96,
      },
   ];

   return (
      <>
         {data.length < employees.length ? (
            <SearchBar array={employees} setData={setData} />
         ) : (
            <SearchBar array={data} setData={setData} />
         )}

         <section className="table-wrapper">
            <div
               className="table"
               style={{
                  height:
                     (pageSize === 5 && 414) ||
                     (pageSize === 10 && 714) ||
                     (pageSize === 20 && 1314),
                  width: "100%",
                  maxWidth: "1478px",
                  overflow: "visible",
               }}
            >
               <Box
                  sx={{
                     height: "100%",
                     width: "100%",
                     "& .firstName,.lastName,.startDate,.department,.dateOfBirth,.streetAddress,.cityAddress,.stateNameAddress,.codeAddress":
                        {
                           fontSize: "15px",
                           textTransform: "uppercase",
                           color: "#fff",
                           backgroundColor: "#596e07",
                        },
                  }}
               >
                  <DataGrid
                     initialState={{
                        pagination: {
                           pageSize: 5,
                        },
                     }}
                     style={{
                        height: "100%",
                        overflow: "visible",
                        borderRadius: 20,
                        borderColor: "transparent",
                        backgroundColor: "#fff",
                     }}
                     rows={data}
                     columns={columns}
                     pageSize={pageSize}
                     onPageSizeChange={(newPageSize) =>
                        setPageSize(newPageSize)
                     }
                     rowsPerPageOptions={[5, 10, 20]}
                     pagination
                     rowHeight={60}
                     {...data}
                  />
               </Box>
            </div>
         </section>
      </>
   );
};

export default Table;
