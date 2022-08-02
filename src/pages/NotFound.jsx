import React from "react";

const NotFound = () => {
   return (
      <div className="notFound">
         <main className="notFound-main">
            <div className="notFound-content">
               <div className="error-code">404</div>
               <h1 className="error-message">
                  Whoops ! The page you are looking could not be found...
               </h1>
            </div>
         </main>
      </div>
   );
};

export default NotFound;
