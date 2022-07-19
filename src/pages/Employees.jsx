import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/main/Table";
import Subtitle from "../components/header/Subtitle";

const EmployeeList = () => {
   return (
      <div className="employees-page">
         <Link to="/" className="back-home-link">
            Back home
         </Link>
         <main>
            <Subtitle subtitle="Current Employees" />
            <Table />
         </main>
      </div>
   );
};

export default EmployeeList;
