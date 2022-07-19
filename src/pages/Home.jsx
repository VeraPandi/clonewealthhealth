import React from "react";
import Form from "../components/main/Form";
import Navigation from "../components/header/Navigation";
import Subtitle from "../components/header/Subtitle";
import Header from "../components/header/Header";
import Table from "../components/main/Table";

const Home = () => {
   return (
      <div className="home-page">
         <Header />
         <Navigation />

         <main>
            <Subtitle subtitle="Create Employee" />
            <Form />
            <Table />
         </main>
      </div>
   );
};

export default Home;
