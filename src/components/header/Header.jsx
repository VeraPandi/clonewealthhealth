import React from "react";
import MainTitle from "../header/MainTitle";
import logo from "../../assets/logo.png";

const Header = () => {
   return (
      <header className="header">
         <img className="logo" src={logo} alt="logo de SportSee" />
         <MainTitle title="Wealth Health" id="society-name" />
         <MainTitle title="HRnet" id="dashboard-name" />
      </header>
   );
};

export default Header;
