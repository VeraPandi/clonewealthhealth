import React from "react";

const Buttons = ({ name, event, type, className }) => {
   return (
      <button type={type} className={className} onClick={event}>
         {name}
      </button>
   );
};

export default Buttons;
