import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
   const location = useLocation();

   return (
      <nav className="navigation">
         <span className="navigation-title">View : </span>

         {location.pathname === "/" && (
            <Link to="/employees" className="employees-list-link">
               Current Employees
            </Link>
         )}

         {location.pathname === "/employees" && (
            <Link to="/" className="homepage-link">
               Home
            </Link>
         )}
      </nav>
   );
};

export default Navigation;
