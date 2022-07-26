import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllEmployees } from "../../features/slices";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Subtitle from "../header/Subtitle.jsx";
import SearchBar from "./SearchBar";

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

         <Subtitle subtitle="Current employees" />
         <main className="table-wrapper">
            <div
               className="table"
               style={{
                  height:
                     (pageSize === 5 && 414) ||
                     (pageSize === 10 && 714) ||
                     (pageSize === 20 && 1314),
                  overflow: "visible",
                  width: "100%",
                  maxWidth: "1478px",
                  boxShadow: "6px 6px 5px #6f85093d",
                  borderRadius: 20,
               }}
            >
               <Box
                  sx={{
                     height: "100%",
                     width: "100%",
                     "& .firstName,.lastName,.startDate,.department,.dateOfBirth,.streetAddress,.cityAddress,.stateNameAddress,.codeAddress":
                        {
                           backgroundColor: "#b3bb99",
                           color: "#1e2600",
                           textTransform: "uppercase",
                           fontFamily: "Montserrat",
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
                        backgroundColor: "#fff",
                        borderRadius: "0 0 20px 20px",
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
         </main>
      </>
   );
};

export default Table;
