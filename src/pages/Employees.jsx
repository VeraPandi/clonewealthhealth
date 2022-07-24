import React from "react";
import Table from "../components/main/Table";
import Header from "../components/header/Header";
import Navigation from "../components/header/Navigation";

const EmployeeList = () => {
   return (
      <div className="employees-page">
         <Header />
         <Navigation />
         <main className="main">
            <Table />
         </main>
      </div>
   );
};

export default EmployeeList;
