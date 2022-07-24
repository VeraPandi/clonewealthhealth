import React from "react";

const MainTitle = ({ title, id }) => {
   return (
      <h1 className="title" id={id}>
         {title}
      </h1>
   );
};

export default MainTitle;
