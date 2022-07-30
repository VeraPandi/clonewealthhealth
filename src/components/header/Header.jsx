import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
   return (
      <header className="header">
         <div className="logo-container">
            <img className="logo" src={logo} alt="logo de SportSee" />
         </div>
         <h1 className="title" id="society-name">
            Wealth Health
         </h1>
         <h2 className="title" id="dashboard-name">
            HRnet
         </h2>
      </header>
   );
};

export default Header;
