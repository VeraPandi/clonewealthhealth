import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
   return (
      <nav>
         <Link to="/employees" className="employees-list-link">
            View Current Employees
         </Link>
      </nav>
   );
};

export default Navigation;
