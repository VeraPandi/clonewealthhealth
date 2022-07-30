import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
   const location = useLocation();

   return (
      <nav className="navigation">
         <Link
            to="/"
            className={
               location.pathname === "/"
                  ? "nav-link home active"
                  : "nav-link home"
            }
         >
            Create employee
         </Link>

         <Link
            to="/employees"
            className={
               location.pathname === "/employees"
                  ? "nav-link employees active"
                  : "nav-link employees"
            }
         >
            View employees
         </Link>
      </nav>
   );
};

export default Navigation;
