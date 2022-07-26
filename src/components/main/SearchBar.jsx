import React, { useState } from "react";
import TextFields from "./TextFields";

const SearchBar = ({ array, setData }) => {
   const [searchText, setSearchText] = useState("");

   const excludeColumns = ["id"];

   const handleChange = (value) => {
      setSearchText(value);
      filterData(value);
   };

   const filterData = (value) => {
      const lowerCaseValue = value.toLowerCase().trim();

      if (!lowerCaseValue) {
         setData(array);
      } else {
         const filteredData = array.filter((item) => {
            return Object.keys(item).some((key) => {
               return excludeColumns.includes(key)
                  ? false
                  : item[key].toString().toLowerCase().includes(lowerCaseValue);
            });
         });

         setData(filteredData);
      }
   };

   return (
      <div className="search-bar">
         <TextFields
            type="search"
            name="Search"
            value={searchText}
            event={(e) => handleChange(e.target.value)}
         />
      </div>
   );
};

export default SearchBar;
