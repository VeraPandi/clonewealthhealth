import React from "react";
import Form from "../components/main/Form";
import Navigation from "../components/header/Navigation";
import Header from "../components/header/Header";
import SearchBar from "../components/main/SearchBar";

const Home = () => {
   return (
      <div className="page">
         <Header />
         <Navigation />
         <main className="main">
            <Form />
         </main>
      </div>
   );
};

export default Home;
