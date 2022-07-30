import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Sidebar = () => {
   return (
      <section className="sidebar">
         <Header />
         <Navigation />
      </section>
   );
};

export default Sidebar;
